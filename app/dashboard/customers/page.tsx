import CustomContainer from "@/components/ui/custom/CustomContainer";
import CustomersTable from "@/components/dashboard/customers/CustomersTable";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/config/authOptions";
import { getCustomers } from "@/components/dashboard/customers/services/customerCrud";
import { Session, getServerSession } from "next-auth";

async function Customers() {
  const staffInSession: Session | null = await getServerSession(authOptions);
  if (!staffInSession) {
    redirect("/");
  }
  let customers: any = [];
  let error = "";

  try {
    customers = await getCustomers();
  } catch (err) {
    console.error("Error fetching customers:", err);
    error = "Check your internet connection.";
  }
  return (
    <CustomContainer>
      <div className="flex flex-col justify-center gap-8">
        {error ? (
          <p className="text-red-500 text-center">{error}</p>
        ) : (
          <CustomersTable customers={customers} />
        )}
      </div>
    </CustomContainer>
  );
}

export default Customers;
