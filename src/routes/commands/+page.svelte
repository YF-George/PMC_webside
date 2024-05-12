<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap" rel="stylesheet">
<script>
// @ts-nocheck
  import { commands } from './commands.js';
  import search from '$lib/images/search.png';
  let searchQuery = ''; // 搜尋關鍵字
  let categoryFilter = ''; // 類別過濾器，初始為空表示顯示所有類別的指令
  import './commands.css';

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


<div class="banner " style="background: url({search}); background-position: center;">
  <h1 class="title">指令大全</h1>
  <p class="description">尋找各種指令</p>
  <!-- 搜索框和下拉式選單 -->
  <div class="search-container">
    <input type="text" placeholder="輸入指令關鍵字" bind:value={searchQuery} on:input={handleSearch} />
    <select on:change={(event) => handleCategoryFilter(event.target.value)}>
      <option value="">所有類別</option>
      <option value="領地管理">領地管理</option>
      <option value="系統指令">系統指令</option>
      <option value="傳送指令">傳送指令</option>
      <option value="商城指令">商城指令</option>
      <option value="經濟指令">經濟指令</option>
      <option value="技能指令">技能指令</option>
      <option value="稱號指令">稱號指令</option>
      <option value="其他指令">其他指令</option>
    </select>
  </div>
</div>


<div class="commands-container" >
  <ul style="max-height: 600px; overflow-y: auto;">
    {#each filteredCommands as command}
      <li class="li">
        <button on:click={() => copyToClipboard(command.name)} class="command-item">
          <strong>{command.name}：</strong> {command.description}
        </button>
      </li>
    {/each}
  </ul>
</div>