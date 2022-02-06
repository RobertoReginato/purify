require 'rails_helper'

RSpec.describe Exam, type: :model do
  describe '#import' do
    file = CSV.generate do |csv|
      csv << ["id_at_alliar","short_name","name"]
      csv << [34545,"arc","artict1", "AC"]
      csv << [65745,"arc2","artict2", "AC"]
    end

    it 'import exams' do
      expect(File).to receive(:open).with("matriz.CSV", "r", {:headers=>true, :universal_newline=>false}).and_return(file)  
      Exam.import("matriz.CSV")
      expect(Exam.find_by(name: 'artict1').short_name).to eq "arc"
    end
  end
end