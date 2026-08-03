// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const AuthRouter = require('./routes/AuthRouter');


// require('dotenv').config();
// require('./models/db'); // Import the database connection

// const PORT = Number(process.env.PORT) || 8080;

// app.get('/', (req, res) => {
//     res.send('Hello, World!');
// });

// app.use(bodyParser.json());
// app.use(cors());
// app.use('/auth', AuthRouter);


// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

const express = require('express');
const app = express();
const cors = require('cors');

const AuthRouter = require('./routes/AuthRouter');

require('dotenv').config();
require('./models/db');

const PORT = Number(process.env.PORT) || 8080;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Test route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Auth routes
app.use('/auth', AuthRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});