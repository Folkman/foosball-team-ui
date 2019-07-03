import { Component, OnInit, Input } from '@angular/core';

import { Player } from '../model/player.model'
import { Position } from '../model/position.model'

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  @Input() player: Player
  @Input() showPosition: boolean

  constructor() {
  }

  ngOnInit() {
  }

  get position(): string {
    return Position[this.player.position]
  }

}
