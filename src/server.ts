import * as express from "express";
import * as morgan from "morgan";
import { router } from "./routes";


const app = express();

app.use(morgan('dev'));
app.use(router);

app.listen(3000, () => console.log("[SERVER] running on 3000..."));

export {app}
