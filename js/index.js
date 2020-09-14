
// function to replace [name1.png] with [name2.png]

//regex to pull the person's name from an element id of the form "picName"
let personName = /pic([a-zA-z]+)/;


let descriptionBox = document.getElementById("teamDescription");
let dogPhotoBox = document.getElementById("dogPhoto");

let descriptions = new Map();
descriptions.set("default", "Click on a team member's image to see their description, or on the ducks to reset!")
descriptions.set("Ed", "Ed's description");
descriptions.set("Chloe", "Hi I'm Chloe, I am a junior CS major with a math minor. I like ducks.");
descriptions.set("Basit", "Basit's description");
descriptions.set("Seth", "Hi, I'm Seth. I am a junior studying Computer Science and Math. I'm just here winging it.");
descriptions.set("Matt", "Matt's description");

let dogBreeds = new Map();
dogBreeds.set("Ed", "pug");
dogBreeds.set("Matt", "beagle");
dogBreeds.set("Basit", "boxer");
dogBreeds.set("Chloe", "weimaraner");
dogBreeds.set("Seth", "husky");
//sets everyone's pictures to the correct image when one is clicked
function setPictures(elem){
	let profiles = document.querySelectorAll('.profilePic');
	profiles.forEach(
		function(currentValue){
			if (currentValue == elem){
				document.getElementById(currentValue.id).src = `media/index/${currentValue.id.match(personName)[1].toLowerCase()}2.png`;
			} else {
				document.getElementById(currentValue.id).src = `media/index/${currentValue.id.match(personName)[1].toLowerCase()}1.png`;
			}
		});
}



//for each team member, add a listener to change pictures and description on click
let teamMembers = ["Ed", "Matt", "Chloe", "Seth", "Basit"]
for (const member of teamMembers){
	document.getElementById(`pic${member}`).addEventListener("click", function() { 
		setPictures(document.getElementById(`pic${member}`));
		descriptionBox.innerHTML = descriptions.get(member);
		// dog photo json url: https://dog.ceo/api/breed/INSERT BREED HERE/images/random
		breed = dogBreeds.get(member);
		breedURL = "https://dog.ceo/api/breed/" + breed + "/images/random"
		dogPhotoBox.innerHTML = breedURL;
		//fetch(breedURL);
	});
}

//add listener to reset page when ducks are clicked
document.getElementById("teamLogo").addEventListener("click", function() {
	descriptionBox.innerHTML = descriptions.get("default")
	dogPhotoBox.innerHTML = ""

	let profiles = document.querySelectorAll('.profilePic');
	profiles.forEach(
		function(currentValue){
			document.getElementById(currentValue.id).src = `media/index/${currentValue.id.match(personName)[1].toLowerCase()}1.png`;
		});
})
//set the initial value of the description on page load
descriptionBox.innerHTML = descriptions.get("default")
// set the initial value of dog box (temporary hopefully)
dogPhotoBox.innerHTML = ""