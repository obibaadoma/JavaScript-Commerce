function SearchingChallenge(str) { 

  // __define-ocg__: Initialize variables to track numbers and letters
  let sumOfDigits = 0; // Variable to store the sum of all single-digit numbers
  let letterCount = 0; // Variable to store the count of all letters in the string
  let digitArray = str.match(/\d/g); // Extract all single-digit numbers in the string
  
  // Sum all the single-digit numbers
  if (digitArray) {
    sumOfDigits = digitArray.reduce((sum, num) => sum + parseInt(num), 0);
  }

  // Count all letters in the string
  for (let char of str) {
    if (/[a-zA-Z]/.test(char)) {
      letterCount++;
    }
  }

  // Calculate the result by dividing sum of numbers by letter count
  let finalResult = letterCount > 0 ? sumOfDigits / letterCount : 0; // Avoid division by zero
  
  // Return the result rounded to the nearest whole number
  return Math.round(finalResult); 

}

// keep this function call here 
console.log(SearchingChallenge("H3ello9-9")); // Should output 4
console.log(SearchingChallenge("One Number*1*")); // Should output 0
