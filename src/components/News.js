import React, { useContext } from 'react'
import NewsContext, { createNewsContext } from '../NewsContext'
import NewsArticle from './NewsArticle'
import '../components/News.css'

const News = (props) => {
    const { data } = useContext(createNewsContext)
    console.log(data)
  return (
    <div>
        <h1 className='heading'>News App</h1>
        <div className='content'>
            {data ? data.articles.map(news => <NewsArticle data={news} key={news.url} />) : "Loading.."}
        </div>
    </div>
  )
}

export default News;