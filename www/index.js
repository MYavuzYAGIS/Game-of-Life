import { Universe } from "wasmrust";

const pre = document.getElementById("wasmrust-canvas");
const universe = Universe.new();

const renderLoop = () => {
    pre.textContent = universe.render();
    universe.tick();
  
    requestAnimationFrame(renderLoop);
  };

requestAnimationFrame(renderLoop);
