import { useMemo } from 'react'
import { motion } from 'framer-motion'

const MESSAGES = [
  'セーフ！',
  'その調子！',
  'よかった〜',
  'ギリギリか？',
  'まだ大丈夫！',
  'ほっと一息',
  'ナイス回避！',
  '次の人へ！',
]

function randomMessage() {
  return MESSAGES[Math.floor(Math.random() * MESSAGES.length)]
}

export default function SafeOverlay() {
  const message = useMemo(() => randomMessage(), [])

  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center z-50 gap-4"
      style={{ backgroundColor: 'rgba(20, 83, 45, 0.93)' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
    >
      <motion.p
        className="text-white font-black tracking-widest select-none font-noto-serif"
        style={{ fontSize: 'clamp(5rem, 22vw, 8rem)' }}
        initial={{ scale: 0.4, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 1.1, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 280, damping: 18 }}
      >
        SAFE
      </motion.p>
      <motion.p
        className="text-green-200 font-bold select-none font-noto-serif"
        style={{ fontSize: 'clamp(1.2rem, 5vw, 1.8rem)' }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
      >
        {message}
      </motion.p>
    </motion.div>
  )
}
