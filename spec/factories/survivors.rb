FactoryBot.define do
  factory :survivor do
    name { Faker::Name.name }
    latitude { Faker::Address.latitude }
    longitude { Faker::Address.longitude }
    gender { Faker::Gender.binary_type.downcase }
  end
end
