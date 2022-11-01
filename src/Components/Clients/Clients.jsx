import './Clients.css';
import leftImg from './ClientsImg/rectangle11.svg';
import rightImg from './ClientsImg/rectangle12.svg';
import button from './ClientsImg/button.svg';
import arrowLeft from '../Services/ServicesImg/arrow-left.svg';
import arrowRight from '../Services/ServicesImg/arrow-right.svg';

function Clients() {
    return(
        <div className='services'>
            <h2>НАШИ КЛИЕНТЫ</h2>
            <div className='clients'>
                <div className='left-img'>
                    <img src={leftImg} alt="" />
                    <div className='img-arrows'>
                        <img src={arrowLeft} alt="" />
                        <img src={arrowRight} alt="" />
                    </div>
                </div>
                <div className='right-title'>
                    <h3>Солнечная электростанция 30 кВт подключенная по Зеленому Тарифу</h3>
                    <div className='title__paragraphs'>
                        <p>Расположение: Харьковская обл., г. Харьков</p>
                        <p>Чистый доход за вычетом налогов с мая 2017 г. по май 2019 г. 13 900 $.</p>
                        <p>Смонтирована: апрель 2017 г.</p>
                        <p>Срок службы: 25-30 лет</p>
                    </div>
                    <img src={button} alt="button" />
                </div>
            </div>
            <div className='clients-part-2'>
                <div className='right-title'>
                    <h2>5 ШАГОВ К СОБСТВЕННОЙ ЭЛЕКТРОСТАНЦИИ</h2>

                        <div className='clients__callback-item'>
                            <p>01</p>
                            <h3>Заявка или звонок</h3>
                            <p>Оставляете заявку на нашем сайте или связываетесь с нами по телефону или в мессенджерах.</p>
                        </div>

                        <div className='clients__callback-item'>
                            <p>02</p>
                            <h3>Консультация и замер на объекте</h3>
                            <p>Мы просчитываем более 10- 15 вариантов солнечной станции на Вашем участке, чтобы предложить Вам один наиболее выгодный.</p>
                        </div>

                        <div className='clients__callback-item'>
                            <p>03</p>
                            <h3>Заключение договора</h3>
                            <p>Заключается договор, благодаря которому, вы будете застрахованы от некачественного оборудования и срыва сроков.</p>
                        </div>

                        <div className='clients__callback-item'>
                            <p>04</p>
                            <h3>Монтаж СЭС</h3>
                            <p>Наши специалисты производят монтаж солнечных батарей, проводки и инверторов, при необходимости изготавливают опоры.</p>
                        </div>

                        <div className='clients__callback-item'>
                            <p>05</p>
                            <h3>Получение дохода от государства</h3>
                            <p>После подключения к «Зеленому тарифу», вы получаете доход за каждый киловатт, выработанный на Вашей солнечной электростанции по зафиксированному тарифу на момент подключения.</p>
                        </div>
                </div>

                <div className='left-img'>
                    <img src={rightImg} alt="" />
                </div>

            </div>
        </div>
    )
}
export default Clients