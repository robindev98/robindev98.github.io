// POUR LA PAGE DE REDIRECTION
// 1) metttre l'images des API sur l'index et sur les pages de redirection
// 2) en fonction des produits choisi, faire une page de redirection
// qui emmène sur le produit sélectionné avec le nom du produit, 
// la description, le prix total, la quantité, un tableau de personnalisation
// (qui n'aura pas d'impacte sur le serveur et n'aura pas d'impact sur le prix)
// , un bouton qui ajoute la commande à la page "panier" et l'image du produit
 

// arriver d'API
const getUsers = async function () {
	let response = await fetch('http://localhost:3000/api/teddies')
	if (response.ok) {
		let data = await response.json();
		(data[0]);
		for (let i = 0; i < data.length; i++) {
			console.log(data[i].name);
			document.getElementById('bloc_page').innerHTML = document.getElementById('bloc_page').innerHTML +
				"<div class='until'>"
				+ "	<a href='produit.html'>"
				+ "		<img class='img' src='" + data[i].imageUrl + "'>	"
				+ "	</a>"
				+ "	<h3>"
				+ data[i].name
				+ "	</h3> "
				+ "	<p class='prix'>"
				+ data[i].price + " € "
				+ "	</p>"
				+ "</div>";
		}
	} else {
		console.error('Retour du serveur : ', response.status)
	}
}
getUsers();

let teddys = document.getElementById('teddy');

let contact = {
	/*"Prénom",
	"Nom",
	"adresse",
	"ville",
	"adresse électronique"*/
}

// envoie des donnée pour le panier test




/*const img = document.getElementById('teddy')

fetch('http://localhost:3000/api/teddies/')
	.then(response => response.json())
	.then(data => teddy.src = data[0].url)
	*/





