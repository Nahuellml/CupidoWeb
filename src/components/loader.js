import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { scene } from './scene';

const loader = new GLTFLoader();

export function loadModel() {
    return new Promise((resolve, reject) => {
        loader.load('/CupidoWeb/assets/prueba13D.glb', function (gltf) {
            const object = gltf.scene;
            object.traverse(function (child) {
                // Puedes modificar los materiales o colores aquí
            });
            scene.add(object);
            resolve(object); // Resuelve la promesa con el objeto cargado
        }, undefined, function (error) {
            console.error(error);
            reject(error); // Rechaza la promesa si hay un error
        });
    });
}
