require 'rails_helper'

RSpec.describe InstructionsController, type: :controller do
  let(:instructs){
    FactoryBot.create(:instruction)
  }

  before do
    instructs
  end
  
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

    it 'search' do
      get :index, params: { search: 'jejum' }
      expect(assigns(:instructions)).not_to be_nil
      expect(assigns(:instructions)).to be_an Array
    end
  end

  describe 'GET #edit' do
    it 'set instruction' do
      get :edit, params: { id: Instruction.first.id }
      expect(assigns(:instruction)).not_to be_nil
    end
  end

  describe '#export model' do
    it 'export instructions  csv model' do
      get :model
      expect(Instruction.to_csv_model).to include("ID")
      expect(Instruction.to_csv_model).to include("Tipo")
      expect(Instruction.to_csv_model).to include("Prioridade")
      expect(Instruction.to_csv_model).to include("Descrição")
    end
  end
end