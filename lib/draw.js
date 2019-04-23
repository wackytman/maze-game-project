
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);

var scene = new THREE.Scene();

var material = new THREE.LineBasicMaterial({ color: 0x0000ff });
var geometry = new THREE.Geometry();

geometry.vertices.push(new THREE.Vector3(-5, 0, 0));
geometry.vertices.push(new THREE.Vector3(-5, 2, 0));
geometry.vertices.push(new THREE.Vector3(-7, 2, 0));
// geometry.vertices.push(new THREE.Vector3( 0, 10, 0) );
// geometry.vertices.push(new THREE.Vector3( 0, 0, 0) );
// geometry.vertices.push(new THREE.Vector3( -10, 0, 0) );
var line2 = new THREE.Line(geometry, material);

var geometry2 = new THREE.Geometry();
geometry2.vertices.push(new THREE.Vector3(5, 0, 0));
geometry2.vertices.push(new THREE.Vector3(5, 2, 0));
geometry2.vertices.push(new THREE.Vector3(7, 2, 0));

scene.add(line);
scene.add(line2);
renderer.render(scene, camera);