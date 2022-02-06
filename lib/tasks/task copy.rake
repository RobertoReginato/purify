# frozen_string_literal: true
require 'factory_bot_rails'

namespace :dev do
  desc 'populate dev database'
  task populate: :environment do
    puts "seeding database started"
    Rake::Task['db:reset'].invoke
    # FactoryBot.create_list(:tag, 10)
    puts "seeding database finished"
  end
end
