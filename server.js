const express=require('express');
const { set } = require('express/lib/response');
const res = require('express/lib/response')
const app=express();

const port=process.env.PORT||3001;

app.set('view engine','ejs');

//load static assets

app.use('/static',express.static(path.join(__dirname,'public')))

//home route
app.get('/',(req,res)=>{
    res.render('base',{
        title:"Please Enter The Login Details"
    });
})

app.listen(port,()=>{console.log("Losting to the server on http://localhost:3001")});