import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

// Define user roles and their permissions
const ROLES = {
  ADMIN: 'admin',
  EDITOR: 'editor',
  AUTHOR: 'author',
  VIEWER: 'viewer'
};

const PERMISSIONS = {
  [ROLES.ADMIN]: ['create', 'read', 'update', 'delete', 'manage_users', 'manage_roles'],
  [ROLES.EDITOR]: ['create', 'read', 'update', 'delete', 'publish'],
  [ROLES.AUTHOR]: ['create', 'read', 'update_own', 'delete_own'],
  [ROLES.VIEWER]: ['read']
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  const hasPermission = (permission) => {
    if (!user || !user.role) return false;
    return PERMISSIONS[user.role].includes(permission);
  };

  const value = {
    user,
    login,
    logout,
    hasPermission,
    ROLES,
    PERMISSIONS
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

// Example user data structure
/*
{
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
  role: ROLES.EDITOR,
  avatar: 'https://example.com/avatar.jpg'
}
*/ 