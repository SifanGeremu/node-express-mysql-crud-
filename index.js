const express = require("express");
const mysql2 = require("mysql2");
const PORT = 5000;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


const pool = mysql2.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "root",
  database: "nodebeers",
});

app.get("/", (req, res) => {
  
  pool.getConnection((err, connection) => {
    if (err) {
      console.error("Got error:", err);
      return res.status(500).send("Database connection failed");
    }

    console.log(`Connected as ID ${connection.threadId}`);

    
    connection.query("SELECT * FROM beers", (queryErr, rows) => {
      connection.release(); 

      if (queryErr) {
        console.error("Error executing query:", queryErr);
        return res.status(500).send("Error fetching data");
      }

      res.json(rows);
    });
  });
});



app.listen(PORT, () => {
  console.log(`We are listening on port: http://localhost:${PORT}`);
});
