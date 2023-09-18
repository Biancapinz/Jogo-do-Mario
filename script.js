// cria o elemento
const mario = document.querySelector('.mario');
// faz o jump
const jump = () => {
    mario.classList.add('jump');
}
document.addEventListener('keydown', jump);
i=0;
while (i <= 20) {
    text = "The number is " + i;
    
    console.log( text);

    i++;
}