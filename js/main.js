$(document).ready(function(){

		 ShopManager.init();

});

var ShopManager = (function() {
		
	var that = {};

	that.init =function() {


		var $input = $("#userInput");


			// To verify user input///
		var verifyInput = function(input){
				// return false if field is empty 

			if (input === "" || input === " ") {
				$("#warning").text("Field cannot be empty");
				return false;
				
			}  

				// Also, return false if user input has less than two or more than 20 characters

			else  if ( input.length < 2 || input.length > 20) {
				$("#warning").text("!Can only take a min of 2 and a max of 20 characters");
				return false;

					
			} 

				// Else, return nothing

			else {
				userChoice = input;
				$("#warning").text("");
				return true;
			}

		}



		// Append the check box and the remove button to user's input (after user's input has been verified)...

		var addToList = function(event){
			console.log("clicked");
			event.preventDefault();
			$inputValue = $input.val();
			if(verifyInput($inputValue)) {
				$('#primarylist').append ("<li><input id='checked' type='checkbox'>" + $inputValue + '<button id="delete">Remove</button></li>');
			}

			$("#userInput").val("");
		}


		// When the enter key is pressed on the keyboard, item should be added to list
		$("#userInput").keyup(function(evt){
			if(evt.keyCode == 13){
				addToList(evt);
			}
		});


		//...Move  item from primary to final list when checked...

		$(document).on("change", "input[type='checkbox']",
			function(event){
		 
			if (this.checked) {
				$(this).parent().appendTo("#finalist");
			}

			//// Otherwise, It should remain in the primaly list...../////

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

	}

	return that;

})();