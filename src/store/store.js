import { configureStore } from '@reduxjs/toolkit'
import city_reducer from './reducers/cities'
import itinerary_reducer from './reducers/itineraries'
import user_reducer from './reducers/users'
import activity_reducer from "./reducers/activities"

export default configureStore({
    reducer: {
        cities:  city_reducer ,
        itineraries: itinerary_reducer,
        users: user_reducer,
        activities: activity_reducer
    }
})