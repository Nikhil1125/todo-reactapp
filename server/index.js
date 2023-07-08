const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors");
const app = express();

const mysql = require("mysql");
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "CRUDDatabase",
});
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/gethealth", (req, res) => {
  const sqlSelect = "SELECT * FROM healthhygiene";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});
app.get("/api/getcommunication", (req, res) => {
  const sqlSelect = "SELECT * FROM communication";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});
app.get("/api/getpresentation", (req, res) => {
  const sqlSelect = "SELECT * FROM presentation";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});
app.get("/api/getphysical", (req, res) => {
  const sqlSelect = "SELECT * FROM physical";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});
app.get("/api/gettechnical", (req, res) => {
  const sqlSelect = "SELECT * FROM technical";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});
app.post("/api/health", (req, res) => {
  const uname = req.body.uname;
  const task = req.body.task;

  const sqlInsert =
    "INSERT INTO healthhygiene(uname,task) VALUES(?,?)";
  db.query(sqlInsert, [uname, task], (err, result) => {
    console.log(result);
  });
});
app.post("/api/communication", (req, res) => {
  const uname = req.body.uname;
  const task = req.body.task;

  const sqlInsert = "INSERT INTO communication(uname,task) VALUES(?,?)";
  db.query(sqlInsert, [uname, task], (err, result) => {
    console.log(result);
  });
});
app.post("/api/physical", (req, res) => {
  const uname = req.body.uname;
  const task = req.body.task;

  const sqlInsert = "INSERT INTO physical(uname,task) VALUES(?,?)";
  db.query(sqlInsert, [uname, task], (err, result) => {
    console.log(result);
  });
});
app.post("/api/presentation", (req, res) => {
  const uname = req.body.uname;
  const task = req.body.task;

  const sqlInsert = "INSERT INTO presentation(uname,task) VALUES(?,?)";
  db.query(sqlInsert, [uname, task], (err, result) => {
    console.log(result);
  });
});
app.post("/api/technical", (req, res) => {
  const uname = req.body.uname;
  const task = req.body.task;

  const sqlInsert = "INSERT INTO technical(uname,task) VALUES(?,?)";
  db.query(sqlInsert, [uname, task], (err, result) => {
    console.log(err);
  });
});

app.delete("/api/deletehealth/:task", (req, res) => {
  const name = req.params.task;
  const sqlDelete = "DELETE FROM healthhygiene WHERE task = ? ";

  db.query(sqlDelete, name, (err, result) => {
    console.log(result);
  });
});
app.delete("/api/deletecommunication/:task", (req, res) => {
  const name = req.params.task;
  const sqlDelete = "DELETE FROM communication WHERE task = ? ";

  db.query(sqlDelete, name, (err, result) => {
    console.log(result);
  });
});app.delete("/api/deletepresentation/:task", (req, res) => {
  const name = req.params.task;
  const sqlDelete = "DELETE FROM presentation WHERE task = ? ";

  db.query(sqlDelete, name, (err, result) => {
    console.log(result);
  });
});app.delete("/api/deletephysical/:task", (req, res) => {
  const name = req.params.task;
  const sqlDelete = "DELETE FROM physical WHERE task = ? ";

  db.query(sqlDelete, name, (err, result) => {
    console.log(result);
  });
});app.delete("/api/deletetechnical/:task", (req, res) => {
  const name = req.params.task;
  const sqlDelete = "DELETE FROM technical WHERE task = ? ";

  db.query(sqlDelete, name, (err, result) => {
    console.log(result);
  });
});
app.put("/api/updatehealth", (req, res) => {
  const name = req.body.uname;
  const task = req.body.task;
  const sqlUpdate =
    "UPDATE  healthhygiene SET task  = ?  WHERE uname = ? ";

  db.query(sqlUpdate, [task, name], (err, result) => {
    console.log(result);
  });
});
app.put("/api/updatecommunication", (req, res) => {
  const name = req.body.uname;
  const task = req.body.task;
  const sqlUpdate = "UPDATE  communication SET task  = ?  WHERE uname = ? ";

  db.query(sqlUpdate, [task, name], (err, result) => {
    console.log(result);
  });
});
app.put("/api/updatepresentation", (req, res) => {
  const name = req.body.uname;
  const task = req.body.task;
  const sqlUpdate = "UPDATE  presentation SET task  = ?  WHERE uname = ? ";

  db.query(sqlUpdate, [task, name], (err, result) => {
    console.log(result);
  });
});
app.put("/api/updatephysical", (req, res) => {
  const name = req.body.uname;
  const task = req.body.task;
  const sqlUpdate = "UPDATE  physical SET task  = ?  WHERE uname = ? ";

  db.query(sqlUpdate, [task, name], (err, result) => {
    console.log(result);
  });
});
app.put("/api/updatetechnical", (req, res) => {
  const name = req.body.uname;
  const task = req.body.task;
  const sqlUpdate = "UPDATE  technical SET task  = ?  WHERE uname = ? ";

  db.query(sqlUpdate, [task, name], (err, result) => {
    console.log(result);
  });
});


app.listen(3001, () => {
  console.log("running pn 3001");
});
