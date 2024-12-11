const calcNums = [...document.querySelectorAll('.js-calc-num')];
const calcResult = document.getElementById('js-calc-result');
const deleteBtn = document.getElementById('js-delete');

//入力する機能
const getInput = (event) => {
    const btnType = event.target.dataset.target;
    calcResult.textContent += btnType;
    inputToArray(calcResult.textContent);
}

//入力された値を配列に格納する機能
const inputToArray = (input) => {
    const resultArray = input.split(/([+\-*/])/);
    const numberdArray = resultArray.map(result => {
        if(result) {
            return Number(result);
        }
    });
    console.log(numberdArray);
}

const deleteResult = () => {
    calcResult.textContent = '';
}

for (let i = 0; i < calcNums.length; i++) {
    const calcNum = calcNums[i];
    const targetValue = calcNum.dataset.target;

    if (targetValue !== 'AC') {
        calcNum.addEventListener('click', getInput);
    } else {
        calcNum.addEventListener('click', deleteResult);
    } 
}


//入力された文字列を配列に格納する


const calculation = () => {
    
}


deleteBtn.addEventListener('click', deleteResult);