import * as THREE from 'three';

export function createCubeTexture() {
    const loader = new THREE.CubeTextureLoader();
    loader.setPath('textures/cube/pisa/');

    const textureCube = loader.load([
        'px.png', 'nx.png',
        'ny.png', 'py.png', 
        'pz.png', 'nz.png'
    ]);

    const material = new THREE.MeshBasicMaterial({ color: 0xffffff, envMap: textureCube, side: THREE.BackSide });

    return { textureCube, material };
}
