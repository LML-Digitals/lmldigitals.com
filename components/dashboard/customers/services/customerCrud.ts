"use server";
import { v4 as uuidv4 } from "uuid";
import prisma from "@/lib/prisma";
import { Customer } from "@prisma/client";

export const getCustomers = async (): Promise<Customer[]> => {
  try {
    return await prisma.customer.findMany({
      orderBy: { name: "asc" },
    });
  } catch (error) {
    console.error("Error fetching customer:", error);
    throw new Error("Failed to fetch customer");
  }
};

export const createCustomer = async (
  data: Omit<Customer, "id" | "rewards" | "tickets">
) => {
  try {
    const referralCode = uuidv4();

    return await prisma.$transaction(async (tx) => {
      let newCustomer;

      if (data.referredBy) {
        const referrer = await tx.customer.findUnique({
          where: { id: data.referredBy },
        });

        if (!referrer) {
          throw new Error("Invalid referral code");
        }

        newCustomer = await tx.customer.create({
          data: {
            ...data,
            referralCode,
            pendingDiscount: 10,
          },
        });
      } else {
        newCustomer = await tx.customer.create({
          data: {
            ...data,
            referralCode,
          },
        });
      }

      return newCustomer;
    });
  } catch (error) {
    console.error("Error creating customer:", error);
    throw new Error("Failed to create customer");
  }
};

export const updateCustomer = async (
  id: number,
  data: Omit<
    Customer,
    | "id"
    | "rewards"
    | "tickets"
    | "referredBy"
    | "referralCode"
    | "pendingDiscount"
  >
) => {
  try {
    return await prisma.customer.update({
      where: { id },
      data,
    });
  } catch (error) {
    console.error("Error updating customer:", error);
    throw new Error("Failed to update customer");
  }
};

export const deleteCustomer = async (id: number) => {
  try {
    await prisma.customer.delete({
      where: { id },
    });
  } catch (error) {
    console.error(error);
    throw new Error("Failed to delete customer");
  }
};

export const getReferral = async (
  referralCode: string
): Promise<Customer | null> => {
  try {
    const customer = await prisma.customer.findUnique({
      where: { referralCode },
    });

    return customer;
  } catch (error) {
    console.error("Error fetching customer:", error);
    throw new Error("Failed to fetch customer");
  }
};

export const getCustomer = async (email: string): Promise<Customer | null> => {
  try {
    return await prisma.customer.findFirst({
      where: { email },
    });
  } catch (error) {
    console.error("Error fetching customers:", error);
    throw new Error("Failed to fetch customers");
  }
};

export const getCustomerById = async (id: number): Promise<Customer | null> => {
  try {
    return await prisma.customer.findFirst({
      where: { id },
    });
  } catch (error) {
    console.error("Error fetching user:", error);
    throw new Error("Failed to fetch user");
  }
};

export const createBulkCustomer = async (data: Omit<Customer, "id">[]) => {
  try {
    await prisma.$transaction(async (prisma) => {
      await prisma.customer.createMany({ data });
    });
    return { success: true };
  } catch (error) {
    console.error("Error creating customers:", error);
    throw new Error("Failed to create customers");
  } finally {
    await prisma.$disconnect();
  }
};

export const getCustomersByLocation = async (
  location: string
): Promise<{ email: string }[]> => {
  try {
    return await prisma.customer.findMany({
      where: { location },
    });
  } catch (error) {
    console.error("Error fetching customers by location:", error);
    throw new Error("Failed to fetch customers by location");
  }
};
