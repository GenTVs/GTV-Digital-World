export function createUI(app) {
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

	return {
		canvas: app.querySelector("#game-canvas"),
		interactionPrompt: app.querySelector("#interaction-prompt"),
		terminalPanel: app.querySelector("#terminal-panel"),
		closeTerminalButton: app.querySelector("#close-terminal-button"),
		fadeOverlay: app.querySelector("#fade-overlay"),
		loadingPanel: app.querySelector("#loading-panel"),
		loadingRoomName: app.querySelector("#loading-room-name"),
		loadingProgress: app.querySelector("#loading-progress"),
		loadingPercentage: app.querySelector("#loading-percentage"),
		roomName: app.querySelector("#room-name")
	};
}