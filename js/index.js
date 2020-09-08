
// function to replace [name1.png] with [name2.png]

function setPictures(elem){
	let personName = /pic([a-zA-z]+)/;
	let profiles = document.querySelectorAll(".profilePic");
	profiles.forEach(
		function(currentValue){
			if (currentValue == elem){
				currentValue.src = `media/index/${currentValue.id.match(personName)[1].toLowerCase()}2.png`;
			} else {
				currentValue.src = `media/index/${currentValue.id.match(personName)[1].toLowerCase()}1.png`;
			}
		});
}

let teammates = ["Ed", "Chloe", "Basit", "Seth", "Matt"];
for (member of teammates){
	document.getElementById(`pic${member}`).addEventListener("click", setPictures(document.getElementById(`pic${member}`)));
}

