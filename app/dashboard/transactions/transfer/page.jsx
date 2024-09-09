import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import P2P from "./P2P";

function Transfer() {
  return (
    <div className="border border-dashed rounded-lg p-2 w-fit mx-auto mt-10">
      <Tabs defaultValue="p2p">
        <TabsList>
          <TabsTrigger value="p2p">P2P Transfer</TabsTrigger>
        </TabsList>
        <TabsContent value="p2p">
          <P2P />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default Transfer;
