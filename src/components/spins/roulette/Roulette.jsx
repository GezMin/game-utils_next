'use client'
import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import styles from './roulette.module.scss'

const arrImg = [{ id: 0, img: '/img/roulette/pointer.png', alt: 'pointer' }]

const Roulette = ({ imgSpin }) => {
    const [selectedItem, setSelectedItem] = useState(null)
    const [isSpinning, setIsSpinning] = useState(false)
    const [items, setItems] = useState([])

    const cells = 41
    const listRef = useRef(null)
    const isSpinningRef = useRef(false)

    useEffect(() => {
        setSelectedItem(null)
        generateItems()
    }, [imgSpin])

    function getItem() {
        let item = null

        while (!item) {
            const chance = Math.floor(Math.random() * 100)

            imgSpin.forEach(elm => {
                if (chance < elm.chance && !item) item = elm
            })
        }

        return item
    }

    function generateItems() {
        const newItems = []
        for (let i = 0; i < cells; i++) {
            const item = getItem()
            newItems.push(item)
        }
        setItems(newItems)
    }

    function start() {
        if (isSpinning) return

        setIsSpinning(true)
        isSpinningRef.current = true

        const list = listRef.current

        if (!list) {
            setIsSpinning(false)
            isSpinningRef.current = false
            return
        }

        // Reset list styles
        list.style.left = '0'
        list.style.transform = 'translate3d(0, 0, 0)'

        setTimeout(() => {
            if (!isSpinningRef.current) return

            list.style.left = '50%'
            list.style.transform = 'translate3d(-50%, 0, 0)'
        }, 0)

        const items = list.querySelectorAll('li')
        const item = items[15]

        const handleTransitionEnd = () => {
            item.classList.add(styles.active)
            const data = JSON.parse(item.getAttribute('data-item'))

            console.log(data)
            setSelectedItem(data.alt)

            item.removeEventListener('transitionend', handleTransitionEnd)
        }

        item.addEventListener('transitionend', handleTransitionEnd)

        // Reset spinning state and remove "active" class
        setTimeout(() => {
            setIsSpinning(false)
            isSpinningRef.current = false
            item.classList.remove(styles.active)
        }, 5000) // Adjust the timing based on your animation duration
    }

    return (
        <>
            <div className={styles.result}>Selected Item: {selectedItem}</div>
            <div className={styles.app}>
                <Image src={arrImg[0].img} alt={arrImg[0].alt} width={50} height={50} className={styles.pointer} />

                <div className={styles.scope}>
                    <ul className={styles.list} ref={listRef}>
                        {items.map((item, i) => (
                            <li key={i} className={styles.list__item} data-item={JSON.stringify(item)}>
                                <Image
                                    src={item.img}
                                    alt={item.alt}
                                    width={200}
                                    height={200}
                                    className={item.classname}
                                />
                            </li>
                        ))}
                    </ul>
                </div>

                <button className={styles.start} onClick={start} disabled={isSpinning}>
                    {isSpinning ? 'Spinning...' : 'Крутить'}
                </button>
            </div>
        </>
    )
}

export default Roulette
