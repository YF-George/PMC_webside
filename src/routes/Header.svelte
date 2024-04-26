<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/svelte-logo.svg';
	import github from '$lib/images/github.svg';
</script>

<header class="flex justify-between p-5">
	<div class="text-2xl text-white">
		<a href="https://kit.svelte.dev">養老伺服器</a>
	</div>

	<nav>
		<ul class="flex list-none">
			<li class="nav-item"><a href="index.html"><span class="text-lg text-white hover:text-green-500 box"><strong>首頁</strong></span></a></li>
			<li class="nav-item"><a href="announcement.html"><span class="text-lg text-white box"><strong>公告</strong></span></a></li>
			<li class="nav-item"><a href="commands.html"><span class="text-lg text-white box"><strong>指令</strong></span></a></li>
			<li class="nav-item"><a href="about.html"><span class="text-lg text-white box"><strong>關於</strong></span></a></li>
			<li class="nav-item"><a href="login.html"><span class="text-lg text-white box"><strong>登入</strong></span></a></li>
		</ul>
	</nav>
</header>