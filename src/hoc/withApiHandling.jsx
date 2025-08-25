import React from 'react';

/**
 * Higher-Order Component that provides consistent API handling to wrapped components
 * @param {React.Component} WrappedComponent - Component to wrap
 * @param {Object} options - Configuration options
 */
export const withApiHandling = (WrappedComponent, options = {}) => {
  const {
    showLoadingSpinner = true,
    showErrorBoundary = true,
    defaultErrorMessage = 'Something went wrong'
  } = options;

  return function WithApiHandlingComponent(props) {
    const [apiState, setApiState] = React.useState({
      isLoading: false,
      error: null,
      data: null
    });

    const handleApiCall = React.useCallback(async (apiFunction, ...args) => {
      try {
        setApiState(prev => ({ ...prev, isLoading: true, error: null }));
        
        const result = await apiFunction(...args);
        
        setApiState(prev => ({ 
          ...prev, 
          isLoading: false, 
          data: result 
        }));
        
        return result;
      } catch (error) {
        setApiState(prev => ({ 
          ...prev, 
          isLoading: false, 
          error: error.message || defaultErrorMessage 
        }));
        throw error;
      }
    }, []);

    const resetApiState = React.useCallback(() => {
      setApiState({ isLoading: false, error: null, data: null });
    }, []);

    // Show loading spinner if enabled
    if (showLoadingSpinner && apiState.isLoading) {
      return (
        <div className="api-loading-container">
          <div className="spinner">Loading...</div>
        </div>
      );
    }

    // Show error boundary if enabled
    if (showErrorBoundary && apiState.error) {
      return (
        <div className="api-error-container">
          <h3>Error</h3>
          <p>{apiState.error}</p>
          <button onClick={resetApiState}>Try Again</button>
        </div>
      );
    }

    return (
      <WrappedComponent
        {...props}
        apiState={apiState}
        handleApiCall={handleApiCall}
        resetApiState={resetApiState}
      />
    );
  };
};