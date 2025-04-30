import { r as readBody, c as createError, g as getRouterParam, e as useBase, f as createRouter, h as defineEventHandler } from '../../_/nitro.mjs';
import { createPool } from 'mysql2/promise';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import 'node:path';

const pool = createPool({
  host: "35.76.152.103",
  user: "qs-tech-remote",
  database: "line_booking_ticket",
  password: "Qs202588",
  port: 3306
});
const sql = async ({ query, values }) => {
  try {
    const [rows] = await pool.query(query, values);
    return rows;
  } catch (err) {
    console.error("Database error:", err);
    throw new Error("Database query failed");
  }
};

const createUser$1 = async (data) => {
  var _a, _b, _c, _d, _e;
  const result = await sql({
    query: `
      INSERT IGNORE INTO users (
        full_name,
        password,
        created_at,
        LineID,
        email,
        birthday,
        account_name
      ) VALUES (
       ?, ?, ?, ?, ?, ?, ?
      )
    `,
    values: [
      data.full_name,
      (_a = data.password) != null ? _a : null,
      data.created_at,
      (_b = data.LineID) != null ? _b : null,
      (_c = data.email) != null ? _c : null,
      (_d = data.birthday) != null ? _d : null,
      (_e = data.account_name) != null ? _e : null
    ]
  });
  console.log("Inserted result:", result);
  return result.insertId ? { ...data, id: result.insertId } : null;
};
const detail$1 = async (LineID) => {
  const result = await sql({
    query: "SELECT * FROM users WHERE LineID = ?",
    values: [LineID]
  });
  return result.length === 1 ? result[0] : null;
};

const createUser = async (evt) => {
  try {
    const body = await readBody(evt);
    if (!body.LineID || !body.full_name) {
      throw createError({
        statusCode: 400,
        statusMessage: "Missing Line User Document"
      });
    }
    const result = await createUser$1({
      full_name: body.full_name,
      password: body.password || null,
      created_at: /* @__PURE__ */ new Date(),
      // 自動填入當前時間
      LineID: body.LineID,
      email: body.email || null,
      birthday: body.birthday || null,
      account_name: body.account_name || null
    });
    return {
      success: true,
      data: result
    };
  } catch (err) {
    console.error("Error:", err);
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong"
    });
  }
};
const detail = async (evt) => {
  var _a;
  try {
    const result = await detail$1((_a = evt.context.params) == null ? void 0 : _a.id);
    return {
      data: result
    };
  } catch {
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong"
    });
  }
};

const read$3 = async () => {
  const result = await sql({
    query: "SELECT * From booking"
  });
  return result;
};
const create$5 = async (data) => {
  const result = await sql({
    query: `
      INSERT INTO booking (
      trip_type,
      LineID,
      adult_num,
      child_num,
      contact_phone,
      totalprice,
      contact_name,
      departure_loc,
      destination_loc,
      return_departure,
      return_destination,
      arrivalpoint_date,
      arrivalpoint_time,
      return_arrival_date,
      return_arrival_time,
      flight_num,
      ferry_time,
      flight_time,
      shuttle_date,
      shuttle_time,
      return_shuttle_date,
      return_shuttle_time
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `,
    values: [
      data.trip_type,
      data.LineID,
      data.adult_num,
      data.child_num,
      data.contact_phone,
      data.totalprice,
      data.contact_name,
      data.departure_loc,
      data.destination_loc,
      data.return_departure,
      data.return_destination,
      data.arrivalpoint_date,
      data.arrivalpoint_time,
      data.return_arrival_date,
      data.return_arrival_time,
      data.flight_num,
      data.ferry_time,
      data.flight_time,
      data.shuttle_date,
      data.shuttle_time,
      data.return_shuttle_date,
      data.return_shuttle_time
    ]
  });
  console.log("Inserted result:", result);
  const insertedId = await sql({
    query: `SELECT LAST_INSERT_ID() AS id;`
  });
  return insertedId ? { id: insertedId } : null;
};
const update$1 = async (id, data) => {
  await sql({
    query: `
        UPDATE booking
        SET
          adult_num = ?,
          child_num = ?,
          contact_phone = ?,
          totalprice = ?,
          contact_name = ?,
          departure_loc = ?,
          destination_loc = ?,
          return_departure = ?,
          return_destination = ?,
          ferry_time = ?,
          flight_time = ?,
          shuttle_date = ?,
          shuttle_time = ?,
          return_shuttle_date = ?,
          return_shuttle_time = ?
        WHERE id = ?
      `,
    values: [
      data.adult_num,
      data.child_num,
      data.contact_phone,
      data.totalprice,
      data.contact_name,
      data.departure_loc,
      data.destination_loc,
      data.return_departure,
      data.return_destination,
      data.ferry_time,
      data.flight_time,
      data.shuttle_date,
      data.shuttle_time,
      data.return_shuttle_date,
      data.return_shuttle_time,
      id
    ]
  });
  return await FindBookingDetailById$1(id);
};
const FindBookingDetailById$1 = async (id) => {
  const result = await sql({
    query: "SELECT * from booking WHERE id = ?",
    values: [id]
  });
  return result.length === 1 ? result[0] : null;
};
const FindBookingByUserId$1 = async (LineID) => {
  const result = await sql({
    query: "SELECT * from booking WHERE LineID = ?",
    values: [LineID]
  });
  return result;
};
const NotTraveledBooking$1 = async (LineID) => {
  const result = await sql({
    query: "SELECT * FROM booking WHERE LineID = ? AND status = 'notTraveled'",
    // 使用雙引號包住整個 SQL 字串
    values: [LineID]
  });
  return result;
};
const remove$1 = async (id) => {
  await sql({
    query: "DELETE FROM booking WHERE id = ?",
    values: [id]
  });
  return true;
};
const allBookingStatusByLineID$1 = async (LineID) => {
  const result = await sql({
    query: `
      SELECT 
        b.*, 
        r.*, 
        b.id AS id,
        b.status AS status,
        r.status AS refund_status,
        r.id AS refund_id 
      FROM booking b
      JOIN refund_apply r ON r.booking_id = b.id 
      WHERE b.LineID = ?
      ORDER BY b.status ASC`,
    values: [LineID]
  });
  return result;
};

const read$2 = async () => {
  try {
    const result = await read$3();
    return {
      data: result
    };
  } catch (err) {
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong"
    });
  }
};
const create$4 = async (evt) => {
  try {
    const body = await readBody(evt);
    const result = await create$5({
      trip_type: body.trip_type,
      LineID: body.LineID,
      adult_num: body.adult_num,
      child_num: body.child_num,
      contact_phone: body.contact_phone,
      totalprice: body.totalprice,
      contact_name: body.contact_name,
      departure_loc: body.departure_loc,
      destination_loc: body.destination_loc,
      return_departure: body.return_departure,
      return_destination: body.return_destination,
      arrivalpoint_date: body.arrivalpoint_date,
      arrivalpoint_time: body.arrivalpoint_time,
      return_arrival_date: body.return_arrival_date,
      return_arrival_time: body.return_arrival_time,
      flight_num: body.flight_num,
      ferry_time: body.ferry_time,
      flight_time: body.flight_time,
      shuttle_date: body.shuttle_date,
      shuttle_time: body.shuttle_time,
      return_shuttle_date: body.return_shuttle_date,
      return_shuttle_time: body.return_shuttle_time
    });
    if (!result || !result.id) {
      throw createError({ statusCode: 500, statusMessage: "Failed to create booking, no ID returned" });
    }
    return {
      data: result,
      id: result.id
    };
  } catch (err) {
    console.error("ErrorController:", err);
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong"
    });
  }
};
const FindBookingDetailById = async (evt) => {
  var _a;
  try {
    const result = await FindBookingDetailById$1((_a = evt.context.params) == null ? void 0 : _a.id);
    return {
      data: result
    };
  } catch {
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong"
    });
  }
};
const FindBookingByUserId = async (evt) => {
  var _a;
  try {
    const result = await FindBookingByUserId$1((_a = evt.context.params) == null ? void 0 : _a.id);
    return {
      data: result
    };
  } catch {
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong"
    });
  }
};
const NotTraveledBooking = async (evt) => {
  var _a;
  try {
    const result = await NotTraveledBooking$1((_a = evt.context.params) == null ? void 0 : _a.id);
    return {
      data: result
    };
  } catch {
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong"
    });
  }
};
const remove = async (evt) => {
  var _a;
  try {
    const result = await remove$1((_a = evt.context.params) == null ? void 0 : _a.id);
    return {
      data: result
    };
  } catch {
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong"
    });
  }
};
const update = async (evt) => {
  var _a, _b;
  try {
    const id = (_a = evt.context.params) == null ? void 0 : _a.id;
    if (!id) {
      throw createError({
        statusCode: 400,
        statusMessage: "Invalid request: ID is required"
      });
    }
    const body = await readBody(evt);
    if (!body) {
      throw createError({
        statusCode: 400,
        statusMessage: "Invalid request: Missing body data"
      });
    }
    const result = await update$1((_b = evt.context.params) == null ? void 0 : _b.id, {
      adult_num: body.adult_num,
      child_num: body.child_num,
      contact_phone: body.contact_phone,
      totalprice: body.totalprice,
      contact_name: body.contact_name,
      departure_loc: body.departure_loc,
      destination_loc: body.destination_loc,
      return_departure: body.return_departure,
      return_destination: body.return_destination,
      ferry_time: body.ferry_time,
      flight_time: body.flight_time,
      shuttle_date: body.shuttle_date,
      shuttle_time: body.shuttle_time,
      return_shuttle_date: body.return_shuttle_date,
      return_shuttle_time: body.return_shuttle_time
    });
    return {
      data: result
    };
  } catch {
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong"
    });
  }
};
const allBookingStatusByLineID = async (evt) => {
  var _a;
  try {
    const result = await allBookingStatusByLineID$1((_a = evt.context.params) == null ? void 0 : _a.LineID);
    return {
      data: result
    };
  } catch {
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong"
    });
  }
};

const readRefundByLineID$1 = async (LineID) => {
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
    values: [LineID]
  });
  console.log(result);
  return result;
};
const create$3 = async (data) => {
  const result = await sql({
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
    values: [data.booking_id, data.LineID, data.reason]
  });
  console.log("Inserted result:", result);
  return result.length === 1 ? result[0] : null;
};

const readRefundByLineID = async (evt) => {
  try {
    const LineID = getRouterParam(evt, "LineID");
    if (!LineID) {
      throw createError({
        statusCode: 400,
        statusMessage: "Missing LineID parameter"
      });
    }
    const result = await readRefundByLineID$1(LineID);
    return {
      data: result
    };
  } catch (err) {
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong"
    });
  }
};
const create$2 = async (evt) => {
  try {
    const body = await readBody(evt);
    const params = evt.context.params;
    const id = params == null ? void 0 : params.id;
    if (!id) {
      throw createError({ statusCode: 400, statusMessage: "Invalid booking_id" });
    }
    const result = await create$3({
      booking_id: Number(id),
      LineID: body.LineID,
      reason: body.reason
    });
    return {
      success: true
    };
  } catch (err) {
    console.error("ErrorController:", err);
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong"
    });
  }
};

const read$1 = async () => {
  const result = await sql({
    query: "SELECT * FROM offDays_dates"
  });
  return result;
};

const read = async () => {
  try {
    const result = await read$1();
    return {
      data: result
    };
  } catch (err) {
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong"
    });
  }
};

const create$1 = async (data) => {
  const result = await sql({
    query: `
      INSERT IGNORE INTO payment (
      booking_id,
      payment_amount,
      payment_method,
      payment_status,
      payment_time,
      LineID
      ) VALUES(?, ?, ?, ?, ?, ?)`,
    values: [
      data.booking_id,
      data.payment_amount,
      data.payment_method,
      data.payment_status,
      data.payment_time,
      data.LineID
    ]
  });
  console.log("Inserted result:", result);
};

const nowTime = (/* @__PURE__ */ new Date()).toTimeString().split(" ")[0];
const create = async (evt) => {
  try {
    const body = await readBody(evt);
    if (!body.booking_id || !body.payment_method || !body.LineID) {
      throw createError({
        statusCode: 400,
        statusMessage: "booking_id\u3001payment_method \u548C LineID \u4E0D\u80FD\u4E3A\u7A7A"
      });
    }
    const result = await create$1({
      booking_id: body.booking_id,
      payment_amount: body.payment_amount,
      payment_method: body.payment_method,
      payment_status: body.payment_status,
      payment_time: nowTime,
      LineID: body.LineID
    });
    return {
      data: result
    };
  } catch (err) {
    console.error("ErrorController:", err);
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong"
    });
  }
};

const router = createRouter();
router.get("/GETbooking", defineEventHandler(read$2));
router.post("/POSTbooking", defineEventHandler(create$4));
router.get("/FindBookingDetailById/:id", defineEventHandler(FindBookingDetailById));
router.get("/myTrip/:id", defineEventHandler(FindBookingByUserId));
router.get("/reschedulePage/:id", defineEventHandler(NotTraveledBooking));
router.get("/reschedulePage/details/:id", defineEventHandler(FindBookingDetailById));
router.put("/detailsUpdate/:id", defineEventHandler(update));
router.delete("/DeleteBookingById/:id", defineEventHandler(remove));
router.get("/notTraveled/:id", defineEventHandler(NotTraveledBooking));
router.get("/allBookingStatusByLineID/:LineID", defineEventHandler(allBookingStatusByLineID));
router.get("/FindBookingDetailById", defineEventHandler(FindBookingDetailById));
router.post("/PostRefund/:id", defineEventHandler(create$2));
router.get("/readRefundByLineID/:LineID", defineEventHandler(readRefundByLineID));
router.get("/GETallOffdays", defineEventHandler(read));
router.post("/POSTpayment", defineEventHandler(create));
router.get("/GETDetailUsers/:id", defineEventHandler(detail));
router.post("/LoginCustomer/createUser", defineEventHandler(createUser));
const _____ = useBase("/api", router.handler);

export { _____ as default };
//# sourceMappingURL=_..._.mjs.map
