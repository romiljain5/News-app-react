import React from 'react'
import '../components/NewsArticle.css'
import {AiTwotoneCalendar} from 'react-icons/ai'
import {BsVectorPen} from 'react-icons/bs'

//destructured
const NewsArticle = ({ data }) => {
  return (
    <div className='bod'>
        <div className='container'>
            <img src={data.urlToImage}/>
            <div className='sm-container'>
                <span className='color-box'>{data.source.name}</span>
                <h1>{data.title}</h1>
                <p>{data.description}</p>
                <div className='author'> <BsVectorPen className='icon'/> {data.author}</div>
                <div className='date'> 
                <AiTwotoneCalendar  className='icon'/> {data.publishedAt}</div>
            </div>
        </div>
    </div>
  )
}

export default NewsArticle;