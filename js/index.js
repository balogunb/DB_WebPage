
// function to replace [name1.png] with [name2.png]

//regex to pull the person's name from an element id of the form "picName"
let personName = /pic([a-zA-z]+)/;


let teamDescription = document.getElementById("teamDescription");
let dogPhoto = document.getElementById("dogPhoto");
let dogPhotoURL = document.getElementById("dogPhotoURL");

let descriptions = new Map();
descriptions.set("default", "Click on a team member's image to see their description, or on the ducks to reset!")
descriptions.set("Ed", "Howdy!I'm Ed, a junior Neuroscience/CS student who is confused that Basit thinks he needs to specify what college he goes to. I'm a big fan of ducks because of their diversity - did you know ducks aren't actually monophyletic?");
descriptions.set("Chloe", "Hi I'm Chloe, I am a junior CS major with a math minor. I like ducks.");
descriptions.set("Basit", "Hello, If you do not already know my my name is Basit and I am computer science major at lafayette college. I do not like ducks very much.");
descriptions.set("Seth", "Hi, I'm Seth. I am a junior studying Computer Science and Math. I'm just here winging it.");
descriptions.set("Matt", "What's up I'm Matthew. I am studying for a Computer Science major and a Math minor. All these ducks have me quacking up.");

let dogBreeds = new Map();
dogBreeds.set("Ed", "pug");
dogBreeds.set("Matt", "beagle");
dogBreeds.set("Basit", "boxer");
dogBreeds.set("Chloe", "weimaraner");
dogBreeds.set("Seth", "newfoundland");
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
		}
	);
}


//Fetch the message from api
async function getMessage(breedURL){
    let response = await fetch(breedURL);
    let data = await response.json()
    return data.message
}

//for each team member, add a listener to change pictures and description on click
let teamMembers = ["Ed", "Matt", "Chloe", "Seth", "Basit"]
for (const member of teamMembers){
	document.getElementById(`pic${member}`).addEventListener("click", async function() {
		setPictures(document.getElementById(`pic${member}`));
		teamDescription.innerHTML = descriptions.get(member);
		// dog photo json url: https://dog.ceo/api/breed/INSERT BREED HERE/images/random
		breed = dogBreeds.get(member);
		breedURL = "https://dog.ceo/api/breed/" + breed + "/images/random"
		dogPhotoURL.innerHTML = await getMessage(breedURL);
		dogPhoto.src = dogPhotoURL.innerHTML
	});
}

//add listener to reset page when ducks are clicked
document.getElementById("teamLogo").addEventListener("click", function() {
	teamDescription.innerHTML = teamDescription.get("default")
	dogPhotoURL.innerHTML = ""
	dogPhoto.src = dogPhotoURL.innerHTML

	let profiles = document.querySelectorAll('.profilePic');
	profiles.forEach(
		function(currentValue){
			document.getElementById(currentValue.id).src = `media/index/${currentValue.id.match(personName)[1].toLowerCase()}1.png`;
		}
	);
})
//set the initial value of the description on page load
descriptionBox.innerHTML = descriptions.get("default")
// set the initial value of dog box (temporary hopefully)
dogPhotoBox.innerHTML = ""