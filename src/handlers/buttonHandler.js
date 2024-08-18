import * as THREE from 'three';

export function setupButton(deliberyMan, camera) {
    const btnOrderHandler = document.querySelector('.btn-order');
    const modal = document.getElementById('modal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    let targetRotationY = 0;
    let cameraRotationY = 0;

    
    btnOrderHandler.addEventListener('click', () => {
        targetRotationY = 10;
        cameraRotationY = 2;
        btnOrderHandler.style.animationPlayState = 'running';
        modal.showModal()
    });

    closeModalBtn.addEventListener('click', () => {
        modal.close();
    })

    return function animateModel() {
        deliberyMan.rotation.y = THREE.MathUtils.lerp(deliberyMan.rotation.y, targetRotationY, 0.035);
        camera.position.y = THREE.MathUtils.lerp(camera.position.y, cameraRotationY, 0.005);
    };
}
