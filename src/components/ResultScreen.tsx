import { motion } from 'framer-motion'
import wasabi from '../assets/wasabi.png'

interface Props {
  onRestart: () => void
}

export default function ResultScreen({ onRestart }: Props) {
  return (
    <div className="min-h-screen bg-red-800 flex flex-col items-center justify-center gap-12 p-8">
      <motion.div
        className="text-center"
        initial={{ scale: 0.3, opacity: 0, rotate: -6 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 220, damping: 14 }}
      >
        <p
          className="text-white font-black select-none leading-none font-noto-serif"
          style={{
            fontSize: 'clamp(6rem, 28vw, 10rem)',
            textShadow: '0 4px 24px rgba(0,0,0,0.4)',
          }}
        >
          OUT!
        </p>
        <motion.div
          className="flex items-center justify-center gap-2 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-red-200 text-lg">ワサビ入りだった！</p>
          <img src={wasabi} alt="ワサビ" draggable={false} className="w-10 select-none" />
        </motion.div>
      </motion.div>

      <motion.button
        onClick={onRestart}
        className="bg-white text-red-800 font-bold text-lg px-12 py-4 rounded-2xl shadow-xl font-noto-serif"
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        whileTap={{ scale: 0.95 }}
      >
        もう一度遊ぶ
      </motion.button>
    </div>
  )
}
