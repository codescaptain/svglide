import { useEffect, useRef } from "react";

import type { IconProps } from "./icon.types";

export const Church: React.FC<IconProps> = ({
  "data-hovered": hovered,
  ...props
}) => {
  const baseRef = useRef<SVGSVGElement>(null);
  const churchRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!hovered) return;

    baseRef.current?.animate(
      [
        { strokeDasharray: "0, 100", scale: 0 },
        { strokeDasharray: "100, 0", scale: 1.2 },
        { strokeDasharray: "100, 0", scale: 1 },
      ],
      {
        duration: 600,
        iterations: 1,
        fill: "forwards",
        easing: "ease-in-out",
      }
    );

    churchRef.current?.animate(
      [
        { transform: "translateY(0)" },
        { transform: "translateY(-3px)" },
        { transform: "translateY(0)" },
      ],
      {
        duration: 600,
        iterations: 1,
        fill: "forwards",
        easing: "ease-in-out",
        delay: 400,
      }
    );
  }, [hovered]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      ref={baseRef}
      {...props}
    >
      <g ref={churchRef}>
        <path d="M10 9h4" />
        <path d="M12 7v5" />
      </g>
      <path d="M14 22v-4a2 2 0 0 0-4 0v4" />
      <path d="M18 22V5.618a1 1 0 0 0-.553-.894l-4.553-2.277a2 2 0 0 0-1.788 0L6.553 4.724A1 1 0 0 0 6 5.618V22" />
      <path d="m18 7 3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.618a1 1 0 0 1 .553-.894L6 7" />
    </svg>
  );
};
