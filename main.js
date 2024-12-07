/* Imports */
import './style.css'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';

/* Basic Setup */
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 1000 );;
const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('#bg'), });
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
camera.position.z = 5;
renderer.render( scene, camera );
const controls = new OrbitControls(camera, renderer.domElement);

/* Helper Stuff */
const gridHelper = new THREE.GridHelper(200, 50)
scene.add(gridHelper)

/* Main Body */


/* Update Function */
let update = function() {

}

/* Basic Animate Function */
let animate = function () {
	requestAnimationFrame( animate );

	update();

	controls.update();
	renderer.render( scene, camera );
}

animate()