const express = require("express");
const cookieparser = require("cookie-parser");
const app = express();
const http = require("http");
const server = http.createServer(app);

const tasks = [];

app.use(express.static(__dirname + "/public"));

app.get("/", (request, response) => {
  let tasksHTML = "";
  response.send(
    `<html>
    <body>
    <h1> Current Task List </h1>
    <ul> ${tasksHTML} </ul>
    <form action ="/process-task" method="get">
    <label for="task">Write a task:</label>
    <input type="text" name="task" />
    <label for="submit">Submit your task:</label>
    <input type="submit" name="submit" />
    </form>
    </body>
    </html>`
  );
});

app.get("/process-task", (request, response) => {
  tasks.push(request.query.task);
  console.log(tasks);
  let tasksHTML = "";
  for (let task of tasks) {
    tasksHTML = tasksHTML + "<li>" + task + "</li>";
  }
  response.send(
    `<html>
    <body>
     <h1> Current Task List </h1>
     <ul> ${tasksHTML} </ul>
     <form action ="/process-task" method="get">
     <label for="task">Write a task:</label>
     <input type="text" name="task" />
     <label for="submit">Submit your task:</label>
     <input type="submit" name="submit" />
     </form>
     </body>
     </html>`
  );
});

app.get("/send", (request, response) => {
  response.cookie("loggedin", "true");
  response.send("Cookie sent!");
});

app.get("/read", (request, response) => {
  if (request.cookies.loggedin == "true") {
    response.send("You are 'logged' (visited /send)");
  } else {
    response.send("Not 'logged'");
  }
});

app.get("/bdate.html", (request, response) => {
  const date = new Date();
  response.send(
    `<html>
     <body>
     <h1>Backend Logic</h1>
     <h2>Current date in the backend server is ${date}</h2>
     <h2> Current date in the frontend is <span id="currentDate"> </span></h2>
     <script>
     var date = new Date();
     var currentDateDomObj = document.getElementById("currentDate");
     currentDateDomObj.innerHTML = date;
     </script>
     </body>
     </html>`
  );
});

app.listen(12345, () => console.log("Express server running on port 12345"));
