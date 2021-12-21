import { Injector } from '@ts-stack/di';
import { Controller, Req, Res, Status } from '@ditsmod/core';
import { getContent, getParams, OasRoute } from '@ditsmod/openapi';

import { Params } from '@models/params';
import { getNoContent, getRequestBody, getResponses } from '@models/oas-helpers';
import { BearerGuard } from '@service/auth/bearer.guard';
import { UtilService } from '@service/util/util.service';
import { Article, ArticleItem, ArticlePostData, Articles } from './models';

@Controller()
export class ArticlesController {
  constructor(private req: Req, private res: Res, private injector: Injector, private utils: UtilService) {}

  @OasRoute('GET', '', [], {
    parameters: getParams('query', false, Params, 'tag', 'author', 'favorited', 'limit', 'offset'),
    ...getResponses(Articles, 'Description for response content.', Status.OK),
  })
  async getArticles() {
    const form = new Articles();
    form.articlesCount = 2;
    form.articles = [new Article(), new Article()];
    this.res.sendJson(form);
  }

  @OasRoute('GET', ':slug', [], {
    parameters: getParams('query', false, Params, 'tag', 'author', 'limit', 'offset'),
    ...getResponses(Articles, 'Description for response content.', Status.OK),
  })
  async getArticlesSlug() {
    // This need only because parameter `:slug` conflict with parameter `feed`.
    if (this.req.pathParams.slug == 'feed') {
      await this.fead();
    } else {
      await this.slug();
    }
  }

  private async fead() {
    const guard = this.injector.get(BearerGuard) as BearerGuard;
    const canActivate = await guard.canActivate();
    if (canActivate) {
      this.res.sendJson([new Article(), new Article()]);
    } else {
      this.utils.throw401Error();
    }
  }

  private async slug() {
    this.res.sendJson(new Article());
  }

  @OasRoute('POST', '', [BearerGuard], {
    ...getRequestBody(ArticlePostData, 'Description for requestBody.'),
    ...getResponses(ArticleItem, 'Description for response content.', Status.CREATED),
  })
  async postArticles() {
    this.res.sendJson(new ArticleItem());
  }

  @OasRoute('PUT', ':slug', [BearerGuard], {
    ...getRequestBody(ArticlePostData, 'Description for requestBody.'),
    ...getResponses(ArticleItem, 'Description for response content.', Status.OK),
  })
  async putArticlesSlug() {
    this.res.sendJson(new ArticleItem());
  }

  @OasRoute('DELETE', ':slug', [BearerGuard], {
    ...getNoContent(),
  })
  async delArticlesSlug() {
    this.res.sendJson(new ArticleItem());
  }
}
