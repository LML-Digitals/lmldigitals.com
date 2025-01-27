"use client";
import { Search } from "lucide-react";
import CustomContainer from "../../ui/custom/CustomContainer";
import { Card } from "../../ui/card";
import { Input } from "../../ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";
import { useState } from "react";
import { Customer } from "@prisma/client";
import EditCustomer from "./EditCustomer";
import AddCustomer from "./AddCustomer";
import UploadCustomers from "./UploadCustomers";
import DeleteCustomer from "./DeleteCustomer";
import { Button } from "../../ui/button";
import { useRouter } from "next/navigation";
import CustomerMailing from "@/components/dashboard/customers/CustomerMailing";
import Link from "next/link";

interface CustomersTableProps {
  customers: Customer[];
}
function CustomersTable({ customers }: CustomersTableProps) {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setSearch(inputValue);
  };

  const filteredCustomers = customers.filter((customer) => {
    return (
      search.toLowerCase() === "" ||
      customer.name.toLowerCase().includes(search)
    );
  });
  return (
    <CustomContainer>
      <h1 className="text-3xl px-2 mb-4">Customers</h1>
      <Card className="mb-4">
        <div className="flex justify-between items-center gap-5 px-3 py-6">
          <div className="flex items-center border border-primary-foreground px-3 rounded-md ">
            <Search />
            <Input
              placeholder="Search customers"
              className="lg:w-96 border-none focus-visible:outline-none "
              onChange={handleInputChange}
            />
          </div>
          <div className="flex items-center gap-3">
            <AddCustomer />
            <CustomerMailing />
            {/* <UpdateSettings /> */}
            <UploadCustomers />
            <Button onClick={() => router.back()}>Go Back</Button>
          </div>
        </div>
      </Card>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-72">Name</TableHead>
            <TableHead className="w-80">Email</TableHead>
            <TableHead className="w-80">Phone</TableHead>
            <TableHead className="w-80">Address</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredCustomers.map((customer) => (
            <TableRow key={customer.id}>
              <TableCell>
                <Link
                  href={`/dashboard/customers/${customer.id}`}
                  className="hover:underline hover:underline-offset-1"
                >
                  {customer.name}
                </Link>
              </TableCell>
              <TableCell>{customer.email}</TableCell>
              <TableCell>{customer.number}</TableCell>
              <TableCell>{customer.location}</TableCell>

              <TableCell>
                <EditCustomer
                  id={customer.id}
                  name={customer.name}
                  email={customer.email}
                  number={customer.number}
                  location={customer.location}
                />
              </TableCell>
              <TableCell>
                <DeleteCustomer customerId={customer.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </CustomContainer>
  );
}

export default CustomersTable;
