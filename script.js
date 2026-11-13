//your JS code here. If required.
document.querySelector('input[type="button"]').
	addEventListener("click", function () {
		const colorSelect = document.getElementById("colorSelect");
		if(colorSelect.selectedIndex !== -1){
			colorSelect.options[colorSelect.selectedIndex].remove();

		}
		
	});