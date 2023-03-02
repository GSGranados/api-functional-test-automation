import constants from '../../data/constants.json'
import RestfulBookerController from '../controllers/RestfulBookerController';
import Booking from '../plain-objects/Booking';
import generateId from '../helper/testIdGenerator';
let initialTestId = 'API-FUNC-TEST';
let testId = "";
let increment = 1;
describe(`${initialTestId}: RAVN API Functional Test Automation`, () => {

    let bookingId: number;
    //Creating Booking Object
    const { firstname, lastname, totalprice, depositpaid, bookingdates, additionalneeds } = constants.bookingData.booking;
    const newBooking = new Booking(firstname, lastname, totalprice, depositpaid, bookingdates, additionalneeds);

    it(`${generateId(initialTestId, increment)}: Create a Booking with Restful Booker API - POST/booking`, async () => {
        testId = generateId(initialTestId, increment);
        //Sending Request
        const response = await RestfulBookerController.createBooking(newBooking.serializeObject());
        //Verify Booking Created
        await RestfulBookerController.verifyBookingCreated(response, newBooking);
        bookingId = response.body.bookingid;
    });
    increment++;
    it(`${generateId(initialTestId, increment)}: Search Booking Previously Created with Restful Booker API - GET/booking/:id`, async () => {
        testId = generateId(initialTestId, increment);
        //Sending Request
        const response = await RestfulBookerController.searchBooking(bookingId);
        //Validate Status and Response body
        await RestfulBookerController.verifyBookingFound(response, newBooking);
    });
    increment++;

    it(`${generateId(initialTestId, increment)}: Update Existing Booking Information with Restful Booker API - PUT/booking`, async () => {
        testId = generateId(initialTestId, increment);
        newBooking.setAdditionalNeeds(constants.misc.additionalNeedsEdited);
        //Sending Request - Updating booking
        await RestfulBookerController.updateBooking(newBooking.serializeObject(), bookingId);
        //Validate Booking Updated
        const response = await RestfulBookerController.searchBooking(bookingId)
        await RestfulBookerController.verifyBookingFound(response, newBooking);
    });
    increment++;

    it(`${generateId(initialTestId, increment)}: Delete Booking with Restful Booker API - DELETE/:id`, async () => {
        testId = generateId(initialTestId, increment);
        //Deleting Booking
        await RestfulBookerController.deleteBooking(bookingId);
        const response = await RestfulBookerController.searchBooking(bookingId);
        await RestfulBookerController.verifyBookingDeleted(response);
    });
});