const keys = new Set();

const movementKeys = new Set([
	"w", "a", "s", "d",
	"arrowup", "arrowleft", "arrowdown", "arrowright"
]);

export function setupInput(onInteract, onCancel, canMove) {
	window.addEventListener("keydown", (event) => {
		const key = event.key.toLowerCase();

		if (movementKeys.has(key)) {
			event.preventDefault();

			if (canMove()) {
				keys.add(key);
			}
		}

		if ((key === "e" || key === "enter") && !event.repeat && canMove()) {
			event.preventDefault();
			onInteract();
		}

		if (key === "escape" && !event.repeat) {
			event.preventDefault();
			onCancel();
		}
	});

	window.addEventListener("keyup", (event) => {
		keys.delete(event.key.toLowerCase());
	});
}

export function clearInput() {
	keys.clear();
}

export function getMovementDirection() {
	let x = 0;
	let y = 0;

	if (keys.has("w") || keys.has("arrowup")) {
		y -= 1;
	}

	if (keys.has("s") || keys.has("arrowdown")) {
		y += 1;
	}

	if (keys.has("a") || keys.has("arrowleft")) {
		x -= 1;
	}

	if (keys.has("d") || keys.has("arrowright")) {
		x += 1;
	}

	if (x === 0 && y === 0) {
		return { x: 0, y: 0 };
	}

	const length = Math.hypot(x, y);

	return { x: x / length, y: y / length };
}