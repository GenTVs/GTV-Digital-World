export function isColliding(rectA, rectB) {
	return (
		rectA.x < rectB.x + rectB.width &&
		rectA.x + rectA.width > rectB.x &&
		rectA.y < rectB.y + rectB.height &&
		rectA.y + rectA.height > rectB.y
	);
}

export function getColliders(room) {
	const solidObjects = room.interactables.filter((object) => object.solid);

	return [...room.walls, ...solidObjects];
}

export function collidesWithObstacle(player, room, x, y) {
	const nextPosition = { x, y, width: player.width, height: player.height };

	return getColliders(room).some((collider) => isColliding(nextPosition, collider));
}