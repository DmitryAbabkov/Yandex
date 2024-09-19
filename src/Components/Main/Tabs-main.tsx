// Этот компонент отображает ссылки над поисковой строкой
import React, {FC} from 'react';

interface Tabs {
    name: string
    link: string
}

interface TabsProps {
    tabs: Tabs[]
}

const TabsMain : FC<TabsProps> = ({tabs}) => {
    return (
        <>
            {tabs.map((item, key) =>  (
                <div key={key} className="tab__main__item">
                    <a href={item.link} className="tab__main__item__link">{item.name}</a>
                </div>
            ))}
        </>
    )
};

export default TabsMain;
