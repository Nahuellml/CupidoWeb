import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { camera } from './camera';
import { renderer } from '../renderer';

export const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
//controls.enabled = false; // Deshabilita la interacción del usuario
