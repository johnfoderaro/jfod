---
title: Fundamental JavaScript Loops Demystified
description: Learn the fundamentals of Javascript For Loops, While Loops, and Do.. While Loops. Find out when to use each loop depending upon your scenario.
headline: Fundamental JavaScript Loops Demystified
date: January 20, 2016
collection: blog
layout: post.hbt
---

New to JavaScript and just stumbled upon the world of loops? Then, check out this easy to understand tutorial on the fundamentals of loops.

Tutorials on this topic may be a dime a dozen, but are they this awesome and easy to understand? Probably not!

At some point in every web developer's career, JavaScript has become a new language to explore. And if you have previous experience with other languages, the concept of loops should be second nature. Some syntax may even appear to be very familiar too, as JavaScript was heavily influenced by several languages during its conception, such as C, Java, Scheme, Perl, Python, etc.

However, if loops *and* JavaScript are new subjects for you, then continue reading to learn more about three very useful and fundamental JavaScript loops:

- **for**
- **while**
- **do... while**

## JavaScript **For Loop**
A **for loop** is identified using the `for` keyword, followed by a set of parentheses which accepts three expressions separated by semicolons. The first expression typically initializes a counter variable, the second expression is the condition that is evaluated before each loop iteration, and the third expression is evaluated at the end of each loop, usually to increment the counter variable. Following these expressions is a code block (or set of curly braces) which contains a statement (or statements) that executes during the loop. Below is a simple example:

**Log the numbers 1 through 10**
{% highlight js %}
for (var i = 1; i <= 10; i++) {
  console.log(i);
}
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
{% endhighlight %}

Here is a quick summary of what happened during the loop along with how the console was able to log the numbers 1 through 10:

- `var i` is initialized, holding the value of `1`
- The interpreter checks the condition `i <= 10`
- The statement `console.log(i)` executes
- `i` is incremented and the loop starts over
- This process repeats until `i <= 10` is false

## JavaScript **While Loop**
Much like above, a **while loop** is identified using the `while` keyword, followed by parentheses containing an expression that is evaluated. After the parentheses, there is a code block that contains a statement (or statements) that executes *while* the condition evaluates to true. Once the condition is false, the loop stops. Below is a simple example:

**Log the numbers 1 through 10**
{% highlight js %}
var i = 0;
while (i < 10) {
  i++;
  console.log(i);
}
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
{% endhighlight %}

Here is a quick summary of what happened during the loop and how the console was able to log the numbers 1 through 10:

- `var i` is initialized, holding the value of `0`
- the condition `i < 10` is evaluated
- `i` is incremented
- `console.log(i)` is executed
- This process repeats until `i  < 10` is false

## JavaScript **Do... While Loop**
The **do... while loop** begins with the `do` keyword, followed by a code block containing the statement (or statements) to execute, and then ends with the keyword `while` followed by the condition within parentheses. This loop differs from the one above in that it executes the code within the loop at least one time before it evaluates the condition to true or false. As with the other loops discussed above, this loop will continue until the condition is false. Below is a simple example:

**Log the numbers 1 through 10**
{% highlight js %}
var i = 0;
do {
  i++;
  console.log(i);
} while (i < 10);
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
{% endhighlight %}
Here is a quick summary of what happened during the loop and how the console was able to log the numbers 1 through 10:

- `var i` is initialized, holding the value of `0`
- `do`  executes the code block
- `i` is incremented
- `console.log(i)` is executed
- `while` checks the condition
- The loop continues to repeat until `i < 10` is false

### **For** vs **While** vs **Do... While**
Now that you've mastered these fundamental JavaScript loops, you're probably asking yourself: what's the difference? When should I use which?

### When to Use **For**
The `for` loop is a great solution to use for looping when the amount of repetitions is known.

### When to Use **While**
The `while` loop can be used when the amount of repetition is unknown, such as a scenario where user input can change the condition to false. This loop is versatile as even a counter (similar to a `for` loop) can be included in the code block to help facilitate when the loop should ends

### When to Use **Do... While**
The `do... while` loop is as versatile as the `while` loop, but offers one major difference: the statements within the code block are guaranteed to be executed at least once.

### Avoid Endless Loops!
During your looping, it's critical to remember that you must have a method in which to break out of your loop by having the condition eventually evaluate to false. If it does not, your loop can run "forever", becoming an endless loop. *This is bad*, as it renders a web page or app unresponsive!

## Fun with Loops
A common lesson in programming is the FizzBuzz test. The question generally asks you to print the numbers 1 through 100. For numbers divisible by 3, print "Fizz". For numbers divisible by 5, print "Buzz". For numbers that are both divisible by 5 *and* 3, print "FizzBuzz". Otherwise, print out the number.

The script below only loops through 1 to 20, but the logic is the same -- also, it's been written for readability and clarity, not brevity:

{% highlight js %}
for (var i = 1; i <= 20; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// 17
// Fizz
// 19
// Buzz
{% endhighlight %}

### When Looping, Order Matters in Conditional Statements

Without having conditional statements hijack this loop tutorial, here is a quick recap on why the placement of expressions matters within conditional statements, as the above FizzBuzz example would execute quite differently if the conditional statements were rearranged a bit.

For example, checking if `(i % 3 == 0 && i % 5 == 0)` is true occurs at the top of the conditional statement because the interpreter would never execute that code if it appeared elsewhere. It would branch at either `(i % 3 == 0)` or `(i % 5 == 0)` before making it down to `(i % 3 == 0 && i % 5 == 0)` -- resulting in the string "FizzBuzz" never being logged to the console.

Therefore, make sure you take note on where statements are placed and how your conditional statements are written, as you could inadvertently obtain the wrong results from your script!

## Next Steps
The next steps would be to begin exploring **JavaScript Functions** and how they can allow for more concise and re-usable code.

#### Be on the look out for more JavaScript tutorials in the near future!
