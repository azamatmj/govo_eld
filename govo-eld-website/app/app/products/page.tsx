
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, Truck, Cable, Smartphone, Star } from 'lucide-react';

export default function ProductsPage() {
  const mainProduct = {
    id: 'pt30',
    name: 'PT30 ELD Device',
    price: 129.99,
    originalPrice: 159.99,
    description: 'FMCSA certified electronic logging device with advanced GPS tracking and real-time compliance monitoring.',
    image: '/images/pt30.webp',
    features: [
      'FMCSA certified and DOT compliant',
      'Real-time GPS tracking',
      'Automatic HOS calculation',
      'Cloud-based data storage',
      'Mobile app integration',
      'Tamper-resistant design',
      '24/7 customer support',
      'Easy installation'
    ],
    specifications: {
      'Dimensions': '4.1" x 2.7" x 0.9"',
      'Weight': '3.2 oz',
      'Operating Temperature': '-40°F to 185°F',
      'Input Voltage': '9-36V DC',
      'Certification': 'FMCSA Certified',
      'Connectivity': 'Cellular + GPS',
      'Warranty': '2 Year Limited'
    }
  };

  const cables = [
    {
      id: '9pin',
      name: '9 Pin Cable',
      price: 21.99,
      originalPrice: 27.99,
      description: 'Heavy duty cable for most 2007 or newer vehicles, some 2000-2006 models.',
      image: '/images/9Pin2.webp',
      compatibility: ['Most 2007 or newer vehicles', 'Some 2000-2006 models', 'Heavy duty trucks']
    },
    {
      id: '16pin-volvo',
      name: '16-Pin Volvo/Mack Cable',
      price: 23.99,
      originalPrice: 29.99,
      description: 'Specialized cable for 2013 or newer Volvo and Mack vehicles.',
      image: '/images/16 pin.webp',
      compatibility: ['2013 or newer Volvo trucks', '2013 or newer Mack trucks', 'Heavy duty applications']
    },
    {
      id: '6pin',
      name: '6-Pin Cable',
      price: 23.99,
      originalPrice: 29.99,
      description: 'Heavy duty cable for older vehicles, some 2002-2006, most 1996-2001.',
      image: '/images/6pin.webp',
      compatibility: ['Some 2002-2006 vehicles', 'Most 1996-2001 vehicles', 'Heavy duty trucks']
    },
    {
      id: '16pin-obd2',
      name: '16-Pin OBD2 Light/Med Cable',
      price: 23.99,
      originalPrice: 29.99,
      description: 'Perfect for light and medium duty vehicles with standard OBD2 ports.',
      image: '/images/16 pin.webp',
      compatibility: ['Light duty vehicles', 'Medium duty vehicles', 'Standard OBD2 ports']
    }
  ];

  const integrations = [
    {
      icon: Smartphone,
      title: 'Mobile App',
      description: 'Complete driver interface with real-time status updates and easy log editing.'
    },
    {
      icon: Truck,
      title: 'Fleet Management',
      description: 'Comprehensive fleet dashboard with vehicle tracking and driver monitoring.'
    },
    {
      icon: CheckCircle,
      title: 'Compliance Alerts',
      description: 'Real-time HOS violation alerts and automated compliance reporting.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-blue text-white section-padding">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional ELD Solutions
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              FMCSA certified devices and cables designed for reliable, long-term operation in commercial vehicles.
            </p>
          </div>
        </div>
      </section>

      {/* Main Product Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="animate-slide-in-left">
              <div className="card p-8">
                <div className="relative w-full aspect-square max-w-md mx-auto">
                  <Image
                    src={mainProduct.image}
                    alt={mainProduct.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
            
            <div className="animate-slide-in-right">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {mainProduct.name}
              </h2>
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-bold text-blue-600">${mainProduct.price}</span>
                <span className="text-xl text-gray-500 line-through">${mainProduct.originalPrice}</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                  Save ${(mainProduct.originalPrice - mainProduct.price).toFixed(2)}
                </span>
              </div>
              <p className="text-lg text-gray-600 mb-8">{mainProduct.description}</p>
              
              <div className="space-y-3 mb-8">
                {mainProduct.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Link href="/support" className="btn-primary">
                Order Now
              </Link>
            </div>
          </div>

          {/* Specifications */}
          <div className="card p-8 mb-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Specifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(mainProduct.specifications).map(([key, value]) => (
                <div key={key} className="border-l-4 border-blue-500 pl-4">
                  <dt className="text-sm font-semibold text-gray-600 uppercase tracking-wide">{key}</dt>
                  <dd className="text-lg text-gray-900 font-medium">{value}</dd>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cables Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Compatible Cables
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the right cable for your vehicle. All cables are heavy-duty and designed for commercial use.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cables.map((cable, index) => (
              <div key={cable.id} className="card p-6 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative w-full aspect-square mb-4">
                  <Image
                    src={cable.image}
                    alt={cable.name}
                    fill
                    className="object-contain"
                  />
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{cable.name}</h3>
                
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-xl font-bold text-blue-600">${cable.price}</span>
                  <span className="text-sm text-gray-500 line-through">${cable.originalPrice}</span>
                </div>
                
                <p className="text-gray-600 text-sm mb-4">{cable.description}</p>
                
                <div className="space-y-2 mb-6">
                  <h4 className="text-sm font-semibold text-gray-700">Compatible with:</h4>
                  {cable.compatibility.map((item, i) => (
                    <div key={i} className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
                
                <Link href="/support" className="btn-primary w-full text-center">
                  Order Cable
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Integration
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our ELD solution integrates seamlessly with your existing workflows and provides comprehensive fleet management capabilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {integrations.map((integration, index) => (
              <div key={index} className="card p-8 text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <integration.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{integration.title}</h3>
                <p className="text-gray-600">{integration.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-blue text-white">
        <div className="container-max text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Upgrade Your Fleet?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Contact us to discuss your specific needs and get a custom quote for your fleet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/support" className="btn-secondary bg-white text-blue-600 hover:bg-gray-100">
                Get Quote
              </Link>
              <Link href="/pricing" className="btn-secondary border-white text-white hover:bg-white hover:text-blue-600">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
