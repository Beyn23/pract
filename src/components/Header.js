import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import bn_1 from './img/bn1.png';
import bn_2 from './img/bn2.png';
import './baner.css'
import './header.css'
import VK  from './img/VK.svg';
import Yan from './img/Yandex.svg'
import { Navbar } from 'react-bootstrap';
import logo from './img/Logo.svg'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div id='head'>
        <header>
          <div className='city_and_record'>
              <div id='city'>
                <p>Москва</p>
                <div>
                  <a href='https://vk.com/b_e_y_n'><img src={VK} ></img></a>
                  <a href="https://clck.ru/DYoi3"><img src={Yan}></img></a>
                </div>
              </div>
              <Link to="/" ><img src={logo} id='logo'/></Link>
              <div>
                <Link to="/Record" id='b_rec'><button><p>Запись</p></button></Link>
                <Link to="/Personal_Account" id='b_lk'><button >Личный кабинет</button></Link>
              </div>
          </div>
          <Navbar>
              <a href='#masters'>Мастера</a>
              <a href='#gallery'>Галерея</a>
              <a href='#contact'>Контакты</a>
              <a href='#FAQ'>FAQ</a>
          </Navbar>
          <div className='line'></div>
        </header>
        <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src={bn_1} alt="First"/>
              <Carousel.Caption>
                <div id='baner_inf1'>
                  <h3 className='baner_headline'>Открыта запись на <br/>
                  татуировки</h3>
                  <p className='baner_information'>
                    Подробная информация  на вкладке <br/> контакты
                  </p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={bn_2} alt="First"/>
              <Carousel.Caption>
                  <div id='baner_inf2'>
                    <h3 className='baner_headline'>Делаем пирсинг <br/> любой сложности</h3>
                    <p className='baner_information'>
                      Опыт более 20 лет <br/>Ежедневно с 12 до 20 часов
                    </p>
                  </div>
              </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
