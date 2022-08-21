let restaurant = {
    name: 'Atib Shamy',
    guestCapacity: 20,
    guestCount: 0,

    checkAvailability: function (groupCount) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return groupCount <= seatsLeft
    },

    addGuest: function (guestSize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        if (guestSize <= seatsLeft) {
            this.guestCount += guestSize
        } else {
            let notAvailableMessage = `Sorry, There's no space for your ${guestSize} guests.`
            console.log(notAvailableMessage)
        }
    },

    removeGuest: function (guestSize) {
        this.guestCount -= guestSize
    }
}


// Challenge area

// Add Group of people
restaurant.addGuest(19)
console.log(restaurant.guestCount)

restaurant.addGuest(5)
console.log(restaurant.guestCount)

// Remove Group of people
