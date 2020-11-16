const express=require('express');
const router=express.Router();
const app=express();
const cors = require('cors')


const mongoose = require("mongoose");
const connect = mongoose.connect('mongodb+srv://anshu:anshu@cluster0.17jj2.mongodb.net/demo?retryWrites=true&w=majority',
  {
    useNewUrlParser: true, useUnifiedTopology: true,
    useCreateIndex: true, useFindAndModify: false
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

//app.use(cors())
app.use(bodyParser.json());

app.use('/api/register',require('./router/router'));

app.listen(3000,()=>{
    console.log("Server is running at 3000");
})