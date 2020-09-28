const express = require('express');
const app = express();
const cors = require('cors');
const helmet = require("helmet");
const morgan = require('morgan');
const path = require("path")
require('dotenv').config()

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.use("/files", express.static(path.resolve(__dirname, "tmp")));


require('./app/controllers')(app);


app.listen(3001);