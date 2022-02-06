class User < ApplicationRecord

    enum roles: [
        :default_role,
        :recepcionist, 
        :doctor, 
        :patient
    ]

    enum document_type: [
        :default_doc,
        :rg,
        :cpf,
        :drivers_license
    ]

    def self.to_csv
        csv_header = %w{
            name
        }
    
        CSV.generate(headers: true) do |csv|
          csv << csv_header
    
          all.each do |user|
            # instructions = ""
            # exam.instructions.map{ |i| i.id_at_alliar}.uniq.each do |instruc|
            #     instructions << instruc.to_s + "; "
            # end

            csv << [
                user.name]
                # user.description] 
                # instructions]
          end
        end
    end

    def self.import(file)
        CSV.foreach(file.path, headers: true) do |row|
            user_hash = row.to_hash
            user = find_or_create_by!(name: row[0])
            user.name = row[0]
            user.description = row[1] || row[0]

            # 12.times do |t|
            #     next if row[5+t] == "-"
            #     next if row[5+t].blank?
        
            #     Instruction.where(id_at_alliar: row[5 + t].split(";")).find_each do |inst|
            #         exam.instructions << inst
            #     end
            # end

            unless user.name.blank?
                user.save!
            end
        end
    end
end
