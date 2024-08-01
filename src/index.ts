import { serve } from "bun";
import { WebSocketHandler } from "./websocket";
import { GameState } from "./gamestate"; 
import { Player } from "./player";
import logger from "../logger";

const server = serve({
  port: 3000,
  fetch(req, server) {
    if (server.upgrade(req)) {
      return; // Do not return a Response
    }
    return new Response("Hello world");
  },
  websocket: WebSocketHandler,
});

logger.info(`Server started on port ${server.port} : http://localhost:${server.port}`);

let gameState = new GameState();

gameState.startGame();
