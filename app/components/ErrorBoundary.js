'use client';

import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
    this.hasRefreshed = false;
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('ErrorBoundary caught:', error, info);
  }

  render() {
    if (this.state.hasError && typeof window !== 'undefined') {
      // Only reload once to avoid infinite loop
      if (!this.hasRefreshed && process.env.NODE_ENV === 'production') {
        this.hasRefreshed = true;
        window.location.reload();
        return null;
      }

      return <h4>Something went wrong. Please try again.</h4>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
