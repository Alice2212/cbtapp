var Quiz = require('../../models/user/user');

exports.loginPage = (req,res)=>{
    res.render('user/login');
};

exports.quiz = (req,res)=>{
    Quiz.find({},(error,quizData)=>{
        if(error){
            console.log(error);
        }else{
            res.render('user/quiz',{quizData:quizData});
            //console.log(quizData);
        }
        
    });
    //console.log(question)  
    // Quiz.create({ 
    //     question: 'what is python',
    //     optionA:'programming language',
    //     optionB:'test',
    //     optionC:'bobk',
    //     optionD:'compiler',
    //     answer:'programming language'
    // }, function (err, data) {
    //     if (err)
    //      {
    //          return handleError(err);
    //     }
    //     else{
    //         console.log(data);
    //     }
    // // saved!
    // });
    
};