<template>
  <div class="radar-effect">
    <div
      ref="radarContainer"
      class="img-container"
    >
      <svg
        width="100%"
        height="100%"
      >
        <defs>
          <linearGradient
            :id="`outer-gradient-${linearId}`"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop
              class="start"
              offset="0%"
              :stop-color="colorLerp[0]"
            />
            <stop
              class="end"
              offset="49%"
              :stop-color="colorLerp[0]"
            />
            <stop
              class="end"
              offset="51%"
              :stop-color="colorLerp[1]"
            />
            <stop
              class="end"
              offset="100%"
              :stop-color="colorLerp[1]"
            />
          </linearGradient>
          <filter
            :id="`arcOuterLight-${linearId}`"
            x="0"
            y="0"
            width="200%"
            height="200%"
          >
            <feGaussianBlur
              result="blurOut"
              stdDeviation="4"
            />
            <feBlend
              in="SourceGraphic"
              in2="blurOut"
              mode="normal"
            />
          </filter>
        </defs>
        <g
          :style="gStyle"
          class="rotate"
        >
          <circle
            :cx="centerPoint.x"
            :cy="centerPoint.y"
            :r="outerRadius"
            fill="transparent"
            :stroke="`url(#outer-gradient-${linearId})`"
            :stroke-width="outerStrokeWidth"
            :stroke-dasharray="outerDasharray"
          />
        </g>
        <g :style="gStyle">
          <circle
            :cx="centerPoint.x"
            :cy="centerPoint.y"
            :r="stripRadius"
            fill="transparent"
            :stroke="colorLerp[0]"
            :stroke-width="stripStrokeWidth"
            :stroke-dasharray="dasharray(1)"
            class="stripBg"
          />
          <circle
            :cx="centerPoint.x"
            :cy="centerPoint.y"
            :r="stripRadius"
            fill="transparent"
            :stroke="colorLerp[2]"
            :stroke-width="stripStrokeWidth"
            :stroke-dasharray="dasharray(0.25)"
            :style="arcStyle(10)"
            class="stripArc rotate-inv"
          />

          <circle
            :cx="centerPoint.x"
            :cy="centerPoint.y"
            :r="innerRadius"
            fill="transparent"
            :stroke="colorLerp[0]"
            stroke-width="2"
            class="innerCircleBg"
          />
          <circle
            :cx="centerPoint.x"
            :cy="centerPoint.y"
            :r="innerRadius"
            fill="transparent"
            :stroke="colorLerp[1]"
            stroke-width="4"
            :stroke-dasharray="dasharray(0.18,0)"
            :style="arcStyle(5)"
            :filter="`url(#arcOuterLight-${linearId})`"
            class="innerCircleArcLight rotate"
          />
          <circle
            :cx="centerPoint.x"
            :cy="centerPoint.y"
            :r="innerRadius"
            fill="transparent"
            :stroke="colorLerp[3]"
            stroke-width="2"
            :stroke-dasharray="dasharray(0.18,0)"
            :style="arcStyle(5)"
            class="innerCircleArc rotate"
          />

          <image 
            xlink:href="./img/sweep0.png"
            class="rotate-inv"
            :style="sweepStyle"
          />
        </g>
      </svg>
    </div>
  </div>
</template>

<script src="./script.js"></script>
<style lang="less" scoped src="./style.less"></style>
