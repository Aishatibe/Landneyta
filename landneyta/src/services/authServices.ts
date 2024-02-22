import axios from "axios";

interface User {
  id: string;
  username: string;
  email: string;
  // Add other user-related fields as needed
}

interface AuthResponse {
  token: string;
  user: User;
}

export const authService = {
  async register(
    username: string,
    email: string,
    password: string
  ): Promise<User> {
    const response = await axios.post<AuthResponse>("/api/register", {
      username,
      email,
      password,
    });
    return response.data.user;
  },

  async login(usernameOrEmail: string, password: string): Promise<User> {
    const response = await axios.post<AuthResponse>("/api/login", {
      usernameOrEmail,
      password,
    });
    return response.data.user;
  },

  async logout(): Promise<void> {
    // Implement logout logic (e.g., clearing authentication token)
  },

  async getCurrentUser(): Promise<User | null> {
    try {
      const response = await axios.get<User>("/api/user");
      return response.data;
    } catch (error) {
      // If user is not authenticated or token is expired, return null
      return null;
    }
  },
};
