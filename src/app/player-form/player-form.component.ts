import { Component, OnInit } from '@angular/core';
import { Player } from '../models/player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent implements OnInit {
  player: Player = new Player(); // Initialize a new Player object
  isEdit: boolean = false;

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    // Retrieve the player to edit from the PlayerService if in edit mode
    // Example: If you have a player ID to edit, fetch it and set this.isEdit to true
    // this.player = this.playerService.getPlayerById(playerId);
    // this.isEdit = true;
  }
  submitPlayer() {
    if (this.isEdit) {
      // Call the PlayerService updatePlayer() method to update the player
      this.playerService.updatePlayer(this.player._id, this.player).subscribe(
        updatedPlayer => {
          // Handle success response
          console.log('Player updated:', updatedPlayer);
        },
        error => {
          // Handle error response
          console.error('Failed to update player:', error);
        }
      );
    } else {
      // Call the PlayerService addPlayer() method to add a new player
      this.playerService.addPlayer(this.player).subscribe(
        addedPlayer => {
          // Handle success response
          console.log('Player added:', addedPlayer);
        },
        error => {
          // Handle error response
          console.error('Failed to add player:', error);
        }
      );
    }
  
    // Reset the form after submission
    this.player = new Player();
  }
  
  cancelEdit() {
    // Reset the form and edit mode
    this.player = new Player();
    this.isEdit = false;
  }
}