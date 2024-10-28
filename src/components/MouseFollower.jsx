import { useEffect, useState } from 'react'

const MouseFollower = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const updateCursorPosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY })
        }

        window.addEventListener('mousemove', updateCursorPosition)

        return () => {
            window.removeEventListener('mousemove', updateCursorPosition)
        }
    }, [])

    return (
        <div
            className="cursor-dot"
            style={{
                transform: `translate(${position.x - 15}px, ${position.y - 15}px)`
            }}
        />
    )
}

export default MouseFollower
