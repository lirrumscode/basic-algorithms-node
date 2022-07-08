/**
 * It takes a number and returns a string that says whether the number is divisible by 2 or 1
 * @param number - The number to be checked.
 * @returns the sum of the numbers from 1 to the number that the user is adding.
 */

const numberDivisible = (number) => {
  try {
    if (number > 0) {
      if (number % 2 === 0) {
        return `The Number ${number} is divisible for 2`;
      } else {
        return `The Number ${number} is divisible for 1`;
      }
    } else {
      return `You must adding a possitive number, please try again`;
    }
  } catch (error) {
    console.error(error);
  }
};

const calculateIva = (price) => {
  const IVA = 21;
  try {
    let pricesDouble = parseFloat(price);
    return `the final price from the product ${price} is: ${
      (pricesDouble * IVA) / 10
    }`;
  } catch (error) {
    console.error(error);
  }
};

const deleteSpaces = (phrase) => {
  return phrase.split(" ").join("").toUpperCase();
};

const converPhrase = (option, phrase) => {
  console.log(`Please add U or L`);
  try {
    if (phrase !== "/^[0-9]+$/") {
      if (option === "U" || option === "u") {
        return `your option was ${option}: ${phrase.toUpperCase()}`;
      } else if (option === "L" || option === "l") {
        return `your option was ${option}: ${phrase.toLowerCase()}`;
      } else {
        return `Please write a character valid: U or L and try again.`;
      }
    } else {
      throw `ERROR, write a string character`;
    }
  } catch (error) {
    console.error(error);
  }
};

const sumNumber = (number) => {
  try {
    if (number > 1) {
      for (let index = 1; index < number; index++) {
        return `the sum from one to ${number} is: ${(index += number)}`;
      }
    } else {
      throw `Please write a number major to zero`;
    }
  } catch (error) {
    console.error(error);
  }
};

export { numberDivisible, calculateIva, deleteSpaces, converPhrase, sumNumber };
