var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var QuizSchema = Schema({

    question:{
        type:String,
        requrie:true
    },
    optionA:{
        type:String,
        
    },
    optionB:{
        type:String,
        
    },
    optionC:{
        type:String,
        
    },
    optionD:{
        type:String,
        
    },
    answer:{
        type:String,
        requrie:true
    }

});

module.exports = mongoose.model('Quiz',QuizSchema);
