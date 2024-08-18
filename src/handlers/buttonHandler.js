import * as THREE from 'three';

export function setupButton(deliberyMan, camera) {
    const btnOrderHandler = document.querySelector('.btn-order');
    const modal = document.getElementById('modal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    let targetRotationY = 0;
    let cameraRotationY = 0;

    
    btnOrderHandler.addEventListener('click', () => {
        targetRotationY = 3.7;
        cameraRotationY = 2;
         btnOrderHandler.style.animation = 'btn-order-animation 1.7s cubic-bezier(0.58, 1.55, 0.65, 0.8) forwards';
        modal.showModal()
    });

    closeModalBtn.addEventListener('click', () => {
        targetRotationY = 0;
        cameraRotationY = -0.2;
        btnOrderHandler.style.animation = 'btn-order-reverse 1.7s cubic-bezier(0.58, 1.55, 0.65, 0.8) forwards';
        modal.close();
    })

    return function animateModel() {
        deliberyMan.rotation.y = THREE.MathUtils.lerp(deliberyMan.rotation.y, targetRotationY, 0.035);
        camera.position.y = THREE.MathUtils.lerp(camera.position.y, cameraRotationY, 0.005);
    };
}
