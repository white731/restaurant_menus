# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

Eatery.destroy_all

10.times do |i|
  eatery = Eatery.create(name: Faker::Restaurant.name, category:Faker::Restaurant.type , rating:rand(1..5))
    4.times do 
      Menu.create(category:Faker::Food.dish, rating:rand(1..5), eatery_id: eatery.id)
    end
end 