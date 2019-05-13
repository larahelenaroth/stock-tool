import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
// CSS
import 'react-big-calendar/lib/css/react-big-calendar.css';

const Ipo = props => {
  const localizer = BigCalendar.momentLocalizer(moment);
  const { ipos } = props;
  const ipoDates = [];
  for (let i = 0; i < ipos.length; i++) {
    let ipoDate = {};
    ipoDate.title = `(${ipos[i].symbol}) ${ipos[i].companyName} - ${
      ipos[i].priceHigh
    } (high)`;
    ipoDate.start = new Date(Date.parse(ipos[i].expectedDate));
    ipoDate.end = new Date(Date.parse(ipos[i].expectedDate));
    ipoDate.allDay = true;
    ipoDates.push(ipoDate);
  }
  return (
    <div className="container" style={{ height: '80vh', margin: '3px' }}>
      <BigCalendar
        localizer={localizer}
        events={ipoDates}
        startAccessor="start"
        endAccessor="end"
        views={['month', 'agenda']}
        onNavigate={[]}
        defaultView="agenda"
        messages={{
          showMore: target => (
            <span className="ml-2" role="presentation" onClick={() => {}}>
              {' '}
              ...{target} more
            </span>
          )
        }}
      />
    </div>
  );
};
export default Ipo;
