const express=require('express');
const app=express();
const bodyparser=require('body-parser');
const mongoos=require('mongoose');
const cookieParser = require('cookie-parser')

mongoos.connect('mongodb+srv://anshu:anshu@cluster0.17jj2.mongodb.net/demo?retryWrites=true&w=majority',{useNewUrlParser: true,useUnifiedTopology: true  }).then(()=>{
    console.log('Database is connected');
}).catch(err=>console.log(err));

const userSchema=mongoos.Schema({
    order_id:{
       type:Number,
       default:0
    },
    userId:{
        type:Number

    },
    name:{
        type:String
    },
    subtotal:{
        type:Number
    },
    date:{
        type:String
    }
})
const User=mongoos.model('User',userSchema);

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

app.post('/api/users',(req,res)=>{
    const c=[];

    const user=new User(req.body);
    c.push(user);
    user.save((err,userData)=>{
        //if(err) return res.json({succees:false,err})
        if (11000 === err.code || 11001 === err.code) {
            var MongooseError = require('mongoose/lib/error')
            var valError = new MongooseError.ValidationError(err)
            valError.errors["xxx"] = new MongooseError.ValidatorError('xxx', 'Duplicate found', err.err)
            err = valError
          }
        return res.status(200).json({
            succees:true
        })
    })
    console.log(c)
    
})

app.listen(3000,()=>{
    console.log("listening at port number 3000");
})