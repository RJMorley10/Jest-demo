const demo = require('./demo')

test("Check if the word is a palindrome", () => {
    expect(demo.isPalindrome("racecar").toBeTruthy)

})

test("Check if the word is a not palindrome", () => {
    expect(demo.isPalindrome("yellow").toBeFalsy)
    
})

test("Check if a sentance is a palindrome", () => {
    // write test to check if a sentance is a palindrome

})

test("see if the number 212 is a palindrome", () => {
    // write test to check id 212 is a palindrome
})


describe("check to see if the store has toilet paper", () => {
    test("decode the secret list to see if the grocery store has toilet paper", () => {
        var secretList = [
            'coffee',
            'rice',
            'paper towels',
            'we have toilet paper',
            'milk',
            'cheese',
        ]
        const verificationString = "No toilet paper"
        expect(demo.checkForMessage(secretList)).toEqual(verificationString)
    })
})

describe("Lets see if they have toilet paper today", () => {
    test("decode the secret list to see if the grocery store has toilet paper", () => {
        var secretList = [
            'coffee',
            'rice',
            'paper towels',
            'we have toilet paper',
            'milk',
            'cheese',
            'twilight books'
        ]
        // finish this test to see if the store now has toilet paper 
    })
})

// test to see what happens when your contact adds the secret as the last item in the array

describe("Lets see if they have toilet paper today", () => {
    test("decode the secret list to see if the grocery store has toilet paper", () => {
        var secretList = [
            'twilight books',
            'coffee',
            'rice',
            'paper towels',
            'we have toilet paper',
            'milk',
            'cheese',
        ]
        // finish this test to see if the store now has toilet paper 
    })
})

