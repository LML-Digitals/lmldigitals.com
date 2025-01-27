"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { updateStaff } from "./services/staffCrud";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Pencil } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/common/top-dialog/TopDialog";
import bcrypt from "bcryptjs";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const schema = z.object({
  name: z.string().min(1, "Staff name is required"),
  number: z.string().min(1, "Mobile number is required"),
  email: z.string().min(1, "Staff email is required").email("Invalid email"),
  location: z.string().min(1, "Staff location is required"),
  title: z.string().min(1, "Staff title is required"),
  role: z.string().min(1, "Staff role is required"),
});

type FormData = z.infer<typeof schema>;

interface EditStaffProps {
  id: number;
  name: string;
  number: string;
  email: string;
  location: string;
  role: string;
  title: string;
}

const EditStaff = ({
  id,
  name,
  number,
  email,
  role,
  location,
  title,
}: EditStaffProps) => {
  const [loading, setLoading] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const { toast } = useToast();
  const router = useRouter();
  const methods = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name,
      number,
      email,
      location,
      role,
      title,
    },
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = methods;

  const onSubmit = async (formData: FormData) => {
    setLoading(true);
    try {
      await updateStaff(id, {
        name: formData.name,
        number: formData.number,
        email: formData.email,
        location: formData.location,
        role: formData.role,
        jobTitle: formData.title,
      });

      setDialogOpen(false);
      router.refresh();
    } catch (error) {
      toast({
        title: "Error",
        description: "Email already exists. Try again with a different email.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild>
        <Pencil size={20} className="text-blue-500 cursor-pointer" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit {name}</DialogTitle>
        </DialogHeader>

        <Form {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
            <FormField
              control={control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Staff Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Staff Name" {...field} />
                  </FormControl>
                  {errors.name && (
                    <p className="text-red-600">{errors.name.message}</p>
                  )}
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Title" {...field} />
                  </FormControl>
                  {errors.title && (
                    <p className="text-red-600">{errors.title.message}</p>
                  )}
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Email" {...field} />
                  </FormControl>
                  {errors.email && (
                    <p className="text-red-600">{errors.email.message}</p>
                  )}
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mobile Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Mobile Number" {...field} />
                  </FormControl>
                  {errors.number && (
                    <p className="text-red-600">{errors.number.message}</p>
                  )}
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Locations:</SelectLabel>
                          <SelectItem value="seattle">Seattle</SelectItem>
                          <SelectItem value="west-seattle">
                            West Seattle
                          </SelectItem>
                          <SelectItem value="north-seattle">
                            North Seattle
                          </SelectItem>
                          <SelectItem value="hargeisa">Hargeisa</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  {errors.location && (
                    <p className="text-red-600">{errors.location.message}</p>
                  )}
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Role</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Roles:</SelectLabel>
                          <SelectItem value="admin">Admin</SelectItem>
                          <SelectItem value="technician">Technician</SelectItem>
                          <SelectItem value="reception">Reception</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  {errors.role && (
                    <p className="text-red-600">{errors.role.message}</p>
                  )}
                </FormItem>
              )}
            />

            <DialogFooter>
              <Button type="submit" disabled={loading} variant="default">
                {loading ? "Loading..." : "Save"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default EditStaff;
