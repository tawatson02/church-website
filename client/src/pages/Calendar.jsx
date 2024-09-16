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
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Church Events Calendar</h1>
      <div id="calendar-container" className="w-full"></div>
    </div>
  );
}

export default Calendar;
