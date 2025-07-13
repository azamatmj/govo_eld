
import Link from 'next/link';
import { CheckCircle, Star, Phone, Mail } from 'lucide-react';

export default function PricingPage() {
  const pricingTiers = [
    {
      name: 'Standard',
      price: '$29',
      period: '/month',
      description: 'Perfect for individual drivers and small fleets',
      features: [
        'Electronic logbook',
        'Fleet manager portal',
        'Online GPS tracking',
        'IFTA state reporting',
        'API integration',
        'Customer support',
        'DOT inspection reports',
        'HOS violation alerts'
      ],
      isPopular: true,
      ctaText: 'Start Free Trial',
      ctaAction: '/support'
    },
    {
      name: 'Platinum',
      price: 'Contact',
      period: 'us',
      description: 'Advanced features for large fleets and enterprises',
      features: [
        'Everything in Standard',
        'Priority 24/7 support',
        'Online driver monitoring',
        'BOL & trailer updating',
        'Real-time error alerts via Telegram',
        'Driver performance monitoring',
        'Custom driver log creation',
        'Advanced analytics dashboard'
      ],
      isPopular: false,
      ctaText: 'Contact Sales',
      ctaAction: '/support'
    }
  ];

  const devicePricing = [
    {
      name: 'PT30 ELD Device',
      price: '$129.99',
      originalPrice: '$159.99',
      description: 'FMCSA certified main device'
    },
    {
      name: '9 Pin Cable',
      price: '$21.99',
      originalPrice: '$27.99',
      description: 'Most 2007+ vehicles'
    },
    {
      name: '16-Pin Volvo/Mack Cable',
      price: '$23.99',
      originalPrice: '$29.99',
      description: '2013+ Volvo/Mack'
    },
    {
      name: '6-Pin Cable',
      price: '$23.99',
      originalPrice: '$29.99',
      description: '1996-2006 vehicles'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-blue text-white section-padding">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Choose the plan that fits your fleet size and needs. All plans include our 1-week free trial.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 inline-block">
              <div className="flex items-center justify-center space-x-2">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="text-lg font-semibold">1-Week Free Trial Available</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Pricing */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Service Plans
            </h2>
            <p className="text-xl text-gray-600">
              Monthly subscription plans for ongoing ELD services and support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div key={tier.name} className={`card p-8 relative ${tier.isPopular ? 'border-2 border-blue-500 shadow-xl' : ''}`}>
                {tier.isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <div className="flex items-baseline justify-center space-x-1 mb-4">
                    <span className="text-4xl md:text-5xl font-bold text-blue-600">{tier.price}</span>
                    <span className="text-xl text-gray-500">{tier.period}</span>
                  </div>
                  <p className="text-gray-600">{tier.description}</p>
                </div>
                
                <div className="space-y-4 mb-8">
                  {tier.features.map((feature, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link 
                  href={tier.ctaAction}
                  className={`w-full text-center block ${tier.isPopular ? 'btn-primary' : 'btn-secondary'}`}
                >
                  {tier.ctaText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Device Pricing */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Device & Hardware Pricing
            </h2>
            <p className="text-xl text-gray-600">
              One-time purchase prices for ELD devices and cables. All prices include shipping.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {devicePricing.map((device, index) => (
              <div key={device.name} className="card p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{device.name}</h3>
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-2xl font-bold text-blue-600">{device.price}</span>
                  {device.originalPrice && (
                    <span className="text-lg text-gray-500 line-through">{device.originalPrice}</span>
                  )}
                </div>
                <p className="text-gray-600 text-sm">{device.description}</p>
                {device.originalPrice && (
                  <div className="mt-2">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">
                      Save ${(parseFloat(device.originalPrice.replace('$', '')) - parseFloat(device.price.replace('$', ''))).toFixed(2)}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/products" className="btn-primary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Free Trial Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="card p-12 text-center max-w-4xl mx-auto gradient-blue text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Start Your Free Trial Today
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Try Govo ELD risk-free for one full week. No credit card required, no hidden fees.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">1 Week</div>
                <div className="text-blue-200">Free Trial</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">No Setup</div>
                <div className="text-blue-200">Fees</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-blue-200">Support</div>
              </div>
            </div>
            <Link href="/support" className="btn-secondary bg-white text-blue-600 hover:bg-gray-100">
              Start Free Trial
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Questions About Pricing?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our team is here to help you choose the right plan for your fleet.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div className="card p-6 text-center">
                <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
                <p className="text-gray-600 mb-4">Speak directly with our sales team</p>
                <a href="tel:1-661-404-1900" className="text-blue-600 font-semibold hover:text-blue-700">
                  1-661-404-1900
                </a>
              </div>
              
              <div className="card p-6 text-center">
                <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600 mb-4">Get a detailed quote via email</p>
                <a href="mailto:support@govoeld.com" className="text-blue-600 font-semibold hover:text-blue-700">
                  support@govoeld.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
