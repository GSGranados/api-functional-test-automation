import constants from '../../data/constants.json'
class Booking {
    firstname;
    lastname;
    totalprice;
    depositpaid;
    bookingdates;
    additionalneeds;

    constructor(firstName, lastName, totalPrice, isDepositPaid, bookingDates, additionalNeeds) {
        this.firstname = firstName;
        this.lastname = lastName;
        this.totalprice = totalPrice;
        this.depositpaid = isDepositPaid;
        this.bookingdates = bookingDates;
        this.additionalneeds = additionalNeeds;
    }

    getFirstName() {
        return this.firstname;
    }
    getLastName() {
        return this.lastname;
    }
    getTotalPrice() {
        return this.totalprice;
    }
    getIsDepositPaid() {
        return this.depositpaid;
    }
    getBookingDates() {
        return this.bookingdates;
    }
    getAdditionalNeeds() {
        return this.additionalneeds;
    }
    setFirstName(firstName) {
        this.firstname = firstName;
    }
    setLastName(lastName) {
        this.lastname = lastName;
    }
    setTotalPrice(totalPrice) {
        this.totalprice = totalPrice;
    }
    setIsDespositPaid(isDepostiPaid) {
        this.depositpaid = isDepostiPaid
    }
    setBookingDates(bookingDates) {
        this.bookingdates = bookingDates;
    }
    setAdditionalNeeds(additionalNeeds) {
        this.additionalneeds = additionalNeeds;
    }

    serializeObject() {
        return JSON.stringify(this);
    }

}

export default Booking;