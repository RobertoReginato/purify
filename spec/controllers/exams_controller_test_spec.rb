require 'rails_helper'

RSpec.describe ExamsController, type: :controller do
  describe 'GET #import' do
    file = CSV.generate do |csv|
      csv << ["name", "facebook_url"] #hash keys
      csv << ["artict1", "nil"]
      csv << ["artict2", "facebook_url"]
    end 

    it 'renders import template' do
      get :import
      expect(response).to render_template :import
    end

    # it 'assigns @exams' do
    #   post :import
    #   expect(assigns(:exams)).not_to be_nil
    #   expect(assigns(:exams)).to be_an Array
    #   expect(File).to receive(:open).with("filename", "r").and_return(file)  
    #   Artist.import("filename")
    #   expect(Artist.find_by(name: 'artist1').facebook_url).to eq "artist1_facebook_url"
    # end
  end

  describe 'GET #smart' do
    it 'renders smart template' do
      get :smart
      expect(response).to render_template :smart
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

  #   context 'with :agreement params' do
  #     context 'with valid params' do
  #       let(:valid_params){
  #         { 
  #           agreement: "{\"id_agreement\":204,\"agreement\":\"ALLIANZ SAUDE SA\",\"id_plan\":5717,\"plan\":\"SPECIAL\",\"private_plan\":false,\"expire_guide\":30,\"expire_auth\":30,\"expire_doctor_request\":30}"
  #         }
  #       }
  #       it 'assigns @agr as an Agreement hash' do
  #         get :index, params: valid_params
  #         expect(assigns(:agr)).not_to be_nil
  #         expect(assigns(:agr)).not_to be_empty
  #         expect(assigns(:agr)).to be_a Hash
  #         expect(assigns(:agr).fetch("id_agreement", nil)).not_to be_nil
  #         expect(assigns(:agr).fetch("agreement", nil)).not_to be_nil
  #         expect(assigns(:agr).fetch("id_plan", nil)).not_to be_nil
  #         expect(assigns(:agr).fetch("plan", nil)).not_to be_nil
  #       end
  #     end

  #     context 'with invalid params' do
  #       let(:invalid_params){
  #         { agreement: "{\"invalid_params\": 1234}" }
  #       }
  #       it 'assigns @agr as an Agreement hash' do
  #         get :index, params: invalid_params
  #         expect(assigns(:agr)).to be_a Hash
  #         expect(assigns(:agr).fetch("id_agreement", nil)).to be_nil
  #         expect(assigns(:agr).fetch("agreement", nil)).to be_nil
  #         expect(assigns(:agr).fetch("id_plan", nil)).to be_nil
  #         expect(assigns(:agr).fetch("plan", nil)).to be_nil
  #       end
  #     end
  #   end

  #   context 'with :agreement_id and :plan_id params' do
  #     context 'with valid params' do
  #       let(:valid_params){
  #         { 
  #           agreement_id: "ALLIANZ SAUDE SA",
  #           plan_id: "SPECIAL"
  #         }
  #       }
  #       it 'assigns @agr as an Agreement hash' do
  #         get :index, params: valid_params
  #         expect(assigns(:agr)).not_to be_nil
  #         expect(assigns(:agr)).not_to be_empty
  #         expect(assigns(:agr)).to be_a Hash
  #         expect(assigns(:agr).fetch("id_agreement", nil)).not_to be_nil
  #         expect(assigns(:agr).fetch("agreement", nil)).not_to be_nil
  #         expect(assigns(:agr).fetch("id_plan", nil)).not_to be_nil
  #         expect(assigns(:agr).fetch("plan", nil)).not_to be_nil
  #       end
  #     end
  #   end

  #   context 'with :term params' do
  #     context 'with valid params' do
  #       let(:valid_params){
  #         { 
  #           term: "HEMOGRAMA"
  #         }
  #       }
  #       it 'assigns @exams_search as an array of exams' do
  #         get :index, params: valid_params
  #         expect(assigns(:exams_search)).not_to be_nil
  #         expect(assigns(:exams_search)).to be_an Array
  #         expect(assigns(:exams_search)).not_to be_empty
  #       end
  #     end

  #     context 'with invalid params' do
  #       let(:invalid_params){
  #         {
  #           term: "RANDOM EXAM NAME 123"
  #         }
  #       }
  #       it 'assigns @exams_search as an empty array' do
  #         get :index, params: invalid_params
  #         expect(assigns(:exams_search)).not_to be_nil
  #         expect(assigns(:exams_search)).to be_an Array
  #         expect(assigns(:exams_search)).to be_empty
  #       end
  #     end
  #   end
  # end

  # describe 'GET #details' do
  #   it 'renders details template' do
  #     get :details
  #     expect(response).to render_template :details
  #   end

  #   context 'with :agreement params' do
  #     context 'with valid params' do
  #       let(:valid_params){
  #         { 
  #           agreement: "{\"id_agreement\":204,\"agreement\":\"ALLIANZ SAUDE SA\",\"id_plan\":5717,\"plan\":\"SPECIAL\",\"private_plan\":false,\"expire_guide\":30,\"expire_auth\":30,\"expire_doctor_request\":30}"
  #         }
  #       }
  #       it 'assigns @agr as an Agreement hash' do
  #         get :details, params: valid_params
  #         expect(assigns(:agr)).not_to be_nil
  #         expect(assigns(:agr)).not_to be_empty
  #         expect(assigns(:agr)).to be_a Hash
  #         expect(assigns(:agr).fetch("id_agreement", nil)).not_to be_nil
  #         expect(assigns(:agr).fetch("agreement", nil)).not_to be_nil
  #         expect(assigns(:agr).fetch("id_plan", nil)).not_to be_nil
  #         expect(assigns(:agr).fetch("plan", nil)).not_to be_nil
  #       end
  #     end

  #     context 'with invalid params' do
  #       let(:invalid_params){
  #         { agreement: "{\"invalid_params\": 1234}" }
  #       }
  #       it 'assigns @agr as an Agreement hash' do
  #         get :details, params: invalid_params
  #         expect(assigns(:agr)).to be_a Hash
  #         expect(assigns(:agr).fetch("id_agreement", nil)).to be_nil
  #         expect(assigns(:agr).fetch("agreement", nil)).to be_nil
  #         expect(assigns(:agr).fetch("id_plan", nil)).to be_nil
  #         expect(assigns(:agr).fetch("plan", nil)).to be_nil
  #       end
  #     end
  #   end

  #   context 'with :mnemonic and :name params' do
  #     context 'with valid params' do
  #       let(:valid_params){
  #         { 
  #           mnemonic: "HEM",
  #           name: "HEMOGRAMA COMPLETO"
  #         }
  #       }
  #       it 'assigns @agr as an Agreement hash' do
  #         get :details, params: valid_params
  #         expect(assigns(:exam_instructions)).not_to be_nil
  #         expect(assigns(:exam_instructions)).not_to be_empty
  #         expect(assigns(:exam_instructions)).to be_a Hash
  #         expect(assigns(:exam_instructions).fetch('name', nil)).not_to be_nil
  #         expect(assigns(:exam_instructions).fetch('id', nil)).not_to be_nil
  #         expect(assigns(:exam_instructions).fetch('id_at_alliar', nil)).not_to be_nil
  #         expect(assigns(:exam_instructions).fetch('area', nil)).not_to be_nil
  #         expect(assigns(:exam_instructions).fetch('short_name', nil)).not_to be_nil
  #         expect(assigns(:exam_instructions).fetch('instructions', [])).not_to be_nil
  #         expect(assigns(:exam_instructions).fetch('instructions', [])).to be_an Array
  #         expect(assigns(:exam_instructions).fetch('name', nil)).to eq valid_params[:name]
  #       end
  #     end

  #     context 'with invalid params' do
  #       let(:invalid_params){
  #         { 
  #           mnemonic: "1234",
  #           name: "RANDOM NAME"
  #         }
  #       }
  #       it 'assigns @agr as an Agreement hash' do
  #         get :details, params: invalid_params
  #         expect(assigns(:exam_instructions)).not_to be_nil
  #         expect(assigns(:exam_instructions)).not_to be_empty
  #         expect(assigns(:exam_instructions)).to be_a Hash
  #         expect(assigns(:exam_instructions).fetch('id', nil)).to be_nil          
  #         expect(assigns(:exam_instructions).fetch('instructions', [])).to be_empty
  #       end
  #     end
  #   end
  # end
  
  # describe 'GET #agreement_plan' do
  #   it 'renders agreement_plan template' do
  #     get :agreement_plan
  #     expect(response).to render_template :agreement_plan
  #   end

  #   it 'assigns @agreements' do
  #     get :agreement_plan
  #     expect(assigns(:agreements)).not_to be_nil
  #     expect(assigns(:agreements)).to be_an Array
  #   end

  #   context 'with no params' do
  #     it 'assigns @agreements as a not empty agreement_plans array' do
  #       get :agreement_plan
  #       expect(assigns(:agreements)).not_to be_empty
  #     end
  #   end

  #   context 'with invalid params' do
  #     let(:invalid_params){ { name: '1234!@#$' } }
  #     it 'assigns @agreements as an empty array' do
  #       get :agreement_plan, params: invalid_params
  #       expect(assigns(:agreements)).to be_empty
  #     end
  #   end

  #   context 'with valid param' do
  #     let(:valid_params){ { name: 'ALLIANZ SAUDE SA' } }
  #     it 'assigns @agreements as a not empty agreement_plans array' do
  #       get :agreement_plan, params: valid_params
  #       expect(assigns(:agreements)).not_to be_empty
  #       expect(assigns(:agreements).size).to eq 1
  #     end
  #   end
  end
end