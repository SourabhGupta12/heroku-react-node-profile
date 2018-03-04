const path = require('path');
const dotenv = require('dotenv').config({path: path.join(__dirname, '.env')});
const express = require('express');
const cors =  require('cors');
const projects = require('./Routes/Projects/projects');
const app = express();
const port = process.env.PORT || 5000;
const resume = require('./Routes/Resume/resume');
const mail = require('./Routes/Mail/mail');
const bodyParser =require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/projects',projects);
app.use('/download',resume);
app.use('/contactdata',mail);

app.listen(port);