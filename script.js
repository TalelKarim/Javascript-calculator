// calculate Tip 
function calculateTip(){
    var billAmt=
    document.getElementById("billamt").value;

    var serviceQual= 
    document.getElementById("serviceQual").value;

    var numofPeople = 
    document.getElementById("peopleamt").value;


// validate input 

if (billAmt ==="" || serviceQual ==0){
    alert('please enter values ! ');
    return;
}

// Check if this input is empty or less than or equal to 1 
if (numofPeople ==="" || numofPeople <=1){
    numofPeople =1;
    document.getElementById("each").style.display = "none";
} else{
    document.getElementById("each").style.display="block";
}

//calculate tip
var total =(billAmt* serviceQual) / numofPeople;
// round to two decimals 
total= Math.round(total*100)/100 ; 
// have two digits after decimal point 
total = total.toFixed(2);

//display the tip 
document.getElementById("totalTip").style.display ="block";
document.getElementById("tip").innerHTML= total;

}

document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

document.getElementById("calculate").onclick = function() {
    calculateTip();
  
  };