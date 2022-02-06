# instructions = Instruction.create([
#     {content: 'Jejum de 8 horas antes do exame.'},
#     {content: 'Coleta de primeira urina.'},
#     {content: 'Não ingerir líquidos 2 horas antes do exame.'},
#     {content: 'Não dirigir durante 5 horas após o exame.'}])
            
# exam = Exam.create(
#     name: 'Exame com vários preparos', 
#     area: 'Especialidade de teste', 
#     short_name: 'test_exam')

# exam.instructions << instructions[1..4]
# exam.save

# apt_1 = Appointment.create(
# name: 'Filipe Momberger Reginato', 
# part_number: 'AG01-3229')

# apt_1.save

# apt_2 = Appointment.create(
# name: 'Isabele Dellê Volpe', 
# part_number: 'AG02-1234')

# apt_2.save

# apt_3 = Appointment.create(
# name: 'Rosi Janice Momberger', 
# part_number: 'AG03-5467')

# apt_3.save

# apt_4 = Appointment.create(
# name: 'José Roberto Alves Reginato', 
# part_number: 'AG04-6734')

# apt_4.save

# apt_5 = Appointment.create(
# name: 'Roberto Momberger Reginato', 
# part_number: 'AG05-9872')

# apt_5.save

Appointment.create([
  {
    name: 'Isabele Dellê Volpe', 
    part_number: 'AG02-1234'
  },
  {
    name: 'Filipe Momberger Reginato', 
    part_number: 'AG01-3229'
  },
  {
    name: 'Rosi Janice Momberger', 
    part_number: 'AG03-5467'
  },
  {
    name: 'José Roberto Alves Reginato', 
    part_number: 'AG04-6734'
  },
  {
    name: 'Roberto Momberger Reginato', 
    part_number: 'AG05-9872'
  }
])

Tag.create([
  {
    name: 'ocr', 
    description: 'ocr',
    created_at: Time.now,
    updated_at: Time.now
  },
  {
    name: 'wbs', 
    description: 'wbs',
    created_at: Time.now,
    updated_at: Time.now
  },
  {
    name: 'sap', 
    description: 'sap',
    created_at: Time.now,
    updated_at: Time.now
  },
  {
    name: 'mvc', 
    description: 'mvc',
    created_at: Time.now,
    updated_at: Time.now
  },
  {
    name: 'rspec', 
    description: 'rspec',
    created_at: Time.now,
    updated_at: Time.now
  },
  {
    name: 'ruby', 
    description: 'ruby',
    created_at: Time.now,
    updated_at: Time.now
  },
  {
    name: 'rails', 
    description: 'rails',
    created_at: Time.now,
    updated_at: Time.now
  },
  {
    name: 'react native', 
    description: 'react native',
    created_at: Time.now,
    updated_at: Time.now
  },
  {
    name: 'elixir', 
    description: 'elixir',
    created_at: Time.now,
    updated_at: Time.now
  },
  {
    name: 'vue js', 
    description: 'vue js',
    created_at: Time.now,
    updated_at: Time.now
  }
])