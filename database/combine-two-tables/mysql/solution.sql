# Use a LEFT OUTER JOIN because null values from the 
# table on the right-side of join are allowed to be null represented

# An INNER JOIN would omit the results with null values after the join

SELECT FirstName, LastName, City, State
FROM Person
LEFT OUTER JOIN Address
    ON Person.PersonId = Address.PersonId