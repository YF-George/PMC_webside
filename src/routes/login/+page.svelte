<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap" rel="stylesheet"> 
<script lang="ts">
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
  
  <style>
	/* 全局背景樣式 */
	.bk {
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  height: 100vh;
	  background-size: cover;
	  background-position: center;
	}
  
	/* 登入框容器 */
	.login-box {
	  position: absolute;
	  top: 50%;
	  left: 50%;
	  width: 400px;
	  padding: 40px;
	  margin: 20px auto;
	  transform: translate(-50%, -50%);
	  background: rgba(0, 0, 0, 0.9);
	  box-sizing: border-box;
	  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
	  border-radius: 10px;
	  color: #fff;
	  text-align: center;
	}
  
	/* 標題樣式 */
	.login-box p:first-child {
	  margin: 0 0 30px;
	  padding: 0;
	  font-size: 1.5rem;
	  font-weight: bold;
	  letter-spacing: 1px;
	}
  
	/* 輸入框容器 */
	.login-box .user-box {
	  position: relative;
	  margin-bottom: 30px;
	}
  
	/* 輸入框樣式 */
	.login-box .user-box input {
	  width: 100%;
	  padding: 10px 0;
	  font-size: 16px;
	  color: #fff;
	  border: none;
	  border-bottom: 1px solid #fff;
	  outline: none;
	  background: transparent;
	}
  
	/* 標籤樣式 */
	.login-box .user-box label {
	  position: absolute;
	  top: 0;
	  left: 0;
	  padding: 10px 0;
	  font-size: 16px;
	  color: #fff;
	  pointer-events: none;
	  transition: 0.5s;
	}
  
	/* 標籤在焦點狀態下的顯示 */
	.login-box .user-box input:focus ~ label,
	.login-box .user-box input:valid ~ label {
	  top: -20px;
	  left: 0;
	  font-size: 12px;
	}
  
	/* 登入按鈕樣式 */
	.login-box form button {
	  display: inline-block;
	  padding: 10px 40px;
	  font-weight: bold;
	  color: #fff;
	  font-size: 16px;
	  text-decoration: none;
	  text-transform: uppercase;
	  overflow: hidden;
	  transition: 0.5s;
	  letter-spacing: 3px;
	  border: 1px solid #fff;
	  border-radius: 5px;
	  cursor: pointer;
	  background: transparent;
	}
  
	/* 登入按鈕悬停時的效果 */
	.login-box form button:hover {
	  background: #fff;
	  color: #272727;
	}
  
	/* 登入表單底部的文字樣式 */
	.login-box p:last-child {
	  color: #aaa;
	  font-size: 14px;
	}
  </style>
  
  <div class="bk" style="background: url({login}); width: 100%; background-attachment: fixed;background-size: cover;">
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
  