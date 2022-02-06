require 'rails_helper'

RSpec.describe HomeController, type: :controller do
  describe 'GET #import' do
    it 'renders import template' do
      get :import
      expect(response).to render_template :import
    end
  end

  describe 'GET #index' do
    it 'renders index template' do
      get :index
      expect(response).to render_template :index
    end
  end
end