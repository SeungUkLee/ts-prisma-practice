import * as express from "express";
import ArticleController from './controllers/article_controller'

const router = express.Route();

router.get('/articles', ArticleController.index);

export { router };
