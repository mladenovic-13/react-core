import { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    redirect: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error("Error Boundary caught an error", error, info);
    setTimeout(() => this.setState({ redirect: true }), 5000);
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    } else if (this.state.hasError) {
      <h2>
        This listing has an error. <Link to="/">Click here</Link> to go back to
        the home page or wait five seconds.
      </h2>;
    }
    // Render children if we dont have an error
    // Same as do nothing
    return this.props.children;
  }
}

export default ErrorBoundary;
