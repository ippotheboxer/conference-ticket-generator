const InformationIcon = ({ hasError }: { hasError: boolean }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      className="w-4 h-4 inline-block mr-1"
      stroke={hasError ? "hsl(7, 88%, 67%)" : "hsl(252, 6%, 83%)"} 
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2 8a6 6 0 1 0 12 0A6 6 0 0 0 2 8Z"
      />
      <path fill={hasError ? "hsl(7, 88%, 67%)" : "hsl(252, 6%, 83%)"} d="M8.004 10.462V7.596ZM8 5.57v-.042Z" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.004 10.462V7.596M8 5.569v-.042"
      />
    </svg>
  );
  
  export default InformationIcon;
  