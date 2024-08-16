import * as THREE from 'three';

export function setupButton(deliberyMan, camera) {
    const btnOrderHandler = document.querySelector('.btn-order');
    let targetRotationY = 0;
    let cameraRotationY = 0;

    btnOrderHandler.addEventListener('click', () => {
        targetRotationY = 10;
        cameraRotationY = 2;
    });

    return function animateModel() {
        deliberyMan.rotation.y = THREE.MathUtils.lerp(deliberyMan.rotation.y, targetRotationY, 0.035);
        camera.position.y = THREE.MathUtils.lerp(camera.position.y, cameraRotationY, 0.005);
    };
}
