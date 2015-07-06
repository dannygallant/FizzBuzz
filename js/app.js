$(document).ready(function(){

for (i = 1; i <= 100; i++) {
	if (i%3 === 0 && i%5 === 0) {
		$('body').append("FizzBuzz");
		$('body').append("<br>");
	} else if (i%3 === 0) {
		$('body').append("Fizz");
		$('body').append("<br>");
	} else if (i%5 === 0) {
		$('body').append("Buzz");
		$('body').append("<br>");
	}  else {
		$('body').append(i);
		$('body').append("<br>");
	}

}

});