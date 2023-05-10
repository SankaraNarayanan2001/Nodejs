const express=require('express');
const auth= require('./routes/auth');
const post= require('./routes/post')
const app=express();
app.use(express.json());
app.use('/auth',auth);
app.use('/post',post)


app.listen(3000);