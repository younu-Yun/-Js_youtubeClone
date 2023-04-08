import express from "express";
import morgan from "morgan";

import globalRouter from '../router/globalRouter'
import userRouter from '../router/userRouter'
import videoRouter from '../router/videoRouter'

const app = express();
const PORT = 4000;
const logger = morgan('dev')
app.use(logger)


/* -------------------------------------------- */
app.use('/', globalRouter)
app.use('/users', userRouter)
app.use('/videos', videoRouter)

/* -------------------------------------------- */
const handleListening = () => {
    console.log(`✨Server listening on port 🔗http://localhost:${PORT}`)
}

app.listen(PORT, handleListening)