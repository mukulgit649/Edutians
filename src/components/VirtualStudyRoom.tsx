import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  UserGroupIcon,
  VideoCameraIcon,
  MicrophoneIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  ShareIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';

interface StudyRoom {
  id: string;
  name: string;
  subject: string;
  participants: number;
  maxParticipants: number;
  isActive: boolean;
  description?: string;
}

interface Message {
  id: string;
  user: string;
  content: string;
  timestamp: string;
}

interface VirtualStudyRoomProps {
  search?: string;
}

const getStatus = (room: StudyRoom) => {
  if (room.participants >= room.maxParticipants) return 'Full';
  if (!room.isActive) return 'In Progress';
  return 'Open';
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Full':
      return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
    case 'In Progress':
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
    default:
      return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
  }
};

const getInitials = (name: string) => {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
};

const VirtualStudyRoom: React.FC<VirtualStudyRoomProps> = ({ search = '' }) => {
  const [activeRoom, setActiveRoom] = useState<StudyRoom | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [isVideoOn, setIsVideoOn] = useState(false);
  const [isAudioOn, setIsAudioOn] = useState(false);
  const [detailsRoom, setDetailsRoom] = useState<StudyRoom | null>(null);

  const studyRooms: StudyRoom[] = [
    {
      id: '1',
      name: 'Mathematics Study Group',
      subject: 'Calculus',
      participants: 3,
      maxParticipants: 6,
      isActive: true,
      description: 'Discuss calculus concepts and solve problems together.'
    },
    {
      id: '2',
      name: 'Physics Discussion',
      subject: 'Quantum Mechanics',
      participants: 4,
      maxParticipants: 4,
      isActive: false,
      description: 'Dive deep into quantum mechanics and related topics.'
    },
    {
      id: '3',
      name: 'Chemistry Lab Prep',
      subject: 'Organic Chemistry',
      participants: 2,
      maxParticipants: 5,
      isActive: true,
      description: 'Prepare for lab sessions and share organic chemistry tips.'
    }
  ];

  // Filter rooms by search
  const filteredRooms = studyRooms.filter(room =>
    room.name.toLowerCase().includes(search.toLowerCase()) ||
    room.subject.toLowerCase().includes(search.toLowerCase())
  );

  const handleJoinRoom = (room: StudyRoom) => {
    setActiveRoom(room);
    // Simulate joining a room
    setMessages([
      {
        id: '1',
        user: 'System',
        content: 'You have joined the room',
        timestamp: new Date().toLocaleTimeString()
      }
    ]);
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message: Message = {
        id: Date.now().toString(),
        user: 'You',
        content: newMessage,
        timestamp: new Date().toLocaleTimeString()
      };
      setMessages([...messages, message]);
      setNewMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-[#151c2c] p-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent drop-shadow-lg">Virtual Study Rooms</h1>
          <p className="text-gray-300">
            Join study groups and collaborate with peers in real-time
          </p>
        </motion.div>

        {/* Room List */}
        {!activeRoom ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRooms.length === 0 ? (
              <div className="col-span-full text-center text-gray-400 py-12">
                No rooms found.
              </div>
            ) : (
              filteredRooms.map((room) => {
                const status = getStatus(room);
                return (
                  <motion.div
                    key={room.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="bg-[#232c43] rounded-2xl p-6 shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-cyan-200">{room.name}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ml-2 ${getStatusColor(status)}`}>{status}</span>
                      </div>
                      <div className="flex items-center mb-2">
                        <UserGroupIcon className="h-5 w-5 text-cyan-400 mr-1" />
                        <span className="text-sm text-gray-300">
                          {room.participants}/{room.maxParticipants} participants
                        </span>
                        {/* Avatars/Initials */}
                        <div className="flex ml-3 -space-x-2">
                          {Array.from({ length: Math.min(room.participants, 3) }).map((_, idx) => (
                            <div
                              key={idx}
                              className="w-7 h-7 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-xs font-bold border-2 border-[#232c43]"
                              title={`Participant ${idx + 1}`}
                            >
                              {getInitials(room.name)}
                            </div>
                          ))}
                          {room.participants > 3 && (
                            <div className="w-7 h-7 rounded-full bg-gray-700 flex items-center justify-center text-xs font-bold border-2 border-[#232c43]">
                              +{room.participants - 3}
                            </div>
                          )}
                        </div>
                      </div>
                      <p className="text-gray-300 mb-2 text-sm font-medium">Subject: {room.subject}</p>
                      {room.description && (
                        <p className="text-xs text-gray-400 mb-2">{room.description}</p>
                      )}
                    </div>
                    <div className="flex gap-2 mt-4">
                      <button
                        onClick={() => handleJoinRoom(room)}
                        className="flex-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 text-white py-2 rounded-xl hover:from-blue-600 hover:via-cyan-600 hover:to-green-600 transition-all duration-300 text-sm font-semibold shadow-lg hover:shadow-cyan-500/20"
                        disabled={status === 'Full'}
                      >
                        Join Room
                      </button>
                      <button
                        onClick={() => setDetailsRoom(room)}
                        className="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 py-2 rounded-lg hover:bg-primary/10 dark:hover:bg-accent/10 transition-colors text-sm font-semibold"
                      >
                        View Details
                      </button>
                    </div>
                  </motion.div>
                );
              })
            )}
          </div>
        ) : (
          <div className="bg-[#232c43] rounded-2xl shadow-2xl overflow-hidden">
            <div className="p-6 border-b border-gray-700">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-cyan-200">{activeRoom.name}</h2>
                  <p className="text-gray-300">{activeRoom.subject}</p>
                </div>
                <button
                  onClick={() => setActiveRoom(null)}
                  className="p-2 hover:bg-[#1a2234] rounded-full"
                >
                  <XMarkIcon className="h-6 w-6 text-gray-400" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
              {/* Video/Audio Controls */}
              <div className="lg:col-span-2 bg-[#1a2234] rounded-2xl p-4">
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <button
                    onClick={() => setIsVideoOn(!isVideoOn)}
                    className={`p-3 rounded-full ${
                      isVideoOn ? 'bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 text-white' : 'bg-[#232c43] text-cyan-400'
                    }`}
                  >
                    <VideoCameraIcon className="h-6 w-6" />
                  </button>
                  <button
                    onClick={() => setIsAudioOn(!isAudioOn)}
                    className={`p-3 rounded-full ${
                      isAudioOn ? 'bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 text-white' : 'bg-[#232c43] text-cyan-400'
                    }`}
                  >
                    <MicrophoneIcon className="h-6 w-6" />
                  </button>
                </div>
                <div className="aspect-video bg-[#232c43] rounded-2xl flex items-center justify-center">
                  <p className="text-gray-400">Video feed will appear here</p>
                </div>
              </div>

              {/* Chat Section */}
              <div className="bg-[#1a2234] rounded-2xl p-4">
                <div className="flex items-center mb-4">
                  <ChatBubbleLeftRightIcon className="h-6 w-6 text-cyan-400 mr-2" />
                  <h3 className="text-lg font-semibold text-cyan-200">Chat</h3>
                </div>
                <div className="h-96 overflow-y-auto mb-4 space-y-4">
                  {messages.map((message) => (
                    <div key={message.id} className="bg-[#232c43] p-3 rounded-xl">
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-semibold text-cyan-400">
                          {message.user}
                        </span>
                        <span className="text-xs text-gray-400">{message.timestamp}</span>
                      </div>
                      <p className="text-gray-300">{message.content}</p>
                    </div>
                  ))}
                </div>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 bg-[#232c43] rounded-xl px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  />
                  <button
                    onClick={handleSendMessage}
                    className="bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 text-white p-2 rounded-xl hover:from-blue-600 hover:via-cyan-600 hover:to-green-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20"
                  >
                    <ShareIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Shared Resources */}
            <div className="p-6 border-t border-gray-700">
              <div className="flex items-center mb-4">
                <DocumentTextIcon className="h-6 w-6 text-cyan-400 mr-2" />
                <h3 className="text-lg font-semibold text-cyan-200">Shared Resources</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="bg-[#1a2234] p-4 rounded-2xl flex items-center"
                  >
                    <DocumentTextIcon className="h-6 w-6 text-cyan-400 mr-3" />
                    <div>
                      <p className="text-sm font-medium text-cyan-200">Resource {item}</p>
                      <p className="text-xs text-gray-400">Shared by User {item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Room Details Modal */}
        {detailsRoom && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
            <div className="bg-[#232c43] rounded-2xl shadow-2xl p-8 w-full max-w-md relative">
              <button
                className="absolute top-3 right-3 p-2 rounded-full hover:bg-[#1a2234]"
                onClick={() => setDetailsRoom(null)}
              >
                <XMarkIcon className="h-5 w-5 text-gray-400" />
              </button>
              <h2 className="text-2xl font-bold mb-2 text-cyan-200">{detailsRoom.name}</h2>
              <div className="flex items-center mb-2">
                <UserGroupIcon className="h-5 w-5 text-cyan-400 mr-1" />
                <span className="text-sm text-gray-300">
                  {detailsRoom.participants}/{detailsRoom.maxParticipants} participants
                </span>
              </div>
              <p className="text-gray-300 mb-2 text-sm font-medium">Subject: {detailsRoom.subject}</p>
              {detailsRoom.description && (
                <p className="text-xs text-gray-400 mb-4">{detailsRoom.description}</p>
              )}
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(getStatus(detailsRoom))}`}>{getStatus(detailsRoom)}</span>
              <div className="mt-6 flex gap-2">
                <button
                  onClick={() => setDetailsRoom(null)}
                  className="flex-1 bg-[#1a2234] text-gray-300 py-2 rounded-xl hover:bg-[#232c43] transition-all duration-300 text-sm font-semibold"
                >
                  Close
                </button>
                <button
                  onClick={() => { setActiveRoom(detailsRoom); setDetailsRoom(null); }}
                  className="flex-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 text-white py-2 rounded-xl hover:from-blue-600 hover:via-cyan-600 hover:to-green-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20 text-sm font-semibold"
                  disabled={getStatus(detailsRoom) === 'Full'}
                >
                  Join Room
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VirtualStudyRoom; 