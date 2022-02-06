FactoryBot.define do
  factory :exam do
    id_at_alliar { 1 }
    name { "Rc Cranio" }
    area { "Ressonancia" }
    short_name { "rccra" }
    requires_responsible { true }
  end
end