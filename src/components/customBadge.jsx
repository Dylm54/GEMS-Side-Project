import { extendVariants, Badge } from "@nextui-org/react";

export const CustomBadge = extendVariants(Badge, {
    variants: {
        color: {
            olive: "text-[#000] bg-[#84cc16]",
            orange: "bg-[#ff8c00] text-[#fff]",
            violet: "bg-[#8b5cf6] text-[#fff]",
            ytRed: "bg-[#FF0200] text-[#fff]",
        },
        isDisabled: {
            true: "bg-[#eaeaea] text-[#000] opacity-50 cursor-not-allowed",
        },
        size: {
            xs: "px-unit-2 min-w-unit-12 h-unit-6 text-tiny gap-unit-1 rounded-small",
            md: "px-unit-4 min-w-unit-20 h-unit-10 text-small gap-unit-2 rounded-small",
            xl: "px-unit-8 min-w-unit-28 h-unit-14 text-large gap-unit-4 rounded-medium",
        },
    },
    defaultVariants: {
        color: "ytRed",
        size: "sm",
    },
    compoundVariants: [ 
        {
            isDisabled: true,
            color: "ytRed",
            class: "bg-[#FF0200] opacity-100",
        },
    ],
});