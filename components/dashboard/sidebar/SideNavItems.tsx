import { SideNavItemGroup } from "@/types/type";
import { DashboardIcon } from "@radix-ui/react-icons";
import {
  ArrowDownWideNarrow,
  ArrowLeftRight,
  Blocks,
  Boxes,
  DollarSign,
  Goal,
  LucideAirplay,
  LucideReceiptPoundSterling,
  Mails,
  NotebookPen,
  PartyPopper,
  PhoneCall,
  ReceiptPoundSterling,
  ShoppingCart,
  TrendingUp,
  Wrench,
  History,
  ScrollIcon,
  Calculator,
  Package,
  Calendar,
} from "lucide-react";

export const SIDENAV_ITEMS: SideNavItemGroup[] = [
  {
    title: "Manage",
    menuList: [
      {
        title: "Dashboard",
        path: "/dashboard",
        role: ["all"],

        icon: <DashboardIcon />,
      },
      {
        title: "Bookings",
        path: "#",
        role: ["all"],
        icon: <Calendar size={16} />,
      },
      {
        title: "Mail-In",
        path: "#",
        role: ["all"],
        icon: <Package size={16} />,
      },
      {
        title: "Products",
        path: "#",
        role: ["admin"],

        icon: <ShoppingCart size={16} />,
      },
      {
        title: "Repairs",
        path: "#",
        role: ["admin"],

        icon: <Wrench size={16} />,
      },

      {
        title: "Services",
        path: "#",
        role: ["admin"],

        icon: <Blocks size={16} />,
      },

      {
        title: "Inventory",
        path: "#",
        role: ["admin"],

        icon: <Boxes size={16} />,
      },

      {
        title: "Announcement",
        path: "#",
        role: ["all"],

        icon: <PartyPopper size={16} />,
      },
      // {
      //   title: 'Blogs',
      //   path: '/dashboard/blog',
      //   role: ['all'],

      //   icon: <NotebookPen size={16} />,
      // },
      {
        title: "Campaign",
        path: "#",
        icon: <Mails size={16} />,
        role: ["all"],
      },

      {
        title: "Calculator",
        path: "#",
        role: ["all"],

        icon: <Calculator size={16} />,
      },
    ],
  },

  {
    title: "Customers",
    menuList: [
      {
        title: "Directory",
        path: "/dashboard/customers",
        role: ["all"],

        icon: <DollarSign size={16} />,
      },
      {
        title: "Tickets",
        path: "#",
        role: ["all"],

        icon: <TrendingUp size={16} />,
      },
    ],
  },

  {
    title: "Staff",
    menuList: [
      {
        title: "Directory",
        path: "/dashboard/staff",
        role: ["admin"],

        icon: <DollarSign size={16} />,
      },
    ],
  },

  {
    title: "POS",
    menuList: [
      {
        title: "Sales",
        path: "#",
        role: ["all"],

        icon: <TrendingUp size={16} />,
      },
    ],
  },

  {
    title: "Accounting",
    menuList: [
      {
        title: "Transactions",
        path: "#",
        role: ["admin"],

        icon: <ArrowLeftRight size={16} />,
      },
      {
        title: "Goals",
        path: "#",
        role: ["admin"],

        icon: <Goal size={16} />,
      },
      {
        title: "Incomes",
        path: "#",
        role: ["admin"],

        icon: <ArrowDownWideNarrow size={16} />,
      },
      {
        title: "Fixed Bills",
        path: "#",
        role: ["admin"],

        icon: <LucideReceiptPoundSterling size={16} />,
      },
      {
        title: "Loans",
        path: "#",
        role: ["admin"],

        icon: <LucideReceiptPoundSterling size={16} />,
      },
      // {
      //   title: 'Profit',
      //   path: '/dashboard/profit',
      //   role: ['admin'],

      //   icon: <ArrowDownWideNarrow size={16} />,
      // },
    ],
  },
  {
    title: "Call Center",
    menuList: [
      {
        title: "Scripts",
        path: "#",
        role: ["all"],

        icon: <ScrollIcon size={16} />,
      },
      {
        title: "Logs",
        path: "#",
        role: ["all"],

        icon: <History size={16} />,
      },
    ],
  },
];
