# In this exercise, you will have to create a function named tiyFizzBuzz. This function will take on a string parameter and will return that string with some characters replaced, depending on the value:
#
# If a letter is a upper case consonants, replace that character with "Iron".
# If a letter is a lower case consonants or a non-alpha character, do nothing to that character
# If a letter is a upper case vowel, replace that character with "Iron Yard".
# If a letter is a lower case vowel, replace that character with "Yard".
# Ready?

# SOLUTION

def tiy_fizz_buzz(string)
  string.chars.map { |letter|
    case letter
      when /[AEIOU]/
        "Iron Yard"
      when /[BCDFGHJKLMNPQRSTVWXYZ]/
        "Iron"
      when /[aeiou]/
        "Yard"
      else
        letter
    end
  }.join
end
