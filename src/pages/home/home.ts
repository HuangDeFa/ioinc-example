import { HttpClient } from '@angular/common/http';
import {Component, ViewChild, ElementRef} from '@angular/core';
import {NavController, ActionSheetController, IonicPage, Slides, InfiniteScroll} from 'ionic-angular';
import {ExampleExport,ExampleExport2,ExampleExport3} from '../../js/example.export'
import * as THREE from 'three'
import {OrbitControls} from '../../js/three-orbitcontrols'
import {ExampleModule} from '../../js/example'
import { ArticleService } from '../../services/Article.service';


@Component({selector: 'page-home', templateUrl: 'home.html',styleUrls:[],providers:[ArticleService]})
export class HomePage {
  
 // @ViewChild("container") container:ElementRef;
 // @ViewChild("stlViewer") stlViewer:ElementRef;
  ListItems:Array<string>=[];
  banners=[];
  @ViewChild('banner')
  slides:Slides;
  isAfterViewInit=false;
  activeBannerIndex:number;
  constructor(public navCtrl : NavController,public actionSheetController:ActionSheetController,
    private http:HttpClient,private articleService:ArticleService) {
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
    for(let i=0;i<20;i++){
    this.ListItems.push("Ionic UIComponent ");
    this.ListItems.push("ThreeJs Sample");
    }
  }

  listItemSelected(item:string){
     let sheet =this.actionSheetController.create({
       title:item,
       subTitle:'this SubTitle of '+item,
       enableBackdropDismiss:true,
       buttons:[
         {
           text:'Wang Ni Ma',
         },"Cancel"
       ]
     })
     sheet.present()
  }

  ngAfterViewInit() {
    this.isAfterViewInit=true;
    if(this.banners.length>0){
    this.slides.autoplay=500;  
    this.slides.startAutoplay();
    }
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
    //this.orbitControlsExample();

    this.http.get("http://www.wanandroid.com/banner/json").toPromise().then(data=>{
            
      if(data.hasOwnProperty('data')){
          console.log(data)
          this.banners=data['data']
          this.activeBannerIndex=this.banners[0].id;
          if(this.isAfterViewInit){
            this.slides.autoplay=500;  
            this.slides.startAutoplay();
          }
      }
     }).catch(error=>console.log(error))
     this.loadArticles();
  }

  renderer:THREE.WebGLRenderer;
  controls:OrbitControls;
  scene:THREE.Scene;
  public camera:THREE.Camera;

  orbitControlsExample() {
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio)
   // this.container.nativeElement
   //   .appendChild(this.renderer.domElement);

    this.scene = new THREE.Scene();
    this.scene.background=new THREE.Color(0xcccccc);
    this.scene.fog=new THREE.FogExp2(0xcccccc,0.002);


    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
    this.camera.position.set(400,200,0)

    this.controls = new OrbitControls(this.camera);
    this.controls.enableDamping=true;
    this.controls.dampingFactor=0.25;
    this.controls.minDistance=100;
    this.controls.maxDistance=500;
    this.controls.maxPolarAngle=Math.PI/2;

    let geometry=new THREE.CylinderGeometry(0,10,30,4,1);
    let material = new THREE.MeshPhongMaterial({color:0xffffff,flatShading:true})
    for(let i=0;i<500;i++){
      let mesh=new THREE.Mesh(geometry,material)
      mesh.position.x=Math.random()*1600-800;
      mesh.position.y=0;
      mesh.position.z=Math.random()*1600-800;
      mesh.updateMatrix();
      mesh.matrixAutoUpdate=false;
      this.scene.add(mesh)
    }

    let light=new THREE.DirectionalLight(0xffffff)
    light.position.set(1,1,1)
    this.scene.add(light)

    light=new THREE.DirectionalLight(0x002288);
    light.position.set(-1,-1,-1)
    this.scene.add(light)

    light=new THREE.DirectionalLight(0x222222);
    this.scene.add(light)

  //  this.container.nativeElement.addEventListener('resize',this.onWindowResize,false)
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

  onWindowResize():void{
    this.camera.updateMatrix();
    this.renderer.setSize(window.innerWidth,window.innerHeight)
  }

  initStl():void{
    let textTure =new THREE.Texture()
  }

  simpleBox(){
    let box=new THREE.BoxGeometry(100,100,100);
    let secen=new THREE.Scene();
     
  }

  slideChange(){
    this.activeBannerIndex=this.banners[this.slides.getActiveIndex()].id;
    console.log(this.slides.getActiveIndex());
  }

  indicatorSelected(id:number){
    this.activeBannerIndex=id;
    let index;
    this.banners.forEach((v,i,arr)=>{
      if(v.id==id){
        index=i;
        return;
      }
    })
    this.slides.slideTo(index);
  }

  //加载首页的文章列表
  currentPageIndex=0;
  articles=[];
  loadArticles(callback?:()=>void){
    this.articleService.getArticles(this.currentPageIndex.toString(),(result)=>{
      result.data.datas.forEach(d=>{
        this.articles.push(d);
      })
      if(callback!=null){
        callback();
      }
    })
  }

  doInfinite(infiniter:InfiniteScroll){
    ++this.currentPageIndex;
    this.loadArticles(()=>{
     infiniter.complete();
    });
  }
}
