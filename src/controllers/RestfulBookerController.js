import { expect } from "chai";
import { request } from "../helper/supertestHelper";
import { APPLICATION_JSON, AUTHORIZATION_TOKEN, COOKIE } from "../helper/apiTypes";
class RestfulBookerController {
    constructor() { }
    baseURL = "/booking"


    async createBooking(bookingData) {
        const response = await request.post(this.baseURL)
            .send(bookingData)
            .set('Accept', APPLICATION_JSON)
            .set('Content-Type', APPLICATION_JSON);
        return response;
    }

    async verifyBookingCreated(response, bookingData) {
        expect(response.statusCode).to.be.eq(200);
        expect(response.body.bookingid).to.not.be.null;
        expect(response.body.booking).to.deep.include(bookingData);
    }

    async searchBooking(bookingId) {
        const response = await request.get(`${this.baseURL}/${bookingId}`)
            .set('Accept', APPLICATION_JSON)
            .set('Content-Type', APPLICATION_JSON);
        return response;
    }

    async updateBooking(bookingData, bookingId) {
        const response = await request.put(`${this.baseURL}/${bookingId}`)
            .send(bookingData)
            .set('Accept', APPLICATION_JSON)
            .set('Content-Type', APPLICATION_JSON)
            .set('Authorization', `Basic ${AUTHORIZATION_TOKEN}`)
            .set('Cookie', COOKIE);
        return response;
    }

    async deleteBooking(bookingId) {
        await request.delete(`${this.baseURL}/${bookingId}`)
            .set('Accept', APPLICATION_JSON)
            .set('Content-Type', APPLICATION_JSON)
            .set('Authorization', `Basic ${AUTHORIZATION_TOKEN}`)
            .set('Cookie', COOKIE);

    }

    async verifyBookingDeleted(response) {
        expect(response.statusCode).to.be.eq(404);
        expect(response.body).to.be.empty;
    }


}

export default new RestfulBookerController();