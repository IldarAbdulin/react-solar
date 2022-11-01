import './Footer.css';
import footerBtn from './fffBtn.svg'
import footerlogo from '../Header/HeaderImg/logo.svg'
import instagram from '../Header/HeaderImg/instagram.svg' 
import telegram from '../Header/HeaderImg/telegram.svg' 
import whatsapp from '../Header/HeaderImg/whatsapp.svg' 
import facebook from '../Header/HeaderImg/facebook.svg' 

function Footer() {
    return(
        <div className='footer'>

            <div className="request">
                <div className="request__left-site">
                    <h2>ОСТАВИТЬ ЗАЯВКУ</h2>
                    <input type="text" id='name' placeholder='Имя'/>
                    <br />
                    <input type="text" id='phone' placeholder='Телефон'/>
                    <br />
                    <img src={footerBtn} alt="logo" />
                </div>
                <div className="request__right-site">
                    <h2>КОНТАКТЫ</h2>
                    <div className="request__paragraphs">
                        <p>Центральный офис: <br /> г. Москва, ул,Гоголя 13, 1й этаж</p>
                        <p>Представительство в Киеве: <br /> г. Киев, ул. Є. Коновальця, 103 оф. 410</p>
                        <p>Представительства в Харькове, Одессе, Ростове, Сочи, Белгороде</p>
                        <p>+7 987 654-54-56 <br /> +38 067 504-32-57</p>
                        <p>Ежедневно 08:00 - 20:00</p>
                    </div>
                </div>
            </div>

            <div className='request__second-part'>

                <div className='request__text'>
                    <p>Политика конфиденциальности</p>
                </div>

                <div className='request__logo'>
                    <img src={footerlogo} alt="logo" />
                </div>

                <div className='request__social-links'>
                    <div className='header__social-links'>
                        <img src={instagram} width={30} height={30} alt="instagram" />
                        <img src={telegram} width={30} height={30} alt="telegram" />
                        <img src={whatsapp} width={30} height={30} alt="whatsapp" />
                        <img src={facebook} width={30} height={30} alt="facebook" />
                    </div>
                </div>

            </div>

        </div>
    )
}
export default Footer