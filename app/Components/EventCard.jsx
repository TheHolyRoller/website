'use client'
// src/components/EventCard.js
import React, { useEffect, useState } from 'react';
import client from '../api/ContentfulClient'; 


const EventCard = () => {
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        // Replace 'event' with your Contentful content type ID
        const response = await client.getEntries({ content_type: 'testContent' });
        if (response.items.length > 0) {
          setEvent(response.items[0]); // Assuming you want the first item
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching event: {error.message}</p>;

  // Extract relevant fields from the event
  const { title, date, eveningPrayerMeeting, description, testImage } = event.fields;
  console.log('this is the event \n', event);

  console.log("this is the event fields \n", event.fields); 
  

  console.log('this is the title \n',  title); 
  console.log('this is the date \n', date); 
  console.log('this is the image \n', testImage); 

  console.log('this is the time of the meeting \n', eveningPrayerMeeting); 
  




  return (
    <div className="event-card">
      {/* {image && <img src={image.fields.file.url} alt={title} />} */}
      <h2 style={{margin: '20rem', outline: '50px solid lime'}} >{title}
        {/* Testing  */}
      
      </h2>
      <p>{date}</p>
      {/* <p>{time}</p> */}
      <p>{description}</p>
    </div>
  );
};

export default EventCard;
