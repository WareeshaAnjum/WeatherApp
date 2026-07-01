 async function search(){
    let city= document.querySelector('.outer input').value
    const key='d4c2f19e99bb34c2142941b784fd4cfc';
    const url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
    
    let res=  await fetch(url)
    console.log(res);
    // let a= 30;
    // let b= 40;
    // console.log(a+b);
    let data= await res.json();
    console.log(data);
    document.querySelector('.outer h3').innerHTML= `City: ${data.name}`;
    document.querySelector('.outer h4').innerHTML= `Temp: ${data.main.temp}°C`
    
}// api 
 