/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/three/build/three.module.js":
/*!**************************************************!*\
  !*** ./node_modules/three/build/three.module.js ***!
  \**************************************************/
/*! exports provided: ACESFilmicToneMapping, AddEquation, AddOperation, AdditiveBlending, AlphaFormat, AlwaysDepth, AlwaysStencilFunc, AmbientLight, AmbientLightProbe, AnimationClip, AnimationLoader, AnimationMixer, AnimationObjectGroup, AnimationUtils, ArcCurve, ArrayCamera, ArrowHelper, Audio, AudioAnalyser, AudioContext, AudioListener, AudioLoader, AxesHelper, AxisHelper, BackSide, BasicDepthPacking, BasicShadowMap, BinaryTextureLoader, Bone, BooleanKeyframeTrack, BoundingBoxHelper, Box2, Box3, Box3Helper, BoxBufferGeometry, BoxGeometry, BoxHelper, BufferAttribute, BufferGeometry, BufferGeometryLoader, ByteType, Cache, Camera, CameraHelper, CanvasRenderer, CanvasTexture, CatmullRomCurve3, CineonToneMapping, CircleBufferGeometry, CircleGeometry, ClampToEdgeWrapping, Clock, ClosedSplineCurve3, Color, ColorKeyframeTrack, CompressedTexture, CompressedTextureLoader, ConeBufferGeometry, ConeGeometry, CubeCamera, CubeGeometry, CubeReflectionMapping, CubeRefractionMapping, CubeTexture, CubeTextureLoader, CubeUVReflectionMapping, CubeUVRefractionMapping, CubicBezierCurve, CubicBezierCurve3, CubicInterpolant, CullFaceBack, CullFaceFront, CullFaceFrontBack, CullFaceNone, Curve, CurvePath, CustomBlending, CylinderBufferGeometry, CylinderGeometry, Cylindrical, DataTexture, DataTexture2DArray, DataTexture3D, DataTextureLoader, DecrementStencilOp, DecrementWrapStencilOp, DefaultLoadingManager, DepthFormat, DepthStencilFormat, DepthTexture, DirectionalLight, DirectionalLightHelper, DirectionalLightShadow, DiscreteInterpolant, DodecahedronBufferGeometry, DodecahedronGeometry, DoubleSide, DstAlphaFactor, DstColorFactor, DynamicBufferAttribute, DynamicCopyUsage, DynamicDrawUsage, DynamicReadUsage, EdgesGeometry, EdgesHelper, EllipseCurve, EqualDepth, EqualStencilFunc, EquirectangularReflectionMapping, EquirectangularRefractionMapping, Euler, EventDispatcher, ExtrudeBufferGeometry, ExtrudeGeometry, Face3, Face4, FaceColors, FaceNormalsHelper, FileLoader, FlatShading, Float32Attribute, Float32BufferAttribute, Float64Attribute, Float64BufferAttribute, FloatType, Fog, FogExp2, Font, FontLoader, FrontFaceDirectionCCW, FrontFaceDirectionCW, FrontSide, Frustum, GammaEncoding, Geometry, GeometryUtils, GreaterDepth, GreaterEqualDepth, GreaterEqualStencilFunc, GreaterStencilFunc, GridHelper, Group, HalfFloatType, HemisphereLight, HemisphereLightHelper, HemisphereLightProbe, IcosahedronBufferGeometry, IcosahedronGeometry, ImageBitmapLoader, ImageLoader, ImageUtils, ImmediateRenderObject, IncrementStencilOp, IncrementWrapStencilOp, InstancedBufferAttribute, InstancedBufferGeometry, InstancedInterleavedBuffer, InstancedMesh, Int16Attribute, Int16BufferAttribute, Int32Attribute, Int32BufferAttribute, Int8Attribute, Int8BufferAttribute, IntType, InterleavedBuffer, InterleavedBufferAttribute, Interpolant, InterpolateDiscrete, InterpolateLinear, InterpolateSmooth, InvertStencilOp, JSONLoader, KeepStencilOp, KeyframeTrack, LOD, LatheBufferGeometry, LatheGeometry, Layers, LensFlare, LessDepth, LessEqualDepth, LessEqualStencilFunc, LessStencilFunc, Light, LightProbe, LightProbeHelper, LightShadow, Line, Line3, LineBasicMaterial, LineCurve, LineCurve3, LineDashedMaterial, LineLoop, LinePieces, LineSegments, LineStrip, LinearEncoding, LinearFilter, LinearInterpolant, LinearMipMapLinearFilter, LinearMipMapNearestFilter, LinearMipmapLinearFilter, LinearMipmapNearestFilter, LinearToneMapping, Loader, LoaderUtils, LoadingManager, LogLuvEncoding, LoopOnce, LoopPingPong, LoopRepeat, LuminanceAlphaFormat, LuminanceFormat, MOUSE, Material, MaterialLoader, Math, Matrix3, Matrix4, MaxEquation, Mesh, MeshBasicMaterial, MeshDepthMaterial, MeshDistanceMaterial, MeshFaceMaterial, MeshLambertMaterial, MeshMatcapMaterial, MeshNormalMaterial, MeshPhongMaterial, MeshPhysicalMaterial, MeshStandardMaterial, MeshToonMaterial, MinEquation, MirroredRepeatWrapping, MixOperation, MultiMaterial, MultiplyBlending, MultiplyOperation, NearestFilter, NearestMipMapLinearFilter, NearestMipMapNearestFilter, NearestMipmapLinearFilter, NearestMipmapNearestFilter, NeverDepth, NeverStencilFunc, NoBlending, NoColors, NoToneMapping, NormalBlending, NotEqualDepth, NotEqualStencilFunc, NumberKeyframeTrack, Object3D, ObjectLoader, ObjectSpaceNormalMap, OctahedronBufferGeometry, OctahedronGeometry, OneFactor, OneMinusDstAlphaFactor, OneMinusDstColorFactor, OneMinusSrcAlphaFactor, OneMinusSrcColorFactor, OrthographicCamera, PCFShadowMap, PCFSoftShadowMap, ParametricBufferGeometry, ParametricGeometry, Particle, ParticleBasicMaterial, ParticleSystem, ParticleSystemMaterial, Path, PerspectiveCamera, Plane, PlaneBufferGeometry, PlaneGeometry, PlaneHelper, PointCloud, PointCloudMaterial, PointLight, PointLightHelper, Points, PointsMaterial, PolarGridHelper, PolyhedronBufferGeometry, PolyhedronGeometry, PositionalAudio, PositionalAudioHelper, PropertyBinding, PropertyMixer, QuadraticBezierCurve, QuadraticBezierCurve3, Quaternion, QuaternionKeyframeTrack, QuaternionLinearInterpolant, REVISION, RGBADepthPacking, RGBAFormat, RGBA_ASTC_10x10_Format, RGBA_ASTC_10x5_Format, RGBA_ASTC_10x6_Format, RGBA_ASTC_10x8_Format, RGBA_ASTC_12x10_Format, RGBA_ASTC_12x12_Format, RGBA_ASTC_4x4_Format, RGBA_ASTC_5x4_Format, RGBA_ASTC_5x5_Format, RGBA_ASTC_6x5_Format, RGBA_ASTC_6x6_Format, RGBA_ASTC_8x5_Format, RGBA_ASTC_8x6_Format, RGBA_ASTC_8x8_Format, RGBA_PVRTC_2BPPV1_Format, RGBA_PVRTC_4BPPV1_Format, RGBA_S3TC_DXT1_Format, RGBA_S3TC_DXT3_Format, RGBA_S3TC_DXT5_Format, RGBDEncoding, RGBEEncoding, RGBEFormat, RGBFormat, RGBM16Encoding, RGBM7Encoding, RGB_ETC1_Format, RGB_PVRTC_2BPPV1_Format, RGB_PVRTC_4BPPV1_Format, RGB_S3TC_DXT1_Format, RawShaderMaterial, Ray, Raycaster, RectAreaLight, RectAreaLightHelper, RedFormat, ReinhardToneMapping, RepeatWrapping, ReplaceStencilOp, ReverseSubtractEquation, RingBufferGeometry, RingGeometry, Scene, SceneUtils, ShaderChunk, ShaderLib, ShaderMaterial, ShadowMaterial, Shape, ShapeBufferGeometry, ShapeGeometry, ShapePath, ShapeUtils, ShortType, Skeleton, SkeletonHelper, SkinnedMesh, SmoothShading, Sphere, SphereBufferGeometry, SphereGeometry, Spherical, SphericalHarmonics3, SphericalReflectionMapping, Spline, SplineCurve, SplineCurve3, SpotLight, SpotLightHelper, SpotLightShadow, Sprite, SpriteMaterial, SrcAlphaFactor, SrcAlphaSaturateFactor, SrcColorFactor, StaticCopyUsage, StaticDrawUsage, StaticReadUsage, StereoCamera, StreamCopyUsage, StreamDrawUsage, StreamReadUsage, StringKeyframeTrack, SubtractEquation, SubtractiveBlending, TOUCH, TangentSpaceNormalMap, TetrahedronBufferGeometry, TetrahedronGeometry, TextBufferGeometry, TextGeometry, Texture, TextureLoader, TorusBufferGeometry, TorusGeometry, TorusKnotBufferGeometry, TorusKnotGeometry, Triangle, TriangleFanDrawMode, TriangleStripDrawMode, TrianglesDrawMode, TubeBufferGeometry, TubeGeometry, UVMapping, Uint16Attribute, Uint16BufferAttribute, Uint32Attribute, Uint32BufferAttribute, Uint8Attribute, Uint8BufferAttribute, Uint8ClampedAttribute, Uint8ClampedBufferAttribute, Uncharted2ToneMapping, Uniform, UniformsLib, UniformsUtils, UnsignedByteType, UnsignedInt248Type, UnsignedIntType, UnsignedShort4444Type, UnsignedShort5551Type, UnsignedShort565Type, UnsignedShortType, VSMShadowMap, Vector2, Vector3, Vector4, VectorKeyframeTrack, Vertex, VertexColors, VertexNormalsHelper, VideoTexture, WebGLMultisampleRenderTarget, WebGLRenderTarget, WebGLRenderTargetCube, WebGLRenderer, WebGLUtils, WireframeGeometry, WireframeHelper, WrapAroundEnding, XHRLoader, ZeroCurvatureEnding, ZeroFactor, ZeroSlopeEnding, ZeroStencilOp, sRGBEncoding */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\r\n\r\nvar TotalVertices=null,Radius=null,prevVertex,prevRadius\r\nvar scene = new three__WEBPACK_IMPORTED_MODULE_0__[\"Scene\"]();\r\nvar mouseDown=0,prevPos=null,nextPos=null\r\n\r\nvar camera =new three__WEBPACK_IMPORTED_MODULE_0__[\"OrthographicCamera\"](-100,100,100,-100,-1000,1000)\r\n\r\nvar renderer = new three__WEBPACK_IMPORTED_MODULE_0__[\"WebGLRenderer\"]({antialias:true});\r\nrenderer.setClearColor(\"#000\");\r\nrenderer.setSize( 925,925 );\r\ndocument.body.appendChild( renderer.domElement );\r\nvar polygon\r\nvertices.oninput = function() {\r\n    prevVertex=TotalVertices\r\n    TotalVertices=vertices.value\r\n};\r\n\r\nradius.oninput = function() {\r\n    prevRadius=Radius\r\n    Radius=radius.value\r\n};\r\n\r\nfunction drawPolygon(){\r\n    if(Radius && TotalVertices && (prevVertex!==TotalVertices || prevRadius!==Radius)){\r\n        var geometry = new three__WEBPACK_IMPORTED_MODULE_0__[\"Geometry\"]();\r\n        var theta=360/TotalVertices\r\n        for(var i=0;i<TotalVertices;i++){\r\n            var theta=(2*Math.PI*i)/TotalVertices\r\n            console.log(\"thete\",theta)\r\n            var x=Radius*Math.cos(theta)\r\n            var y=Radius*Math.sin(theta)\r\n            geometry.vertices.push( new three__WEBPACK_IMPORTED_MODULE_0__[\"Vector3\"](x,y,0))\r\n        }\r\n        for(var i=0;i<TotalVertices;i++){\r\n            for(var j=i+1;j<TotalVertices;j++){\r\n                geometry.faces.push( new three__WEBPACK_IMPORTED_MODULE_0__[\"Face3\"]( i%TotalVertices,(j)%TotalVertices,(j+1)%TotalVertices) );\r\n                //geometry.faces.push( new THREE.Face3( i%TotalVertices,(i+1)%TotalVertices,(i+3)%TotalVertices) );\r\n            }\r\n            \r\n        }\r\n        scene.children=[]\r\n        geometry.computeBoundingSphere();\r\n        var material = new three__WEBPACK_IMPORTED_MODULE_0__[\"MeshBasicMaterial\"]( {color: 0xffff00} );\r\n        polygon = new three__WEBPACK_IMPORTED_MODULE_0__[\"Mesh\"]( geometry, material );\r\n        scene.add(polygon)\r\n        prevVertex=TotalVertices\r\n        prevRadius=Radius\r\n        draw3dPolygon()\r\n    }\r\n\r\n}\r\nfunction draw3dPolygon(){\r\n    for(var i=1;i<=TotalVertices;i++){\r\n        var polygonFace=polygon.clone()\r\n        polygonFace.material.color.setHex(0xff00ff)\r\n        var S =new three__WEBPACK_IMPORTED_MODULE_0__[\"Matrix4\"]().makeScale(-1,1,1)\r\n        var R =new three__WEBPACK_IMPORTED_MODULE_0__[\"Matrix4\"]().makeRotationZ(((Math.PI*2)/TotalVertices)*(i))\r\n        var T =new three__WEBPACK_IMPORTED_MODULE_0__[\"Matrix4\"]().makeTranslation(Radius*2,0,0)\r\n        \r\n        var M=new three__WEBPACK_IMPORTED_MODULE_0__[\"Matrix4\"]()\r\n        M=M.copy(S)\r\n        M=M.multiply(R)\r\n        M=M.multiply(T)\r\n    \r\n        scene.add(polygonFace)\r\n        \r\n        polygonFace.applyMatrix(M)\r\n        polygonFace.verticesNeedUpdate=true\r\n    }\r\n    \r\n    \r\n    //polygonFace.position.x+=Radius*2\r\n    \r\n    //var P=THREE.Matrix4()\r\n    // for(var i=0;i<polygonFace.geometry;i++){\r\n\r\n    // }\r\n    \r\n    //polygonFace.rotation.z+=Math.PI/4\r\n    \r\n    \r\n    console.log(\"vertice\",polygonFace)\r\n}\r\nfunction sin(theta){\r\n    return Math.sin(theta)\r\n}\r\nfunction cos(theta){\r\n    return Math.sin(theta)\r\n}\r\nvar render = function () {\r\n\r\n    requestAnimationFrame( render );\r\n    //if(polygonFace) polygonFace.rotation.z+=0.01\r\n    drawPolygon()\r\n    renderer.render(scene, camera);\r\n};\r\n\r\n\r\ndocument.body.addEventListener('mousedown',function(e){\r\n    var p=getMousePos(e)\r\n    prevPos=p\r\n    mouseDown=1\r\n})\r\ndocument.body.addEventListener('mouseup',function(e){\r\n    mouseDown=0\r\n    prevPos=null\r\n    nextPos=null\r\n})\r\ndocument.body.addEventListener('mousemove',function(e){\r\n    if(mouseDown){\r\n        var p=getMousePos(e)\r\n        nextPos=p\r\n        moveCamera()\r\n    }\r\n})\r\n\r\nfunction getMousePos(e){\r\n    return{\r\n        x:e.clientX,\r\n        y:e.clientY\r\n    }\r\n}\r\nfunction moveCamera(){\r\n    var x=(nextPos.x-prevPos.x)*0.0005\r\n    var y=(nextPos.y-prevPos.y)*0.0005\r\n    \r\n    scene.rotation.y+=x\r\n    scene.rotation.x+=y\r\n}\r\n\r\n\r\nrender();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });