const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const cors = require('cors');
const bodyParser = require('body-parser');
const errorHandler = require('./middleware/error');
const connectDB = require('./config/db');

//Load env vars
dotenv.config({ path: './config/config.env' });

//connect to database
connectDB();

//Route files
const router = require('./route/route');
const auth = require('./route/auth');
const users = require('./route/users');



const app = express();
//Dev logging middleware
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
} 

//Body parser
app.use(cors());
app.use(bodyParser.json({ extene: true }));
app.use(bodyParser.urlencoded({ extended: true }));

//Mount routers
app.use('/', router);
app.use('/', auth);
app.use('/users', users);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);

// Handle unhandles promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  //Close server & exit process
  server.close(() => process.exit(1));
});
