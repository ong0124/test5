import { g as defineEventHandler, r as readBody } from '../../_/nitro.mjs';
import axios from 'axios';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import 'node:path';

const ECpay = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const paymentData = {
    amount: body.amount,
    currency: body.currency
    // 其他支付相关数据
  };
  try {
    const response = await axios.post("https://api.greenworld.com/create_payment", paymentData, {
      headers: {
        "Authorization": `Bearer YOUR_API_KEY`
        // 替换为你自己的API key
      }
    });
    return {
      paymentUrl: response.data.paymentUrl
      // 返回支付链接
    };
  } catch (error) {
    console.error("\u652F\u4ED8\u8BF7\u6C42\u5931\u8D25", error);
    return { error: "\u652F\u4ED8\u8BF7\u6C42\u5931\u8D25" };
  }
});

export { ECpay as default };
//# sourceMappingURL=ECpay.mjs.map
