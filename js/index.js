
// function to replace [name1.png] with [name2.png]

//regex to pull the person's name from an element id of the form "picName"
let personName = /pic([a-zA-z]+)/;


let descriptionBox = document.getElementById("teamDescription");

let descriptions = new Map();
descriptions.set("default", "Click on a team member's image to see their description, or on the ducks to reset!")
descriptions.set("Ed", "Ed's description");
descriptions.set("Chloe", "Chloe's description");
descriptions.set("Basit", "Basit's description");
descriptions.set("Seth", "Seth's description");
descriptions.set("Matt", "Matt's description");

//sets everyone's pictures to the correct image when one is clicked
function setPictures(elem){
	let profiles = document.querySelectorAll('.profilePic');
	profiles.forEach(
		function(currentValue){
			if (currentValue == elem){
				currentValue.src = `media/index/${currentValue.id.match(personName)[1].toLowerCase()}2.png`;
			} else {
				currentValue.src = `media/index/${currentValue.id.match(personName)[1].toLowerCase()}1.png`;
			}
		});
}



//for each team member, add a listener to change pictures and description on click
let teamMembers = ["Ed", "Matt", "Chloe", "Seth", "Basit"]
for (const member of teamMembers){
	document.getElementById(`pic${member}`).addEventListener("click", function() { 
		setPictures(document.getElementById(`pic${member}`));
		descriptionBox.innerHTML = descriptions.get(member);
	});
}

//add listener to reset page when ducks are clicked
document.getElementById("teamLogo").addEventListener("click", function() {
	descriptionBox.innerHTML = descriptions.get("default")

	let profiles = document.querySelectorAll('.profilePic');
	profiles.forEach(
		function(currentValue){
			currentValue.src = `media/index/${currentValue.id.match(personName)[1].toLowerCase()}1.png`;
		});
})
//set the initial value of the description on page load
descriptionBox.innerHTML = descriptions.get("default")

