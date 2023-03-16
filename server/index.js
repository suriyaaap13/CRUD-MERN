require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const db = require('./config/mongoose');
const Food = require('./models/food');

const app = express();

app.use(express.json());

app.get('/', async (req, res)=>{
    const food = new Food({FoodName: 'apple', daysSinceIAte: 3});
    try{
        await food.save();
        return res.send('Hello World!!');
    }catch(err){
        console.log('Error ', err);
    }
});

app.listen(3000, (err)=>{
    if(err){
        console.log('Error in running the server ', err);
        return;
    }
    console.log('Server is up and running in port 3000');
});