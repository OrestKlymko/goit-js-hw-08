import throttle from "lodash.throttle";
const form = document.querySelector('.feedback-form')

const textarea = document.querySelector('.feedback-form textarea')
const input = document.querySelector('.feedback-form input')
reload();
const formData ={};


form.addEventListener('submit', ((e)=>{
	e.preventDefault();
	e.target.reset();
	localStorage.removeItem('formdata')
}))

function onChangeInput(e){
	formData[e.target.name]=e.target.value;
	localStorage.setItem('formdata', JSON.stringify(formData));
}
form.addEventListener('input',throttle(onChangeInput,500))


function reload () {

	const saveItem = localStorage.getItem('formdata');
	if (saveItem) {
		let temp = JSON.parse(saveItem);
		input.value = temp.email;
		textarea.value = temp.message;
	}
}


