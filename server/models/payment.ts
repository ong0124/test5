import { sql } from "../db/db";

export type PaymentModel = {
    id: number;
    booking_id: number;
    payment_amount: number; 
    payment_method?: string;
    payment_status: string;
    payment_time?: string; 
    transaction_id?: string;
    LineID: string;
}


export const create = async(data: Pick<PaymentModel, Exclude<keyof PaymentModel, 'id' | 'status'| 'total_tickets'>>)=>{
    const result = (await sql({
        query:`
      INSERT IGNORE INTO payment (
      booking_id,
      payment_amount,
      payment_method,
      payment_status,
      payment_time,
      LineID
      ) VALUES(?, ?, ?, ?, ?, ?)`,
       values:[
        data.booking_id,
        data.payment_amount,
        data.payment_method,
        data.payment_status,
        data.payment_time,
        data.LineID
       ]}))as any;
       console.log('Inserted result:', result);

    };