<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap" rel="stylesheet">
<!-- Login.svelte -->
<script lang="ts">
	import './login.css';
	import login from '$lib/images/login.png';
	let username = '';
	let password = '';
  
	async function validateForm(): Promise<boolean> {
	  if (username.trim() === '' || password.trim() === '') {
		alert('請填寫完整的使用者名稱和密碼');
		return false;
	  }
  
	  if (password.length < 6) {
		alert('密碼長度需至少為 6 個字符');
		return false;
	  }
  
	  // 可以根據需要添加更多的驗證規則，例如檢查使用者名稱格式等
  
	  console.log('表單驗證通過，執行表單提交操作');
	  return true;
	}
  
	async function submitForm(): Promise<void> {
	  if (await validateForm()) {
		try {
		  const response = await fetch('https://your-api-url/login', {
			method: 'POST',
			headers: {
			  'Content-Type': 'application/json'
			},
			body: JSON.stringify({ username, password })
		  });
  
		  if (response.ok) {
			// 登入成功，可以進行相應的操作，例如導航到下一個頁面
			console.log('登入成功');
			// 在這裡處理登入成功後的操作
		  } else {
			// 登入失敗，處理錯誤情況
			console.error('登入失敗');
		  }
		} catch (error) {
		  console.error('發生錯誤', error);
		}
	  }
	}
  </script>
  
  
  <div class="bk" style="background: url({login}); width: 100%; background-attachment: fixed;background-size: cover; border-radius: 0px;">
	<div class="login-box">
	  <p>登入系統</p>
	  <form on:submit|preventDefault={submitForm}>
		<div class="user-box">
		  <input type="text" id="username" bind:value={username} required>
		  <label for="username">使用者名稱</label>
		</div>
		<div class="user-box">
		  <input type="password" id="password" bind:value={password} required>
		  <label for="password">密碼</label>
		</div>
		<button type="submit">登入</button>
	  </form>
	</div>
  </div>
  