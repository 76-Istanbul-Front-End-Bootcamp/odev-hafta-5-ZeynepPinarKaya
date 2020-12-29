import data from "./data.js"
import {createTableElements} from "./main.js";

/*
  ALWAYS USE IMPORTED data ARRAY TO MAKE MANIPULATIONS

  ID for allcities table is #allcities
  ID for singlecity table is #singlecity
/*

/*
* PASS ARRAY TO createTableElements function to fill tables
* first argument - data
* second argument - tableId
* Example createTableElements([{name: "Istanbul"}], "allcities");
*/

/*
    ids for buttons and select

    Population - bigger than 500.000 => #populationBigger
    land area - less than 1000 => #landAreaLess
    Does any city has population less than 100.000? => #isPopulationLess
    Does every city has land area bigger than 100? => #isLandBigger
    city select => #selectcity
*/

/* RESET ACTION */
document.querySelector("#reset").addEventListener("click", () => {
    createTableElements(data, "allcities");
    createTableElements([], "singlecity")
});

/* START CODING HERE */

//Population bigger than 500.000 button
document.querySelector("#populationBigger").addEventListener("click", () => {
    let popResult = data.filter(city => city.population > 500000);
    createTableElements(popResult, "allcities");
});

//Land area less than 1.000 button
document.querySelector("#landAreaLess").addEventListener("click", () => {
    let landResult = data.filter(city => city.landArea < 1000);
    createTableElements(landResult, "allcities");
});

//Any city has population less than 100.000? button
document.querySelector("#isPopulationLess").addEventListener("click", () => {
  let isPopLess = data.filter(city => city.population < 100000);
  if(isPopLess) {
    alert("Yes! at least 1 city has population less than 100.000");
  };
});

//Any city has land area bigger than 100.000? button
document.querySelector("#isLandBigger").addEventListener("click", () => {
  let isLandMore = data.filter(city => city.landArea > 100);
  if(isLandMore) {
    alert("Yes! all cities has land area bigger than 100");
  }
});

//Dropdown items added
let select = document.querySelector("#selectCity"); 
for (let i = 0; i < data.length; i++) {
  let opt = data[i].name;
  let el = document.createElement("option");
  el.textContent = opt;
  el.value = opt;
  select.appendChild(el);               
}

select.addEventListener("change", () => {
  let output = select.value; 
  let selectedCityTable = data.filter(city => city.name == output);
  createTableElements(selectedCityTable, "singlecity");
});