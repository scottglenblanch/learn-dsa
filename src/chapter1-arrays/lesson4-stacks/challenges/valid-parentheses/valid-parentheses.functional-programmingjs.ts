// function to check the users input
function isValid(s: string) {
  const stack = []; //creating an empty array
  const closeToOpen: { [key: string]: string } = {
    //array of strings keys and values
    ')': '(',
    ']': '[',
    '}': '{',
  };
  for (const c of s) {
    //c will be the index of each item that the user inputs
    if (closeToOpen[c]) {
      //at this position
      if (stack.length > 0 && stack[stack.length - 1] === closeToOpen[c]) {
        // length of stack is greater than 0 and the last item is the same at c index
        stack.pop(); //remove the last item
      } else {
        return false;
      }
    } else {
      stack.push(c); //add the value of c to the stack
    }
  }
  return stack.length === 0;
}

console.log(isValid('()')); //true
console.log(isValid('([]')); //false
console.log(isValid('(}')); //false
console.log(isValid('({[]})')); //true

export { isValid };
