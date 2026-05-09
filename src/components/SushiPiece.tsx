import { motion } from 'framer-motion'
import sushiAkami from '../assets/sushi_akami.png'
import type { SushiItem } from '../types/game'

interface Props {
  item: SushiItem
  onTap: () => void
}

export default function SushiPiece({ item, onTap }: Props) {
  if (item.isSelected) {
    return <div className="aspect-square w-full" />
  }

  return (
    <motion.button
      onClick={onTap}
      className="aspect-square flex items-center justify-center w-full p-1 cursor-pointer bg-transparent"
      whileTap={{ scale: 0.85 }}
      transition={{ duration: 0.2 }}
    >
      <img src={sushiAkami} alt="まぐろ" className="w-full h-full object-contain" draggable={false} />
    </motion.button>
  )
}
