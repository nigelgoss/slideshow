(function () {
	
	if (!NodeList.prototype.forEach) NodeList.prototype.forEach = Array.prototype.forEach;
	
	document.querySelectorAll(".ng-slideshow").forEach(function (slideshow) {
	
		slideshow.style.display = "inline-block";
		slideshow.style.position = "relative";
		slideshow.style.overflow = "hidden";

		slideshow.querySelectorAll("img").forEach(function ($v, $i, $a) {
			$v.addEventListener("animationend", function () {
				$v.style.animation = "ng-slideshow-fadeOut 3s";
				$a[(($i === $a.length - 1) ? 0 : $i+1)].style.animation = "ng-slideshow-fadeIn 10s";
			}); 
		});

		slideshow.querySelector("img").style.animation = "ng-slideshow-fadeIn 10s";
	
	});
	
})();
