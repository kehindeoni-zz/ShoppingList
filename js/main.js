$(document).ready(function(){

var $input = $("#userInput");



var verifyInput = function(input){
	if (input === "" || input === " ") {
			$("#warning").text("Field cannot be empty");
			return false;

		}  else  if ( input.length < 3) {
				$("#warning").text("Too short!!");
				return false;

			} else {
				userChoice = input;
				$("#warning").text("");
				return true;
			}
		}





var addToList = function(event){
	console.log("clicked");
	event.preventDefault;
	$inputValue = $input.val();
	if(verifyInput($inputValue)) {
		$('#primarylist').append ("<li><input id='checked' type='checkbox'>" + $inputValue + '<button id="delete">Remove</button></li>');
	}
}

$("#userInput").keyup(function(evt){
		if(evt.keyCode === 13){
			addToList();
		}
	});



$(document).on("change", "input[type='checkbox']",
	function(event){
 
	if (this.checked) {
		$(this).parent().appendTo("#finalist");
	}

	else {
		$(this).parent().appendTo("#primarylist");
	}

});


//////......To remove unwanted items from a list.........//////


var RemoveItem = function (event) {
	$(this).parent().remove();
}


$("#list").on("click","li button", RemoveItem);
$("#add_list").click(addToList);

	

});