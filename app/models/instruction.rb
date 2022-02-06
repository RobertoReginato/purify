class Instruction < ApplicationRecord

    enum instruction_type: [
        :default,
        :restriction, 
        :not_recommended, 
        :general_info, 
        :specific_info, 
        :t48h_before, 
        :t24h_before, 
        :day_of_exam, 
        :medication, 
        :bring_previous_exams, 
        :clouthig, 
        :age_restriction, 
        :fasting, 
        :specific_food, 
        :collect_sample, 
        :abstinence
    ]

    has_and_belongs_to_many :exams

    def self.to_csv
        csv_header = %w{
            ID 
            Tipo 
            Descrição
            Idade
            Sexo
            Gestante
            Peso
            Prioridade
        }

        attributes = %w{
            id_at_alliar
            instruction_type
            content
            age_restriction
            gender_restriction
            pregnancy_restriction
            weight_restriction
            priority
        }

        CSV.generate(headers: true) do |csv|
            csv << csv_header

            all.each do |instruction|
            csv << attributes.map{ |attr| instruction.send(attr) }
            end
        end
    end

    def self.import(file)
        last_nonblank_id = nil
        last_nonblank_type = nil

        CSV.foreach(file.path, headers: true) do |row|
            last_nonblank_id = row[0] && row[0].length > 0 ? row[0] : last_nonblank_id
            last_nonblank_type = row[1] && row[1].length > 0 ? row[1] : last_nonblank_type
            
            instruction = find_or_create_by!(content: row[2])
            instruction.id_at_alliar = last_nonblank_id
            instruction.instruction_type = last_nonblank_type
            instruction.content = row[2]
            instruction.age_restriction = row[3]
            instruction.gender_restriction = row[4]
            instruction.pregnancy_restriction = row[5]
            instruction.weight_restriction = row[6]
            instruction.priority = row[7]

            unless instruction.content.blank?
                instruction.save!
            end
        end
    end

    def self.to_csv_model
        csv_header = %w{
            ID 
            Tipo 
            Descrição
            Idade
            Sexo
            Gestante
            Peso
            Prioridade
        }

        CSV.generate(headers: true) do |csv|
            csv << csv_header
        end
    end
end