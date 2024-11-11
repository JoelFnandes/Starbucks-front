const buttons = document.querySelectorAll('.points-bar button');
const contents = document.querySelectorAll('.contents-favorites .content');

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        contents.forEach(content => content.classList.remove('active'));
        contents[index].classList.add('active');
    });
});