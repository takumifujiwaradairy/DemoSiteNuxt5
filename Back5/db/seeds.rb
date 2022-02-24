# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Article.create(title: 'aaa', body: 'aaaaaaaaaaaaaaaaa', user_id: 1)
Article.create(title: 'BBB', body: 'BBBBBBBBBBBBBBBBB', user_id: 2)
Article.create(title: 'CCC', body: 'CCCCCCCCCCCCCCCCC', user_id: 3)

User.create(name: 'John', email: 'aaa@gmail.com', password: 'AAAAAAA')
User.create(name: 'Poul', email: 'bbb@gmail.com', password: 'BBBBBBB')
User.create(name: 'Ringo', email: 'ccc@gmail.com', password: 'CCCCCC')