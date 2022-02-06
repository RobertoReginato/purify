FactoryBot.define do
  factory :instruction do
    id { 1 }
    id_at_alliar { 408 }
    content { "jejum de 12h" }
    age_restriction { "até 50 anos" }
    gender_restriction { false }
    pregnancy_restriction { false }
    weight_restriction { false }
    instruction_type { 12 }
    priority { 12 }
  end
end