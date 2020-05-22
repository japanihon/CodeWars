=begin

INSTRUCTION

You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.

=end

# SOLUTION

def positive_sum(arr)
sum = 0
i = 0

while i < arr.length do
  if arr[i] > 0
    sum += arr[i]
  end
  i += 1
 end

return sum

end
