export const REDUCE_ARTICLES = 'REDUCE_ARTICLES'

export function reduceArticles(articles){
  return {type: REDUCE_ARTICLES, articles}
}
