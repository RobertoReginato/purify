class HomeController < ApplicationController
  unless Rails.env.test?
    # http_basic_authenticate_with name: "skynet", password: "$kyn3T"
  end

  def index
    @tags = Tag.all.order(:id)
  end

  def import
  end

  def export
  end
end