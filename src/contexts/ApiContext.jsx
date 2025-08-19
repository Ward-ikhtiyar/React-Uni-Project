import React, { createContext, useContext, useCallback, useState } from 'react';

const ApiContext = createContext();

export const useApi = () => {
  const context = useContext(ApiContext);
  if (!context) {
    throw new Error('useApi must be used within an ApiProvider');
  }
  return context;
};

export const ApiProvider = ({ children }) => {
  const [globalLoading, setGlobalLoading] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const showNotification = useCallback((message, type = 'info') => {
    const id = Date.now();
    setNotifications(prev => [...prev, { id, message, type }]);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, 5000);
  }, []);

  const handleApiCall = useCallback(async (
    apiFunction, 
    options = {}
  ) => {
    const {
      showGlobalLoading = false,
      successMessage,
      errorMessage = 'An error occurred',
      onSuccess,
      onError,
      ...args
    } = options;

    try {
      if (showGlobalLoading) setGlobalLoading(true);

      const result = await apiFunction(...args);

      if (successMessage) {
        showNotification(successMessage, 'success');
      }

      onSuccess?.(result);
      return result;

    } catch (error) {
      const message = error.message || errorMessage;
      showNotification(message, 'error');
      onError?.(error);
      throw error;

    } finally {
      if (showGlobalLoading) setGlobalLoading(false);
    }
  }, [showNotification]);

  const value = {
    globalLoading,
    notifications,
    handleApiCall,
    showNotification
  };

  return (
    <ApiContext.Provider value={value}>
      {children}
      
      {/* Global Loading Overlay */}
      {globalLoading && (
        <div className="global-loading-overlay">
          <div className="spinner">Loading...</div>
        </div>
      )}
      
      {/* Notification Toast Container */}
      <div className="notification-container">
        {notifications.map(notification => (
          <div 
            key={notification.id} 
            className={`notification notification-${notification.type}`}
          >
            {notification.message}
          </div>
        ))}
      </div>
    </ApiContext.Provider>
  );
};