import { ReactNode } from "react";
import { Card } from "@/components/ui/card";

const Glassmorphism = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <Card
      className={`p-4 rounded-xl backdrop-blur flex-none 
    transition-colors duration-500 
    lg:z-50 lg:border-b 
    lg:border-slate-900/10 dark:border-slate-50/6
    bg-white/50
    supports-backdrop-blur:bg-white/60 
    dark:bg-transparent ${className}`}
    >
      {children}
    </Card>
  );
};

export default Glassmorphism;
