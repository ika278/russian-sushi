import { useState } from 'react'
import { motion } from 'framer-motion'
import sushiAkami from '../assets/sushi_akami.png'
import wasabi from '../assets/wasabi.png'
import InfoModal from './InfoModal'

interface Props {
  onStart: () => void
}

export default function StartScreen({ onStart }: Props) {
  const [showInfo, setShowInfo] = useState(false)

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-8 bg-amber-50">
      <button
        onClick={() => setShowInfo(true)}
        className="absolute top-6 right-6 w-7 h-7 rounded-full border-2 border-green-800 text-green-800 flex items-center justify-center font-black text-sm"
        aria-label="遊び方"
      >
        i
      </button>

      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative mb-6 w-40 mx-auto select-none">
          <motion.img
            src={sushiAkami}
            alt="まぐろ"
            draggable={false}
            animate={{ rotate: [0, -8, 8, -4, 4, 0] }}
            transition={{ duration: 1.2, delay: 0.6 }}
          />
          <img
            src={wasabi}
            alt="ワサビ"
            draggable={false}
            className="absolute -bottom-2 -right-4 w-12 select-none"
          />
        </div>
        <h1 className="text-5xl font-black text-green-900 mb-3 tracking-wide font-noto-serif">
          ロシアン寿司
        </h1>
        <p className="text-green-700 text-base">
          10貫中ワサビ入りが1つ
        </p>
      </motion.div>

      <motion.div
        className="mt-16 w-full max-w-xs"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, type: 'spring', stiffness: 180 }}
      >
        <motion.button
          onClick={onStart}
          className="w-full bg-green-800 text-white font-bold text-xl py-5 rounded-2xl shadow-lg font-noto-serif"
          whileTap={{ scale: 0.95 }}
        >
          スタート
        </motion.button>
      </motion.div>

      <motion.p
        className="mt-8 text-green-600 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        スマホを回して順番に選ぼう
      </motion.p>

      <InfoModal isOpen={showInfo} onClose={() => setShowInfo(false)} />
    </div>
  )
}
