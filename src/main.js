import "./styles/main.css";

const app = document.querySelector("#app");

app.innerHTML = `
	<main class="game-shell">
		<h1>GTV Digital World</h1>
		
		<div class="game-frame">
			<canvas id="game-canvas" width="320" height="180"></canvas>
			
			<div id="interaction-prompt" class="interaction-prompt" hidden>[E] Interact</div>

			<div id="fade-overlay" class="fade-overlay"></div>

			<section id="loading-panel" class="loading-panel" hidden>
				<div class="loading-window">
					<p class="terminal-label">CONNECTING TO SECTOR</p>
					<h2 id="loading-room-name">Loading...</h2>

					<div class="loading-bar">
						<div id="loading-progress" class="loading-progress"></div>
					</div>

					<p id="loading-percentage">0%</p>
				</div>
			</section>
			
			<section id="terminal-panel" class="terminal-panel" hidden>
				<div class="terminal-window">
					<p class="terminal-label">GTV SYSTEM TERMINAL</p>
					<h2>Connection Established</h2>
					
					<p>Interactive terminal prototype online.</p>
					<p>Canvas and HTML/CSS systems are now connected.</p>
					
					<button id="close-terminal-button">Close Terminal</button>
					<small>Press Escape to close.</small>
				</div>
			</section>
		</div>
		
		<p id="room-name">Central Hub</p>
		<p>Prototype Mode - WASD / Arrow Keys - E to Interact</p>
	</main>
`;

const canvas = document.querySelector("#game-canvas");
const ctx = canvas.getContext("2d");

const interactionPrompt = document.querySelector("#interaction-prompt");
const terminalPanel = document.querySelector("#terminal-panel");
const closeTerminalButton = document.querySelector("#close-terminal-button");

const fadeOverlay = document.querySelector("#fade-overlay");
const loadingPanel = document.querySelector("#loading-panel");
const loadingRoomName = document.querySelector("#loading-room-name");
const loadingProgress = document.querySelector("#loading-progress");
const loadingPercentage = document.querySelector("#loading-percentage");

const roomName = document.querySelector("#room-name");

ctx.imageSmoothingEnabled = false;

const player = { x: 154, y: 84, width: 12, height: 12, speed: 60 };

const rooms = {
	hub: {
		name: "Central Hub",
		floorColor: "#102033",
		loadTime: 0,

		walls: [
			{ x: 0, y: 0, width: 320, height: 8 },
			{ x: 0, y: 172, width: 320, height: 8 },
			{ x: 0, y: 0, width: 8, height: 180 },
			{ x: 312, y: 0, width: 8, height: 180 },
			{ x: 70, y: 50, width: 60, height: 12 },
			{ x: 190, y: 115, width: 60, height: 12 }
		],

		interactables: [
			{
				type: "terminal",
				x: 260,
				y: 40,
				width: 24,
				height: 20,
				interactionRange: 10,
				solid: true,
				label: "Open Terminal"
			},
			{
				type: "door",
				x: 292,
				y: 76,
				width: 20,
				height: 28,
				interactionRange: 12,
				solid: false,
				label: "Enter Test Room",
				targetRoom: "test-room",
				targetX: 36,
				targetY: 84
			}
		]
	},

	"test-room": {
		name: "Test Room",
		floorColor: "#1a1630",
		loadTime: 1500,

		walls: [
			{ x: 0, y: 0, width: 320, height: 8 },
			{ x: 0, y: 172, width: 320, height: 8 },
			{ x: 0, y: 0, width: 8, height: 180 },
			{ x: 312, y: 0, width: 8, height: 180 },
			{ x: 100, y: 40, width: 12, height: 80 },
			{ x: 180, y: 90, width: 70, height: 12 }
		],

		interactables: [
			{
				type: "door",
				x: 8,
				y: 76,
				width: 20,
				height: 28,
				interactionRange: 12,
				solid: false,
				label: "Return to Hub",
				targetRoom: "hub",
				targetX: 270,
				targetY: 84
			}
		]
	}
};

const keys = new Set();
const loadedRooms = new Set(["hub"]);

const movementKeys = ["w", "a", "s", "d", "arrowup", "arrowleft", "arrowdown", "arrowright"];

let currentRoomId = "hub";
let terminalOpen = false;
let transitionActive = false;

function getCurrentRoom() {
	return rooms[currentRoomId];
}

window.addEventListener("keydown", (event) => {
	const key = event.key.toLowerCase();

	if (movementKeys.includes(key)) {
		event.preventDefault();

		if (!terminalOpen && !transitionActive) {
			keys.add(key);
		}
	}

	if (key === "e" && !event.repeat && !terminalOpen && !transitionActive) {
		event.preventDefault();
		handleInteraction();
	}

	if (key === "escape" && !event.repeat && terminalOpen) {
		event.preventDefault();
		closeTerminal();
	}
});

window.addEventListener("keyup", (event) => {
	keys.delete(event.key.toLowerCase());
});

closeTerminalButton.addEventListener("click", closeTerminal);

function wait(milliseconds) {
	return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

function isColliding(rectA, rectB) {
	return (
		rectA.x < rectB.x + rectB.width &&
		rectA.x + rectA.width > rectB.x &&
		rectA.y < rectB.y + rectB.height &&
		rectA.y + rectA.height > rectB.y
	);
}

function isNearObject(rectA, rectB, range) {
	return (
		rectA.x < rectB.x + rectB.width + range &&
		rectA.x + rectA.width > rectB.x - range &&
		rectA.y < rectB.y + rectB.height + range &&
		rectA.y + rectA.height > rectB.y - range
	);
}

function getColliders() {
	const room = getCurrentRoom();
	const solidObjects = room.interactables.filter((object) => object.solid);

	return [...room.walls, ...solidObjects];
}

function collidesWithObstacle(x, y) {
	const nextPlayerPosition = { x, y, width: player.width, height: player.height };

	return getColliders().some((collider) => isColliding(nextPlayerPosition, collider));
}

function getNearbyInteractable() {
	return getCurrentRoom().interactables.find((object) => {
		return isNearObject(player, object, object.interactionRange);
	});
}

function handleInteraction() {
	const object = getNearbyInteractable();

	if (!object) {
		return;
	}

	if (object.type === "terminal") {
		openTerminal();
	}

	if (object.type === "door") {
		transitionToRoom(object);
	}
}

function openTerminal() {
	terminalOpen = true;
	keys.clear();

	interactionPrompt.hidden = true;
	terminalPanel.hidden = false;
}

function closeTerminal() {
	terminalOpen = false;
	terminalPanel.hidden = true;
}

async function fadeOut() {
	fadeOverlay.classList.add("visible");
	await wait(350);
}

async function fadeIn() {
	fadeOverlay.classList.remove("visible");
	await wait(350);
}

async function loadRoom(roomId) {
	if (loadedRooms.has(roomId)) {
		return;
	}

	const room = rooms[roomId];

	loadingRoomName.textContent = room.name;
	loadingPanel.hidden = false;

	for (let progress = 0; progress <= 100; progress += 10) {
		loadingProgress.style.width = `${progress}%`;
		loadingPercentage.textContent = `${progress}%`;

		await wait(room.loadTime / 10);
	}

	loadedRooms.add(roomId);
	loadingPanel.hidden = true;
}

async function transitionToRoom(door) {
	if (transitionActive) {
		return;
	}

	transitionActive = true;
	keys.clear();
	interactionPrompt.hidden = true;

	await fadeOut();
	await loadRoom(door.targetRoom);

	currentRoomId = door.targetRoom;

	player.x = door.targetX;
	player.y = door.targetY;

	roomName.textContent = getCurrentRoom().name;

	await fadeIn();

	transitionActive = false;
}

function preloadRoom(roomId) {
	if (loadedRooms.has(roomId)) {
		return;
	}

	const room = rooms[roomId];

	setTimeout(() => {
		loadedRooms.add(roomId);
		console.log(`Preloaded: ${room.name}`);
	}, room.loadTime);
}

function updateInteractionPrompt() {
	const object = getNearbyInteractable();

	if (terminalOpen || transitionActive || !object) {
		interactionPrompt.hidden = true;
		return;
	}

	interactionPrompt.textContent = `[E] ${object.label}`;
	interactionPrompt.hidden = false;
}

function update(deltaTime) {
	if (!terminalOpen && !transitionActive) {
		let moveX = 0;
		let moveY = 0;

		if (keys.has("w") || keys.has("arrowup")) {
			moveY -= 1;
		}

		if (keys.has("s") || keys.has("arrowdown")) {
			moveY += 1;
		}

		if (keys.has("a") || keys.has("arrowleft")) {
			moveX -= 1;
		}

		if (keys.has("d") || keys.has("arrowright")) {
			moveX += 1;
		}

		if (moveX !== 0 || moveY !== 0) {
			const length = Math.hypot(moveX, moveY);

			moveX /= length;
			moveY /= length;

			const nextX = player.x + moveX * player.speed * deltaTime;
			const nextY = player.y + moveY * player.speed * deltaTime;

			if (!collidesWithObstacle(nextX, player.y)) {
				player.x = nextX;
			}

			if (!collidesWithObstacle(player.x, nextY)) {
				player.y = nextY;
			}
		}
	}

	updateInteractionPrompt();
}

function drawRoom() {
	const room = getCurrentRoom();

	ctx.fillStyle = "#08111f";
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	ctx.fillStyle = room.floorColor;
	ctx.fillRect(8, 8, canvas.width - 16, canvas.height - 16);

	ctx.fillStyle = "#31536f";

	for (const wall of room.walls) {
		ctx.fillRect(wall.x, wall.y, wall.width, wall.height);
	}

	for (const object of room.interactables) {
		if (object.type === "terminal") {
			drawTerminal(object);
		}

		if (object.type === "door") {
			drawDoor(object);
		}
	}
}

function drawTerminal(terminal) {
	ctx.fillStyle = "#173c4f";
	ctx.fillRect(terminal.x, terminal.y, terminal.width, terminal.height);

	ctx.fillStyle = "#5bc0ff";
	ctx.fillRect(terminal.x + 3, terminal.y + 3, terminal.width - 6, terminal.height - 8);

	ctx.fillStyle = "#08111f";
	ctx.fillRect(terminal.x + 6, terminal.y + 6, terminal.width - 12, terminal.height - 13);
}

function drawDoor(door) {
	ctx.fillStyle = "#472b70";
	ctx.fillRect(door.x, door.y, door.width, door.height);

	ctx.fillStyle = "#b36cff";
	ctx.fillRect(door.x + 4, door.y + 4, door.width - 8, door.height - 8);
}

function drawPlayer() {
	ctx.fillStyle = "#ff8c42";
	ctx.fillRect(Math.round(player.x), Math.round(player.y), player.width, player.height);
}

function draw() {
	drawRoom();
	drawPlayer();
}

let lastTime = performance.now();

function gameLoop(currentTime) {
	const deltaTime = Math.min((currentTime - lastTime) / 1000, 0.1);

	lastTime = currentTime;

	update(deltaTime);
	draw();

	requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);

setTimeout(() => preloadRoom("test-room"), 3000);

console.log("GTV Digital World initialized.");
console.log("Canvas ready:", canvas.width, canvas.height);