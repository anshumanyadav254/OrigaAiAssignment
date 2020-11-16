const express=require('express');
const mongoos=require('mongoose');
const userSchema=mongoos.Schema({
    user_id:{
       type:Number,
       unique:1
    },
    noun:{
        type:String
    },
    ts:{
        type:String
    },
    latlong:{
        type:String
    },
    verb:{
        type:String
    },
    timespent:{
        type:Number
    },
    properties:{
        type:String
    }
})
userSchema.pre('save',(next)=>{
    var user = this;
    user.save(function (err, user){
        if(err) return cb(err)
        cb(null, user);
    })
    next();
})
const User=mongoos.model('User',userSchema);
module.exports={User};
