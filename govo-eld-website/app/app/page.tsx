
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, Shield, Clock, MapPin, Smartphone, Truck, Star, ArrowRight } from 'lucide-react';

export default function HomePage() {
  const features = [
    {
      icon: Clock,
      title: 'Auto HOS Tracking',
      description: 'Automatic hours of service tracking with real-time compliance monitoring.'
    },
    {
      icon: Shield,
      title: 'DOT Inspection Ready',
      description: 'Always inspection-ready with complete digital logbooks and reports.'
    },
    {
      icon: Smartphone,
      title: 'Real-time Duty Status',
      description: 'Instant duty status updates and alerts for drivers and fleet managers.'
    },
    {
      icon: MapPin,
      title: 'GPS Integration',
      description: 'Built-in GPS tracking with route optimization and geofencing capabilities.'
    }
  ];

  const testimonials = [
    {
      name: 'Mike Johnson',
      company: 'Johnson Transport LLC',
      content: 'Govo ELD made our DOT compliance effortless. The device is reliable and the customer support is outstanding.',
      rating: 5
    },
    {
      name: 'Sarah Martinez',
      company: 'Fleet Solutions Inc',
      content: 'We switched to Govo ELD and immediately saw improvements in our compliance rates. Highly recommended!',
      rating: 5
    },
    {
      name: 'David Chen',
      company: 'Chen Logistics',
      content: 'The real-time tracking and automated reports save us hours of paperwork every week.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container-max relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Effortless ELD 
                <span className="block">Compliance</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Making FMCSA compliance simple, reliable, and affordable for professional drivers and fleet operators.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/support" className="btn-secondary bg-white hover:bg-gray-100 text-blue-600">
                  Start Free Trial
                </Link>
                <Link href="/products" className="btn-secondary border-white text-white hover:bg-white hover:text-blue-600">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="animate-fade-in relative">
              <div className="relative w-full max-w-md mx-auto">
                <div className="aspect-square bg-white/10 rounded-2xl backdrop-blur-sm p-8">
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/pt30.webp"
                      alt="PT30 ELD Device"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Govo ELD?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our cutting-edge ELD solutions ensure compliance, improve driver safety, and streamline your fleet operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card p-6 text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Device + App Showcase */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Complete ELD Solution
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our PT30 device works seamlessly with your mobile app to provide comprehensive electronic logging capabilities.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">FMCSA certified and DOT compliant</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Easy installation with multiple cable options</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Real-time data sync and cloud backup</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">24/7 customer support</span>
                </div>
              </div>
              <div className="mt-8">
                <Link href="/products" className="btn-primary">
                  View Products <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
            
            <div className="animate-slide-in-right">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="card p-4">
                    <div className="relative w-full aspect-square">
                      <Image
                        src="/images/pt30.webp"
                        alt="PT30 ELD Device"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-center mt-4">PT30 Device</h3>
                  </div>
                  <div className="card p-4">
                    <div className="relative w-full aspect-square">
                      <Image
                        src="/images/9Pin2.webp"
                        alt="9-Pin Cable"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-center mt-4">9-Pin Cable</h3>
                  </div>
                </div>
                <div className="space-y-6 mt-8">
                  <div className="card p-4">
                    <div className="relative w-full aspect-square">
                      <Image
                        src="/images/16 pin.webp"
                        alt="16-Pin Cable"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-center mt-4">16-Pin Cable</h3>
                  </div>
                  <div className="card p-4">
                    <div className="relative w-full aspect-square">
                      <Image
                        src="/images/6pin.webp"
                        alt="6-Pin Cable"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-center mt-4">6-Pin Cable</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-blue-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Thousands of Drivers
            </h2>
            <p className="text-xl text-gray-600">
              See what our customers have to say about their experience with Govo ELD.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card p-6 animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.company}</p>
                </div>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Join thousands of drivers and fleet operators who trust Govo ELD for their compliance needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/support" className="btn-secondary bg-white text-blue-600 hover:bg-gray-100">
                Start Free Trial
              </Link>
              <Link href="/support" className="btn-secondary border-white text-white hover:bg-white hover:text-blue-600">
                Request Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
