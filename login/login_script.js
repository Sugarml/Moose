document.addEventListener('DOMContentLoaded', () => {

    // 獲取 DOM 元素
    const loginForm = document.getElementById('emailLoginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const submitButton = document.getElementById('submitButton');
    const messageDiv = document.getElementById('loginMessage');
    const passwordToggle = document.getElementById('passwordToggle');

    // 1. 密碼顯示/隱藏 切換
    // 檢查元素是否存在，避免錯誤
    if (passwordToggle && passwordInput) {
        passwordToggle.addEventListener('click', () => {
            // 檢查當前密碼欄位的類型
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            
            // 切換眼睛圖示
            passwordToggle.classList.toggle('fa-eye');
            passwordToggle.classList.toggle('fa-eye-slash');
        });
    }

    // 2. 監聽表單提交事件
    // 檢查元素是否存在，避免錯誤
    if (loginForm) {
        loginForm.addEventListener('submit', async (event) => {
            // 阻止表單的預設提交行為 (避免頁面刷新)
            event.preventDefault(); 

            // 獲取使用者輸入
            const email = emailInput.value;
            const password = passwordInput.value;

            // 顯示載入狀態並禁用按鈕
            submitButton.disabled = true;
            submitButton.textContent = '登入中...';
            messageDiv.textContent = '';
            messageDiv.className = ''; // 清除之前的樣式

            // --- 模擬後端 API 請求 ---
            // 實際應用中，您會在這裡使用 fetch() 
            // try {
            //     const response = await fetch('/api/login', {
            //         method: 'POST',
            //         headers: {
            //             'Content-Type': 'application/json'
            //         },
            //         body: JSON.stringify({ email, password })
            //     });
            //
            //     if (response.ok) {
            //         // 登入成功
            //         const data = await response.json();
            //         messageDiv.textContent = '登入成功！正在跳轉...';
            //         messageDiv.className = 'login-message-success';
            //         // 儲存 token (例如：localStorage.setItem('token', data.token);)
            //         // setTimeout(() => window.location.href = '/dashboard', 1000); 
            //     } else {
            //         // 登入失敗 (例如：密碼錯誤或帳號不存在)
            //         messageDiv.textContent = '電子郵件或密碼錯誤。';
            //         messageDiv.className = 'login-message-error';
            //         submitButton.disabled = false;
            //         submitButton.textContent = '登入';
            //     }
            // } catch (error) {
            //     // 網路或其他錯誤
            //     messageDiv.textContent = '發生錯誤，請稍後再試。';
            //     messageDiv.className = 'login-message-error';
            //     submitButton.disabled = false;
            //     submitButton.textContent = '登入';
            // }
            
            // 這裡我們先用 setTimeout 來模擬 1.5 秒的網路延遲 (保留模擬程式碼)
            setTimeout(() => {
                // 模擬後端驗證邏輯
                if (email === 'user@example.com' && password === 'password123') {
                    // 模擬登入成功
                    messageDiv.textContent = '登入成功！正在跳轉...';
                    messageDiv.className = 'login-message-success';
                    
                    // 實際應用中，您會在這裡處理後端傳來的 token 並跳轉頁面
                    // setTimeout(() => window.location.href = '/dashboard', 1000); 
                } else {
                    // 模擬登入失敗
                    messageDiv.textContent = '電子郵件或密碼錯誤。';
                    messageDiv.className = 'login-message-error';
                    
                    // 恢復按鈕狀態
                    submitButton.disabled = false;
                    submitButton.textContent = '登入';
                }

            }, 1500);
        });
    }

});