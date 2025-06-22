
import { useState, useEffect } from 'react';
import { ChevronDown, Leaf, Users, Recycle, Heart, Mail, Phone, MapPin } from 'lucide-react';

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}>
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img 
                src="/lovable-uploads/f121ec9c-16ca-44e5-b4b1-ba1940468154.png" 
                alt="Kulhad Raja Logo" 
                className="h-12 w-12 rounded-full"
              />
              <div>
                <h1 className="font-lora text-2xl font-bold text-amber-900">Kulhad Raja</h1>
                <p className="text-sm text-amber-700 font-poppins">Happy Earth, Happy You!</p>
              </div>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'How It Works', 'Mission', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="font-poppins text-amber-800 hover:text-amber-600 transition-colors duration-200 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2">
              <ChevronDown className="h-6 w-6 text-amber-800" />
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-amber-100 via-orange-50 to-amber-200"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1609501676725-7186f734ed28?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay'
          }}
        />
        <div className="absolute inset-0 bg-black/20" />
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <img 
            src="/lovable-uploads/f121ec9c-16ca-44e5-b4b1-ba1940468154.png" 
            alt="Kulhad Raja Logo" 
            className="h-32 w-32 mx-auto mb-8 rounded-full shadow-2xl animate-fade-in"
          />
          <h1 className="font-lora text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in [animation-delay:200ms]">
            मिट्टी की खुशबू,<br />हर एक कप में
          </h1>
          <p className="font-poppins text-xl md:text-2xl text-amber-100 mb-8 animate-fade-in [animation-delay:400ms]">
            Reviving tradition, protecting nature, one kulhad at a time
          </p>
          <button 
            onClick={() => scrollToSection('about')}
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full font-poppins font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl animate-fade-in [animation-delay:600ms]"
          >
            Join the Mitti Movement
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-white" />
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-lora text-4xl md:text-5xl font-bold text-amber-900 mb-8">
              About Kulhad Raja
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <p className="font-poppins text-lg text-gray-700 mb-6 leading-relaxed">
                  At Kulhad Raja, we believe in the power of tradition to solve modern problems. 
                  Our mission is to revive the ancient art of clay kulhads while creating a 
                  sustainable alternative to harmful plastic and paper cups.
                </p>
                <p className="font-poppins text-lg text-gray-700 mb-6 leading-relaxed">
                  Every kulhad tells a story of skilled artisans, rural employment, and 
                  environmental consciousness. We're not just selling cups – we're preserving 
                  culture and protecting our planet.
                </p>
                <div className="flex space-x-6">
                  <div className="text-center">
                    <div className="bg-amber-100 rounded-full p-4 mb-2 inline-block">
                      <Leaf className="h-8 w-8 text-amber-600" />
                    </div>
                    <p className="font-poppins font-semibold text-amber-900">100% Eco-Friendly</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-amber-100 rounded-full p-4 mb-2 inline-block">
                      <Users className="h-8 w-8 text-amber-600" />
                    </div>
                    <p className="font-poppins font-semibold text-amber-900">Supporting Artisans</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-amber-100 rounded-full p-4 mb-2 inline-block">
                      <Heart className="h-8 w-8 text-amber-600" />
                    </div>
                    <p className="font-poppins font-semibold text-amber-900">Made with Love</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
               src="kulhad-khushboo-web-82/Kulhad artist.png" 
                  alt="Traditional pottery making" 
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-amber-600 text-white p-6 rounded-2xl">
                  <p className="font-lora font-bold text-2xl">1000+</p>
                  <p className="font-poppins text-sm">Artisans Supported</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-lora text-4xl md:text-5xl font-bold text-amber-900 mb-4">
              How It Works
            </h2>
            <p className="font-poppins text-xl text-gray-600 max-w-2xl mx-auto">
              From earth to your hands - the beautiful journey of our kulhads
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              { step: '1', title: 'Soil Collection', desc: 'Premium clay sourced from fertile regions', icon: '🏺' },
              { step: '2', title: "Potter's Wheel", desc: 'Skilled artisans shape each kulhad', icon: '🎨' },
              { step: '3', title: 'Kiln Baking', desc: 'Traditional firing for durability', icon: '🔥' },
              { step: '4', title: 'Eco-Packaging', desc: 'Sustainable packaging materials', icon: '📦' },
              { step: '5', title: 'Delivery', desc: 'Fresh kulhads for your events', icon: '🚚' }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <div className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-lora text-xl font-bold text-amber-900 mb-2">{item.title}</h3>
                  <p className="font-poppins text-gray-600 text-sm">{item.desc}</p>
                </div>
                {index < 4 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-amber-300"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-lora text-4xl md:text-5xl font-bold text-amber-900 mb-4">
                Our Mission
              </h2>
              <p className="font-poppins text-xl text-gray-600">
                Creating a sustainable future, one kulhad at a time
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300">
                <Recycle className="h-16 w-16 text-green-600 mx-auto mb-6" />
                <h3 className="font-lora text-2xl font-bold text-green-800 mb-4">Sustainability</h3>
                <p className="font-poppins text-gray-700">
                  Replace harmful disposables with 100% biodegradable clay cups that enrich the soil after use.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300">
                <Users className="h-16 w-16 text-blue-600 mx-auto mb-6" />
                <h3 className="font-lora text-2xl font-bold text-blue-800 mb-4">Rural Employment</h3>
                <p className="font-poppins text-gray-700">
                  Empower traditional potters and create sustainable livelihoods in rural communities across India.
                </p>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300">
                <Heart className="h-16 w-16 text-amber-600 mx-auto mb-6" />
                <h3 className="font-lora text-2xl font-bold text-amber-800 mb-4">Cultural Revival</h3>
                <p className="font-poppins text-gray-700">
                  Preserve ancient pottery traditions and bring the authentic taste of clay back to modern life.
                </p>
              </div>
            </div>

            <div className="mt-16 bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-8 text-white text-center">
              <h3 className="font-lora text-3xl font-bold mb-4">Impact So Far</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div>
                  <p className="font-lora text-4xl font-bold">50,000+</p>
                  <p className="font-poppins">Kulhads Delivered</p>
                </div>
                <div>
                  <p className="font-lora text-4xl font-bold">1,000+</p>
                  <p className="font-poppins">Artisans Supported</p>
                </div>
                <div>
                  <p className="font-lora text-4xl font-bold">25+</p>
                  <p className="font-poppins">Partner Cafés</p>
                </div>
                <div>
                  <p className="font-lora text-4xl font-bold">100%</p>
                  <p className="font-poppins">Plastic-Free</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-amber-100 via-orange-50 to-amber-200">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-lora text-4xl md:text-5xl font-bold text-amber-900 mb-6">
            Bring Kulhad Raja to your Café, Event, or Office
          </h2>
          <p className="font-poppins text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Join the sustainable revolution and offer your customers an authentic, eco-friendly experience 
            that connects them to Indian heritage while protecting the environment.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-lora text-xl font-bold text-amber-900 mb-2">For Cafés</h3>
              <p className="font-poppins text-gray-600">Enhance your chai service with authentic kulhads</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-lora text-xl font-bold text-amber-900 mb-2">For Events</h3>
              <p className="font-poppins text-gray-600">Make your celebrations more meaningful and eco-friendly</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-lora text-xl font-bold text-amber-900 mb-2">For Offices</h3>
              <p className="font-poppins text-gray-600">Promote sustainability in your workplace culture</p>
            </div>
          </div>

          <button 
            onClick={() => window.location.href = 'mailto:hello@kulhadraja.com?subject=Partnership Inquiry'}
            className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-4 rounded-full font-poppins font-semibold text-xl transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Partner With Us
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-lora text-4xl font-bold text-amber-900 mb-8">Get in Touch</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="flex flex-col items-center">
                <Mail className="h-8 w-8 text-amber-600 mb-4" />
                <h3 className="font-poppins font-semibold text-amber-900 mb-2">Email</h3>
                <p className="font-poppins text-gray-600">hello@kulhadraja.com</p>
              </div>
              <div className="flex flex-col items-center">
                <Phone className="h-8 w-8 text-amber-600 mb-4" />
                <h3 className="font-poppins font-semibold text-amber-900 mb-2">Phone</h3>
                <p className="font-poppins text-gray-600">+91 9876543210</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="h-8 w-8 text-amber-600 mb-4" />
                <h3 className="font-poppins font-semibold text-amber-900 mb-2">Location</h3>
                <p className="font-poppins text-gray-600">Delhi, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-6 md:mb-0">
              <img 
                src="/lovable-uploads/f121ec9c-16ca-44e5-b4b1-ba1940468154.png" 
                alt="Kulhad Raja Logo" 
                className="h-12 w-12 rounded-full"
              />
              <div>
                <h3 className="font-lora text-xl font-bold">Kulhad Raja</h3>
                <p className="font-poppins text-amber-200">देश का कुल्हड़, देश के लिए!</p>
              </div>
            </div>
            
            <div className="flex space-x-6 mb-6 md:mb-0">
              <a href="#" className="text-amber-200 hover:text-white transition-colors">Facebook</a>
              <a href="#" className="text-amber-200 hover:text-white transition-colors">Instagram</a>
              <a href="#" className="text-amber-200 hover:text-white transition-colors">Twitter</a>
              <a href="#" className="text-amber-200 hover:text-white transition-colors">LinkedIn</a>
            </div>
          </div>
          
          <div className="border-t border-amber-700 mt-8 pt-8 text-center">
            <p className="font-poppins text-amber-200">
              © 2025 Kulhad Raja. All rights reserved. Made with ❤️ for a sustainable future.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
