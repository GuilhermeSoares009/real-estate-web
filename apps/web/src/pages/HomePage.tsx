import React from 'react';
import { Header } from '../components/Header';
import { PropertyCard } from '../components/PropertyCard';
import { SearchBar } from '../components/SearchBar';
import "../styles/HomePage.css";

export const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      
      <section className="hero">
        <h2>Find Your Dream Home</h2>
        <p>Discover premium properties in desirable locations</p>
        <SearchBar />
      </section>
      
      <section className="featured-properties">
        <h3>Featured Properties</h3>
        <p>Handpicked luxury homes in prime locations</p>
        <div className="properties-grid">
          <PropertyCard
            title="Modern Villa Estate"
            price="$2,450,000"
            bedrooms="4"
            bathrooms="3.5"
            area="3,500"
            location="Beverly Hills, CA"
          />
          <PropertyCard
            title="Downtown Penthouse"
            price="$1,850,000"
            bedrooms="3"
            bathrooms="2.5"
            area="2,500"
            location="Manhattan, NY"
          />
          <PropertyCard
            title="Waterfront Estate"
            price="$3,200,000"
            bedrooms="5"
            bathrooms="4"
            area="4,800"
            location="Malibu, CA"
          />
        </div>
      </section>
      
      <section className="neighborhoods">
        <h3>Explore Neighborhoods</h3>
        <p>Discover the best areas to call home</p>
        <div className="neighborhood-grid">
          <div className="neighborhood-card">
            <h4>Beverly Hills</h4>
            <p>627 Properties</p>
          </div>
          {/* Adicionar outros bairros */}
        </div>
      </section>
      
      <section className="cta-section">
        <h3>Ready to Find Your Dream Home?</h3>
        <p>Join thousands of satisfied clients who found their perfect property with us</p>
        <button className="cta-button">Get Started</button>
      </section>
      
      <footer className="footer">
        {/* Adicionar footer content */}
      </footer>
    </div>
  );
};