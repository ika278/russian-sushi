export type GamePhase = 'start' | 'playing' | 'result'

export interface SushiItem {
  id: number
  hasWasabi: boolean
  isSelected: boolean
}
