import throttle from "lodash.throttle";
const form = document.querySelector('.feedback-form')

const textarea = document.querySelector('.feedback-form textarea')
const input = document.querySelector('.feedback-form input')
const saveItem = localStorage.getItem('formdata');
reload();
const formData ={};


form.addEventListener('submit', ((e)=>{
	e.preventDefault();
  console.log(`Email: ${formData.email}, Message: ${formData.message}`)
	e.target.reset();
	localStorage.removeItem('formdata')
}))

function onChangeInput(e){
	formData[e.target.name]=e.target.value;
	localStorage.setItem('formdata', JSON.stringify(formData));
}
form.addEventListener('input',throttle(onChangeInput,500))


function reload () {


  if (saveItem) {
    let temp = JSON.parse(saveItem);
    if(saveItem){
      if (temp.email){
        input.value = temp.email;
      }
    if (temp.message) {
      textarea.value = temp.message;
    }
    }
  }
  }

