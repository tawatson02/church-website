import React, { useEffect } from 'react';

function Calendar() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'http://amoryfirstassembly.churchcenter.com/assets/calendar_embed.js';
    script.setAttribute('data-view', 'list');
    script.setAttribute('data-height', '450px');
    script.async = true;
    document.getElementById('calendar-container').appendChild(script);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Section */}
      <section className="flex items-center justify-center py-10 bg-gunmetal">
        <h1 className="text-white text-5xl font-bold">Church Events Calendar</h1>
      </section>

      {/* Calendar Section */}
      <section className="flex-1 flex items-center justify-center py-20 px-4 bg-gunmetal">
        <div
          id="calendar-container"
          className="w-full max-w-4xl bg-white shadow-2xl rounded-lg p-8"
        >
          
        </div>
      </section>
    </div>
  );
}

export default Calendar;
