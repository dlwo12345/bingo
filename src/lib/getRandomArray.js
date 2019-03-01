const shuffle = array => {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

const getRandomNumberFillArray = endNumber => {
    let array = [];
    for (let i = 0; i < endNumber; i++) {
        array[i] = i + 1;
    }
    return shuffle(array);
}

// 1부터 25까지로 랜덤 입력된 이중 array return
export default function getRandomArray() {
    // 랜덤하게 채워진 1~25 숫자
    let array = getRandomNumberFillArray(25);

    let newArr = [];
    for (let i = 0; i < 5; i++) {
        const loopArr = new Array(5).fill(0); // 의미없는 array 만들어내기(loop용)
        newArr[i] = loopArr.map(v => array.pop())
    }
    return newArr;
}