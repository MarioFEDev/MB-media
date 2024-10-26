let text1 = 'targeted paid advertising..';
let text2 = 'social media management..';
let text3 = 'client interactions and building brand loyalty..';
let position = 0;
let typingTime;
const typingDOM = document.querySelector('.typing');

function typing1() {
    if (position === text1.length - 1) {
        setTimeout(() => backspace(typing2),2000); // Call backspace with next function
        return;
    }
    typingTime = (Math.random() * 100) + 50;
    typingDOM.innerText += text1[position];
    position++;
    if (position < text1.length) {
        setTimeout(typing1, typingTime); // Continue typing
    }
}

function typing2() {
    if (position === text2.length - 1) {
        setTimeout(() => backspace(typing3),2000); // Call backspace with next function
        return;
    }
    typingTime = (Math.random() * 100) + 50;
    typingDOM.innerText += text2[position];
    position++;
    if (position < text2.length) {
        setTimeout(typing2, typingTime); // Continue typing
    }
}

function typing3() {
    if (position === text3.length - 1) {
        setTimeout(() => backspace(typing1),2000); // Loop back to typing1
        return;
    }
    typingTime = (Math.random() * 100) + 50;
    typingDOM.innerText += text3[position];
    position++;
    if (position < text3.length) {
        setTimeout(typing3, typingTime); // Continue typing
    }
}

function backspace(nextFunction) {
    if (!typingDOM.innerText.length) {
        position = 0;
        setTimeout(nextFunction, 1000); // Start the next typing function
        return;
    }
    typingDOM.innerText = typingDOM.innerText.slice(0, -1); // Remove last character
    typingTime = (Math.random() * 100) + 30;
    setTimeout(() => backspace(nextFunction), typingTime); // Continue backspacing
}



