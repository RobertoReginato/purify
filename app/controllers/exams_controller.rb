class ExamsController < ApplicationController
  before_action :set_exam, only: [:edit, :show, :update, :destroy]
  before_action :set_exam_by_id, only: [:edit]

  # GET /exams
  # GET /exams.json
  def index
    @exams = Exam.reorder("name").map{ |e| [e.id, e] }.paginate(page: params[:page], per_page: 10)

    unless (params[:examslist].blank?)
      @exams_list = params[:examslist].split(',')
      @exams = Exam.all.select{ |exam| @exams_list.include?(exam[:short_name].downcase)}
      .map{ |e| [e.id, e] }
      .paginate(page: params[:page], per_page: 10)
    end

    unless (params[:search].blank?)
      @exams = Exam.all.where("unaccent(lower(name)) like unaccent(?)", "%#{params[:search].downcase}%")
      .map{ |e| [e.id, e] }
      .paginate(page: params[:page], per_page: 10)

      if @exams.length == 0
        @exams = Exam.all.where("lower(short_name) like ?", "%#{params[:search].downcase}%")
        .map{ |e| [e.id, e] }
        .paginate(page: params[:page], per_page: 10)
      end
    end

    respond_to do |format|
      format.html
      format.csv {
        @exams = Exam.all
        send_data @exams.to_csv, filename: "exams-#{Date.today}.csv" 
      }
    end

    
  end

  # GET /smart?examslist=atccra,atcveiap,elasfig
  def smart
    @exams = Exam.all

    unless (params[:examslist].blank?)
      @exams_list = params[:examslist].downcase.split(',')
      @exams = @exams.select{ |exam| @exams_list.include?(exam[:short_name].downcase)}

      @instructions = []

      @exams.each do |exam|
        exam.instructions.each do |instruc|
          unless @instructions.include? instruc
            if @instructions.length == 0
                @instructions.push(instruc)
            else
              if instruc.instruction_type == 12
                current_instruction = @instructions.select{ |item| item.instruction_type == 12}[0]

                if current_instruction.blank?
                  @instructions.push(instruc)
                else
                  if current_instruction.priority < instruc.priority
                    @instructions.delete(current_instruction)
                    @instructions.push(instruc)
                  end
                end
              else
                  @instructions.push(instruc)
              end
            end
          end
        end
      end
    end
  end

  # GET /exams/1
  # GET /exams/1.json
  def show
  end

  # GET /exams/new
  def new
    @exam = Exam.new
  end

  def model
    @exams = Exam.all
    send_data @exams.to_csv_model, filename: "model_exames_#{Date.today}.csv"
  end

  # GET /instruction/1/edit
  def edit
    unless params[:delete_instruc_id].blank?
      instruc = Instruction.find(params[:delete_instruc_id])
      @exam.instructions.delete(instruc)
      @exam.save
      
      redirect_to edit_exam_path(@exam)
    end

    unless params[:insert_instruc_id].blank?
      instruc = Instruction.find(params[:insert_instruc_id])
      @exam.instructions.push(instruc)
      @exam.save
      
      redirect_to edit_exam_path(@exam)
    end

    unless params[:search].blank?
      @instructions = Instruction.where('lower(content) like ?',"%#{params[:search].downcase}%")
    end

  end

  # PATCH/PUT /exams/1
  # PATCH/PUT /exams/1.json
  def update
    unless params[:search].blank?
      redirect_to controller: 'exams', action: 'edit', id: params[:id], search: params[:search]
    end
  end

  def import
    unless params[:file].blank?
      CSV.foreach(params[:file].path, headers: true) do |row|
        exam_hash = row.to_hash

        if exam_hash["Descricao"].blank?
          redirect_to exams_path, alert: "Não foi possível importar os exames. O arquivo não segue o modelo de importação."
          break
        end

        Exam.import(params[:file])
        redirect_to exams_path, success: "Os exames foram importados com sucesso!"
      end
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_exam
      @exam = Exam.find_by_short_name(params[:id].upcase)
    end

    def set_exam_by_id
      @exam = Exam.find(params[:id])
      @instructions = []
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def exam_params
      params.require(:exam).permit(:name, :area, :short_name, :requires_responsible)
    end
end