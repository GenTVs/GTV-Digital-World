import { state } from "../core/state.js";
import { clearInput } from "../core/input.js";
import { isRoomLoaded, loadRoom } from "../core/loader.js";
import { player } from "../entities/player.js";
import { rooms } from "../rooms/index.js";

function wait(milliseconds) {
	return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

async function fadeOut(overlay) {
	overlay.classList.add("visible");
	await wait(350);
}

async function fadeIn(overlay) {
	overlay.classList.remove("visible");
	await wait(350);
}

export async function transitionToRoom(door, ui) {
	if (state.transitionActive) {
		return;
	}

	state.transitionActive = true;

	clearInput();
	ui.interactionPrompt.hidden = true;

	await fadeOut(ui.fadeOverlay);

	if (!isRoomLoaded(door.targetRoom)) {
		const room = rooms[door.targetRoom];

		ui.loadingRoomName.textContent = room.name;
		ui.loadingProgress.style.width = "0%";
		ui.loadingPercentage.textContent = "0%";
		ui.loadingPanel.hidden = false;

		await loadRoom(door.targetRoom, (progress) => {
			ui.loadingProgress.style.width = `${progress}%`;
			ui.loadingPercentage.textContent = `${progress}%`;
		});

		ui.loadingPanel.hidden = true;
	}

	state.currentRoomId = door.targetRoom;

	player.x = door.targetX;
	player.y = door.targetY;

	ui.roomName.textContent = rooms[state.currentRoomId].name;

	await fadeIn(ui.fadeOverlay);
	
	state.transitionActive = false;
}