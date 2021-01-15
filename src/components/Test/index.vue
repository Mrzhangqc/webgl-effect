<template>
  <div class="test">
    <div id="test-container"></div>
  </div>
</template>
<script>
import * as THREE from 'three'

export default {
  name: 'Test',
  data() {
    return {
      scene : null,
      camera: null,
      renderer: null,
      cube: null
    }
  },
  methods: {
    animate() {
      requestAnimationFrame( this.animate );
      this.cube.rotation.x += 0.01;
      this.cube.rotation.y += 0.01;
      this.renderer.render( this.scene, this.camera );
    }
  },
  mounted() {

    const width = this.$el.offsetWidth || 0
    const height = this.$el.offsetHeight|| 0

    this.scene = new THREE.Scene()
    this.camera = new THREE.PerspectiveCamera(75, width/height, 0.1, 1000)
    this.renderer = new THREE.WebGLRenderer()
    this.renderer.setSize(width, height)

    document.getElementById("test-container").appendChild(this.renderer.domElement)

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const cube = new THREE.Mesh( geometry, material );
    this.cube = cube
    this.scene.add( this.cube );

    this.camera.position.z = 5;

    // this.animate();
  }

}
</script>
<style lang="less" scoped>

</style>