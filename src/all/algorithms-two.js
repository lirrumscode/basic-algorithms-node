/**
 * It takes a string and returns a string with all the vowels removed
 * @param user - The name of the user.
 * @param number - an array of numbers
 * @returns the sum of the numbers in the array.
 */
const callUserNumbers = (user, number) => {
  try {
    let sum = 0;
    let sumP = 0;
    let sumN = 0;
    let ind = 0;
    let numDelMayor = 0;
    let numDelMenor = 0;
    number.filter((element, index) => {
      sum += element;
      if (number[index] > number[ind]) {
        numDelMayor = element;
      } else {
        numDelMenor = element;
      }

      if (number[index] % 2 === 0) {
        sumP += element;
      } else {
        sumN += element;
      }
    });
    return `User ${user}  =  The sum from all numbers ${sum} and the major number from ${number} is: ${numDelMayor}, the minor: ${numDelMenor} and the sum from posstive numbers ${sumP} and the negative ${sumN}`;
  } catch (error) {
    console.error(error);
  }
};

const numbersFrom100 = () => {
  const NUMBER = 100;
  for (let index = 1; index < NUMBER; index++) {
    if (index) {
      return index;
    } else {
      return index;
    }
  }
};

const chartPhrase = (phrase) => {
  if (phrase === phrase.split(" ").join("")) {
    return `your ${phrase} have a long from ${phrase.length}`;
  } else {
    return `Please write the phrase without blank spaces`;
  }
};

const callPhrase = (phrase) => {
  return `Your phrase ${phrase} is separated for words: ${phrase
    .split("")
    .join(",")}`;
};

const callPhraseTwo = (phrase) => {
  try {
    if (phrase === phrase.split(" ").join("")) {
      const exist = phrase.indexOf("a");
      if (exist >= 0) {
        return `Phrase: ${phrase}, replace for ${phrase.replace("a", "e")}`;
      } else {
        return `doesn't exist the word a in the phrase ${phrase}`;
      }
    } else {
      throw `Please write the phrase without blank spaces`;
    }
  } catch (error) {
    console.error(error);
  }
};
export {
  callUserNumbers,
  numbersFrom100,
  chartPhrase,
  callPhrase,
  callPhraseTwo,
};
