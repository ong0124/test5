import { H3Event } from 'h3';

import * as offDaysModel from '~~/server/models/offDays';


export const read = async () => {
    try {
      const result = await offDaysModel.read();
  
      return {
        data: result
      };
    } catch (err) {
      throw createError({
        statusCode: 500,
        statusMessage: 'Something went wrong'
      });
    }
  };