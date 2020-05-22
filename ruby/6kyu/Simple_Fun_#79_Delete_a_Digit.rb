=begin

INSTRUCTION

Task
Given an integer n, find the maximal number you can obtain by deleting exactly one digit of the given number.

Example
For n = 152, the output should be 52;
For n = 1001, the output should be 101.

Input/Output
[input] integer n

Constraints: 10 ≤ n ≤ 1000000.
[output] an integer

=end

# SOLUTION

def delete_digit(n)
 (0...n.to_s.size).map { |i|
   s = n.to_s.chars
   s.delete_at(i)
   s.join.to_i
 }.max
end
