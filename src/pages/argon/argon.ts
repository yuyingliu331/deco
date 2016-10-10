import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

declare var THREE;

@Component({
  templateUrl: 'argon.html',
  styleUrls: ['/pages/argon/argon.scss']
})

export class ArgonPage {

  constructor(public navCtrl: NavController, params: NavParams){
    var container;
    var camera, scene, renderer;
    var cube, plane;
    var targetRotation = 0;
    var targetRotationOnMouseDown = 0;
    var mouseX = 0;
    var mouseXOnMouseDown = 0;
    var windowHalfX = window.innerWidth / 2;
    var windowHalfY = window.innerHeight / 2;
    init();
    animate();
    function init() {
      container = document.createElement( 'div' );
      document.body.appendChild( container );
      var info = document.createElement( 'div' );
      info.style.position = 'absolute';
      info.style.top = '10px';
      info.style.width = '100%';
      info.style.textAlign = 'center';
      info.innerHTML = 'Drag to spin the cube';
      container.appendChild( info );
      camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
      camera.position.y = 150;
      camera.position.z = 500;
      scene = new THREE.Scene();
      // Cube
      var geometry = new THREE.BoxGeometry( 200, 200, 200 );
      for ( var i = 0; i < geometry.faces.length; i += 2 ) {
        var hex = Math.random() * 0xffffff;
        geometry.faces[ i ].color.setHex( hex );
        geometry.faces[ i + 1 ].color.setHex( hex );
      }
      var material = new THREE.MeshBasicMaterial( { vertexColors: THREE.FaceColors, overdraw: 0.5 } );
      cube = new THREE.Mesh( geometry, material );
      cube.position.y = 150;
      scene.add( cube );
      // Plane
      var geometry2 = new THREE.PlaneBufferGeometry( 200, 200 );
      geometry2.rotateX( - Math.PI / 2 );
      var material2 = new THREE.MeshBasicMaterial( { color: 0xe0e0e0, overdraw: 0.5 } );
      plane = new THREE.Mesh( geometry2, material2 );
      scene.add( plane );
      renderer = new THREE.CanvasRenderer({alpha: true});
      // renderer.setClearColor( 0xf0f0f0 );
      renderer.setClearColor( 0xffffff, 0);
      renderer.setPixelRatio( window.devicePixelRatio );
      renderer.setSize( window.innerWidth, window.innerHeight );
      container.appendChild( renderer.domElement );
      document.addEventListener( 'mousedown', onDocumentMouseDown, false );
      document.addEventListener( 'touchstart', onDocumentTouchStart, false );
      document.addEventListener( 'touchmove', onDocumentTouchMove, false );
      //
      window.addEventListener( 'resize', onWindowResize, false );
    }
    function onWindowResize() {
      windowHalfX = window.innerWidth / 2;
      windowHalfY = window.innerHeight / 2;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize( window.innerWidth, window.innerHeight );
    }
    //
    function onDocumentMouseDown( event ) {
      event.preventDefault();
      document.addEventListener( 'mousemove', onDocumentMouseMove, false );
      document.addEventListener( 'mouseup', onDocumentMouseUp, false );
      document.addEventListener( 'mouseout', onDocumentMouseOut, false );
      mouseXOnMouseDown = event.clientX - windowHalfX;
      targetRotationOnMouseDown = targetRotation;
    }
    function onDocumentMouseMove( event ) {
      mouseX = event.clientX - windowHalfX;
      targetRotation = targetRotationOnMouseDown + ( mouseX - mouseXOnMouseDown ) * 0.02;
    }
    function onDocumentMouseUp( event ) {
      document.removeEventListener( 'mousemove', onDocumentMouseMove, false );
      document.removeEventListener( 'mouseup', onDocumentMouseUp, false );
      document.removeEventListener( 'mouseout', onDocumentMouseOut, false );
    }
    function onDocumentMouseOut( event ) {
      document.removeEventListener( 'mousemove', onDocumentMouseMove, false );
      document.removeEventListener( 'mouseup', onDocumentMouseUp, false );
      document.removeEventListener( 'mouseout', onDocumentMouseOut, false );
    }
    function onDocumentTouchStart( event ) {
      if ( event.touches.length === 1 ) {
        event.preventDefault();
        mouseXOnMouseDown = event.touches[ 0 ].pageX - windowHalfX;
        targetRotationOnMouseDown = targetRotation;
      }
    }
    function onDocumentTouchMove( event ) {
      if ( event.touches.length === 1 ) {
        event.preventDefault();
        mouseX = event.touches[ 0 ].pageX - windowHalfX;
        targetRotation = targetRotationOnMouseDown + ( mouseX - mouseXOnMouseDown ) * 0.05;
      }
    }
    //
    function animate() {
      requestAnimationFrame( animate );
      render();
    }
    function render() {
      plane.rotation.y = cube.rotation.y += ( targetRotation - cube.rotation.y ) * 0.05;
      renderer.render( scene, camera );
    }
  }

  ngOnInit() {
    let tapEnabled = false;
    let dragEnabled = false;
    let toBack = true;
    let rect = {
      x: 0,
      y: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };

  }

  refresh(){
    window['location'].reload();
  }

}
