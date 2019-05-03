import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
    disable: function() {
      return /bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent);
    }
});

const ContactsData = props => (
    <div data-aos="fade-right" data-aos-duration="1000">
        <h2>Связаться с нами</h2>
    <p>
        <strong>Почта:</strong>x834@ukr.net <br/>
        <br/>
        <strong>Наши телефоны:</strong><br/>
        <br/>
        +380676324785 , +380509502530 - Директор Андрей<br/>
        <br/>
        +380975359697 , +380664540173 -  Менеджер по продажам Ольга<br/>
        <br/>
        т.ф. - (05662) 2-22-18 <br/>
        <br/>
        <strong>Адрес:</strong>ул.Войкова 58а. г. Никополь Днепропетровская область. П/И 53220<br/>
    </p>
    </div>
)

export default ContactsData
