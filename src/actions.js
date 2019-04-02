export const REDUCE_ARTICLES = 'REDUCE_ARTICLES'

export function articleReducer(articles){
  return {type: REDUCE_ARTICLES, articles}
}

export const REDUCE_TOPICS = 'REDUCE_TOPICS'

export function reduceTopics(topics){
  return {type: REDUCE_TOPICS, topics}
}
