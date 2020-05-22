=begin

INSTRUCTION

Return the number (count) of vowels in the given string.
We will consider a, e, i, o, and u as vowels for this Kata.
The input string will only consist of lower case letters and/or spaces.

=end

# SOLUTION

def getCount(inputStr)
#   vowel = "a", "e", "i", "o", "u"
p inputStr.scan(/[aeoui]/).count

end
