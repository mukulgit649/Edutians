import React, { createContext, useContext, useState, useEffect } from 'react';

interface CourseProgress {
  courseId: string;
  completedModules: string[];
  quizScores: { [quizId: string]: number };
  lastAccessed: Date;
}

interface UserPreferences {
  darkMode: boolean;
  notifications: boolean;
  language: string;
}

interface User {
  id: string;
  name: string;
  email: string;
  enrolledCourses: string[];
  courseProgress: { [courseId: string]: CourseProgress };
  studyGroups: string[];
  completedQuizzes: string[];
  achievements: string[];
  preferences: UserPreferences;
}

interface UserContextType {
  user: User | null;
  loading: boolean;
  error: string | null;
  updateUserProgress: (courseId: string, moduleId: string) => void;
  updateQuizScore: (courseId: string, quizId: string, score: number) => void;
  updatePreferences: (preferences: Partial<UserPreferences>) => void;
  joinStudyGroup: (groupId: string) => void;
  leaveStudyGroup: (groupId: string) => void;
  addAchievement: (achievementId: string) => void;
  updateUser: (user: User) => void;
  logout: () => void;
}

const defaultPreferences: UserPreferences = {
  darkMode: false,
  notifications: true,
  language: 'en'
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Load user data from localStorage or API
    const loadUserData = async () => {
      try {
        const savedUser = localStorage.getItem('user');
        if (savedUser) {
          setUser(JSON.parse(savedUser));
        }
      } catch (err) {
        setError('Failed to load user data');
      } finally {
        setLoading(false);
      }
    };

    loadUserData();
  }, []);

  const updateUser = (newUser: User) => {
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
  };

  const updateUserProgress = (courseId: string, moduleId: string) => {
    if (!user) return;

    setUser((prevUser) => {
      if (!prevUser) return null;

      const updatedProgress = {
        ...prevUser.courseProgress,
        [courseId]: {
          ...prevUser.courseProgress[courseId],
          completedModules: [
            ...(prevUser.courseProgress[courseId]?.completedModules || []),
            moduleId
          ],
          lastAccessed: new Date()
        }
      };

      const updatedUser = {
        ...prevUser,
        courseProgress: updatedProgress
      };

      localStorage.setItem('user', JSON.stringify(updatedUser));
      return updatedUser;
    });
  };

  const updateQuizScore = (courseId: string, quizId: string, score: number) => {
    if (!user) return;

    setUser((prevUser) => {
      if (!prevUser) return null;

      const updatedProgress = {
        ...prevUser.courseProgress,
        [courseId]: {
          ...prevUser.courseProgress[courseId],
          quizScores: {
            ...prevUser.courseProgress[courseId]?.quizScores,
            [quizId]: score
          },
          lastAccessed: new Date()
        }
      };

      const updatedUser = {
        ...prevUser,
        courseProgress: updatedProgress,
        completedQuizzes: [...prevUser.completedQuizzes, quizId]
      };

      localStorage.setItem('user', JSON.stringify(updatedUser));
      return updatedUser;
    });
  };

  const updatePreferences = (newPreferences: Partial<UserPreferences>) => {
    if (user) {
      const updatedUser = {
        ...user,
        preferences: {
          ...user.preferences,
          ...newPreferences
        }
      };
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));

      // Apply dark mode to document
      if (newPreferences.darkMode !== undefined) {
        document.documentElement.classList.toggle('dark', newPreferences.darkMode);
      }
    }
  };

  const joinStudyGroup = (groupId: string) => {
    if (!user) return;

    setUser((prevUser) => {
      if (!prevUser) return null;

      const updatedUser = {
        ...prevUser,
        studyGroups: [...prevUser.studyGroups, groupId]
      };

      localStorage.setItem('user', JSON.stringify(updatedUser));
      return updatedUser;
    });
  };

  const leaveStudyGroup = (groupId: string) => {
    if (!user) return;

    setUser((prevUser) => {
      if (!prevUser) return null;

      const updatedUser = {
        ...prevUser,
        studyGroups: prevUser.studyGroups.filter(id => id !== groupId)
      };

      localStorage.setItem('user', JSON.stringify(updatedUser));
      return updatedUser;
    });
  };

  const addAchievement = (achievementId: string) => {
    if (!user) return;

    setUser((prevUser) => {
      if (!prevUser) return null;

      const updatedUser = {
        ...prevUser,
        achievements: [...prevUser.achievements, achievementId]
      };

      localStorage.setItem('user', JSON.stringify(updatedUser));
      return updatedUser;
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const value = {
    user,
    loading,
    error,
    updateUserProgress,
    updateQuizScore,
    updatePreferences,
    joinStudyGroup,
    leaveStudyGroup,
    addAchievement,
    updateUser,
    logout
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}; 