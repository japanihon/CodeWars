=begin

INSTRUCTION

Your task is to write function findSum.

Upto and including n, this function will return the sum of all multiples of 3 and 5.

For example:
findSum(5) should return 8 (3 + 5)
findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)

=end

# SOLUTION

def find(n)
  numbers = [*1..n]
  numbers.lazy.select { |n| n % 3 == 0 || n % 5 == 0 }.inject(:+)
end
