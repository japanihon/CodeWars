=begin

INSTRUCTION

Create a method count that accepts a list and a block, and returns the total number of items for which the block returns true.

If you need help, here's a reference:
http://www.rubycuts.com/enum-count

=end

# SOLUTION

def count list, &block
  list.count(&block)
end
