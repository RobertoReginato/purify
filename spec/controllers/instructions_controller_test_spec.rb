require 'rails_helper'

RSpec.describe InstructionsController, type: :controller do
  describe 'GET #import' do
    # it 'renders import template' do
    #   get :import
    #   expect(response).to render_template :import
    # end

    # it 'assigns @exams' do
    #   post :import
    #   expect(assigns(:exams)).not_to be_nil
    #   expect(assigns(:exams)).to be_an Array
    # end
  end

  describe 'GET #index' do
    it 'renders index template' do
      get :index
      expect(response).to render_template :index
    end

    it 'assigns @exams' do
      get :index
      expect(assigns(:instructions)).not_to be_nil
      expect(assigns(:instructions)).to be_an Array
    end
  end
end