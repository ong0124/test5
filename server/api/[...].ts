import { useBase, createRouter, defineEventHandler } from 'h3';

import * as usersCtrl from '~/server/controller/users';
import * as BookingCtrl from '~/server/controller/booking';
import * as RefundCtrl from '~/server/controller/refund'

const router = createRouter();

router.get('/GETbooking', defineEventHandler(BookingCtrl.read));
router.post('/POSTbooking', defineEventHandler(BookingCtrl.create));
router.get('/confirmationPage/:id', defineEventHandler(BookingCtrl.FindBookingDetailById));

router.get('/myTrip/:id', defineEventHandler(BookingCtrl.FindBookingByUserId));
router.get('/reschedulePage/:id', defineEventHandler(BookingCtrl.NotTraveledBooking));
router.get('/reschedulePage/details/:id', defineEventHandler(BookingCtrl.FindBookingDetailById));
router.put('/detailsUpdate/:id', defineEventHandler(BookingCtrl.update));
router.delete('/DeleteBookingById/:id', defineEventHandler(BookingCtrl.remove));

router.get('/FindBookingDetailById/:id', defineEventHandler(BookingCtrl.FindBookingDetailById));
router.post('/PostRefund/:id',defineEventHandler(RefundCtrl.create))


//管理端的api
router.get('/GETallOrders', defineEventHandler(BookingCtrl.checkOrders));

router.get('/GETDetailUsers/:id', defineEventHandler(usersCtrl.detail));
router.post('/LoginCustomer/createUser', defineEventHandler(usersCtrl.createUser));
export default useBase('/api', router.handler);
