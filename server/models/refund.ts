import { sql } from "../db/db";

export type RefundModel = {
    id: number;
    booking_id: number;
    LineID: string;
    status: string;
    refund_amount: number;
    reason: string;
    departure_loc:string;
    destination_loc: string;
    arrivalpoint_date: string; 
    arrivalpoint_time: string; 
    shuttle_date: string; 
    shuttle_time: string; 
    adult_num: number;
    child_num: number;
}



export const readAll = async () =>{
    const result = await sql({
        query: 'SELECT * From refund_apply'
    });

    return result as RefundModel[];
}

export const readRefundByLineID = async (LineID: string) => {
  const result = await sql({
    query: `SELECT   
    r.id,
    r.booking_id,
    r.LineID,
    r.status,
    r.refund_amount,
    r.created_at,
    b.* 
    FROM refund_apply r
    JOIN 
    booking b ON r.booking_id = b.id
    WHERE r.LineID = ?`,
    values: [LineID],
  })as any;;
  console.log(result);
  return result as RefundModel[];
};

export const create = async (data: Pick<RefundModel,Extract<keyof RefundModel, 'booking_id' | 'LineID' |'reason'>>) => {
  const result = (await sql({
    query: `
      INSERT INTO refund_apply (
        booking_id,
        LineID,
        reason
      ) VALUES (
        ?,
        ?,
        ?
      ) 
    `,
    values: [data.booking_id, data.LineID, data.reason,]
  })) as any;
  console.log('Inserted result:', result);
  return result.length === 1 ? (result[0] as RefundModel) : null;
};
