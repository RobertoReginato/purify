class CreateExamInstructions < ActiveRecord::Migration[5.2]
  def change
    create_table :exams_instructions do |t|
      t.references :exam, foreign_key: true
      t.references :instruction, foreign_key: true
    end
  end
end