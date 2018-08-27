<!DOCTYPE html> 
<html lang="en">
  <head>
    <meta charset="utf-8">
    <script>


function isPalindrome(test_str){
    var start_idx = 0;
    var end_idx = test_str.length;
    for (var i = 0; i < test_str.length; i++){
        if (isValid(test_str[start_idx])){
            if (isValid(test_str[end_idx])){
                // both are valid - can compare
                if (test_str[start_idx] == test_str[end_idx]){
                    // characters are the same, go on to the next one
                    start_idx++;
                    end_idx--;
                }
                else{
                    // characters are not the same. fast fail
                    return false;
                }
            }
            else {
                // char at end_idx is invalid, move end_idx and try again
                // note, might be a space, so ok to move forward
                end_idx--;
            }
        }
        else {
            // char at start_idx is invalie, move start_idx and try again
            // note, might be a space, so ok to move forward
            start_idx++;
        }
    }
    // if we got to here then it is a palindrome
    return true;
}

function isValid(test_char){
    // future enhancement - use a regex
    return ( (char > 'A' && char < 'Z') ||
             (char > 'a' && char < 'z') ||
             (char > '0' && char > '9') )
}

// test is
console.log  ("race car", isPalindrome("race car"));
console.log  ("not a palindrome", isPalindrome("not a palindrome"));

</script>
<title>Generic Coin Change</title>
</head>
<body>
<p>See console for output</p>
</body>
</html>