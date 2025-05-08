import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface SidebarState {
  isOpen: boolean;
  toggleSidebar: () => void;
  closeSidebar: () => void;
}

const useSidebarStore = create<SidebarState>()(
  persist(
    (set) => ({
      isOpen: false,
      toggleSidebar: () => set((state) => ({ isOpen: !state.isOpen })),
      closeSidebar: () => set({ isOpen: false }),
    }),
    {
      name: 'sidebar-storage', // local storage key
    },
  ),
);

export default useSidebarStore;
