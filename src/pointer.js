import { animated, useSpring } from '@react-spring/web'
import React from 'react'

export default function Pointer(props) {
  const { pointer, sizes } = props
  const setPointer = () => {
    switch (pointer && pointer.style ? pointer.style : 'default') {
      case 'square':
        return {
          width: pointer && pointer.size ? sizes[pointer.size] : 50,
          height: pointer && pointer.size ? sizes[pointer.size] : 50,
          background: pointer && pointer.bgColor ? pointer.bgColor : 'green'
        }
      default:
        return {
          width: pointer && pointer.size ? sizes[pointer.size] : 50,
          height: pointer && pointer.size ? sizes[pointer.size] : 50,
          borderRadius: pointer && pointer.size ? sizes[pointer.size] : 50,
          background: pointer && pointer.bgColor ? pointer.bgColor : 'green'
        }
    }
  }
  const cursorAnime = useSpring({
    from: { opacity: 0.5, scale: 0.2 },
    to: [
      { opacity: 0, scale: 0.4 },
      { opacity: 0.5, scale: 0.6 },
      { opacity: 0, scale: 0.8 },
      { opacity: 0.5, scale: 1 }
    ],
    loop: true
  })
  return (
    <div>
      <animated.div
        style={{
          ...setPointer(),
          ...cursorAnime
        }}
      />
    </div>
  )
}
