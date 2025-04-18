import React, { useState } from 'react';
import Profile from '../assets/profile.png';

const tabs = ['Edit Profile', 'Preferences', 'Security'];

const Settings = () => {
  const [activeTab, setActiveTab] = useState('Edit Profile');
  const [profilePic, setProfilePic] = useState(Profile);
  const [newPicPreview, setNewPicPreview] = useState(null);

  const inputStyle =
    'border border-[#DFEAF2] placeholder-[#DFEAF2] px-4 py-3 rounded-md w-full text-sm text-gray-700';

  const handleSave = (e) => {
    e.preventDefault();
    if (newPicPreview) setProfilePic(newPicPreview);
    alert('Your profile has been saved successfully!');
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewPicPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto mt-6 px-4 py-6 bg-white shadow-md rounded-lg">
      {/* Tabs */}
      <div className="flex flex-wrap sm:flex-nowrap sm:space-x-6 gap-2 sm:gap-0 border-b pb-2 overflow-x-auto no-scrollbar">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-sm font-medium whitespace-nowrap px-2 pb-1 ${
              activeTab === tab
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Edit Profile */}
      {activeTab === 'Edit Profile' && (
        <>
          {/* Profile Picture */}
          <div className="mt-6 flex flex-col sm:flex-row items-center sm:items-start sm:space-x-6 gap-4 mx-auto">
            <img
              src={newPicPreview || profilePic}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border border-gray-300"
            />
            <div className='flex flex-col'>
              <label className="text-sm text-center text-gray-600">Edit Profile Picture</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="block mt-2 text-sm text-gray-500"
              />
            </div>
          </div>

          {/* Form */}
          <form
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6"
            onSubmit={handleSave}
          >
            {[
              { label: 'Your Name', value: 'Charlene Reed' },
              { label: 'User Name', value: 'Charlene Reed' },
              { label: 'Email', type: 'email', value: 'charlenereed@gmail.com' },
              { label: 'Password', type: 'password', value: '********' },
              { label: 'Date of Birth', type: 'date', value: '1990-01-25' },
              { label: 'Present Address', value: 'San Jose, California, USA' },
              { label: 'Permanent Address', value: 'San Jose, California, USA' },
              { label: 'City', value: 'San Jose' },
              { label: 'Postal Code', value: '45962' },
              { label: 'Country', value: 'USA' },
            ].map(({ label, value, type = 'text' }) => (
              <div key={label} className="flex flex-col">
                <label className="text-sm text-gray-500">{label}</label>
                <input
                  type={type}
                  defaultValue={value}
                  placeholder={label}
                  className={inputStyle}
                  required
                />
              </div>
            ))}

            {/* Save Button */}
            <div className="col-span-1 sm:col-span-2 mt-4 flex justify-center sm:justify-end">
              <button
                type="submit"
                className="bg-black text-white w-full sm:w-[200px] py-3 px-6 rounded-xl hover:bg-blue-600 transition-all duration-200"
              >
                Save
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default Settings;
