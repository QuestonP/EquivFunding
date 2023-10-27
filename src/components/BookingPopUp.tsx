import React, { useState } from 'react';
import BookingForm from './BookingForm';

function BookingPopUp() {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <div className=''>
      <button onClick={openPopup} className="bg-blue-500 hover:bg-blue-700 text-black font-bold font-poppins py-2 px-4 rounded">
        Book A Service
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
          <div className="absolute bg-white p-4 rounded-lg shadow-lg w-[60%] h-[50%] border-2 border-black">
            <h2 className="text-xl font-semibold mb-4">Confirm Your Booking</h2>
            <BookingForm />
            <button onClick={closePopup} className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default BookingPopUp;
