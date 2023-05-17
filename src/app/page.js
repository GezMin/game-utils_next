import Roulette from '@/components/spins/roulette/Roulette'

export default function Home() {
    const numberSpin = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
        <main className='flex min-h-screen flex-col items-center justify-center p-24'>
            <div>Spin Wheel</div>
            <Roulette numberSpin={numberSpin} />
        </main>
    )
}
