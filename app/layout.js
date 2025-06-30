import Link from "next/link";
import "./globals.css";
import { Button } from "@/components/button";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        {/* Navbar */}
        <nav className="bg-white flex h-15 text-black gap-8 justify-around items-center drop-shadow-black">
          <div>
            <h1 className="font-bold text-4xl text-emerald-500"> Health Plus</h1>
          </div> 
          <div className="flex gap-10 items-center">
            <div className="flex gap-6 text-gray-600 font-light text-[15px]">
              <Link href='./'>
                <span className="hover:text-emerald-500">Home</span>
              </Link>
              <Link href='./service'>
                <span className="hover:text-emerald-500">Service</span>
              </Link>
              <Link href='./aboutUs'>
                <span className="hover:text-emerald-500">About Us</span>
              </Link>
              <Link href='./contactUs'>
                <span className="hover:text-emerald-500">Contact Us</span>
              </Link>
            </div>
            <div className="pl-10 flex gap-3">
              <Button variant='outline' className="border-2 hover:text-xl gray">Register</Button>
              <Button variant='outline' className="border-2 hover:text-xl gray">Login</Button>
            </div>
          </div>
        </nav>

        {/* Background Image Section */}
        
        
       
        {children}

        {/* Footer */}
        <footer className="bg-gray-700 text-white pt-10 pb-6 mt-10">
          <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h2 className="font-bold text-2xl mb-4">Health Plus</h2>
              <p className="text-sm">
                Your trusted partner for better health and wellness. We care for you and your loved ones with top medical services.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
              <ul className="text-sm space-y-2">
                <li><Link href="/" className="hover:underline">Home</Link></li>
                <li><Link href="/services" className="hover:underline">Services</Link></li>
                <li><Link href="/about" className="hover:underline">About Us</Link></li>
                <li><Link href="/contact" className="hover:underline">Contact Us</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold text-lg mb-3">Our Services</h3>
              <ul className="text-sm space-y-2">
                <li><Link href="/services/consultation" className="hover:underline">Fitness Challenges</Link></li>
                <li><Link href="/services/surgery" className="hover:underline">Mental Health</Link></li>
                <li><Link href="/services/diagnostics" className="hover:underline">Exercise Tutorial</Link></li>
                <li><Link href="/services/therapy" className="hover:underline">Therapy</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold text-lg mb-3">Contact Us</h3>
              <p className="text-sm mb-2">123 Wellness Street, Healthy City</p>
              <p className="text-sm mb-2">Phone: +1 234 567 890</p>
              <p className="text-sm">Email: support@healthplus.com</p>

              {/* Social Media */}
              <div className="flex gap-4 mt-4">
                <Link href="#" className="hover:text-gray-300">Instagram</Link>
                <Link href="#" className="hover:text-gray-300">LinkedIn</Link>
                <Link href="#" className="hover:text-gray-300">Twitter</Link>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="mt-10 border-t border-white/30 pt-4 text-center text-sm">
            © {new Date().getFullYear()} Health Plus. All rights reserved.
          </div>
        </footer>

      </body>
    </html>
  );
}