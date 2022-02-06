require 'rails_helper'

RSpec.describe "points/new", type: :view do
  before(:each) do
    assign(:point, Point.new(
      :x_cord => 1.5,
      :y_cord => 1.5,
      :z_cord => 1.5
    ))
  end

  it "renders new point form" do
    render

    assert_select "form[action=?][method=?]", points_path, "post" do

      assert_select "input[name=?]", "point[x_cord]"

      assert_select "input[name=?]", "point[y_cord]"

      assert_select "input[name=?]", "point[z_cord]"
    end
  end
end
