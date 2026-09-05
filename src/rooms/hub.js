export const hub = {
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
};