// const async = require("hbs/lib/async");
const cityName=document.getElementById('cityName');
const submitBtn=document.getElementById('submitBtn');
const city_name=document.getElementById('city_name');
const temp=document.getElementById('temp');
const day=document.getElementById('day');
const today_data=document.getElementById('today_data');
const temp_val=document.getElementById('temp_val');


const temp_status=document.getElementById('temp_status');

const d=new Date();
const weekly=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let din=weekly[d.getDay()];
const monthly=[
"January", "February", 
"March", "April", "May", 
"June", "July", "August",
"September", "October", 
"November", "December"]
let month=monthly[d.getMonth()];
// console.log(din);
day.innerText=din;
today_data.innerHTML=`${d.getDate()}-${month}-${d.getFullYear()}`;
const getInfo=async(event)=>{
    event.preventDefault();
    // const month=new Date();
    // console.log(month);
    let cityVal=cityName.value;
  
   if(cityVal===""){
      
        city_name.innerText=`Plz enter the location before search`;
   }else{
       try{
       let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=0fe8ee19e20e1f93a8540d60c93aa8f2`
       const response= await fetch(url);
       const data= await response.json();
    //    console.log(data);
       const arr=[data];
       city_name.innerText=`${arr[0].name},${arr[0].sys.country}`;
       var first=arr[0].main.temp;
       var second=273.15;
       var result=parseFloat(first).toFixed(2)-parseFloat(second).toFixed(2);
    //    console.log(parseFloat(result).toFixed(2));

       temp_val.innerText=parseFloat(result).toFixed(2);
    //    console.log(arr[0].main.temp);
      
         // const  valnum=parseFloat(arr[0].main.temp);
        //   valnum=arr[0].main.temp;
        //  temp.innerHTML=valnum-273.15;
        
       const tempmood=arr[0].weather[0].main;
       if(tempmood=="Clear"){
           temp_status.innerHTML=
           "<i class='fas fa-sun' style='color: #eccc68;'></i>";
       }
       else if(tempmood=='Clouds'){
           temp_status.innerHTML=
           "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
       }else if(tempmood=="Rain"){
           temp_status.innerHTML=
           "<i class='fas fa-rain' style='color: #a4b0be;'></i>";
       }else{
           temp_status.innerHTML=
           "<i class='fas fa-cloud' style='color: #eccc68;'></i>";
       }
    //    city_name.innerText=cityVal;
    //   console.log(weather.main.temp);
    //   temp.innerText=(weather.main.temp);

       }
       catch{
           
        city_name.innerText=`Plz enter the location name properly`;
       }
   }

}
submitBtn.addEventListener('click',getInfo);