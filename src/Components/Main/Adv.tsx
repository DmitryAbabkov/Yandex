//Этот компонент дает возможность оторазить рекламный блок, который находится под строкой поиска
import React, {FC} from 'react';

interface Adv {
    src: string
}

const Adv : FC<Adv> = ({src}) => {
    return (
        <img width='850' height='200' src={src} alt="#"/>
    )
};

export default Adv;
