const express=require('express');
const path=require('path');
const hbs=require('hbs');
const app=express();
const port=process.env.PORT || 3000;
// console.log(path.join(__dirname,"../public"));
const static_path=path.join(__dirname,"../public");
const template_path=path.join(__dirname,"../templates/views");
const partials_path=path.join(__dirname,"../templates/partials");
 app.set('views', path.join(__dirname, 'views'));

 app.use(express.static(__dirname + "/public"));


  app.set('view engine', 'hbs');
  hbs.registerPartials(partials_path);

app.set('views',template_path);


app.use(express.static(static_path));

app.get("",(req,res)=>{
    res.render('index');
})
app.get("/about",(req,res)=>{
    res.render('about');
})
app.get("/weather",(req,res)=>{
    res.render('weather');
})
app.get("/*",(req,res)=>{
    res.render('404error');
})
app.listen(port,()=>{
    console.log(`sever run successfully on ${port}`);
})