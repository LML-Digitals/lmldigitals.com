"use client";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/common/top-dialog/TopDialog";
import { Button } from "@/components/ui/button";
import { Input } from "../../ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { useRouter } from "next/navigation";
import { Pencil } from "lucide-react";
import { useToast } from "../../ui/use-toast";
import { updateCustomer } from "./services/customerCrud";
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
  name: z.string().min(1, "Customer name is required"),
  email: z.string().min(1, "Customer email is required"),
  number: z.string().min(1, "Customer phone is required"),
  location: z.string().min(1, "Location is required"),
  address: z.string().nullable().default(""),
  city: z.string().nullable().default(""),
  state: z.string().nullable().default(""),
  zip: z.string().nullable().default(""),
});

type FormData = z.infer<typeof schema>;

interface EditCustomerProps {
  id: number;
  name: string;
  email: string;
  number: string;
  location: string;
  address?: string | null;
  city?: string | null;
  state?: string | null;
  zip?: string | null;
}

const EditCustomer = ({
  id,
  name,
  email,
  number,
  location,
  address,
  city,
  state,
  zip,
}: EditCustomerProps) => {
  const [loading, setLoading] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name,
      email,
      number,
      location,
      address: address ?? "",
      city: city ?? "",
      state: state ?? "",
      zip: zip ?? "",
    },
  });

  async function onSubmit(formData: FormData) {
    try {
      setLoading(true);

      await updateCustomer(id, {
        name: formData.name,
        number: formData.number,
        email: formData.email,
        location: formData.location,
        address: formData.address || null,
        city: formData.city || null,
        state: formData.state || null,
        zip: formData.zip || null,
      });

      setLoading(false);
      setDialogOpen(false);
      router.refresh();

      toast({
        title: "Success",
        description: "Customer information updated successfully.",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error updating customer",
        description:
          "An error occurred while updating the customer information.",
      });
      setLoading(false);
    }
  }

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild>
        <Button variant="default">
          <Pencil className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] h-[700px] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Edit {name}</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid gap-4 py-4"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mobile #</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
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
                        <SelectValue placeholder="Select Location .." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Location:</SelectLabel>
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
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="address"
              render={({ field: { value, onChange, ...field } }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input {...field} value={value ?? ""} onChange={onChange} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="city"
              render={({ field: { value, onChange, ...field } }) => (
                <FormItem>
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input {...field} value={value ?? ""} onChange={onChange} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="state"
              render={({ field: { value, onChange, ...field } }) => (
                <FormItem>
                  <FormLabel>State</FormLabel>
                  <FormControl>
                    <Input {...field} value={value ?? ""} onChange={onChange} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="zip"
              render={({ field: { value, onChange, ...field } }) => (
                <FormItem>
                  <FormLabel>ZIP Code</FormLabel>
                  <FormControl>
                    <Input {...field} value={value ?? ""} onChange={onChange} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <Button type="submit" disabled={loading} variant="default">
                {loading ? "Loading" : "Save"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default EditCustomer;
