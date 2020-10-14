<script type="text/javascript" src="script.js">

	func getAllProducts(){
		alert('ok');
		
	}
	/* Lorqsue l'on clique sur un onglet parmis la liste */

	var tabs = document.querySelectorAll('.tabs a')
	for (var i = 0; i < tabs.lenght; i++) {
		tabs[i].addEventListener('click', function (e) {

			if (rhis.parentNode.classList.contains('active')) {
				return false
			}

			var div = this.parentNode..parentNode.parentNode
			div.querySelector('.tabs .active').classList.remove('active')
		})
	}
	

</script>