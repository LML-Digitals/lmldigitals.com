// import CustomerTable from "@/components/dashboard/customers/one-customer/CustomerTable";
// import GoBackButton from "@/components/dashboard/customers/one-customer/GoBackButton";
// import { Badge } from "@/components/ui/badge";
// import { Label } from "@/components/ui/label";
// // import { getDiscountByUserId } from "@/components/dashboard/customers/services/discountCrud";
// import { getCustomer } from "@/components/dashboard/customers/services/customerCrud";

// type ParamsProps = {
//   params: {
//     customerId: string;
//   };
// };

// async function fetchCustomerInfo(id: number) {
//   try {
//     const customer: any = await getCustomer(id.toString());
//     return { customer: customer, error: null };
//   } catch (error) {
//     return { customer: [], error: "Check Your Internet" };
//   }
// }

// async function fetchThisCustomerDiscount(id: number) {
//   try {
//     const userDiscount: any = await getDiscountByUserId(id.toString());
//     return { userDiscount: userDiscount, error: null };
//   } catch (error) {
//     return {
//       userDiscount: [],
//       error: "Check Your Internet",
//     };
//   }
// }

// async function OneCustomer({ params }: ParamsProps) {
//   const { customer, error } = await fetchCustomerInfo(+params.customerId);
//   const { userDiscount, error: discountError } =
//     await fetchThisCustomerDiscount(+params.customerId);

//   const profile =
//     "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMGltYWdlJTIwZnJlZXxlbnwwfHwwfHx8MA%3D%3DD";
//   return (
//     <div>
//       {error || (discountError && <p>{error || discountError}</p>)}
//       <div className="flex  flex-col lg:flex-row justify-between gap-4 lg:gap-0">
//         <div className="flex flex-col gap-4 w-1/2 ">
//           <div className="flex flex-col lg:flex-row lg:items-center gap-3">
//             {/* <Image
//               src={profile}
//               width={80}
//               height={80}
//               alt="profile "
//               className="rounded-full aspect-square object-cover border-2 border-[#e3de1e]"
//             /> */}
//             <h1 className="text-4xl font-bold">{customer?.user_name}</h1>
//             <Badge variant={"outline"} className="bg-blue-500 text-white  w-32">
//               Current Customer
//             </Badge>
//           </div>
//           <div className="flex flex-col lg:flex-row lg:items-center gap-3 justify-between">
//             <div>
//               <Label>Email</Label>
//               <p className="text-sm">{customer?.email}</p>
//             </div>
//             <div>
//               <Label>Phone</Label>
//               <p className="text-sm">+{customer?.mobile_number}</p>
//             </div>
//             <div>
//               <Label>Location</Label>
//               <p className="text-sm">{customer?.location}</p>
//             </div>
//           </div>
//         </div>
//         <GoBackButton />
//       </div>
//       <CustomerTable userDiscount={userDiscount} />
//     </div>
//   );
// }

// export default OneCustomer;
