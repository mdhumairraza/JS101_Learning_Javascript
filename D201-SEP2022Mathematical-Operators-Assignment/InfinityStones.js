// # Problem 3 : Infinity Stones

// ### Description

// - You have to take five numbers, stored in variables with the following names
    
//     ```
//      one, two, three, four, five, six
//     ```
    

// The value stored in the variable`two, five, six`has been doubled, such that if initially the value was 3, it has become 6

// The value stored in the variable`three, four`has been increased three times, such that if initially it was 3, it has become 9

// The value stored in the variable `one` has not been changed.

// Find the sum of the updated values stored in`one, two, three, four, five, six`

// ### Input

// The first and the only line of input contains the values stored in the variable`one, two, three, four, five, six`

// ### Output

// Find the sum of the updated values stored in`one, two, three, four, five, six`

// ### Sample Input

// ```jsx
// 1 2 3 4 5
// ```

// ### Sample Output

// ```jsx
// 48
// ```

// ### Hint

// In the sample test case, the value stored in`one = 1, two =2, three = 3, four = 4, five = 5, six = 6`

// After updating the values, the values stored become`one = 1, two = 4, three = 9 , four = 12, five = 10, six = 12`

// Adding the updated values the sum becomes`1 + 4 + 9 + 12 + 10 + 12 = 48`, which is the required answer







var one ;
var two ;
var three ;
var four  ;
var five ;
var six ;

two = two * 2 ;
five = five * 2 ;
six = six * 2 ;

three = three * 3 ;
four = four * 3 ;

console.log(one + two +three + four + five + six);