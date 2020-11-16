const express=require('express');
const User=require('../models/Users');

const router=express.Router();
router.post("api/register",(req,res)=>{
    const user = new User(req.body);

    user.save((err, doc) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).json({
            success: true
        });
    });
})
module.exports=router;