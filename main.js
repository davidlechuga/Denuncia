// Your web app's Firebase configuration ok
var firebaseConfig = {
	apiKey: 'AIzaSyCVSemoeLW6v-DPSG-dSFk8R4BF97cQvsw',
	authDomain: 'delitos-fbddf.firebaseapp.com',
	databaseURL: 'https://delitos-fbddf.firebaseio.com',
	projectId: 'delitos-fbddf',
	storageBucket: 'delitos-fbddf.appspot.com',
	messagingSenderId: '717002420785',
	appId: '1:717002420785:web:8f9051fb00c60032341b10'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//ref messages collection

var messagesRef = firebase.database().ref('ciudadanos');

//listen form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

//submit form
function submitForm(e) {
	e.preventDefault();

	// Get value

	var nombre = getInputVal('nombre');
	var email = getInputVal('email');
	var nacimiento = getInputVal('nacimiento');
	var tel = getInputVal('tel');
	var direc = getInputVal('direc');
	var formular = getInputVal('formular');

	var selectdelito = getInputVal('selectdelito');

	var lugar = getInputVal('lugar');
	var time = getInputVal('time');
	var palabras = getInputVal('palabras');
	var hechos = getInputVal('hechos');

	//save message
	saveMessages(nombre, email, nacimiento, tel, direc, formular, selectdelito, lugar, time, palabras, hechos);

	//show alert
	document.querySelector('.alert').style.display = 'flex';

	//hide alert after 3 seconds
	setTimeout(function() {
		document.querySelector('.alert').style.display = 'none';
	}, 3000);

	//clear form
	document.getElementById('contactForm').reset();
}

// get info values

function getInputVal(id) {
	return document.getElementById(id).value;
}

// save messages to firebase

function saveMessages(nombre, email, nacimiento, tel, direc, formular, selectdelito, lugar, time, palabras, hechos) {
	var newMessageRef = messagesRef.push();
	newMessageRef.set({
		nombre: nombre,
		email: email,
		nacimiento: nacimiento,
		tel: tel,
		direc: direc,
		formular: formular,

		selectdelito: selectdelito,

		lugar: lugar,
		time: time,
		palabras: palabras,
		hechos: hechos
	});
}
