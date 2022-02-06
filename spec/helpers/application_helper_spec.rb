require 'rails_helper'

RSpec.describe ApplicationHelper, type: :helper do
  describe '#flash_class' do
    it 'valid case for notice' do
      expect(flash_class('notice')).to eq "alert alert-notice"
    end

    it 'valid case for notice' do
      expect(flash_class('success')).to eq "alert alert-success"
    end

    it 'valid case for notice' do
      expect(flash_class('alert')).to eq "alert alert-error"
    end

    it 'valid case for notice' do
      expect(flash_class('info')).to eq "alert alert-info"
    end
  end
end