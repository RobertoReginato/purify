class AddPriorityToInstructions < ActiveRecord::Migration[5.2]
  def change
    add_column :instructions, :priority, :integer, default: 0
  end
end