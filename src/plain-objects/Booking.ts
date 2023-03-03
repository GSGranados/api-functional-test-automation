class Booking {


    firstname?: string;
    lastname?: string;
    totalprice?: number | undefined;
    depositpaid?: boolean | null;
    bookingdates?: { checkin: string, checkout: string };
    additionalneeds?: string;

    constructor(firstName: string, lastName: string, totalPrice: number | undefined, isDepositPaid: boolean | null, bookingDates: { checkin: string, checkout: string }, additionalNeeds: string) {
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
    setFirstName(firstName: string) {
        this.firstname = firstName;
    }
    setLastName(lastName: string) {
        this.lastname = lastName;
    }
    setTotalPrice(totalPrice: number | undefined) {
        this.totalprice = totalPrice;
    }
    setIsDespositPaid(isDepostiPaid: boolean | null) {
        this.depositpaid = isDepostiPaid
    }
    setBookingDates(bookingDates: { checkin: string, checkout: string }) {
        this.bookingdates = bookingDates;
    }
    setAdditionalNeeds(additionalNeeds: string) {
        this.additionalneeds = additionalNeeds;
    }

    serializeObject() {
        return JSON.stringify(this);
    }

}

export default Booking;