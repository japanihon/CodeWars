=begin

INSTRUCTION

Take an array and remove every second element out of that array. Always keep the first element and start removing with the next element.

Example:
myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep', ...];
None of the arrays will be empty, so you don't have to worry about that!

=end

# SOLUTION

def remove_every_other(arr)
 x = 1
 (arr.delete_at(x); x += 1) while x <= arr.size
  return arr
end
