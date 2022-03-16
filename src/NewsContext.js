import React, {createContext, useEffect, useState} from 'react'
import axios from 'axios';

export const createNewsContext = createContext();

export const NewsContext = (props) => {
    const [data, setData] = useState()
    const apikey = '47ce63b6d2f845adb5d5719f2bd6f8d4'

    useEffect(() => {
        axios.get(`https://newsapi.org/v2/everything?q=tesla&from=2022-02-16&sortBy=publishedAt&apiKey=${apikey}`)
        .then((response) => setData(response.data))
        .catch((error) => console.log(error))
    }, [])

  return (
    <createNewsContext.Provider value={{ data }}>
        {props.children}
    </createNewsContext.Provider>
  )
}
