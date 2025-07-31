import sessionData from '../data/sessionData'; // Adjust path if needed

const API_URL = 'https://sip-1-uple.onrender.com/'; 

export const questions = {
  Q1: "Was the session engaging?",
  Q2: "Was the session helpful to your understanding?",
  Q3: "Any suggestions for improvement?",
  Q4: "Rate the session"
};

export const api = {
  /**
   * Fetches all feedback from the MongoDB server.
   * @returns {Promise<Array>} A promise that resolves to an array of feedback objects.
   */
  getFeedback: async () => {
    try {
      const response = await fetch(`${API_URL}/api/feedback`);
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Failed to fetch feedback:", error);
      return [];
    }
  },

  /**
   * Submits a new feedback entry to the MongoDB server.
   * @param {object} feedback - The feedback object to submit.
   * @returns {Promise<object>} A promise that resolves to the server's response.
   */
  submitFeedback: async (feedback) => {
    try {
      const response = await fetch(`${API_URL}/api/feedback`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(feedback),
      });
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Failed to submit feedback:", error);
      return { status: 'error', message: error.toString() };
    }
  },

  // Admin and user login logic
  login: (password) => {
    if (password === 'admin123') {
      localStorage.setItem('isAdmin', 'true');
      return true;
    }
    return false;
  },

  logout: () => {
    localStorage.removeItem('isAdmin');
  },

  studentLogout: () => {
    localStorage.removeItem('user');
  },

  isAdmin: () => {
    return localStorage.getItem('isAdmin') === 'true';
  },

  getSessionData: (dept, day) => {
    return sessionData[dept]?.[day] || [];
  }
};
