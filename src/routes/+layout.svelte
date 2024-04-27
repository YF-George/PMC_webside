<script>
    import Header from './Header.svelte';  // 引入 Header 組件
    import './styles.css';  // 引入自定義的 CSS 樣式文件
    import './button.css';  // 引入按鈕樣式的 CSS 文件
</script>

<div class="app">
    <Header />  <!-- 使用 Header 組件 -->

    <main>
        <slot />  <!-- 插槽，用於插入其他內容 -->
    </main>

    <footer class="text-white py-4">
        <div class="container mx-auto flex justify-left items-center">
            <!-- 左側的子元素 -->
            <div>
                <img src="LOGO.png" alt="PMC sever Logo">  <!-- 顯示 PMC sever 的 Logo -->
            </div>
            <!-- 右側的子元素 -->
            <div class="px-10">
                <p>© 2024 PMC sever.</p>  <!-- 顯示版權信息 -->
                <p>聯繫我們: <a href="https://www.pobo0204.xyz" class="text-white">https://www.pobo0204.xyz</a></p>  <!-- 顯示聯繫信息 -->
                <p>伺服器規則: <a href="rules.html" class="text-white">點擊這裡</a></p>  <!-- 顯示伺服器規則鏈接 -->
                <p>加入我們的 Discord 社群: <a href="https://discord.gg/pmcserver" class="text-white">點擊這裡</a></p>  <!-- 顯示加入 Discord 社群的鏈接 -->
            </div>
        </div>
    </footer>
</div>
