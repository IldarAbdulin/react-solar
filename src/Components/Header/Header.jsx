import './Header.css'
import logo from './HeaderImg/logo.svg'
import group from './HeaderImg/group.svg'
import instagram from './HeaderImg/instagram.svg' 
import telegram from './HeaderImg/telegram.svg' 
import whatsapp from './HeaderImg/whatsapp.svg' 
import facebook from './HeaderImg/facebook.svg' 


function Header() {
    return(
        <div className='header'>
            <div className='header__logo'>
                <img src={logo} alt="logo" />
            </div>
            <div className='header__title'>
                <p>Зеленый тариф для дома и бизнеса</p>
                <h1>Солнечная электростанция</h1>
                <h3>с доходом от 1000 $ в месяц</h3>
            </div>  
            <div className='title__recording'>
                <img src={group} alt="group"/>
                <span>записаться на консультацию</span>
            </div>
            <div className='header__social-links'>
                <img src={instagram} width={30} height={30} alt="instagram" />
                <img src={telegram} width={30} height={30} alt="telegram" />
                <img src={whatsapp} width={30} height={30} alt="whatsapp" />
                <img src={facebook} width={30} height={30} alt="facebook" />
            </div>
        </div>
    )
}
export default Header