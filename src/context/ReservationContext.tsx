import React, { createContext, useContext, useState } from "react";

interface ReservationContextType {
  isReserveOpen: boolean;
  openReserveModal: () => void;
  closeReserveModal: () => void;
}

const ReservationContext = createContext<ReservationContextType | undefined>(undefined);

export const ReservationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isReserveOpen, setIsReserveOpen] = useState(false);

  return (
    <ReservationContext.Provider
      value={{
        isReserveOpen,
        openReserveModal: () => setIsReserveOpen(true),
        closeReserveModal: () => setIsReserveOpen(false),
      }}
    >
      {children}
    </ReservationContext.Provider>
  );
};

export const useReservation = () => {
  const context = useContext(ReservationContext);
  if (!context) {
    throw new Error("useReservation must be used within a ReservationProvider");
  }
  return context;
};

export default ReservationContext;
