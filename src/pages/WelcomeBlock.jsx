import Phone from '../assets/icons/PhoneMain.png'
import AppStore from '../assets/icons/AppStore_PC.png'
import GooglePlay from '../assets/icons/PlayMarket_PC.png'
import Apk from '../assets/icons/APK_PC.png'
import AppStoreMob from '../assets/icons/AppStore_Mob.png'
import GooglePlayMob from '../assets/icons/GooglePlay_Mob.png'
import ApkMob from '../assets/icons/Apk_Mob.png'
import Header from "../components/Header";

const WelcomeBlock = () => {
    return (
        <div className={'flex  flex-col items-center justify-center '}>
            <Header/>
            <div
                className={'w-full xl:h-[636px] h-[730px]  flex flex-col-reverse lg:flex-row  justify-center items-center xl:px-32 lg:px-16'}>
                <div className={'flex flex-col justify-center items-center lg:w-1/2 gap-8'}>
                    <div className={'lg:px-0 lg:pl-8 px-12'}>
                        <p className={'text-white font-extrabold lg:text-[55px] md:text-[30px] text-[25px] font-urbanist'}>M&V coin</p>
                        <p className={'text-white font-extralight lg:text-[35px] md:text-[25px] text-[20px] text-left text-balance'}>Безопастный
                            обмен</p>
                        <p className={'text-white font-extralight lg:text-[35px] md:text-[25px] text-[20px] text-left text-balance'}>криптовалюты,
                            выгодный
                            курс, большой выбор платежных систем</p>
                    </div>
                    <div className={'lg:flex flex-col items-center hidden'}>
                        <div className={'flex'}>
                            <img src={AppStore} alt="" width={200} height={50}/>
                            <img src={GooglePlay} alt="" width={200} height={50}/>
                        </div>
                        <div>
                            <img src={Apk} alt="" width={200} height={50}/>
                        </div>
                    </div>
                    <div className={'flex flex-col items-center lg:hidden'}>
                        <div className={'flex'}>
                            <img src={AppStoreMob} alt="" className="w-[180px] h-[65px] object-cover scale-110"/>
                            <img src={GooglePlayMob} alt="" className="w-[180px] h-[65px] object-cover scale-110"/>
                        </div>
                        <div>
                            <img src={ApkMob} alt="" className="w-[180px] h-[65px] object-cover scale-110"/>
                        </div>
                    </div>
                </div>
                <div className={'lg:w-1/2 lg:block hidden'}>
                    <img src={Phone} alt="" className="max-w-full object-contain"/>
                </div>
                <div className={'lg:hidden'}>
                    <img src={Phone} alt="" width={400} height={400}/>
                </div>
            </div>
        </div>

    )
}

export default WelcomeBlock
