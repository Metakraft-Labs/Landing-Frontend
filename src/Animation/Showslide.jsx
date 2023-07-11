import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import WebGL from 'three/addons/capabilities/WebGL.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const Showslide = ({radius}) => {
  const canvasRef = useRef(null);
  function randomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
  useEffect(() => {
    // Create a Three.js scene
    const scene = new THREE.Scene();

    // Create a Three.js camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z =1;
    camera.position.y=-1;
    const ambientLight = new THREE.AmbientLight( 0xffffff);
    // Create a Three.js renderer
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current});
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    // Load the .glb model
    let spheres = [];
for (let i = 1; i < 1000; i++) {
  let geometry = new THREE.SphereGeometry(0.02 * randomArbitrary(0.5, 1), 6, 6);
  let material = new THREE.MeshBasicMaterial({
    color: new THREE.Color(1, randomArbitrary(190, 220) / 255, Math.round(Math.random()))
  });

  let sphere = new THREE.Mesh(geometry, material);
  scene.add(sphere);
  spheres.push(sphere);
  sphere.position.setFromSpherical(new THREE.Spherical(7, 2 * Math.PI * Math.random(), 2 * Math.PI * Math.random()))
}
scene.rotation.x = 0.2;
scene.rotation.z = 0.6;
camera.position.z = 2;
// var axesHelper = new THREE.AxesHelper(3);
// scene.add(axesHelper);
let alp=0;
var animate = function() {
  requestAnimationFrame(animate);
  setTimeout(()=>{
    alp=0.05;
  },7000)
  if(camera.position.z<20) camera.position.z+=alp;
  scene.rotation.y += 0.001;
  scene.rotation.z -= 0.001;

  renderer.render(scene, camera);
};

animate();


    // Clean up Three.js objects and event listeners on component unmount
    // return () => {
    //   scene.remove(model); // Remove the model from the scene
    //   renderer.dispose();
    // };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default Showslide;
