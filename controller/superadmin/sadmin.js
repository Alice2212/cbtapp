var Admin = require('../../models/superadmin/sadmin');
var message = "";

exports.registerPage = (req,res)=>{
    res.render('superadmin/register',{message:message});
};


exports.register = (req, res)=>{
    var person = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username:req.body.username,
        email: req.body.email,
        password:req.body.password,
        confirm_password:req.body.confirm_password 
     }


     // Password authentication
     if (req.body.password !== req.body.confirm_password) {
        message = "Password mismatch";
        res.render('superadmin/register',{message:message});
         // console.log(error);
     }else{
         res.send('Successfully registed as admin')
         res.render('superadmin/register')
     }

    Admin.create(person).then((err,result)=>{
        if(result){
            res.redirect('/superadmin');
        }
        
    });
};
 // end of password authenticaton process
exports.regAdmin = (req,res)=>{
    Admin.find({}).exec(function(err,Admindata){
        res.render('superadmin/registeredAdmin',{Admindata:Admindata});
    });

}

//deleting
exports.delete = (req,res)=>{
    Admin.findByIdAndRemove(req.params.id ,function(err,result){
        if (err){
            res.send(err)
        }
        res.redirect('/superadmin/registeredAdmin')
    });
}

// get to update
exports.update = (req,res)=>{
    Admin.findById(req.params.id, function(err,result){
        if(err){
            res.send(err);
        }
        res.render("superadmin/edit",{data:result})
    })
}
 
// post after updating
exports.updating = (req,res) =>{

    Admin.findByIdAndUpdate(req.body._id, req.body, {new:true}, function(err,Admin){
        if(Admin){
            res.redirect('/superadmin/registeredAdmin')
        }else{
            console.log(err);
        }
    })
    
}
   



