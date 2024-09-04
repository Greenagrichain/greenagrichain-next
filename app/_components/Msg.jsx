import {
  ExclamationTriangleIcon,
  CheckCircledIcon,
} from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

export default function Msg({ msg: message, type: variant }) {
  if (!message) return null;

  const types = {
    error: {
      style: "bg-red-500 border-red-600 text-red-50",
      icon: <ExclamationTriangleIcon />,
    },
    success: {
      style: "bg-green-500 border-green-600 text-green-50",
      icon: <CheckCircledIcon />,
    },
  };

  return (
    <div
      className={cn(
        "relative p-2 rounded-lg text-sm border",
        types[variant].style
      )}
    >
      <p className="flex gap-2 items-center">
        {types[variant].icon} {message}
      </p>
    </div>
  );
}
