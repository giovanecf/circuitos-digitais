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
  const value_as_int = parseInt(value);
  const result = value_as_int + 1;

  let count = 0;
  while (result > 1) {
    result = value[count] / 2;
    converted_value_arr.push(value[i] % 2);
    count++;
  }

  return converted_value_arr.reverse();
}
function decToHex(value = "") {}

function hexToBin(value = "") {}
function hexToDec(value = "") {}

console.log(decToBin("7"));
