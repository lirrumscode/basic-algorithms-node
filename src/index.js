import * as one from "./all/algorithms-one.js";
import * as two from "./all/algorithms-two.js";
import colors from "colors";

console.log(colors.bgYellow.underline("TEST ALGORITHMS ONE\n"));

console.log(
  colors.bgMagenta(colors.magenta.bold.italic(one.numberDivisible(2)))
);
console.log(
  colors.bgMagenta(colors.magenta.bold.italic(one.calculateIva(1.5)))
);
console.log(
  colors.bgMagenta(
    colors.magenta.bold.italic(one.deleteSpaces("Hello World In JS"))
  )
);
console.log(
  colors.bgMagenta(
    colors.magenta.bold.italic(one.converPhrase("L", "Mi Bebito Fiu Fiu"))
  )
);
console.log(colors.bgMagenta(colors.magenta.bold.italic(one.sumNumber(4))));

console.log(colors.bgYellow.underline("TEST ALGORITHMS TWO \n"));

console.log(
  colors.bgCyan(
    colors.blue.bold.italic(two.callUserNumbers("Lina", [50, 100, 5]))
  )
);
console.log(colors.bgCyan(colors.blue.bold.italic(two.numbersFrom100())));
console.log(colors.bgCyan(colors.blue.bold.italic(two.chartPhrase("NodeJS"))));
console.log(colors.bgCyan(colors.blue.bold.italic(two.callPhrase("Hola"))));
console.log(colors.bgCyan(colors.blue.bold.italic(two.callPhraseTwo("Mango"))));
