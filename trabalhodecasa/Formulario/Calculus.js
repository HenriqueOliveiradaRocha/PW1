
function Valida() {
	var name= document.getElementById('cnome').value;
	if (name=="")
	alert ("Campo NOME não preenchido");
	validasenha();
	confirmsenha();
	email();
	data();
}

function validasenha() {
	var senha= document.getElementById('csenha').value;
	if (senha=="")
		alert ("Campo senha vazio");
}

function confirmsenha() {
	var confir= document.getElementById('cconf').value;
	if (confir=="")
		alert("Campo confime a senha vazio");
}

function email() {
	var gmail= document.getElementById('cmail').value;
	if (gmail=="")
		alert("Campo E-mail vazio")
}

function data() {
	var ddata= document.getElementById('cdata').value;
	if (ddata=="")
		alert("Campo Data de nascimento não preenchido")
}