require 'rails_helper'

RSpec.describe "points/index", type: :view do
  before(:each) do
    assign(:points, [
      Point.create!(
        :x_cord => 2.5,
        :y_cord => 3.5,
        :z_cord => 4.5
      ),
      Point.create!(
        :x_cord => 2.5,
        :y_cord => 3.5,
        :z_cord => 4.5
      )
    ])
  end

  it "renders a list of points" do
    render
    assert_select "tr>td", :text => 2.5.to_s, :count => 2
    assert_select "tr>td", :text => 3.5.to_s, :count => 2
    assert_select "tr>td", :text => 4.5.to_s, :count => 2
  end
end
