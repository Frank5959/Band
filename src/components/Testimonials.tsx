import React from "react";

const Testimonials = () => {
  const testimonials = [
    { id: 1, name: "John Doe", review: "Great products!", rating: 5 },
    { id: 2, name: "Jane Smith", review: "Excellent service!", rating: 4 },
  ];

  return (
    <div className="testimonials">
      <h2>Customer Reviews</h2>
      {testimonials.map((testimonial) => (
        <div key={testimonial.id} className="testimonial">
          <h3>{testimonial.name}</h3>
          <p>{testimonial.review}</p>
          <p>Rating: {"⭐".repeat(testimonial.rating)}</p>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
