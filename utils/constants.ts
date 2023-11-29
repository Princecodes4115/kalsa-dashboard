import { ReactNode, ComponentType } from "react";
import { MdAccountBalanceWallet } from "react-icons/md";
import { GrTransaction, GrAnnounce } from "react-icons/gr";
import { TbBrandGoogleAnalytics, TbExchange } from "react-icons/tb";
import { LuShoppingCart } from "react-icons/lu";
import { FaLink } from "react-icons/fa6";

export const links = [
  {
    title: "Main Pages",
    links: [
      { name: "Balance", icon: MdAccountBalanceWallet, link: "/" },
      { name: "Transactions", icon: GrTransaction, link: "/transactions" },
      { name: "Analytics", icon: TbBrandGoogleAnalytics, link: "/analytics" },
      { name: "Marketing", icon: GrAnnounce, link: "/marketing" },
      { name: "Exchange Rate", icon: TbExchange, link: "/exchange-rate" },
    ],
  },
  {
    title: "Accept Payments",
    links: [
      { name: "Checkout", icon: LuShoppingCart, link: "/checkout" },
      { name: "Payment Link", icon: FaLink, link: "/payment-link" },
    ],
  },
  {
    title: "Send Payments",
    links: [
      {
        name: "Wire",
        icon: GrTransaction,
        link: "/wire",
      },
    ],
  },
];
export const profileTabs: any[] = [];

export const SparklineAreaData = [
  { x: 1, yval: 2 },
  { x: 2, yval: 6 },
  { x: 3, yval: 8 },
  { x: 4, yval: 5 },
  { x: 5, yval: 10 },
];

export const tableData = [
  {
    id: 1,
    transactionId: "TRX123",
    source: "Web",
    customerName: "John Doe",
    customerEmail: "john@example.com",
    amount: "$100",
    requestDate: "2023-01-15",
    status: "Completed",
  },
  {
    id: 1,
    transactionId: "TRX123",
    source: "Web",
    customerName: "John Doe",
    customerEmail: "john@example.com",
    amount: "$100",
    requestDate: "2023-01-15",
    status: "Completed",
  },
  {
    id: 1,
    transactionId: "TRX123",
    source: "Web",
    customerName: "John Doe",
    customerEmail: "john@example.com",
    amount: "$100",
    requestDate: "2023-01-15",
    status: "Completed",
  },
];

export const columns = [
  {
    name: "Transaction ID",
    selector: "transactionId",
    sortable: true,
  },
  {
    name: "Source",
    selector: "source",
    sortable: true,
  },
  {
    name: "Customer Name",
    selector: "customerName",
    sortable: true,
  },
  {
    name: "Customer Email",
    selector: "customerEmail",
    sortable: true,
  },
  {
    name: "Amount",
    selector: "amount",
    sortable: true,
  },
  {
    name: "Request Date",
    selector: "requestDate",
    sortable: true,
  },
  {
    name: "Status",
    selector: "status",
    sortable: true,
  },
];
