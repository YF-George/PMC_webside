import { c as create_ssr_component, d as add_attribute, f as each, e as escape } from "../../../chunks/ssr.js";
const css = {
  code: `.banner.svelte-15ddxdw{background-image:url('search.png');color:#ffffff;padding:10vh 2rem;text-align:center;margin-bottom:2rem;background-position:center;background-size:cover}.title.svelte-15ddxdw{font-size:3rem;font-weight:bold;margin-bottom:1rem}.description.svelte-15ddxdw{font-size:1.5rem;margin-bottom:1rem}.search-container.svelte-15ddxdw{text-align:center;margin-bottom:2rem}input[type="text"].svelte-15ddxdw{padding:1rem;font-size:1rem;border:1px solid #ccc;border-radius:4px;width:80%;max-width:400px;box-sizing:border-box;color:#333;background-color:#f8f9fa}input[type="text"].svelte-15ddxdw:focus{outline:none;border-color:#2b6cb0}.categories-container.svelte-15ddxdw{display:flex;justify-content:center;margin-bottom:1rem}button.svelte-15ddxdw{margin-right:1rem;padding:0.5rem 1rem;font-size:1rem;border:none;border-radius:4px;cursor:pointer;background-color:#2b6bb0;color:#ffffff;transition:background-color 0.3s ease}button.svelte-15ddxdw:hover{background-color:#1e4e85}.commands-container.svelte-15ddxdw{text-align:left;max-width:600px;margin:0 auto}ul.svelte-15ddxdw{list-style-type:none;padding:0;margin:0}li.svelte-15ddxdw{margin-bottom:1rem;padding:1rem;background-color:#1a202c;border-radius:8px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);transition:background-color 0.3s ease;cursor:pointer}li.svelte-15ddxdw:hover{background-color:#1f2f48}strong.svelte-15ddxdw{font-weight:bold}`,
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<!-- index.svelte -->\\r\\n<link href=\\"https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700&display=swap\\" rel=\\"stylesheet\\">\\r\\n\\r\\n<script lang=\\"ts\\">let searchQuery = \\"\\";\\nlet categoryFilter = \\"\\";\\nconst commands = [\\n  { id: 1, name: \\"/res create [\\\\u9818\\\\u5730\\\\u540D]\\", description: \\"\\\\u5275\\\\u5EFA\\\\u4E00\\\\u500B\\\\u540D\\\\u70BA[\\\\u9818\\\\u5730\\\\u540D]\\\\u7684\\\\u9818\\\\u5730\\\\u3002\\", category: \\"\\\\u9818\\\\u5730\\\\u7BA1\\\\u7406\\" },\\n  { id: 2, name: \\"/res remove [\\\\u9818\\\\u5730\\\\u540D]\\", description: \\"\\\\u79FB\\\\u9664\\\\u4E00\\\\u500B\\\\u540D\\\\u70BA[\\\\u9818\\\\u5730\\\\u540D]\\\\u7684\\\\u9818\\\\u5730\\\\u3002\\", category: \\"\\\\u9818\\\\u5730\\\\u7BA1\\\\u7406\\" },\\n  { id: 3, name: \\"/res removeall\\", description: \\"\\\\u79FB\\\\u9664\\\\u6240\\\\u6709\\\\u9818\\\\u5730\\\\u3002\\", category: \\"\\\\u9818\\\\u5730\\\\u7BA1\\\\u7406\\" },\\n  { id: 4, name: \\"/res confirm\\", description: \\"\\\\u78BA\\\\u8A8D\\\\u79FB\\\\u9664\\\\u9818\\\\u5730\\\\u3002\\", category: \\"\\\\u9818\\\\u5730\\\\u7BA1\\\\u7406\\" },\\n  { id: 5, name: \\"/res list\\", description: \\"\\\\u5217\\\\u51FA\\\\u76EE\\\\u524D\\\\u6240\\\\u64C1\\\\u6709\\\\u7684\\\\u9818\\\\u5730\\\\u3002\\", category: \\"\\\\u9818\\\\u5730\\\\u7BA1\\\\u7406\\" },\\n  { id: 6, name: \\"/res expand\\", description: \\"\\\\u64F4\\\\u589E\\\\u9762\\\\u5411\\\\u7684\\\\u4F4D\\\\u7F6E\\\\u683C\\\\u6578\\\\u3002\\", category: \\"\\\\u9818\\\\u5730\\\\u7BA1\\\\u7406\\" },\\n  { id: 7, name: \\"/res set\\", description: \\"\\\\u8A2D\\\\u5B9A\\\\u4F60\\\\u7576\\\\u524D\\\\u7AD9\\\\u7684\\\\u9818\\\\u5730\\\\u6B0A\\\\u9650\\\\u3002\\", category: \\"\\\\u9818\\\\u5730\\\\u7BA1\\\\u7406\\" },\\n  { id: 8, name: \\"/res info\\", description: \\"\\\\u7372\\\\u53D6\\\\u6709\\\\u95DC\\\\u7576\\\\u524D\\\\u9818\\\\u5730\\\\u7684\\\\u8CC7\\\\u8A0A\\\\u3002\\", category: \\"\\\\u9818\\\\u5730\\\\u7BA1\\\\u7406\\" },\\n  { id: 9, name: \\"/res padd [\\\\u73A9\\\\u5BB6ID]\\", description: \\"\\\\u6DFB\\\\u52A0\\\\u8A72\\\\u540D\\\\u73A9\\\\u5BB6\\\\u81F3\\\\u9818\\\\u5730\\\\u3002\\", category: \\"\\\\u9818\\\\u5730\\\\u7BA1\\\\u7406\\" },\\n  { id: 10, name: \\"/res pset [\\\\u73A9\\\\u5BB6ID]\\", description: \\"\\\\u8A2D\\\\u7F6E\\\\u8A72\\\\u540D\\\\u73A9\\\\u5BB6\\\\u7279\\\\u5B9A\\\\u7684\\\\u9818\\\\u5730\\\\u6B0A\\\\u9650\\\\u3002\\", category: \\"\\\\u9818\\\\u5730\\\\u7BA1\\\\u7406\\" },\\n  { id: 11, name: \\"/res pdel [\\\\u73A9\\\\u5BB6ID]\\", description: \\"\\\\u522A\\\\u9664\\\\u8A72\\\\u540D\\\\u73A9\\\\u5BB6\\\\u7684\\\\u9818\\\\u5730\\\\u6B0A\\\\u9650\\\\u3002\\", category: \\"\\\\u9818\\\\u5730\\\\u7BA1\\\\u7406\\" },\\n  { id: 12, name: \\"/res tp [\\\\u9818\\\\u5730\\\\u540D]\\", description: \\"\\\\u50B3\\\\u9001\\\\u81F3\\\\u6307\\\\u5B9A\\\\u7684\\\\u9818\\\\u5730\\\\u3002\\", category: \\"\\\\u9818\\\\u5730\\\\u7BA1\\\\u7406\\" },\\n  { id: 13, name: \\"/res tpset\\", description: \\"\\\\u5728\\\\u81EA\\\\u5DF1\\\\u7684\\\\u9818\\\\u5730\\\\u4E2D\\\\u8A2D\\\\u7F6E\\\\u50B3\\\\u9001\\\\u9EDE\\\\u3002\\", category: \\"\\\\u9818\\\\u5730\\\\u7BA1\\\\u7406\\" },\\n  { id: 14, name: \\"/res rc [\\\\u9818\\\\u5730\\\\u540D]\\", description: \\"\\\\u52A0\\\\u5165\\\\u7576\\\\u524D\\\\u6216\\\\u5B9A\\\\u7FA9\\\\u7684\\\\u4F4F\\\\u5B85\\\\u804A\\\\u5929\\\\u983B\\\\u9053\\\\u3002\\", category: \\"\\\\u804A\\\\u5929\\\\u529F\\\\u80FD\\" },\\n  { id: 15, name: \\"/res rc leave\\", description: \\"\\\\u96E2\\\\u958B\\\\u7576\\\\u524D\\\\u4F4F\\\\u6240\\\\u7684\\\\u804A\\\\u5929\\\\u983B\\\\u9053\\\\u3002\\", category: \\"\\\\u804A\\\\u5929\\\\u529F\\\\u80FD\\" },\\n  { id: 16, name: \\"/res rc setprefix [\\\\u65B0\\\\u540D\\\\u7A31]\\", description: \\"\\\\u8A2D\\\\u7F6E\\\\u4F4F\\\\u5B85\\\\u804A\\\\u5929\\\\u983B\\\\u9053\\\\u524D\\\\u7DB4\\\\u3002\\", category: \\"\\\\u804A\\\\u5929\\\\u529F\\\\u80FD\\" },\\n  { id: 17, name: \\"/res rc kick [\\\\u73A9\\\\u5BB6ID]\\", description: \\"\\\\u5F9E\\\\u983B\\\\u9053\\\\u8E22\\\\u51FA\\\\u73A9\\\\u5BB6\\\\u3002\\", category: \\"\\\\u804A\\\\u5929\\\\u529F\\\\u80FD\\" },\\n  { id: 18, name: \\"/res give [\\\\u9818\\\\u5730\\\\u540D] [\\\\u73A9\\\\u5BB6ID]\\", description: \\"\\\\u8F49\\\\u8B93\\\\u9818\\\\u5730\\\\u7D66\\\\u5176\\\\u4ED6\\\\u73A9\\\\u5BB6\\\\u3002\\", category: \\"\\\\u9818\\\\u5730\\\\u7BA1\\\\u7406\\" },\\n  { id: 19, name: \\"/res show\\", description: \\"\\\\u4EE5\\\\u7C92\\\\u5B50\\\\u6548\\\\u679C\\\\u986F\\\\u793A\\\\u7576\\\\u524D\\\\u7AD9\\\\u7ACB\\\\u7684\\\\u9818\\\\u5730\\\\u7BC4\\\\u570D\\\\u3002\\", category: \\"\\\\u986F\\\\u793A\\\\u529F\\\\u80FD\\" }\\n];\\nlet filteredCommands = commands;\\nfunction handleSearch(event) {\\n  const target = event.target;\\n  if (target instanceof HTMLInputElement) {\\n    searchQuery = target.value.trim().toLowerCase();\\n    filteredCommands = commands.filter((command) => {\\n      let nameLower = command.name.toLowerCase().normalize(\\"NFD\\").replace(/[\\\\u0300-\\\\u036f]/g, \\"\\");\\n      let descriptionLower = command.description.toLowerCase().normalize(\\"NFD\\").replace(/[\\\\u0300-\\\\u036f]/g, \\"\\");\\n      return (categoryFilter === \\"\\" || command.category === categoryFilter) && (nameLower.includes(searchQuery) || descriptionLower.includes(searchQuery));\\n    });\\n  }\\n}\\nfunction handleCategoryFilter(category) {\\n  categoryFilter = category;\\n  const event = new Event(\\"input\\");\\n  handleSearch(event);\\n}\\nfunction copyToClipboard(text) {\\n  navigator.clipboard.writeText(text).then(() => {\\n    alert(\\"\\\\u6307\\\\u4EE4\\\\u5DF2\\\\u6210\\\\u529F\\\\u8907\\\\u88FD\\\\u5230\\\\u526A\\\\u8CBC\\\\u677F\\\\uFF01\\");\\n  }).catch((err) => {\\n    console.error(\\"\\\\u7121\\\\u6CD5\\\\u8907\\\\u88FD\\\\u6587\\\\u5B57\\\\u5230\\\\u526A\\\\u8CBC\\\\u677F\\\\uFF1A\\", err);\\n    alert(\\"\\\\u7121\\\\u6CD5\\\\u8907\\\\u88FD\\\\u6587\\\\u5B57\\\\u5230\\\\u526A\\\\u8CBC\\\\u677F\\\\uFF0C\\\\u8ACB\\\\u624B\\\\u52D5\\\\u8907\\\\u88FD\\\\u3002\\");\\n  });\\n}\\n<\/script>\\r\\n\\r\\n<style>\\r\\n\\r\\n  /* 標題樣式 */\\r\\n  .banner {\\r\\n    background-image: url('search.png');\\r\\n    color: #ffffff;\\r\\n    padding: 10vh 2rem;\\r\\n    text-align: center;\\r\\n    margin-bottom: 2rem;\\r\\n    background-position: center; /* 將圖片置中 */\\r\\n    background-size: cover; /* 調整圖片大小以填滿容器 */\\r\\n  }\\r\\n\\r\\n  .title {\\r\\n    font-size: 3rem;\\r\\n    font-weight: bold;\\r\\n    margin-bottom: 1rem;\\r\\n  }\\r\\n\\r\\n  .description {\\r\\n    font-size: 1.5rem;\\r\\n    margin-bottom: 1rem;\\r\\n  }\\r\\n\\r\\n  /* 搜索框樣式 */\\r\\n  .search-container {\\r\\n    text-align: center;\\r\\n    margin-bottom: 2rem;\\r\\n  }\\r\\n\\r\\n  input[type=\\"text\\"] {\\r\\n    padding: 1rem;\\r\\n    font-size: 1rem;\\r\\n    border: 1px solid #ccc;\\r\\n    border-radius: 4px;\\r\\n    width: 80%;\\r\\n    max-width: 400px;\\r\\n    box-sizing: border-box;\\r\\n    color: #333; /* 調整文字顏色 */\\r\\n    background-color: #f8f9fa; /* 調整搜索框背景色 */\\r\\n  }\\r\\n\\r\\n  input[type=\\"text\\"]:focus {\\r\\n    outline: none;\\r\\n    border-color: #2b6cb0; /* 聚焦時顯示深藍色邊框 */\\r\\n  }\\r\\n\\r\\n  /* 類別選擇按鈕樣式 */\\r\\n  .categories-container {\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    margin-bottom: 1rem;\\r\\n  }\\r\\n\\r\\n  button {\\r\\n    margin-right: 1rem;\\r\\n    padding: 0.5rem 1rem;\\r\\n    font-size: 1rem;\\r\\n    border: none;\\r\\n    border-radius: 4px;\\r\\n    cursor: pointer;\\r\\n    background-color: #2b6bb0;\\r\\n    color: #ffffff;\\r\\n    transition: background-color 0.3s ease;\\r\\n  }\\r\\n\\r\\n  button:hover {\\r\\n    background-color: #1e4e85; /* 滑鼠懸停時的背景色 */\\r\\n  }\\r\\n\\r\\n  /* 指令列表樣式 */\\r\\n  .commands-container {\\r\\n    text-align: left; /* 左對齊 */\\r\\n    max-width: 600px; /* 最大寬度 */\\r\\n    margin: 0 auto; /* 水平居中 */\\r\\n  }\\r\\n\\r\\n  ul {\\r\\n    list-style-type: none;\\r\\n    padding: 0;\\r\\n    margin: 0;\\r\\n  }\\r\\n\\r\\n  li {\\r\\n    margin-bottom: 1rem;\\r\\n    padding: 1rem;\\r\\n    background-color: #1a202c;\\r\\n    border-radius: 8px;\\r\\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\\r\\n    transition: background-color 0.3s ease;\\r\\n    cursor: pointer; /* 設置為可點擊 */\\r\\n  }\\r\\n\\r\\n  li:hover {\\r\\n    background-color: #1f2f48; /* 滑鼠懸停時的背景色 */\\r\\n  }\\r\\n\\r\\n  strong {\\r\\n    font-weight: bold;\\r\\n  }\\r\\n</style>\\r\\n\\r\\n<div class=\\"banner\\">\\r\\n  <h1 class=\\"title\\">指令大全</h1>\\r\\n  <p class=\\"description\\">尋找各種指令</p>\\r\\n\\r\\n  <!-- 搜索框 -->\\r\\n  <div class=\\"search-container\\">\\r\\n    <input type=\\"text\\" placeholder=\\"輸入指令關鍵字\\" bind:value={searchQuery} on:input={handleSearch} />\\r\\n  </div>\\r\\n\\r\\n  <!-- 類別選擇按鈕 -->\\r\\n  <div class=\\"categories-container\\">\\r\\n    <button on:click={() => handleCategoryFilter('')}>所有類別</button>\\r\\n    <button on:click={() => handleCategoryFilter('領地管理')}>領地管理</button>\\r\\n    <button on:click={() => handleCategoryFilter('聊天功能')}>聊天功能</button>\\r\\n    <button on:click={() => handleCategoryFilter('顯示功能')}>顯示功能</button>\\r\\n    <!-- 可以根據需要添加其他類別按鈕 -->\\r\\n  </div>\\r\\n</div>\\r\\n\\r\\n<div class=\\"commands-container\\">\\r\\n  <h2>常用指令列表：</h2>\\r\\n  <ul>\\r\\n    {#each filteredCommands as command}\\r\\n      <li>\\r\\n        <button on:click={() => copyToClipboard(command.name)}>\\r\\n          <strong>{command.name}：</strong> {command.description}\\r\\n        </button>\\r\\n      </li>\\r\\n    {/each}\\r\\n  </ul>\\r\\n</div>\\r\\n\\r\\n"],"names":[],"mappings":"AAwDE,sBAAQ,CACN,gBAAgB,CAAE,iBAAiB,CACnC,KAAK,CAAE,OAAO,CACd,OAAO,CAAE,IAAI,CAAC,IAAI,CAClB,UAAU,CAAE,MAAM,CAClB,aAAa,CAAE,IAAI,CACnB,mBAAmB,CAAE,MAAM,CAC3B,eAAe,CAAE,KACnB,CAEA,qBAAO,CACL,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,IAAI,CACjB,aAAa,CAAE,IACjB,CAEA,2BAAa,CACX,SAAS,CAAE,MAAM,CACjB,aAAa,CAAE,IACjB,CAGA,gCAAkB,CAChB,UAAU,CAAE,MAAM,CAClB,aAAa,CAAE,IACjB,CAEA,KAAK,CAAC,IAAI,CAAC,MAAM,gBAAE,CACjB,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,IAAI,CACf,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,CACtB,aAAa,CAAE,GAAG,CAClB,KAAK,CAAE,GAAG,CACV,SAAS,CAAE,KAAK,CAChB,UAAU,CAAE,UAAU,CACtB,KAAK,CAAE,IAAI,CACX,gBAAgB,CAAE,OACpB,CAEA,KAAK,CAAC,IAAI,CAAC,MAAM,gBAAC,MAAO,CACvB,OAAO,CAAE,IAAI,CACb,YAAY,CAAE,OAChB,CAGA,oCAAsB,CACpB,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,aAAa,CAAE,IACjB,CAEA,qBAAO,CACL,YAAY,CAAE,IAAI,CAClB,OAAO,CAAE,MAAM,CAAC,IAAI,CACpB,SAAS,CAAE,IAAI,CACf,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,GAAG,CAClB,MAAM,CAAE,OAAO,CACf,gBAAgB,CAAE,OAAO,CACzB,KAAK,CAAE,OAAO,CACd,UAAU,CAAE,gBAAgB,CAAC,IAAI,CAAC,IACpC,CAEA,qBAAM,MAAO,CACX,gBAAgB,CAAE,OACpB,CAGA,kCAAoB,CAClB,UAAU,CAAE,IAAI,CAChB,SAAS,CAAE,KAAK,CAChB,MAAM,CAAE,CAAC,CAAC,IACZ,CAEA,iBAAG,CACD,eAAe,CAAE,IAAI,CACrB,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,CACV,CAEA,iBAAG,CACD,aAAa,CAAE,IAAI,CACnB,OAAO,CAAE,IAAI,CACb,gBAAgB,CAAE,OAAO,CACzB,aAAa,CAAE,GAAG,CAClB,UAAU,CAAE,CAAC,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CACxC,UAAU,CAAE,gBAAgB,CAAC,IAAI,CAAC,IAAI,CACtC,MAAM,CAAE,OACV,CAEA,iBAAE,MAAO,CACP,gBAAgB,CAAE,OACpB,CAEA,qBAAO,CACL,WAAW,CAAE,IACf"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let searchQuery = "";
  const commands = [
    {
      id: 1,
      name: "/res create [領地名]",
      description: "創建一個名為[領地名]的領地。",
      category: "領地管理"
    },
    {
      id: 2,
      name: "/res remove [領地名]",
      description: "移除一個名為[領地名]的領地。",
      category: "領地管理"
    },
    {
      id: 3,
      name: "/res removeall",
      description: "移除所有領地。",
      category: "領地管理"
    },
    {
      id: 4,
      name: "/res confirm",
      description: "確認移除領地。",
      category: "領地管理"
    },
    {
      id: 5,
      name: "/res list",
      description: "列出目前所擁有的領地。",
      category: "領地管理"
    },
    {
      id: 6,
      name: "/res expand",
      description: "擴增面向的位置格數。",
      category: "領地管理"
    },
    {
      id: 7,
      name: "/res set",
      description: "設定你當前站的領地權限。",
      category: "領地管理"
    },
    {
      id: 8,
      name: "/res info",
      description: "獲取有關當前領地的資訊。",
      category: "領地管理"
    },
    {
      id: 9,
      name: "/res padd [玩家ID]",
      description: "添加該名玩家至領地。",
      category: "領地管理"
    },
    {
      id: 10,
      name: "/res pset [玩家ID]",
      description: "設置該名玩家特定的領地權限。",
      category: "領地管理"
    },
    {
      id: 11,
      name: "/res pdel [玩家ID]",
      description: "刪除該名玩家的領地權限。",
      category: "領地管理"
    },
    {
      id: 12,
      name: "/res tp [領地名]",
      description: "傳送至指定的領地。",
      category: "領地管理"
    },
    {
      id: 13,
      name: "/res tpset",
      description: "在自己的領地中設置傳送點。",
      category: "領地管理"
    },
    {
      id: 14,
      name: "/res rc [領地名]",
      description: "加入當前或定義的住宅聊天頻道。",
      category: "聊天功能"
    },
    {
      id: 15,
      name: "/res rc leave",
      description: "離開當前住所的聊天頻道。",
      category: "聊天功能"
    },
    {
      id: 16,
      name: "/res rc setprefix [新名稱]",
      description: "設置住宅聊天頻道前綴。",
      category: "聊天功能"
    },
    {
      id: 17,
      name: "/res rc kick [玩家ID]",
      description: "從頻道踢出玩家。",
      category: "聊天功能"
    },
    {
      id: 18,
      name: "/res give [領地名] [玩家ID]",
      description: "轉讓領地給其他玩家。",
      category: "領地管理"
    },
    {
      id: 19,
      name: "/res show",
      description: "以粒子效果顯示當前站立的領地範圍。",
      category: "顯示功能"
    }
  ];
  let filteredCommands = commands;
  $$result.css.add(css);
  return ` <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700&display=swap" rel="stylesheet">   <div class="banner svelte-15ddxdw"><h1 class="title svelte-15ddxdw" data-svelte-h="svelte-mmxj69">指令大全</h1> <p class="description svelte-15ddxdw" data-svelte-h="svelte-9zn0cv">尋找各種指令</p>  <div class="search-container svelte-15ddxdw"><input type="text" placeholder="輸入指令關鍵字" class="svelte-15ddxdw"${add_attribute("value", searchQuery, 0)}></div>  <div class="categories-container svelte-15ddxdw"><button class="svelte-15ddxdw" data-svelte-h="svelte-pwyhtt">所有類別</button> <button class="svelte-15ddxdw" data-svelte-h="svelte-ddd8ez">領地管理</button> <button class="svelte-15ddxdw" data-svelte-h="svelte-d8ua4n">聊天功能</button> <button class="svelte-15ddxdw" data-svelte-h="svelte-1h9jyxn">顯示功能</button> </div></div> <div class="commands-container svelte-15ddxdw"><h2 data-svelte-h="svelte-tng6co">常用指令列表：</h2> <ul class="svelte-15ddxdw">${each(filteredCommands, (command) => {
    return `<li class="svelte-15ddxdw"><button class="svelte-15ddxdw"><strong class="svelte-15ddxdw">${escape(command.name)}：</strong> ${escape(command.description)}</button> </li>`;
  })}</ul></div>`;
});
export {
  Page as default
};
