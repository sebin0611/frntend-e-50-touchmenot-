import React from 'react';

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md p-6 space-y-6">
        <h2 className="text-xl font-semibold text-orange-600">callme</h2>
        <div>
          <h3 className="text-sm font-semibold mb-2 text-gray-700">Personal</h3>
          <ul className="space-y-1 text-gray-600 text-sm">
            <li>Profile</li>
            <li>Meeting</li>
            <li>Setting</li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-2 text-gray-700">Admin</h3>
          <ul className="space-y-1 text-gray-600 text-sm">
            <li>User Management</li>
            <li>Advanced</li>
          </ul>
        </div>
        <div className="space-y-1 text-sm text-gray-600">
          <p>📺 Live Training</p>
          <p>🎥 Video Tutorial</p>
          <p>📝 Blog</p>
          <p className="text-red-600">🚪 Log Out</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Top Nav */}
        <div className="flex justify-between items-center mb-6">
          <div className="space-x-6">
            <button className="text-sm text-gray-600">Services</button>
            <button className="text-sm text-gray-600">Plans & Pricing</button>
          </div>
          <div className="space-x-4">
            <button className="bg-orange-500 text-white px-4 py-1 rounded">Join a Call</button>
            <button className="bg-blue-600 text-white px-4 py-1 rounded">Schedule a Call</button>
          </div>
        </div>

        {/* Cover & Profile Info */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1603988363607-8f92397f16c1?auto=format&fit=crop&w=1400&q=80"
              alt="cover"
              className="w-full h-48 object-cover"
            />
            <button className="absolute top-2 right-2 bg-blue-500 text-white text-sm px-3 py-1 rounded">Upload Cover</button>
            <div className="absolute -bottom-10 left-6 flex items-center">
              <img
                src="https://avatars.githubusercontent.com/u/9919?s=200&v=4"
                alt="avatar"
                className="w-20 h-20 rounded-full border-4 border-white"
              />
              <div className="ml-4">
                <h2 className="text-xl font-semibold">Rachel Derek</h2>
                <p className="text-sm text-gray-500">UI/UX Designer @spotify</p>
                <p className="text-sm text-gray-500">📍 Sylhet, Bangladesh</p>
              </div>
            </div>
          </div>

          {/* Info Table */}
          <div className="mt-16 p-6 space-y-4">
            {[
              ['Personal Meeting ID', '231-342-3245', 'https://callme/231-342-3245'],
              ['Email', 'rachel@callme.io'],
              ['Subscription Type', 'Basic User'],
              ['Time Zone', '(GMT+6:00) Astana, Dhaka'],
              ['Language', 'English'],
              ['Password', '********'],
              ['Device', 'Sign Out From All Devices'],
            ].map(([label, value, link], idx) => (
              <div key={idx} className="flex justify-between border-b py-2">
                <div>
                  <p className="text-gray-500 text-sm">{label}</p>
                  <p className="text-gray-800 text-sm">
                    {value}
                    {link && (
                      <a href={link} className="ml-2 text-blue-500 underline text-xs">{link}</a>
                    )}
                  </p>
                </div>
                <button className="text-blue-500 text-sm">Edit</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
