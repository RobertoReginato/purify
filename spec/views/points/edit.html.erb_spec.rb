require 'rails_helper'

RSpec.describe "points/edit", type: :view do
  before(:each) do
    @point = assign(:point, Point.create!(
      :x_cord => 1.5,
      :y_cord => 1.5,
      :z_cord => 1.5
    ))
  end

  it "renders the edit point form" do
    render

    assert_select "form[action=?][method=?]", point_path(@point), "post" do

      assert_select "input[name=?]", "point[x_cord]"

      assert_select "input[name=?]", "point[y_cord]"

      assert_select "input[name=?]", "point[z_cord]"
    end
  end
end
