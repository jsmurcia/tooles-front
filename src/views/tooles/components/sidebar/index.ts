export * from "./Sidebar";
export const NAV_ITEMS = [
  {
    active: false,
    label: "Dashboard",
    icon: "fa-solid fa-border-all",
  },
  {
    active: false,
    label: "Vigilancia judicial",
    icon: "fa-solid fa-gavel",
  },
  {
    active: false,
    label: "Asistencia legal",
    icon: "fa-solid fa-headphones",
  },
  {
    active: false,
    label: "Tracking de procesos",
    icon: "fa-regular fa-bell",
  },
  {
    active: true,
    label: "Gestión de mi plan",
    icon: "fa-solid fa-bag-shopping",
  },
];

export interface SidebarProps {
  setToogle: React.Dispatch<React.SetStateAction<boolean>>;
  toogle: boolean;
}
