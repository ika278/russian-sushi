import { useState, useCallback, useRef } from 'react'
import { AnimatePresence } from 'framer-motion'
import SushiPiece from './SushiPiece'
import SafeOverlay from './SafeOverlay'
import ConfirmModal from './ConfirmModal'
import InfoModal from './InfoModal'
import type { SushiItem } from '../types/game'

interface Props {
  sushiItems: SushiItem[]
  onSelectSushi: (id: number) => void
  onWasabi: () => void
  onHome: () => void
}

export default function GameScreen({ sushiItems, onSelectSushi, onWasabi, onHome }: Props) {
  const [showSafe, setShowSafe] = useState(false)
  const isLockedRef = useRef(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [showInfo, setShowInfo] = useState(false)

  const handleTap = useCallback((item: SushiItem) => {
    if (item.isSelected || isLockedRef.current) return

    isLockedRef.current = true
    onSelectSushi(item.id)

    if (item.hasWasabi) {
      setTimeout(() => onWasabi(), 350)
    } else {
      setShowSafe(true)
      setTimeout(() => {
        setShowSafe(false)
        isLockedRef.current = false
      }, 1000)
    }
  }, [onSelectSushi, onWasabi])

  return (
    <div className="relative min-h-screen flex flex-col bg-amber-50">
      <div className="relative px-6 pt-8 pb-4 text-center">
        <button
          onClick={() => setShowConfirm(true)}
          className="absolute left-4 top-7 bg-green-800 text-white text-xs font-bold px-3 py-1.5 rounded-xl flex items-center gap-1"
        >
          <span>←</span>
          <span>ホーム</span>
        </button>
        <button
          onClick={() => setShowInfo(true)}
          className="absolute right-4 top-7 w-7 h-7 rounded-full border-2 border-green-800 text-green-800 flex items-center justify-center font-black text-sm"
          aria-label="遊び方"
        >
          i
        </button>
        <h2 className="text-green-900 text-3xl font-bold font-noto-serif">
          ロシアン寿司
        </h2>
      </div>

      <div className="flex-1 flex items-center justify-center px-4 pb-8">
        <div className="grid grid-cols-5 gap-2 w-full rounded-2xl p-3 sushi-board">
          {sushiItems.map(item => (
            <SushiPiece
              key={item.id}
              item={item}
              onTap={() => handleTap(item)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {showSafe && <SafeOverlay />}
      </AnimatePresence>

      <ConfirmModal
        isOpen={showConfirm}
        onConfirm={onHome}
        onCancel={() => setShowConfirm(false)}
      />
      <InfoModal isOpen={showInfo} onClose={() => setShowInfo(false)} />
    </div>
  )
}
