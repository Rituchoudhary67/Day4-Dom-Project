/*
  project Requirement:
    1. change the background color by generating random hex color by clicking a button
    2. display the hex color code on screen 
    3. add a button to copy the color code.
    4. add a toast message when a copy button is clicked
*/

const colorData = document.querySelector('.para');
const changeColorBtn = document.querySelector('.change-btn');
const copyBtn = document.querySelector('.copy-btn');
div = null;


/*step2 :- making a function for displaying the hex color*/
function hexColor() {
    const red = Math.floor(Math.random() * 255);
    const green =Math.floor( Math.random() * 255 );
    const blue = Math.floor(Math.random() * 255);

    document.body.style.background = `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
    colorData.innerText = `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;

    /*sub-step for copy btn*/
    copyBtn.addEventListener('click',function() {
        navigator.clipboard.writeText(colorData.innerText);
        generateToastMessage(`${colorData.innerText} copied`)
    })
}

function generateToastMessage(msg) {
    const div = document.createElement('div')
    div.innerText = msg;
    div.className = 'toast-message toast-message-side-in';

    div.addEventListener('click', function() {
        div.classList.remove('toast-message-side-in');
        div.classList.add('toast-message-side-out');

        div.addEventListener('animationend', function(){
            div.remove();
            div = null;
        });
    });

   
    document.body.appendChild(div);
}

/*step1 :- add event listener on change color btn because everything is happen after clicking this button*/
changeColorBtn.addEventListener('click',hexColor)