// Отображает табы: Главное, Рекомендуем
import React, {FC} from 'react';

interface Tab {
    name: string
}
interface TabsProps {
    tabs: Tab[];
}


const Tabs : FC<TabsProps> = ({tabs}) => {
    return (
        <>
            {tabs.map((item, key) => (
            <div key={key} className='tabs__item'>{item.name}</div>
            ))}
        </>
    )
}

export default Tabs;
