"use client";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/common/top-dialog/TopDialog";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
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
import { createCustomer, getReferral } from "./services/customerCrud";
import { zodResolver } from "@hookform/resolvers/zod";
import { Customer } from "@prisma/client";
import { Loader, UserPlus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { useToast } from "../../ui/use-toast";

const schema = z.object({
  name: z.string().min(1, "Customer name is required"),
  email: z
    .string()
    .email("Invalid email address")
    .min(1, "Customer email is required"),
  number: z.string().min(1, "Customer number is required"),
  location: z.string().min(1, "Location is required"),
  address: z.string().nullable().default(""),
  city: z.string().nullable().default(""),
  state: z.string().nullable().default(""),
  zip: z.string().nullable().default(""),
});

type FormData = z.infer<typeof schema>;

const AddCustomer = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [code, setCode] = useState("");
  const [userLoading, setUserLoading] = useState(false);
  const [referrer, setReferrer] = useState<Customer | null>(null);

  const { toast } = useToast();

  async function findCustomer() {
    try {
      if (!code) {
        toast({
          variant: "destructive",
          title: "Insert a code",
          description: "Please try again with a valid code.",
        });
        return;
      }
      setUserLoading(true);

      const referrer = await getReferral(code);
      if (!referrer) {
        toast({
          variant: "destructive",
          title: "Referrer not found",
          description: "Please try again with a valid code.",
        });
        setCode("");
        setUserLoading(false);
        return;
      }

      setCode(referrer.referralCode);
      setReferrer(referrer);
      setUserLoading(false);
    } catch (error) {
      setUserLoading(false);
      toast({
        variant: "destructive",
        title: "Error",
        description: "An error occurred. Please try again.",
      });
    }
  }

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      number: "",
      location: "",
      address: "",
      city: "",
      state: "",
      zip: "",
    },
  });

  async function onSubmit(formData: FormData) {
    try {
      setLoading(true);

      await createCustomer({
        name: formData.name,
        email: formData.email,
        number: formData.number,
        location: formData.location,
        address: formData.address || null,
        city: formData.city || null,
        state: formData.state || null,
        zip: formData.zip || null,
        referredBy: referrer?.id || null,
        referralCode: "",
        pendingDiscount: 0,
      });

      setLoading(false);
      setReferrer(null);
      setDialogOpen(false);
      router.refresh();
      toast({
        title: "Customer added successfully",
        description: "The new customer has been added to the system.",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error adding customer",
        description:
          "An error occurred while adding the customer. Please try again.",
      });
      setLoading(false);
    }
  }

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <UserPlus className="transform cursor-pointer text-emerald-500 transition-transform hover:scale-110" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] h-[700px] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add Customer</DialogTitle>
        </DialogHeader>

        <div className="mb-4 flex gap-4 items-center">
          <Label htmlFor="code" className="w-1/3 text-right text-gray-700">
            Referral Code
          </Label>
          <div className="flex">
            <Input
              id="code"
              onChange={(e) => setCode(e.target.value.replace(" ", ""))}
              placeholder="Enter code"
              type="text"
              value={code}
            />
          </div>
          <Button
            disabled={userLoading}
            className="rounded bg-sky-500 px-4 py-2 text-white hover:bg-sky-600"
            onClick={findCustomer}
          >
            {userLoading ? <Loader className="animate-spin" /> : "Find"}
          </Button>
        </div>
        {referrer && (
          <div className="mb-4">
            <p className="text-gray-700">
              Referrer found: <strong>{referrer.name}</strong>
            </p>
          </div>
        )}

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
                  <FormLabel>Customer Name</FormLabel>
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

export default AddCustomer;
