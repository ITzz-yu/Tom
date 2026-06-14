// ==========================================
// HTTP 请求封装
// 统一后端接口调用，支持基础 URL 配置
// ==========================================

const BASE_URL = 'http://localhost:8080'

/**
 * 通用请求方法
 * @param {string} url - 请求路径
 * @param {object} options - 请求配置
 * @returns {Promise} 响应数据
 */
async function request(url, options = {}) {
  const token = localStorage.getItem('access_token')
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers
  }

  if (token) {
    headers['Authorization'] = \Bearer \\
  }

  try {
    const response = await fetch(\\\\, {
      ...options,
      headers
    })

    if (!response.ok) {
      throw new Error(\HTTP error! status: \\)
    }

    return await response.json()
  } catch (error) {
    console.error('Request failed:', error)
    throw error
  }
}

export default {
  // GET 请求
  get(url, params) {
    const query = new URLSearchParams(params).toString()
    return request(url + (query ? '?\' : ''))
  },

  // POST 请求
  post(url, data) {
    return request(url, {
      method: 'POST',
      body: JSON.stringify(data)
    })
  },

  // 登录接口 - 对接后端 API
  login(username, password) {
    return this.post('/api/auth/login', { username, password })
  },

  // 获取用户信息
  getUserInfo() {
    return this.get('/api/user/info')
  }
}