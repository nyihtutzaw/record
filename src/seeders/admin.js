import AdminModel from './../models/admin.js'
import bcrypt from 'bcrypt'
AdminModel.destroy({
  where: {},
  truncate: true,
})

const ADMINS = [
  {
    name: 'admin1',
    email: 'admin1@gmail.com',
    password: 'admin1',
    role: 'admin',
  },
  {
    name: 'admin2',
    email: 'admin2@gmail.com',
    password: 'admin2',
    role: 'admin',
  },
]

ADMINS.forEach(async (admin) => {
  try {
    const salt = await bcrypt.genSalt(10)
    // now we set user password to hashed password
    admin.password = await bcrypt.hash(admin.password, salt)
    const savedData = AdminModel.build(admin)
    await savedData.save()
  } catch (error) {
    console.log(error)
  }
})
