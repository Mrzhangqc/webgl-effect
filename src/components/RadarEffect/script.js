import Border from '../Border'

export default {
  name: 'RadarEffect',
  props: ['position'],
  components: {
    Border
  },
  data() {
    return {
      radarContainerWidth: 0,
      radarContainerHeight: 0,
      outerStrokeWidth: 4,
      outerDasharray: '10 5',
      stripStrokeWidth: 10,
      stripDasharray: '2 1',
    }
  },

  mounted() {
    this.$nextTick(() => {
      this.initContainerWH();
    })
  },

  methods: {
    initContainerWH() {
      const container = this.$refs.radarContainer

      if (container) {
        this.radarContainerWidth = container.offsetWidth ||
          Number.parseFloat((getComputedStyle(container).width));
        this.radarContainerHeight = container.offsetHeight ||
          Number.parseFloat((getComputedStyle(container).height));
      }
    },

    resize() {
      this.initContainerWH()
    }
  },

  computed: {
    linearId() {
      return Date.now().toString(16)
    },
    outerRadius() {
      return Math.min(this.radarContainerWidth, this.radarContainerHeight) * 0.3;
    },
    stripRadius() {
      return this.outerRadius * 0.8
    },
    innerRadius() {
      return this.outerRadius * 0.6
    },
    centerPoint() {
      return {
        x: this.radarContainerWidth / 2,
        y: this.radarContainerHeight / 2
      }
    },
    colorLerp() {
      //circleColorBg, outerColorLight, stripColorLight, innerCircleLight
      return ['#0D2961', '#1362E5', '#096087', '#00D1D3']
    },
    arcStyle() {
      return (duration) => {
        return {
          transformOrigin: `${this.radarContainerWidth / 2}px ${this.radarContainerHeight / 2}px`,
          animationDuration: `${duration}s`
        }
      }
    },
    dasharray() {
      const countRatio = 180 / 400
      const totalCount = this.radarContainerWidth * countRatio;
      const darc = Math.PI * 2 * this.stripRadius / totalCount;

      return (part = 1, gap = 2) => {
        if (part === 1) {
          return `${darc - gap} ${gap}`
        }

        const count = part * totalCount;
        const restArc = Math.PI * 2 * this.stripRadius * (1 - count / totalCount);

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
      }
    },
    gStyle() {
      return {
        transformOrigin: `${this.centerPoint.x}px ${this.centerPoint.y}px`,
        animationDuration: '10s'
      };
    },
    sweepStyle() {
      const sweepWidth = this.innerRadius * 2.1
      return {
        width: `${sweepWidth}px`,
        height: `${sweepWidth}px`,
        x: `${(this.radarContainerWidth - sweepWidth) / 2}px`,
        y: `${(this.radarContainerHeight - sweepWidth) / 2}px`,
        transformOrigin: `${this.centerPoint.x}px ${this.centerPoint.y}px`,
        animationDuration: '10s',
      };
    },
  }
}