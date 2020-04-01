const express = require("express");
const connectDB = require("./config/db");

const app = express();
//connect to the database
connectDB();

//connecting to database
connectDB();

app.get("/", (req, res) => res.send("API Runnig"));

app.use("/api/apps", require("./routes/api/apps"));
app.use("/api/servers", require("./routes/api/servers"));
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server started on ${PORT}`));