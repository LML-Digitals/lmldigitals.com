import { getStaffs } from "@/components/dashboard/staff/services/staffCrud";
import CustomContainer from "@/components/ui/custom/CustomContainer";
import { Session, getServerSession } from "next-auth";
import { authOptions } from "@/lib/config/authOptions";
import { redirect } from "next/navigation";
import StaffTable from "@/components/dashboard/staff/StaffTable";

const StaffPage = async () => {
  const staffInSession: Session | null = await getServerSession(authOptions);
  if (!staffInSession) {
    redirect("/");
  }
  let staffs: any = [];
  let error = "";

  try {
    staffs = await getStaffs();
  } catch (err) {
    console.error("Error fetching staffs:", err);
    error = "Check your internet connection.";
  }
  return (
    <CustomContainer>
      <div className="flex flex-col justify-center gap-8">
        {error ? (
          <p className="text-red-500 text-center">{error}</p>
        ) : (
          <StaffTable staffs={staffs} />
        )}
      </div>
    </CustomContainer>
  );
};

export default StaffPage;
