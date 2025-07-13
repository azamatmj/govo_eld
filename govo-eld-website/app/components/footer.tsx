
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative w-10 h-10">
                <Image
                  src="/images/symbol.png"
                  alt="Govo ELD Symbol"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
              <div className="relative w-32 h-10">
                <Image
                  src="/images/Govo ELD logonew.png"
                  alt="Govo ELD"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Delivering cutting-edge ELD solutions that ensure compliance, improve driver safety, and streamline fleet operations.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-blue-400" />
                <span>1-661-404-1900</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-blue-400" />
                <span>support@govoeld.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-blue-400 mt-0.5" />
                <span>5830 E 2nd St, Ste 7000 #23857<br />Casper, WY 82609</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-blue-400 transition-colors">ELD Solutions</Link></li>
              <li><Link href="/products" className="text-gray-300 hover:text-blue-400 transition-colors">Products</Link></li>
              <li><Link href="/pricing" className="text-gray-300 hover:text-blue-400 transition-colors">Pricing</Link></li>
              <li><Link href="/support" className="text-gray-300 hover:text-blue-400 transition-colors">Support</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link href="/support" className="text-gray-300 hover:text-blue-400 transition-colors">Contact Us</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors">About Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            © 2025 Govo ELD. All rights reserved.
          </p>
          <p className="text-gray-400 mt-2 md:mt-0">
            Making FMCSA compliance simple, reliable, and affordable.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
