CRUD API with Node.js, Express & MySQL
Description
This project is a CRUD API built with Node.js, Express, and MySQL for managing a database table called bears. It allows users to perform Create, Read, Update, and Delete (CRUD) operations on a MySQL database storing information about different bear species.

Technologies Used
Node.js

Express.js

MySQL2

Postman (for API testing)

Installation
1. Clone the Repository
git clone https://github.com/yourusername/crud-node-express-mysql.git
cd crud-node-express-mysql
2. Install Dependencies
Edit
npm install
3. Set Up MySQL Database
Make sure MySQL is installed and running.

Create a database named nodeeers (or update the database name in the code).

Import the following table schema:


CREATE TABLE bears (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    species VARCHAR(255) NOT NULL,
    habitat TEXT,
    diet VARCHAR(255)
);
4. Update Database Credentials
Modify the database connection settings in index.js if necessary:

const pool = mysql2.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "root",
  database: "wildlife",
});
5. Start the Server
npm start
or if using nodemon:
nodemon index.js
API Endpoints
Method	Endpoint	Description	Example Request Body
GET	/bears	Fetch all bears	N/A
POST	/bears	Add a new bear	{ "name": "Grizzly", "species": "Ursus arctos", "habitat": "Forests, mountains", "diet": "Omnivore" }
PUT	/bears/:id	Update a bear by ID	{ "diet": "Mostly fish" }
DELETE	/bears/:id	Delete a bear by ID	N/A
Testing with Postman
GET request: Fetch all bears
URL: http://localhost:5000/bears
Method: GET
POST request: Add a new bear
URL: http://localhost:5000/bears
Method: POST
Body (JSON):
{
  "name": "Polar Bear",
  "species": "Ursus maritimus",
  "habitat": "Arctic regions",
  "diet": "Mostly seals"
}
