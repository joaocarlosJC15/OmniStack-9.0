const express = require('express');
const mongoose = require('mongoose')
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://joaocarlosJC15:sfcJC1998;@joaocarlos-k5wuf.mongodb.net/semana09?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology:true
})

app.use(express.json());
app.use(routes);

app.listen(3333);