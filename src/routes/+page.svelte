<script>
// @ts-nocheck

    import { onMount } from 'svelte';
    import ContentBlock from '../lib/components/ContentBlock.svelte';
  
    import mainSection from '$lib/images/main-section.webp';
    import secondSection from '$lib/images/second-section.webp';
    import thirdSection from '$lib/images/third-section.webp';
    import fourthSection from '$lib/images/fourth-section.webp';
  
    let Sidebar;
    onMount(async () => {
      Sidebar = (await import('../lib/components/Sidebar.svelte')).default;
    });
  </script>
  
  <svelte:head>
    <title>養老伺服器</title>
    <meta name="description" content="加入我們的養老伺服器，享受穩定和低延遲的多人遊戲體驗。">
    <meta name="keywords" content="養老伺服器, 多人遊戲, Minecraft伺服器, 低延遲, 高穩定性">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap" rel="stylesheet">
  </svelte:head>
  
  {#if Sidebar}
    <Sidebar />
  {/if}
  
  <main class="content">
    <section id="section-1" class="text-white bg-cover bg-fixed bg-center" style="background-image: url({mainSection});">
      <div class="flex flex-col justify-center items-center h-screen">
        <h1 class="border-4 border-white p-12 px-16 text-6xl font-bold text-center mb-8">養老伺服器</h1>
        <div class="absolute bottom-8 w-full flex justify-center">
          <a href="#section-2" class="text-5xl animate-bounce transform rotate-180" aria-label="Scroll down">﹀</a>
        </div>
      </div>
    </section>
  
    <section id="section-2" class="py-20 bg-gray-800 bg-cover bg-fixed bg-center" style="background-image: url({secondSection});">
      <ContentBlock 
        title="養老伺服器介紹"
        content={`在繁忙的工作或學習之餘，想要放鬆一下並沉浸在一個豐富多彩的多人遊戲伺服器世界中嗎？\n
          讓我們帶您進入一段精彩絕倫的遊戲體驗之旅！\n
          ▶ 無需正版驗證 ◀\n
          高度穩定的 TPS：我們確保遊戲過程順暢流暢\n
          全天候開放：無論何時何地，您都能進入遊戲\n
          低延遲早晨時段：清晨時段遊玩，延遲極低\n
          多種優質插件：提升玩家的遊戲體驗和品質，提供全新的玩法和功能。\n
          每日定時重啟：伺服器每天上午 08:00 準時重啟一次，確保最佳性能，請玩家注意。`} 
      />
    </section>
  
    <section id="section-3" class="py-10 bg-gray-800 bg-cover bg-fixed bg-center" style="background-image: url({thirdSection});">
      <ContentBlock 
        title="加入我們的冒險之旅吧"
        content={`伺服器 IP：pobomc.asuscomm.com\n
          版本：1.20.1\n
          Discord 語音群：加入我們的 Discord 社群，與其他玩家一同交流、合作，共享攻略和經驗。`} 
      />
    </section>
  
    <section id="section-4" class="py-10 bg-gray-900 bg-cover bg-fixed bg-center" style="background-image: url({fourthSection});">
      <ContentBlock 
        title="團隊"
        content={`我們的隊伍是一支多年來不斷成長和發展的團隊，擁有豐富的遊戲經驗和技術。\n
          我們致力於營造一個友好和諧的遊戲環境，讓每位玩家都能在這裡找到樂趣和成就。\n
          無論您是新手還是資深玩家，我們都歡迎您的加入！加入我們的隊伍，一起展開精彩的冒險旅程吧！`} 
      />
    </section>
  </main>