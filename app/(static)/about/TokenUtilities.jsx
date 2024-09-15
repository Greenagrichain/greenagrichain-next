import React from "react";
import tokenUtilities from "./tokenUtilitiesData";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const fontSizes = ["text-2xl", "text-xl", "text-lg", "text-base", "text-sm"];

export default function TokenUtilities() {
  return (
    <section className="container py-4">
      <h2 className="text-center">Token Utilities</h2>
      <Separator />
      {renderList({ list: tokenUtilities })}
    </section>
  );
}

function renderList({ list, level = 0 }) {
  return (
    <Collapsible className="pl-4 border-l py-2" defaultOpen={true}>
      {Object.entries(list).map(([prop, value]) => (
        <>
          <CollapsibleTrigger asChild>
            <h3
              className={cn(
                "capitalize my-1 text-base cursor-pointer",
                fontSizes[level]
              )}
            >
              {prop.split(/(?=[A-Z])/g).join(" ")}
            </h3>
          </CollapsibleTrigger>

          <CollapsibleContent>
            {(typeof value === "string" || typeof value === "number") && (
              <p>{value}</p>
            )}
            {typeof value === "object" &&
              value !== null &&
              renderList({ list: value, level: level + 1 })}
          </CollapsibleContent>
        </>
      ))}
    </Collapsible>
  );
}
