<script>
    import logo from '$lib/images/logo.png';
    import Header from './Header.svelte';  // 引入 Header 組件
    import './styles.css';  // 引入自定義的 CSS 樣式文件
    import './button.css';  // 引入按鈕樣式的 CSS 文件
</script>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap" rel="stylesheet"> 
<div class="app">
    <Header />  <!-- 使用 Header 組件 -->

    <main>
        <slot />  <!-- 插槽，用於插入其他內容 -->
    </main>

    <footer class="text-white py-4 ">
        <div class="container mx-auto flex justify-left items-center pt-5">
            <!-- 左側的子元素 -->
            <div>
                <img alt="The project logo" src={logo} class="w-20 h-20 mr-4" />
            </div>
            <!-- 右側的子元素 -->
            <div class="px-10">
                <p>© 2024 PMC sever.</p>  <!-- 顯示版權信息 -->
                <p>聯繫我們: <a href="https://www.pobo0204.xyz" class="text-white">https://www.pobo0204.xyz</a></p>  <!-- 顯示聯繫信息 -->
                <p>加入我們的 Discord 社群: <a href="https://discord.gg/pmcserver" class="text-white">點擊這裡</a></p>  <!-- 顯示加入 Discord 社群的鏈接 -->
            </div>
        </div>
    </footer>
</div>
