import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Cards from './Cards'; // Import your Cards component

// Custom Arrow Components
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'gray', borderRadius: '50%' }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'gray', borderRadius: '50%' }}
      onClick={onClick}
    />
  );
};

// Carousel Component for a Single Category
function CategoryCarousel({ category, products }) {
  // Settings for the carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of cards to show at once
    slidesToScroll: 1, // Number of cards to scroll at a time
    nextArrow: <NextArrow />, // Custom next arrow
    prevArrow: <PrevArrow />, // Custom previous arrow
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold my-4">{category}</h2>
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id}>
            <Cards product={product} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

// Main App Component
function Api() {
  const products = [
    { id: 1, name: 'Product 1', category: 'Electronics', images: 'https://via.placeholder.com/300' },
    { id: 2, name: 'Product 2', category: 'Electronics', images: 'https://via.placeholder.com/300' },
    { id: 3, name: 'Product 3', category: 'Clothing', images: 'https://via.placeholder.com/300' },
    { id: 4, name: 'Product 4', category: 'Clothing', images: 'https://via.placeholder.com/300' },
    { id: 5, name: 'Product 5', category: 'Accessories', images: 'https://via.placeholder.com/300' },
    { id: 6, name: 'Product 6', category: 'Accessories', images: 'https://via.placeholder.com/300' },
  ];

  // Group products by category
  const groupedProducts = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});

  return (
    <div className="App">
      <h1 className="text-3xl font-bold text-center my-8">Product Carousels by Category</h1>
      {Object.keys(groupedProducts).map((category) => (
        <CategoryCarousel
          key={category}
          category={category}
          products={groupedProducts[category]}
        />
      ))}
    </div>
  );
}

export default Api;