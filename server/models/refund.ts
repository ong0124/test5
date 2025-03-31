import { sql } from "../db/db";

export type RefundModel = {
    id: number;
    booking_id: number;
    user_id: number;
    status: string;
    refund_amount: number;
    refund_type: string;
    reason: string;
}


export const readAll = async () =>{
    const result = await sql({
        query: 'SELECT * From refund_apply'
    });

    return result as RefundModel[];
}

export const create = async (data: Pick<RefundModel,Exclude<keyof RefundModel, 'id' | 'status' |'refund_amount'>>) => {
  const result = (await sql({
    query: `
      INSERT INTO refund_apply (
        booking_id,
        user_id,
        refund_type,
        reason
      ) VALUES (
        ?,
        ?,
        ?,
        ?
      ) 
    `,
    values: [data.booking_id, data.user_id, data.refund_type,data.reason,]
  })) as any;
  console.log('Inserted result:', result);
  return result.length === 1 ? (result[0] as RefundModel) : null;
};
