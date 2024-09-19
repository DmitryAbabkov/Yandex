//Этот компонент отображет строку поиска
import React from 'react';

const Seacrh = () => {
    return (
        <>
            <img width='200' height='100' className='search__img' src="https://mobile-review.com/all/wp-content/uploads/2023/02/yandex_logo_ru-scaled.jpg" alt=""/>
        <input className='search__input' type="text"/>
            <a className='search__btn' href="#">Найти</a>
        </>
    )
};

export default Seacrh;
