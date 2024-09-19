//Отображает рекламный блок в правой части страницы
import React, {FC} from 'react';
interface Ads {
    img?: string
    title: string
    description: string
    alt?: string
}

const Ads : FC<Ads> = (ads) => {
    return (
        <div className='ads__item'>
            <img width='100' height='100' className='ads__item-img' src={ads.img} alt={ads.alt}/>
            <h2 className='ads__item-title'>{ads.title}</h2>
            <p className='ads__item-description'>{ads.description}</p>
        </div>
    );
};

export default Ads;
