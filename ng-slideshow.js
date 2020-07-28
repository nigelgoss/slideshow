(function () {
	
	if (!NodeList.prototype.forEach) NodeList.prototype.forEach = Array.prototype.forEach;
	
	let style = document.createElement("style"); document.head.appendChild(style);
	style.textContent = [
		".ng-slideshow img { width:100%; height:100%; object-fit:cover; position:absolute; top:0; left:0; opacity:0; transform:scale(1.1); z-index:0; }",
		".ng-slideshow a:nth-of-type(odd) img { transform-origin:20% 40%; } .ng-slideshow a:nth-of-type(even) img { transform-origin:80% 40%; }",
		"@keyframes ng-slideshow-fadeIn { 0% { opacity:0; transform:scale(1.0); z-index:1; } 50%, 100% { opacity:1; transform:scale(1.1); z-index:1; } }",
		"@keyframes ng-slideshow-fadeOut { 0% { opacity:1; } 100% { opacity:0.5; } }"
	].join("\n");
	
	document.querySelectorAll(".ng-slideshow").forEach(function (slideshow) {
	
		slideshow.style.display = "inline-block";
		slideshow.style.position = "relative";
		slideshow.style.overflow = "hidden";
		slideshow.style.margin = "3px";
		slideshow.style.border = "3px solid lightgrey"; 

		slideshow.querySelectorAll("img").forEach(function ($v, $i, $a) {
			$v.onanimationend = function () {
				$v.style.animation = "ng-slideshow-fadeOut 3s";
				$a[(($i === $a.length - 1) ? 0 : $i+1)].style.animation = "ng-slideshow-fadeIn 10s";
			}; 
		});

		slideshow.querySelector("img").style.animation = "ng-slideshow-fadeIn 10s";
	
	});
	
})();
