import { Color } from './color.model'
import { Player } from './player.model'

export interface Team {
  color: Color
  players: Player[]
}
