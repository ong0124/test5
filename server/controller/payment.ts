import { H3Event } from "h3";
import dayjs from 'dayjs';
import * as PaymentModel from '~~/server/models/payment'
const nowTime = new Date().toTimeString().split(' ')[0];

export const create = async (evt: H3Event)=>{
    try{
        const body = await readBody(evt);
        if (!body.booking_id || !body.payment_method || !body.LineID) {
          throw createError({
            statusCode: 400,
            statusMessage: 'booking_id、payment_method 和 LineID 不能为空',
          });
        }
        const result = await PaymentModel.create({ 
            booking_id: body.booking_id,
            payment_amount: body.payment_amount,
            payment_method: body.payment_method,
            payment_status: body.payment_status,
            payment_time: nowTime,
            LineID: body.LineID
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