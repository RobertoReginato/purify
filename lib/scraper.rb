require 'nokogiri'
require 'open-uri'
require 'pry'
require 'selenium-webdriver'

require_relative './place.rb' 

class Scraper
  def get_page
    doc = Nokogiri::HTML(open('https://www.atlasobscura.com/unusual-trips'))
  end

  def get_places
    self.get_page.css('.Card')
  end

  def make_places
    self.get_places.each do |card|
      place = Place.new
      place.title = card.css('h3').text
      place.price = card.css('span.trip-fees span').text
    end
  end

  def print_places
    self.make_places
    Place.all.each do |place|
      if place.title && place.price != ""
        puts "title: #{ place.title }"
        puts "price: #{ place.price }"
      end
    end
  end
end

def setup
  options = Selenium::WebDriver::Chrome::Options.new
  options.add_argument('--ignore-certificate-errors')
  options.add_argument('--disable-popup-blocking')
  options.add_argument('--disable-translate')<
  @driver = Selenium::WebDriver.for :chrome, options: options
end

def teardown
  @driver.quit
end

def test_click_button
  #Only tested on mac - finds sample.html in the current working directory
  directory = File.expand_path File.dirname(__FILE__)
  specific_filename = "file://" + directory + "/sample.html"
  @driver.navigate.to specific_filename
  for i in 1..10 do
       id = "submitter"+i.to_s();
       css = "input[id='" + id + "']";
       puts "clicking " +  id;
       element = @driver.find_element :css, css;
       element.click()
       sleep(1);
  end

 #If we get this far we are okay
 assert(true);
end

scraper = Scraper.new
scraper.print_places
