const express  = require('express');
const app = express();
require('dotenv').config();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(process.env.PORT,function(){
    console.log('Server is running on port ' + process.env.PORT);
})