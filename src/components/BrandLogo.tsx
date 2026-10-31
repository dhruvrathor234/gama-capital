import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  showTagline = false,
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
  };

  const titleSizes = {
    sm: 'text-base tracking-[0.2em]',
    md: 'text-lg tracking-[0.22em]',
    lg: 'text-2xl tracking-[0.25em]',
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Precision Geometric 'G' Monogram */}
      <div className={`relative flex items-center justify-center shrink-0 ${iconSizes[size]}`}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_2px_12px_rgba(198,167,106,0.35)]"
        >
          <defs>
            <linearGradient id="gamaGoldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#EAD8AC" />
              <stop offset="45%" stopColor="#C6A76A" />
              <stop offset="100%" stopColor="#8C7241" />
            </linearGradient>
            <linearGradient id="gamaSilverGradient" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="50%" stopColor="#C4CAD4" />
              <stop offset="100%" stopColor="#6C7280" />
            </linearGradient>
            <linearGradient id="gamaFacetGlow" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#C6A76A" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#C6A76A" stopOpacity="0.05" />
            </linearGradient>
          </defs>

          {/* Hexagonal Outer Boundary Matrix */}
          <polygon
            points="50,4 92,26 92,74 50,96 8,74 8,26"
            stroke="url(#gamaSilverGradient)"
            strokeWidth="1.5"
            strokeOpacity="0.35"
            fill="none"
          />

          {/* Geometric Facet Fill */}
          <polygon
            points="50,14 82,31 82,69 50,86 18,69 18,31"
            fill="url(#gamaFacetGlow)"
          />

          {/* Precision Architectural 'G' Monogram Paths */}
          {/* Top arch and left wall */}
          <path
            d="M74 34 L50 20 L26 34 L26 66 L50 80 L74 66 L74 50 L48 50"
            stroke="url(#gamaGoldGradient)"
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Horizontal crossbar precision node */}
          <line
            x1="50"
            y1="50"
            x2="74"
            y2="50"
            stroke="url(#gamaSilverGradient)"
            strokeWidth="3.5"
            strokeLinecap="square"
          />

          {/* Central quantitative core diamond */}
          <rect
            x="46"
            y="46"
            width="8"
            height="8"
            transform="rotate(45 50 50)"
            fill="url(#gamaGoldGradient)"
          />
        </svg>
      </div>

      {/* Brand Wordmark */}
      <div className="flex flex-col">
        <div className="flex items-baseline gap-1.5 leading-none">
          <span className={`font-bold text-white ${titleSizes[size]}`}>
            GAMA
          </span>
          <span className={`font-light text-[#C6A76A] ${titleSizes[size]}`}>
            CAPITAL
          </span>
        </div>
        {showTagline && (
          <span className="text-[10px] tracking-[0.28em] text-[#C4CAD4]/70 uppercase mt-1">
            Precision · Strategy · Performance
          </span>
        )}
      </div>
    </div>
  );
};
