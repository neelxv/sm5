let number = prompt('Введите цифру:');
let block = '<div class ="block"></div>';
let blocklist = document.querySelector('.block_control');
for(let i = 0; i < number; i++){
    blocklist.insertAdjacentHTML('beforeend',block);
}