FactoryBot.define do
  factory :tag do
    # name { Faker::Name.name }
    # description { Faker::Name.name }
    name { Faker::Hacker.noun }
    description { Faker::Hacker.noun}
  end
end
