import { ref, useTemplateRef, computed, onMounted } from 'vue';

export default {
  name: 'RadarEffect',
  setup() {
    const radarContainerWidth = ref(0);
    const radarContainerHeight = ref(0);
    const outerStrokeWidth = ref(4);
    const outerDasharray = ref('10 5');
    const stripStrokeWidth = ref(10);
    const stripDasharray = ref('2 1');
    const radarContainer = useTemplateRef('radarContainer');

    const initContainerWH = () => {
      const container = radarContainer.value;
      if (container) {
        radarContainerWidth.value = container.offsetWidth || Number.parseFloat(getComputedStyle(container).width);
        radarContainerHeight.value = container.offsetHeight || Number.parseFloat(getComputedStyle(container).height);
      }
    };

    const resize = () => {
      initContainerWH();
    };

    const linearId = computed(() => Date.now().toString(16));
    const outerRadius = computed(() => Math.min(radarContainerWidth.value, radarContainerHeight.value) * 0.3);
    const stripRadius = computed(() => outerRadius.value * 0.8);
    const innerRadius = computed(() => outerRadius.value * 0.6);
    const centerPoint = computed(() => ({
      x: radarContainerWidth.value / 2,
      y: radarContainerHeight.value / 2
    }));
    const colorLerp = computed(() => ['#0D2961', '#1362E5', '#096087', '#00D1D3']);
    const arcStyle = computed(() => (duration) => ({
      transformOrigin: `${radarContainerWidth.value / 2}px ${radarContainerHeight.value / 2}px`,
      animationDuration: `${duration}s`
    }));
    const dasharray = computed(() => {
      const countRatio = 180 / 400;
      const totalCount = radarContainerWidth.value * countRatio;
      const darc = Math.PI * 2 * stripRadius.value / totalCount;

      return (part = 1, gap = 2) => {
        if (part === 1) {
          return `${darc - gap} ${gap}`;
        }

        const count = part * totalCount;
        const restArc = Math.PI * 2 * stripRadius.value * (1 - count / totalCount);

        const arr = [];
        for (let i = 0; i < count; i++) {
          arr.push(darc - gap);
          if (i < count - 1) {
            arr.push(gap);
          } else {
            arr.push(restArc + gap);
          }
        }

        return arr.join(' ');
      };
    });
    const gStyle = computed(() => ({
      transformOrigin: `${centerPoint.value.x}px ${centerPoint.value.y}px`,
      animationDuration: '10s'
    }));
    const sweepStyle = computed(() => {
      const sweepWidth = innerRadius.value * 2.1;
      return {
        width: `${sweepWidth}px`,
        height: `${sweepWidth}px`,
        x: `${(radarContainerWidth.value - sweepWidth) / 2}px`,
        y: `${(radarContainerHeight.value - sweepWidth) / 2}px`,
        transformOrigin: `${centerPoint.value.x}px ${centerPoint.value.y}px`,
        animationDuration: '10s',
      };
    });

    onMounted(() => {
      initContainerWH();
      window.addEventListener('resize', resize);
    });

    return {
      radarContainerWidth,
      radarContainerHeight,
      outerStrokeWidth,
      outerDasharray,
      stripStrokeWidth,
      stripDasharray,
      initContainerWH,
      resize,
      linearId,
      outerRadius,
      stripRadius,
      innerRadius,
      centerPoint,
      colorLerp,
      arcStyle,
      dasharray,
      gStyle,
      sweepStyle
    };
  }
};