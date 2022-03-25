function function1(sentence){
    return sentence.split(" ").length - 1;
}

function function2(numArray){
    let sum = numArray.reduce((a, b) => a + b, 0);
    let avg = sum/numArray.length;

    return avg;
}

function function3(numArray){
    let evenArray = new Array();

    for (num of numArray){
        if (num % 2 == 0) evenArray.push(num);
    }

    return evenArray;
}

function function4(numArray){
    let avg = function2(numArray);
    let bigArray = new Array();

    for (num of numArray){
        if (num > avg) bigArray.push(num);
    }

    return bigArray;
}

function function5(wordArray){
    let text = new String();

    for (let i = 0; i < wordArray.length - 1; i++){
        text += wordArray[i] + ",";
    }
    text += wordArray[wordArray.length - 1];

    return text;
}

function function6(wordArray){
    let n = wordArray.length;

    for (let i = 0; i < n / 2; i++){
        let temp = wordArray[i];
        wordArray[i] = wordArray[n - 1 - i];
        wordArray[n - 1 - i] = temp;
    }

    return wordArray;
}

function function7(wordArray1, wordArray2){
    let conjArray = new Array();

    for (word1 of wordArray1){
        for (word2 of wordArray2){
            if (word1 == word2){
                conjArray.push(word1);
                break;
            }
        }
    }

    return conjArray;
}

function function8(wordArray, char){
    let charArray = new Array();

    for (word of wordArray){
        if (word.charAt(0) == char) charArray.push(word);
    }

    return charArray;
}

function function9(word){
    let charArray = new Array();
    let occurArray = new Array();

    for (char of word){
        let isThere = false;
        for (uniqueChar in charArray){
            if (char == charArray[uniqueChar]){
                isThere = true;
                occurArray[uniqueChar]++;
                break;
            }
        }
        if (!isThere){
            charArray.push(char);
            occurArray.push(1);
        }
    }

    for (char in charArray){
        console.log(`${charArray[char]} - ${occurArray[char]}`);
    }
}