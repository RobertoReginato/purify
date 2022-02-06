require 'rails_helper'

RSpec.describe Exam, type: :model do
  let(:instructs){
    FactoryBot.create(:instruction)
  }

  let(:exams){
    FactoryBot.create(:exam, short_name: 'afol', instructions: [ instructs], name: 'acido folico')
  }

  before do
    exams
  end
  describe '#import' do
    # file = CSV.generate do |csv|
    #   csv << ["id_at_alliar","short_name","name"]
    #   csv << [34545,"arc","artict1", "AC"]
    #   csv << [65745,"arc2","artict2", "AC"]
    # end

    let(:header) { "id_at_alliar,short_name,name,area" }
    let(:row2) { "34545,arc,artict13,AC" }
    let(:row3) { "65745,arc2,artict23,AC" }
    let(:rows) { [header, row2, row3] }

    let(:file_path) { "tmp/exams.csv" }
    let!(:csv) do
      CSV.open(file_path, "w") do |csv|
        rows.each do |row|
          csv << row.split(",")
        end
      end
    end

    it 'import exams' do
      # expect(File).to receive(:open).with("test.csv", "r", {:headers=>true, :universal_newline=>false}).and_return(file_path)
      # Exam.import("test.csv")
      Exam.import(CSV.open(file_path, "r"))
      expect(Exam.find_by(name: 'artict13').short_name).to eq "arc"
    end
  end
  
  describe '#export' do
    it 'export exams' do
      # expect(Exam.find_by(short_name: 'afol').name).to eq "acido folico"
      expect(Exam.to_csv).to include("acido folico")
    end

    it 'export instructions model' do
      expect(Exam.to_csv_model).to include("ID")
      expect(Exam.to_csv_model).to include("Nome")
      expect(Exam.to_csv_model).to include("Mnemônico")
      expect(Exam.to_csv_model).to include("Área")
      expect(Exam.to_csv_model).to include("Preparos")
    end
  end
end