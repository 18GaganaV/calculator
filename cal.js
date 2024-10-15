let display=document.getElementById("display");

function appendTodisplay(input){
    display.value+=input;
}

document.addEventListener('keydown', function(event) {
    event.preventDefault();
    if (event.key === 'Enter') {
        calculate();
    } else if (event.key === 'Delete') {
        cleardisplay();
    } else if(event.key === 'Backspace'){
        clearLast();
    } else if(event.key === 'Space'){
        console.log();
    } else {
        console.log("Key pressed: " + event.key);
        if(event.key === '-'){
            appendTodisplay(event.key);
        } else if(event.key === '/'){
            appendTodisplay(event.key);
        } else if(event.key === '+'){
            appendTodisplay(event.key);
        } else if(event.key === '*'){
            appendTodisplay(event.key);
        }
        else if(!isNaN(event.key)){
            appendTodisplay(event.key);
        }
        else{
            console.log("Invalid Expression");
        }
    }
});

 function cleardisplay(){
    display.value="";
 }

 function clearLast(){
    let text = display.textContent;
    text = text.substring(0, value.length - 1);
    display.textContent = text;
 }

 function calculate(){
    try{
    display.value=eval(display.value)
    }
    catch(error){
        display.value="Error";
    }
 }