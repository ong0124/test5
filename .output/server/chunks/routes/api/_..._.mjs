import { r as readBody, c as createError, e as useBase, f as createRouter, g as defineEventHandler } from '../../_/nitro.mjs';
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
const detail$1 = async (id) => {
  const result = await sql({
    query: "SELECT * FROM users WHERE id = ?",
    values: [id]
  });
  return result.length === 1 ? result[0] : null;
};

const createUser = async (evt) => {
  try {
    const body = await readBody(evt);
    if (!body.id || !body.full_name) {
      throw createError({
        statusCode: 400,
        statusMessage: "Missing Line User Document"
      });
    }
    const result = await createUser$1({
      id: body.id,
      full_name: body.full_name,
      password: body.password || null,
      created_at: /* @__PURE__ */ new Date(),
      // 自動填入當前時間
      LineID: body.LineID || null,
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

const read$1 = async () => {
  const result = await sql({
    query: "SELECT * From booking"
  });
  return result;
};
const create$3 = async (data) => {
  const result = await sql({
    query: `
      INSERT INTO booking (
      trip_type,
      user_id,
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
      data.user_id,
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
const FindBookingByUserId$1 = async (user_id) => {
  const result = await sql({
    query: "SELECT * from booking WHERE user_id = ?",
    values: [user_id]
  });
  return result;
};
const NotTraveledBooking$1 = async (user_id) => {
  const result = await sql({
    query: "SELECT * FROM booking WHERE user_id = ? AND status = 'notTraveled'",
    // 使用雙引號包住整個 SQL 字串
    values: [user_id]
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
const checkOrders$1 = async () => {
  const result = await sql({
    query: "SELECT *, (adult_num + child_num) AS total_tickets FROM booking ORDER BY shuttle_date ASC, shuttle_time ASC"
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
const create$2 = async (evt) => {
  try {
    const body = await readBody(evt);
    const result = await create$3({
      trip_type: body.trip_type,
      user_id: body.user_id,
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
const checkOrders = async () => {
  try {
    const result = await checkOrders$1();
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
    values: [data.booking_id, data.user_id, data.refund_type, data.reason]
  });
  console.log("Inserted result:", result);
  return result.length === 1 ? result[0] : null;
};

const create = async (evt) => {
  try {
    const body = await readBody(evt);
    const params = evt.context.params;
    const id = params == null ? void 0 : params.id;
    if (!id) {
      throw createError({ statusCode: 400, statusMessage: "Invalid booking_id" });
    }
    const result = await create$1({
      booking_id: Number(id),
      user_id: body.user_id,
      refund_type: body.refund_type,
      reason: body.reason
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
router.get("/GETbooking", defineEventHandler(read));
router.post("/POSTbooking", defineEventHandler(create$2));
router.get("/confirmationPage/:id", defineEventHandler(FindBookingDetailById));
router.get("/myTrip/:id", defineEventHandler(FindBookingByUserId));
router.get("/reschedulePage/:id", defineEventHandler(NotTraveledBooking));
router.get("/reschedulePage/details/:id", defineEventHandler(FindBookingDetailById));
router.put("/detailsUpdate/:id", defineEventHandler(update));
router.delete("/DeleteBookingById/:id", defineEventHandler(remove));
router.get("/FindBookingDetailById/:id", defineEventHandler(FindBookingDetailById));
router.post("/PostRefund/:id", defineEventHandler(create));
router.get("/GETallOrders", defineEventHandler(checkOrders));
router.get("/GETDetailUsers/:id", defineEventHandler(detail));
router.post("/LoginCustomer/createUser", defineEventHandler(createUser));
const _____ = useBase("/api", router.handler);

export { _____ as default };
//# sourceMappingURL=_..._.mjs.map
