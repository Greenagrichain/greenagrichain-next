"use client";
import { Button } from "@/components/ui/button";
import { IconCopy, IconCheck } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

import { useState } from "react";

export default function CopyToClipboard({
  data,
  variant = "icon",
  className = "",
  link = false,
}) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    window.navigator.clipboard.writeText(data);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  let copyTrigger = null;
  if (copied && variant === "icon") copyTrigger = <IconCheck size={20} />;
  if (!copied && variant === "icon") copyTrigger = <IconCopy size={20} />;
  if (!copied && variant !== "icon") copyTrigger = "Copy";
  if (copied && variant !== "icon") copyTrigger = "Copied";

  return (
    <div
      className={cn(
        "px-2 py-1 rounded-lg inline-flex text-sm border items-center gap-2 justify-between",
        className
      )}
    >
      {link ? (
        <a
          href={data}
          rel="noreferrer"
          className="hover:underline"
          target="_blank"
        >
          {data}
        </a>
      ) : (
        data
      )}
      <Button
        variant={"outline"}
        size={variant === "icon" ? "icon" : "default"}
        onClick={handleCopy}
        className="self-start"
      >
        {copyTrigger}
      </Button>
    </div>
  );
}
