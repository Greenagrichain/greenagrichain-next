import React from "react";
import {
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import { FullLoader } from "@/components/Loader";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

export default function DialogDetails({ details, title = "Data", isLoading }) {
  return (
    <DialogContent className="min-h-40">
      <DialogHeader>
        <DialogTitle className="text-center ">{title}</DialogTitle>
        <Separator />
      </DialogHeader>
      <ScrollArea className="max-h-[70vh]" type="auto">
        <div className="details relative">
          {isLoading || !details ? (
            <FullLoader />
          ) : (
            Object.entries(details || []).map(([field, value]) => (
              <div
                key={field + value}
                className="detail text-sm hover:bg-neutral-200 p-1 rounded"
              >
                <span className="font-bold uppercase">{field}: </span>
                {value || <Badge variant="secondary">No record</Badge>}
                <Separator className="" />
              </div>
            ))
          )}
        </div>
      </ScrollArea>
      <DialogFooter>
        <DialogClose>
          <Button>Close</Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  );
}
