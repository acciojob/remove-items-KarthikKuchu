//your JS code here. If required.
document.querySelector('input[type="button"]').
	addEventListener("click", function () {
		const colorSelect = document.getElementById("colorSelect");
		colorSelect.remove(colorSelect.selectedIndex);
		
	});