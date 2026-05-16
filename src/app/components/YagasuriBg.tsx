export default function YagasuriBg({ className = "" }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <defs>
        <pattern id="yagasuri" x="0" y="0" width="40" height="80" patternUnits="userSpaceOnUse">
          <rect width="40" height="80" fill="transparent"/>
          <path d="M 20 0 L 10 20 L 20 20 L 30 20 Z" fill="currentColor" opacity="0.15"/>
          <path d="M 20 20 L 10 40 L 20 40 L 30 40 Z" fill="currentColor" opacity="0.08"/>
          <path d="M 20 40 L 10 60 L 20 60 L 30 60 Z" fill="currentColor" opacity="0.15"/>
          <path d="M 20 60 L 10 80 L 20 80 L 30 80 Z" fill="currentColor" opacity="0.08"/>

          <path d="M 0 0 L 10 20 L 0 20 Z" fill="currentColor" opacity="0.1"/>
          <path d="M 0 20 L 10 40 L 0 40 Z" fill="currentColor" opacity="0.05"/>
          <path d="M 0 40 L 10 60 L 0 60 Z" fill="currentColor" opacity="0.1"/>
          <path d="M 0 60 L 10 80 L 0 80 Z" fill="currentColor" opacity="0.05"/>

          <path d="M 40 0 L 30 20 L 40 20 Z" fill="currentColor" opacity="0.1"/>
          <path d="M 40 20 L 30 40 L 40 40 Z" fill="currentColor" opacity="0.05"/>
          <path d="M 40 40 L 30 60 L 40 60 Z" fill="currentColor" opacity="0.1"/>
          <path d="M 40 60 L 30 80 L 40 80 Z" fill="currentColor" opacity="0.05"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#yagasuri)"/>
    </svg>
  );
}
