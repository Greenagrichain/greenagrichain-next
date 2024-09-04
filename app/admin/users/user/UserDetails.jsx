import React from "react";
import {
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import useSWR from "swr";
import { toast } from "sonner";
import { FullLoader } from "@/components/Loader";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import DialogDetails from "@/components/DialogDetails";

export default function UserDetails({ id }) {
  const { data: userData, isLoading, error } = useSWR(`/api/users/${id}`);

  if (error) {
    toast.error("Error fetching required data", {
      id: "error",
    });
  }
  return (
    <DialogDetails details={userData} title="User Info" isLoading={isLoading} />
    // <DialogContent className="min-h-40">
    //   <DialogHeader>
    //     <DialogTitle className="text-center ">User Data</DialogTitle>
    //     <Separator />
    //   </DialogHeader>
    //   <ScrollArea className="max-h-[70vh]" type="auto">
    //     <div className="details relative">
    //       {isLoading ? (
    //         <FullLoader />
    //       ) : (
    //         Object.entries(userData).map(([field, value]) => (
    //           <div
    //             key={field + value}
    //             className="detail text-sm hover:bg-neutral-200 p-1 rounded"
    //           >
    //             <span className="font-bold uppercase">{field}: </span>
    //             {value || <Badge variant="secondary">No record</Badge>}
    //             <Separator className="" />
    //           </div>
    //         ))
    //       )}
    //     </div>
    //   </ScrollArea>
    //   <DialogFooter>
    //     <DialogClose>
    //       <Button>Close</Button>
    //     </DialogClose>
    //   </DialogFooter>
    // </DialogContent>
  );
}
