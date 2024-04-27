<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/svelte-logo.svg';
	import github from '$lib/images/github.svg';
</script>

<header class="flex justify-between px-11 py-6">
	<div class="text-2xl text-white">
		<a href="https://kit.svelte.dev">養老伺服器</a>
	</div>

	<nav>
		<ul class="flex list-none">
			<li class="nav-item"><a href="index.html"><span class="text-lg text-white hover:text-yellow-500 box"><strong>首頁</strong></span></a></li>
			<li class="nav-item"><a href="commands.html"><span class="text-lg hover:text-yellow-500 text-white box"><strong>指令</strong></span></a></li>
			<li class="nav-item"><a href="about.html"><span class="text-lg hover:text-yellow-500 text-white box"><strong>關於</strong></span></a></li>
			<li class="nav-item"><a href="login.html"><span class="text-lg hover:text-yellow-500 text-white box"><strong>登入</strong></span></a></li>
		</ul>
	</nav>
</header>