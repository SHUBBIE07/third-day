let phone = document.getElementById("phone")
let dateWeek = document.getElementById("dateWeek");
let dateDate = document.getElementById("dateDate");
let dateMonth = document.getElementById("dateMonth");
let timeHour = document.getElementById("timeHour");
let timeMinutes = document.getElementById("timeMinutes");
let hHour = document.getElementById("hHour");
let hMinutes = document.getElementById("hMinutes")
let originalContent = phone.innerHTML;
let isPhoneOn = true;

  
function display() {
    
   if (isPhoneOn) {
       phone.innerHTML = "";
       phone.style.background = "none";
       phone.style.backgroundColor = "black";
       isPhoneOn = false;
   } else {
       phone.innerHTML = originalContent;
       phone.style.backgroundImage = "url(babanla.jpg)";
       phone.style.backgroundRepeat = "no-repeat";
       phone.style.backgroundSize = "cover";
       isPhoneOn = true;

   }
}


// function display(){
//  if (phone.style.backgroundColor === "black") {
//     phone.innerHTML = originalContent
//         phone.style.backgroundImage = "url(babanla.jpg)"; 
//       phone.style.backgroundRepeat = "no repeat"
//       phone.style.backgroundSize = "cover"
//    } else if (phone.style.backgroundImage = "url(babanla.jpg)" ){
//        phone.innerHTML = "";
//         phone.style.background = "none";
//         phone.style.backgroundColor = "black";
//    }
  
// }

setInterval(()=>{
    let date = new Date();
    dateWeek.innerHTML = date.toLocaleString('default', {weekday: 'long'}) + ",";
    dateDate.innerHTML = date.getDate() + " ";
    dateMonth.innerHTML = date.toLocaleString('default', {month: 'long'}) ;

    timeHour.innerHTML = (date.getHours() % 12 || 12) + ":";
    timeMinutes.innerHTML = date.getMinutes().toString().padStart(2, '0'); 

    hHour.innerHTML = (date.getHours() % 12 || 12);
    hMinutes.innerHTML = ":" + date.getMinutes().toString().padStart(2,'0')
})