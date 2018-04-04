import {Component, ViewChild, ElementRef} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ExampleExport,ExampleExport2,ExampleExport3} from '../../js/example.export'
import * as THREE from 'three'
import {OrbitControls} from 'three-orbitcontrols'
import {ExampleModule} from '../../js/example'


@Component({selector: 'page-home', templateUrl: 'home.html'})
export class HomePage {
  
  @ViewChild("container") container:ElementRef;

  constructor(public navCtrl : NavController) {
    let example=new ExampleExport();
    example.exportFn("this exmple msg")
    let example1=new ExampleModule();
    example1.sayHello("wang Ni Ma")
    example1.warnConsole("Warn Message")
    console.log(example1)
    console.log(OrbitControls)

    let e2=new ExampleExport2();
    e2.sayHi("cao ni ma")

    let e3=new ExampleExport3();
    e3.sayHi("cao ni ma")
    THREE.STLLoader
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

  renderer:THREE.Renderer;
  controls:OrbitControls;
  scene:THREE.Scene;
  public camera:THREE.Camera;

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
    let animate=()=>{
      requestAnimationFrame(animate);
      this.controls.update();
      this.renderer.render(this.scene,this.camera);
    }
    animate();
  }

}
