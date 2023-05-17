import Roulette from '@/components/spins/roulette/Roulette'

export default function Home() {
    const numberSpin = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const imgSpin = [
        { name: 'iPhone', img: '/img/iPhone.png', chance: 10, alt: 'iPhone' },
        { name: 'Keyboard', img: '/img/keyboard.png', chance: 25, alt: 'keyboard' },
        { name: 'Headphones', img: '/img/headphones.png', chance: 40, alt: 'headphones' },
    ]
    return (
        <main className='flex min-h-screen flex-col items-center justify-center p-24'>
            <Roulette imgSpin={imgSpin} />
        </main>
    )
}
