import * as THREE from 'three';
import {GUI} from 'three/addons/libs/lil-gui.module.min.js';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

function main() {
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    const gui = new GUI();
    const guiElement = document.querySelector('.lil-gui');
    if (guiElement) {
      guiElement.remove();
    }

  const fov = 40;
  const aspect = 2;  // the canvas default
  const near = 0.1;
  const far = 100;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.near = 1; // Set the near clipping plane value
  camera.far = 10000; // Set the far clipping plane value
  camera.updateProjectionMatrix(); // Update the camera's projection matrix
  camera.position.set(0 , 150  , 0);
  camera.up.set(0, 0, 1);
  camera.lookAt(0, 0, 0);
  
  const controls =  new OrbitControls(camera, renderer.domElement);
  const scene = new THREE.Scene();

  {
    const color = 0xFFFFFF;
    const intensity = 3;
    const light = new THREE.PointLight(color, intensity);
    scene.add(light);
  }

  const objects = [];

  const radius = 1;
 // const widthSegments = 6;
  //const heightSegments = 6;
  const sphereGeometry = new THREE.SphereGeometry(
      radius);

  const solarSystem = new THREE.Object3D();
  scene.add(solarSystem);
  objects.push(solarSystem);


/**********************************The Sun********************************************** */
  const sunMaterial = new THREE.MeshPhongMaterial({emissive: 0xFFFF00});
  const sunMesh = new THREE.Mesh(sphereGeometry, sunMaterial);
  sunMesh.scale.set(8, 8, 8);
  solarSystem.add(sunMesh);
  objects.push(sunMesh);
/**********************************Earth and moon********************************************** */
  const earthOrbit = new THREE.Object3D();
  earthOrbit.position.x = 15;
  earthOrbit.position.z = 15;
  solarSystem.add(earthOrbit);
  objects.push(earthOrbit);

  const earthMaterial = new THREE.MeshPhongMaterial({color: 0x0000FF, emissive: 0x112244});
  const earthMesh = new THREE.Mesh(sphereGeometry, earthMaterial);
  earthMesh.scale.set(1.2, 1.2, 1.2);

  earthOrbit.add(earthMesh);
  objects.push(earthMesh);

  const eorbitRadius = 21.5; // Radius of the orbit
  const eorbitThickness = 0.02; // Thickness of the orbit
  const eorbitSegments = 64; // Number of segments used to approximate the orbit

// Create the orbit path geometry
  const eorbitGeometry = new THREE.TorusGeometry(eorbitRadius, eorbitThickness, eorbitSegments, eorbitSegments);
  const eorbitMaterial = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
  const eorbitPath = new THREE.Mesh(eorbitGeometry, eorbitMaterial);
  eorbitPath.rotation.x = Math.PI / 2; // Rotate the orbit to align with the XY plane
  solarSystem.add(eorbitPath);

/******************************************************************************************** */

/***************************************Mercury********************************************** */
  const mercuryOrbit = new THREE.Object3D();
  //mercuryOrbit.position.z = 15;
  mercuryOrbit.position.x = 10;
  solarSystem.add(mercuryOrbit);
  objects.push(mercuryOrbit);

  const mercuryMaterial = new THREE.MeshPhongMaterial({color: 0xA9A9A9, emissive: 0x112244});
  const mercuryMesh = new THREE.Mesh(sphereGeometry, mercuryMaterial);
  mercuryMesh.scale.set(.7, .7, .7);
  mercuryOrbit.add(mercuryMesh);
  objects.push(mercuryMesh);

  const mercorbitRadius = 10.23; // Radius of the orbit
  const mercorbitThickness = 0.02; // Thickness of the orbit
  const mercorbitSegments = 64; // Number of segments used to approximate the orbit

// Create the orbit path geometry
  const mercorbitGeometry = new THREE.TorusGeometry(mercorbitRadius, mercorbitThickness, mercorbitSegments, mercorbitSegments);
  const mercorbitMaterial = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
  const mercorbitPath = new THREE.Mesh(mercorbitGeometry, mercorbitMaterial);
  mercorbitPath.rotation.x = Math.PI / 2; // Rotate the orbit to align with the XY plane
  solarSystem.add(mercorbitPath);
/************************************************************************************* */
/***************************************Venus********************************************** */
  const venusOrbit = new THREE.Object3D();
  venusOrbit.position.x = -15;
  venusOrbit.position.z = 5;
  solarSystem.add(venusOrbit);
  objects.push(venusOrbit);

  const venusMaterial = new THREE.MeshPhongMaterial({color: 0xFFFF99, emissive: 0x112244});
  const venusMesh = new THREE.Mesh(sphereGeometry, venusMaterial);
  venusMesh.scale.set(1, 1, 1);

  venusOrbit.add(venusMesh);
  objects.push(venusMesh);

  const vorbitRadius = 15.5; // Radius of the orbit
  const vorbitThickness = 0.02; // Thickness of the orbit
  const vorbitSegments = 64; // Number of segments used to approximate the orbit

// Create the orbit path geometry
  const vorbitGeometry = new THREE.TorusGeometry(vorbitRadius, vorbitThickness, vorbitSegments, vorbitSegments);
  const vorbitMaterial = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
  const vorbitPath = new THREE.Mesh(vorbitGeometry, vorbitMaterial);
  vorbitPath.rotation.x = Math.PI / 2; // Rotate the orbit to align with the XY plane
  solarSystem.add(vorbitPath);
/************************************************************************************* */
/***************************************mars********************************************** */
  const marsOrbit = new THREE.Object3D();
  marsOrbit.position.x = 27;
  marsOrbit.position.z = 3;
  solarSystem.add(marsOrbit);
  objects.push(marsOrbit);

  const marsMaterial = new THREE.MeshPhongMaterial({color: 0xFF4500, emissive: 0x112244});
  const marsMesh = new THREE.Mesh(sphereGeometry, marsMaterial);
  marsMesh.scale.set(.5, .5, .5);

  marsOrbit.add(marsMesh);
  objects.push(marsMesh);

  const morbitRadius = 27; // Radius of the orbit
  const morbitThickness = 0.02; // Thickness of the orbit
  const morbitSegments = 64; // Number of segments used to approximate the orbit

// Create the orbit path geometry
  const morbitGeometry = new THREE.TorusGeometry(morbitRadius, morbitThickness, morbitSegments, morbitSegments);
  const morbitMaterial = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
  const morbitPath = new THREE.Mesh(morbitGeometry, morbitMaterial);
  morbitPath.rotation.x = Math.PI / 2; // Rotate the orbit to align with the XY plane
  solarSystem.add(morbitPath);
/************************************************************************************* */
/***************************************Jupiter********************************************** */
  const jOrbit = new THREE.Object3D();
  jOrbit.position.x = -32;
  jOrbit.position.z = 3;
  solarSystem.add(jOrbit);
  objects.push(jOrbit);

  const jMaterial = new THREE.MeshPhongMaterial({color: 0xD2691E, emissive: 0x112244});
  const jMesh = new THREE.Mesh(sphereGeometry, jMaterial);
  jMesh.scale.set(3, 3, 3);

  jOrbit.add(jMesh);
  objects.push(jMesh);

  const jorbitRadius = 32; // Radius of the orbit
  const jorbitThickness = 0.02; // Thickness of the orbit
  const jorbitSegments = 64; // Number of segments used to approximate the orbit

// Create the orbit path geometry
  const jorbitGeometry = new THREE.TorusGeometry(jorbitRadius, jorbitThickness, jorbitSegments, jorbitSegments);
  const jorbitMaterial = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
  const jorbitPath = new THREE.Mesh(jorbitGeometry, jorbitMaterial);
  jorbitPath.rotation.x = Math.PI / 2; // Rotate the orbit to align with the XY plane
  solarSystem.add(jorbitPath);
/************************************************************************************* */
/***************************************saturn********************************************** */
  const sOrbit = new THREE.Object3D();
  sOrbit.position.x = 38;
  sOrbit.position.z = 3;
  solarSystem.add(sOrbit);
  objects.push(sOrbit);

  const sMaterial = new THREE.MeshPhongMaterial({color:  0xF0E68C, emissive: 0x112244});
  const sMesh = new THREE.Mesh(sphereGeometry, sMaterial);
  sMesh.scale.set(2.3, 2.3, 2.3);

  sOrbit.add(sMesh);
  objects.push(sMesh);

  const sorbitRadius = 38; // Radius of the orbit
  const sorbitThickness = 0.02; // Thickness of the orbit
  const sorbitSegments = 64; // Number of segments used to approximate the orbit

// Create the orbit path geometry
  const sorbitGeometry = new THREE.TorusGeometry(sorbitRadius, sorbitThickness, sorbitSegments, sorbitSegments);
  const sorbitMaterial = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
  const sorbitPath = new THREE.Mesh(sorbitGeometry, sorbitMaterial);
  sorbitPath.rotation.x = Math.PI / 2; // Rotate the orbit to align with the XY plane
  solarSystem.add(sorbitPath);
/************************************************************************************* */
/***************************************uranus********************************************** */
  const uOrbit = new THREE.Object3D();
  uOrbit.position.x = 46;

  
  solarSystem.add(uOrbit);
  objects.push(uOrbit);

  const uMaterial = new THREE.MeshPhongMaterial({color:  0x00FFFF, emissive: 0x112244});
  const uMesh = new THREE.Mesh(sphereGeometry, uMaterial);
  uMesh.scale.set(1.3, 1.3, 1.3);

  uOrbit.add(uMesh);
  objects.push(uMesh);

  const uorbitRadius = 46; // Radius of the orbit
  const uorbitThickness = 0.02; // Thickness of the orbit
  const uorbitSegments = 64; // Number of segments used to approximate the orbit

// Create the orbit path geometry
  const uorbitGeometry = new THREE.TorusGeometry(uorbitRadius, uorbitThickness, uorbitSegments, uorbitSegments);
  const uorbitMaterial = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
  const uorbitPath = new THREE.Mesh(uorbitGeometry, uorbitMaterial);
  uorbitPath.rotation.x = Math.PI / 2; // Rotate the orbit to align with the XY plane
  solarSystem.add(uorbitPath);
/************************************************************************************* */
/**********************************neptune********************************************** */
const nOrbit = new THREE.Object3D();
nOrbit.position.x = 50;
nOrbit.position.z = 15;
solarSystem.add(nOrbit);
objects.push(nOrbit);

const nMaterial = new THREE.MeshPhongMaterial({color: 0x00008B, emissive: 0x112244});
const nMesh = new THREE.Mesh(sphereGeometry, nMaterial);
nMesh.scale.set(1.2, 1.2, 1.2);

nOrbit.add(nMesh);
objects.push(nMesh);

const norbitRadius = 52; // Radius of the orbit
const norbitThickness = 0.02; // Thickness of the orbit
const norbitSegments = 64; // Number of segments used to approximate the orbit

// Create the orbit path geometry
const norbitGeometry = new THREE.TorusGeometry(norbitRadius, norbitThickness, norbitSegments, norbitSegments);
const norbitMaterial = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
const norbitPath = new THREE.Mesh(norbitGeometry, norbitMaterial);
norbitPath.rotation.x = Math.PI / 2; // Rotate the orbit to align with the XY plane
solarSystem.add(norbitPath);
/****************************************stars*********************************************/
const starsCoords = [];

for ( let i=0 ; i<10000 ; i++){
  const xx = THREE.MathUtils.randFloatSpread(1000);
  const yy = THREE.MathUtils.randFloatSpread(1000);
  const zz = THREE.MathUtils.randFloatSpread(1000);
  starsCoords.push(xx,yy,zz);
}

const starsGeometry = new THREE.BufferGeometry();
starsGeometry.setAttribute('position',new THREE.Float32BufferAttribute(starsCoords , 3));
const starsMaterial = new THREE.PointsMaterial({color:0xaaaaaa});
const stars = new THREE.Points(starsGeometry,starsMaterial);
scene.add(stars);

/**************************************************************************************** */


  const shootingStarMaterial = new THREE.MeshPhongMaterial({color: 0xFF2400, emissive: 0xFF2400});
  const shootingStar = new THREE.Mesh(sphereGeometry, shootingStarMaterial);
  shootingStar.scale.set(2,2,2);
  shootingStar.position.x = 60;
  shootingStar.position.y = 6;
  scene.add(shootingStar);

  


  
  
 
  const collisionMessageElement = document.getElementById('collisionMessage');

  
  
  const button = document.getElementById('my-button');
    button.addEventListener('click', function() {
    // Perform actions when the button is clicked
    shootingStar.position.x -= 3;
   
    

});


const shootingStarBoundingBox = new THREE.Box3().setFromObject(shootingStar);
const sunBoundingBox = new THREE.Box3().setFromObject(sunMesh);

  

    


  function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  }
  
  
  function render(time) {
    time *= 0.001;

    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }

    objects.forEach((obj) => {
      obj.rotation.y = time;
    });

    


    renderer.render(scene, camera);
    //controls = new OrbitControls( camera, renderer.domElement );
    controls.update();

    




    requestAnimationFrame(render);
  


    // Update bounding volume positions if needed
    shootingStarBoundingBox.setFromObject(shootingStar);
    sunBoundingBox.setFromObject(sunMesh);
    
    
    // Check for intersection
   // Check for intersection
   const collisionDetected = shootingStarBoundingBox.intersectsBox(sunBoundingBox);
   if (collisionDetected) {
     collisionMessageElement.textContent = "Entered the sun's area and exploded";
     scene.remove(shootingStar);

     // Perform actions when a collision occurs
   } else {
     collisionMessageElement.textContent = "";
   }
    }
  

  requestAnimationFrame(render);
}

main();
