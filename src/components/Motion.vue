<script setup>
  import { defineProps, onMounted, computed } from 'vue';
  const props = defineProps({
    position: {
      type: Object,
      default: () => ({
        width: '400px',
        height: '400px'
      })
    }
  });

  const ballRadius = 8;
  const padding = 10;
  let t = 0;
  const speed = 0.004;
  const animateLoop = true;
  const containerWidth = computed(() => parseFloat(props.position.width));
  const containerHeight = computed(() => parseFloat(props.position.height));

  const getPoint = (w,h) => {
    const realW = w - padding * 2;
    const realH = h - padding * 2;

    return {
      start: [padding, realH],
      control: [realW / 2, padding + ballRadius * 2],
      end: [realW, realH],
    };
  };

  const getCurvePoint = (point, t) => {
    const { start, control, end } = point;
    const x = Math.pow(1 - t, 2) * start[0] + 2 * t * (1 - t) * control[0] + Math.pow(t, 2) * end[0];
    const y = Math.pow(1 - t, 2) * start[1] + 2 * t * (1 - t) * control[1] + Math.pow(t, 2) * end[1];

    return { x, y };
  };

  const resize = () => {
    const canvas = document.getElementById('motion-canvas');
    canvas.width = containerWidth.value;
    canvas.height = containerHeight.value;
  };

  const drawPath = (point = {}) => {
    const { start, control, end } = point;
    const canvas = document.getElementById('motion-canvas');
    const ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(...start);
    ctx.quadraticCurveTo(...control, ...end);

    ctx.strokeStyle = '#156dff';
    ctx.lineWidth = 2;
    ctx.imageSmoothingEnabled = true;
    ctx.stroke();
  };

  const drawBall = (point = {}) => {
    const canvas = document.getElementById('motion-canvas');
    const ctx = canvas.getContext('2d');
    const { x, y } = getCurvePoint(point, t);
    
    ctx.beginPath();
    ctx.moveTo(...point.start);
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = 'red';
    ctx.fill();
  };

  const animate = (point = {}) => {
    const canvas = document.getElementById('motion-canvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, containerWidth.value, containerHeight.value);
    
    drawPath(point);
    drawBall(point);

    t += speed;
    if (animateLoop && t > 1) t = 0;
    if (t <= 1) {
      requestAnimationFrame(() => animate(point));
    }
  };

  onMounted(() => {
    const point = getPoint(containerWidth.value, containerHeight.value);
    resize();
    animate(point);
  });
</script>

<template>
  <div style="width: 100%; height: 100%;">
    <canvas
      id="motion-canvas" 
      width="100%" 
      height="100%"
    />
  </div>
</template>
