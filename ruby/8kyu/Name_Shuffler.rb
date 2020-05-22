=begin

INSTRUCTION

Write a function that returns a string in which firstname is swapped with last name.
nameShuffler('john McClane'); => "McClane john"

=end

# SOLUTION

def name_shuffler(word)
  word.split(" ").reverse.join(" ")
end
