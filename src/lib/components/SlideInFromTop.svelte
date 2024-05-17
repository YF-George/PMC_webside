<!-- SlideInFromTop.svelte -->
<script>
    export let delay = 0;
  </script>
  
  <style>
    .slide-in {
      animation: slideInFromTop 0.5s ease-out both;
    }
  
    @keyframes slideInFromTop {
      0% {
        transform: translateY(-100%);
        opacity: 0;
      }
      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }
  </style>
  
  <div class="slide-in" style="animation-delay: {delay}s;">
    <slot></slot>
  </div>
  