const cancelBtn = document.querySelector("#cancelBtn");

// const gettingBookingDate = () => {
//     //Get Month, Date, Hour, Minute from INPUT
//     //Use the above information To make Booking Date
//     //Return Booking Date
// }

const bookingDate = new Date(2021, 9, 30, 5, 30);

const allowedToCancel = (bookingDate) => {
    const bookedDate = bookingDate;
    let todayDate = new Date();
    // Getting Today + 24 Hours In Miliseconds
    const allowed = todayDate.setHours(todayDate.getHours() + 24);
    // Return Today + 24 Hours Date
    const allowedDate = new Date(allowed);

    if (bookedDate > allowedDate) {
        isAllow = true;
    } else {
        isAllow = false;
    };

    return isAllow;
};

cancelBtn.addEventListener("click", () => {
    const isAllow = allowedToCancel(bookingDate);
    if (isAllow) {
        console.log("Booking is successfully canceled.");
    } else {
        console.log("Booking can't be cancel.");
    };

});