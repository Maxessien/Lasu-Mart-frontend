// import React from 'react'; import { Facebook, Twitter, Instagram } from 'lucide-react';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const AppFooter = () => {
  return (
    <footer className="bg-gray-900 text-gray-100 py-12">
      <div className="w-full mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Branding */}{" "}
        <div>
          <h2 className="text-2xl font-semibold text-yellow-500">Artisan</h2>
          <p className="mt-2 text-sm text-gray-400">
            Connecting you with authentic handmade products from talented
            artisans around the world.
          </p>
        </div>
        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/shop" className="hover:text-[var(--orange-500)]">
                Shop All
              </a>
            </li>
            <li>
              <a href="/categories" className="hover:text-[var(--orange-500)]">
                Categories
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-[var(--orange-500)]">
                About Us
              </a>
            </li>
          </ul>
        </div>
        {/* Support */}
        <div>
          <h3 className="font-semibold mb-4">Support</h3>
          <ul className="space-y-2">
            <li>
              <a href="/help" className="hover:text-[var(--orange-500)]">
                Help Center
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-[var(--orange-500)]">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/returns" className="hover:text-[var(--orange-500)]">
                Returns
              </a>
            </li>
          </ul>
        </div>
        {/* Socials */}
        <div>
          <h3 className="font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--orange-500)] text-white"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://twitter.com"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--orange-500)] text-white"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--orange-500)] text-white"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © 2024 Artisan. All rights reserved.
      </div>
    </footer>
  );
};

export default AppFooter;
