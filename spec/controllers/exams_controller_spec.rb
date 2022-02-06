require 'rails_helper'

RSpec.describe ExamsController, type: :controller do
  let(:instructs){
    FactoryBot.create(:instruction)
  }

  let(:exams){
    FactoryBot.create(:exam, short_name: 'afol', instructions: [ instructs])
  }

  before do
    exams
  end
  describe 'GET #smart' do
    it 'renders smart template' do
      get :smart
      expect(response).to render_template :smart
    end

    it 'single_exam' do
      get :smart, params: { id: (Exam.find_by("LOWER(short_name) = ?", 'afol').id),
        examslist: 'afol' }
      expect(response).to render_template :smart
    end

    it 'exams_list' do
      get :smart, params: { id: (Exam.find_by("LOWER(short_name) = ?", 'afol').id),
        examslist: 'elasfig,atccra,atcveiap,afol' }
      expect(response).to render_template :smart
    end
  end

  describe 'GET #new' do
    it 'new exam' do
      get :new
      expect(response).to render_template :new
    end
  end

  describe 'GET #update' do
    render_views
    it 'update exam' do
      get :edit, params: { id: (Exam.find_by("LOWER(short_name) = ?", 'afol').id) }
      expect(response).to render_template :edit
    end

    it 'delete_instruc_id' do
      post :edit, params: { 
        id: (Exam.find_by("LOWER(short_name) = ?", 'afol').id),
        delete_instruc_id: (Instruction.first.id) }
      # expect(response).to render_template :edit
    end

    it 'insert_instruc_id' do
      post :edit, params: { 
        id: (Exam.find_by("LOWER(short_name) = ?", 'afol').id),
        insert_instruc_id: (Instruction.first.id) }
      # expect(response).to render_template :edit
    end

    it 'insert_instruc_id' do
      post :edit, params: { 
        id: (Exam.find_by("LOWER(short_name) = ?", 'afol').id),
        search: 'jejum' }
      expect(response).to render_template :edit
    end
  end

  describe 'GET #index' do
    it 'renders index template' do
      get :index
      expect(response).to render_template :index
    end

    it 'assigns @exams' do
      get :index
      expect(assigns(:exams)).not_to be_nil
      expect(assigns(:exams)).to be_an Array
    end

    it 'examslist' do
      get :index, params: { examslist: 'afol' }
      expect(assigns(:exams)).not_to be_nil
      expect(assigns(:exams)).to be_an Array
    end

    it 'search_mnemonic' do
      get :index, params: { search: 'afol' }
      expect(assigns(:exams)).not_to be_nil
      expect(assigns(:exams)).to be_an Array
    end

    it 'search_name' do
      get :index, params: { search: 'acido' }
      expect(assigns(:exams)).not_to be_nil
      expect(assigns(:exams)).to be_an Array
    end
  end

  describe '#export model' do
    it 'export exams csv model' do
      get :model
      expect(Exam.to_csv_model).to include("ID")
      expect(Exam.to_csv_model).to include("Nome")
      expect(Exam.to_csv_model).to include("Mnemônico")
      expect(Exam.to_csv_model).to include("Área")
      expect(Exam.to_csv_model).to include("Preparos")
    end
  end
end