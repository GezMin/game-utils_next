'use client'
import Image from 'next/image'
import styles from './roulette.module.scss'
import { useState, useEffect } from 'react'

const arrImg = [{ id: 0, img: '/img/pointer.png', alt: 'pointer' }]

const Roulette = ({ numberSpin }) => {
    const [selectedItem, setSelectedItem] = useState(null)
    const [isSpinning, setIsSpinning] = useState(false)

    useEffect(() => {
        setSelectedItem(null)
    }, [numberSpin])

    const start = () => {
        setIsSpinning(true)

        const scopeHidden = document.querySelector(`.${styles.scopeHidden} > ul`)
        const listItemWidth = scopeHidden.children[0].offsetWidth
        const numVisibleItems = Math.floor(scopeHidden.offsetWidth / listItemWidth)

        const targetIndex = Math.floor(Math.random() * numberSpin.length)

        const move = -targetIndex * listItemWidth * numVisibleItems

        scopeHidden.style.transition = 'none' // Удаляем анимацию для начала плавной прокрутки
        scopeHidden.style.left = `${move}px`

        setTimeout(() => {
            scopeHidden.style.transition = '3s ease' // Восстанавливаем анимацию
            scopeHidden.style.left = `-${targetIndex * listItemWidth}px`
        }, 10) // Небольшая задержка перед восстановлением анимации

        setTimeout(() => {
            setIsSpinning(false)
            setSelectedItem(numberSpin[targetIndex])
        }, 3000) // Задержка в 3 секунды перед показом результата
    }

    return (
        <div className={styles.app}>
            {selectedItem && <div className={styles.result}>Selected Item: {selectedItem}</div>}

            <Image src={arrImg[0].img} alt={arrImg[0].alt} width={50} height={50} />

            <div className={styles.scopeHidden}>
                <ul>
                    {isSpinning ? (
                        <li className={styles.spinPlaceholder}>
                            <span>Spinning...</span>
                        </li>
                    ) : (
                        numberSpin.map((item, i) => <li key={i}>{item}</li>)
                    )}
                </ul>
            </div>

            <button className={styles.btn} onClick={start} disabled={isSpinning}>
                {isSpinning ? 'Spinning...' : 'Крутить'}
            </button>
        </div>
    )
}

export default Roulette
