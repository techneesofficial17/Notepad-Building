const file = document.querySelector('#file');
const open = document.querySelector('.open');
const textArea = document.querySelector('#text');
const New = document.querySelector('#new');
const newWindow = document.querySelector('#newWindow');
const Save = document.querySelector('#save');
const exit = document.querySelector('#exit');

file.addEventListener('click', () => {
    open.style.visibility = 'visible';
});

textArea.addEventListener('click', () => {
    open.style.visibility = 'hidden';
});

New.addEventListener('click', () => {
    textArea.select();
    document.execCommand('cut');
    open.style.visibility = 'hidden';
});

newWindow.addEventListener('click', () => {
    window.location.href = 'https://facebook.com';
    open.style.visibility = 'hidden';
});
let textArr = [];

Save.addEventListener('click', () => {
    let text = textArea.value;
    // console.log(text);
    textArea.select();
    document.execCommand('cut');
    open.style.visibility = 'hidden';
    textArr.push(text);
    // alert('saved');
    localStorage.setItem('text', textArr);
    console.log(textArr);
});
exit.addEventListener('click', () => {
    document.execCommand(close);
    console.log('user want to close');
});