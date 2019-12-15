import * as THREE from "three"

var TotalVertices=null,Radius=null,prevVertex,prevRadius
var scene = new THREE.Scene();
var mouseDown=0,prevPos=null,nextPos=null

var camera =new THREE.OrthographicCamera(-100,100,100,-100,-1000,1000)

var renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setClearColor("#000");
renderer.setSize( 925,925 );
document.body.appendChild( renderer.domElement );
var polygon
vertices.oninput = function() {
    prevVertex=TotalVertices
    TotalVertices=vertices.value
};

radius.oninput = function() {
    prevRadius=Radius
    Radius=radius.value
    //drawPolygon()
};

function drawPolygon(){
    if(Radius && TotalVertices && (prevVertex!==TotalVertices || prevRadius!==Radius)){
        var geometry = new THREE.Geometry();
        var theta=360/TotalVertices
        for(var i=0;i<TotalVertices;i++){
            var x=Radius*Math.cos((2*Math.PI*i)/TotalVertices)
            var y=Radius*Math.sin((2*Math.PI*i)/TotalVertices)
            geometry.vertices.push( new THREE.Vector3(x,y,0))
        }
        for(var i=0;i<TotalVertices;i++){
            for(var j=i+1;j<TotalVertices;j++){
                geometry.faces.push( new THREE.Face3( i%TotalVertices,(j)%TotalVertices,(j+1)%TotalVertices) );
                //geometry.faces.push( new THREE.Face3( i%TotalVertices,(i+1)%TotalVertices,(i+3)%TotalVertices) );
            }
            
        }
        scene.children=[]
        geometry.computeBoundingSphere();
        var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
        polygon = new THREE.Mesh( geometry, material );
        scene.add(polygon)
        prevVertex=TotalVertices
        prevRadius=Radius
        draw3dPolygon()
    }

}
function draw3dPolygon(){
    for(var i=1;i<=TotalVertices;i++){
        console.log("i",i)
        var polygonFace=polygon.clone()
        console.log("poly",polygonFace)
        polygonFace.material.color.setHex(0xff00ff)
        var R =new THREE.Matrix4().makeRotationZ(((Math.PI*2)/5)*(i))
        var T =new THREE.Matrix4().makeTranslation(Radius*2,0,0)
    
        var M=new THREE.Matrix4()
        M=M.copy(R)
        M=M.multiply(T)
    
        scene.add(polygonFace)
        
        polygonFace.applyMatrix(M)
        polygonFace.verticesNeedUpdate=true
    }
    
    
    //polygonFace.position.x+=Radius*2
    
    //var P=THREE.Matrix4()
    // for(var i=0;i<polygonFace.geometry;i++){

    // }
    
    //polygonFace.rotation.z+=Math.PI/4
    
    
    console.log("vertice",polygonFace)
}
function RotationZ(theta){
    theta=theta*(180/Math.PI)
    console.log(theta)
    var R=new THREE.Matrix4()
    R.set(
        cos(theta), -1*sin(theta),  0,  0,
        sin(theta), cos(theta),     0,  0,
        0,          0,              1,  0,
        0,          0,              0,  1)
        console.log("R",R)
    return R
}
function sin(theta){
    return Math.sin(theta)
}
function cos(theta){
    return Math.sin(theta)
}
var render = function () {

    requestAnimationFrame( render );
    //if(polygonFace) polygonFace.rotation.z+=0.01
    drawPolygon()
    renderer.render(scene, camera);
};


document.body.addEventListener('mousedown',function(e){
    var p=getMousePos(e)
    prevPos=p
    mouseDown=1
})
document.body.addEventListener('mouseup',function(e){
    mouseDown=0
    prevPos=null
    nextPos=null
})
document.body.addEventListener('mousemove',function(e){
    if(mouseDown){
        var p=getMousePos(e)
        nextPos=p
        moveCamera()
    }
})

function getMousePos(e){
    return{
        x:e.clientX,
        y:e.clientY
    }
}
function moveCamera(){
    var x=(nextPos.x-prevPos.x)*0.0005
    var y=(nextPos.y-prevPos.y)*0.0005
    
    scene.rotation.y+=x
    scene.rotation.x+=y
}


render();