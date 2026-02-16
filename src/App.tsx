import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Fuel, Shield, Users, TrendingUp, MapPin, Menu, X, ChevronRight, CheckCircle, Factory, Leaf, Zap } from 'lucide-react'
import { useState } from 'react'

function App() {
  return (
    <Router basename="/alaska-oil-and-gas-company">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/environmental" element={<EnvironmentalPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  )
}

function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <Fuel className="h-8 w-8 text-orange-400" />
            <span className="text-xl font-bold">Alaska Oil & Gas</span>
          </Link>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X /> : <Menu />}
          </button>

          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-orange-400 transition">Home</Link>
            <Link to="/services" className="hover:text-orange-400 transition">Services</Link>
            <Link to="/environmental" className="hover:text-orange-400 transition">Environmental</Link>
            <Link to="/careers" className="hover:text-orange-400 transition">Careers</Link>
            <Link to="/contact" className="hover:text-orange-400 transition">Contact</Link>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link to="/" className="block hover:text-orange-400" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/services" className="block hover:text-orange-400" onClick={() => setIsOpen(false)}>Services</Link>
            <Link to="/environmental" className="block hover:text-orange-400" onClick={() => setIsOpen(false)}>Environmental</Link>
            <Link to="/careers" className="block hover:text-orange-400" onClick={() => setIsOpen(false)}>Careers</Link>
            <Link to="/contact" className="block hover:text-orange-400" onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
        )}
      </div>
    </nav>
  )
}

function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Fuel className="h-6 w-6 text-orange-400" />
              <span className="font-bold">Alaska Oil & Gas</span>
            </div>
            <p className="text-slate-400 text-sm">Integrated energy solutions for Alaska.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <div className="space-y-2 text-sm">
              <Link to="/services" className="block text-slate-400 hover:text-white">Exploration</Link>
              <Link to="/services" className="block text-slate-400 hover:text-white">Production</Link>
              <Link to="/services" className="block text-slate-400 hover:text-white">Pipelines</Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <div className="space-y-2 text-sm">
              <Link to="/environmental" className="block text-slate-400 hover:text-white">Environmental</Link>
              <Link to="/careers" className="block text-slate-400 hover:text-white">Careers</Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-sm text-slate-400">
              <p>Anchorage, Alaska</p>
              <p>(907) 555-0200</p>
              <p>info@akoilandgas.com</p>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} Alaska Oil and Gas Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Alaska Oil and Gas Company - Integrated Energy Solutions</title>
        <meta name="description" content="Alaska Oil and Gas Company: Comprehensive oil & gas exploration, production, and pipeline operations across Alaska." />
      </Helmet>

      <Navigation />

      <section className="relative h-[600px] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900 via-slate-900 to-blue-900"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="relative z-10 text-center container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Alaska Oil & Gas Company</h1>
          <p className="text-xl md:text-2xl mb-8 text-orange-200">Integrated Energy Solutions for Alaska</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/services" className="bg-orange-600 hover:bg-orange-700 px-8 py-3 rounded-lg font-semibold transition">
              Our Services
            </Link>
            <Link to="/contact" className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-3 rounded-lg font-semibold transition">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">200K+</div>
              <div className="text-slate-600">BOE/Day</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">500+</div>
              <div className="text-slate-600">Miles Pipeline</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">3,000+</div>
              <div className="text-slate-600">Employees</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">50+</div>
              <div className="text-slate-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">Integrated Operations</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border hover:shadow-xl transition">
              <Factory className="h-12 w-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Exploration & Production</h3>
              <p className="text-slate-600">Advanced drilling and production operations across Alaska's most productive fields.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border hover:shadow-xl transition">
              <Zap className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Natural Gas Services</h3>
              <p className="text-slate-600">Comprehensive natural gas extraction, processing, and distribution infrastructure.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border hover:shadow-xl transition">
              <Shield className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Pipeline Operations</h3>
              <p className="text-slate-600">Extensive pipeline network with industry-leading safety and monitoring systems.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Building Alaska's Energy Future</h2>
          <p className="text-xl mb-8 text-orange-100">Join our team of energy professionals.</p>
          <Link to="/careers" className="inline-flex items-center bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition">
            Explore Careers <ChevronRight className="ml-2" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}

function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Services - Alaska Oil and Gas Company</title>
        <meta name="description" content="Comprehensive oil & gas services including exploration, production, pipelines, and natural gas." />
      </Helmet>
      <Navigation />
      
      <div className="bg-orange-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-orange-100">Integrated energy solutions across Alaska</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {[
            {
              title: 'Oil Exploration & Production',
              items: ['North Slope operations', 'Advanced drilling technology', 'Enhanced oil recovery', 'Offshore platforms']
            },
            {
              title: 'Natural Gas Services',
              items: ['Gas extraction & processing', 'LNG facilities', 'Distribution network', 'Storage infrastructure']
            },
            {
              title: 'Pipeline Operations',
              items: ['500+ miles of pipelines', '24/7 monitoring systems', 'Maintenance & inspection', 'Emergency response']
            },
            {
              title: 'Environmental Compliance',
              items: ['EPA certified operations', 'Spill prevention plans', 'Wildlife protection', 'Air quality monitoring']
            }
          ].map((service, idx) => (
            <div key={idx} className="bg-slate-50 p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-6 text-slate-900">{service.title}</h2>
              <ul className="space-y-3">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600">
                    <CheckCircle className="h-6 w-6 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}

function EnvironmentalPage() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Environmental Commitment - Alaska Oil and Gas Company</title>
        <meta name="description" content="Our commitment to environmental protection and sustainable energy operations." />
      </Helmet>
      <Navigation />
      
      <div className="bg-green-700 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Environmental Stewardship</h1>
          <p className="text-xl text-green-100">Protecting Alaska's environment while delivering energy</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-green-50 p-8 rounded-xl">
            <Leaf className="h-12 w-12 text-green-600 mb-4" />
            <h3 className="text-2xl font-bold mb-4 text-slate-900">Conservation Programs</h3>
            <ul className="space-y-2 text-slate-600">
              <li>• Wildlife habitat protection</li>
              <li>• Wetlands preservation</li>
              <li>• Reforestation initiatives</li>
              <li>• Water quality monitoring</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-8 rounded-xl">
            <Shield className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-2xl font-bold mb-4 text-slate-900">Safety & Compliance</h3>
            <ul className="space-y-2 text-slate-600">
              <li>• EPA & state regulatory compliance</li>
              <li>• Spill prevention & response</li>
              <li>• Air emissions controls</li>
              <li>• Regular environmental audits</li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

function CareersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Careers - Alaska Oil and Gas Company</title>
        <meta name="description" content="Join Alaska Oil and Gas Company. Build your career in energy." />
      </Helmet>
      <Navigation />
      
      <div className="bg-orange-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Career Opportunities</h1>
          <p className="text-xl text-orange-100">Build your future with Alaska's integrated energy leader</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            { title: 'Petroleum Engineer', location: 'North Slope', type: 'Full-time' },
            { title: 'Pipeline Operator', location: 'Fairbanks', type: 'Full-time' },
            { title: 'Environmental Specialist', location: 'Anchorage', type: 'Full-time' },
            { title: 'Gas Processing Technician', location: 'Kenai', type: 'Full-time' },
            { title: 'Safety Coordinator', location: 'Multiple', type: 'Full-time' },
            { title: 'Field Supervisor', location: 'North Slope', type: 'Full-time' },
          ].map((job, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg border shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2 text-slate-900">{job.title}</h3>
              <p className="text-slate-600 mb-4 flex items-center gap-2">
                <MapPin className="h-4 w-4" /> {job.location}
              </p>
              <span className="inline-block bg-orange-100 text-orange-700 px-3 py-1 rounded text-sm font-medium">
                {job.type}
              </span>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}

function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Contact - Alaska Oil and Gas Company</title>
        <meta name="description" content="Contact Alaska Oil and Gas Company for business inquiries." />
      </Helmet>
      <Navigation />
      
      <div className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-slate-300">Get in touch with our team</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Send a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea rows={5} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500"></textarea>
              </div>
              <button className="bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition font-semibold">
                Send Message
              </button>
            </form>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Office Locations</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2 text-slate-900">Headquarters</h3>
                <p className="text-slate-600">
                  Alaska Oil & Gas Company<br />
                  2500 Industry Avenue<br />
                  Anchorage, AK 99503
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-slate-900">Contact</h3>
                <p className="text-slate-600">
                  Phone: (907) 555-0200<br />
                  Email: info@akoilandgas.com<br />
                  Careers: careers@akoilandgas.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default App
