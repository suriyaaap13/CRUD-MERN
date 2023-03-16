require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const db = require('./config/mongoose');
const Food = require('./models/food');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.post('/insert', async (req, res)=>{
    const {foodName, days} = req.body;
    const food = new Food({FoodName: foodName, daysSinceIAte: days});
    try{
        await food.save();
        return res.send('Hello World!!');
    }catch(err){
        console.log('Error ', err);
    }
});

app.get('/read', async (req, res)=>{
    
    try{
        const result = await Food.find({});
        return res.send(result);
    }catch(err){
        console.log("Error", err);
        return res.send('Error in the request method');
    }

});

app.listen(3001, (err)=>{
    if(err){
        console.log('Error in running the server ', err);
        return;
    }
    console.log('Server is up and running in port 3000');
});