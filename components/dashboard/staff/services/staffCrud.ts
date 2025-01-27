"use server";

import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { Staff } from "@prisma/client";
import { PartialBy } from "@/types/type";

export const getStaffs = async (): Promise<Staff[]> => {
  try {
    return await prisma.staff.findMany({
      orderBy: { name: "asc" },
    });
  } catch (error) {
    console.error("Error fetching staffs:", error);
    throw new Error("Failed to fetch staffs");
  }
};

export const getStaff = async (email: string): Promise<Staff> => {
  try {
    const staff = await prisma.staff.findFirst({
      where: { email },
    });

    if (!staff) {
      throw new Error("Staff not found");
    }
    return staff;
  } catch (error) {
    console.error("Error fetching staff:", error);
    throw new Error("Failed to fetch staff");
  }
};

export const createStaff = async (staffData: PartialBy<Staff, "id">) => {
  try {
    const hashedPassword = await bcrypt.hash(staffData.password, 10);

    return await prisma.staff.create({
      data: { ...staffData, password: hashedPassword },
    });
  } catch (error) {
    console.error("Error creating staff:", error);
    throw new Error("Failed to create staff");
  }
};

export const updateStaff = async (
  id: number,
  updatedData: PartialBy<Staff, "id" | "password">
) => {
  try {
    return await prisma.staff.update({
      where: { id },
      data: updatedData,
    });
  } catch (error) {
    console.error("Error updating staff:", error);
    throw new Error("Failed to update staff");
  }
};

export const deleteStaff = async (id: number) => {
  try {
    await prisma.staff.delete({
      where: { id },
    });
  } catch (error) {
    console.error(error);
    throw new Error("Failed to delete staff");
  }
};
