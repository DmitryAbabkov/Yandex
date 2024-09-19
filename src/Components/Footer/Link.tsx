// Этот компонент дает возможность отобразить любой нижний блок с рубриками: программа, погода, эфир и тд
import React, {FC} from 'react';

interface Link {
    title: string
    children: React.ReactNode
}

const Link: FC<Link> = ({title, children}) => {
    return (
        <div className='link__item'>
            <h2 className='link__item-title'>{title}</h2>
            {children}
        </div>
    )
};

export default Link;
