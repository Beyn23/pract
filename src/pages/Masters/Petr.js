import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Petr_full from '../../components/img/Petr_full.png'
import './Petr.css'
import Footer from '../../components/Footer'
import Behance from '../../components/img/Behance.svg'
import Telegram from '../../components/img/Telegram.svg'
import Yan from '../../components/img/Yandex.svg'

import t11 from '../../../public/img/tattoo/t1.1.png'
import t12 from '../../../public/img/tattoo/t1.2.png'
import t13 from '../../../public/img/tattoo/t1.3.png'
import t14 from '../../../public/img/tattoo/t1.4.png'
import t15 from '../../../public/img/tattoo/t1.5.png'
import t16 from '../../../public/img/tattoo/t1.6.png'
import t21 from '../../../public/img/tattoo/t2.1.png'
import t22 from '../../../public/img/tattoo/t2.2.png'
import t23 from '../../../public/img/tattoo/t2.3.png'
import t24 from '../../../public/img/tattoo/t2.4.png'
import t25 from '../../../public/img/tattoo/t2.5.png'
import t26 from '../../../public/img/tattoo/t2.6.png'
import t31 from '../../../public/img/tattoo/t3.1.png'
import t32 from '../../../public/img/tattoo/t3.2.png'
import t33 from '../../../public/img/tattoo/t3.3.png'
import t34 from '../../../public/img/tattoo/t3.4.png'
import t35 from '../../../public/img/tattoo/t3.5.png'
import t36 from '../../../public/img/tattoo/t3.6.png'

export default class Petr extends Component {
  componentDidMount(){window.scrollTo(0,0)}
  render() {
    return (
      <div className='master'>
        <Header/>
        <main>
          <section >
            <div className='name_master'>
              <h1>Петр Мельников</h1>
              <div className='line'></div>
              <p >Татуартист с 2010 года</p>
            </div>
            <Link to="/Record"><button id='record_master'><p>Запись</p></button></Link>
          </section>
          <section id="biography">
            <article>
              <h4>Петр Мельник</h4>
              <p>Татуартист с опытом более 10 лет.
                В 2004 г. закончил тату-колледж «БИОТЭК» по направлению «Специалист по                 художественной дермопигментации».<br/>
                В 2005 г. закончил колледж по специальности «Медицинская сестра». Также с 2005                 года занимался перманентным макияжем.<br/>
                <br/>
                Работает в следующих направлениях:
                <br/>•	Реализм
                <br/>•	Леттеринг
                <br/>•	Графика
                <br/>•	Олд Скул
                </p>
                <div className='line'></div>
                <div id='social'>
                  <a href='https://web.telegram.org/z/'><img src={Telegram}/></a>
                  <a href='https://clck.ru/DYoi3'><img src={Yan}/></a>
                  <a href='https://www.behance.net/'><img src={Behance}/></a>
                </div>
            </article><img src={Petr_full}/>
          </section>
          <div className='gallery'>
            <img src={t11}/>
            <img src={t12}/>
            <img src={t13}/>
            <img src={t14}/>
            <img src={t15}/>
            <img src={t16}/>
            <img src={t21}/>
            <img src={t22}/>
            <img src={t23}/>
            <img src={t24}/>
            <img src={t25}/>
            <img src={t26}/>
            <img src={t31}/>
            <img src={t32}/>
            <img src={t33}/>
            <img src={t34}/>
            <img src={t35}/>
            <img src={t36}/>
          </div>
        </main>
        <Footer/>
      </div>
    )
  }
}
