//const ul= document.querySelector('.items');

//ul.remove();

//ul.firstElementChild.textContent='Hello';

//ul.children[1].innerText='Great';

//ul.lastElementChild.innerHTML='<h2>Awesome</h2>';

//ul.firstElementChild.style.background='green';

//ul.children[1].style.background='yellow';

//const btn= document.querySelector('.btn');

//btn.style.background='red';

// const btn= document.querySelector('.btn');

// btn.addEventListener('click', (e) => {
//     e.preventDefault();
    
//     document.querySelector('#my-form').style.background='#ccc';
//     document.querySelector('body').classList.add('bg-dark');
// });

// btn.addEventListener('mouseover', (e) => {
//     e.preventDefault();
    
//     document.querySelector('#my-form').style.background='green';
//     document.querySelector('body').classList.add('bg-dark');
// });

// btn.addEventListener('mouseout', (e) => {
//     e.preventDefault();
    
//     document.querySelector('#my-form').style.background='yellow';
//     document.querySelector('body').classList.add('bg-dark');
// });

const myForm= document.querySelector('#my-form');
const nameInput= document.querySelector('#name');
const emailInput= document.querySelector('#email');
const msg= document.querySelector('.msg');
const userList= document.querySelector('#users');

myForm.addEventListener('submit',onSubmit);

// function onSubmit(e) {
//     e.preventDefault();

//     if(nameInput.value ==='' || emailInput.value ===''){
//         msg.classList.add('error');
//         msg.innerHTML='Please enter all fields.';
//         setTimeout(() => msg.remove(),3000 ); 
            
//     }
//     else {
//         const li = document.createElement('li');
//         li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
   
//  userList.appendChild(li);
//    nameInput.value = '';
//    emailInput.value ='';
// }

// }



function onSubmit(e) {
    e.preventDefault();

    if(nameInput.value ==='' || emailInput.value ===''){
        msg.classList.add('error');
        msg.innerHTML='Please enter all fields.';
        setTimeout(() => msg.remove(),3000 ); 
            
    }
    else {
        localStorage.setItem(nameInput.value,emailInput.value);


   nameInput.value = '';
   emailInput.value ='';
}

}