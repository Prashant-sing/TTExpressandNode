const cityname = document.getElementById("cityname");
const submitbtn = document.getElementById("submitbtn");
const city_name = document.getElementById("city_name");
const temp_real_val = document.getElementById("temp_real_val");
const temp_status = document.getElementById("temp_status");
const datahide = document.querySelector(".middle_layer")//querySelector will help 
//us easily apply all css classes at .middle_layer
const getInfo = async(event)=>{
    let cityval = cityname.value;
    event.preventDefault();//It will stop the page to get refreshed again and again
    if(cityval === ""){
        city_name.innerText = `Plz write the name before search`;
        datahide.classList.add('data_hide');
    }
    else{
        try{
            // const url = require('../utils/weatherData');
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=b36afeca80c6938a26eafdd7d7ecdae2`
            const response = await fetch(url);//getting response in json format so we will convert json to normal form
            const data = await response.json();
            console.log(data);
            const arrData = [data];//converting data into arrayofobjects

            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_real_val.innerText = arrData[0].main.temp;
            const tempMood = arrData[0].weather[0].main;

            //Condition to check sunny or cloudy
            if(tempMood == "Clear"){
                temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eeff05;'></i>"
            }else if(tempMood == "Clouds"){
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>"
            }else if(tempMood == "Rain"){
                temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>"
            }else{
                temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eeff05;'></i>"
            }
            datahide.classList.remove('data_hide');

        }catch{
            city_name.innerText = `Plz enter the city name properly`;
            datahide.classList.add('data_hide');
        }
    }
}

submitbtn.addEventListener('click', getInfo);