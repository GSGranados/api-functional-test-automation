import { expect } from "chai";
import { request } from "../helper/supertestHelper";
import { APPLICATION_JSON, AUTHORIZATION_TOKEN, COOKIE } from "../helper/apiTypes";
import Booking from "../plain-objects/Booking";
class RestfulBookerController {
    constructor() { }
    baseURL: string = "/booking"


    /**
     * @function createBooking It sends an API request to the restful booker - booking resource to create a Booking
     * @param bookingData The serialized booking data to send
     * @returns The response from the API Request
     */
    async createBooking(bookingData: string) {
        const response = await request.post(this.baseURL)
            .send(bookingData)
            .set('Accept', APPLICATION_JSON)
            .set('Content-Type', APPLICATION_JSON);
        return response;
    }

    /**
     * @function verifyBookingCreated It makes some Chai assertions to validate the existence of a Booking record after executing a POST Request
     * @param response the response from the API Request
     * @param bookingData The Booking object to compare the integrity of the data obtained
     */
    async verifyBookingCreated(response: any, bookingData: Booking) {
        expect(response.statusCode).to.be.eq(200);
        expect(response.body).to.not.be.null;
        expect(response.body.booking).to.deep.include(bookingData);
    }

    async verifyFailedBookingCreatedResponse(response: any, bookingData: Booking) {
        expect(response.statusCode).to.be.eq(200);
        expect(response.body).to.not.be.null;
        expect(response.body.booking).to.not.deep.include(bookingData);
    }


    async verifyBookingCreatedError(response: any) {
        expect(response.statusCode).to.be.eq(500);
        expect(response.body).to.be.empty;
    }

    /**
     * @function verifyBookingFound It makes some Chai assertions to validate the existence of a Booking record after executing a GET Request
     * @param response the response from the API Request
     * @param bookingData The Booking object to compare the integrity of the data obtained
     */
    async verifyBookingFound(response: any, bookingData: Booking) {
        expect(response.statusCode).to.be.eq(200);
        expect(response.body).to.not.be.null;
        expect(response.body).to.deep.include(bookingData);
    }

    async verifyBookingNotFound(response: any) {
        expect(response.statusCode).to.be.eq(404);
        expect(response.body).to.be.empty;
    }

    /**
     * @function searchBooking It makes a GET request to the Booking resource to get a Booking with a specific ID
     * @param bookingId The booking ID used to search
     * @returns The response from the API
     */
    async searchBooking(bookingId: number) {
        const response = await request.get(`${this.baseURL}/${bookingId}`)
            .set('Accept', APPLICATION_JSON)
            .set('Content-Type', APPLICATION_JSON);
        return response;
    }

    /**
     * @function updateBooking It makes a PUT request to update an existing Booking record
     * @param bookingData The booking data to update
     * @param bookingId The Booking Id of the record to be updated
     * @returns The response from the API
     */
    async updateBooking(bookingData: string, bookingId: number) {
        const response = await request.put(`${this.baseURL}/${bookingId}`)
            .send(bookingData)
            .set('Accept', APPLICATION_JSON)
            .set('Content-Type', APPLICATION_JSON)
            .set('Authorization', `Basic ${AUTHORIZATION_TOKEN}`)
            .set('Cookie', COOKIE);
        return response;
    }

    /**
     * @function deleteBooking It makes a DELETE request to remove a Booking record 
     * @param bookingId The booking ID to be deleted
     */
    async deleteBooking(bookingId: number) {
        await request.delete(`${this.baseURL}/${bookingId}`)
            .set('Accept', APPLICATION_JSON)
            .set('Content-Type', APPLICATION_JSON)
            .set('Authorization', `Basic ${AUTHORIZATION_TOKEN}`)
            .set('Cookie', COOKIE);

    }

    /**
     * @function verifyBookingDeleted It makes Chai assertion to verify the not existence of the Deleted Booking record
     * @param response The response from the API
     */
    async verifyBookingDeleted(response: any) {
        expect(response.statusCode).to.be.eq(404);
        expect(response.body).to.be.empty;
    }


}

export default new RestfulBookerController();