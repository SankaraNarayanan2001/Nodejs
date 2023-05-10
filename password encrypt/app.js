const express=require('express');
const auth= require('./routes/auth');
const app=express();
app.use(express.json());
app.use('/auth',auth);

const PORT=process.env.PORT || 3000;
app.listen(PORT , ()=>{
    console.log(`server running on the port ${PORT}`)
});