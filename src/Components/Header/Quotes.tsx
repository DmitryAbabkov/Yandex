//Этот компонент отображает курсы валют
import React, {FC} from 'react';

interface Quotes {
    name: string
    value: number
    change: string
}

interface QuotesProps {
    quotes: Quotes[]
}

const Quotes : FC<QuotesProps> = ({quotes}) => {
    return (
        <>
            {quotes.map((item, key) => (
                <div key={key} className='quotes__item'>
                    <p className="quotes__item-title">{item.name}</p>
                    <p className="quotes__item-value">{item.value}</p>
                    <p className="quotes__item-change">{item.change}</p>
                </div>
            ))}
        </>

)};

export default Quotes;
