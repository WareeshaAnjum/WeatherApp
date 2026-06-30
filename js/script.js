function search(){
    let city= document.querySelector('.outer input').value
    const key='d4c2f19e99bb34c2142941b784fd4cfc';
    const url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
    let res= fetch(url)
}// api 