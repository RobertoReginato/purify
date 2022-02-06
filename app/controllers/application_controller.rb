class ApplicationController < ActionController::Base
  require 'will_paginate/array'

  add_flash_types :success, :warning, :danger, :info

  unless Rails.env.test?
    # http_basic_authenticate_with name: "skynet", password: "$kyn3T"
  end

  def index
  end
end