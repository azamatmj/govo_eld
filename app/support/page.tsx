
'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Download, ChevronDown, ChevronUp, Send } from 'lucide-react';

export default function SupportPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    formType: 'support'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const faqItems = [
    {
      question: 'What is an Electronic Logging Device (ELD)?',
      answer: 'An ELD is a device that automatically records driving time and Hours of Service (HOS) for commercial drivers. It connects to the vehicle\'s engine to track when the vehicle is in motion and helps ensure compliance with FMCSA regulations.'
    },
    {
      question: 'Is the Govo ELD FMCSA certified?',
      answer: 'Yes, the Govo PT30 ELD device is fully FMCSA certified and meets all Department of Transportation requirements for electronic logging devices.'
    },
    {
      question: 'How do I install the ELD device?',
      answer: 'Installation is simple and typically takes 5-10 minutes. Connect the appropriate cable to your vehicle\'s diagnostic port, mount the device securely, and download our mobile app. Detailed installation guides are provided with each device.'
    },
    {
      question: 'What vehicles are compatible with Govo ELD?',
      answer: 'Govo ELD is compatible with most commercial vehicles from 1996 onwards. We offer different cable types (6-pin, 9-pin, 16-pin) to ensure compatibility with various vehicle makes and models.'
    },
    {
      question: 'Can I try the service before purchasing?',
      answer: 'Yes! We offer a 1-week free trial so you can test our ELD solution before committing to a subscription. No credit card required for the trial.'
    },
    {
      question: 'What happens if my ELD device malfunctions?',
      answer: 'If your device malfunctions, contact our 24/7 support immediately. We provide backup solutions and can overnight a replacement device if needed. All devices come with a 2-year warranty.'
    },
    {
      question: 'How is my data stored and protected?',
      answer: 'All data is encrypted and stored securely in the cloud with multiple backup systems. We comply with all FMCSA data retention requirements and never share your information with third parties.'
    },
    {
      question: 'Do you provide training for drivers?',
      answer: 'Yes, we provide comprehensive training materials, video tutorials, and can arrange live training sessions for your drivers. Our support team is also available 24/7 to help with any questions.'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          formType: 'support'
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-blue text-white section-padding">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              How Can We Help You?
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Get support, request a demo, or start your free trial. Our team is here to ensure your success.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="card p-8 text-center">
              <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone Support</h3>
              <p className="text-gray-600 mb-4">Speak directly with our support team</p>
              <a href="tel:1-661-404-1900" className="text-blue-600 font-semibold hover:text-blue-700 text-lg">
                1-661-404-1900
              </a>
              <p className="text-sm text-gray-500 mt-2">Available 24/7</p>
            </div>

            <div className="card p-8 text-center">
              <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Support</h3>
              <p className="text-gray-600 mb-4">Send us your questions anytime</p>
              <a href="mailto:support@govoeld.com" className="text-blue-600 font-semibold hover:text-blue-700 text-lg">
                support@govoeld.com
              </a>
              <p className="text-sm text-gray-500 mt-2">Response within 24 hours</p>
            </div>

            <div className="card p-8 text-center">
              <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Office Location</h3>
              <p className="text-gray-600 mb-4">Visit us or send mail to:</p>
              <address className="text-gray-700 not-italic text-sm leading-relaxed">
                5830 E 2nd St, Ste 7000 #23857<br />
                Casper, WY 82609
              </address>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Ready to get started or have questions? Fill out the form below and we'll get back to you promptly.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-semibold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Free Consultation</h3>
                    <p className="text-gray-600">We'll discuss your fleet needs and recommend the best solution.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-semibold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Free Trial Setup</h3>
                    <p className="text-gray-600">Start your 1-week free trial with full support and training.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-semibold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Ongoing Support</h3>
                    <p className="text-gray-600">24/7 customer support to ensure your continued success.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  >
                    <option value="">Select a topic</option>
                    <option value="free-trial">Start Free Trial</option>
                    <option value="demo">Request Demo</option>
                    <option value="pricing">Pricing Information</option>
                    <option value="technical">Technical Support</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                    placeholder="Tell us about your fleet needs or how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 text-center">
                      Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800 text-center">
                      Sorry, there was an error sending your message. Please try again or contact us directly.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Find quick answers to common questions about Govo ELD.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="card">
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">{item.question}</h3>
                  {openFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Documentation & Resources
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Download helpful guides and documentation for your Govo ELD system.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="card p-6 text-center">
                <Download className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Installation Guide</h3>
                <p className="text-gray-600 mb-4">Step-by-step installation instructions</p>
                <button className="text-blue-600 font-semibold hover:text-blue-700">
                  Download PDF
                </button>
              </div>
              
              <div className="card p-6 text-center">
                <Download className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">User Manual</h3>
                <p className="text-gray-600 mb-4">Complete user guide and features</p>
                <button className="text-blue-600 font-semibold hover:text-blue-700">
                  Download PDF
                </button>
              </div>
              
              <div className="card p-6 text-center">
                <Download className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">FMCSA Compliance</h3>
                <p className="text-gray-600 mb-4">Compliance guidelines and requirements</p>
                <button className="text-blue-600 font-semibold hover:text-blue-700">
                  Download PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
