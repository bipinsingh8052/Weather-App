const URl= "https://api.openweathermap.org/data/2.5/weather?q=?";
const inputValue =document.querySelector(".navbar input");
const searchbutton =document.querySelector(".navbar button");
const image =document.querySelector(".main img");
const temp =document.querySelector(".main h1");
const city =document.querySelector(".main h2");
const humidity =document.querySelector(".Humidity h1");
const wind =document.querySelector(".wind h1");
console.log(image);

 searchbutton.addEventListener("click",()=>{      
      // console.log(inputValue.value);
     goal(inputValue.value);
        });

async function goal (cityname){
    let respose =await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=ec3215ff6cb823be0e9281e643cc304e&units=metric`);
    let conal =await respose.json();
    console.log(conal);
    const name=conal.name;
    city.innerText=name;

    // colud status
    const cloud =conal.weather[0].main;
    console.log(conal.weather[0].main)

    if(cloud == "Clear"){
        const imgClear =document.querySelector(".clear");
        imgClear.src="images/clear.png";
        // console.log(image);
    }
    else if(cloud == "Clouds"){
        const imgClouds =document.querySelector(".clear");
        imgClouds.src="images/clouds.png";
    }
    else if(cloud == "Drizzle"){
        const imgDrizzle =document.querySelector(".clear");
        imgDrizzle.src="images/drizzle.png";
    }
    else if(cloud == "Snow" ||cloud == "Fog" ||cloud == "Smoke"){
        const imgshow =document.querySelector(".clear");
        imgshow.src="images/snow.png";
    }
    else if(cloud == "Mist"){
        const imgMist =document.querySelector(".clear");
        imgMist.src="images/mist.png";
    }
    else if(cloud == "Rain"){
        const imgRain =document.querySelector(".clear");
        imgRain.src="images/rain.png";
    }
    console.log(conal.weather[0].main)


    const tempu=conal.main.temp;
    temp.innerText=`${tempu}°C`;
    const windspeed =conal.wind.speed;
    wind.innerText=`${windspeed}km/h`;
    const humidityreplace=conal.main.humidity;
    humidity.innerText=`${humidityreplace}%`;
}

// const imgchanger=(cloudstatus)=>{
//     let array=["clear","clouds","drizzle","mist","rain","snow"];
//     array.forEach((item)=>{
        
//         else if(cloudstatus== item){
//             return clouds;
//         }

//     })
// }


