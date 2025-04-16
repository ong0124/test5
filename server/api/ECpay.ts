// server/api/createPayment.ts
import axios from 'axios'

export default defineEventHandler(async (event) => {
  // Use readBody instead of useBody
  const body = await readBody(event)

  const paymentData = {
    amount: body.amount,
    currency: body.currency,
    // 其他支付相关数据
  }

  try {
    const response = await axios.post('https://api.greenworld.com/create_payment', paymentData, {
      headers: {
        'Authorization': `Bearer YOUR_API_KEY`, // 替换为你自己的API key
      },
    })

    return {
      paymentUrl: response.data.paymentUrl, // 返回支付链接
    }
  } catch (error) {
    console.error('支付请求失败', error)
    return { error: '支付请求失败' }
  }
})
