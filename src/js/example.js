function ExampleModule(){
 
  this.warnConsole=function(msg){
  console.warn("ExampleModule-->" +msg); 
  }

  this.sayHello=function(name){
    console.log("Hello "+name);
  }
}

ExampleModule.prototype.constructor=ExampleModule;
Object.defineProperties(ExampleModule.prototype,{
  value:{
    get:function(){
       return this.value;
    },
    set:function(value){
        this.value=value;
    }
  }
})

export {ExampleModule}