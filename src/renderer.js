import * as THREE from 'three';

export const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xffcce0);
document.body.appendChild(renderer.domElement);
