import { rooms } from "../rooms/index.js";

const loadedRooms = new Set(["hub"]);

function wait(milliseconds) {
	return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

export function isRoomLoaded(roomId) {
	return loadedRooms.has(roomId);
}

export async function loadRoom(roomId, onProgress = () => {}) {
	if (loadedRooms.has(roomId)) {
		return;
	}

	const room = rooms[roomId];

	onProgress(0);

	for (let progress = 10; progress <= 100; progress += 10) {
		await wait(room.loadTime / 10);
		onProgress(progress);
	}

	loadedRooms.add(roomId);
}

export async function preloadRoom(roomId) {
	if (loadedRooms.has(roomId)) {
		return;
	}

	const room = rooms[roomId];

	await wait(room.loadTime);

	loadedRooms.add(roomId);

	console.log(`Preloaded: ${room.name}`);
}