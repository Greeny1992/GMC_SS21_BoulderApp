const express = require('express'); 
const app = express();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

// Logger
app.use(logger('dev'));

// body parsers
app.use(bodyParser.json({limit: '50mb'}));
app.use(express.json({limit: '50mb'}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// CORS
app.use(cors());

// import our routes
const userRoutes = require('./Routes/UserRoutes');

app.use("/user", userRoutes);

// export the app
module.exports = app;