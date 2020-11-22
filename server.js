const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('config');

const { static } = require('express');

const app = express();

//Bodyparser Middleware
app.use(express.json());

//DB config
const db = config.get('mongoURI');

//Connect to mongo
mongoose
  .connect(db, 
    {useNewURLParser: true, 
    useCreateIndex: true
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

//Use routes
app.use('/api/items', require('./routes/api/items'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));

//Server static assets
if(process.env.NODE_ENV === 'production') {
  //set satic folder
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));