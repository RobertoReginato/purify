class Exam < ApplicationRecord
    has_and_belongs_to_many :instructions

    def self.to_csv
        csv_header = %w{
            ID 
            Mnemônico 
            Nome
            Área
            Responsável_Presente
            Preparos
        }
    
        CSV.generate(headers: true) do |csv|
          csv << csv_header
    
          all.each do |exam|
            instructions = ""
            exam.instructions.map{ |i| i.id_at_alliar}.uniq.each do |instruc|
                instructions << instruc.to_s + "; "
            end

            csv << [exam.id_at_alliar, exam.short_name, exam.name,  exam.area, exam.requires_responsible, instructions]
          end
        end
    end

    def self.to_csv_model
        csv_header = %w{
            ID 
            Mnemônico 
            Nome 
            Área 
            Responsável_Presente
            Preparos
        }

        CSV.generate(headers: true) do |csv|
            csv << csv_header
        end
    end

    def self.import(file)
        CSV.foreach(file.path, headers: true) do |row|
            exam_hash = row.to_hash
            exam = find_or_create_by!(name: row[2])
            exam.id_at_alliar = row[0]
            exam.short_name = row[1]
            exam.name = row[2]
            exam.area = row[3]
            exam.requires_responsible = row[4]
            exam.domain = 'cdb'

            12.times do |t|
                next if row[5+t] == "-"
                next if row[5+t].blank?
        
                Instruction.where(id_at_alliar: row[5 + t].split(";")).find_each do |inst|
                    exam.instructions << inst
                end
            end

            unless exam.name.blank?
                exam.save!
            end
        end
    end
end