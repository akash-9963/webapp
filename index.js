const userTab=document.querySelector("[data-userWeather]");
const searchTab=document.querySelector("[data-searchWeather]");
const userContainer=document.querySelector(".weather-container");
const grantAccessContainer=document.querySelector(".grant-location-container");
const searchForm=document.querySelector("[data-searchForm]")
const loadingScreen=document.querySelector(".loading-container")
const userInfoContainer=document.querySelector(".user-info-container");


// initially variables need???
let currentTab=userTab;
const API_KEY= "a703ee7acd3279db870a4334a33db6f2";
currentTab.classList.add("current-tab");

function switchTab(clickedTab){
    if(clickedTab!=currentTab){
        currentTab.classList.remove("current-tab");
        currentTab=clickedTab;
        currentTab.classList.add("current-tab");



        if(!searchForm.classList.contains("active")){
            
        }
    }
}

userTab.addEventListener("click",()=>{
    //pass clicked tab as input parameter
    switchTab(userTab);
});

searchTab.addEventListener("click",()=>{
    //pass clicked tab as input parameter
    switchTab(searchTab);
})