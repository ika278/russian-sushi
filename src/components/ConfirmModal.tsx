import { motion, AnimatePresence } from 'framer-motion'

interface Props {
  isOpen: boolean
  onConfirm: () => void
  onCancel: () => void
}

export default function ConfirmModal({ isOpen, onConfirm, onCancel }: Props) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onCancel}
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center px-6">
            <motion.div
              className="bg-amber-50 rounded-3xl p-8 shadow-2xl w-full"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            >
              <p
                className="text-xl font-black text-green-900 text-center mb-2"
                style={{ fontFamily: "'Noto Serif JP', serif" }}
              >
                ホームに戻りますか？
              </p>
              <p className="text-green-700 text-sm text-center mb-8">
                ゲームの進行状況はリセットされます
              </p>

              <div className="flex gap-3">
                <button
                  onClick={onCancel}
                  className="flex-1 py-3 rounded-2xl border-2 border-green-800 text-green-800 font-bold"
                  style={{ fontFamily: "'Noto Serif JP', serif" }}
                >
                  キャンセル
                </button>
                <button
                  onClick={onConfirm}
                  className="flex-1 py-3 rounded-2xl bg-green-800 text-white font-bold"
                  style={{ fontFamily: "'Noto Serif JP', serif" }}
                >
                  戻る
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
