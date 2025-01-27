"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/common/top-dialog/TopDialog";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { getCustomers, getCustomersByLocation } from "./services/customerCrud";
import { useToast } from "@/components/ui/use-toast";

const schema = z.object({
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "message is required"),
  location: z.string().min(1, "Location value is required"),
});

type FormData = z.infer<typeof schema>;

const CustomerMailing = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const methods = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = methods;

  async function onSubmit(formData: FormData) {
    let customers: any[] = [];
    try {
      setLoading(true);
      if ((formData.location = "all")) {
        customers = await getCustomers();
      } else {
        customers = await getCustomersByLocation(formData.location);
      }
      const emailList = customers.map((customer) => customer.email);

      if (customers.length === 0) {
        toast({
          variant: "default",
          title: `No customer found in ${formData.location}`,
          className: "bg-yellow-500",
          description: "Try a different location.",
        });
        setLoading(false);
        return;
      }

      const response = await fetch("/api/send-emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          emails: emailList,
          subject: formData.subject,
          body: formData.message,
        }),
      });

      if (!response.ok) {
        console.error(
          "Server response error:",
          response.status,
          await response.text()
        );
        throw errors;
      }

      toast({
        variant: "default",
        title: `Emails sent for ${formData.location}!`,
        className: "bg-green-500",
        description: "Emails sent :)",
      });
      setLoading(false);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Failed to send emails",
        description:
          "An error occurred while deleting the post. Please try again.",
      });
      console.error("An error occurred:", error);
      setLoading(false);
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Mail />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <Form {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
            <FormField
              control={control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="subject" className="text-right">
                    Subject
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  {errors.subject && (
                    <p className="text-red-600">{errors.subject.message}</p>
                  )}
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="message" className="text-right">
                    Message
                  </FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  {errors.message && (
                    <p className="text-red-600">{errors.message.message}</p>
                  )}
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="location" className="text-right">
                    Location
                  </FormLabel>
                  <FormControl>
                    <Select
                      {...field}
                      onValueChange={field.onChange}
                      value={field.value}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Location:</SelectLabel>
                          <SelectItem value="all">All</SelectItem>

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

export default CustomerMailing;
