import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import bn_1 from './img/bn1.png';
import bn_2 from './img/bn2.png';
import './baner.css'
import './header.css'

export default class Slider extends Component {
  render() {
    return (
      <div>
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
    )
  }
}
