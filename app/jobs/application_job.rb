class Fixnum
  def digitsInStringNumber
    # puts 'number of digits in a number'
    puts Math.log10(self).to_i + 1
  end
end

class ApplicationJob < ActiveJob::Base
  def test
    # 50 sorted numbers whithout repetition
    haystack = (1..100).to_a.shuffle

    # favorite nunmbers
    sortedArray = [3, 7, 8, 12, 13, 18, 21, 23, 27, 28, 29, 30, 32, 33, 42, 51, 69, 73, 88, 99]

    haystack -= sortedArray

    while sortedArray.size < 50
      sortedArray.push(haystack.pop)
    end

    sortedArray.sort
  end

  # def recurrent
  #   rounds = []

  #   (0..10).each do |i|
  #     rounds.push(test)
  #   end

  #   rounds
  # end

  def recurrent
    rounds = []
    all_games = 0

    # (1..100).each do |i|
    #   rounds.push(i)
    # end

    # # 1..19 + variant
    # (20..100).each do |f|
    #   set = []
    #   (1..19).each do |i|
    #     set.push(i)
    #   end

    #   set.push(f)
    #   rounds.push(set)
    # end

    # 1..18 + variant no 19
    (20..100).each do |f|
      set = []
      (1..18).each do |i|
        set.push(i)
      end

      set.push(f)
      rounds.push(set)
    end

    rounds.push([2, 9, 14, 33, 34, 36, 39, 49, 50, 52, 53, 54, 62, 66, 74, 75, 85, 92, 93])

    rounds.find { |l| l == [2, 9, 14, 33, 34, 36, 39, 49, 50, 52, 53, 54, 62, 66, 74, 75, 85, 92, 93] }
  end

  def registry_all_unique_combination
    # 3 slots
    # numbers 1..5
    # 1 2 3

    # 5 * 4 * 3 = 60

    all_unique_combinations = []
    count_all_possible_unique_combinations = 0

    (1..5).each do |f|
      set = []
      (1..4).each do |i|
        set.push(i)
      end

      set.push(f)
      rounds.push(set)
    end
  end
end
