class Book < ApplicationRecord
  def self.import(file)
    CSV.foreach(file.path, headers: true) do |row|
        next if row[0].blank?
        book_hash = row.to_hash
        book = find_or_create_by!(name: row[0])
        book.name = row[0]
        book.description = row[1] || row[0]
        # 12.times do |t|
        #     next if row[5+t] == "-"
        #     next if row[5+t].blank?
    
        #     Instruction.where(id_at_alliar: row[5 + t].split(";")).find_each do |inst|
        #         exam.instructions << inst
        #     end
        # end
        unless book.name.blank? || book.description.blank?
          book.save!
        end
    end
  end
end
