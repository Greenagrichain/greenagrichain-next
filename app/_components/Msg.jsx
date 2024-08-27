import {
  ExclamationTriangleIcon,
  CheckCircledIcon,
} from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

export default function Msg({ msg, type }) {
  if (!msg) return null;
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

  //   useEffect(() => {
  //     let timerId = null;
  //     timerId = setTimeout(handleClose, 5000);

  //     return () => clearTimeout(timerId);
  //   }, []);

  return (
    <div
      className={cn(
        "relative p-2 rounded-lg text-sm border-4",
        types[type].style
      )}
    >
      <p className="flex gap-2 items-center">
        {types[type].icon} {msg}
      </p>
    </div>
  );
}
