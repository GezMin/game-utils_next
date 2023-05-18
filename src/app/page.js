import Roulette from '@/components/spins/roulette/Roulette'

export default function Home() {
    const imgSpin = [
        { name: 'model_0001', img: '/img/roulette/game_0001.jpg', chance: 1, alt: '0001', classname: 'legendary' },
        { name: 'model_0002', img: '/img/roulette/game_0002.jpg', chance: 6, alt: '0002', classname: 'orange' },
        { name: 'model_0003', img: '/img/roulette/game_0003.jpg', chance: 7, alt: '0003', classname: 'orange' },
        { name: 'model_0004', img: '/img/roulette/game_0004.jpg', chance: 8, alt: '0004', classname: 'purple' },
        { name: 'model_0005', img: '/img/roulette/game_0005.jpg', chance: 9, alt: '0005', classname: 'purple' },
        { name: 'model_0006', img: '/img/roulette/game_0006.jpg', chance: 10, alt: '0006', classname: 'blue' },
        { name: 'model_0007', img: '/img/roulette/game_0007.jpg', chance: 11, alt: '0007', classname: 'blue' },
        { name: 'model_0007', img: '/img/roulette/game_0007.jpg', chance: 12, alt: '0007', classname: 'green' },
        { name: 'model_0009', img: '/img/roulette/game_0009.jpg', chance: 13, alt: '0009', classname: 'green' },
        { name: 'model_0010', img: '/img/roulette/game_0010.jpg', chance: 14, alt: '0010', classname: 'green' },
        { name: 'model_0011', img: '/img/roulette/game_0011.jpg', chance: 15, alt: '0011', classname: 'green' },
        { name: 'model_0012', img: '/img/roulette/game_0012.jpg', chance: 16, alt: '0012', classname: 'gray' },
        { name: 'model_0013', img: '/img/roulette/game_0013.jpg', chance: 17, alt: '0013', classname: 'gray' },
        { name: 'model_0014', img: '/img/roulette/game_0014.jpg', chance: 18, alt: '0014', classname: 'gray' },
        { name: 'model_0015', img: '/img/roulette/game_0015.jpg', chance: 19, alt: '0015', classname: 'gray' },
        { name: 'model_0016', img: '/img/roulette/game_0016.jpg', chance: 20, alt: '0016', classname: 'gray' },
    ]
    return (
        <main className='flex min-h-screen flex-col items-center justify-center p-24'>
            <Roulette imgSpin={imgSpin} />
        </main>
    )
}
