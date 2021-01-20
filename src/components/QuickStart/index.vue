<template>
  <div id="test-container" :ref="setRef"></div>
</template>
<script>
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import Stats from 'three/examples/jsm/libs/stats.module.js';
import { onMounted } from 'vue'
const textureUrl = require('assets/img/football.jpg')

export default {
  name: 'QuickStart',
  setup() {
    let domRef = null
    const setRef = el => {
      domRef = el
    }

    const state = {
      scene : null,
      camera: null,
      renderer: null,
      ball: null,
      controls: null,
      stats: null
    }

    const render = () => {
      requestAnimationFrame(render)
      state.ball.rotation.x += 0.02
      state.ball.rotation.y += 0.01

      state.stats.update()
      state.renderer.render(state.scene, state.camera)
    }
    
    const addStats = () => {
      state.stats = new Stats();
      state.stats.domElement.style.position = 'absolute';
      state.stats.domElement.style.left = '2px';
      state.stats.domElement.style.top = '2px';
      document.getElementById("test-container").appendChild(state.stats.domElement)
    }

    const addLight = () => {
      const pointLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 1);
      pointLight.position.set( 60, 80, 10 );
      state.scene.add( pointLight );
    }

    const addGrid = () => {
      const geometry = new THREE.Geometry()
      geometry.vertices.push(...[
        new THREE.Vector3(0, 0, -100),
        new THREE.Vector3(0, 0, 100)
      ])
      
      const material = new THREE.LineBasicMaterial({
        color: 0xcccccc,
        linewidth: 1
      })
      for (let i = 0; i <= 20; i++) {
        const yAxisH = new THREE.Line(geometry, material)
        yAxisH.position.x = (i * 10) - 100
        state.scene.add(yAxisH)

        const yAxisV = new THREE.Line(geometry, material)
        yAxisV.position.z = (i * 10) - 100
        yAxisV.rotation.y = 90 * Math.PI / 180
        state.scene.add(yAxisV)
      }
    }

    const loadTexture = () => {
      return new THREE.TextureLoader()
    }

    const addCube = (texture) => {
      const boxHeight = 50
      const geometry = new THREE.SphereBufferGeometry(boxHeight, boxHeight * 1.25, boxHeight * 1.25)
      const material = new THREE.MeshStandardMaterial({ map: texture, roughness: 0.5})
      state.ball = new THREE.Mesh(geometry, material)
      state.ball.position.set(0, Math.ceil(boxHeight / 2), 0)

      state.scene.add(state.ball)
    }
    

    onMounted(() => {

      const width = domRef.offsetWidth || 0
      const height = domRef.offsetHeight|| 0

      state.renderer = new THREE.WebGLRenderer({alpha: true, antialias:true})
      state.renderer.setSize( width, height );
      document.getElementById("test-container").appendChild(state.renderer.domElement)

      state.camera = new THREE.PerspectiveCamera(45, width/height, 1, 1000)
      state.camera.position.set(200, 200, 200)
      state.camera.lookAt(0, 0, 0)

      state.scene = new THREE.Scene()

      state.controls = new OrbitControls( state.camera, state.renderer.domElement );
      state.controls.minDistance = 10;
      state.controls.maxDistance = 500;
      state.controls.maxPolarAngle = Math.PI / 2;

      addStats()

      // 添加环境光
      addLight()

      // 添加网格
      addGrid()

      // 添加立方体
      loadTexture().load(textureUrl, function(texture) {
        addCube(texture)

        render()
      })
    })

    return {
      setRef
    }
  }

}
</script>
<style lang="less" scoped>

</style>