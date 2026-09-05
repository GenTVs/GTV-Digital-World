export function isNearObject(player, object, range) {
	return (
		player.x < object.x + object.width + range &&
		player.x + player.width > object.x - range &&
		player.y < object.y + object.height + range &&
		player.y + player.height > object.y - range
	);
}

export function getNearbyInteractable(player, room) {
	return room.interactables.find((object) => isNearObject(player, object, object.interactionRange));
}