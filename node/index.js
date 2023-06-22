const mysql = require("mysql");
const mysqlConfig = {
  host: "database",
  user: "root",
  password: "root",
  database: "dockernodepeople",
};
const connection = mysql.createConnection(mysqlConfig);

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  connection.query("insert into people(name) values('Ruan')");
  connection.commit();

  connection.query("select * from people", (err, rows) => {
    if (err) throw err;

    let content = "<h1>Full Cycle Rocks!</h1>";
    content += "<ul>";

    rows.forEach((row) => {
      content += `<li>${row.name}</li>`;
    });

    content += "</ul>";
    res.send(content);
  });
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
