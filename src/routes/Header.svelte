<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/svelte-logo.svg';
	import github from '$lib/images/github.svg';
</script>

<header class="flex justify-between items-center px-11 py-6">
    <div class="flex items-center">
        <img src="LOGO.png" alt="PMC sever Logo" style="height: 40px; width: auto; margin-right: 10px; border-radius:3px;">
        <a href="https://kit.svelte.dev" class="text-2xl text-white">養老伺服器</a>
    </div>

	<nav>
		<ul class="flex list-none">
			<li class="nav-item"><a href="/"><span class="text-lg text-white hover:text-yellow-500 box"><strong>首頁</strong></span></a></li>
			<li class="nav-item"><a href="commands"><span class="text-lg hover:text-yellow-500 text-white box"><strong>指令</strong></span></a></li>
			<li class="nav-item"><a href="about"><span class="text-lg hover:text-yellow-500 text-white box"><strong>關於</strong></span></a></li>
			<li class="nav-item"><a href="login"><span class="text-lg hover:text-yellow-500 text-white box"><strong>登入</strong></span></a></li>
		</ul>
	</nav>
</header>