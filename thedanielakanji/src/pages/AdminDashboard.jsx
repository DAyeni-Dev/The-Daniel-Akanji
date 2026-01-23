import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  DashboardIcon, 
  CalendarIcon, 
  MessageIcon, 
  LogOutIcon, 
  UserIcon, 
  HomeIcon, 
  AboutIcon, 
  ContactIcon, 
  BookIcon, 
  MenuIcon, 
  XIcon 
} from '../components/Icons';
import logo from '../assets/hero-bg.jpeg';

const AdminDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('adminToken');
      if (!token) {
        navigate('/admin/login');
        return;
      }

      try {
        const [bookingsRes, contactsRes] = await Promise.all([
          fetch('http://localhost:5000/api/bookings', {
            headers: { Authorization: `Bearer ${token}` },
          }),
          fetch('http://localhost:5000/api/contacts', {
            headers: { Authorization: `Bearer ${token}` },
          }),
        ]);

        if (bookingsRes.ok && contactsRes.ok) {
          const bookingsData = await bookingsRes.json();
          const contactsData = await contactsRes.json();
          setBookings(bookingsData);
          setContacts(contactsData);
        } else {
          localStorage.removeItem('adminToken');
          navigate('/admin/login');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#132347]"></div>
      </div>
    );
  }

  const StatCard = ({ title, count, icon: Icon, color }) => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center space-x-4"
    >
      <div className={`p-3 rounded-lg ${color} text-white`}>
        <Icon />
      </div>
      <div>
        <p className="text-gray-500 text-sm font-medium">{title}</p>
        <h3 className="text-2xl font-bold text-gray-800">{count}</h3>
      </div>
    </motion.div>
  );

  return (
    <div className="flex h-screen bg-gray-50 font-sans overflow-hidden">
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 w-64 bg-[#132347] text-white flex flex-col shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0`}>
        <div className="p-6 border-b border-gray-700 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Logo" className="h-14 w-16 object-cover rounded-md" />
            <div>
              <h1 className="text-xl font-bold tracking-wider">ADMIN</h1>
              <p className="text-gray-400 text-xs mt-1">THE DANIEL AKANJI</p>
            </div>
          </div>
          <button onClick={() => setIsSidebarOpen(false)} className="md:hidden text-gray-300 hover:text-white">
            <XIcon />
          </button>
        </div>
        
        <nav className="flex-1 py-6 space-y-2 px-4">
          <button
            onClick={() => { setActiveTab('overview'); setIsSidebarOpen(false); }}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
              activeTab === 'overview' ? 'bg-[#FF9A4A] text-white shadow-lg' : 'text-gray-300 hover:bg-white/10'
            }`}
          >
            <DashboardIcon />
            <span>Overview</span>
          </button>
          <button
            onClick={() => { setActiveTab('bookings'); setIsSidebarOpen(false); }}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
              activeTab === 'bookings' ? 'bg-[#FF9A4A] text-white shadow-lg' : 'text-gray-300 hover:bg-white/10'
            }`}
          >
            <CalendarIcon />
            <span>Bookings</span>
          </button>
          <button
            onClick={() => { setActiveTab('contacts'); setIsSidebarOpen(false); }}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
              activeTab === 'contacts' ? 'bg-[#FF9A4A] text-white shadow-lg' : 'text-gray-300 hover:bg-white/10'
            }`}
          >
            <MessageIcon />
            <span>Messages</span>
          </button>
          
          <div className="pt-4 border-t border-gray-700 mt-2">
            <p className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Website</p>
            <button
              onClick={() => navigate('/')}
              className="w-full flex items-center space-x-3 px-4 py-2 rounded-lg text-gray-300 hover:bg-white/10 transition-colors text-sm"
            >
              <HomeIcon />
              <span>Home</span>
            </button>
            <button
              onClick={() => navigate('/about')}
              className="w-full flex items-center space-x-3 px-4 py-2 rounded-lg text-gray-300 hover:bg-white/10 transition-colors text-sm"
            >
              <AboutIcon />
              <span>About</span>
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="w-full flex items-center space-x-3 px-4 py-2 rounded-lg text-gray-300 hover:bg-white/10 transition-colors text-sm"
            >
              <ContactIcon />
              <span>Contact</span>
            </button>
            <button
              onClick={() => navigate('/book')}
              className="w-full flex items-center space-x-3 px-4 py-2 rounded-lg text-gray-300 hover:bg-white/10 transition-colors text-sm"
            >
              <BookIcon />
              <span>Book</span>
            </button>
          </div>
        </nav>

        <div className="p-4 border-t border-gray-700">
          <button
            onClick={handleLogout}
            className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-red-300 hover:bg-red-500/10 transition-colors"
          >
            <LogOutIcon />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden w-full">
        <header className="bg-white shadow-sm p-4 md:p-6 flex justify-between items-center sticky top-0 z-10">
          <div className="flex items-center">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="md:hidden mr-4 text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              <MenuIcon />
            </button>
            <h2 className="text-lg md:text-xl font-semibold text-gray-800 capitalize">
              {activeTab === 'overview' ? 'Dashboard Overview' : activeTab}
            </h2>
          </div>
          <div className="flex items-center space-x-3">
            <div className="h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-600">
              <UserIcon />
            </div>
            <span className="hidden md:inline text-sm font-medium text-gray-600">Admin User</span>
          </div>
        </header>

        <main className="flex-1 overflow-auto p-4 md:p-8">
          {activeTab === 'overview' && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatCard 
                  title="Total Bookings" 
                  count={bookings.length} 
                  icon={CalendarIcon} 
                  color="bg-blue-600"
                />
                <StatCard 
                  title="Total Messages" 
                  count={contacts.length} 
                  icon={MessageIcon} 
                  color="bg-purple-600"
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                >
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Recent Bookings</h3>
                  {bookings.length === 0 ? (
                    <p className="text-gray-500">No bookings yet.</p>
                  ) : (
                    <ul className="space-y-3">
                      {bookings.slice(0, 5).map((booking, idx) => (
                        <li key={idx} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <div>
                            <p className="font-medium text-gray-800">{booking.name}</p>
                            <p className="text-xs text-gray-500">{booking.email}</p>
                          </div>
                          <span className="text-xs font-semibold bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                            {booking.serviceType || 'Service'}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                >
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Recent Messages</h3>
                  {contacts.length === 0 ? (
                    <p className="text-gray-500">No messages yet.</p>
                  ) : (
                    <ul className="space-y-3">
                      {contacts.slice(0, 5).map((contact, idx) => (
                        <li key={idx} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <div>
                            <p className="font-medium text-gray-800">{contact.name}</p>
                            <p className="text-xs text-gray-500 truncate max-w-[200px]">{contact.message}</p>
                          </div>
                          <span className="text-xs text-gray-400">
                            {new Date().toLocaleDateString()}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              </div>
            </div>
          )}

          {activeTab === 'bookings' && (
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
             >
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="p-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Name</th>
                      <th className="p-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Email</th>
                      <th className="p-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Phone</th>
                      <th className="p-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Service</th>
                      <th className="p-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Date</th>
                      <th className="p-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Message</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {bookings.map((booking, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition-colors">
                        <td className="p-4 text-sm font-medium text-gray-900">{booking.name}</td>
                        <td className="p-4 text-sm text-gray-600">{booking.email}</td>
                        <td className="p-4 text-sm text-gray-600">{booking.phone}</td>
                        <td className="p-4 text-sm text-gray-600">
                          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                            {booking.serviceType}
                          </span>
                        </td>
                        <td className="p-4 text-sm text-gray-600">{booking.date}</td>
                        <td className="p-4 text-sm text-gray-600 max-w-xs truncate" title={booking.message}>
                          {booking.message}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {bookings.length === 0 && (
                  <div className="p-8 text-center text-gray-500">No bookings found.</div>
                )}
              </div>
            </motion.div>
          )}

          {activeTab === 'contacts' && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="p-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Name</th>
                      <th className="p-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Email</th>
                      <th className="p-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Subject</th>
                      <th className="p-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Message</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {contacts.map((contact, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition-colors">
                        <td className="p-4 text-sm font-medium text-gray-900">{contact.name}</td>
                        <td className="p-4 text-sm text-gray-600">{contact.email}</td>
                        <td className="p-4 text-sm text-gray-600">{contact.subject}</td>
                        <td className="p-4 text-sm text-gray-600 max-w-md">
                          <div className="bg-gray-50 p-3 rounded-lg text-gray-700">
                            {contact.message}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                 {contacts.length === 0 && (
                  <div className="p-8 text-center text-gray-500">No messages found.</div>
                )}
              </div>
            </motion.div>
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
