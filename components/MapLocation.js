import React from "react";

const MapLocation = () => {
  return (
    <div style={{ width: "100%", marginBottom: "30px" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3334.4092920087246!2d44.446745115146065!3d33.3081136640226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15578159577aad4b%3A0x94ec1623c6cde080!2sIoT%20Maker!5e0!3m2!1sen!2siq!4v1637744868339!5m2!1sen!2siq"
        width="100%"
        height="500"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default MapLocation;
