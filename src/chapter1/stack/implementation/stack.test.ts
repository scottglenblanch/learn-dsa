import Stack from './stack';

describe('stack', () => {

    let stack: Stack<string> = new Stack<string>();

    beforeEach(() => {
        stack = new Stack<string>()
    })

    it('should initially be empty', () => {
        const expected = 0
        const result = stack.length

        expect(result).toBe(expected)
    })

    it('should have 1 item when items are added', () => {
        const expected = 1
        let result: number = 0;

        stack.push('a')

        result = stack.length

        expect(result).toBe(expected)
    })

    it('should be Last in/ First Out', () => {
        const itemsToAdd = ['a', 'b', 'c']
        const orderExpected = [...itemsToAdd].reverse()

        itemsToAdd.forEach((char) => stack.push(char))

        orderExpected.forEach((expected) =>{
            const result = stack.pop()
            expect(result).toBe(expected)
        })
    })
})