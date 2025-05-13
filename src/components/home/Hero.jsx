// src/components/home/Hero.jsx
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-primary-500 to-primary-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block">Transform Your Ideas</span>
            <span className="block">Into Beautiful Blog Posts</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-white opacity-90 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Create, manage, and share your content with powerful tools and a beautiful interface.
          </p>
          <div className="mt-10 sm:flex sm:justify-center">
            <Link
              to="/editor"
              className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
            >
              Start Writing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
