<script>
    import { onMount } from 'svelte';
  
    export let delay = 0;
    export let duration = 500;
  
    let isVisible = false;
  
    onMount(() => {
      setTimeout(() => {
        isVisible = true;
      }, delay);
    });
  </script>
  
  <div class={`transition-opacity ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={`transition-duration: ${duration}ms;`}>
    <slot></slot>
  </div>
  
  <style>
    .opacity-0 {
      opacity: 0;
    }
    .opacity-100 {
      opacity: 1;
    }
  </style>
  