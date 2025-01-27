"use client";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import CustomerTabs from "./CustomerTabs";

type CustomerTableProps = {
  userDiscount: any;
};

const tabs = ["Summary", "Payments", "Discounts", "Effects"];

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

function CustomerTable({ userDiscount }: CustomerTableProps) {
  const [selected, setSelected] = useState<string>(tabs[0]);

  return (
    <div className="flex flex-col gap-2 mt-16">
      <CustomerTabs selected={selected} setSelected={setSelected} />

      {selected === "Discounts" ? (
        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User ID</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Discount Value</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {userDiscount.map((discount: any) => (
                <TableRow key={discount.discount_id}>
                  <TableCell className="font-medium">
                    {discount.user_id}
                  </TableCell>
                  <TableCell>{discount.description}</TableCell>
                  <TableCell>${discount.discount_value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={2}>Total Discount</TableCell>
                <TableCell className="text-right">
                  $
                  {userDiscount.reduce(
                    (total: number, discount: any) =>
                      total + discount.discount_value,
                    0
                  )}
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </Card>
      ) : (
        "jk"
      )}
    </div>
  );
}

export default CustomerTable;
