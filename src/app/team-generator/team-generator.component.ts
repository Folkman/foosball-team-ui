import { Component, OnInit } from '@angular/core';

import { Position } from '../model/position.model'
import { Color } from '../model/color.model'
import { Player } from '../model/player.model'
import { Team } from '../model/team.model'

@Component({
  selector: 'app-team-generator',
  templateUrl: './team-generator.component.html',
  styleUrls: ['./team-generator.component.scss']
})
export class TeamGeneratorComponent implements OnInit {
  playerCount: number
  players = [new Player, new Player, new Player, new Player]
  generating = true
  private positions = [Position.Offense, Position.Defense]

  constructor() {
  }

  ngOnInit() {
  }

  generate(): void {
    this.generating = true
    let positions = this.shuffledPositions.slice()
    this.shuffledColors.forEach((color, index) => {
      this.players[index].color = color
      this.players[index].position = positions[color].splice(0, 1)[0]
    })
    this.generating = false
  }

  get invalid(): boolean {
    let invalidPlayers = this.players.slice(0, this.playerCount)
                                     .filter(player => !player.name || !player.name.trim())
    return !!invalidPlayers.length
  }

  get teams(): Team[] {
    let teams = []
    this.colorNames.forEach(color => {
      teams.push({
        color: color,
        players: this.players.filter(player => player.color === Color[color])
                             .slice(0, this.playersPerTeam)
      })
    })
    return teams
  }

  private get colorNames(): string[] {
    return Object.values(Color).slice(0, 2)
  }

  private get playersPerTeam(): number {
    return this.playerCount / 2
  }

  private get colors(): Color[] {
    let colors = []
    for (let i = 0; i < this.playersPerTeam; i++) {
      colors.push(Color.Black)
      colors.push(Color.Yellow)
    }
    return colors
  }

  private get shuffledColors(): Color[] {
    return this.colors.sort(() => Math.random() - 0.5)
  }

  private get shuffledPositions(): Position[][] {
    return [
      this.positions.slice().sort(() => Math.random() - 0.5),
      this.positions.slice().sort(() => Math.random() - 0.5)
    ]
  }

}
