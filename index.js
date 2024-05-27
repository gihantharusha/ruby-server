const app = require("./server");
const db = require("./db");
const contraller = require("./contraller");

app.post("/remember", (req, res) => {
  contraller.remember(req, res);
});

app.get("/searchDate", (req, res) => {
  contraller.searchData(req, res);
});

app.post("/addTodo", (req, res) => {
  contraller.addTodo(req, res);
});

app.get("/viewAllTodo", (req, res) => {
  contraller.getAllTodo(req, res);
});

app.get("/viewTodo", (req, res) => {
  contraller.viewTodo(req, res);
});

app.post("/addRememberMe", (req, res) => {
  contraller.addRememberMe(req, res);
});

app.get("/getRememberMe", (req, res) => {
  contraller.getRememberMe(req, res);
});
