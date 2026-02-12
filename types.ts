
// Fix: Import React to resolve 'Cannot find namespace React' error
import React from 'react';

export interface Project {
  id: number;
  title: string;
  category: 'Wall' | 'Floor' | 'Full Project';
  imageUrl: string;
}

export interface Feature {
  title: string;
  description: string;
  // Fix: Using React.ReactNode requires the React namespace to be imported
  icon: React.ReactNode;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  // Fix: Using React.ReactNode requires the React namespace to be imported
  icon: React.ReactNode;
}
