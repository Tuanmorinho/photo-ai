import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export function Logo(props: SvgIconProps) {
    return (
        <SvgIcon component={() => (
            <svg width="26" height="48" viewBox="0 0 26 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_53_16)">
                    <path d="M9.4331 31.9133L19.3675 27.4618C24.5544 25.0448 25.77 21.2556 25.77 17.9113C25.77 14.567 25.1934 11.9126 22.7522 10.163C24.3971 11.9376 21.6639 14.3146 18.4215 15.6768L9.18598 19.3085C3.9442 21.1256 0.294922 24.5574 0.294922 30.1112V47.195C1.11863 47.1475 1.55794 35.505 9.4331 31.9133Z" fill="url(#paint0_linear_53_16)" />
                    <path d="M7.00939 15.9442L12.4234 18.0463L18.414 15.6918C21.6589 14.3296 24.3897 11.9426 22.7447 10.178C21.7463 9.37065 20.1763 8.52833 18.2518 7.81349L0.240005 0.799999V7.07365C0.294919 10.4204 1.72268 14.1496 7.00939 15.9442Z" fill="url(#paint1_linear_53_16)" />
                    <path d="M12.0041 30.761L9.43309 31.9133C1.72518 35.4125 1.14359 46.6226 0.334854 47.1775L5.73639 44.8655C10.0871 43.1309 12.1114 40.4065 12.0041 34.0353V30.761Z" fill="url(#paint2_linear_53_16)" />
                </g>
                <defs>
                    <linearGradient id="paint0_linear_53_16" x1="1.75264" y1="34.8702" x2="27.3834" y2="18.0431" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#1A94FF" />
                        <stop offset="1" stopColor="#0D5BB5" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_53_16" x1="16.6518" y1="14.4271" x2="-11.654" y2="-3.92905" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#0B74E5" />
                        <stop offset="1" stopColor="#0D5BB5" />
                    </linearGradient>
                    <linearGradient id="paint2_linear_53_16" x1="6.40534" y1="40.1515" x2="5.05895" y2="33.4087" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#0B74E5" />
                        <stop offset="1" stopColor="#0D5BB5" />
                    </linearGradient>
                    <clipPath id="clip0_53_16">
                        <rect width="25.52" height="46.4" fill="white" transform="translate(0.240005 0.799999)" />
                    </clipPath>
                </defs>
            </svg>
        )} {...props} />
    );
}