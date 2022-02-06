class CreateExams < ActiveRecord::Migration[5.2]
  def change
    create_table :exams do |t|
      t.integer :id_at_alliar
      t.string :name
      t.string :area
      t.references :instructions
      t.string :short_name
      t.boolean :requires_responsible

      t.timestamps
    end
  end
end