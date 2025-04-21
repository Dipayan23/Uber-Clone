import React, { createContext, useContext, useState } from 'react';

/**
 * CaptainDataContext is a React Context used to provide and consume captain-related data.
 */
export const CaptainDataContext = createContext();

/**
 * Custom hook to access the CaptainDataContext.
 * 
 * @throws {Error} Throws an error if the hook is used outside of a CaptainDataProvider.
 * @returns {Object} The context value containing captain data and the setter function.
 */
export const useCaptainData = () => {
    const context = useContext(CaptainDataContext); // Access the context value.
    if (!context) {
        throw new Error('useCaptainData must be used within a CaptainDataProvider'); // Ensure the hook is used within a provider.
    }
    return context; // Return the context value.
};

/**
 * CaptainContext is a context provider component for managing captain-related data.
 * 
 * @param {Object} props - The props object.
 * @param {React.ReactNode} props.children - The child components that will consume the context.
 * @returns {JSX.Element} The provider component wrapping its children.
 */
const CaptainContext = ({ children }) => {
    const [captain, setCaptain] = useState({
        email: '', // Captain's email address.
        fullName: {
            firstName: '', // Captain's first name.
            lastName: '' // Captain's last name.
        },
        vehicle: {
            color: '', // Vehicle's color.
            plate: '', // Vehicle's license plate.
            capacity: '', // Vehicle's seating capacity.
            vehicleType: '' // Type of the vehicle (e.g., car, van, etc.).
        }
    });

    return (
        <CaptainDataContext.Provider value={{ captain, setCaptain }}>
            {children} {/* Render child components within the provider. */}
        </CaptainDataContext.Provider>
    );
};

export default CaptainContext;