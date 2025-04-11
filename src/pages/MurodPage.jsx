import { useState } from 'react';
import React from 'react';
import { FaPhone, FaYoutube, FaCog, FaTruck, FaMap, FaBox } from 'react-icons/fa';

const MurodPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const slides = [
    { id: 1, active: true },
    { id: 2, active: false },
    { id: 3, active: false },
    { id: 4, active: false },
    { id: 5, active: false }
  ];

  return (
    <div className="font-sans">
      <header className="bg-white shadow-md">
        <div className='flex justify-center'>
            <div className="flex items-center justify-center py-4">
                <div className="text-3xl font-bold ">
                  <img src="/logo.svg" alt="" />
                </div>
            </div>
            <div className="flex items-center">
                <div className="mr-4 text-gray-600">+998 (90)-606-66-66</div>
                <button className="bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600">
                    оставить заявку
                </button>
            </div>
        </div>
        
        <div className="container mx-auto flex justify-center items-center p-4 gap-[100px]">
          
          
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-cyan-500">О БРЕНДЕ</a>
            <a href="#" className="text-gray-700 hover:text-cyan-500">ПРОДУКЦИЯ</a>
            <a href="#" className="text-gray-700 hover:text-cyan-500">ПРЕИМУЩЕСТВА</a>
            <a href="#" className="text-gray-700 hover:text-cyan-500">ФИТНЕС КЛУБ</a>
            <a href="#" className="text-gray-700 hover:text-cyan-500">КОНТАКТЫ</a>
          </nav>
          
          
        </div>
      </header>

      <section className="relative div">
        <div></div>
        <div className="container mx-auto relative z-10 py-50 px-4">
          <div className="flex justify-center items-center mb-6">
            <div className="">
                <img src="/pause.svg" alt="" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#EEEEEE]">
            TRUE FITNESS ПРЕМИУМ
            <br />
            ТРЕНАЖЕРЫ ИЗ США
          </h1>

        </div>
      </section>
      
      <section>
        <img className='w-full' src="/video.svg" alt="" />
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="mb-4">
                <div className="text-[60px] font-bold ">
                  <span className="text-gray-800 ">TRUE</span>
                  <br />
                  <span className="text-[#01AEE7]"> FITNESS</span>
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-6 w-[323px]">
                Современное и надежное оборудование для фитнес-клубов
              </h2>
              <div className="mb-8">
                <a href="#" className="text-cyan-500 font-bold flex items-center">
                  КАРДИО ТРЕНАЖЕРЫ
                  <span className="ml-2">→</span>
                </a>
              </div>
              
              <div className="flex space-x-2">
                {slides.map((slide, index) => (
                  <button
                    key={slide.id}
                    className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-yellow-300' : 'bg-gray-300'}`}
                    onClick={() => setCurrentSlide(index)}
                  ></button>
                ))}
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="bg-cyan-500 p-4 rounded">
                <img 
                  src="https://s3-alpha-sig.figma.com/img/6409/4974/fe075d3b6f9dfaf79853aa27cfce5c8f?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=gqyH4ADyalYDQQs75ROIDr5UJS6UEPqBhTD21tdRQ3uJy2Fh70BonttcPb7YZe4P--DBPPAKwjbJfmFa11Kwsxn1d9kjIotp1fjR8~X9ShqKdX6wM~QvaKcJrQ48kMxq1c2vp9YOv2Cne6M9zatSMBhxRSym-6Fz0aIWVO~4vXtETNtp~sbuclwTUPyUev47V2MNlNBwWe-zaKYFUEs46pPAIQNLVrFCGzik7O0NH7m~3K3jr92I~436sOGTWbKiG3VFCqzNBbwYhtwAjRNCxGV2PTLL2tQAxMq8e2xAWz4djWsT8mNWdsJ9tE~yWnkFHg7CWWQZVLyBXAEaYISVEA__" 
                  alt="TRUE Fitness Treadmill"
                  className="w-full rounded" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-[400px] overflow-hidden rounded">
              <img 
                src="https://s3-alpha-sig.figma.com/img/9745/a507/4e44a7c399488fc7d82bf83fe8ea8c0b?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cM1FosIQ~ZWDHxW~yQjeE4Y25MZfS8FYrGGIYtmhSRx3F-hbFU2cJN-2QAE-4J9G63Ji1WQk2eYotFeJGrNI6zpzRrmbVRXvyo2AbJlsSFvA1Pbf~eNoQmjPRDshHyqcy8bMQce6iiWaPZ~c4UMZCSdY3rKIOfOKvLfXgBzlAbqXYJ3wF8yFwhhxfVYGzKhg15pN4QcKyGqfPWyGrGejdBwkzS6~2oVBT49PmKlqeJ7dzRbgkkT1LMe0VClcw-rd3Rm9TebMAa51~vmHsz2aAPsmkWjCaFJiEaU12Ynw2aVr3Ph58tu39UrRhitRkY-d1A1okhi9y3fr3QBIgeEoKA__" 
                alt="People exercising on treadmills"
                className="w-full h-full object-cover" 
              />
              <div className="bg absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center p-8">
                <h3 className="text-white text-2xl font-bold mb-4">ЛУЧШИЕ ХАРАКТЕРИСТИКИ</h3>
                <div className="text-white font-bold flex items-center">
                    Наши тренажеры имеют самые совершенные характеристики в классе, от более мощных технических показателей до расширенных функциональных возможностей                </div>
                </div>
            </div>
            
            <div className="bg-cyan-500 rounded p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Низкая СТОИМОСТЬ ВЛАДЕНИЕ</h3>
              <p className="mb-6">
              Надежность оборудования обеспечивает низкие затраты на сервисное обслуживание, так по стоимости затрат на эксплуатацию TRUE выигрывает у конкурентов.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-12 text-cyan-500">
            МЫ ПРЕДЛАГАЕМ ПОЛНЫЙ КОМПЛЕКС УСЛУГ
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="bg-white p-4 rounded-full mb-4 text-cyan-500">
                <FaPhone className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold mb-2">КОНСАЛТИНГ</h3>
              <p className="text-sm">
                Помогаем с выбранием оптимального решения для вашего фитнес-клуба или тренажерного зала
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-white p-4 rounded-full mb-4 text-cyan-500">
                <FaYoutube className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold mb-2">МОНТАЖ И СЕРВИСНОЕ ОБСЛУЖИВАНИЕ</h3>
              <p className="text-sm">
                Работа с нашим сервисным специалистом обеспечит долгую работу с вашим оборудованием
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-white p-4 rounded-full mb-4 text-cyan-500">
                <FaCog className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold mb-2">ПРОЕКТИРОВАНИЕ И 3D ПРОЕКТ</h3>
              <p className="text-sm">
                Поможем с планированием размещения и расстановки тренажеров согласно вашему будущему проекту
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="flex flex-col items-center text-center">
              <div className="bg-white p-4 rounded-full mb-4 text-cyan-500">
                <FaTruck className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold mb-2">ПОСТАВКА ЗАПЧАСТЕЙ</h3>
              <p className="text-sm">
                Оригинальные запчасти для тренажерных залов и сервисных центров
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-white p-4 rounded-full mb-4 text-cyan-500">
                <FaMap className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold mb-2">ДОСТАВКА ПО ВСЕМУ УЗБЕКИСТАНУ</h3>
              <p className="text-sm">
                Доставим ваш заказ по всей территории Узбекистана
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-white p-4 rounded-full mb-4 text-cyan-500">
                <FaBox className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold mb-2">ФИРМЕННЫЙ SHOW-ROOM</h3>
              <p className="text-sm">
                Посетите наш шоу-рум, чтобы ознакомиться с оборудованием TRUE
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 h-[100%] mb-8 md:mb-0">
              <img 
                src="https://s3-alpha-sig.figma.com/img/f975/eaf4/01adaa542a1f182428cc51b0abf9658f?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=P5qiYm1349vPnUFQTjo5yEFeczjZmTSvyczFjvp3zgd6u8MrFzkK2~ualLuLdMVdGPNrTb-kiBTPujAV6zh9MD54Qo0suxseBAXRCyXUzI09p8clxw234Yl3mZD6KStn6bXTzNv3Xsk8q7FtxtxBcDrKi1mymizBADPDD08TNt-U95jdbxQ2eosEsUl0J0eGklt7GqYw6T4tOdRFQ7rBrtN653OAIvk-0iOeMQRhjK0fPN8AEMuCukB~EA7yFGcRT3unEw4IxKtjp3RoPneJxGRVvhbel8BhJChNo9tusZFr~A8xNeASkqA4oyzOOjLNsXmW1vYumDOrzKqlID81NA__" 
                alt="People using TRUE fitness equipment"
                className="w-full rounded" 
              />
            </div>
            
            <div className="md:w-1/2 md:pl-8 flex items-center">
              <div className="bg-white p-8 shadow-lg rounded">
                <h3 className="text-xl font-bold mb-6">
                  ПОЛУЧИТЕ ЭКСКЛЮЗИВНОЕ ПРЕДЛОЖЕНИЕ НА ТРЕНАЖЕРЫ TRUE FITNESS
                </h3>
                <p className="mb-6 text-sm">
                  Наш Эксперт Даст Рекомендации по Оснащению Вашего Клуба и Предложит Лучшие Условия
                </p>
                
                <form>
                  <div className="mb-4">
                    <input 
                      type="email"
                      placeholder="EMAIL"
                      className="w-full p-3 border border-gray-300 rounded"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex">
                      <div className="bg-gray-200 p-3 rounded-l">+998</div>
                      <input 
                        type="tel"
                        placeholder="(99) 999-99-99"
                        className="w-full p-3 border border-gray-300 rounded-r"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <button className="w-full bg-cyan-500 text-white p-3 rounded font-bold hover:bg-cyan-600">
                    ОТПРАВИТЬ
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-cyan-500 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold mb-4">КАТАЛОГ ТОВАРОВ</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline">КАРДИО ТРЕНАЖЕРЫ</a></li>
                <li><a href="#" className="hover:underline">СИЛОВЫЕ ТРЕНАЖЕРЫ</a></li>
                <li><a href="#" className="hover:underline">АКСЕССУАРЫ</a></li>
                <li><a href="#" className="hover:underline">ЗАПЧАСТИ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">ИНФОРМАЦИЯ</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline">О БРЕНДЕ</a></li>
                <li><a href="#" className="hover:underline">ПРЕИМУЩЕСТВА</a></li>
                <li><a href="#" className="hover:underline">ПРОИЗВОДСТВО</a></li>
                <li><a href="#" className="hover:underline">ДОСТАВКА И ОПЛАТА</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">КОНТАКТЫ</h4>
              <ul className="space-y-2 text-sm">
                <li>ул. Примерная, 123</li>
                <li>info@truefitness.uz</li>
                <li>+998 99 123 45 67</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">ПОДПИСАТЬСЯ НА НОВОСТИ И АКЦИИ</h4>
              
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/20 text-center text-sm">
            © 2025 TRUE Fitness
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MurodPage;