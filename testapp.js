/*
On choisit une chiffre aléatooirement
Et on demande à l'utilisateur de rentrer un chiffre
tante que le chiffre n'est pas bon :
	SI le chiffre est au dessus : alert au dessus
	SINN  : alert en dessous
et on dmande à l'utilsateur de rentrer un chiffre
alert succès
*/  


/* fonction math.random prend un chiffre entre 0 et1 et à virgule
alors ajout de math.round qui donne un entier 

le window.prompt demande à l'utilsateur quelque chose mais le résultat est une chîne de valeur contenant du texte
donc on met un parsInt qui modifie en chiffre
pour entrer dans la boucle on utilse while
*/

/* la fonction qui permet le quizz d'un chiffre
(function () {
	var demo = window.confirm("Salut les gens")
	console.log(demo)	


var chiffreADeviner = Math.round(Math.random() * 10) 
var essaiChiffre = window.prompt('entrer votre chiffre')
essaiChiffre = parseInt(essaiChiffre, 10)
while (essaiChiffre != chiffreADeviner) {
	if (essaiChiffre > chiffreADeviner) {
		alert('au dessus !')
	} else {
		alert('en dessous')
	}
	essaiChiffre = window.prompt('retentez votre chance !')
}
alert('bravo!')

})() */

// la fonction avec le quizz d'un chiffre et avec trois esssai
/* (function () {
	var demo = window.confirm("Salut les gens")
	console.log(demo)	


var chiffreADeviner = Math.round(Math.random() * 10) 
var nombreEssai = 3
var essaiChiffre = window.prompt('entrer votre chiffre')
essaiChiffre = parseInt(essaiChiffre, 10)
while (essaiChiffre != chiffreADeviner && esssai > 0) {
	nombreEssai--
	if (essaiChiffre > chiffreADeviner) {
		alert('au dessus !')
	} else {
		alert('en dessous')
	}
	if (nombreEssai > 0 ) {
		essaiChiffre = window.prompt('retentez votre chance !')
	}
}
if (nombreEssai === chiffreADeviner) {
	alert('bravo')
} else {
	alert('echec')
}
alert('bravo!')

})() */

// autre solution équivalente mais avec système de tableaux

function () {

var chiffreADeviner = Math.round(Math.random() * 10) 
var nombreEssai = 3
var essai
for (var i = 0; i < 3; i++) {
	if (i == 0) {
		essai = prompt('Entrez votre chiffre')
	} else {
		essai = prompt('retentez votre chance')
	}
	essai = parseInt(essai, 10)
	if (essai == chiffreADeviner) {
		break
	} else if (essai > chiffreADeviner) {
		alert('trop haut')
	} else {
		alert('trop bas')
	}
}

if (essai == chiffreADeviner) {
	alert('bravo')
} else {
	alert('echec')
}