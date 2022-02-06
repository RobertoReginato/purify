require 'rails_helper'

RSpec.describe "points/show", type: :view do
  before(:each) do
    @point = assign(:point, Point.create!(
      :x_cord => 2.5,
      :y_cord => 3.5,
      :z_cord => 4.5
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/2.5/)
    expect(rendered).to match(/3.5/)
    expect(rendered).to match(/4.5/)
  end
end
