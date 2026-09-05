function drawTerminal(ctx, terminal) {
	ctx.fillStyle = "#173c4f";
	ctx.fillRect(terminal.x, terminal.y, terminal.width, terminal.height);

	ctx.fillStyle = "#5bc0ff";
	ctx.fillRect(terminal.x + 3, terminal.y + 3, terminal.width - 6, terminal.height - 8);

	ctx.fillStyle = "#08111f";
	ctx.fillRect(terminal.x + 6, terminal.y + 6, terminal.width - 12, terminal.height - 13);
}

function drawDoor(ctx, door) {
	ctx.fillStyle = "#472b70";
	ctx.fillRect(door.x, door.y, door.width, door.height);

	ctx.fillStyle = "#b36cff";
	ctx.fillRect(door.x + 4, door.y + 4, door.width - 8, door.height - 8);
}

function drawRoom(ctx, canvas, room) {
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
			drawTerminal(ctx, object);
		}

		if (object.type === "door") {
			drawDoor(ctx, object);
		}
	}
}

function drawPlayer(ctx, player) {
	ctx.fillStyle = "#ff8c42";
	ctx.fillRect(Math.round(player.x), Math.round(player.y), player.width, player.height);
}

export function drawGame(ctx, canvas, room, player) {
	drawRoom(ctx, canvas, room);
	drawPlayer(ctx, player);
}