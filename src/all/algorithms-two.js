/**
 * It takes a string and returns a string with all the vowels removed
 * @param user - The name of the user.
 * @param number - an array of numbers
 * @returns the sum of the numbers in the array.
 */

// Podrias llamar de mejor manera la funcion, porque con el nombre entendia que la funcion puede hacer llamadas a los numeros de ciertos usuarios
//
const callUserNumbers = (user, number) => {
  try {
    let sum = 0;
    let sumP = 0;
    let sumN = 0;
    let ind = 0;
    let numDelMayor = 0;
    let numDelMenor = 0;
    number.forEach((element, index) => {
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
  let sum = 0;
  // esta funcion va a traer problemas si retornas dentro de un index
  // con el for que tenias solo va a retornar la funcion un 1
  for (let index = 1; index < NUMBER; index++) {
    sum += index;
  }
  return sum
};

// con esta funcion podrias intentar los if ternarios
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
      // podrias usar includes, en lugar de indexOf, porque indexOf te regresa la posicion e includes solo un booleano
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
