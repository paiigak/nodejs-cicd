// max(number[]): number
// min(number[]): number
// avg(number[]): number

export const numbers = [1,9,7,1,4]


export const min = function (num: number[]): number {
  if (!num.length) throw Error("numbers was empty");
  let min = num[0]
  for(let i=0; i<num.length; i++) {
    if(num[i] < min)
    min = num[i]
  } 
  return min
}

console.log(min(numbers))

export const max = function (num: number[]): number {
  if (!num.length) throw Error("numbers was empty");
  let max = num[0]
  for(let i=0; i<num.length; i++) {
    if(num[i] > max)
    max= num[i]
  } 
  return max
}

console.log(max(numbers))


export const avg = function (num: number[]): number {
  if (!num.length) throw Error("numbers was empty");
  const avg = num.reduce((acc,cur) => acc+cur,0) 
  return avg/num.length
}

console.log(avg(numbers))