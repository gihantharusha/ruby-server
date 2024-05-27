const Remember = require("./remembermodel");
const Todo = require("./todomodel");
const RememberMe = require("./remembermemodel");

////////////////////////////////////////////////

const remember = (req, res) => {
  const data = " " + req.query.data;

  let simpleData = data.toLowerCase();
  let withoutSimble = simpleData.replace(/[^a-zA-Z ]/g, "");
  let withoutHey = withoutSimble.replace("hey ", "");
  let withoutHello = withoutHey.replace("hello ", "");
  let withoutHi = withoutHello.replace("hi ", "");
  let withoutRuby = withoutHi.replace(" ruby ", "");
  let whitoutRemember = withoutRuby.replace("remember ", "");

  let itoYou = whitoutRemember.replace(" i ", " you ");
  let mytoYour = itoYou.replace(" my ", " your ");

  let withoutWhiteSpace = mytoYour.trim();

  const remember = new Remember({
    title: req.query.title,
    data: withoutWhiteSpace,
  });

  remember
    .save()
    .then((response) => console.log(response))
    .catch((e) => console.log(e));
};

////////////////////////////////////////////////

const searchData = (req, res) => {
  const input = " " + req.query.data;

  // text process
  const simple = input.toLowerCase();
  const iToyou = simple.replace(" i ", " you ");
  const myToyour = iToyou.replace(" my ", " your ");
  const whiteSpapceremove = myToyour.trim();

  Remember.find()
    .then((response) => {
      const trueData = new Array();
      response.map((e) => {
        if (" " + e.data.search(whiteSpapceremove) >= 0) {
          trueData.push(e);
        } else {
        }
      });

      res.send(trueData);
    })
    .catch((e) => console.log(e));
};

////////////////////////////////////////////////

const addTodo = (req, res) => {
  const title = " " + req.query.title;

  const simpleTitle = title.toLowerCase();

  const iToyouTitle = simpleTitle.replace(" i ", " you");
  const myToyourTitle = iToyouTitle.replace(" my ", " your ");
  const removewhitespaceTitle = myToyourTitle.trim();

  const description = " " + req.query.des;

  const simpleDes = description.toLowerCase();

  const iToyouDes = simpleDes.replace(" i ", " you ");
  const myToyourDes = iToyouDes.replace(" my ", " your ");
  const removewhitespaceDes = myToyourDes.trim();

  const date = req.query.date;

  const todo = new Todo({
    title: removewhitespaceTitle,
    description: removewhitespaceDes,
    finalDate: date,
  });

  todo
    .save()
    .then((response) => console.log(response))
    .catch((e) => console.log(e));
};

////////////////////////////////////////////////

const getAllTodo = (req, res) => {
  Todo.find()
    .then((response) => res.send(response))
    .catch((e) => res.send(e));
};

////////////////////////////////////////////////

const viewTodo = (req, res) => {
  const dateobj = new Date();
  const date = dateobj.getDate();
  const year = dateobj.getFullYear();
  const month = dateobj.getMonth();


    Todo.find({ finalDate: `${year}/${month + 1}/${date}` })
      .then((response) => res.send(response))
      .catch((e) => console.log(e));
  
};

////////////////////////////////////////////////

const addRememberMe = (req, res) => {
  const data = " " + req.query.data;
  const date = req.query.date;

  const simple = data.toLowerCase()
  const iToyou = simple.replace(" i ", "  you ")
  const myToyour = iToyou.replace(" my ", " your ")

  const rememberMe = new RememberMe({
    date: date,
    data: myToyour
  })

  rememberMe.save()
  .then(response=>{
    console.log(response)
  })
  .catch(e=>console.log(e))
};

const getRememberMe = (req, res) => {
  const dateobj = new Date();
  const year = dateobj.getFullYear();
  const month = dateobj.getMonth();
  const date = dateobj.getDate();

  RememberMe.find({ date: `${year}/${month + 1}/${date}` })
    .then((response) => {
      res.send(response);
    })
    .catch((e) => console.log(e));
};

module.exports = {
  remember,
  addTodo,
  getAllTodo,
  viewTodo,
  searchData,
  addRememberMe,
  getRememberMe,
};
