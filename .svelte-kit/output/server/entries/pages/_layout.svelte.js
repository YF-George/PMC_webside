import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
import "../../chunks/client.js";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<header class="flex justify-between px-11 py-6" data-svelte-h="svelte-1miptat"><div class="text-2xl text-white"><a href="https://kit.svelte.dev">養老伺服器</a></div> <nav><ul class="flex list-none"><li class="nav-item"><a href="/"><span class="text-lg text-white hover:text-yellow-500 box"><strong>首頁</strong></span></a></li> <li class="nav-item"><a href="commands"><span class="text-lg hover:text-yellow-500 text-white box"><strong>指令</strong></span></a></li> <li class="nav-item"><a href="about"><span class="text-lg hover:text-yellow-500 text-white box"><strong>關於</strong></span></a></li> <li class="nav-item"><a href="login"><span class="text-lg hover:text-yellow-500 text-white box"><strong>登入</strong></span></a></li></ul></nav></header>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="app">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}  <main>${slots.default ? slots.default({}) : ``} </main> <footer class="text-white py-4" data-svelte-h="svelte-vm3aip"><div class="container mx-auto flex justify-left items-center"> <div><img src="LOGO.png" alt="PMC sever Logo"> </div>  <div class="px-10"><p>© 2024 PMC sever.</p>  <p>聯繫我們: <a href="https://www.pobo0204.xyz" class="text-white">https://www.pobo0204.xyz</a></p>  <p>伺服器規則: <a href="rules.html" class="text-white">點擊這裡</a></p>  <p>加入我們的 Discord 社群: <a href="https://discord.gg/pmcserver" class="text-white">點擊這裡</a></p> </div></div></footer></div>`;
});
export {
  Layout as default
};
