const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cors = require('cors');
require('dotenv').config();
const app = express();
app.use(cors());
const initializePassport = require('./passport-config');
initializePassport(passport);

// ejs
const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }
  )
  .then(() => {
    console.log('we are connected to the database. 👍');
  })
  .catch((error) => {
    console.log('an error occurred while connecting ot the db', error);
  });

const userRoutes = require('./routes/userRoutes');
const messageRoutes = require('./routes/messageRoutes');

app.use('/user', userRoutes);
app.use('/contact', messageRoutes);

app.listen(4001, () => {
  console.log('the webserver is running on port 4001 💚 💌');
});
