class CreatePoints < ActiveRecord::Migration[5.2]
  def change
    create_table :points do |t|
      t.float :x_cord
      t.float :y_cord
      t.float :z_cord

      t.timestamps
    end
  end
end
