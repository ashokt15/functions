function incrementReviews(restaurant) {
    if (restaurant.hasOwnProperty('reviews')) { restaurant.reviews++ }
    else restaurant.reviews = 1;
}