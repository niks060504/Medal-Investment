import React from 'react';
import './Reviews.css';

const reviews = [
  {
    name: 'Sanjali Dharamshi',
    text: "I'm really thankful to Prafful for encouraging me to start investing in mutual funds. His practical advice and steady guidance have made a big difference in how I handle my finances.",
    rating: 5,
  },
  {
    name: 'Bhoumik Nandu',
    text: "Praful has been an excellent investment advisor, consistently making smart and timely decisions that have strengthened my portfolio.",
    rating: 5,
  },
  { name: 'Rohan', text: 'Insightful and professional guidance.', rating: 4 },
  { name: 'Mohit', text: 'Praful’s financial advice helped me grow my savings.', rating: 4 },
  { name: 'Neer', text: 'Very transparent and knowledgeable.', rating: 5 },
  { name: 'Kunal', text: 'Efficient service and great support.', rating: 5 },
];

const Reviews = () => {
  const allReviews = [...reviews, ...reviews]; // Duplicate for seamless infinite scroll

  return (
    <div
      className="section text-white"
      style={{
        backgroundImage: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
        padding: '40px 20px',
        fontFamily: "'Playfair Display', Georgia, serif",
      }}
    >
      <h2 className="text-golden mb-4 text-center" style={{ fontSize: '2.5rem' }}>
        Testimonials
      </h2>
      <div className="marquee-container">
        <div className="reviews-track-infinite">
          {allReviews.map((r, i) => (
            <div key={i} className="review-card">
              <div className="profile-circle">{r.name.charAt(0)}</div>
              <p className="review-text">"{r.text}"</p>
              <p className="reviewer-name">{r.name}</p>
              <div className="stars">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <span key={j} className="star">&#9733;</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
