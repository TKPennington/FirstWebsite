console.log("Hello");
$(document).ready(function() {
	$('.submit').click(function(event){
		console.log('clicked');

		var name = $('.name').val()
		var email = $('.email').val()
		var subject = $('.subject').val()
		var message = $('.message').val()
		var attachment = $('.attachment').val()
		var statusElm =$('.status')
		statusElm.empty()

		if (name.length > 5 ){
			statusElm.append()
		} else {
			event.preventDefault()
			statusElm.append("<div>Invalid Name</div>")
		}

		if (email.length > 5 && email.includes("@") && email.includes('.')) {
			statusElm.append()
		} else {
			event.preventDefault()
			statusElm.append("<div>Invalid Email</div>")
		}

		if (subject.length > 2 ){
			statusElm.append()
		} else {
			event.preventDefault()
			statusElm.append("<div>Subject can not be blank</div>")
		}

		if (message.length > 2 ){
			statusElm.append()
		} else {
			event.preventDefault()
			statusElm.append("<div>Message can not be blank</div>")
		}
		if (attachment.includes('.exe') || attachment.includes('.mpkg')){
			event.preventDefault()
			statusElm.append("<div>File type not allowed")
		}else {
			statusElm.append()
		}
		// In order to test this, ensure have Node.js installed and within the same folder, within your console type npm install serve -g
		// once installed you can just type serve in your console
	})
})