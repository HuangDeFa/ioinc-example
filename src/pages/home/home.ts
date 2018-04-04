import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import  * as Three from 'three'
import 'three/examples/js/controls/OrbitControls'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styles:['canvas {width:100%,height:100%}']
})
export class HomePage {
  
  @ViewChild("container") container:ElementRef;

  constructor(public navCtrl: NavController,private element:ElementRef) {
     element.nativeElement;
  }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    let scene=new Three.Scene();
    let camera=new Three.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
    let renderer=new Three.WebGLRenderer();
    renderer.setSize(window.innerWidth,window.innerHeight)
    this.container.nativeElement.appendChild(renderer.domElement);

    let geometry=new Three.BoxGeometry(1,1,1)
    let material=new Three.MeshBasicMaterial({color:0x00ff00})
    let cube=new Three.Mesh(geometry,material);
    scene.add(cube)
    camera.position.z=5;
    renderer.render(scene,camera)
    

    let control =new Three.OrbitControls(camera);
  }

}
