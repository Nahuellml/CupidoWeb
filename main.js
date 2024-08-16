import './style.css'
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const loader = new GLTFLoader();

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const controls = new OrbitControls( camera, renderer.domElement );

/* const material = new THREE.MeshStandardMaterial({
  color: 0xff0000, // Color base
  emissive: 0x000000, // Luz propia del material
  roughness: 0.5, // Rugosidad del material
  metalness: 0.5 // Metalidad
}); */

loader.load( '/CupidoWeb/assets/prueba13D.glb', function ( gltf ) {
  const object = gltf.scene;
  object.traverse(function (child) {
    /* if(child.isMesh) {
      child.material.color.set(0xffff00);
    } */
  })
	scene.add( object );

}, undefined, function ( error ) {

	console.error( error );

} );




////// LIGHT ////////
const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
directionalLight.position.set(0, 4, 5);
scene.add(directionalLight);

const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);


camera.position.z = 1;
camera.position.y = -0.2;
controls.enableDamping = true;
controls.update();

function animate() {
	requestAnimationFrame( animate );
  controls.update();
	renderer.render( scene, camera );
}

animate();