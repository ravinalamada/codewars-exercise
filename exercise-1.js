/*INSTRUCTION 
  1. Given an array of strings
  2. Sort alphabetically
  3. String must be lowercase
  3. return the array's first value and have it joined with "***"
  4. the string shouldn't mutated
*/

function twoSort(s) {
  return   s.sort() // sort the items alphabetically
            .map(d => d.toLowerCase()
            .split('') // split the string
            .join("***"))[0] // takes the first item within the array and join them with the 3 chars
}