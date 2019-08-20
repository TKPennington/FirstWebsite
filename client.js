console.log("Hello world");

const form = document.querySelector("form");
const button = document.getElementById("launch");
const x = document.getElementById("chatform");
button.style.display = "none";

function openChat() {  			
  			if (form.style.display === "none") {
    			form.style.display = "";
    			button.style.display = "none";

  			} else {
    			form.style.display = "none";
    			button.style.display = "";
  			}
		}


form.addEventListener('submit', (event) => {
	event.preventDefault();
	const formData = new FormData(form);
	const name = formData.get("name");
	const content = formData.get("content");

	const message = {
		name,
		content
	};
	console.log(message);
	form.reset();
	form.style.display = "none";
	button.style.display = "";
	
});

