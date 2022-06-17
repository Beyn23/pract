import React, { Component } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './entry.css'

export default class Entry extends Component {
  render() {
    return (
      <div className='entry'>
        <Header/>
        <section className='recond_form'>
            <h1>Заполните анкету и мы свяжемся с вами</h1>
            <h5>Заполняя анекету вы подтверждаете, что достигли возраста 18 лет</h5>
            <article>
               <div>
                    <h2>Ваше имя</h2>
                    <input type="text" id='name'/>
                </div>
                <div>
                    <h2>E-mail</h2>
                    <input type="text" id='mail'/>
                </div>
                <div>
                    <h2>Телефон</h2>
                    <input type="text" id='phone'/>
                </div>
                <div>
                <div id='recond_services'>
                    <div>
                        <h2>Вид услуги</h2>
                        <select>
                            <option hidden selected></option>
                            <option>Татуировка</option>
                            <option>Удаление тату</option>
                            <option>Пирсинг</option>
                            <option>Разработка эскиза</option>
                        </select>
                    </div>
                    <div>
                    <h2>Мастер</h2>
                        <select>
                            <option hidden selected></option>
                            <option>Петр Мельников</option>
                            <option>Алексей Вареник</option>
                            <option>Марина Франк</option>
                            <option>Ажабах Читете</option>
                            <option>Влад Валеев</option>
                            <option>Гуль Каримова</option>
                        </select>
                    </div>
                </div>
                <h3>Вы можете прикрепить  примеры желаемого результата
                    или обратиться к мастеру с идеей разработки эскиза </h3>
                    <div>
                        <input type="text" id='sketch_description'/>
                        <input type="file" placeholder='Нажмите, чтобы прикрепить изображение' id='file'/>
                    </div>
                </div>
            </article>
            <section className='QQ'>
                <div className='shadow'>
                    <h1>Остались вопросы?</h1>
                    <h2>Оставьте свои контакты и наши менеджер поможет Вам.</h2>
                    <input type='text' placeholder='E-mail'/>
                    <div className='black_line'></div>
                </div>
            </section>
            <div className='black_line'></div>
        </section>
        <Footer/>
      </div>
    )
  }
}
