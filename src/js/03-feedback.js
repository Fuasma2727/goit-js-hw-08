import throttle from 'lodash.throttle';

let submit = document.querySelector('button[type="submit"]');
let input1 = document.querySelector('input');
let input2 = document.querySelector('textarea');

const submitHandler = () => {
    const inputValue = input1.value;
    const textareaValue = input2.value;
    
    let feedbackArray = [inputValue, textareaValue];
    let feedbackArrayJSON = JSON.stringify(feedbackArray);
    localStorage.setItem("feedback-form-state", feedbackArrayJSON);

    console.log(inputValue);
    console.log(textareaValue);
};

// Utiliza lodash.throttle para limitar la ejecución de submitHandler a una vez cada 500 ms
const throttledSubmitHandler = throttle(submitHandler, 500);
submit.addEventListener('click', throttledSubmitHandler);


window.addEventListener('load', () => {
    let storedFeedbackArrayJSON = localStorage.getItem("feedback-form-state");
    let storedFeedbackArray = JSON.parse(storedFeedbackArrayJSON);
    
    if (storedFeedbackArray) {
        input1.value = storedFeedbackArray[0];
        input2.value = storedFeedbackArray[1];
    }
});
