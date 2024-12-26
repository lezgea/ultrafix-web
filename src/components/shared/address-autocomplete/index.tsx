import React, { useRef } from "react";
import { useLoadScript, Autocomplete, Libraries } from "@react-google-maps/api";
import { FieldErrors, UseFormRegister } from "react-hook-form";

const libraries: Libraries = ["places"]; // Fix the typing issue

interface IAddressAutocompleteProps {
    defaultValue: string,
    name: string,
    errors: FieldErrors;
    register: UseFormRegister<any>;
    onChange: (address: string | undefined, all_data: any) => void,
}

const AddressAutocomplete: React.FC<IAddressAutocompleteProps> = (props) => {
    let { defaultValue, name, errors, register, onChange } = props;

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
            let streetAddress = '';
            let city = '';
            let state = '';
            let zip = '';

            addressComponents.forEach((component) => {
                const types = component.types;
                if (types.includes("street_number")) {
                    streetAddress += component.long_name + ' '; // Add street number
                }
                if (types.includes("route")) {
                    streetAddress += component.long_name; // Add street name
                }
                if (types.includes("locality")) {
                    city = component.long_name; // Capture the city
                }
                if (types.includes("administrative_area_level_1")) {
                    state = component.short_name; // Capture the state (short name)
                }
                if (types.includes("postal_code")) {
                    zip = component.long_name; // Capture the ZIP code
                }
            });

            streetAddress = streetAddress.trim(); // Clean up any extra whitespace

            // Construct the final address format
            const finalAddress = `${streetAddress}, ${city}, ${state}, ${zip}`;

            console.log("Final Address (Street, City, State, ZIP):", finalAddress);

            // Creating the address object
            const addressObject = {
                streetAddress,
                city,
                state,
                zip,
                coordinates: place.geometry?.location?.toJSON(),
            };

            onChange(streetAddress, addressObject);
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
                <>
                    <input
                        type="text"
                        placeholder="Enter your address"
                        defaultValue={defaultValue}
                        className={`w-full h-[50px] px-5 py-2 pr-12 border ${errors[name] ? 'ring-2 ring-red' : 'border-gray-300'
                            } rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition duration-200 ease-in-out transform`}
                        {...register(name)}
                    />
                    {
                        errors[name] && (
                            <p className="text-gray-400 text-sm text-start mt-1">{(errors[name]?.message as string) || ''}</p>
                        )
                    }
                </>
            </Autocomplete>
        </div>
    );
};

export default AddressAutocomplete;
