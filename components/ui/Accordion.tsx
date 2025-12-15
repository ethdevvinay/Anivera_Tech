"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const AccordionContext = React.createContext<{
  activeItem: string | undefined;
  setActiveItem: (value: string | undefined) => void;
}>({
  activeItem: undefined,
  setActiveItem: () => {},
});

interface AccordionProps {
  type: "single" | "multiple"; // multiple not implemented for now to keep simple matching typical use
  collapsible?: boolean;
  children: React.ReactNode;
  className?: string;
  defaultValue?: string;
}

const Accordion = ({
  children,
  className,
  type = "single",
  defaultValue,
}: AccordionProps) => {
  const [activeItem, setActiveItem] = React.useState<string | undefined>(
    defaultValue
  );

  return (
    <AccordionContext.Provider value={{ activeItem, setActiveItem }}>
      <div className={cn("space-y-4", className)}>{children}</div>
    </AccordionContext.Provider>
  );
};

const AccordionItem = React.forwardRef<
  HTMLDivElement,
  { value: string; className?: string; children: React.ReactNode }
>(({ className, value, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("border-b border-gray-200", className)}
      {...props}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          // @ts-ignore
          return React.cloneElement(child, { value });
        }
        return child;
      })}
    </div>
  );
});
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  { className?: string; children: React.ReactNode; value?: string }
>(({ className, children, value, ...props }, ref) => {
  const { activeItem, setActiveItem } = React.useContext(AccordionContext);
  const isOpen = activeItem === value;

  const toggle = () => {
    if (isOpen) {
      setActiveItem(undefined);
    } else {
      setActiveItem(value);
    }
  };

  return (
    <div className="flex">
      <button
        ref={ref}
        onClick={toggle}
        className={cn(
          "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline text-left",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDown
          className={cn(
            "h-4 w-4 shrink-0 transition-transform duration-200 text-gray-400",
            isOpen && "rotate-180"
          )}
        />
      </button>
    </div>
  );
});
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  { className?: string; children: React.ReactNode; value?: string }
>(({ className, children, value, ...props }, ref) => {
  const { activeItem } = React.useContext(AccordionContext);
  const isOpen = activeItem === value;

  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div
            ref={ref}
            className={cn("pb-4 pt-0 text-sm", className)}
            {...props}
          >
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
