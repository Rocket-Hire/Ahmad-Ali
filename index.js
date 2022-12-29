// Given a string s, return true if s is palindrome.
// An sting is a palindrome when it reads the same backward as forward.
// Example#1, input: abcba  Output: true.
// Example#2, input: abcbc  Output: false.
// Example#3, input: abc  Output: false.
// Example#3, input: abcca  Output: false.

function isPalindrome(s) {
  for (let i = 0; i < s.length / 2; i++) {
    if (s[i] !== s[s.length - 1 - i]) {
      return false
    }
  }
  return true
}


// Task # 2
// You have to write a function which takes an array of integers "seq" and an integer "target". There exist two elements of the array whose sum is equal to the target. You can assume that there exists only one solution. You have to return the indices of those elements
// Example 1: Input = [1,9,2,19]  Target = 3
//Output = 0,1

//Example 2:Input= [2,4]  Target = 6 
//Output =0,1

function CheckSum(array,target) {
  array.sort()
  for(i=0; i < array.length ; i++)
    {
      for(j=i+1; i <
          array.length+1; j++)
        {
         if(array[i+1] === target)
         {
           return i , j
         }
        }
    }


};
