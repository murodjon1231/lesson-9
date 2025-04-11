import React from 'react'
import logo from "./assets/logo.svg"
import log from "./assets/log.svg"
import phot from "./assets/phot.svg"

const Azizbek = () => {
  return (
    <div>
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
    <div className='bg-[#01AEE7] p-[100px]'>
    <h1 className='text-[#FFF500] text-center text-2xl'>О НАШЕМ БРЕНДЕ</h1>
    <h1 className='text-center text-4xl text-white mt-[30px]'>Преимущества TRUE FITNESS</h1>
    <h1 className='text-center text-4xl text-white mt-[30px]'>Благодаря которым мы являемся мировым лидером в производстве фитнес-оборудования</h1>
    </div>
    <div className='bg-white pt-[150px] pb-[150px]'>
     <div className='flex justify-around mt-[50px]'>
       <img src={phot} alt="" />
       <img src={phot} alt="" />
       <img src={phot} alt="" />
     </div>
     <div className='flex justify-around mt-[50px]'>
       <img src={phot} alt="" />
       <img src={phot} alt="" />
       <img src={phot} alt="" />
     </div>
     <div>
      <h1 className='text-center text-5xl mt-[30px]'>Бренд TRUE Fitness входит в TOП 5 крупнейших производителей фитнес оборудования</h1>
     </div>
    </div>
    <div className='bg-[url(./assets/bg.svg)] bg-no-repeat bg-cover bg-center w-full h-[700px] pt-[100px] flex justify-center'>
    <div className='bg-black opacity-50 w-[90%] h-[550px] p-[50px]'>
     <h1 className='text-[#FFFF19] text-center text-3xl'>TRUE FITNESS</h1>
     <h1 className='text-[#01AEE7] text-center text-6xl mt-[40px]'><span className='text-white'>Получите</span> эксклюзивное предложение <span className='text-white'>на тренажеры</span> TRUE FITNESS</h1>
     <div className='flex justify-around mt-[30px] mb-[30px]'>
       <input className='bg-[#D9D9D9] text-center z-<number>' placeholder='имя' type="text" />
       <input className='bg-[#D9D9D9] text-center' placeholder='+998 (99)-999-99-99' type="text" />
       <input className='bg-[#D9D9D9] text-center' placeholder='e-mail' type="text" />
       <button className='text-2xl text-white bg-[#01AEE7] opacity-100'>отправить</button>
     </div>
     <h1 className='text-3xl text-white text-center'>«Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь c политикой конфиденциальности»</h1>
    </div>
    </div>
    <div className='bg-[#01AEE7] flex justify-around items-center p-[30px]'>
     <h1 className='text-white'>КАТАЛОГ ТОВАРОВ</h1>
     <h1 className='text-white'>ИНФОРМАЦИЯ</h1>
     <h1  className='text-white'>КОНТАКТЫ</h1>
     <h1  className='text-white'>ПОДПИСАТЬСЯ НА НОВОСТИ И АКЦИИ</h1>
     <div>
       <img src={log} alt="" />
     </div>
    </div>
    </div>
  )
}

export default Azizbek