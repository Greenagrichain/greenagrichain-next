import React from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { cn } from "@/lib/utils";
import { IconInfoCircleFilled } from "@tabler/icons-react";

export default function CustomAlert({
  title,
  description,
  variant = "dark",
  icon,
  size,
}) {
  const variants = {
    success:
      "text-sm *:fill-green-800 text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400",
    error:
      "text-sm *:fill-red-800 text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",
    info: "text-sm *:fill-blue-800 text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400",
    warn: "text-sm *:fill-yellow-800 text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-400",
    dark: "text-sm *:fill-gray-800 text-gray-800 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-400",
  };

  return (
    <Alert className={cn(variants[variant], "text-left flex items-center")}>
      <div className="icon-container">{icon || <IconInfoCircleFilled />}</div>
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription className="ml-4">{description}</AlertDescription>
    </Alert>
  );
}
