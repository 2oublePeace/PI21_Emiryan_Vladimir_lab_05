const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const passport = require('passport')
app.use(passport.initialize())
require('./passport')(passport)

const taskRouter = require('./routes/task.routes')
const stepRouter = require('./routes/step.routes')
const userRouter = require('./routes/user.routes')

app.use(express.json());

app.listen(PORT, () => {
    console.log(`server started on post ${PORT}`)
});

app.get('/ping', (req, res) => {
    res.json({ status: 'ok' });
});

app.use('/api', taskRouter);
app.use('/api', stepRouter);
app.use('/api', userRouter)

