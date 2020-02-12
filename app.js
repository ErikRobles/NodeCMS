const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const hbs = require('express-handlebars');
const { mongoDbUrl, PORT } = require('./config/configuration');

const app = express();

/* Configure Mongoose to connect to Mongo Database */
mongoose.connect(mongoDbUrl, { useNewUrlParser: true, useUnifiedTopology: true }).then(response => {
    console.log('MongoDB Connected Successfully!');
}).catch(err => {
    console.log('Database Connection failed!');
});

/* Configure Express */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

/* Set up View Engine to use Handlebars */
app.engine('handlebars', hbs({ defaultLayout: 'default' }));
app.set('view engine', 'handlebars');

/* Routes */
const defaultRoutes = require('./routes/defaultRoutes');
app.use('/', defaultRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});