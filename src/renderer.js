import * as THREE from 'three';

export const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
//renderer.setClearColor(0xf4fdff);
renderer.setClearColor(0x222);
document.body.appendChild(renderer.domElement);
