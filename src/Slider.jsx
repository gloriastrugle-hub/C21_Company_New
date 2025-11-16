import { useRef, useEffect, useState } from "react";
import "./Slider.css";

export default function Slider({ images, maxHeight = "400px", width = "100%" }) {
  const slidesRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const total = images.length;

  // Auto-slide with hover pause
  useEffect(() => {
    if (isHovered) return; // pause auto-slide on hover
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex, isHovered]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % total);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + total) % total);
  const goToSlide = (index) => setCurrentIndex(index);

  // Update transform
  useEffect(() => {
    if (slidesRef.current) {
      const slideWidth = slidesRef.current.children[0].offsetWidth;
      slidesRef.current.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
    }
  }, [currentIndex]);

  // Swipe handlers
  const handleTouchStart = (e) => setTouchStart(e.touches[0].clientX);
  const handleTouchMove = (e) => {
    if (!touchStart) return;
    const touchEnd = e.touches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 50) nextSlide();
    else if (diff < -50) prevSlide();
    setTouchStart(null);
  };

  return (
    <div
      className="slider"
      style={{ width: width, maxHeight: maxHeight }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="slides" ref={slidesRef}>
        {images.map((img, i) => (
          <div className="slide-item" key={i}>
            <img src={img} alt={`Slide ${i + 1}`} />
          </div>
        ))}
      </div>

      <div className="arrow prev" onClick={prevSlide}>&#10094;</div>
      <div className="arrow next" onClick={nextSlide}>&#10095;</div>

      <div className="dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(i)}
          ></span>
        ))}
      </div>
    </div>
  );
}
