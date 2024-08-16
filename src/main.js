import './style.css';
import { scene, addLights } from './components/scene';
import { camera } from './components/camera';
import { renderer } from './renderer';
import { controls } from './components/controls';
import { loadModel } from './components/loader';
import { setupButton } from './handlers/buttonHandler.js';

async function init() {
    addLights();

    const deliberyMan = await loadModel();

    const animateModel = setupButton(deliberyMan, camera);

    function animate() {
        requestAnimationFrame(animate);

        animateModel();

        controls.update();
        renderer.render(scene, camera);
    }

    animate();
}

init();
