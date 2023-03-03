import constants from '../../data/constants.json'
import RestfulBookerController from '../controllers/RestfulBookerController';
import Booking from '../plain-objects/Booking';
import generateId from '../helper/testIdGenerator';
let initialTestId = 'API-NEGATIVE-TEST';
let testId = "";
let increment = 1;
describe(`${initialTestId}: RAVN API Negative Test Automation`, () => {

    let bookingId: number;
    //Creating Booking Object
    const { firstname, lastname, totalprice, depositpaid, bookingdates, additionalneeds } = constants.incorrectBookingData.booking;
    const newBooking = new Booking(firstname, lastname, totalprice, depositpaid, bookingdates, additionalneeds);

    it(`${generateId(initialTestId, increment)}: Create a Booking with Restful Booker API - POST/booking - Incorrect Data Schema`, async () => {
        testId = generateId(initialTestId, increment);
        //Sending Request
        const response = await RestfulBookerController.createBooking(newBooking.serializeObject());
        //Verify Booking Created Error
        await RestfulBookerController.verifyBookingCreatedError(response);
    });
    increment++;

    it(`${generateId(initialTestId, increment)}: Create a Booking with Restful Booker API - POST/booking - Missing Attribute`, async () => {
        testId = generateId(initialTestId, increment);
        delete newBooking.depositpaid;
        //Sending Request
        const response = await RestfulBookerController.createBooking(newBooking.serializeObject());
        //Verify Booking Created Error
        await RestfulBookerController.verifyBookingCreatedError(response);
    });
    increment++;

    it(`${generateId(initialTestId, increment)}: Create a Booking with Restful Booker API - POST/booking - Incorrect Booking Dates Format`, async () => {
        testId = generateId(initialTestId, increment);
        newBooking.setIsDespositPaid(true);
        newBooking.setBookingDates(constants.incorrectBookingData.incorrectBookingDates);
        //Sending Request
        const response = await RestfulBookerController.createBooking(newBooking.serializeObject());
        //Verify Booking Response Error
        await RestfulBookerController.verifyFailedBookingCreatedResponse(response, newBooking);
    });
    increment++;

    it(`${generateId(initialTestId, increment)}: Search Inexisting Booking with Restful Booker API - GET/booking/:id - Inexisting Booking`, async () => {
        testId = generateId(initialTestId, increment);
        //Sending Request
        const response = await RestfulBookerController.searchBooking(constants.incorrectBookingData.inexistentBookingId);
        //Validate Status and Response body
        await RestfulBookerController.verifyBookingNotFound(response);
    });
    increment++;

});