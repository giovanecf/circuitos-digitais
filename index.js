/*
  SISTEMA DE NUMERAÇÃO - Início
*/

const HEX_DIGITS = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "E",
  "C",
  "D",
  "E",
  "F",
];

function maskValue(value, n_digits) {
  for (let i = value.length; i < n_digits; i++) {
    value = "0" + value;
  }

  return value;
}

function nBaseToDec(value = "", n_base = 2) {
  if (typeof value !== "string" || value.length < 1)
    return "Unknow or not set value. Expected 'String' 1 or getter size long.";

  let converted_value = 0;

  const reversed_value =
    value.indexOf("-") > -1
      ? value.split("-")[1].split("").reverse()
      : value.split("").reverse();

  for (let i = 0; i < reversed_value.length; i++) {
    const digit_in_dec = HEX_DIGITS.indexOf(reversed_value[i]);

    if (digit_in_dec >= n_base)
      return `Bad value(${digit_in_dec}) formation for base ${n_base}`;

    converted_value += parseInt(digit_in_dec) * Math.pow(n_base, i);
  }

  return value.indexOf("-") > -1 ? "-" + converted_value : converted_value;
}

function decToNBase(value = "", n_base = 2) {
  if (typeof value !== "string" || value.length < 1)
    return "Unknow or not set value. Expected 'String' 1 or getter size long.";

  const converted_value_arr = [];
  let numerator =
    value.indexOf("-") > -1 ? parseInt(value.split("-")[1]) : parseInt(value);

  while (numerator > 1) {
    converted_value_arr.push(HEX_DIGITS[numerator % n_base]);
    numerator = Math.floor(numerator / n_base);
  }

  converted_value_arr.push(numerator);

  return value.indexOf("-") > -1
    ? "-" + converted_value_arr.reverse().join("")
    : converted_value_arr.reverse().join("");
}

function binToDec(value = "") {
  return nBaseToDec(value, 2);
}
function binToHex(value = "") {
  return decToHex(binToDec(value).toString());
}

function decToBin(value = "") {
  return decToNBase(value, 2);
}
function decToHex(value = "") {
  return decToNBase(value, 16);
}

function hexToBin(value = "") {
  return decToBin(hexToDec(value));
}
function hexToDec(value = "") {
  return nBaseToDec(value, 16);
}

/*
  SISTEMA DE NUMERAÇÃO - Fim

  *
  *
  * 

  CÓDIGOS BINÁRIOS - Início
*/

function convertToBCD(value_in_dec = "") {
  const value_arr = value_in_dec.split("");

  const value_converted = [];

  for (const v of value_arr) {
    value_converted.push(maskValue(decToBin(v), 4));
  }

  return value_converted.join("");
}

function convertFromBCD(value_in_bin_four_digits_groups = "") {
  if (value_in_bin_four_digits_groups.length % 4 !== 0)
    return "Not clearly formated!";

  const value_arr = value_in_bin_four_digits_groups.split("");
  const value_converted_arr = [];

  for (let i = 0; i < value_arr.length; i += 4) {
    const digits_to_push = binToDec(value_arr.slice(i, i + 4).join(""));
    value_converted_arr.push(digits_to_push);
  }

  return value_converted_arr.join("");
}

function convertToGrayCode(value_in_bin = "") {
  const value_converted_arr = [];
  const num_digits = value_in_bin.length;

  let isZeroTime = true;

  for (let i = 0; i < Math.pow(2, num_digits); i++) {
    for (let j = 0; j < Math.pow(2, num_digits - 1) / (i + 1); j++) {
      //Thinking
    }
    isZeroTime = !isZeroTime;
  }

  return value_converted_arr;
}

console.log(convertToGrayCode("001101010001"));

/*
  CÓDIGOS BINÁRIOS - Fim
*/
