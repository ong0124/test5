import { sql } from "../db/db";

export type offDays_dates = {
    id: number;
    start_offDays: string; 
    end_offDays: string;
    created_at?: string;
    created_by: string;
  };

  export const read = async () => {
    const result = await sql({
      query: 'SELECT * FROM offDays_dates'
    });
  
    return result as offDays_dates[];
  };