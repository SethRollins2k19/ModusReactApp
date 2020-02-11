
import img1 from './assets/rooms/room-1.png'
import img2 from './assets/rooms/room-2.png'
import img3 from './assets/rooms/room-3.png'
import img4 from './assets/rooms/room-4.png'
import img5 from './assets/rooms/room-5.png'
import bedroom from './assets/rooms/room-1-bedroom.png'
import livingRoom from './assets/rooms/room-1-livingRoom.png'

import comfort from './assets/rooms/comfort.svg'
import convenience from './assets/rooms/convenience.svg'
import cosiness from './assets/rooms/cosiness.svg'


export  const ROOMS = [
    {
        slug: 'lux-room',
        img: [img1,bedroom,livingRoom],
        hotelRoom: Math.floor(Math.random() * 999 + 1),
        isLux: false,
        costPerDay: Math.floor(Math.random() * 8801 + 200),
        rating: Math.floor(Math.random() * 5 + 1),
        reviews: {
            excellent: Math.floor(Math.random() * 100 + 1),
            nice: Math.floor(Math.random() * 100 + 1),
            good: Math.floor(Math.random() * 100 + 1),
            bad: Math.floor(Math.random() * 100 + 1)
        },
        details: ['comfort','convenience','cosiness']
    },
    {
        slug: 'simple-room',
        img: [img4,bedroom,livingRoom],
        hotelRoom: Math.floor(Math.random() * 999 + 1),
        isLux: true,
        costPerDay: Math.floor(Math.random() * 8801 + 200),
        rating: Math.floor(Math.random() * 5 + 1),
        reviews: {
            excellent: Math.floor(Math.random() * 100 + 1),
            nice: Math.floor(Math.random() * 100 + 1),
            good: Math.floor(Math.random() * 100 + 1),
            bad: Math.floor(Math.random() * 100 + 1)
        },
        details: ['comfort','cosiness']
    },
    {
        slug: 'soft-room',
        img: [img2,bedroom,livingRoom],
        hotelRoom: Math.floor(Math.random() * 999 + 1),
        isLux: false,
        costPerDay: Math.floor(Math.random() * 8801 + 200),
        rating: Math.floor(Math.random() * 5 + 1),
        reviews: {
            excellent: Math.floor(Math.random() * 100 + 1),
            nice: Math.floor(Math.random() * 100 + 1),
            good: Math.floor(Math.random() * 100 + 1),
            bad: Math.floor(Math.random() * 100 + 1)
        },
        details: ['comfort','convenience','cosiness']
    },
    {
        slug: 'hard-room',
        img: [img3,bedroom,livingRoom],
        hotelRoom: Math.floor(Math.random() * 999 + 1),
        isLux: false,
        costPerDay: Math.floor(Math.random() * 8801 + 200),
        rating: Math.floor(Math.random() * 5 + 1),
        reviews: {
            excellent: Math.floor(Math.random() * 100 + 1),
            nice: Math.floor(Math.random() * 100 + 1),
            good: Math.floor(Math.random() * 100 + 1),
            bad: Math.floor(Math.random() * 100 + 1)
        },
        details: ['comfort','convenience','cosiness']
    },
    {
        slug: 'luxary-room',
        img: [img5,bedroom,livingRoom],
        hotelRoom: Math.floor(Math.random() * 999 + 1),
        isLux: true,
        costPerDay: Math.floor(Math.random() * 8801 + 200),
        rating: Math.floor(Math.random() * 5 + 1),
        reviews: {
            excellent: Math.floor(Math.random() * 100 + 1),
            nice: Math.floor(Math.random() * 100 + 1),
            good: Math.floor(Math.random() * 100 + 1),
            bad: Math.floor(Math.random() * 100 + 1)
        },
        details: ['comfort','convenience','cosiness']
    },
    {
        slug: 'exclusive-room',
        img: [null,null,null],
        hotelRoom: Math.floor(Math.random() * 999 + 1),
        isLux: false,
        costPerDay: Math.floor(Math.random() * 8801 + 200),
        rating: Math.floor(Math.random() * 5 + 1),
        reviews: {
            excellent: Math.floor(Math.random() * 100 + 1),
            nice: Math.floor(Math.random() * 100 + 1),
            good: Math.floor(Math.random() * 100 + 1),
            bad: Math.floor(Math.random() * 100 + 1)
        },
        details: ['comfort','convenience','cosiness']
    },
    {
        slug: 'allIn-room',
        img: [null,null,null],
        hotelRoom: Math.floor(Math.random() * 999 + 1),
        isLux: true,
        costPerDay: Math.floor(Math.random() * 8801 + 200),
        rating: Math.floor(Math.random() * 5 + 1),
        reviews: {
            excellent: Math.floor(Math.random() * 100 + 1),
            nice: Math.floor(Math.random() * 100 + 1),
            good: Math.floor(Math.random() * 100 + 1),
            bad: Math.floor(Math.random() * 100 + 1)
        },
        details: ['comfort','convenience','cosiness']
    },
]

export const DETAILS = {
    comfort: {
        img: comfort,
        title: "Comfort",
        subTitle: "This is room has noise canceling windows"
    },
    convenience: {
        img: convenience,
        title: "Convenience",
        subTitle: "Windows in the each room"
    },
    cosiness: {
        img: cosiness,
        title: "Cosiness",
        subTitle: "Here's fireplace"
    }
}