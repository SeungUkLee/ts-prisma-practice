import { ArticleManager } from "../../src/managers/article_manager";
import { Article } from "../../src/models/article";
import { PrismaRepository } from "../../src/resources/prisma_repository";
import { prisma as db } from "../../prisma/generated/prisma-client";

test("getArticles_noArticlesInDB_emptyList", async () => {
    await db.deleteManyArticles();

    const articleManager = new ArticleManager(new PrismaRepository());
    const articles: Article[] = await articleManager.getArticles();

    expect(articles.length).toBe(0);
});
