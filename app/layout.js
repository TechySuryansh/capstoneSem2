"use client";

import Link from "next/link";
import "./globals.css";
import { Button } from "@/components/button";
import { AuthProvider, useAuth } from "@/context/AuthContext";
import { useState } from "react";
import { auth, googleProvider } from "@/lib/firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import toast, { Toaster } from "react-hot-toast";

function NavbarContent() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user } = useAuth();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleGoogleAuth = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      toast.success("Successfully signed in with Google!");
    } catch (error) {
      console.error(error.message);
      toast.error("Google authentication failed");
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      toast.success("Successfully signed out!");
    } catch (error) {
      console.error(error.message);
      toast.error("Sign out failed");
    }
  };

  return (
    <nav className="bg-white text-black shadow-md">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-4 md:px-8">
        <div>
          <h1 className="font-bold text-3xl text-emerald-500">
            Health Plus
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 items-center">
          <div className="flex gap-6 text-gray-600 font-light text-[15px]">
            <Link href="/">
              <span className="hover:text-emerald-500 cursor-pointer">
                Home
              </span>
            </Link>
            <Link href="/service">
              <span className="hover:text-emerald-500 cursor-pointer">
                Service
              </span>
            </Link>
            <Link href="/aboutUs">
              <span className="hover:text-emerald-500 cursor-pointer">
                About Us
              </span>
            </Link>
            <Link href="/contactUs">
              <span className="hover:text-emerald-500 cursor-pointer">
                Contact Us
              </span>
            </Link>
            <Link href="/sleep" className="text-blue-600">
              Sleep Data
            </Link>
          </div>
          <div className="pl-10 flex gap-3 items-center">
            {user ? (
              <>
                <div className="flex items-center gap-2">
                  <img
                    src={user.photoURL || "https://via.placeholder.com/32"}
                    alt="Profile"
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    {user.displayName || user.email}
                  </span>
                </div>
                <Button
                  variant="outline"
                  className="border-2 hover:text-xl gray"
                  onClick={handleSignOut}
                >
                  Sign Out
                </Button>
              </>
            ) : (
              <Button
                variant="outline"
                className="border-2 hover:text-xl gray"
                onClick={handleGoogleAuth}
              >
                Sign In
              </Button>
            )}
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-4">
          <Link href="/" onClick={toggleMobileMenu}>
            <span className="block text-gray-600 hover:text-emerald-500">
              Home
            </span>
          </Link>
          <Link href="/service" onClick={toggleMobileMenu}>
            <span className="block text-gray-600 hover:text-emerald-500">
              Service
            </span>
          </Link>
          <Link href="/aboutUs" onClick={toggleMobileMenu}>
            <span className="block text-gray-600 hover:text-emerald-500">
              About Us
            </span>
          </Link>
          <Link href="/contactUs" onClick={toggleMobileMenu}>
            <span className="block text-gray-600 hover:text-emerald-500">
              Contact Us
            </span>
          </Link>
          <Link href="/sleep" onClick={toggleMobileMenu}>
            <span className="block text-blue-600">Sleep Data</span>
          </Link>
          <div className="flex flex-col gap-3 pt-2">
            {user ? (
              <>
                <div className="flex items-center gap-2 mb-2">
                  <img
                    src={user.photoURL || "https://via.placeholder.com/32"}
                    alt="Profile"
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    {user.displayName || user.email}
                  </span>
                </div>
                <Button
                  variant="outline"
                  className="border-2 hover:text-xl gray"
                  onClick={handleSignOut}
                >
                  Sign Out
                </Button>
              </>
            ) : (
              <Button
                variant="outline"
                className="border-2 hover:text-xl gray"
                onClick={handleGoogleAuth}
              >
                Sign In
              </Button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <NavbarContent />
          {children}
          <Toaster position="top-right" />
          
          {/* Footer */}
          <footer className="bg-gray-700 text-white pt-10 pb-6 mt-10">
            <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div>
                <h2 className="font-bold text-2xl mb-4">Health Plus</h2>
                <p className="text-sm">
                  Your trusted partner for better health and wellness. We care
                  for you and your loved ones with top medical services.
                </p>
              </div>

              {/* Navigation */}
              <div>
                <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
                <ul className="text-sm space-y-2">
                  <li>
                    <Link href="/" className="hover:underline">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="hover:underline">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="hover:underline">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:underline">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Services */}
              <div>
                <h3 className="font-semibold text-lg mb-3">Our Services</h3>
                <ul className="text-sm space-y-2">
                  <li>
                    <Link
                      href="/services/consultation"
                      className="hover:underline"
                    >
                      Fitness Challenges
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/surgery" className="hover:underline">
                      Mental Health
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/diagnostics"
                      className="hover:underline"
                    >
                      Exercise Tutorial
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/therapy" className="hover:underline">
                      Therapy
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="font-semibold text-lg mb-3">Contact Us</h3>
                <p className="text-sm mb-2">
                  123 Wellness Street, Healthy City
                </p>
                <p className="text-sm mb-2">Phone: +1 234 567 890</p>
                <p className="text-sm">Email: support@healthplus.com</p>

                {/* Social Media */}
                <div className="flex gap-4 mt-4">
                  <Link href="#" className="hover:text-gray-300">
                    Instagram
                  </Link>
                  <Link href="#" className="hover:text-gray-300">
                    LinkedIn
                  </Link>
                  <Link href="#" className="hover:text-gray-300">
                    Twitter
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom Footer */}
            <div className="mt-10 border-t border-white/30 pt-4 text-center text-sm">
              © {new Date().getFullYear()} Health Plus. All rights reserved.
            </div>
          </footer>
        </AuthProvider>
      </body>
    </html>
  );
}
