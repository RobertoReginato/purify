class CreateInstructions < ActiveRecord::Migration[5.2]
  def change
    create_table :instructions do |t|
      t.integer :id_at_alliar
      t.text :content
      t.string :age_restriction
      t.integer :gender_restriction
      t.boolean :pregnancy_restriction
      t.string :weight_restriction
      t.integer :instruction_type

      t.timestamps
    end
  end
end
