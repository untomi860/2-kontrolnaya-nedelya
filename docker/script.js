function login () {
	let log = $('#login').val()
	let pas = $('#passw').val()

	$.get('auth.php', {login: log, password: pas}, function(data) {
		let otvet = JSON.parse(data)
		if('error' in otvet) {
			alert(otvet['otvet']['text'])
		}
		else if ('user' in otvet) {
			localStorage['token'] = otvet['user']['token']
			localStorage['expired'] = otvet['user']['expired']
			window.location.href = "tovary.html"
		}
		else {
			alert('nepravilnaya oshibka')
			console.log(data)
		}
	})
}
