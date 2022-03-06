//trip advicor api url  
const API_URL = "https://rapidapi.com/apidojo/api/travel-advisor/";
const tripAdvisorHost = "travel-advisor.p.rapidapi.com";
const tripAdvisorKey = "1e999adf8dmsh8714131816df36ep16f019jsn7fd65df50168"


//view more buttom
let viewMore = () =>{
 let viewMoreButtonELement = document.getElementById("viewmore");
 debugger;
 if(viewMoreButtonELement.innerText == "View more"){
     document.getElementsByClassName("imageContainer2").style.style.display = "block";
     viewMoreButtonELement.innerText = "View Less";
 }else{
    document.getElementsByClassName("imageContainer2").style.style.display = "none";
 }
}