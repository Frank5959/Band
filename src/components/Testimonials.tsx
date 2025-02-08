import React from "react";

const Testimonials = () => {
  const testimonials = [
    { id: 1, name: "John Doe", review: "Great products!", rating: 5 },
    { id: 2, name: "Jane Smith", review: "Excellent service!", rating: 4 },
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Customer Reviews</h2>
      <div className="row">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="col-md-6">
            <div className="card shadow-sm p-3 mb-4">
              <div className="card-body text-center">
                <h3 className="card-title">{testimonial.name}</h3>
                <p className="card-text">{testimonial.review}</p>
                <p className="text-warning fs-5">
                  {"⭐".repeat(testimonial.rating)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
