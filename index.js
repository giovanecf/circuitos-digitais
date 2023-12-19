/*
  SISTEMA DE NUMERAÇÃO

  Início
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

function binToDec(value = "") {
  if (typeof value !== "string" || value.length < 1)
    return "Unknow or not set value. Expected 'String' 1 or getter size long.";

  let converted_value = 0;

  for (let i = 0; i < value.length; i++) {
    const reverse_index = value.length - i;

    converted_value += parseInt(value[reverse_index]) * Math.pow(2, i);
    console.log(reverse_index, converted_value);
  }

  return converted_value;
}
function binToHex(value = "") {
  // Create hexToBin, first
}

function decToBin(value = "") {
  if (typeof value !== "string" || value.length < 1)
    return "Unknow or not set value. Expected 'String' 1 or getter size long.";

  const converted_value_arr = [];
  let numerator = parseInt(value);

  while (numerator > 1) {
    converted_value_arr.push(numerator % 2);
    numerator = Math.floor(numerator / 2);
  }

  converted_value_arr.push(numerator);

  return converted_value_arr.reverse().join("");
}
function decToHex(value = "") {
  if (typeof value !== "string" || value.length < 1)
    return "Unknow or not set value. Expected 'String' 1 or getter size long.";

  const converted_value_arr = [];
  let numerator = parseInt(value);

  while (numerator > 1) {
    converted_value_arr.push(HEX_DIGITS[numerator % 16]);
    numerator = Math.floor(numerator / 16);
  }

  converted_value_arr.push(numerator);

  return converted_value_arr.reverse().join("");
}

function hexToBin(value = "") {
  if (typeof value !== "string" || value.length < 1)
    return "Unknow or not set value. Expected 'String' 1 or getter size long.";
}
function hexToDec(value = "") {
  if (typeof value !== "string" || value.length < 1)
    return "Unknow or not set value. Expected 'String' 1 or getter size long.";

  let converted_value = 0;

  for (let i = 0; i < value.length; i++) {
    const reverse_index = value.length - i;

    const hex_digit_in_dec = HEX_DIGITS.indexOf(value[reverse_index]);
    converted_value += parseInt(hex_digit_in_dec) * Math.pow(16, i);
    console.log(
      value.length,
      i,
      reverse_index,
      hex_digit_in_dec,
      converted_value
    );
  }

  return converted_value;
}

/*
  SISTEMA DE NUMERAÇÃO

  Fim
*/

console.log(hexToDec("1F"));

if (false)
  for (let i = 0; i < 20; i++) {
    console.log(hexToDec(i.toString()));
  }
