
import Image from 'next/image';
import { Shield, Users, Clock, Award, Phone, Mail, MapPin } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: 'Reliability',
      description: 'We build robust, dependable ELD solutions that drivers and fleet managers can trust every day.'
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'Our customers\' success is our priority. We provide exceptional support and continuously improve our products.'
    },
    {
      icon: Clock,
      title: 'Innovation',
      description: 'We stay ahead of industry trends and regulations to provide cutting-edge ELD technology.'
    },
    {
      icon: Award,
      title: 'Compliance',
      description: 'Full FMCSA certification and unwavering commitment to DOT regulatory compliance.'
    }
  ];

  const team = [
    {
      name: 'John Smith',
      role: 'Chief Executive Officer',
      description: 'Over 15 years of experience in transportation technology and fleet management solutions.',
      image: 'https://img.freepik.com/premium-photo/professional-business-portrait-confident-male-executive-suit_1190610-4621.jpg'
    },
    {
      name: 'Sarah Johnson',
      role: 'Chief Technology Officer',
      description: 'Expert in IoT devices and automotive technology with a focus on FMCSA compliance systems.',
      image: 'https://i.pinimg.com/originals/d5/28/0e/d5280e8f2f8d34f9fc0458cb56b14956.jpg'
    },
    {
      name: 'Mike Davis',
      role: 'Head of Customer Success',
      description: 'Dedicated to ensuring every customer achieves their compliance goals with our ELD solutions.',
      image: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/grey-professional-customer-service-flyer-(us-design-template-cc80a5180bb1510b19173377af79914b_screen.jpg?ts=1726176639'
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Active Devices' },
    { number: '500+', label: 'Fleet Customers' },
    { number: '99.9%', label: 'Uptime' },
    { number: '24/7', label: 'Support' }
  ];

  const certifications = [
    'FMCSA Certified ELD Provider',
    'DOT Compliant Solutions',
    'ISO 9001:2015 Quality Management',
    'SOC 2 Type II Security Certified'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-blue text-white section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About Govo ELD
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                We're a U.S.-based electronic logging device provider focused on making FMCSA compliance simple, reliable, and affordable for professional drivers and fleet operators.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="btn-secondary bg-white text-blue-600 hover:bg-gray-100">
                  Contact Us
                </a>
                <a href="#team" className="btn-secondary border-white text-white hover:bg-white hover:text-blue-600">
                  Meet Our Team
                </a>
              </div>
            </div>
            <div className="animate-fade-in relative">
              <div className="relative w-full max-w-md mx-auto">
                <div className="aspect-square bg-white/10 rounded-2xl backdrop-blur-sm p-8">
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/LL1.jpg"
                      alt="Govo ELD Office"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              To deliver cutting-edge ELD solutions that ensure compliance, improve driver safety, and streamline fleet operations. We believe that technology should simplify your business, not complicate it.
            </p>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do at Govo ELD.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card p-6 text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600">
              Experienced professionals dedicated to your success in ELD compliance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="card p-6 text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="relative w-32 h-40 mx-auto mb-6 bg-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding bg-blue-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-gray-600">
                <p>
                  Founded with a vision to simplify FMCSA compliance, Govo ELD emerged from the real-world challenges faced by fleet operators and independent drivers navigating complex regulatory requirements.
                </p>
                <p>
                  Our team of technology experts and transportation industry veterans recognized that existing ELD solutions were often overpriced, unreliable, or difficult to use. We set out to change that.
                </p>
                <p>
                  Today, Govo ELD serves thousands of drivers and fleet operators across the United States, providing them with reliable, affordable, and easy-to-use electronic logging solutions that keep them compliant and focused on what they do best.
                </p>
              </div>
            </div>
            
            <div className="animate-slide-in-right">
              <div className="card p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Govo ELD?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Shield className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">FMCSA certified and fully compliant</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">24/7 customer support</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Quick and easy installation</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Award className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Affordable pricing with no hidden fees</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Certifications & Compliance
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We maintain the highest standards of quality, security, and regulatory compliance.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="card p-6 text-center">
                  <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <p className="text-gray-700 font-medium">{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section id="contact" className="section-padding bg-gray-900 text-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-300">
              Ready to simplify your ELD compliance? Contact us today.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <Phone className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <a href="tel:1-661-404-1900" className="text-blue-400 hover:text-blue-300 text-lg">
                1-661-404-1900
              </a>
              <p className="text-gray-400 text-sm mt-1">Available 24/7</p>
            </div>
            
            <div className="text-center">
              <Mail className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <a href="mailto:support@govoeld.com" className="text-blue-400 hover:text-blue-300 text-lg">
                support@govoeld.com
              </a>
              <p className="text-gray-400 text-sm mt-1">Response within 24 hours</p>
            </div>
            
            <div className="text-center">
              <MapPin className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Office</h3>
              <address className="text-gray-300 not-italic text-sm leading-relaxed">
                5830 E 2nd St, Ste 7000 #23857<br />
                Casper, WY 82609
              </address>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a href="/support" className="btn-primary">
              Contact Us Today
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
