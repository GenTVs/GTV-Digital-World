import "./styles/main.css";

import { startGame } from "./core/game.js";
import { createUI } from "./ui/ui.js";

const app = document.querySelector("#app");
const ui = createUI(app);

startGame(ui);