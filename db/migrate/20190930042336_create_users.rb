class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :name
      t.datetime :birth_date
      t.string :avatar
      t.string :status
      t.string :role
      t.string :document
      t.string :files
      t.string :appointments
    end
  end
end
