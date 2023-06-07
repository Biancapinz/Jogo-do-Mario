// cria o elemento
const mario = document.querySelector('.mario');
// faz o jump
const jump = () => {
    mario.classList.add('jump');
}
document.addEventListener('keydown', jump);