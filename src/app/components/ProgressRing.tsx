import { useMemo } from "react";

type ProgressRingProps = { progress: number };

export const ProgressRing = ({ progress }: ProgressRingProps) => {
  const { progressStroke } = useMemo(() => {
    const circumference = 2 * Math.PI * 65;
    const progressLength = (progress / 100) * circumference;
    const backgroundLength = circumference - progressLength;

    return {
      progressStroke: `${progressLength} ${backgroundLength}`,
    };
  }, [progress]);

  return (
    <svg
      width="175"
      height="175"
      viewBox="0 0 143 144"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="paint0_linear_1_2"
          x1="3.22864"
          y1="3.67839"
          x2="151.322"
          y2="17.3576"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00C7BE" />
          <stop offset="1" stopColor="#0097C7" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1_2"
          x1="3.22864"
          y1="3.67839"
          x2="151.322"
          y2="17.3576"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00C7BE" />
          <stop offset="1" stopColor="#0097C7" />
        </linearGradient>
      </defs>

      {/* Background ring */}
      <mask
        id="path-1-outside-1_1_2"
        maskUnits="userSpaceOnUse"
        x="0.22864"
        y="0.678389"
        width="143"
        height="143"
        fill="black"
      >
        <rect fill="white" x="0.22864" y="0.678389" width="143" height="143" />
        <path d="M139.957 72.0424C139.957 109.799 109.349 140.406 71.5926 140.406C33.8362 140.406 3.22864 109.799 3.22864 72.0424C3.22864 34.286 33.8362 3.67839 71.5926 3.67839C109.349 3.67839 139.957 34.286 139.957 72.0424ZM10.065 72.0424C10.065 106.023 37.6119 133.57 71.5926 133.57C105.573 133.57 133.12 106.023 133.12 72.0424C133.12 38.0616 105.573 10.5148 71.5926 10.5148C37.6119 10.5148 10.065 38.0616 10.065 72.0424Z" />
      </mask>
      <path
        d="M139.957 72.0424C139.957 109.799 109.349 140.406 71.5926 140.406C33.8362 140.406 3.22864 109.799 3.22864 72.0424C3.22864 34.286 33.8362 3.67839 71.5926 3.67839C109.349 3.67839 139.957 34.286 139.957 72.0424ZM10.065 72.0424C10.065 106.023 37.6119 133.57 71.5926 133.57C105.573 133.57 133.12 106.023 133.12 72.0424C133.12 38.0616 105.573 10.5148 71.5926 10.5148C37.6119 10.5148 10.065 38.0616 10.065 72.0424Z"
        fill="white"
      />
      <path
        d="M139.957 72.0424C139.957 109.799 109.349 140.406 71.5926 140.406C33.8362 140.406 3.22864 109.799 3.22864 72.0424C3.22864 34.286 33.8362 3.67839 71.5926 3.67839C109.349 3.67839 139.957 34.286 139.957 72.0424ZM10.065 72.0424C10.065 106.023 37.6119 133.57 71.5926 133.57C105.573 133.57 133.12 106.023 133.12 72.0424C133.120 38.0616 105.573 10.5148 71.5926 10.5148C37.6119 10.5148 10.065 38.0616 10.065 72.0424Z"
        stroke="white"
        strokeWidth="5.697"
        mask="url(#path-1-outside-1_1_2)"
      />

      {/* Light background fill - shows the remaining portion */}
      <mask
        id="path-2-outside-2_1_2"
        maskUnits="userSpaceOnUse"
        x="0.22864"
        y="0.678389"
        width="143"
        height="143"
        fill="black"
      >
        <rect fill="white" x="0.22864" y="0.678389" width="143" height="143" />
        <path d="M139.957 72.0424C139.957 109.799 109.349 140.406 71.5926 140.406C33.8362 140.406 3.22864 109.799 3.22864 72.0424C3.22864 34.286 33.8362 3.67839 71.5926 3.67839C109.349 3.67839 139.957 34.286 139.957 72.0424ZM10.065 72.0424C10.065 106.023 37.6119 133.57 71.5926 133.57C105.573 133.57 133.12 106.023 133.12 72.0424C133.12 38.0616 105.573 10.5148 71.5926 10.5148C37.6119 10.5148 10.065 38.0616 10.065 72.0424Z" />
      </mask>
      <path
        d="M139.957 72.0424C139.957 109.799 109.349 140.406 71.5926 140.406C33.8362 140.406 3.22864 109.799 3.22864 72.0424C3.22864 34.286 33.8362 3.67839 71.5926 3.67839C109.349 3.67839 139.957 34.286 139.957 72.0424ZM10.065 72.0424C10.065 106.023 37.6119 133.57 71.5926 133.57C105.573 133.57 133.12 106.023 133.12 72.0424C133.12 38.0616 105.573 10.5148 71.5926 10.5148C37.6119 10.5148 10.065 38.0616 10.065 72.0424Z"
        fill="url(#paint0_linear_1_2)"
        fillOpacity="0.1"
      />
      <path
        d="M139.957 72.0424C139.957 109.799 109.349 140.406 71.5926 140.406C33.8362 140.406 3.22864 109.799 3.22864 72.0424C3.22864 34.286 33.8362 3.67839 71.5926 3.67839C109.349 3.67839 139.957 34.286 139.957 72.0424ZM10.065 72.0424C10.065 106.023 37.6119 133.57 71.5926 133.57C105.573 133.57 133.120 106.023 133.12 72.0424C133.12 38.0616 105.573 10.5148 71.5926 10.5148C37.6119 10.5148 10.065 38.0616 10.065 72.0424Z"
        stroke="white"
        strokeWidth="5.697"
        mask="url(#path-2-outside-2_1_2)"
      />

      {/* Progress indicator with simple circular progress */}
      <circle
        cx="71.5926"
        cy="72.0424"
        r="65"
        fill="none"
        stroke="url(#paint1_linear_1_2)"
        strokeWidth="8"
        strokeLinecap="round"
        strokeDasharray={progressStroke}
        strokeDashoffset="0"
        transform="rotate(-90 71.5926 72.0424)"
      />
    </svg>
  );
};
