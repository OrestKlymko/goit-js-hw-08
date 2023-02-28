import throttle from "lodash.throttle";
const form = document.querySelector('.feedback-form')

const textarea = document.querySelector('.feedback-form textarea')
const input = document.querySelector('.feedback-form input')
const saveItem = localStorage.getItem('formdata');
let temp = JSON.parse(saveItem);
reload();
const formData ={};


form.addEventListener('submit', ((e)=>{
	e.preventDefault();
  console.log(`Email: ${JSON.parse(localStorage.getItem('formdata')).email}, Message: ${JSON.parse(localStorage.getItem('formdata')).message}`)
	e.target.reset();
	localStorage.removeItem('formdata')
}))

function onChangeInput(e){
if(saveItem){
  for (let key in temp){
    formData[key] = temp[key];
  }
}
  formData[e.target.name]=e.target.value;
	localStorage.setItem('formdata', JSON.stringify(formData));
  }


form.addEventListener('input',throttle(onChangeInput,500))


function reload () {
if(saveItem){
  for (let key in temp){
    form.elements[key].value = temp[key];
  }
  }
}

