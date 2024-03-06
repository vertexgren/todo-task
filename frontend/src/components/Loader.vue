<style scoped>
.loader {
  animation: loader 1.5s linear infinite;
}
@keyframes loader {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
<template>
  <div
    class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center"
  >
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 24 24">
        <circle cx="12" cy="2" r="0" fill="#ffff">
          <animate
            attributeName="r"
            begin="0"
            calcMode="spline"
            dur="1s"
            keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
            repeatCount="indefinite"
            values="0;2;0;0"
          />
        </circle>
        <circle cx="12" cy="2" r="0" fill="#ffff" transform="rotate(45 12 12)">
          <animate
            attributeName="r"
            begin="0.125s"
            calcMode="spline"
            dur="1s"
            keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
            repeatCount="indefinite"
            values="0;2;0;0"
          />
        </circle>
        <circle cx="12" cy="2" r="0" fill="#ffff" transform="rotate(90 12 12)">
          <animate
            attributeName="r"
            begin="0.25s"
            calcMode="spline"
            dur="1s"
            keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
            repeatCount="indefinite"
            values="0;2;0;0"
          />
        </circle>
        <circle cx="12" cy="2" r="0" fill="#ffff" transform="rotate(135 12 12)">
          <animate
            attributeName="r"
            begin="0.375s"
            calcMode="spline"
            dur="1s"
            keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
            repeatCount="indefinite"
            values="0;2;0;0"
          />
        </circle>
        <circle cx="12" cy="2" r="0" fill="#ffff" transform="rotate(180 12 12)">
          <animate
            attributeName="r"
            begin="0.5s"
            calcMode="spline"
            dur="1s"
            keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
            repeatCount="indefinite"
            values="0;2;0;0"
          />
        </circle>
        <circle cx="12" cy="2" r="0" fill="#ffff" transform="rotate(225 12 12)">
          <animate
            attributeName="r"
            begin="0.625s"
            calcMode="spline"
            dur="1s"
            keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
            repeatCount="indefinite"
            values="0;2;0;0"
          />
        </circle>
        <circle cx="12" cy="2" r="0" fill="#ffff" transform="rotate(270 12 12)">
          <animate
            attributeName="r"
            begin="0.75s"
            calcMode="spline"
            dur="1s"
            keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
            repeatCount="indefinite"
            values="0;2;0;0"
          />
        </circle>
        <circle cx="12" cy="2" r="0" fill="#ffff" transform="rotate(315 12 12)">
          <animate
            attributeName="r"
            begin="0.875s"
            calcMode="spline"
            dur="1s"
            keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
            repeatCount="indefinite"
            values="0;2;0;0"
          />
        </circle>
      </svg>
    </div>
  </div>
</template>
