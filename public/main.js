const client = new Discord.Client();

  client.on('message', msg => {
    if (msg.content == '$ping') msg.reply("pong")
  });

  client.login('OTk5MDY2MzQ3MjEwMjg1MDU2.Gpavqr.MCQD6n379SL3h8WyGYkxNoYYzR9MMWDsHi49QU');

/*document.getElementById("send-button").addEventListener("click", addUserMessage)


function addUserMessage() {
    let input document.getElementById("input").innerHtml
    
}

// Define your function here
function myFunction() {
  alert('Function executed on DOMContentLoaded');
}

// DOMContentLoaded event listener to ensure all HTML is loaded before executing JavaScript
document.addEventListener('DOMContentLoaded', function() {
  // Call your function here
  myFunction();
});
*/