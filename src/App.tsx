import { useState, useCallback } from 'react'
import StartScreen from './components/StartScreen'
import GameScreen from './components/GameScreen'
import ResultScreen from './components/ResultScreen'
import type { GamePhase, SushiItem } from './types/game'

const SUSHI_COUNT = 10

function createSushiItems(): SushiItem[] {
  const wasabiIndex = Math.floor(Math.random() * SUSHI_COUNT)
  return Array.from({ length: SUSHI_COUNT }, (_, i) => ({
    id: i,
    hasWasabi: i === wasabiIndex,
    isSelected: false,
  }))
}

export default function App() {
  const [phase, setPhase] = useState<GamePhase>('start')
  const [sushiItems, setSushiItems] = useState<SushiItem[]>(() => createSushiItems())

  const handleStart = useCallback(() => {
    setSushiItems(createSushiItems())
    setPhase('playing')
  }, [])

  const handleSelectSushi = useCallback((id: number) => {
    setSushiItems(prev =>
      prev.map(item => item.id === id ? { ...item, isSelected: true } : item)
    )
  }, [])

  const handleWasabi = useCallback(() => {
    setPhase('result')
  }, [])

  const handleRestart = useCallback(() => {
    setSushiItems(createSushiItems())
    setPhase('start')
  }, [])

  return (
    <div className="min-h-screen bg-amber-50">
      {phase === 'start' && <StartScreen onStart={handleStart} />}
      {phase === 'playing' && (
        <GameScreen
          sushiItems={sushiItems}
          onSelectSushi={handleSelectSushi}
          onWasabi={handleWasabi}
          onHome={handleRestart}
        />
      )}
      {phase === 'result' && <ResultScreen onRestart={handleRestart} />}
    </div>
  )
}
