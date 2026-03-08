function checkAlert()
{
let location=document.getElementById("location").value;

if(location=="")
{
alert("Enter location");
return;
}

let message="";

if(location.toLowerCase()=="chennai")
{
message="Flood alert in Chennai. Stay safe!";
}
else if(location.toLowerCase()=="kerala")
{
message="Heavy rain warning in Kerala.";
}
else
{
message="No disaster alert currently.";
}

document.getElementById("alertBox").innerHTML=message;
}

function sendSOS()
{
alert("SOS Request Sent to Emergency Team!");
}