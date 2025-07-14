import React from 'react';
import AdCard from './AdCard';

export default function DashboardTabs({
  activeTab,
  myAds = [],
  savedAds = [],
  stats = { active: 0, sold: 0 },
  onEditAd,
  onDeleteAd,
}) {
  if (activeTab === 'dashboard') {
    return (
      <div className="bg-white rounded-2xl shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">My Stats</h2>
        <div className="flex gap-8 mb-4">
          <div className="flex-1 bg-blue-50 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-blue-700">{stats.active}</div>
            <div className="text-gray-800 mt-2">Active Ads</div>
          </div>
          <div className="flex-1 bg-green-50 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-green-700">{stats.sold}</div>
            <div className="text-gray-800 mt-2">Sold Ads</div>
          </div>
        </div>
      </div>
    );
  }
  if (activeTab === 'my-ads') {
    return (
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">My Ads</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {myAds.map((ad) => (
            <div key={ad.id} className="relative group">
              <AdCard ad={ad} />
              <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button onClick={() => onEditAd(ad)} className="bg-yellow-400 text-white px-3 py-1 rounded font-semibold text-xs shadow hover:bg-yellow-500">Edit</button>
                <button onClick={() => onDeleteAd(ad)} className="bg-red-500 text-white px-3 py-1 rounded font-semibold text-xs shadow hover:bg-red-600">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (activeTab === 'saved-ads') {
    return (
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Saved Ads</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedAds.length === 0 ? (
            <div className="text-gray-800 col-span-full text-center">No saved ads yet.</div>
          ) : (
            savedAds.map((ad) => <AdCard key={ad.id} ad={ad} />)
          )}
        </div>
      </div>
    );
  }
  if (activeTab === 'settings') {
    return (
      <div className="bg-white rounded-2xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Settings</h2>
        <div className="text-gray-800">Settings form coming soon...</div>
      </div>
    );
  }
  return null;
} 