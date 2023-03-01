import constants from '../../data/constants.json'
import RestfulBookerController from '../controllers/RestfulBookerController.js';
import Booking from '../plain-objects/Booking.js';

describe('RAVN API Functional Test Automation', () => {
    let bookingId;
    //Creating Booking Object
    const { firstname, lastname, totalprice, depositpaid, bookingdates, additionalneeds } = constants.bookingData.booking;
    const newBooking = new Booking(firstname, lastname, totalprice, depositpaid, bookingdates, additionalneeds);

    it.only('Create a Booking with Restful Booker API - POST/booking', async () => {
        //Sending Request
        const response = await RestfulBookerController.createBooking(newBooking.serializeObject());
        //Verify Booking Created
        await RestfulBookerController.verifyBookingCreated(response, newBooking);
        bookingId = response.body.bookindgid;
        console.log(bookingId);
    });

    it('Search Booking Previously Created with Restful Booker API - GET/booking/:id', async () => {
        //Sending Request
        const response = await RestfulBookerController.searchBooking(bookingId)
        //Validate Status and Response body
        await RestfulBookerController.verifyBookingCreated(response, newBooking);
    });

    it('Update Existing Booking Information with Restful Booker API - PUT/booking', async () => {
        newBooking.setAdditionalNeeds(constants.misc.additionalNeedsEdited);
        //Sending Request - Updating booking
        await RestfulBookerController.updateBooking(newBooking.serializeObject(), bookingId);
        //Validate Booking Updated
        const response = await RestfulBookerController.searchBooking(bookingId)
        await RestfulBookerController.verifyBookingCreated(response, newBooking);
    });

    it('Delete Booking with Restful Booker API - DELETE/:id', async () => {
        //Deleting Booking
        await RestfulBookerController.deleteBooking(bookingId);
        await RestfulBookerController.searchBooking(bookingId);
        await RestfulBookerController.verifyBookingDeleted(response);
    });
});