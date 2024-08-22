import * as THREE from 'three';
import './style.css';
import { scene, addLights } from './components/scene';
import { camera } from './components/camera';
import { renderer } from './renderer';
import { controls } from './components/controls';
import { loadModel } from './components/loader';
import { setupButton } from './handlers/buttonHandler.js';
import { createCubeTexture } from './components/cubeTexture.js';

async function init() {
    addLights();

    const deliberyMan = await loadModel();

    const animateModel = setupButton(deliberyMan, camera);

    // Usar la textura y el material importados
    /* const { textureCube, material } = createCubeTexture();

    if (!textureCube || !material) {
        console.error('Failed to load the cube texture or material.');
        return;
    }

    const geometry = new THREE.BoxGeometry(10,13,10);
    const cube = new THREE.Mesh(geometry, material);

    cube.position.set(0, 1, 0);

    scene.add(cube); */

    function animate() {
        requestAnimationFrame(animate);

        animateModel();

        controls.update();
        renderer.render(scene, camera);
    }

    animate();
}

init();
