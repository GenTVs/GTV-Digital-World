import { setupInput, clearInput, getMovementDirection } from "./input.js";
import { state } from "./state.js";
import { player } from "../entities/player.js";
import { rooms } from "../rooms/index.js";
import { collidesWithObstacle } from "../systems/collision.js";
import { getNearbyInteractable } from "../systems/interaction.js";
import { drawGame } from "../systems/renderer.js";
import { transitionToRoom } from "../systems/transition.js";

export function startGame(ui) {
	const ctx = ui.canvas.getContext("2d");

	ctx.imageSmoothingEnabled = false;

	function getCurrentRoom() {
		return rooms[state.currentRoomId];
	}

	function canMove() {
		return !state.terminalOpen && !state.transitionActive;
	}

	function openTerminal() {
		state.terminalOpen = true;

		clearInput();

		ui.interactionPrompt.hidden = true;
		ui.terminalPanel.hidden = false;
	}

	function closeTerminal() {
		if (!state.terminalOpen) {
			return;
		}

		state.terminalOpen = false;
		ui.terminalPanel.hidden = true;
	}

	function handleInteraction() {
		const object = getNearbyInteractable(player, getCurrentRoom());

		if (!object) {
			return;
		}

		if (object.type === "terminal") {
			openTerminal();
		}

		if (object.type === "door") {
			transitionToRoom(object, ui);
		}
	}

	function updateInteractionPrompt() {
		const object = getNearbyInteractable(player, getCurrentRoom());

		if (state.terminalOpen || state.transitionActive || !object) {
			ui.interactionPrompt.hidden = true;
			return;
		}

		ui.interactionPrompt.textContent = `[E] ${object.label}`;
		ui.interactionPrompt.hidden = false;
	}

	function updatePlayer(deltaTime) {
		if (!canMove()) {
			return;
		}

		const movement = getMovementDirection();

		if (movement.x === 0 && movement.y === 0) {
			return;
		}

		const nextX = player.x + movement.x * player.speed * deltaTime;
		const nextY = player.y + movement.y * player.speed * deltaTime;
		const room = getCurrentRoom();

		if (!collidesWithObstacle(player, room, nextX, player.y)) {
			player.x = nextX;
		}

		if (!collidesWithObstacle(player, room, player.x, nextY)) {
			player.y = nextY;
		}
	}
	
	function update(deltaTime) {
		updatePlayer(deltaTime);
		updateInteractionPrompt();
	}

	function draw() {
		drawGame(ctx, ui.canvas, getCurrentRoom(), player);
	}

	let lastTime = performance.now();

	function gameLoop(currentTime) {
		const deltaTime = Math.min((currentTime - lastTime) / 1000, 0.1);

		lastTime = currentTime;

		update(deltaTime);
		draw();

		requestAnimationFrame(gameLoop);
	}

	setupInput(handleInteraction, closeTerminal, canMove);
	ui.closeTerminalButton.addEventListener("click", closeTerminal);

	requestAnimationFrame(gameLoop);

	console.log("GTV Digital World initialized.");
	console.log("Canvas ready:", ui.canvas.width, ui.canvas.height);
}