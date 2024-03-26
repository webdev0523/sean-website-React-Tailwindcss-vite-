import React from 'react'

import img1 from '../../../assets/giveaway/roadmap/1.png'
import img2 from '../../../assets/giveaway/roadmap/2.png'
import img3 from '../../../assets/giveaway/roadmap/3.png'
import img4 from '../../../assets/giveaway/roadmap/4.png'
import img5 from '../../../assets/giveaway/roadmap/5.png'
import img6 from '../../../assets/giveaway/roadmap/6.png'

//  - 50% Off One-Off Packages Will Lanuch On This Date Straight Away
const points = [
    {
        img: img1,
        title: "10th March",
        content: "Cash",
        color: ""
    },
    {
        img: img2,
        title: "17th Of March",
        content: "Bali Campaign Launch",
        color: ""
    },
    {
        img: img3,
        title: "24th March",
        content: "2024 Tesla Model Y, Isuzu D-Max X-Terrain or $50,000",
        color: ""
    },
    {
        img: img4,
        title: "31st of March",
        content: "$500 Flight Centre Voucher (Members only)",
        color: "text-[#FF4C00]"
    },
    {
        img: img5,
        title: "7th April",
        content: "$1500 Cash (Members only)",
        color: "text-[#FF4C00]"
    },
    {
        img: img6,
        title: "14th April",
        content: "Bali Package Draw",
        color: ""
    },
    {
        img: img5,
        title: "21st April",
        content: "$1000 Cash (Members only)",
        color: "text-[#FF4C00]"
    },
    {
        img: img6,
        title: "28st April",
        content: "5-10 winners selected via Facebook Live (Members only)",
        color: "text-[#FF4C00]"
    },
    {
        img: img5,
        title: "5th May",
        content: "$1500 Cash (Members only)",
        color: "text-[#FF4C00]"
    },
    {
        img: img4,
        title: "12th May",
        content: "Go-karting event giveaway (Members only)",
        color: "text-[#FF4C00]"
    },
    {
        img: img5,
        title: "19th May",
        content: "$1000 Cash (Members only)",
        color: "text-[#FF4C00]"
    },
    {
        img: img4,
        title: "May 26th",
        content: "2024 Tesla Model Y, Isuzu D-Max X-Terrain or $50,000 Winner Drawn via Facebook Live",
        color: ""
    },
]

export default function MobileResponsive() {
    return (
        <div>

            {
                points.map((point, i) => (
                    <div className='flex items-center mt-12'>
                        <img src={point.img} alt='img' className='w-[85px] hover:scale-110 duration-1000' />
                        <div className='p-3'>
                            <p className={' font-bold text-base leading-5 md:text-xl ' + point.color}>{point.title}</p>
                            <p className=' font-normal text-xs leading-3 md:text-base'>{point.content}</p>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}