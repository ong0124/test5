import { H3Event } from "h3";
import * as refundModel from '~~/server/models/refund'

export const readAll = async () =>{
    try{
        const result = await refundModel.readAll();

        return{
            data:result
        };
    }
    catch(err){
        throw createError({
            statusCode:500,
            statusMessage:'Something went wrong'
        });
    }
};

export const create = async (evt: H3Event) => {
  try {
    const body = await readBody(evt);
    const params = evt.context.params; // 取得路由參數

    // 轉換 user_id 和 id 為 number 類型
    //const userId = Number(params?.user_id);
    const id = params?.id;

    if (!id) {
      throw createError({ statusCode: 400, statusMessage: 'Invalid booking_id' });
    }

    // if (isNaN(userId) ) {
    //   throw createError({ statusCode: 400, statusMessage: 'Invalid user_id' });
    // }
    const result = await refundModel.create({
      booking_id: Number(id),
      user_id: body.user_id,
      refund_type: body.refund_type,
      reason: body.reason
    });
    return {
      data: result,
    };
  } catch (err) {
    console.error('ErrorController:', err);
    throw createError({
      statusCode: 500,
      statusMessage: 'Something went wrong'
    });
  }
};
