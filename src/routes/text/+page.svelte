<script>
    import FadeIn from '$lib/components/FadeIn.svelte';
    import SlideInFromTop from '$lib/components/SlideInFromTop.svelte';
  </script>
  
  <main class="flex flex-col items-center justify-center min-h-screen bg-blue-500 p-6">
    <FadeIn delay={500} duration={1000}>
      <h1 class="text-4xl font-bold">歡迎來到我的網站</h1>
    </FadeIn>
    <FadeIn delay={1000} duration={1000}>
      <p class="mt-4 text-lg">這是逐步回應的文字效果</p>
    </FadeIn>
    <FadeIn delay={1500} duration={1000}>
      <button class="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg">開始探索</button>
    </FadeIn>
    <SlideInFromTop delay={0.5}>
        <div class="bg-blue-500 text-white p-4">這是一個滑入效果的範例</div>
      </SlideInFromTop>
  </main>
  