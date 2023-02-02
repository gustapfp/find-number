function generateRandom(min_value, max_value) {
    // Generate a int random number detemined by a range [min_value:max_value]
    let secret_number = Math.random() * (max_value - min_value) + 1;
    return [parseInt(secret_number), min_value, max_value];
}

const [secret_number, min_value, max_value] = generateRandom(0, 100);

const display_min_value = document.getElementById("min-value");
const display_max_value = document.getElementById("max-value");

display_max_value.innerHTML = max_value;
display_min_value.innerHTML = min_value;

// console.log(`Min value: ${min_value} `);
// console.log(`Max value: ${max_value} `);
console.log(`Secret number: ${secret_number} `);