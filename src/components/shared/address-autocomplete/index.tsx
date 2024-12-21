import React, { useRef } from "react";
import { useLoadScript, Autocomplete, Libraries } from "@react-google-maps/api";

const libraries: Libraries = ["places"]; // Fix the typing issue

interface IAddressAutocompleteProps {
    
}

const AddressAutocomplete: React.FC = () => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: "AIzaSyBcApx-caHqz17EdCTr6fQxNz0edJwJvRE", // Replace with your API key
        libraries,
    });

    const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

    const handlePlaceSelect = () => {
        const place = autocompleteRef.current?.getPlace();
        if (place) {
            console.log("Selected Place:", place);
            console.log("Address:", place.formatted_address);
            console.log("Coordinates:", place.geometry?.location?.toJSON());
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
                    className={`w-full h-[50px] px-5 py-2 pr-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition duration-200 ease-in-out transform`}
                />
            </Autocomplete>
        </div>
    );
};

export default AddressAutocomplete;
