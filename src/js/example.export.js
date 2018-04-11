var ExampleExport=(function(){
    function ExampleExport(){
             
    }
    ExampleExport.prototype.exportFn=function(msg){
        console.log("ExampleExport-->"+msg)
    }
    return ExampleExport;
})();

function ExampleExport2(){
 this.sayHi=function(msg){
     console.log("ExampleExport2-->Hi "+msg)
 }
}

var ExampleExport3 = function(){
    function showAddress(){
      console.log("show ExampleExport3 address")
    }
    this.sayHi=function(msg){
     console.log("ExampleExport3--> Hi "+msg)
     showAddress();
    }
}

export {ExampleExport,ExampleExport2,ExampleExport3}