class AddDomainToExams < ActiveRecord::Migration[5.2]
  def change
    add_column :exams, :domain, :string
  end
end
