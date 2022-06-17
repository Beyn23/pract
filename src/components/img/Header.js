import React, { Component } from 'react';
import VK  from './img/VK.svg';
import Yan from './img/Yandex.svg'
import { Navbar } from 'react-bootstrap';
import './header.css'

export default class Header extends Component {
  render() {
    return (
      <div>
          <header>
            <div className='city_and_record'>
                <div id='city'>
                  <p>Москва</p>
                  <div>
                    <img src={VK}></img>
                    <img src={Yan}></img>
                  </div>
                </div>
                <div><button><p>Личный кабинет</p></button></div>
            </div>
            <Navbar>
                <a href='#'>Мастера</a>
                <a href='#'>Галерея</a>
                <a href='#'>Контакты</a>
                <a href='#'>FAQ</a>
            </Navbar>
            <div id='baner_inf1'>
              <h3 className='baner_headline'>Открыта запись<br/>татуировку</h3>
              <p className='baner_information'>
                Подробная информация на вкладке <br/> контакты
              </p>
            </div>
          </header>
      </div>
    );
  }
}
