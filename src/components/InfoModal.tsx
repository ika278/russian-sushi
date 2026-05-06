import { motion, AnimatePresence } from 'framer-motion'

interface Props {
  isOpen: boolean
  onClose: () => void
}

export default function InfoModal({ isOpen, onClose }: Props) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center px-6">
          <motion.div
            className="bg-amber-50 rounded-3xl p-8 shadow-2xl w-full"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
          >
            <h2
              className="text-2xl font-black text-green-900 mb-6 text-center"
              style={{ fontFamily: "'Noto Serif JP', serif" }}
            >
              遊び方
            </h2>

            <ol className="space-y-4 text-green-900 text-sm leading-relaxed">
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-green-800 text-white flex items-center justify-center font-bold shrink-0 text-xs">1</span>
                <span>スタートを押してゲームを開始する</span>
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-green-800 text-white flex items-center justify-center font-bold shrink-0 text-xs">2</span>
                <span>スマホを順番に回して、1人ずつ寿司を1貫タップする</span>
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-green-800 text-white flex items-center justify-center font-bold shrink-0 text-xs">3</span>
                <span>「SAFE」が出たら次の人へスマホを渡す</span>
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-green-800 text-white flex items-center justify-center font-bold shrink-0 text-xs">4</span>
                <span>「OUT!」が出たらその人の負け！</span>
              </li>
            </ol>

            <p
              className="mt-6 text-center text-green-900 text-lg font-black bg-amber-200 rounded-2xl py-3 px-4"
              style={{ fontFamily: "'Noto Serif JP', serif" }}
            >
              10貫中1つにワサビ入りが隠れています
            </p>

            <button
              onClick={onClose}
              className="mt-8 w-full bg-green-800 text-white font-bold py-3 rounded-2xl"
              style={{ fontFamily: "'Noto Serif JP', serif" }}
            >
              とじる
            </button>
          </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
