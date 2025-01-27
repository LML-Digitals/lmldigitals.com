"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Staff } from "@prisma/client";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import CustomContainer from "@/components/ui/custom/CustomContainer";
import AddUser from "./AddUser";
import DeleteStaff from "./DeleteStaff";
import EditStaff from "./EditStaff";

interface StaffTableProps {
  staffs: Staff[];
}

function StaffTable({ staffs }: StaffTableProps) {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setSearch(inputValue);
  };

  const filteredStaffs = staffs.filter((staff) => {
    return (
      search.toLowerCase() === "" || staff.name.toLowerCase().includes(search)
    );
  });
  return (
    <CustomContainer>
      <h1 className="text-3xl px-2 mb-4">Staff</h1>
      <Card className="mb-4">
        <div className="flex justify-between items-center gap-5 px-3 py-6">
          <div className="flex items-center border border-primary-foreground px-3 rounded-md ">
            <Search />
            <Input
              placeholder="Search staff..."
              className="w-96 border-none focus-visible:outline-none "
              onChange={handleInputChange}
            />
          </div>

          <div className="flex items-center gap-3">
            <AddUser />
            <Button onClick={() => router.back()}>Go Back</Button>
          </div>
        </div>
      </Card>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Mobile #</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredStaffs.map((staff) => (
            <TableRow key={staff.id}>
              <TableCell>{staff.name}</TableCell>
              <TableCell>{staff.number}</TableCell>
              <TableCell>{staff.email}</TableCell>
              <TableCell>{staff.location}</TableCell>
              <TableCell>
                <Badge variant={"secondary"}>{staff.jobTitle}</Badge>
              </TableCell>
              <TableCell>{staff.role}</TableCell>
              <TableCell>
                <div className="flex items-center gap-3">
                  <EditStaff
                    id={staff.id}
                    name={staff.name}
                    number={staff.number}
                    email={staff.email}
                    location={staff.location}
                    role={staff.role}
                    title={staff.jobTitle}
                  />
                  <DeleteStaff id={staff.id} />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </CustomContainer>
  );
}
export default StaffTable;
