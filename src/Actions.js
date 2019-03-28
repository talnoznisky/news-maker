/*
 * action types
 */
export const REDUCE_TOPICS = 'REDUCE_TOPICS'

export const REDUCE_ARTICLES = 'REDUCE_ARTICLES'

export function reduceTopics(topic){
  return { type: REDUCE_TOPICS, topic }
}

export function reduceArticles(articles){
  return { type: REDUCE_ARTICLES, articles}
}
