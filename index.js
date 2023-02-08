const express = require("express");
const app = express();
const mongoose = require("mongoose");
const {MONGO_DB_CONFIG} = require("./config/app.config");
const http = require("http");
const server = http.createServer(app);

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_DB_CONFIG,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>{
    console.log("Database connected");
},
    (error)=>{
        console.log("Database cannot connected");
})

app.use(express.json());
app.use("/api", require("./routes/app.route"));

server.listen(process.env.port || 4000, function(){
    console.log("Ready!!");
});