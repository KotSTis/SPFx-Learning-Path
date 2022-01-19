// multiple ways of declaring and assignining value to variables.
// They are all the same
let message;
message = "The owner is";

let name = "Konstantinos";

let surname = "Stergiou",
age = 25;

let address = "Syntagma"
  , country = "Greece";

//const variables do not change and will pop an error if they do
const dateOfBirth = "02/11/1996";

//best practice to declare constants in all caps when value known beforehand
const COLOR_RED = "#F00";

alert(`${message} ${name} ${surname}. He is ${age} years old and lives in 
	${address}, ${country}. He was born at ${dateOfBirth}.`);