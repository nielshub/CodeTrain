const http = require("http");
const express = require("express");
const app = express();
const server = http.createServer(app);

app.get("/", (request, response) => {
  response.send(
    `<html> <body>
<h1> Current Task List </h1>
 <ul id="list"> </ul>
 <form>
 <label for="task">Write a task:</label>
 <input type="text" name="task" id="task" />
 <label for="submit">Submit your task:</label>
 <input type="submit" name="submit" onclick="addTask(event)" />
 </form>
 <script>
 function addTask(event){
 event.preventDefault();
 const elem = document.createElement('li');
 elem.textContent= document.getElementById("task").value;
 document.getElementById("list").appendChild(elem);
 }
 </script>
 </body> </html>`
  );
});
server.listen(12345, () => console.log("Express server running on port 12345"));
