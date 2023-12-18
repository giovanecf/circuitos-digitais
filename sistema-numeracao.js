function getHexDigit(d) {
  const digits = [
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

  return digits[d];
}

function binToDec(value = "") {
  if (typeof value !== "string" || value.length < 1)
    return "Unknow or not set value. Expected 'String' 1 or getter size long.";

  let converted_value = 0;
  const num_of_elements = value.length - 1;

  for (let i = 0; i < num_of_elements; i++) {
    const reverse_index = num_of_elements - i;

    converted_value += parseInt(value[reverse_index]) * Math.pow(2, i);
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

  let converted_value = 0;
  const num_of_elements = value.length - 1;

  for (let i = 0; i < num_of_elements; i++) {
    const reverse_index = num_of_elements - i;

    converted_value += getHexDigit(
      parseInt(value[reverse_index]) * Math.pow(16, i)
    );
  }

  return converted_value;
}

function hexToBin(value = "") {}
function hexToDec(value = "") {}

console.log(decToHex(20));

if (false)
  for (let i = 0; i < 10; i++) {
    console.log(decToBin(i.toString()));
  }
