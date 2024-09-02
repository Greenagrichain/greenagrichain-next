import {
  IconCashRegister,
  IconBusinessplan,
  IconClockCheck,
  IconUserScan,
  IconLogout2,
  IconSettings,
  IconClockDollar,
  IconPointerCheck,
  IconActivity,
  IconChecklist,
  IconCircleArrowUpRight,
  IconCircleArrowDownLeft,
  IconHome,
  IconUser,
  IconShieldCheck,
  IconFileInvoice,
} from "@tabler/icons-react";

const navlinks = [
  { name: "Dashboard", href: "/dashboard", icon: <IconHome /> },
  { name: "Plans", href: "/dashboard/plans", icon: <IconChecklist /> },
  {
    name: "Transactions",
    href: "/dashboard/transactions",
    icon: <IconCashRegister />,
    // exact: true,
    children: [
      {
        name: "Deposit",
        href: "/dashboard/transactions/deposit",
        icon: <IconCircleArrowUpRight />,
      },
      {
        name: "Investments",
        href: "/dashboard/transactions/investments",
        icon: <IconBusinessplan />,
      },
      {
        name: "Withdrawal",
        href: "/dashboard/transactions/withdrawal",
        icon: <IconCircleArrowDownLeft />,
      },
    ],
  },
  {
    name: "Activities",
    href: "/dashboard/activities",
    icon: <IconActivity />,
    children: [
      {
        name: "All History",
        href: "/dashboard/activities/all-history",
        icon: <IconClockCheck />,
      },
      {
        name: "Withdrawal History",
        href: "/dashboard/activities/withdrawal-history",
        icon: <IconClockDollar />,
      },
    ],
  },
  {
    name: "Account",
    href: "/dashboard/account",
    icon: <IconUser />,
    children: [
      {
        name: "Profile",
        href: "/dashboard/account/profile",
        icon: <IconUserScan />,
      },
      {
        name: "Identity / KYC",
        href: "/dashboard/account/kyc",
        icon: <IconShieldCheck />,
      },
    ],
  },
  {
    name: "Referrals",
    href: "/dashboard/referrals",
    icon: <IconPointerCheck />,
  },
  {
    name: "Statement",
    href: "/dashboard/statement",
    icon: <IconFileInvoice />,
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
    icon: <IconSettings />,
    end: true,
  },
  {
    name: "Log out",
    href: "/logout",
    icon: <IconLogout2 />,
    end: true,
  },
];

export default navlinks;
