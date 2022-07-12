// Deberias incluir en todas las funciones documentacion de JS, para que sirve, que devuelve, asi como tienes en la primera funcion mas abajo
// Porque todas las funciones devuelven un string, puedes hacer que las funciones devuelvan un string en especifico?
//
// Los try catch me parecen geniales, asi puedes cachar si hay algun error
// Revisa los cambios del codigo que hice en esta rama, creo que hace el codigo mas entendible
//
/**
 * It takes a number and returns a string that says whether the number is divisible by 2 or 1
 * @param number - The number to be checked.
 * @returns the sum of the numbers from 1 to the number that the user is adding.
 */

exports.numberDivisible = (number) => {
  try {
    // Como tienes varios returns no necesitas tener de else, para que hagan el return, solo si entra en un if hara lo que dice el codigo
    //
    const stringForNegativesNumbers = 'You must adding a possitive number, please try again';
    if (number < 0) return stringForNegativesNumbers;
    if (number % 2 === 0) return `The Number ${number} is divisible for 2`;
    return `The Number ${number} is divisible for 1`;
  } catch (error) {
    console.error(error);
  }
};

exports.calculateIva = (price) => {
  // No necesitas poner let a una variable que no cambia con el tiempo
  // Al hacer mas variables que describan lo que  hace tu funcion, se hace mas facil leer el codigo
  //
  const IVA = 21; // Me parece excelente el uso de esta constante en mayusculas
  try {
    const PARSE_PRICE = parseFloat(price);
    const PRICE_WITH_IVA = (PARSE_PRICE * IVA) / 10
    const finalPrice = `the final price from the product ${price} is: ${PRICE_WITH_IVA}`
    return finalPrice;
  } catch (error) {
    console.error(error);
  }
};

exports.deleteSpaces = (phrase) => {
  return phrase.split(" ").join("").toUpperCase();
};

exports.converPhrase = (option, phrase) => {
  // No entiendo que hace esta funcion o si debes darle algun dato de entrada
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

exports.sumNumber = (number) => {
  try {
    // esta funcion va a generarte un problema si dejas el return dentro del for, porque va a retornar un datos antes de haber iniciado la suma
    //
    const caseNumberIsZero = 'Please write a number major to zero';
    if (number < 1) throw caseNumberIsZero;
    const startNumber = 1;
    let summatory = 0;
    for (let i = startNumber; i < number; i++) {
      summatory += i
    }
    return summatory
    //for (let index = 1; index < number; index++) {
      //return `the sum from one to ${number} is: ${(index += number)}`;
    //}
  } catch (error) {
    console.error(error);
  }
};
