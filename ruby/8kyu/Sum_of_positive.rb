


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
