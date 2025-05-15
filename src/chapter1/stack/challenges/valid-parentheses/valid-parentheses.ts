import Stack from "../../implementation/stack";

const pairs: { [key: string]: string} = {
    '(': ')',
    '[': ']',
    '{': '}'
}

const openingChars = new Set<string>(Object.keys(pairs))
const closingChars = new Set<string>(Object.values(pairs))

export default function isValidParentheses(str: string) {

    const stack = new Stack<string>()

    let isValid = str.length > 1;
    for(const char of str) {

        const isOpeningChar = openingChars.has(char)
        const isClosingChar = closingChars.has(char)

        if (isOpeningChar) stack.push(char)
        
        if (isClosingChar) isValid = isMatch(stack.pop() ?? '', char)

        if (!isValid) break;
    }

    return isValid
}

function isMatch(char1: string, char2: string) {
    return pairs[char1] === char2
}
