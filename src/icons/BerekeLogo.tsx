import { type SVGProps, forwardRef } from 'react';

export const BerekeLogo = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={ref}
      >
        <path
          d="M19.2917 0C21.8958 0 24 2.10356 24 4.70697V6.73416C24 9.33758 21.8958 11.4411 19.2917 11.4411H0V4.70697C0 2.10356 2.10417 0 4.70833 0H19.2917Z"
          fill="currentColor"
        />
        <path
          d="M19.2917 24C21.8958 24 24 21.8964 24 19.293V17.2658C24 14.6624 21.8958 12.5589 19.2917 12.5589H0V19.293C0 21.8964 2.10417 24 4.70833 24H19.2917Z"
          fill="currentColor"
        />
      </svg>
    );
  }
);
