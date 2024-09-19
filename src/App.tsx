import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tabs from "./Components/Header/Tabs";
import News from "./Components/Header/News";
import Ads from "./Components/Header/Ads";
import Quotes from "./Components/Header/Quotes";
import TabsMain from "./Components/Main/Tabs-main";
import Seacrh from "./Components/Main/Seacrh";
import Adv from "./Components/Main/Adv";
import Link from "./Components/Footer/Link";

function App() {
  return (
    <div className="App">
        <header className="header">
        <div className="container">
        <div className='position__left'>
      <div className='tabs__list'>
          <Tabs tabs={[
              { name: "Сейчас в СМИ" },
              { name: "у пендосов" },
              { name: "Рекомендуем" }
          ]}/>
      </div>
        <div className='news__list'>
            <News news={[
                {img: 'https://avatars.dzeninfra.ru/get-ynews-logo/271828/1116-1718714036070-square/logo-square',
                    title: 'Эльмана Пашаева отправили в СИЗО без вещей',
                    alt: 'Российская газета'
                },
                {img: 'https://avatars.dzeninfra.ru/get-ynews-logo/28627/254083361-1516267195536-square/logo-square',
                    title: 'Эльмана Пашаева отправили в СИЗО без вещей',
                    alt: 'Российская газета'
                },
                {img: 'https://avatars.dzeninfra.ru/get-ynews-logo/271828/1116-1718714036070-square/logo-square',
                    title: 'Эльмана Пашаева отправили в СИЗО без вещей',
                    alt: 'Российская газета'
                },
                {img: 'https://avatars.dzeninfra.ru/get-ynews-logo/28627/254083361-1516267195536-square/logo-square',
                    title: 'Эльмана Пашаева отправили в СИЗО без вещей',
                    alt: 'Российская газета'
                },
                {img: 'https://avatars.dzeninfra.ru/get-ynews-logo/271828/1116-1718714036070-square/logo-square',
                    title: 'Эльмана Пашаева отправили в СИЗО без вещей',
                    alt: 'Российская газета'
                }
            ]}/>
        </div>
            <div className="quotes__list">
                <Quotes quotes={[
                    {name: 'USD MOEX', value: 63.52, change: '+0.12'},
                    {name: 'USD MOEX', value: 63.52, change: '+0.12%'},
                    {name: 'USD MOEX', value: 63.52, change: '+0.12'}
                ]}/>
            </div>
        </div>
        <div className='position__right'>
        <Ads img={'https://avatars.dzeninfra.ru/get-zen_social/1677008/stubLogo19/orig'} title={'Работа над ошибками'} description={'Смотрите на яндексе и запоминайте'} alt={'Картинка'}/>
        </div>
        </div>
        </header>
        <main className="main">
    <div className="container-main">
        <div className="tabs__main__list">
            <TabsMain tabs={[
                {name: 'Видео', link:'https://dzen.ru'},
                {name: 'Картинки', link:'https://dzen.ru'},
                {name: 'Новости', link:'https://dzen.ru'},
                {name: 'Карты', link:'https://dzen.ru'},
                {name: 'Маркет', link:'https://dzen.ru'},
                {name: 'Переводчик', link:'https://dzen.ru'},
                {name: 'Эфир', link:'https://dzen.ru'},
                {name: 'Еще', link:'https://dzen.ru'}
            ]}/>
        </div>
        <div className='search'>
            <Seacrh/>
            </div>
        <div className="advertising">
        <Adv src={'https://media.istockphoto.com/id/1435226078/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BF%D0%B5%D1%80%D0%B5%D0%B4%D0%BD%D1%8F%D1%8F-%D1%87%D0%B0%D1%81%D1%82%D1%8C-%D0%B1%D0%B5%D0%BB%D0%BE%D0%B3%D0%BE-bmw-m4-%D0%BF%D1%80%D0%B8%D0%BF%D0%B0%D1%80%D0%BA%D0%BE%D0%B2%D0%B0%D0%BD%D0%B0-%D0%BD%D0%B0-%D1%83%D0%BB%D0%B8%D1%86%D0%B5-%D1%81-%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D1%8C%D1%8F%D0%BC%D0%B8-%D0%BD%D0%B0-%D0%B7%D0%B0%D0%B4%D0%BD%D0%B5%D0%BC-%D0%BF%D0%BB%D0%B0%D0%BD%D0%B5.jpg?s=612x612&w=0&k=20&c=-TR3ivG5MeDtb97fjyNZGWhNF7TAfeUV_FkPDF2bbIk='}/>
        </div>
            </div>
        </main>
        <footer className="footer">
            <div className="list__link">
                <Link title='Посещаемое' children={
                    <>
                        <p><b>Недвижимость</b> - о сталинках</p>
                        <p><b>Маркет</b> - о сталинках</p>
                        <p><b>Авто.ру</b> - о сталинках</p>
                    </>
                }/>
                <Link title='Телепрограмма' children={
                    <>
                        <p>02:00 TНТ.Best <span>ТНТ International</span></p>
                        <p>02:00 TНТ.Best <span>ТНТ International</span></p>
                        <p>02:00 TНТ.Best <span>ТНТ International</span></p>
                    </>
                }/>
                <Link title='Карта пендосов' children={
                    <>
                        <p>Расписания</p>
                    </>
                }/>
                <Link title='Карта пендосов' children={
                    <>
                        <div>
                            <img width='10' height='10'
                                 src="https://img.lovepik.com/free-png/20220127/lovepik-player-flat-button-png-image_401906959_wh860.png"
                                 alt="#"/>
                            <a href="#">Управление как искусство</a>
                        </div>
                        <div>
                            <img width='10' height='10'
                                 src="https://img.lovepik.com/free-png/20220127/lovepik-player-flat-button-png-image_401906959_wh860.png"
                                 alt="#"/>
                            <a href="#">Управление как искусство</a>
                        </div>
                        <div>
                            <img width='10' height='10'
                                 src="https://img.lovepik.com/free-png/20220127/lovepik-player-flat-button-png-image_401906959_wh860.png"
                                 alt="#"/>
                            <a href="#">Управление как искусство</a>
                        </div>
                    </>
                }/>
            </div>
        </footer>
    </div>
  );
}

export default App;
