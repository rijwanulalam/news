import React, { useEffect, useState } from 'react';
import News from '../News/News';

const TopHeading = () => {
    const [articles, setArticles] = useState([]);
    useEffect( () => {
        const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=2c4cace89fae451eb6cf0424a5f4456a';
        fetch(url)
        .then(res => res.json())
        .then(data =>  setArticles(data.articles))
    }, [])
    return (
        <div>
            {
                articles.map(article => <News article={article}></News>)
            }
        </div>
    );
};

export default TopHeading;