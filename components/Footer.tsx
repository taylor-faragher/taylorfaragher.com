/* eslint-disable @next/next/no-img-element */
import { FaLocationArrow } from 'react-icons/fa6';
import MagicButton from './ui/MagicButton';
import {socialMedia} from '@/data/index'

const Footer = () => {
    return (
        <footer className="w-full pb-10 pt-20" id="contact">
            
            <div className="w-full h-full absolute bg-[url('/footer-grid.svg')] max-h-[24rem] opacity-100" />
            
            <div className="flex flex-col items-center">
                <h1 className="heading lg:max-w-[45vw]">Want to contact me? Click below!</h1>
                <p className="text-white-100 md:mt-10 my-5 text-center">Reach out to me today and let&apos;s discuss achieving your goals</p>
                <a href="mailto:faragher6@gmail.com">
                    <MagicButton
                        title="Let's get in touch"
                        icon={<FaLocationArrow />}
                        position='right'
                    />
                </a>
            </div>
            <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
                <p className='md:text-base text-sm md:font-normal font-light'>Copyright © 2025 Taylor Faragher</p>
                <div className="flex items-center md:gap-2 gap-6 md:mr-[17%] mr-0 mt-5 md:mt-0">
                    {socialMedia.map((profile, index) => (
                        <a href={profile.link} key={index}>
                            <div  className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border-black-300'>
                                <img src={profile.img} alt={profile.name} width={20} height={20} />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer;