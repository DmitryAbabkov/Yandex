// Этот блок отображает новости, которые лежат под категориями
import React, {FC} from 'react';
interface New {
    img: string
    title: string
    alt: string
}

interface NewProps {
    news: New[]
}

const News : FC<NewProps> = ({news}) => {
    return (
        <>
            {news.map((item, key) => (
                <div key={key} className='news__item'>
                    <img className='item__img' width='20' height='20' src={item.img} alt={item.alt}/>
                    <h2 className='item__title'>{item.title}</h2>
                </div>
            ))}
        </>
    );
};

export default News;
