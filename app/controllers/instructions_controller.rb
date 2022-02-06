class InstructionsController < ApplicationController
  before_action :set_instruction, only: [:show, :edit, :update]
    def index
      @instructions = Instruction.reorder("content")
        .map{ |e| [e.id, e] }
        .paginate(page: params[:page], per_page: 10)

      unless (params[:search].blank?)
        @instructions = Instruction.where('content like ?',"%#{params[:search]}%")
          .map{ |e| [e.id, e] }
          .paginate(page: params[:page], per_page: 10)
      end

      respond_to do |format|
        format.html
        format.csv {
          @instructions = Instruction.all
          send_data @instructions.to_csv, filename: "instructions-#{Date.today}.csv"
        }
      end
    end
    
    def show
    end

    # GET /exams/1/edit
    def edit
    end

    def model
      @instructions = Instruction.all
      send_data @instructions.to_csv_model, filename: "model_preparos_#{Date.today}.csv"
    end

    # PATCH/PUT /exams/1
    # PATCH/PUT /exams/1.json
    def update
      respond_to do |format|
        if @instruction.update(instruc_params)
          format.html { redirect_to @instruction, notice: 'Exam was successfully updated.' }
          format.json { render :show, status: :ok, location: @instruction }
        else
          format.html { render :edit }
          format.json { render json: @exam.errors, status: :unprocessable_entity }
        end
      end
    end

    def import
      unless params[:file].blank?
        CSV.foreach(params[:file].path, headers: true) do |row|
          exam_hash = row.to_hash
  
          if exam_hash["Content"].blank?
            redirect_to exams_path, alert: "Não foi possível importar os preparos. O arquivo não segue o modelo de importação."
            break
          else
            Instruction.import(params[:file])
            redirect_to exams_path, success: "As informações de preparos foram importadas com sucesso!"
          end
        end
      end
    end

    private

    def set_instruction
      @instruction = Instruction.find params[:id]
    end

    def instruc_params
      params.require(:instruction).permit(:priority, :content)
    end
end