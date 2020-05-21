=begin

INSTRUCTION

Create a method reject that accepts a list and a block, and returns a list of elements for which the block returns false.

If you need help, here's a reference:
http://www.rubycuts.com/enum-reject

=end

# SOLUTION

def reject list, &block
  list.reject(&block)
end
