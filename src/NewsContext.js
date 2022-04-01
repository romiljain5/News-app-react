import React, {createContext, useEffect, useState} from 'react'
import axios from 'axios';

export const createNewsContext = createContext();

export const NewsContext = (props) => {
    const [data, setData] = useState()
    const apikey = 'd259e4760a24430488334b7061a4b291'

    useEffect(() => {
        axios.get(`https://newsapi.org/v2/everything?q=tesla&from=2022-03-01&sortBy=publishedAt&apiKey=${apikey}`)
        .then((response) => setData(response.data))
        .catch((error) => console.log(error))
    }, [])

  return (
    <createNewsContext.Provider value={{ data }}>
        {props.children}
    </createNewsContext.Provider>
  )
}
