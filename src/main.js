import "./styles/main.css";

const app = document.querySelector("#app");

app.innerHTML = `
	<main class="game-shell">
		<h1>GTV Digital World</h1>
		
		<div class="game-frame">
			<canvas
				id="game-canvas"
				width="320"
				height="180"
			></canvas>
		</div>
		
		<p>Prototype Mode - WASD / Arrow Keys</p>
	</main>
`;

const canvas = document.querySelector("#game-canvas");
const ctx = canvas.getContext("2d");

ctx.imageSmoothingEnabled = false;

const player = {
	x: 154,
	y: 84,
	width: 12,
	height: 12,
	speed: 60,
};

const walls = [
	{
		x: 0,
		y: 0,
		width: 320,
		height: 8,
	},
	{
		x: 0,
		y: 172,
		width: 320,
		height: 8,
	},
	{
		x: 0,
		y: 0,
		width: 8,
		height: 180,
	},
	{
		x: 312,
		y: 0,
		width: 8,
		height: 180,
	},

	// Temporary room obstacles
	{
		x: 70,
		y: 50,
		width: 60,
		height: 12,
	},
	{
		x: 190,
		y: 115,
		width: 60,
		height: 12,
	},
];

const keys = new Set();

const movementKeys = [
	"w",
	"a",
	"s",
	"d",
	"arrowup",
	"arrowleft",
	"arrowdown",
	"arrowright",
];

window.addEventListener("keydown", (event) => {
	const key = event.key.toLowerCase();

	if (movementKeys.includes(key)) {
		event.preventDefault();
	}

	keys.add(key);
});

window.addEventListener("keyup", (event) => {
	keys.delete(event.key.toLowerCase());
});

function isColliding(rectA, rectB) {
	return (
		rectA.x < rectB.x + rectB.width &&
		rectA.x + rectA.width > rectB.x &&
		rectA.y < rectB.y + rectB.height &&
		rectA.y + rectA.height > rectB.y
	);
}

function collidesWithWall(x, y) {
	const nextPlayerPosition = {
		x,
		y,
		width: player.width,
		height: player.height,
	};

	return walls.some((wall) => {
		return isColliding(nextPlayerPosition, wall);
	});
}

function update(deltaTime) {
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

		if (!collidesWithWall(nextX, player.y)) {
			player.x = nextX;
		}

		if (!collidesWithWall(player.x, nextY)) {
			player.y = nextY;
		}
	}
}

function drawRoom() {
	ctx.fillStyle = "#08111f";
	ctx.fillRect(
		0,
		0,
		canvas.width,
		canvas.height
	);

	ctx.fillStyle = "#102033";
	ctx.fillRect(
		8,
		8,
		canvas.width - 16,
		canvas.height - 16
	);

	ctx.fillStyle = "#31536f";

	for (const wall of walls) {
		ctx.fillRect(
			wall.x,
			wall.y,
			wall.width,
			wall.height,
		);
	}
}

function drawPlayer() {
	ctx.fillStyle = "#ff8c42";

	ctx.fillRect(
		Math.round(player.x),
		Math.round(player.y),
		player.width,
		player.height,
	);
}

function draw() {
	drawRoom();
	drawPlayer();
}

let lastTime = performance.now();

function gameLoop(currentTime) {
	const deltaTime = Math.min(
		(currentTime - lastTime) / 1000,
		0.1,
	);

	lastTime = currentTime;

	update(deltaTime);
	draw();

	requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);

console.log("GTV Digital World initialized.");
console.log("Canvas ready:", canvas.width, canvas.height);