import './Services.css';
import servicesImg from './ServicesImg/rectangle.svg';
import servicesSecondImg from './ServicesImg/rectangle9.svg';
import servicesThirdImg from './ServicesImg/rectangle8.svg';
import arrowLeft from './ServicesImg/arrow-left.svg';
import arrowRight from './ServicesImg/arrow-right.svg';

function Services() {
    return(
        <div className='services'>
            <h2>УСЛУГИ</h2>

            <div className='services__items'>
                <div className='left-items'>

                    <div className='left-item'>
                        <h3>Полный комплект солнечной электростанции</h3>
                        <p>74 модели солнечных панелей, 31 модель инверторов, провода с повышенной устойчивостью к атмосферным условиям, качественные соединители, контроллеры зарядов и надежные гелевые аккумуляторы с увеличенным сроком службы.</p>
                    </div>

                    <div className='left-item'>
                        <h3>Подбор оборудования с максимальной производительностью</h3>
                        <p>Подбираем солнечные панели с учетом расположения Вашего дома, количеством прямого и рассеянного излучения, для того, чтобы Ваша электростанция - вырабатывала максимальное количество электроэнергии и окупилась как можно быстрее.</p>
                    </div>

                    <div className='left-item'>
                        <h3>Монтаж оборудования в соответствии с ГОСТом</h3>
                        <p>Монтаж производится в точном соответствии с ГОСТом, с учетом закона о «Зеленом тарифе» и требованиями Облэнерго. При этом, мы учитываем, чтобы солнечная станция имела максимально возможную производительность.</p>
                    </div>

                    <div className='left-item'>
                        <h3>Помощь в подключении к «Зеленому тарифу»</h3>
                        <p>Всю бюрократическую процедуру по подключению Вашей электростанции к «Зеленому тарифу», мы берем на себя, в том числе по увеличению договорной мощности вашего дома. При заказе солнечной электростанции эта услуга абсолютно бесплатна.</p>
                    </div>

                </div>
                <div className='right-items'>
                    <img src={servicesImg} alt="" />
                </div>
            </div>

            <h2 className='green-trafic'>ЗЕЛЕНЫЙ ТАРИФ</h2>

            <div className='about-green-trafic'>
                <div className='green-trafic__links'>
                    <li>продажа</li>
                    <li>закрепление</li>
                    <li>ограничения</li>
                </div>
                <div className='green-trafic__more-about-it'>
                    <h3>«Зеленый тариф» — это особые тарифные условия, которые позволяют частным домохозяйствам  не только потреблять, но и продавать выработанное домашними солнечными электростанциями электричество в электросеть общего пользования.</h3>
                </div>
            </div>

            <div className='housewife-blockLOL'>
                <div className='housewife-blockLOL-papa'>
                    <div className='housewife'>
                        <div>
                            <img src={servicesSecondImg} alt="" />
                        </div>
                        <div className='about-housewife'>
                            <div className='housewife-title'>
                                <p>Цена, по которой домохозяйства могут продать электроэнергию, более чем в 10 раз превышает цену, по которой они ее покупают для своих нужд — 0,16 Евро/кВт (продажа).</p>
                                <div className='arrows'>
                                    <img src={arrowLeft} alt="" />
                                    <img src={arrowRight} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='housewife__more-about-it'>

                        <div className='housewife__more-about-it__item'>
                            <h3>Гарантия выкупа</h3>
                            <p>Гарантированный выкуп электроэнергии государством - прописано в НКРЕ №447 </p>
                        </div>

                        <div className='housewife__more-about-it__item'>
                            <h3>Долгосрочно</h3>
                            <p>это проект, поддерживаемый международными инвестиционными организациями</p>
                        </div>

                        <div className='housewife__more-about-it__item'>
                            <h3>Вид вложения</h3>
                            <p>Альтернатива банковским депозитам, окупаемость - от 16% до 18% годовых</p>
                        </div>

                        <div className='housewife__more-about-it__item'>
                            <h3>Высокая ставка</h3>
                            <p>Самая высокая тарифная ставка в европе - 0,16 евро</p>
                        </div>

                    </div>
                </div>
                <div className='housewife__right-img'>
                    <img src={servicesThirdImg} alt="" />
                </div>
            </div>

        </div>
    )
}
export default Services