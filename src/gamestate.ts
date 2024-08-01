import { Player } from "./player";
import logger from "../logger";

export class GameState {
    players: Player[];
    currentPlayerIndex: number;
    currentPlayer: Player | undefined;
    // Add other necessary properties
  
    constructor() {
      this.players = [];
      this.currentPlayerIndex = 0;
      this.currentPlayer;
    }
  
    addPlayer(player: Player) {
      this.players.push(player);
      logger.debug(`Added player ${player.name} with id ${player.id}`);
    }

    getCurrentPlayer() {
      return this.players[this.currentPlayerIndex];
      logger.debug(`Current player is ${this.getCurrentPlayer().name}`);
    }

    startTurn() {
      this.currentPlayer = this.getCurrentPlayer();
      this.currentPlayer.round_score = 0;
      logger.info(`Starting turn for ${this.currentPlayer.name}`);
      this.rollDice(6);
    }

    rollDice(availableDice: number) {
      let rolls = [];
      for (let i = 0; i < availableDice; i++) {
        rolls.push(Math.floor(Math.random() * 6) + 1);
      }
      logger.info(`${this.currentPlayer!.name} rolled ${rolls.join(", ")}`);
      this.checkForHits(rolls);
    }

    checkForHits(rolls: number[]) {
      logger.debug(`Checking for hits in ${rolls.join(", ")}`);
    }

    addPlayers() {
      this.addPlayer(new Player("1", "Mor"));
      this.addPlayer(new Player("2", "Far"));
      this.addPlayer(new Player("3", "Line"));
      this.addPlayer(new Player("4", "Jonas"));
    }

    startGame() {
      this.addPlayers();
      logger.info("Game started");
      this.startTurn();
    }
  
    // Implement other methods like rollDice, calculateScore, nextTurn, etc.
}