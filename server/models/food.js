const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
     FoodName: {
        type: String,
        required: true
     },
     daysSinceIAte: {
        type: String,
        required: true
     }
});

const Food = mongoose.model('Food', foodSchema);
module.exports = Food;