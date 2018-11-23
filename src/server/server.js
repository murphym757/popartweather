const express = require('express'),
  app = express(),
  path = require('path'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  mongoose = require('mongoose'),
  session = require('express-session'),
  MongoStore = require('connect-mongo')(session),
  methodOverride = require('method-override'),
  webpack = require('webpack'),
  webpackMiddleware = require('webpack-dev-middleware'),
  webpackConfig = require('../../webpack.config.js'),
  port = process.env.PORT || 3000;

  app.use(webpackMiddleware(
    webpack(webpackConfig),
    { publicPath: '/' }
));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* Mongoose 
// Mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(uri).then(
    () => {console.log('Database is connected')},
    err => {console.log('Cannnot connect to the database' + err)}
);
//mongoose.connect('mongodb://localhost/Postsdb'); //change Postsdb to whatever you'd like to name your database
const db = mongoose.connection;

// Mongo Error
db.on('error', console.error.bind(console, 'connection error:'));

// use sessions for tracking logins
app.use(session({
    secret: 'react-template',
    resave: true,
    saveUninitialized: false,
    store: new MongoStore({
        mongooseConnection: db
    })
}));
*/

app.use(express.static(path.join(__dirname + './../../')));
app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname + './../../src/index.html'));
});

app.listen(port, () => {
    console.log('Server started on port ' + port)
});