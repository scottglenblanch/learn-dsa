import {
  peek,
  pop,
  push,
} from '../../implementation/stack.functional-programming';

const pairs: { [key: string]: string } = {
  '(': ')',
  '[': ']',
  '{': '}',
};

const openingChars = new Set<string>(Object.keys(pairs));
const closingChars = new Set<string>(Object.values(pairs));

export default function isValidParentheses(input: string) {
  return isValidParenthesesRecursive({ input, stack: [], index: 0 });
}

function isValidParenthesesRecursive({
  input,
  stack,
  index,
}: {
  input: string;
  stack: string[];
  index: number;
}): boolean {
  if (isOpeningChar({ input, index })) {
    return handleOpeningChar({ input, stack, index });
  } else if (isValidClosingChar({ input, stack, index })) {
    return handleValidClosingChar({ input, stack, index });
  } else {
    // has completed the loop or has a mismatching closing character
    return handleBaseCase({ input, stack, index });
  }
}

function handleBaseCase({
  input,
  stack,
  index,
}: {
  input: string;
  stack: string[];
  index: number;
}) {
  const hasCompletedTheLoop = index === input.length;
  const noLonelyCharacters = stack.length === 0

  return hasCompletedTheLoop && noLonelyCharacters;
}

function isOpeningChar({ input, index }: { input: string; index: number }) {
  const char = getChar({ input, index });

  return openingChars.has(char);
}

function handleOpeningChar({
  input,
  stack,
  index,
}: {
  input: string;
  stack: string[];
  index: number;
}) {
  const char = getChar({ input, index });
  const newStack = push<string>(stack, char);
  const newIndex = index + 1;

  return isValidParenthesesRecursive({
    input,
    stack: newStack,
    index: newIndex,
  });
}

function isClosingChar({ input, index }: { input: string; index: number }) {
  const char = getChar({ input, index });

  return closingChars.has(char);
}

function isValidClosingChar({
  input,
  stack,
  index,
}: {
  input: string;
  stack: string[];
  index: number;
}) {
  const possibleOpeningChar = peek<string>(stack) ?? '';
  const possibleClosingChar = getChar({ input, index });

  return (
    isClosingChar({ input, index }) &&
    isMatch({ possibleOpeningChar, possibleClosingChar })
  );
}

function handleValidClosingChar({
  input,
  stack,
  index,
}: {
  input: string;
  stack: string[];
  index: number;
}) {
  const { newList: newStack } = pop<string>(stack);
  const newIndex = index + 1;
  return isValidParenthesesRecursive({
    input,
    stack: newStack,
    index: newIndex,
  });
}

function isMatch({
  possibleOpeningChar,
  possibleClosingChar,
}: {
  possibleOpeningChar: string;
  possibleClosingChar: string;
}) {
  return pairs[possibleOpeningChar] === possibleClosingChar;
}

function getChar({ input, index }: { input: string; index: number }) {
  return input?.[index] ?? '';
}
