var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/testdb').then(() => {
console.log("Connected to Database");
}).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
});

  
   //email pattern
//    var password_pattern = /[a-z0-9_]{3,10}/i;
//    if (!password_pattern.test(req.body.password)) {
//       console.log("choose another password");
//       // password is invalid...
//       message = "Please Choose a strong password";
//       res.render('superadmin/register',{message:message})
//    }

