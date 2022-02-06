# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_01_23_181202) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"
  enable_extension "unaccent"

  create_table "appointments", force: :cascade do |t|
    t.string "name"
    t.string "part_number"
  end

  create_table "books", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "exams", force: :cascade do |t|
    t.integer "id_at_alliar"
    t.string "name"
    t.string "area"
    t.bigint "instructions_id"
    t.string "short_name"
    t.boolean "requires_responsible"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "domain"
    t.index ["instructions_id"], name: "index_exams_on_instructions_id"
  end

  create_table "exams_instructions", force: :cascade do |t|
    t.bigint "exam_id"
    t.bigint "instruction_id"
    t.index ["exam_id"], name: "index_exams_instructions_on_exam_id"
    t.index ["instruction_id"], name: "index_exams_instructions_on_instruction_id"
  end

  create_table "instructions", force: :cascade do |t|
    t.integer "id_at_alliar"
    t.text "content"
    t.string "age_restriction"
    t.integer "gender_restriction"
    t.boolean "pregnancy_restriction"
    t.string "weight_restriction"
    t.integer "instruction_type"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "exam_id"
    t.integer "priority", default: 0
    t.index ["exam_id"], name: "index_instructions_on_exam_id"
  end

  create_table "points", force: :cascade do |t|
    t.float "x_cord"
    t.float "y_cord"
    t.float "z_cord"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "tags", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.datetime "birth_date"
    t.string "avatar"
    t.string "status"
    t.string "role"
    t.string "document"
    t.string "files"
    t.string "appointments"
  end

  add_foreign_key "exams_instructions", "exams"
  add_foreign_key "exams_instructions", "instructions"
  add_foreign_key "instructions", "exams"
end
