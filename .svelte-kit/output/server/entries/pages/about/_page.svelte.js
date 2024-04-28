import { c as create_ssr_component } from "../../../chunks/ssr.js";
const css = {
  code: ".video-container.svelte-17ufpen.svelte-17ufpen{display:flex;justify-content:center;align-items:center;height:100vh}.video-container.svelte-17ufpen iframe.svelte-17ufpen{width:1280px;height:720px}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<style>\\r\\n    .video-container {\\r\\n        display: flex;\\r\\n        justify-content: center;\\r\\n        align-items: center;\\r\\n        height: 100vh;\\r\\n    }\\r\\n\\r\\n    .video-container iframe {\\r\\n        width: 1280px; /* 設定影片寬度 */\\r\\n        height: 720px; /* 設定影片高度 */\\r\\n    }\\r\\n</style>\\r\\n\\r\\n<div class=\\"video-container\\">\\r\\n    <iframe width=\\"1280\\" height=\\"720\\" src=\\"https://www.youtube.com/embed/Slco_6ungwQ\\" title=\\"Minecraft 養老伺服器組裝伺服主機\\" frameborder=\\"0\\" allow=\\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\\" allowfullscreen></iframe>\\r\\n</div>\\r\\n"],"names":[],"mappings":"AACI,8CAAiB,CACb,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,MAAM,CAAE,KACZ,CAEA,+BAAgB,CAAC,qBAAO,CACpB,KAAK,CAAE,MAAM,CACb,MAAM,CAAE,KACZ"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="video-container svelte-17ufpen" data-svelte-h="svelte-txqz7a"><iframe width="1280" height="720" src="https://www.youtube.com/embed/Slco_6ungwQ" title="Minecraft 養老伺服器組裝伺服主機" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="svelte-17ufpen"></iframe></div>`;
});
export {
  Page as default
};
