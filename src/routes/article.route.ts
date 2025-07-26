import experss, {Router} from "express";
import { generateArticle } from "../controllers";

const articleRouter = Router();

articleRouter.route("/generate").post(generateArticle);

export default articleRouter;