const client = new Discord.Client();

  client.on('message', msg => {
    if (msg.content == '$ping') msg.reply("pong")
  });

client.login((Buffer.from('999066347210285056').toString('base64')).toString() + '.GPu89o.4poV7QqDWgAkPF1d1NQN-Mh9VP5qV4bOp6zR_A');

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