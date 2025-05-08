import React, { useState } from 'react';
import { motion } from 'framer-motion';
import VirtualStudyRoom from '../components/VirtualStudyRoom';
import {
  AcademicCapIcon,
  UserGroupIcon,
  CalendarIcon,
  ClockIcon,
  PlusIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';

const subjects = ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English'];

const StudyRooms: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [roomName, setRoomName] = useState('');
  const [roomSubject, setRoomSubject] = useState(subjects[0]);
  const [maxParticipants, setMaxParticipants] = useState(5);
  const [roomDescription, setRoomDescription] = useState('');
  const [search, setSearch] = useState('');

  // This would be replaced by backend logic
  const handleCreateRoom = () => {
    // For now, just close the modal and reset
    setIsModalOpen(false);
    setRoomName('');
    setRoomSubject(subjects[0]);
    setMaxParticipants(5);
    setRoomDescription('');
    // TODO: Add room to list (pass to VirtualStudyRoom via props)
  };

  return (
    <div className="min-h-screen bg-[#151c2c] text-white">
      {/* Header */}
      <div className="bg-[#20273a] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-between"
          >
            <div>
              <h1 className="text-4xl font-extrabold mb-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent drop-shadow-lg">Study Rooms</h1>
              <p className="text-gray-200 mt-2 text-lg">Collaborate and learn together in real-time</p>
            </div>
            <button
              className="px-4 py-2 bg-gradient-to-r from-blue-500 via-cyan-500 to-green-400 hover:from-blue-600 hover:to-green-500 text-white rounded-xl font-bold shadow-lg transition-colors flex items-center"
              onClick={() => setIsModalOpen(true)}
            >
              <PlusIcon className="h-5 w-5 mr-2" />
              Create Room
            </button>
          </motion.div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { icon: <UserGroupIcon className="h-6 w-6 text-cyan-400" />, label: 'Active Rooms', value: '12' },
            { icon: <AcademicCapIcon className="h-6 w-6 text-cyan-400" />, label: 'Total Participants', value: '48' },
            { icon: <CalendarIcon className="h-6 w-6 text-cyan-400" />, label: 'Scheduled Sessions', value: '5' },
            { icon: <ClockIcon className="h-6 w-6 text-cyan-400" />, label: 'Average Duration', value: '2h' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#232c43] rounded-2xl p-6 shadow-2xl"
            >
              <div className="flex items-center">
                <div className="bg-cyan-700/30 p-3 rounded-full mr-4">
                  {stat.icon}
                </div>
                <div>
                  <p className="text-sm text-gray-200">{stat.label}</p>
                  <p className="text-2xl font-bold text-cyan-400">{stat.value}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Search/Filter Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <input
          type="text"
          placeholder="Search by room name or subject..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full md:w-1/2 px-4 py-2 rounded-xl border border-gray-700 bg-[#232c43] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
        />
      </div>

      {/* Main Content */}
      <VirtualStudyRoom
        search={search}
        // onCreateRoom={handleCreateRoom} // For future: pass room creation logic
      />

      {/* Create Room Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-[#232c43] rounded-2xl shadow-2xl p-8 w-full max-w-md relative">
            <button
              className="absolute top-3 right-3 p-2 rounded-full hover:bg-[#28304a]"
              onClick={() => setIsModalOpen(false)}
            >
              <XMarkIcon className="h-5 w-5 text-cyan-400" />
            </button>
            <h2 className="text-2xl font-bold mb-4 text-cyan-200">Create a Study Room</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1 dark:text-gray-300">Room Name</label>
              <input
                type="text"
                value={roomName}
                onChange={e => setRoomName(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-gray-700 bg-[#1a2234] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                placeholder="Enter room name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1 dark:text-gray-300">Subject</label>
              <select
                value={roomSubject}
                onChange={e => setRoomSubject(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-gray-700 bg-[#1a2234] text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              >
                {subjects.map(subj => (
                  <option key={subj} value={subj}>{subj}</option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1 dark:text-gray-300">Max Participants</label>
              <input
                type="number"
                min={2}
                max={20}
                value={maxParticipants}
                onChange={e => setMaxParticipants(Number(e.target.value))}
                className="w-full px-3 py-2 rounded-xl border border-gray-700 bg-[#1a2234] text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium mb-1 dark:text-gray-300">Description (optional)</label>
              <textarea
                value={roomDescription}
                onChange={e => setRoomDescription(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-gray-700 bg-[#1a2234] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                placeholder="Describe your room..."
                rows={2}
              />
            </div>
            <button
              className="w-full py-3 bg-gradient-to-r from-blue-500 via-cyan-500 to-green-400 hover:from-blue-600 hover:to-green-500 text-white rounded-xl font-bold shadow-lg transition-all duration-300 hover:shadow-xl"
              onClick={handleCreateRoom}
            >
              Create Room
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudyRooms; 