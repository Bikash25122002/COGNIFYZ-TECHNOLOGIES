const express = require('express')
const cors = require('cors')

const app = express()
const port = 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json())
const corsOptions = {
  origin: 'http://localhost:5173',
  methods: "GET, POST, DELETE, PUT, PATCH, HEAD",
  Credential: true,
}
app.use(cors(corsOptions))


app.use('', require("./routes/user_routes"));

app.listen(port, () => {
  console.log("Server is running at http://localhost:3000");
});