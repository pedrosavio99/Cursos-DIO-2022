//seleionando os elementos do html
//criar o eventlistener para fazer todasos eventos 

function changeMode(){
    console.log('cliquei')
    changeClasses();
    changeText();
}

function changeClasses(){
    button.classList.toggle('dark-mode');
    h1.classList.toggle('dark-mode');
    body.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
}

function changeText(){
    if( button.classList.contains('dark-mode')){
        button.innerHTML = "Light Mode";
        h1.innerHTML = "Dark Mode ON";
        return;
    }

    button.innerHTML = "Dark Mode";
    h1.innerHTML = "Light Mode ON";

}



const button = document.getElementById("mode-seletor");
const h1 = document.getElementById("page-title");
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

button.addEventListener('click', changeMode);