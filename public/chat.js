// Chat functionality

// Select the first contact by default
var selectedContact = document.querySelector(".sidebar li:first-child a");

// Update the chat history when a contact is selected
var contacts = document.querySelectorAll(".sidebar li a");
for (var i = 0; i < contacts.length; i++) {
	contacts[i].addEventListener("click", function() {
		// Update the selected contact
		selectedContact = this;
		// Update the sidebar
		for (var j = 0; j < contacts.length; j++) {
			contacts[j].classList.remove("active");
		}
		selectedContact.classList.add("active");
		// Update the chat history
		var chatHistory = document.querySelector(".chat-box");
		chatHistory.innerHTML = "<div class=\"message\"><p>Hello!</p></div><div class=\"message\"><p>How are you?</p></div><div class=\"message\"><p>Good, thanks for asking.</p></div><div class=\"message\"><p>What are you up to?</p></div><div class=\"message\"><p>Just working on this website.</p></div><div class=\"message\"><p>Looks great!</p></div>";
	});
}

// Send a message
var messageForm = document.querySelector("form");
messageForm.addEventListener("submit", function(event) {
	event.preventDefault();
	var messageInput = document.querySelector("input[type=text]");
	var message = messageInput.value;
	messageInput.value = "";
	var chatHistory = document.querySelector(".chat-box");
	chatHistory.innerHTML += "<div class=\"message\"><p>" + message + "</p></div>";
});