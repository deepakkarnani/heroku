const express=require("express");
const hbs=require('hbs');
 var app=express();
 
 app.use(express.static(__dirname+'/public'));
 app.set('view engines','hbs');
 const port=process.env.PORT||3000;
 hbs.registerPartials(__dirname+'/views/partials');
 
 
 hbs.registerHelper('getCurrentYear',()=>{
     return new Date().getFullYear()
 })
 app.get('/',(req,res)=>{
     res.render('homePage.hbs',{
         
     });


 });
 
 app.get('/aboutPage',(req,res)=>
	{
		res.render("aboutPage.hbs",{
         
		});
	});
app.get('/contactUs',(req,res)=>
{
    res.render("contactUs.hbs",{   

    });
});
app.get('/reachUs',(req,res)=>
{
    res.render("reachUs.hbs",{

    });
});

app.listen(port,()=>{

    console.log('sever running successfully');
});