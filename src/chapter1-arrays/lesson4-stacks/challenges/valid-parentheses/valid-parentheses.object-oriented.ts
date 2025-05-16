import Stack from '../../implementation/stack.object-oriented';

const pairs: { [key: string]: string } = {
  '(': ')',
  '[': ']',
  '{': '}',
};

const openingChars = new Set<string>(Object.keys(pairs));
const closingChars = new Set<string>(Object.values(pairs));

export default function isValidParentheses(str: string) {
  const stack = new Stack<string>();

 
  for (const char of str) {

    if (isOpeningCharChase(char)) {
      handleOpeningCharCase(char, stack);
    }
    else if (isValidClosingCharCase(char, stack)) {
      handleValidClosingCharChase(stack) 
    }
    else {
      return false;
    }

  }

  return stack.length === 0;
}

function isOpeningCharChase(char: string) {
  return openingChars.has(char);
}

function isValidClosingCharCase(char: string, stack: Stack<string>) {
  return closingChars.has(char) && isMatch(stack.peek() ?? '', char)
}

function handleOpeningCharCase(char: string, stack: Stack<string>) {
  stack.push(char);
}

function handleValidClosingCharChase(stack: Stack<string>) {
  stack.pop()
}

function isMatch(char1: string, char2: string) {
  return pairs[char1] === char2;
}
