// Dependencies

const express = require('express');
const fs = require('fs');
const path = require('path');


// Sets up the Express App

const app = express();
const PORT = process.env.PORT||3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serving static assets
app.use(express.static('public'));

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});