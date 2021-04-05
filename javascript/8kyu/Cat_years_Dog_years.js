/*

INSTRUCTION

Kata Task
I have a cat and a dog.
I got them at the same time as kitten/puppy. That was humanYears years ago.
Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:
humanYears >= 1
humanYears are whole numbers only

Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that

Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that

*/

// SOLUTION

const humanYearsCatYearsDogYears = humanYears => {
  const yearTwo = 15 + 9
  const result = []

  if(humanYears > 2){
    const cat = yearTwo + (humanYears - 2) * 4
    const dog = yearTwo + (humanYears - 2) * 5
    result.push(humanYears, cat, dog)
  }
  if(humanYears === 2){ result.push(humanYears, yearTwo, yearTwo) }
  if(humanYears === 1){ result.push(humanYears, 15, 15) }
return result
}
