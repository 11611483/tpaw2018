
function validation() {



var nom = document.getElementById("nom").value;

var prenom = document.getElementById("Prenom").value;





if (nom.length < 5) {

document.getElementById("error").innerHTML = "la saisie du nom est obligatoire ";





}

else {

document.getElementById("result").innerHTML = "Bienvenue" + document.querySelector("#nom").value;


}

}