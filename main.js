import './style.css'
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const controls = new OrbitControls( camera, renderer.domElement );


const loader = new GLTFLoader();

loader.load( '/CupidoWeb/assets/prueba13D.glb', function ( gltf ) {
  const object = gltf.scene;
  object.traverse(function (child) {
    if(child.isMesh) {
      child.material.color.set(0xff0000);
    }
  })
	scene.add( object );

}, undefined, function ( error ) {

	console.error( error );

} );




////// LIGHT ////////
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(0, 10, 10);
scene.add(directionalLight);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);


camera.position.z = 5;
camera.position.y = 5;
controls.enableDamping = true;
controls.update();

function animate() {
	requestAnimationFrame( animate );
  controls.update();
	renderer.render( scene, camera );
}

animate();