var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 100);
var renderer = new THREE.WebGLRenderer();
renderer.setClearColor(0x404040);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var controls = new THREE.OrbitControls(camera, renderer.domElement);

var light = new THREE.DirectionalLight(0xffffff, 0.5);
light.position.setScalar(100);
scene.add(light);

var curve = new THREE.Curve();

curve.fromJSON({
    "x":-24.229,
    "y":-20.8122,
    "z":-468.496,
})

var points = curve.getPoint(0.5);
var geometry = new THREE.BufferGeometry().setFromPoints( points );

var material = new THREE.LineBasicMaterial( { color : 0xff0000 } );

// Create the final object to add to the scene
var ellipse = new THREE.Line( geometry, material );

scene.add(ellipse)