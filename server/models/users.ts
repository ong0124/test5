import { sql } from '~/server/db/db';

export type Users = {
  id: number;
  full_name: string;
  password? : string;
  created_at: Date;
  LineID?:number;
  email? :string; 
  birthday?: Date;
  account_name? :string
  };

export const read = async () => {
  const result = await sql({
    query: 'SELECT * FROM users'
  });

  return result as Users[];
};

export const createUser = async (data: Users) => {
  const result = (await sql({
    query: `
      INSERT IGNORE INTO users (
        id,
        full_name,
        password,
        created_at,
        LineID,
        email,
        birthday,
        account_name
      ) VALUES (
       ?, ?, ?, ?, ?, ?, ?, ?
      )
    `,
    values: [
      data.id,
      data.full_name,
      data.password?? null,
      data.created_at,
      data.LineID?? null,
      data.email ?? null, 
      data.birthday?? null,
      data.account_name ?? null 
    ]
  })) as any;

  console.log('Inserted result:', result);

  return result.insertId ? { ...data, id: result.insertId } : null;
};


export const detail = async (id: string) => {
  const result = (await sql({
    query: 'SELECT * FROM users WHERE id = ?',
    values: [id]
  })) as any;

  return result.length === 1 ? (result[0] as Users) : null;
};

// export const update = async (id: string, data: Pick<BlogModel, 'title' | 'content'>) => {
//   await sql({
//     query: `
//       UPDATE blog
//       SET
//         title = ?,
//         content = ?
//       WHERE id = ?
//     `,
//     values: [data.title, data.content, id]
//   });

//   return await detail(id);
// };

// export const remove = async (id: string) => {
//   await sql({
//     query: 'DELETE FROM blog WHERE id = ?',
//     values: [id]
//   });

//   return true;
// };
