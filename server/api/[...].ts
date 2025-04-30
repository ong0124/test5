import { useBase, createRouter, defineEventHandler } from 'h3';

import * as usersCtrl from '~/server/controller/users';
import * as BookingCtrl from '~/server/controller/booking';
import * as RefundCtrl from '~/server/controller/refund';
import * as offDaysCtrl from '~/server/controller/offDays'; 
import * as PaymentCtrl from '~/server/controller/payment'; 

const router = createRouter();

router.get('/GETbooking', defineEventHandler(BookingCtrl.read));
router.post('/POSTbooking', defineEventHandler(BookingCtrl.create));
router.get('/FindBookingDetailById/:id', defineEventHandler(BookingCtrl.FindBookingDetailById));

router.get('/myTrip/:id', defineEventHandler(BookingCtrl.FindBookingByUserId));
router.get('/reschedulePage/:id', defineEventHandler(BookingCtrl.NotTraveledBooking));
router.get('/reschedulePage/details/:id', defineEventHandler(BookingCtrl.FindBookingDetailById));
router.put('/detailsUpdate/:id', defineEventHandler(BookingCtrl.update));
router.delete('/DeleteBookingById/:id', defineEventHandler(BookingCtrl.remove));
router.get('/notTraveled/:id', defineEventHandler(BookingCtrl.NotTraveledBooking));
router.get('/allBookingStatusByLineID/:LineID', defineEventHandler(BookingCtrl.allBookingStatusByLineID));


router.get('/FindBookingDetailById', defineEventHandler(BookingCtrl.FindBookingDetailById));

router.post('/PostRefund/:id',defineEventHandler(RefundCtrl.create))
router.get('/readRefundByLineID/:LineID',defineEventHandler(RefundCtrl.readRefundByLineID))

router.get('/GETallOffdays',defineEventHandler(offDaysCtrl.read));


router.post('/POSTpayment', defineEventHandler(PaymentCtrl.create));

router.get('/GETDetailUsers/:id', defineEventHandler(usersCtrl.detail));
router.post('/LoginCustomer/createUser', defineEventHandler(usersCtrl.createUser));
export default useBase('/api', router.handler);
