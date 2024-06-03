import React from 'react';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS styles

const ReservationConfirmationPage: React.FC = () => {
    return (
        <div className="reservation-page">
            <h1 className="text-4xl font-bold mb-4">Reservation Confirmation</h1>
            <p className="text-lg mb-2">Your reservation has been confirmed.</p>
            <p className="text-lg">Thank you</p>
        </div>
    );
};

export default ReservationConfirmationPage;