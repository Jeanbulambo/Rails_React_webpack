# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
Greeting.create(greeting: 'Hi')
Greeting.create(greeting: 'are you Okay')
Greeting.create(greeting: 'How are doing')
Greeting.create(greeting: 'How is everything')
Greeting.create(greeting: 'How are feeling')
puts 'Greeting created successfully'