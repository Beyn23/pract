import React, { useEffect, useState } from 'react'
import './gallery.css';


export const Gallery = () => {
  const [data, setData] = useState({
    tattoo: [],
    piercing: []
  });

  const [show, setShow] = useState("tattoo");

  useEffect(()=>{
    fetch("http://localhost/zhuk_tattoo/?gallery").then(r => r.json())
    .then(res=>{
      setData({
        tattoo:res.filter(el=>el.type==="0"),
        piercing: res.filter(el=>el.type==="1"),
      });
    });
  },[]);

  return <div className='body_gallery'>
    <section className='effect' id='gallery'>
      <div className='button_gallery' >
        <button onClick={ () =>setShow('tattoo')}>Татуировка</button>
        <button onClick={()=>setShow('piercing')}>Пирсинг</button>
      </div>
      <div className='gallery'>
        {data[show].map((el, i) => <img key={i} src={el.photo} alt={show}/>)}
      </div>
    </section>
</div>
};