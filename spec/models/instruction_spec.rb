require 'rails_helper'

RSpec.describe Instruction, type: :model do
  let(:instructs){
    FactoryBot.create(:instruction, id: 123)
  }

  let(:exams){
    FactoryBot.create(:exam, short_name: 'afol', instructions: [ instructs], name: 'acido folico')
  }

  before do
    exams
  end
  describe '#import' do

    let(:header) { "id_at_alliar,content,type" }
    let(:row2) { "34545,1,instruction" }
    let(:row3) { "65745,12,instruction2" }
    let(:rows) { [header, row2, row3] }

    let(:file_path) { "tmp/instructions.csv" }
    let!(:csv) do
      CSV.open(file_path, "w") do |csv|
        rows.each do |row|
          csv << row.split(",")
        end
      end
    end

    it 'import instructions' do
      Instruction.import(CSV.open(file_path, "r"))
      expect(Instruction.find_by(content: 'jejum de 12h').instruction_type).to eq 12
    end
  end
  
  describe '#export' do
    it 'export instructions' do
      Instruction.to_csv
      expect(Instruction.find_by(content: 'jejum de 12h').instruction_type).to eq 12
    end

    it 'export instructions model' do
      expect(Instruction.to_csv_model).to include("ID")
      expect(Instruction.to_csv_model).to include("Tipo")
      expect(Instruction.to_csv_model).to include("Prioridade")
      expect(Instruction.to_csv_model).to include("Descrição")
    end
  end
end
