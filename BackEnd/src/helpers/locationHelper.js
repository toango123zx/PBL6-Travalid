export const formatLocationFormDb = (locations) => {
    locations = locations.map((location) => {
        location = {
            id_location: location.id_location,
            display_name: `${location.display_name}, ${location.city.name}`
        };
        
        return location;
    });

    return locations;
};