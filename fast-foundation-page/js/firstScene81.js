let scene;
let camera;
let renderer;

let modifier = new THREE.BendModifier();
let loader = new THREE.FontLoader();
loader.load( './fonts/helvetiker_bold.typeface.json', function ( font ){
  init81(font);
  animate();
});

function init81(font) {
  // create scene
  // create scene
  scene = new THREE.Scene();
  // scene.background = new THREE.Color(0xff00ff);
  // create scene
  // create scene


  // create camera
  // create camera
  camera = new THREE.PerspectiveCamera(66,window.innerWidth/window.innerHeight,0.1,1000);
  camera.position.z = 5;

  // create camera
  // create camera


  // render
  // render
  renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setClearColor(0xffffff, 0);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  // render
  // render

  // science around texts
  // science around texts
  const curveDownDirection = new THREE.Vector3( 0, 1, 0 );
  const curveDownAxis =  new THREE.Vector3( 0, 0, 1 );
  const curveDownAngle = Math.PI / 8;

  const curveUpDirection = new THREE.Vector3( 0, -1, 0 );
  const curveUpAxis =  new THREE.Vector3( 0, 0, 1 );
  const curveUpAngle = Math.PI / 8;

  // advanced materials
  const advancedMaterialsGeometry = new THREE.TextGeometry( 'Advanced Materials', {
    font: font,
    size: 0.075,
    height: 0,
    curveSegments: 12,
    bevelThickness: 0,
    bevelSize: 0,
    bevelEnabled: true
  });
  const advancedMaterialsMaterial = new THREE.MeshBasicMaterial( { color: 0x464257 } );
  const advancedMaterials = new THREE.Mesh( advancedMaterialsGeometry, advancedMaterialsMaterial );
  advancedMaterials.position.x = -0.08;
  advancedMaterials.position.y = -1.15;
  advancedMaterials.rotation.z = 0.35;
  modifier.set( curveDownDirection, curveDownAxis, curveDownAngle ).modify(advancedMaterialsGeometry);
  scene.add( advancedMaterials );
  // advanced materials

  // robotics
  const roboticsGeometry = new THREE.TextGeometry( 'Robotics', {
    font: font,
    size: 0.075,
    height: 0,
    curveSegments: 12,
    bevelThickness: 0,
    bevelSize: 0,
    bevelEnabled: true
  });
  const roboticsMaterial = new THREE.MeshBasicMaterial( { color: 0x464257 } );
  const robotics = new THREE.Mesh( roboticsGeometry, roboticsMaterial );
  robotics.position.x = -1.01;
  robotics.position.y = -0.43;
  robotics.rotation.z = -1;
  modifier.set( curveDownDirection, curveDownAxis, curveDownAngle ).modify(roboticsGeometry);
  scene.add( robotics );
  // robotics

  // data science
  const dataScienceGeometry = new THREE.TextGeometry( 'Data Science', {
    font: font,
    size: 0.075,
    height: 0,
    curveSegments: 12,
    bevelThickness: 0,
    bevelSize: 0,
    bevelEnabled: true
  });
  const dataScienceMaterial = new THREE.MeshBasicMaterial( { color: 0x464257 } );
  const dataScience = new THREE.Mesh( dataScienceGeometry, dataScienceMaterial );
  dataScience.position.x = -0.9;
  dataScience.position.y = 0.5;
  dataScience.rotation.z = 0.8;
  modifier.set( curveUpDirection, curveUpAxis, curveUpAngle ).modify(dataScienceGeometry);
  scene.add( dataScience );
  // data science

  // biotechnology
  const biotechnologyGeometry = new THREE.TextGeometry( 'Biotechnology', {
    font: font,
    size: 0.075,
    height: 0,
    curveSegments: 12,
    bevelThickness: 0,
    bevelSize: 0,
    bevelEnabled: true
  });
  const biotechnologyMaterial = new THREE.MeshBasicMaterial( { color: 0x464257 } );
  const biotechnology = new THREE.Mesh( biotechnologyGeometry, biotechnologyMaterial );
  biotechnology.position.x = 0.9;
  biotechnology.position.y = 0.63;
  biotechnology.rotation.z = -1.35;
  modifier.set( curveUpDirection, curveUpAxis, curveUpAngle ).modify(biotechnologyGeometry);
  scene.add( biotechnology );
  // biotechnology

  // acceleration
  const accelerationGeometry = new THREE.TextGeometry( 'Acceleration', {
    font: font,
    size: 0.075,
    height: 0,
    curveSegments: 12,
    bevelThickness: 0,
    bevelSize: 0,
    bevelEnabled: true
  });
  const accelerationMaterial = new THREE.MeshBasicMaterial( { color: 0x5e5a66 } );
  const acceleration = new THREE.Mesh( accelerationGeometry, accelerationMaterial );
  acceleration.position.x = -1.34;
  acceleration.position.y = -2.83;
  acceleration.rotation.z = -0.01;
  modifier.set( curveDownDirection, curveDownAxis, curveDownAngle ).modify(accelerationGeometry);
  scene.add( acceleration );
  // acceleration

  // technology transfer
  const technologyTransferGeometry = new THREE.TextGeometry( 'Technology Transfer', {
    font: font,
    size: 0.075,
    height: 0,
    curveSegments: 12,
    bevelThickness: 0,
    bevelSize: 0,
    bevelEnabled: true
  });
  const technologyTransferMaterial = new THREE.MeshBasicMaterial( { color: 0x5e5a66 } );
  const technologyTransfer = new THREE.Mesh( technologyTransferGeometry, technologyTransferMaterial );
  technologyTransfer.position.x = -1.85;
  technologyTransfer.position.y = -2.3;
  technologyTransfer.rotation.z = 1.4;
  modifier.set( curveUpDirection, curveUpAxis, curveUpAngle ).modify(technologyTransferGeometry);
  scene.add( technologyTransfer );
  // technology transfer

  // incubation
  const incubationGeometry = new THREE.TextGeometry( 'Incubation', {
    font: font,
    size: 0.075,
    height: 0,
    curveSegments: 12,
    bevelThickness: 0,
    bevelSize: 0,
    bevelEnabled: true
  });
  const incubationMaterial = new THREE.MeshBasicMaterial( { color: 0x5e5a66 } );
  const incubation = new THREE.Mesh( incubationGeometry, incubationMaterial );
  incubation.position.x = -0.45;
  incubation.position.y = -1.28;
  incubation.rotation.z = -1;
  modifier.set( curveUpDirection, curveUpAxis, curveUpAngle ).modify(incubationGeometry);
  scene.add( incubation );
  // incubation

  // tech development
  const techDevelopmentGeometry = new THREE.TextGeometry( 'Tech Development', {
    font: font,
    size: 0.075,
    height: 0,
    curveSegments: 12,
    bevelThickness: 0,
    bevelSize: 0,
    bevelEnabled: true
  });
  const techDevelopmentMaterial = new THREE.MeshBasicMaterial( { color: 0x5e5a66 } );
  const techDevelopment = new THREE.Mesh( techDevelopmentGeometry, techDevelopmentMaterial );
  techDevelopment.position.x = 2;
  techDevelopment.position.y = -0.93;
  techDevelopment.rotation.z = 0.3;
  modifier.set( curveDownDirection, curveDownAxis, curveDownAngle ).modify(techDevelopmentGeometry);
  scene.add( techDevelopment );
  // tech development

  // fundamental
  const fundamentalGeometry = new THREE.TextGeometry( 'Fundamental', {
    font: font,
    size: 0.075,
    height: 0,
    curveSegments: 12,
    bevelThickness: 0,
    bevelSize: 0,
    bevelEnabled: true
  });
  const fundamentalMaterial = new THREE.MeshBasicMaterial( { color: 0x5e5a66 } );
  const fundamental = new THREE.Mesh( fundamentalGeometry, fundamentalMaterial );
  fundamental.position.x = 1.56;
  fundamental.position.y = -0.58;
  fundamental.rotation.z = 1.95;
  modifier.set( curveUpDirection, curveUpAxis, curveUpAngle ).modify(fundamentalGeometry);
  scene.add( fundamental );
  // fundamental

  // sci discovery
  const sciDiscoveryGeometry = new THREE.TextGeometry( 'Sci Discovery', {
    font: font,
    size: 0.075,
    height: 0,
    curveSegments: 12,
    bevelThickness: 0,
    bevelSize: 0,
    bevelEnabled: true
  });
  const sciDiscoveryMaterial = new THREE.MeshBasicMaterial( { color: 0x5e5a66 } );
  const sciDiscovery = new THREE.Mesh( sciDiscoveryGeometry, sciDiscoveryMaterial );
  sciDiscovery.position.x = 1.65;
  sciDiscovery.position.y = 0.64;
  sciDiscovery.rotation.z = 0.35;
  modifier.set( curveUpDirection, curveUpAxis, curveUpAngle ).modify(sciDiscoveryGeometry);
  scene.add( sciDiscovery );
  // sci discovery

  // applied
  const appliedGeometry = new THREE.TextGeometry( 'Applied', {
    font: font,
    size: 0.075,
    height: 0,
    curveSegments: 12,
    bevelThickness: 0,
    bevelSize: 0,
    bevelEnabled: true
  });
  const appliedMaterial = new THREE.MeshBasicMaterial( { color: 0x5e5a66 } );
  const applied = new THREE.Mesh( appliedGeometry, appliedMaterial );
  applied.position.x = 2.9;
  applied.position.y = 0.38;
  applied.rotation.z = -1.25;
  modifier.set( curveUpDirection, curveUpAxis, curveUpAngle ).modify(appliedGeometry);
  scene.add( applied );
  // applied

  // funding
  const fundingGeometry = new THREE.TextGeometry( 'Funding', {
    font: font,
    size: 0.11,
    height: 0,
    curveSegments: 12,
    bevelThickness: 0,
    bevelSize: 0,
    bevelEnabled: true
  });
  const fundingMaterial = new THREE.MeshBasicMaterial( { color: 0x464054 } );
  const funding = new THREE.Mesh( fundingGeometry, fundingMaterial );
  funding.position.x = -2.1;
  funding.position.y = -2;
  funding.rotation.z = -1.28;
  modifier.set( curveDownDirection, curveDownAxis, curveDownAngle ).modify(fundingGeometry);
  scene.add( funding );
  // funding

  // human capital
  const humanCapitalGeometry = new THREE.TextGeometry( 'Human Capital', {
    font: font,
    size: 0.11,
    height: 0,
    curveSegments: 12,
    bevelThickness: 0,
    bevelSize: 0,
    bevelEnabled: true
  });
  const humanCapitalMaterial = new THREE.MeshBasicMaterial( { color: 0x464054 } );
  const humanCapital = new THREE.Mesh( humanCapitalGeometry, humanCapitalMaterial );
  humanCapital.position.x = -1.55;
  humanCapital.position.y = -3.2;
  humanCapital.position.z = -0.25;
  modifier.set( curveDownDirection, curveDownAxis, curveDownAngle ).modify(humanCapitalGeometry);
  scene.add( humanCapital );
  // human capital

  // infrastructure
  const infrastructureGeometry = new THREE.TextGeometry( 'Infrastructure', {
    font: font,
    size: 0.11,
    height: 0,
    curveSegments: 12,
    bevelThickness: 0,
    bevelSize: 0,
    bevelEnabled: true
  });
  const infrastructureMaterial = new THREE.MeshBasicMaterial( { color: 0x464054 } );
  const infrastructure = new THREE.Mesh( infrastructureGeometry, infrastructureMaterial );
  infrastructure.position.x = -0.2;
  infrastructure.position.y = -2.84;
  infrastructure.rotation.z = 1.17;
  modifier.set( curveDownDirection, curveDownAxis, curveDownAngle ).modify(infrastructureGeometry);
  scene.add( infrastructure );
  // infrastructure

  // specialized education
  const specializedEducationGeometry = new THREE.TextGeometry( 'Specialized Education', {
    font: font,
    size: 0.05,
    height: 0,
    curveSegments: 12,
    bevelThickness: 0,
    bevelSize: 0,
    bevelEnabled: true
  });
  const specializedEducationMaterial = new THREE.MeshBasicMaterial( { color: 0x815b55 } );
  const specializedEducation = new THREE.Mesh( specializedEducationGeometry, specializedEducationMaterial );
  specializedEducation.position.x = -2.92;
  specializedEducation.position.y = 1.05;
  specializedEducation.rotation.z = -1.26;
  modifier.set( curveDownDirection, curveDownAxis, curveDownAngle ).modify(specializedEducationGeometry);
  scene.add( specializedEducation );
  // specialized education

  // higher education
  const higherEducationGeometry = new THREE.TextGeometry( 'Higher Education', {
    font: font,
    size: 0.05,
    height: 0,
    curveSegments: 12,
    bevelThickness: 0,
    bevelSize: 0,
    bevelEnabled: true
  });
  const higherEducationMaterial = new THREE.MeshBasicMaterial( { color: 0x815b55 } );
  const higherEducation = new THREE.Mesh( higherEducationGeometry, higherEducationMaterial );
  higherEducation.position.x = -2.6;
  higherEducation.position.y = 0.3;
  higherEducation.rotation.z = -0.45;
  modifier.set( curveDownDirection, curveDownAxis, curveDownAngle ).modify(higherEducationGeometry);
  scene.add( higherEducation );
  // higher education

  // bs
  const bsGeometry = new THREE.TextGeometry( 'BS', {
    font: font,
    size: 0.05,
    height: 0,
    curveSegments: 12,
    bevelThickness: 0,
    bevelSize: 0,
    bevelEnabled: true
  });
  const bsMaterial = new THREE.MeshBasicMaterial( { color: 0x815b55 } );
  const bs = new THREE.Mesh( bsGeometry, bsMaterial );
  bs.position.x = -1.88;
  bs.position.y = 0.1;
  bs.rotation.z = 0.15;
  modifier.set( curveDownDirection, curveDownAxis, curveDownAngle ).modify(bsGeometry);
  scene.add( bs );
  // bs

  // ms
  const msGeometry = new THREE.TextGeometry( 'MS', {
    font: font,
    size: 0.05,
    height: 0,
    curveSegments: 12,
    bevelThickness: 0,
    bevelSize: 0,
    bevelEnabled: true
  });
  const msMaterial = new THREE.MeshBasicMaterial( { color: 0x815b55 } );
  const ms = new THREE.Mesh( msGeometry, msMaterial );
  ms.position.x = -1.48;
  ms.position.y = 0.25;
  ms.rotation.z = 0.4;
  modifier.set( curveDownDirection, curveDownAxis, curveDownAngle ).modify(msGeometry);
  scene.add( ms );
  // ms

  // phd
  const phdGeometry = new THREE.TextGeometry( 'PhD', {
    font: font,
    size: 0.05,
    height: 0,
    curveSegments: 12,
    bevelThickness: 0,
    bevelSize: 0,
    bevelEnabled: true
  });
  const phdMaterial = new THREE.MeshBasicMaterial( { color: 0x815b55 } );
  const phd = new THREE.Mesh( phdGeometry, phdMaterial );
  phd.position.x = -1.2;
  phd.position.y = 0.55;
  phd.rotation.z = 0.95;
  modifier.set( curveDownDirection, curveDownAxis, curveDownAngle ).modify(phdGeometry);
  scene.add( phd );
  // phd

  // pre school
  const preSchoolGeometry = new THREE.TextGeometry( 'Pre-school', {
    font: font,
    size: 0.045,
    height: 0,
    curveSegments: 12,
    bevelThickness: 0,
    bevelSize: 0,
    bevelEnabled: true
  });
  const preSchoolMaterial = new THREE.MeshBasicMaterial( { color: 0xaa7e44 } );
  const preSchool = new THREE.Mesh( preSchoolGeometry, preSchoolMaterial );
  preSchool.position.x = -2.53;
  preSchool.position.y = 0.95;
  preSchool.rotation.z = -1.2;
  modifier.set( curveDownDirection, curveDownAxis, curveDownAngle ).modify(preSchoolGeometry);
  scene.add( preSchool );
  // pre school

  // elementary school
  const elementarySchoolGeometry = new THREE.TextGeometry( 'Elementary School', {
    font: font,
    size: 0.045,
    height: 0,
    curveSegments: 12,
    bevelThickness: 0,
    bevelSize: 0,
    bevelEnabled: true
  });
  const elementarySchoolMaterial = new THREE.MeshBasicMaterial( { color: 0xaa7e44 } );
  const elementarySchool = new THREE.Mesh( elementarySchoolGeometry, elementarySchoolMaterial );
  elementarySchool.position.x = -2.3;
  elementarySchool.position.y = 0.48;
  elementarySchool.rotation.z = -0.1;
  modifier.set( curveDownDirection, curveDownAxis, curveDownAngle ).modify(elementarySchoolGeometry);
  scene.add( elementarySchool );
  // elementary school

  // middle school
  const middleSchoolGeometry = new THREE.TextGeometry( 'Middle School', {
    font: font,
    size: 0.045,
    height: 0,
    curveSegments: 12,
    bevelThickness: 0,
    bevelSize: 0,
    bevelEnabled: true
  });
  const middleSchoolMaterial = new THREE.MeshBasicMaterial( { color: 0xaa7e44 } );
  const middleSchool = new THREE.Mesh( middleSchoolGeometry, middleSchoolMaterial );
  middleSchool.position.x = -1.55;
  middleSchool.position.y = 0.65;
  middleSchool.rotation.z = 1.25;
  modifier.set( curveDownDirection, curveDownAxis, curveDownAngle ).modify(middleSchoolGeometry);
  scene.add( middleSchool );
  // middle school

  // high school
  const highSchoolGeometry = new THREE.TextGeometry( 'High School', {
    font: font,
    size: 0.045,
    height: 0,
    curveSegments: 12,
    bevelThickness: 0,
    bevelSize: 0,
    bevelEnabled: true
  });
  const highSchoolMaterial = new THREE.MeshBasicMaterial( { color: 0xaa7e44 } );
  const highSchool = new THREE.Mesh( highSchoolGeometry, highSchoolMaterial );
  highSchool.position.x = -1.6;
  highSchool.position.y = 1.35;
  highSchool.rotation.z = 2.6;
  modifier.set( curveDownDirection, curveDownAxis, curveDownAngle ).modify(highSchoolGeometry);
  scene.add( highSchool );
  // high school

  // general education
  const generalEducationGeometry = new THREE.TextGeometry( 'General Education', {
    font: font,
    size: 0.05,
    height: 0,
    curveSegments: 12,
    bevelThickness: 0,
    bevelSize: 0,
    bevelEnabled: true
  });
  const generalEducationMaterial = new THREE.MeshBasicMaterial( { color: 0xaa7e44 } );
  const generalEducation = new THREE.Mesh( generalEducationGeometry, generalEducationMaterial );
  generalEducation.position.x = -2.49;
  generalEducation.position.y = 1.13;
  generalEducation.rotation.z = 0.74;
  modifier.set( curveUpDirection, curveUpAxis, curveUpAngle ).modify(generalEducationGeometry);
  scene.add( generalEducation );
  // general education

  // soft skills
  const softSkillsGeometry = new THREE.TextGeometry( 'Soft Skills', {
    font: font,
    size: 0.058,
    height: 0,
    curveSegments: 12,
    bevelThickness: 0,
    bevelSize: 0,
    bevelEnabled: true
  });
  const softSkillsMaterial = new THREE.MeshBasicMaterial( { color: 0x797b6b } );
  const softSkills = new THREE.Mesh( softSkillsGeometry, softSkillsMaterial );
  softSkills.position.x = -2;
  softSkills.position.y = 1.65;
  softSkills.rotation.z = -0.25;
  modifier.set( curveUpDirection, curveUpAxis, curveUpAngle ).modify(softSkillsGeometry);
  scene.add( softSkills );
  // soft skills

  // professional education
  const professionalEducationGeometry = new THREE.TextGeometry( 'Professional Education', {
    font: font,
    size: 0.065,
    height: 0,
    curveSegments: 12,
    bevelThickness: 0,
    bevelSize: 0,
    bevelEnabled: true
  });
  const professionalEducationMaterial = new THREE.MeshBasicMaterial( { color: 0x856660 } );
  const professionalEducation = new THREE.Mesh( professionalEducationGeometry, professionalEducationMaterial );
  professionalEducation.position.x = -2.85;
  professionalEducation.position.y = 1.3;
  professionalEducation.rotation.z = 0.65;
  modifier.set( curveUpDirection, curveUpAxis, curveUpAngle ).modify(professionalEducationGeometry);
  scene.add( professionalEducation );
  // professional education

  // funding curve up
  const fundingCurveUpGeometry = new THREE.TextGeometry( 'Funding', {
    font: font,
    size: 0.11,
    height: 0,
    curveSegments: 12,
    bevelThickness: 0,
    bevelSize: 0,
    bevelEnabled: true
  });
  const fundingCurveUpMaterial = new THREE.MeshBasicMaterial( { color: 0x464054 } );
  const fundingCurveUp = new THREE.Mesh( fundingCurveUpGeometry, fundingCurveUpMaterial );
  fundingCurveUp.position.x = 2.3;
  fundingCurveUp.position.y = 0.98;
  fundingCurveUp.rotation.z = -0.35;

  modifier.set( curveUpDirection, curveUpAxis, curveUpAngle ).modify(fundingCurveUpGeometry);
  scene.add( fundingCurveUp );
  // funding curve up

  // human capital curve up
  const humanCapitalCurveUpGeometry = new THREE.TextGeometry( 'Human Capital', {
    font: font,
    size: 0.11,
    height: 0,
    curveSegments: 12,
    bevelThickness: 0,
    bevelSize: 0,
    bevelEnabled: true
  });
  const humanCapitalCurveUpMaterial = new THREE.MeshBasicMaterial( { color: 0x464054 } );
  const humanCapitalCurveUp = new THREE.Mesh( humanCapitalCurveUpGeometry, humanCapitalCurveUpMaterial );
  humanCapitalCurveUp.position.x = 3.08;
  humanCapitalCurveUp.position.y = 0.58;
  humanCapitalCurveUp.rotation.z = -1.48;

  modifier.set( curveUpDirection, curveUpAxis, curveUpAngle ).modify(humanCapitalCurveUpGeometry);
  scene.add( humanCapitalCurveUp );
  // human capital curve up

  // infrastructure curve up
  const infrastructureCurveUpGeometry = new THREE.TextGeometry( 'Infrastructure', {
    font: font,
    size: 0.11,
    height: 0,
    curveSegments: 12,
    bevelThickness: 0,
    bevelSize: 0,
    bevelEnabled: true
  });
  const infrastructureCurveUpMaterial = new THREE.MeshBasicMaterial( { color: 0x464054 } );
  const infrastructureCurveUp = new THREE.Mesh( infrastructureCurveUpGeometry, infrastructureCurveUpMaterial );
  infrastructureCurveUp.position.x = 2.95;
  infrastructureCurveUp.position.y = -0.75;
  infrastructureCurveUp.rotation.z = -2.82;

  modifier.set( curveUpDirection, curveUpAxis, curveUpAngle ).modify(infrastructureCurveUpGeometry);
  scene.add( infrastructureCurveUp );
  // infrastructure curve up

  // human capital second curve up
  const humanCapitalSecondCurveUpGeometry = new THREE.TextGeometry( 'Human Capital', {
    font: font,
    size: 0.11,
    height: 0,
    curveSegments: 12,
    bevelThickness: 0,
    bevelSize: 0,
    bevelEnabled: true
  });
  const humanCapitalSecondCurveUpMaterial = new THREE.MeshBasicMaterial( { color: 0x464054 } );
  const humanCapitalSecondCurveUp = new THREE.Mesh( humanCapitalSecondCurveUpGeometry, humanCapitalSecondCurveUpMaterial );
  humanCapitalSecondCurveUp.position.x = -2.99;
  humanCapitalSecondCurveUp.position.y = 1.38;
  humanCapitalSecondCurveUp.rotation.z = 0.72;

  modifier.set( curveUpDirection, curveUpAxis, curveUpAngle ).modify(humanCapitalSecondCurveUpGeometry);
  scene.add( humanCapitalSecondCurveUp );
  // human capital second curve up

  // infrastructure second curve up
  const infrastructureSecondCurveUpGeometry = new THREE.TextGeometry( 'Infrastructure', {
    font: font,
    size: 0.11,
    height: 0,
    curveSegments: 12,
    bevelThickness: 0,
    bevelSize: 0,
    bevelEnabled: true
  });
  const infrastructureSecondCurveUpMaterial = new THREE.MeshBasicMaterial( { color: 0x464054 } );
  const infrastructureSecondCurveUp = new THREE.Mesh( infrastructureSecondCurveUpGeometry, infrastructureSecondCurveUpMaterial );
  infrastructureSecondCurveUp.position.x = -1.95;
  infrastructureSecondCurveUp.position.y = 2.06;
  infrastructureSecondCurveUp.rotation.z = -0.5;

  modifier.set( curveUpDirection, curveUpAxis, curveUpAngle ).modify(infrastructureSecondCurveUpGeometry);
  scene.add( infrastructureSecondCurveUp );
  // infrastructure second curve up

  // curriculum
  const curriculumGeometry = new THREE.TextGeometry( 'Curriculum', {
    font: font,
    size: 0.11,
    height: 0,
    curveSegments: 12,
    bevelThickness: 0,
    bevelSize: 0,
    bevelEnabled: true
  });
  const curriculumMaterial = new THREE.MeshBasicMaterial( { color: 0x464054 } );
  const curriculum = new THREE.Mesh( curriculumGeometry, curriculumMaterial );
  curriculum.position.x = -2.82;
  curriculum.position.y = 0.4;
  curriculum.rotation.z = 1.85;

  modifier.set( curveUpDirection, curveUpAxis, curveUpAngle ).modify(curriculumGeometry);
  scene.add( curriculum );
  // curriculum




  // science around texts
  // science around texts

}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
