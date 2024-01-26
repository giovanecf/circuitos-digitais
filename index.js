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

const JOHNSON_DIGITS_CODE = [
  "00000",
  "00001",
  "00011",
  "00111",
  "01111",
  "11111",
  "11110",
  "11100",
  "11000",
  "10000",
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

  return value.indexOf("-") > -1 ? "-" + converted_value : "" + converted_value;
}

function decToNBase(value = "", n_base = 2) {
  if (typeof value !== "string" || value.length < 1)
    return "Unknow or not set value. Expected 'String' 1 or greatter size long.";

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
function convertFromGrayCode(value_in_bin = "") {}

function convertToOneHot(value_in_bin = "") {
  if (typeof value_in_bin !== "string" || value_in_bin.length < 1)
    return "Unknow or not set value. Expected 'String' 1 or greatter size long.";

  const value_in_dec = parseInt(binToDec(value_in_bin));
  const value_converted_arr = [];

  for (let i = 0; i < value_in_dec; i++) {
    value_converted_arr.push("0");
  }
  value_converted_arr.push("1");

  return value_converted_arr.reverse().join("");
}
function convertFromOneHot(value_in_bin = "") {
  if (typeof value_in_bin !== "string" || value_in_bin.length < 1)
    return "Unknow or not set value. Expected 'String' 1 or greatter size long.";

  if (value_in_bin.indexOf("1") > -1) {
    const reversed_index = value_in_bin.length - value_in_bin.indexOf("1") - 1;
    return decToBin(reversed_index.toString());
  } else return "Bad number formation.";
}

function convertToJohnsonCode(value_in_bin = "") {
  if (typeof value_in_bin !== "string" || value_in_bin.length < 1)
    return "Unknow or not set value. Expected 'String' 1 or greatter size long.";

  const value_in_dec = binToDec(value_in_bin);
  const value_converted_arr = [];

  for (let i = 0; i < value_in_dec.length; i++) {
    const index = parseInt(value_in_dec[i]);
    value_converted_arr.push(JOHNSON_DIGITS_CODE[index]);
  }

  return value_converted_arr.join("");
}
function convertFromJohnsonCode(value_in_johnson_code = "") {
  if (
    typeof value_in_johnson_code !== "string" ||
    value_in_johnson_code.length < 5 ||
    value_in_johnson_code.length % 5 !== 0
  )
    return "Unknow or not set value. Expected 'String' and size multiple of 5.";

  const converted_value_arr = [];

  let counter = 0;

  do {
    const index = JOHNSON_DIGITS_CODE.findIndex(
      (d) => d === value_in_johnson_code.slice(counter, counter + 5)
    );
    converted_value_arr.push(index);
    counter += 5;
  } while (counter < value_in_johnson_code.length);

  return converted_value_arr.join("");
}

function convertToExcess3Code(value_in_bin = "") {
  const value_plus_three = parseInt(binToDec(value_in_bin)) + 3;
  const new_value_in_bin = decToBin(value_plus_three.toString());

  return new_value_in_bin;
}
function convertFromExcess3Code(value_in_bin = "") {
  const value_minus_three = parseInt(binToDec(value_in_bin)) - 3;
  const new_value_in_bin = decToBin(value_minus_three.toString());

  return new_value_in_bin;
}

console.log(convertFromJohnsonCode("0001100011"));

/*
  CÓDIGOS BINÁRIOS - Fim
*/
