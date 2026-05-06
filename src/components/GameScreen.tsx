import { useState, useCallback } from 'react'
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
  const [isLocked, setIsLocked] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [showInfo, setShowInfo] = useState(false)

  const handleTap = useCallback((item: SushiItem) => {
    if (item.isSelected || isLocked) return

    setIsLocked(true)
    onSelectSushi(item.id)

    if (item.hasWasabi) {
      setTimeout(() => onWasabi(), 350)
    } else {
      setShowSafe(true)
      setTimeout(() => {
        setShowSafe(false)
        setIsLocked(false)
      }, 1000)
    }
  }, [isLocked, onSelectSushi, onWasabi])

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
        <h2
          className="text-green-900 text-3xl font-bold"
          style={{ fontFamily: "'Noto Serif JP', serif" }}
        >
          ロシアン寿司
        </h2>
      </div>

      <div className="flex-1 flex items-center justify-center px-4 pb-8">
        <div
          className="grid grid-cols-5 gap-2 w-full rounded-2xl p-3"
          style={{
            background: `
              repeating-linear-gradient(
                92deg,
                transparent,
                transparent 3px,
                rgba(0,0,0,0.04) 3px,
                rgba(0,0,0,0.04) 6px
              ),
              linear-gradient(
                178deg,
                #E8C99A 0%,
                #D4A870 20%,
                #E2C088 35%,
                #C49660 55%,
                #DDB87A 75%,
                #C8A068 100%
              )
            `,
            border: '2px solid #A07040',
            boxShadow: '0 6px 16px rgba(100, 60, 10, 0.35), inset 0 1px 0 rgba(255, 230, 170, 0.5), inset 0 -2px 0 rgba(100, 60, 10, 0.2)',
          }}
        >
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
