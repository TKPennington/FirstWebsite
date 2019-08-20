

const navOpen = document.getElementById("openNav");
const navClose = document.getElementById("closeNav");
const nav = document.getElementById("nav");
navClose.style.display = "none";
nav.style.display= "none";


function openNav() {
	if(nav.style.display === "none"){
		nav.style.display = "";
		navClose.style.display = "";
		navOpen.style.display = "none";
	}
}
function closeNav() {
	if(nav.style.display = "block"){
		nav.style.display = "none";
		navClose.style.display = "none";
		navOpen.style.display = "block";
	}
}
