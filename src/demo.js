function isPalindrome(word){
    var splitWord = word.split("")
    var reverseWord = splitWord.reverse()
    var newWord = reverseWord.join("")
    if(newWord === word){
        return true
    }
    else{
        return false
    }
}

// This function checks an array of strings to see if the code word for toilet paper shows up
// Note: there are a couple things wrong with this function use the tests you create to figure out what is wrong 
// with the function and fix it.
function checkForMessage(messageArray){
    console.log(messageArray.length)
    var secretMessage = "No toilet paper"
    for (var i = 1; i < messageArray.length - 1; i++){
        console.log(messageArray[i])
        if(messageArray[i] === "twilight books"){
            console.log("found")
            secretMessage = "we have toilet paper"
        }
    }
    console.log(secretMessage)
    return secretMessage
}

exports.isPalindrome = isPalindrome
exports.checkForMessage = checkForMessage