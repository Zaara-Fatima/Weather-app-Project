//https://api.weatherapi.com/v1/current.json?key=ee95bfd2dd244cdcae1110202252805&q=kanpur&aqi=yes

const temperaturefield=document.querySelector(".tempCity");
const locationfield=document.querySelector(".nameCity");
//const iconfield=document.querySelector("#weather-icon").src;
const conditionfield=document.querySelector(".condCity");
const feelsLikeField=document.querySelector(".feelsLike");
const windSpeedField=document.querySelector(".windSpeed");
const uvIndexField=document.querySelector(".UV");
const searchField=document.querySelector("#search");


searchField.addEventListener("keydown",searchForLocation);



let target="Mumbai";

const fetchResults=async(targetLocation)=>{
    let url=`https://api.weatherapi.com/v1/current.json?key=ee95bfd2dd244cdcae1110202252805&q=${targetLocation}&aqi=yes`;
    
    const res=await fetch(url);

    const data=await res.json();

    console.log(data);

    let locationName=data.location.name;
    let temp=data.current.temp_c;
    let condition=data.current.condition.text;
    let icon=data.current.condition.icon;
    let feeltemp=data.current.feelslike_c;
    let Wind=data.current.wind_kph;
    let uvIndex=data.current.uv;

    updateDetails(temp,locationName,condition,icon,feeltemp,Wind,uvIndex);

}

function updateDetails(temp,locationName,condition,icon,feeltemp,Wind,uvIndex){
    temperaturefield.textContent=temp;
    locationfield.textContent=locationName;
    conditionfield.textContent=condition;
    document.querySelector("#weather-icon").src="https:" + icon;
    feelsLikeField.textContent=feeltemp;
    windSpeedField.textContent=Wind;
    uvIndexField.textContent=uvIndex;
}

function searchForLocation(event){
    console.log("Event treggered:",event.key);
        if (event.key === "Enter") {
            target = document.querySelector("#search").value;
            console.log("Target updated to:", target);
            fetchResults(target);
        }
}

//fetchResults(target);