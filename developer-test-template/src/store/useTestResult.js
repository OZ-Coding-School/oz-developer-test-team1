import { create } from 'zustand';

export const useTestResult = create((set) => ({
  answers: [],

  addAnswer: (newAnswer) =>
    set((state) => ({ answers: [...state.answers, newAnswer] })),
  removeAnswer: () => set((state) => ({ answers: state.answers.slice(0, -1) })),
  resetAnswer: () => set({ answers: [] }),
}));
