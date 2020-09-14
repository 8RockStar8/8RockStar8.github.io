let scene;
let camera;
let renderer;

let loader = new THREE.FontLoader();
loader.load( './fonts/helvetiker_bold.typeface.json', function ( font ){
  init120(font);
  animate();
});

function init120(font) {
  // create scene
  // create scene
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xffffff);
  // create scene
  // create scene


  // create camera
  // create camera
  camera = new THREE.PerspectiveCamera(66,window.innerWidth/window.innerHeight,0.1,1000)
  camera.position.z = 5;

  // create camera
  // create camera


  // render
  // render
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  // render
  // render


  // big circle
  // big circle
  const bigCircleGeometry = new THREE.CircleGeometry( 2, 100 );
  const bigCircleMaterial = new THREE.MeshBasicMaterial({ color: 0xdddfe1 });
  const bigCircle = new THREE.Mesh(bigCircleGeometry, bigCircleMaterial);
  scene.add(bigCircle);
  // big circle
  // big circle


  // constants 
  // constants
  const smallCircleColor = 0xfafafa;
  const smallCircleGeometry = new THREE.CircleGeometry( 1, 100 );
  const smallCircleMaterial = new THREE.MeshBasicMaterial({ color: smallCircleColor })
  const edges = new THREE.EdgesGeometry( smallCircleGeometry );

  const halfRingGeometry = new THREE.TorusGeometry( 0, 0.1, 2, 200, 3.38 );
  const halfRingMaterial = new THREE.MeshBasicMaterial({ color: 0xaba7a8, side: THREE.DoubleSide, transparent: true });
  // constants
  // constants


  // first small circle
  // first small circle
  const smallFirstCircle = new THREE.Mesh(smallCircleGeometry, smallCircleMaterial);
  smallFirstCircle.position.x = -2;
  smallFirstCircle.position.y = 1;
  scene.add(smallFirstCircle);
  let firstLine = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x8d8c94 } ));
  firstLine.position.x = -2;
  firstLine.position.y = 1;
  scene.add( firstLine );

  let firstRing = new THREE.Mesh( halfRingGeometry, halfRingMaterial );
  firstRing.position.x = -2;
  firstRing.position.y = 1;
  firstRing.rotation.z = -5.8;
  scene.add( firstRing );
  // first small circle
  // first small circle


  // second small circle
  // second small circle
  const smallSecondCircle = new THREE.Mesh(smallCircleGeometry, smallCircleMaterial);;
  smallSecondCircle.position.x = 2.2;
  scene.add(smallSecondCircle);
  let secondLine = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x8d8c94 } ));
  secondLine.position.x = 2.2;
  scene.add( secondLine );

  let secondRing = new THREE.Mesh( halfRingGeometry, halfRingMaterial );
  secondRing.position.x = 2.2;
  secondRing.rotation.z = 4.5;
  scene.add( secondRing );
  // second small circle
  // second small circle



  // third small circle
  // third small circle
  const smallThirdCircle = new THREE.Mesh(smallCircleGeometry, smallCircleMaterial);;
  smallThirdCircle.position.x = -1;
  smallThirdCircle.position.y = -2;
  scene.add(smallThirdCircle);
  let thirdLine = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x8d8c94 } ));
  thirdLine.position.x = -1;
  thirdLine.position.y = -2;
  scene.add( thirdLine );

  let thirdRing = new THREE.Mesh( halfRingGeometry, halfRingMaterial );
  thirdRing.position.x = -1;
  thirdRing.position.y = -2;
  thirdRing.rotation.z = 9.3;
  scene.add( thirdRing );
  // third small circle
  // third small circle


  // central purple circle
  // central purple circle
  const purpleCircleBorderGeometry = new THREE.CircleGeometry( 0.9, 100 );
  const purpleCircleGeometry = new THREE.CircleGeometry( 0.8, 100 );
  const purpleCircleMaterial = new THREE.MeshBasicMaterial({ color: 0x453853 });
  const purpleCircle = new THREE.Mesh( purpleCircleGeometry, purpleCircleMaterial );
  scene.add( purpleCircle );

  const purpleCircleEdges = new THREE.EdgesGeometry( purpleCircleBorderGeometry );
  const purpleCircleLine = new THREE.LineSegments( purpleCircleEdges, new THREE.LineBasicMaterial( { color: 0x453853 } ));
  scene.add( purpleCircleLine );
  // central purple circle
  // central purple circle


  // circle points
  // circle points
  const circlePointGeometry = new THREE.CircleGeometry( 0.05, 100);
  const circlePointMaterial = new THREE.MeshBasicMaterial({ color: 0x575b77, transparent: true });
  const firstCirclePoint = new THREE.Mesh( circlePointGeometry, circlePointMaterial );
  firstCirclePoint.position.x = -0.64;
  firstCirclePoint.position.y = 0.64;
  scene.add( firstCirclePoint );
  const secondCirclePoint = new THREE.Mesh( circlePointGeometry, circlePointMaterial );
  secondCirclePoint.position.x = 0.85;
  secondCirclePoint.position.y = 0.3;
  scene.add( secondCirclePoint );
  const thirdCirclePoint = new THREE.Mesh( circlePointGeometry, circlePointMaterial );
  thirdCirclePoint.position.x = 0.3;
  thirdCirclePoint.position.y = -0.85;
  scene.add( thirdCirclePoint );
  const fourthCirclePoint = new THREE.Mesh( circlePointGeometry, circlePointMaterial );
  fourthCirclePoint.position.x = -0.75;
  fourthCirclePoint.position.y = -0.5;
  scene.add( fourthCirclePoint );
  // circle points
  // circle points


  // small lines
  // small lines
  const smallLineMaterial = new THREE.LineBasicMaterial( { color: 0x848490 } );

  // first
  const smallFirstLineMaterialPoints = [];
  smallFirstLineMaterialPoints.push( new THREE.Vector3( - 0.5, 0, 0 ) );
  smallFirstLineMaterialPoints.push( new THREE.Vector3( 0, 0, 0 ) );
  smallFirstLineMaterialPoints.push( new THREE.Vector3( 0, 0, 0 ) );

  const smallFirstLineGeometry = new THREE.BufferGeometry().setFromPoints( smallFirstLineMaterialPoints );

  const firstSmallLine = new THREE.Line( smallFirstLineGeometry, smallLineMaterial );
  firstSmallLine.position.x = -0.9;
  firstSmallLine.position.y = 0.1;
  firstSmallLine.rotation.z = -0.2;
  scene.add( firstSmallLine );
  // first

  // second
  const smallSecondLineMaterialPoints = [];
  smallSecondLineMaterialPoints.push( new THREE.Vector3( - 0.4, 0, 0 ) );
  smallSecondLineMaterialPoints.push( new THREE.Vector3( 0, 0, 0 ) );
  smallSecondLineMaterialPoints.push( new THREE.Vector3( 0, 0, 0 ) );

  const smallSecondLineGeometry = new THREE.BufferGeometry().setFromPoints( smallSecondLineMaterialPoints );

  const secondSmallLine = new THREE.Line( smallSecondLineGeometry, smallLineMaterial );
  secondSmallLine.position.x = 1.25;
  secondSmallLine.position.y = -0.3;
  scene.add( secondSmallLine );
  // second

  // third
  const smallThirdLineMaterialPoints = [];
  smallThirdLineMaterialPoints.push( new THREE.Vector3( - 0.4, 0, 0 ) );
  smallThirdLineMaterialPoints.push( new THREE.Vector3( 0, 0, 0 ) );
  smallThirdLineMaterialPoints.push( new THREE.Vector3( 0, 0, 0 ) );

  const smallThirdLineGeometry = new THREE.BufferGeometry().setFromPoints( smallThirdLineMaterialPoints );

  const thirdSmallLine = new THREE.Line( smallThirdLineGeometry, smallLineMaterial );
  thirdSmallLine.position.x = -0.36;
  thirdSmallLine.position.y = -1.22;
  thirdSmallLine.rotation.z = -2.2;
  scene.add( thirdSmallLine );
  // third

  // small lines
  // small lines


  // third point circle border
  // third point circle border
  const thirdPointCircleBorderGeometry = new THREE.CircleGeometry( 0.7, 100 );
  const thirdPointCircleEdges = new THREE.EdgesGeometry( thirdPointCircleBorderGeometry );
  const thirdPointCircleLine = new THREE.LineSegments( thirdPointCircleEdges, new THREE.LineBasicMaterial( { color: 0x9d9da3 } ));
  thirdPointCircleLine.position.x = -1;
  thirdPointCircleLine.position.y = -1.99;
  scene.add( thirdPointCircleLine );
  // third point circle border
  // third point circle border
  

  // third point small circles
  // third point small circles
  const thirdCirclePointGeometry = new THREE.CircleGeometry( 0.05, 100);
  const thirdCirclePointMaterial = new THREE.MeshBasicMaterial({ color: 0x453954, transparent: true });

  // first
  const firstThirdCirclePoint = new THREE.Mesh( thirdCirclePointGeometry, thirdCirclePointMaterial );
  firstThirdCirclePoint.position.x = -0.45;
  firstThirdCirclePoint.position.y = -1.55;
  scene.add( firstThirdCirclePoint );
  // first

  // second
  const secondThirdCirclePoint = new THREE.Mesh( thirdCirclePointGeometry, thirdCirclePointMaterial );
  secondThirdCirclePoint.position.x = -1.67;
  secondThirdCirclePoint.position.y = -1.8;
  scene.add( secondThirdCirclePoint );
  // second

  // third
  const thirdThirdCirclePoint = new THREE.Mesh( thirdCirclePointGeometry, thirdCirclePointMaterial );
  thirdThirdCirclePoint.position.x = -1.03;
  thirdThirdCirclePoint.position.y = -2.68;
  scene.add( thirdThirdCirclePoint );
  // third

  // third point small circles
  // third point small circles


  // fourth circle point border
  // fourth circle point border
  const fourthPointCircleEdges = new THREE.EdgesGeometry( thirdPointCircleBorderGeometry );
  const fourthPointCircleLine = new THREE.LineSegments( fourthPointCircleEdges, new THREE.LineBasicMaterial( { color: 0x9d9da3 } ));
  fourthPointCircleLine.position.x = 2.18;
  scene.add( fourthPointCircleLine );
  // fourth circle point border
  // fourth circle point border


  // fourth circle points
  // fourth circle points
  const firstFourthCirclePoint = new THREE.Mesh( circlePointGeometry, circlePointMaterial );
  firstFourthCirclePoint.position.x = 2;
  firstFourthCirclePoint.position.y = 0.66;
  scene.add( firstFourthCirclePoint );
  const secondFourthCirclePoint = new THREE.Mesh( circlePointGeometry, circlePointMaterial );
  secondFourthCirclePoint.position.x = 2.85;
  secondFourthCirclePoint.position.y = 0.18;
  scene.add( secondFourthCirclePoint );
  const thirdFourthCirclePoint = new THREE.Mesh( circlePointGeometry, circlePointMaterial );
  thirdFourthCirclePoint.position.x = 2.38;
  thirdFourthCirclePoint.position.y = -0.66;
  scene.add( thirdFourthCirclePoint );
  const fourthFourthCirclePoint = new THREE.Mesh( circlePointGeometry, circlePointMaterial );
  fourthFourthCirclePoint.position.x = 1.53;
  fourthFourthCirclePoint.position.y = -0.25;
  scene.add( fourthFourthCirclePoint );
  // fourth circle points
  // fourth circle points


  // third step circles
  // third step circles

  // first
  const thirdStepFirstCircleBorderGeometry = new THREE.CircleGeometry( 0.75, 100 );
  const thirdStepFirstCircleEdges = new THREE.EdgesGeometry( thirdStepFirstCircleBorderGeometry );
  const thirdStepFirstCircleLine = new THREE.LineSegments( thirdStepFirstCircleEdges, new THREE.LineBasicMaterial( { color: 0x9d9da3 } ));
  thirdStepFirstCircleLine.position.x = -1.98;
  thirdStepFirstCircleLine.position.y = 0.98;
  scene.add( thirdStepFirstCircleLine );
  // first

  // second
  const thirdStepSecondCircleBorderGeometry = new THREE.CircleGeometry( 0.6, 100 );
  const thirdStepSecondCircleEdges = new THREE.EdgesGeometry( thirdStepSecondCircleBorderGeometry );
  const thirdStepSecondCircleLine = new THREE.LineSegments( thirdStepSecondCircleEdges, new THREE.LineBasicMaterial( { color: 0x9d9da3 } ));
  thirdStepSecondCircleLine.position.x = -1.98;
  thirdStepSecondCircleLine.position.y = 0.98;
  scene.add( thirdStepSecondCircleLine );
  // second

  // third
  const thirdStepThirdCircleBorderGeometry = new THREE.CircleGeometry( 0.4, 100 );
  const thirdStepThirdCircleEdges = new THREE.EdgesGeometry( thirdStepThirdCircleBorderGeometry );
  const thirdStepThirdCircleLine = new THREE.LineSegments( thirdStepThirdCircleEdges, new THREE.LineBasicMaterial( { color: 0x9d9da3 } ));
  thirdStepThirdCircleLine.position.x = -1.98;
  thirdStepThirdCircleLine.position.y = 0.98;
  scene.add( thirdStepThirdCircleLine );
  // third

  // third step circles
  // third step circles


  // third step circle points
  // third step circle points
  const circleThirdStepPointMaterial = new THREE.MeshBasicMaterial({ color: 0x815b55, transparent: true });
  const firstThirdStepCirclePoint = new THREE.Mesh( circlePointGeometry, circleThirdStepPointMaterial );
  firstThirdStepCirclePoint.position.x = -2.7;
  firstThirdStepCirclePoint.position.y = 0.75;
  scene.add( firstThirdStepCirclePoint );
  const secondThirdStepCirclePoint = new THREE.Mesh( circlePointGeometry, circleThirdStepPointMaterial );
  secondThirdStepCirclePoint.position.x = -1.85;
  secondThirdStepCirclePoint.position.y = 0.24;
  scene.add( secondThirdStepCirclePoint );
  const thirdThirdStepCirclePoint = new THREE.Mesh( circlePointGeometry, circleThirdStepPointMaterial );
  thirdThirdStepCirclePoint.position.x = -1.5;
  thirdThirdStepCirclePoint.position.y = 0.4;
  scene.add( thirdThirdStepCirclePoint );
  const fourthThirdStepCirclePoint = new THREE.Mesh( circlePointGeometry, circleThirdStepPointMaterial );
  fourthThirdStepCirclePoint.position.x = -1.28;
  fourthThirdStepCirclePoint.position.y = 0.7;
  scene.add( fourthThirdStepCirclePoint );
  // third step circle points
  // third step circle points


  // third step small round circle points
  // third step small round circle points
  const circleThirdStepSmallRoundPointMaterial = new THREE.MeshBasicMaterial({ color: 0xaa7e44, transparent: true });
  const firstThirdStepSmallRoundCirclePoint = new THREE.Mesh( circlePointGeometry, circleThirdStepSmallRoundPointMaterial );
  firstThirdStepSmallRoundCirclePoint.position.x = -2.35;
  firstThirdStepSmallRoundCirclePoint.position.y = 0.85;
  scene.add( firstThirdStepSmallRoundCirclePoint );
  const secondThirdStepSmallRoundCirclePoint = new THREE.Mesh( circlePointGeometry, circleThirdStepSmallRoundPointMaterial );
  secondThirdStepSmallRoundCirclePoint.position.x = -2.05;
  secondThirdStepSmallRoundCirclePoint.position.y = 0.58;
  scene.add( secondThirdStepSmallRoundCirclePoint );
  const thirdThirdStepSmallRoundCirclePoint = new THREE.Mesh( circlePointGeometry, circleThirdStepSmallRoundPointMaterial );
  thirdThirdStepSmallRoundCirclePoint.position.x = -1.6;
  thirdThirdStepSmallRoundCirclePoint.position.y = 0.9;
  scene.add( thirdThirdStepSmallRoundCirclePoint );
  const fourthThirdStepSmallRoundCirclePoint = new THREE.Mesh( circlePointGeometry, circleThirdStepSmallRoundPointMaterial );
  fourthThirdStepSmallRoundCirclePoint.position.x = -1.8;
  fourthThirdStepSmallRoundCirclePoint.position.y = 1.33;
  scene.add( fourthThirdStepSmallRoundCirclePoint );
  // third step small round circle points
  // third step small round circle points


  // first scene texts
  // first scene texts

  // title
  const titleFirstLineTextGeometry = new THREE.TextGeometry( 'STI', {
    font: font,
    size: 0.4,
    height: 0,
    curveSegments: 20,
    bevelEnabled: true,
    bevelThickness: 0.1,
    bevelSize: 0,
    bevelOffset: 0,
    bevelSegments: 0
  });
  const titleFirstLineTextMaterial = new THREE.MeshBasicMaterial( { color: 0x5a516b } );
  const titleFirstLineTextMesh = new THREE.Mesh( titleFirstLineTextGeometry, titleFirstLineTextMaterial );
  titleFirstLineTextMesh.position.x = 5.35;
  titleFirstLineTextMesh.position.y = 1.8;
  scene.add( titleFirstLineTextMesh );

  const titleSecondLineTextGeometry = new THREE.TextGeometry( 'ECOSYSTEM', {
    font: font,
    size: 0.4,
    height: 0,
    curveSegments: 20,
    bevelEnabled: true,
    bevelThickness: 0.1,
    bevelSize: 0,
    bevelOffset: 0,
    bevelSegments: 0
  });
  const titleSecondLineTextMaterial = new THREE.MeshBasicMaterial( { color: 0x5a516b } );
  const titleSecondLineTextMesh = new THREE.Mesh( titleSecondLineTextGeometry, titleSecondLineTextMaterial );
  titleSecondLineTextMesh.position.x = 2.8;
  titleSecondLineTextMesh.position.y = 1.25;
  scene.add( titleSecondLineTextMesh );
  // title

  // science text
  const scienceTextGeometry = new THREE.TextGeometry( 'SCIENCE', {
    font: font,
    size: 0.23,
    height: 0,
    curveSegments: 20,
    bevelEnabled: true,
    bevelThickness: 0.1,
    bevelSize: 0,
    bevelOffset: 0,
    bevelSegments: 0
  });
  const scienceTextMaterial = new THREE.MeshBasicMaterial( { color: 0xffffff } );
  const scienceTextMesh = new THREE.Mesh( scienceTextGeometry, scienceTextMaterial );
  scienceTextMesh.position.x = -0.65;
  scienceTextMesh.position.y = -0.13;
  scene.add( scienceTextMesh );
  // science text

  // education text
  const educationTextGeometry = new THREE.TextGeometry( 'EDUCATION', {
    font: font,
    size: 0.07,
    height: 0,
    curveSegments: 20,
    bevelEnabled: true,
    bevelThickness: 0.1,
    bevelSize: 0,
    bevelOffset: 0,
    bevelSegments: 0
  });
  const educationTextMaterial = new THREE.MeshBasicMaterial( { color: 0x433d55 } );
  const educationTextMesh = new THREE.Mesh( educationTextGeometry, educationTextMaterial );
  educationTextMesh.position.x = -2.25;
  educationTextMesh.position.y = 0.95;
  scene.add( educationTextMesh );
  // education text

  // commercialization text
  const commercializationTextGeometry = new THREE.TextGeometry( 'COMMERCIALIZATION', {
    font: font,
    size: 0.085,
    height: 0,
    curveSegments: 20,
    bevelEnabled: true,
    bevelThickness: 0.1,
    bevelSize: 0,
    bevelOffset: 0,
    bevelSegments: 0
  });
  const commercializationTextMaterial = new THREE.MeshBasicMaterial( { color: 0x433d55 } );
  const commercializationTextMesh = new THREE.Mesh( commercializationTextGeometry, commercializationTextMaterial );
  commercializationTextMesh.position.x = -1.63;
  commercializationTextMesh.position.y = -2.05;
  scene.add( commercializationTextMesh );
  // commercialization text

  // reseach text
  const reseachTextGeometry = new THREE.TextGeometry( 'RESEARCH', {
    font: font,
    size: 0.1,
    height: 0,
    curveSegments: 20,
    bevelEnabled: true,
    bevelThickness: 0.1,
    bevelSize: 0,
    bevelOffset: 0,
    bevelSegments: 0
  });
  const reseachTextMaterial = new THREE.MeshBasicMaterial( { color: 0x433d55 } );
  const reseachTextMesh = new THREE.Mesh( reseachTextGeometry, reseachTextMaterial );
  reseachTextMesh.position.x = 1.82;
  reseachTextMesh.position.y = -0.08;
  scene.add( reseachTextMesh );
  // reseach text

  // first scene texts
  // first scene texts
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
