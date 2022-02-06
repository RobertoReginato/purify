class Tag < ApplicationRecord
    def self.to_csv
        csv_header = %w{
            name
            description 
        }
    
        CSV.generate(headers: true) do |csv|
          csv << csv_header
    
          all.each do |tag|
            # instructions = ""
            # exam.instructions.map{ |i| i.id_at_alliar}.uniq.each do |instruc|
            #     instructions << instruc.to_s + "; "
            # end

            csv << [
                tag.name, 
                tag.description] 
                # instructions]
          end
        end
    end

    def self.import(file)
        CSV.foreach(file.path, headers: true) do |row|
            next if row[0].blank?
            tag_hash = row.to_hash
            tag = find_or_create_by!(name: row[0])
            tag.name = row[0]
            tag.description = row[1] || row[0]

            # 12.times do |t|
            #     next if row[5+t] == "-"
            #     next if row[5+t].blank?
        
            #     Instruction.where(id_at_alliar: row[5 + t].split(";")).find_each do |inst|
            #         exam.instructions << inst
            #     end
            # end

            unless tag.name.blank? || tag.description.blank?
                tag.save!
            end
        end
    end
end
