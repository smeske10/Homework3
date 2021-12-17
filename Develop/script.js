// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  var passwordText = document.querySelector("#password");


  //write password rules
      //define password characters length
      var passwordMinLength = 8;
      var passwordMaxLength = 128;
  //Set Password Length
    let passwordLength = prompt("How many characters? Minimum = 8, Maximum = 128");

    if (passwordLength < passwordMinLength) {
      alert ("Please enter a value greater than 8");
      return;
    }
    else if (passwordLength > passwordMaxLength) {
      alert ("Please enter a value less than 128");
      return;
    }
    else {
      console.log(passwordLength);
    };

    const valid = "y, n"

  //Set Password Case
  let passwordCase = prompt("Would you like to use Upper Case letters? Y/N");
    if (passwordCase.includes(valid)) {
      alert ("Please enter a valid input");
      return;
    };
    console.log(passwordCase);
    
  //Set Include Numbers
  let passwordNumbers = prompt("Would you like to use Numbers? Y/N");
    if (passwordNumbers.includes(valid)) {
      alert ("Please enter a valid input for Numbers");
      return;
  };
  console.log(passwordNumbers);

  //Set Include Symbols
  let passwordSymbols = prompt("Would you like to use Symbols? Y/N");
  if (passwordSymbols.includes(valid)) {
    alert ("Please enter a valid input for Symbols");
    return;
  };
  console.log(passwordSymbols);

  //set array of characters to concatenate
  const alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
  const alphaUpper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
  const numbers = ['0','1','2','3','4','5','6','7','8','9',];
  const symbols = ['!','@','#','$','%','^','&','*','_','-','+','=',];
  
  //generate a Password
  let charCodes = alpha;
  var password = generatePassword()

  function generatePassword() {
    if (passwordCase == "y") charCodes = charCodes.concat(alphaUpper);
    console.log(charCodes);
    if (passwordNumbers == "y") charCodes = charCodes.concat(numbers);
    console.log(charCodes);
    if (passwordSymbols == "y") charCodes = charCodes.concat(symbols);
    console.log(charCodes);
  
  var passwordChar = "";
  for(let i = 0; i<charCodes.length; i++) {
    var characters = charCodes[Math.floor(Math.random() * charCodes.length)];
    passwordChar += characters;
  };
  return passwordChar;
}

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
