function checkPalindrome(phrase) {
    for(let i=0, j = phrase.length -1 ; i< phrase.length/2 ;i++, j--){
        if(phrase[i] != phrase[j]){
            return phrase + " is not a palindrome"
        }
    }
return phrase + " is a palindrome***"
}

function checkPalindrome2(phrase) {
    let i=0, j = phrase.length -1 ;
    while( i< phrase.length/2 ){
        if(phrase[i] != phrase[j]){
            return phrase + " is not a palindrome"
        }
        i++, j--;
    }
return phrase + " is a palindrome***"
}
