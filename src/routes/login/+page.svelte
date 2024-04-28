<!-- Login.svelte -->
<script>
	// 在這裡可以加入需要的腳本，如驗證表單等
  </script>
  
  <style>
	/* CSS 部分，定義了登錄表單的樣式 */
	.login-container {
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  height: 100vh; /* 使容器占滿整個視窗高度 */
	  background-image: url('login.png'); /* 設置背景圖片 */
	  background-size: cover; /* 讓背景圖片覆蓋整個容器 */
	  background-position: center; /* 將背景圖片置中 */
	}
  
	.login {
	  width: 340px;
	  background: #ffffffd5;
	  padding: 47px;
	  padding-bottom: 57px;
	  color: #000000;
	  border-radius: 17px;
	  font-size: 1.3em;
	  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	  animation: bounce 1s; /* 將動畫應用到 .login 元素 */
	}
  
	.login input[type="text"],
	.login input[type="password"] {
	  opacity: 1;
	  display: block;
	  border: none;
	  outline: none;
	  width: 100%;
	  padding: 13px 18px;
	  margin: 20px 0 0 0;
	  font-size: 0.8em;
	  border-radius: 100px;
	  background: #00000015;
	  color: #fff;
	  animation: bounce1 1.3s; /* 將動畫應用到 input 元素 */
	}
  
	.login input:focus {
		animation: bounce 1s; /* 輸入框獲得焦點時應用動畫 */
		-webkit-appearance: none; /* 禁用 WebKit 瀏覽器的默認樣式 */
		appearance: none; /* 禁用其他瀏覽器的默認樣式 */
	}

  
	.login input[type=submit]{
	  border: 0;
	  outline: 0;
	  width: 100%;
	  padding: 13px;
	  margin: 40px 0 0 0;
	  border-radius: 500px;
	  font-weight: 600;
	  animation: bounce2 1.6s; /* 將動畫應用到按鈕元素 */
	}
  
	.btn {
	  background: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
	  color: #fff;
	  padding: 16px !important;
	}
  
	.btn:hover {
	  background: linear-gradient(144deg, #1e1e1e , 20%,#1e1e1e 50%,#1e1e1e );
	  color: rgb(255, 255, 255);
	  padding: 16px !important;
	  cursor: pointer;
	  transition: all 0.4s ease;
	}
  
	@keyframes bounce {
	  0% {
		transform: translateY(-250px);
		opacity: 0;
	  }
	}
  
	@keyframes bounce1 {
	  0% {
		opacity: 0;
	  }
  
	  40% {
		transform: translateY(-100px);
		opacity: 0;
	  }
	}
  
	@keyframes bounce2 {
	  0% {
		opacity: 0;
	  }
  
	  70% {
		transform: translateY(-20px);
		opacity: 0;
	  }
	}
  </style>
  
  <div class="login-container">
	<div class="login">
	  <h1>Login</h1>
	  <form action="/login" method="post">
		<input pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{13}\.[0-9]{13}\.[0-9]{13}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{24}|[0-9]{13})(\]?)$" placeholder="Email" id="email" name="email" type="text">
		<input placeholder="Password" id="password" name="password" type="password">
		<input value="Login" class="btn" type="submit">
	  </form>
	</div>
  </div>
  
  