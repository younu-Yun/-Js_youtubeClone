import express from "express";
import morgan from "morgan";

import globalRouter from "../router/globalRouter";
import userRouter from "../router/userRouter";
import videoRouter from "../router/videoRouter";

const app = express();
const PORT = 4000;
const logger = morgan("dev");
app.use(logger);

/* -------------------------------------------- */
//express의 html view engine을 Pug로 설정
app.set("view engine", "pug");
//package.json이 있는 위치를 내가 원하는곳을 바꿔줌
app.set("views", `${process.cwd()}/src/views`);

app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

/* -------------------------------------------- */
const handleListening = () => {
    console.log(`✨Server listening on port 🔗http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);
