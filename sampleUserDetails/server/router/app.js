const router = require('express').Router();
const user = require('../models/userDetail');
// console.log(userDetail,'userDetals');

exports.selectUser=function(req, res){
// console.log('-----------------------------',userDetail.find())
    console.log(req.body);
    user.find({}, function(err, post){
        // console.log(err,'error');
        // console.log(post,'post')
        if(err) {
            res.send(err);
        }
        else {
            console.log(post);
            res.send(post);
        }
        
    });
};
 
exports.adduser = function(req,res){
    console.log("hello");
    //res.json(req.body);
    console.log(req.body);
    res.send(req.body);
}
