let express = require('express')
let bodyParser = require('body-parser')
let server = express()
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extendded: true}))
require('./db/gearhost-config')

let schoolRoutes = require('./routes/school-routes')
let classroomRoutes = require('./routes/classroom-require')
let teacherRoutes = require('./routes/teacher-routes')
let studentRoutes = require('./routes/student-routes')



server.use('/api/school', schoolRoutes.router)
server.use('/api/classroom', classroomRoutes.router)
server.use('/api/teacher', teacherRoutes.router)
server.use('/api/students', studentRoutes.router)





server.listen(3000, () => { console.log("serving") })