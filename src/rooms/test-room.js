export const testRoom = {
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
};