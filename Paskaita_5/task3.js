let metai = 1998;
let menuo = 09;
let diena = 17;

const metai_paskutinis = metai % 10;
const menuo_paskutinis = menuo % 10;
const diena_paskutinis = diena % 10;

console.log("Jei gimimo data yra " + metai + " ", menuo + " ", diena + " " + "tai suma bus lygi " + parseInt(metai_paskutinis + menuo_paskutinis + diena_paskutinis))