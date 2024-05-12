
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap" rel="stylesheet">
<script>
// @ts-nocheck

  import search from '$lib/images/search.png';
  let searchQuery = ''; // 搜尋關鍵字
  let categoryFilter = ''; // 類別過濾器，初始為空表示顯示所有類別的指令

  // 定義指令列表，每個指令包含 id、name、description 和 category 屬性
  const commands = [
    { id: 1, name: '/res create [領地名]', description: '創建一個名為[領地名]的領地。', category: '領地管理' },
    { id: 2, name: '/res remove [領地名]', description: '移除一個名為[領地名]的領地。', category: '領地管理' },
    { id: 3, name: '/res removeall', description: '移除所有領地。', category: '領地管理' },
    { id: 4, name: '/res confirm', description: '確認移除領地。', category: '領地管理' },
    { id: 5, name: '/res list', description: '列出目前所擁有的領地。', category: '領地管理' },
    { id: 6, name: '/res expand', description: '擴增面向的位置格數。', category: '領地管理' },
    { id: 7, name: '/res set', description: '設定你當前站的領地權限。', category: '領地管理' },
    { id: 8, name: '/res info', description: '獲取有關當前領地的資訊。', category: '領地管理' },
    { id: 9, name: '/res padd [玩家ID]', description: '添加該名玩家至領地。', category: '領地管理' },
    { id: 10, name: '/res pset [玩家ID]', description: '設置該名玩家特定的領地權限。', category: '領地管理' },
    { id: 11, name: '/res pdel [玩家ID]', description: '刪除該名玩家的領地權限。', category: '領地管理' },
    { id: 12, name: '/res tp [領地名]', description: '傳送至指定的領地。', category: '領地管理' },
    { id: 13, name: '/res tpset', description: '在自己的領地中設置傳送點。', category: '領地管理' },
    { id: 14, name: '/res rc [領地名]', description: '加入當前或定義的住宅聊天頻道。', category: '聊天功能' },
    { id: 15, name: '/res rc leave', description: '離開當前住所的聊天頻道。', category: '聊天功能' },
    { id: 16, name: '/res rc setprefix [新名稱]', description: '設置住宅聊天頻道前綴。', category: '聊天功能' },
    { id: 17, name: '/res rc kick [玩家ID]', description: '從頻道踢出玩家。', category: '聊天功能' },
    { id: 18, name: '/res give [領地名] [玩家ID]', description: '轉讓領地給其他玩家。', category: '領地管理' },
    { id: 19, name: '/res show', description: '以粒子效果顯示當前站立的領地範圍。', category: '顯示功能' }
  ];

  // 過濾後的指令列表
  let filteredCommands = commands;

  // 搜尋和過濾功能
  /**
   * @param {{ target: any; }} event
   */
  function handleSearch(event) {
    searchQuery = event.target.value.toLowerCase();
    filteredCommands = commands.filter((command) => {
        if (searchQuery === '' && categoryFilter === '') {
          return true; // return all when searchQuery is empty
        }
        let fileredByQuery = command.name.toLowerCase().includes(searchQuery) || command.description.toLowerCase().includes(searchQuery);
        let fileredByCategory = categoryFilter === '' || command.category === categoryFilter;
        return fileredByQuery & fileredByCategory;
        //return command.name.toLowerCase().includes(searchQuery) || command.description.toLowerCase().includes(searchQuery);
    });
  }

  // 切換類別過濾器
  /**
   * @param {string} category
   */
  function handleCategoryFilter(category) {
    categoryFilter = category;
    handleSearch({ target: { value: searchQuery } }); // 觸發搜索過濾
  }

  // 定義一個函數，用來複製文字到剪貼板
  /**
   * @param {string} text
   */
  function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
      .then(() => {
        alert('指令已成功複製到剪貼板！');
      })
      .catch(err => {
        console.error('無法複製文字到剪貼板：', err);
        alert('無法複製文字到剪貼板，請手動複製。');
      });
  }
</script>

<style>

  /* 標題樣式 */
  .banner {
    color: #ffffff;
    padding: 10vh 2rem;
    text-align: center;
    margin-bottom: 2rem;
    background-position: center; /* 將圖片置中 */
    background-size: cover; /* 調整圖片大小以填滿容器 */
  }

  .title {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

    .description {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  /* 搜索框和下拉式選單樣式 */
  .search-container {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 2rem;
    justify-content: center; /* 水平置中 */
    align-items: center; /* 垂直置中 */
  }

  input[type="text"] {
    padding: 1rem;
    font-size: 1rem;
    border: 2px solid #ccc;
    border-radius: 4px;
    width: 60%; /* 調整寬度 */
    max-width: 300px; /* 調整最大寬度 */
    box-sizing: border-box;
    color: #282828; /* 調整文字顏色 */
    background-color: #f8f9fa; /* 調整搜索框背景色 */
    margin-right: 1rem; /* 添加右邊間距 */
  }

  select {
    padding: 1rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
    background-color: #e7e7e7; /* 修改背景顏色 */
    color: #000000;
    transition: background-color 0.3s ease;
    width: 40%; /* 調整寬度 */
    max-width: 150px; /* 調整最大寬度 */
  }

  input[type="text"]:focus {
    outline: none;
    border-color: #b3b3b3; 
  }

  select:hover {
    background-color: #ffffff; /* 滑鼠懸停時的背景色 */
  }


  /* 指令列表樣式 */
  .commands-container {
    text-align: left; /* 左對齊 */
    max-width: 600px; /* 最大寬度 */
    margin: 0 auto; /* 水平居中 */
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 1rem;
    padding: 1rem;
    background-color: #1a202c;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease;
    cursor: pointer; /* 設置為可點擊 */
  }

  li:hover {
    background-color: #1f2f48; /* 滑鼠懸停時的背景色 */
  }

  strong {
    font-weight: bold;
    color: #2b6cb0;
  }
</style>

<div class="banner " style="background: url({search}); background-position: center;">
  <h1 class="title">指令大全</h1>
  <p class="description">尋找各種指令</p>

  <!-- 搜索框和下拉式選單 -->
  <div class="search-container">
    <input type="text" placeholder="輸入指令關鍵字" bind:value={searchQuery} on:input={handleSearch} />
    <select on:change={(event) => handleCategoryFilter(event.target.value)}>
      <option value="">所有類別</option>
      <option value="領地管理">領地管理</option>
      <option value="聊天功能">聊天功能</option>
      <option value="顯示功能">顯示功能</option>
    </select>
  </div>
</div>

<div class="commands-container">
  <h2 class="text-3xl">常用指令列表：</h2>
  <ul>
    {#each filteredCommands as command}
      <li>
        <button on:click={() => copyToClipboard(command.name)} class="command-item">
          <strong>{command.name}：</strong> {command.description}
        </button>
      </li>
    {/each}
  </ul>
</div>
