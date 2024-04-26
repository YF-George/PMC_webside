<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
    <div id="section-1" class="text-white">
        <main class="flex justify-center items-center h-5/6">
            <div class="border border-5 border-white p-5">
                <h1 id="title"><strong>養老伺服器</strong></h1>
            </div>
            
        </main>
        <div class="flex justify-center items-center">
            <span class="text-5xl p-5 float-element">
                <a href="#section-2">﹀</a>
            </span>
        </div>
    </div>
    
    <div id="section-2" class="bg-image" style="background-image: url('image/second-section.png');">
        <section>
            <div class="container py-5">
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <div class="fw-bold text-center mb-5">
                            <h1 class="text-warning"><strong>養老伺服器介紹</strong></h1>
                        </div>
                        <div class="text-white text-center mb-5">
                            <p class="fs-5">在繁忙的工作或學習之餘，想要放鬆一下並沉浸在一個豐富多彩的多人遊戲伺服器世界中嗎？讓我們帶您進入一段精彩絕倫的遊戲體驗之旅！</p>
                        </div>
                        <div class="text-white mb-5 d-flex align-items-center justify-content-center">
                            <div class="text-center">
                                <h2 class="text-primary mb-3"><strong>▶ 無需正版驗證 ◀</strong></h2>
                                <p class="fs-5 mb-3">- 高度穩定的 TPS：我們確保遊戲過程順暢流暢 -</p>
                                <p class="fs-5 mb-3">- 全天候開放：無論何時何地，您都能進入遊戲 -</p>
                                <p class="fs-5 mb-3">- 低延遲早晨時段：清晨時段遊玩，延遲極低 -</p>
                                <p class="fs-5">多種優質插件：提升玩家的遊戲體驗和品質，提供全新的玩法和功能。</p>
                                <p class="fs-5">每日定時重啟：伺服器每天上午 08:00 準時重啟一次，確保最佳性能，請玩家注意。</p>
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>
        </section>
    </div>
    
    <div id="section-3" class="bg-image" style="background-image: url('image/third-section.png');">
        <section>
            <div class="container py-5">
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <div class="fw-bold text-center mb-5">
                            <h1 class="text-warning"><strong>加入我們的冒險之旅吧</strong></h1>
                        </div>
                        <div class="text-white text-center mb-5">
                            <p class="fs-5">伺服器 IP：pobomc.asuscomm.com</p>
                            <p class="fs-5">版本：1.20.1</p>
                            <p class="fs-5">Discord 語音群：加入我們的 Discord 社群，與其他玩家一同交流、合作，共享攻略和經驗。</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>

    <div id="section-4" class="bg-image" style="background-image: url('image/fourth-section.png');">
        <section>
            <div class="container py-5">
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <div class="fw-bold text-center mb-5">
                            <h1 class="text-warning"><strong>團隊</strong></h1>
                        </div>
                        <div class="text-white text-center mb-5">
                            <p class="fs-5">我們的隊伍是一支多年來不斷成長和發展的團隊，擁有豐富的遊戲經驗和技術。我們致力於營造一個友好和諧的遊戲環境，讓每位玩家都能在這裡找到樂趣和成就。</p>
                            <p class="fs-5">無論您是新手還是資深玩家，我們都歡迎您的加入！加入我們的隊伍，一起展開精彩的冒險旅程吧！</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</section>

<style>
	#section-1{
		width:100%;
		height: 100vh;
		background: url('main-section.png');
		background-attachment: fixed;
		background-size: cover;
	}
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
