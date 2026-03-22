// ALERT SYSTEM
function checkAlert()
{
let location=document.getElementById("location").value.toLowerCase();

let message="";

if(location=="chennai")
{
message="⚠ Flood Alert in Chennai!";
}
else if(location=="kerala")
{
message="⚠ Heavy Rain Warning in Kerala!";
}
else if(location=="delhi")
{
message="⚠ Heatwave Alert in Delhi!";
}
else
{
message="✅ No major alerts.";
}

document.getElementById("alertBox").innerHTML=message;
}

// SOS SYSTEM
function sendSOS()
{
let msg="🚨 SOS Sent! Help is on the way.";
document.getElementById("sosMsg").innerHTML=msg;
}

// GEOLOCATION
function getLocation()
{
if(navigator.geolocation)
{
navigator.geolocation.getCurrentPosition(function(position)
{
document.getElementById("location").value="Detected Location";
});
}
else
{
alert("Geolocation not supported");
}
}

// REPORT SYSTEM
function submitReport()
{
let type=document.getElementById("type").value;
let location=document.getElementById("reportLocation").value;

if(type=="" || location=="")
{
alert("Fill all fields");
return;
}

let report={
type:type,
location:location,
time:new Date().toLocaleString()
};

// Save to local storage
let reports=JSON.parse(localStorage.getItem("reports")) || [];
reports.push(report);
localStorage.setItem("reports", JSON.stringify(reports));

document.getElementById("reportMsg").innerHTML="✅ Report submitted successfully!";
}