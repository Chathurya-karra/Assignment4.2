import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { Player } from '../models/player';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  players: Player[] = [];

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.fetchPlayers();
  }

  fetchPlayers(): void {
    this.playerService.getAllPlayers().subscribe(
      (players: Player[]) => {
        this.players = players;
      },
      (error) => {
        console.log('Failed to fetch players:', error);
      }
    );
  }

  deletePlayer(player: Player): void {
    this.playerService.deletePlayer(player._id).subscribe(
      () => {
        this.fetchPlayers();
      },
      (error) => {
        console.log('Failed to delete player:', error);
      }
    );
  }
  editPlayer(player: Player): void {
    // Add your implementation here
  }
  
}
