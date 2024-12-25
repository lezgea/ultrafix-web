import React, { useRef } from "react";
import { useLoadScript, Autocomplete, Libraries } from "@react-google-maps/api";

const libraries: Libraries = ["places"]; // Fix the typing issue

interface IAddressAutocompleteProps {
    defaultValue: string,
    onChange: (address: string | undefined, all_data: any) => void,
}

const AddressAutocomplete: React.FC<IAddressAutocompleteProps> = (props) => {
    let { defaultValue, onChange } = props;

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: "AIzaSyBcApx-caHqz17EdCTr6fQxNz0edJwJvRE", // Replace with your API key
        libraries,
    });

    const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

    const handlePlaceSelect = () => {
        const place = autocompleteRef.current?.getPlace();
        if (place) {
            console.log("Selected Place:", place);

            // Extract address components
            const addressComponents = place.address_components || [];
            let city, state, zip;

            addressComponents.forEach((component) => {
                const types = component.types;
                if (types.includes("locality")) {
                    city = component.long_name;
                } else if (types.includes("administrative_area_level_1")) {
                    state = component.short_name; // Use long_name for full state name
                } else if (types.includes("postal_code")) {
                    zip = component.long_name;
                }
            });

            console.log("Address:", place.formatted_address);
            console.log("City:", city);
            console.log("State:", state);
            console.log("ZIP:", zip);
            console.log("Coordinates:", place.geometry?.location?.toJSON());

            onChange(
                place.formatted_address,
                {
                    coordinates: place.geometry?.location?.toJSON(),
                    city,
                    state,
                    zip,
                }
            );
        }
    };


    if (!isLoaded) return <div>Loading...</div>;
    if (loadError) return <div>Error loading maps</div>;

    return (
        <div>
            <Autocomplete
                onLoad={(autocomplete) => (autocompleteRef.current = autocomplete)}
                onPlaceChanged={handlePlaceSelect}
            >
                <input
                    type="text"
                    placeholder="Enter your address"
                    defaultValue={defaultValue}
                    className={`w-full h-[50px] px-4 py-2 pr-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition duration-200 ease-in-out transform`}
                />
            </Autocomplete>
        </div>
    );
};

export default AddressAutocomplete;
