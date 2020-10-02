const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');

//load env
dotenv.config({ path: './config.env' });

//cucou

const app = express();

// Dev logging
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}
// Profile routes
app.use('/api/v1/profile', require('./routes/profile'));
const port = process.env.PORT;

app.listen(port, () => {
 console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`)
});

