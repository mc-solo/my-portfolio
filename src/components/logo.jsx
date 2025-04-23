import React from 'react'

/**
 * IconLogo renders the site’s SVG logo.
 *
 * @param {object} props
 * @param {string} [props.className] – Tailwind (or other) CSS classes to set
 *                                     the SVG’s size and color. E.g. 'h-8 w-8 text-white'
 */
const IconLogo = ({ className = '' }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    viewBox="0 0 84 96"
  >
    <title>Logo</title>
    <g transform="translate(-8.000000, -2.000000)">
      <g transform="translate(11.000000, 5.000000)">
        {/* Outer polygon with no fill, only stroke */}
        <polygon
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          points="39 0 0 22 0 67 39 90 78 68 78 23"
          fill="none"
        />
        {/* Inner “B” shape, filled with currentColor */}
        <g transform="translate(16.000000, 20.000000)">
          <path
            d="M9.50 45.26L0 9.47L4.86 9.47L10.30 32.93Q11.18 36.62 11.82 40.26Q13.18 34.52 13.43 33.64L20.24 9.47L25.95 9.47L31.08 27.59Q33.01 34.33 33.86 40.26Q34.55 36.87 35.64 32.47L41.26 9.47L46.02 9.47L36.21 45.26L31.64 45.26L24.10 17.99Q23.14 14.58 22.97 13.79Q22.41 16.26 21.92 17.99L14.33 45.26L9.50 45.26Z"
            fill="currentColor"
          />
        </g>
      </g>
    </g>
  </svg>
)

export default IconLogo
