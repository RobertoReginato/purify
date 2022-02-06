namespace :import do
  require 'csv'
  task :csv => :environment do |t, args|
    matriz_file = "matriz.CSV"
    matriz_ac_file = "matriz_ac.CSV"
    preparos_file = "preparos.CSV"
    preparos_ac_file = "preparos_ac.CSV"
    encoding = 'ISO-8859-1'

    # import instructions
     preparos_csv = CSV.read(preparos_file, :encoding => encoding)

     last_nonblank_id = nil
     last_nonblank_type = nil

     preparos_csv.each_with_index do |row, i|
        next if i == 0

        last_nonblank_id = row[0] && row[0].length > 0 ? row[0] : last_nonblank_id
        last_nonblank_type = row[1] && row[1].length > 0 ? row[1] : last_nonblank_type

        instruction = Instruction.new do |i|
          i.id_at_alliar = last_nonblank_id
          i.instruction_type = last_nonblank_type
          i.content = row[2]
          i.age_restriction = row[3]
          i.gender_restriction = row[4]
          i.pregnancy_restriction = row[5]
          i.weight_restriction = row[6]
        end

        instruction.save!
      end

     puts 'instructions imported successfully'

    # import instructions_ac
    preparos_ac_csv = CSV.read(preparos_ac_file, :encoding => encoding)

    last_nonblank_id = nil
    last_nonblank_type = nil

    preparos_ac_csv.each_with_index do |row, i|
       next if i == 0

       last_nonblank_id = row[0] && row[0].length > 0 ? row[0] : last_nonblank_id
       last_nonblank_type = row[1] && row[1].length > 0 ? row[1] : last_nonblank_type

       instruction = Instruction.new do |i|
         i.id_at_alliar = last_nonblank_id
         i.instruction_type = last_nonblank_type
         i.content = row[2]
         i.age_restriction = row[3]
         i.gender_restriction = row[4]
         i.pregnancy_restriction = row[5]
         i.weight_restriction = row[6]
       end

       instruction.save!
     end

    puts 'instructions ac imported successfully'

    # import exams
    matriz_csv = CSV.read(matriz_file, :encoding => encoding)

    matriz_csv.each_with_index do |row, i|
      next if i == 0

      exam = Exam.new do |i|
        i.id_at_alliar = row[0]
        i.short_name = row[1]
        i.name = row[2]
        i.area = row[3]
        i.domain = 'cdb'
        i.requires_responsible = row[16]
      end
      
      #row[4] -> row[15] preparos
      12.times do |t|
        next if row[5+t] == "-"

        Instruction.where(id_at_alliar: row[5+t]).find_each do |inst|
          exam.instructions <<  inst
        end
      end

      exam.save!
    end

    puts 'exams imported successfully'

    # import exams_ac
      matriz_ac_csv = CSV.read(matriz_ac_file, :encoding => encoding)
      matriz_ac_csv.each_with_index do |row, i|
      next if i == 0

      exam = Exam.new do |i|
        i.id_at_alliar = row[0]
        i.short_name = row[1]
        i.name = row[2]
        i.area = row[3]
        i.domain = 'cdb'
      end
      
      #row[4] -> row[15] preparos
      11.times do |t|
        next if row[5 + t].to_i == 0

        Instruction.where(id_at_alliar: row[5 + t].split(";")).find_each do |inst|
          exam.instructions <<  inst
        end
      end

      exam.save!
    end

    puts 'exams_ac imported successfully'
  end
end