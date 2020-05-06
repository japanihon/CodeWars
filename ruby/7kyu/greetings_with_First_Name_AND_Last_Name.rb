# Create a Person class with a greet method that returns the first and last name of the person with a greeting. For example if the first name is 'Bob' and the last name is 'Smith' then it should return 'Hello, Bob Smith!'.

# SOLUTION

class Person
attr_writer :firstname, :lastname

  def initialize(firstname, lastname)
    @firstname = firstname
    @lastname = lastname
  end

  def greet
    "Hello, #{@firstname} #{@lastname}!"
  end

end 
