import {Component, ViewChild, ElementRef} from '@angular/core';
import {NavController} from 'ionic-angular';
import {exportFn} from '../../js/example.export.js'
import * as THREE from 'three'
import {OrbitControls} from 'three-orbitcontrols'
import {consoleExt} from '../../js/example.js'

@Component({selector: 'page-home', templateUrl: 'home.html'})
export class HomePage {

  @ViewChild('container')
  container : ElementRef;
  constructor(public navCtrl : NavController) {
    exportFn("this export msg")
    console.log(consoleExt)
    console.log(OrbitControls)
  }

  ngOnInit() : void {
    /*var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    this.container.nativeElement.appendChild(renderer.domElement)

    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
    var controls = new THREE.OrbitControls( camera );
    camera.position.z = 5;
    renderer.render(scene, camera);*/
    this.orbitControlsExample();
  }

  renderer:any;
  controls:any;
  scene:any;
  public camera:any;

  orbitControlsExample() {
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.container.nativeElement
      .appendChild(this.renderer.domElement);

    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);

    this.controls = new OrbitControls(this.camera);

    // controls.update() must be called after any manual changes to the camera's
    // transform
   this.camera
      .position
      .set(0, 20, 100);
    this.controls.update();
    this. renderer.render(this.scene, this.camera);
    //this.animate();
  }

  animate(){
    requestAnimationFrame(this.animate);
     // required if controls.enableDamping or controls.autoRotate are set to true
     this.controls.update();

     this. renderer.render(this.scene, this.camera);
  }
}
