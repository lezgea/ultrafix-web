import React, { useRef } from "react";
import { useLoadScript, Autocomplete, Libraries } from "@react-google-maps/api";

const libraries: Libraries = ["places"]; // Fix the typing issue

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
                    style={{
                        width: "100%",
                        padding: "8px",
                        fontSize: "16px",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                    }}
                />
            </Autocomplete>
        </div>
    );
};

export default AddressAutocomplete;
