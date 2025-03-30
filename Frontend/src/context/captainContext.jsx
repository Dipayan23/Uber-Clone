import React , {useContext,createContext,useState,} from "react";

export const CaptainDataContext = createContext()

export const useCaptainData = () => {
    const context = useContext(CaptainDataContext)
    if (!context) {
        throw new Error('useCaptainData must be used within a CaptainDataProvider')
    }
    return context
}

const CaptainContext = ({ children }) => {
    const [captain, setCaptain] = useState({
        email: '',
        fullName: {
            firstName: '',
            lastName: ''
        },
        vehicle: {
            color: '',
            plate: '',
            capacity: '',
            vehicleType: ''
        }
    })

    return (
        <CaptainDataContext.Provider value={{ captain, setCaptain }}>
            {children}
        </CaptainDataContext.Provider>
    )
}

export default CaptainContext;