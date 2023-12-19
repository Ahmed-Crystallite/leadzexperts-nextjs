// Import Inter Font Family
import { Inter, Montserrat, Poppins } from "next/font/google";

// Import LocalFont Font Family
import localFont from "next/font/local";

const primary = Montserrat({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    style: ['normal'],
    display: 'swap',
    subsets: ['latin'],
    variable: '--font-primary',
});

const berlinFont = localFont({
    src: [{
        path: '../fonts/Berlin-Sans-FB-Demi-Bold.ttf',
        weight: '700',
        style: 'normal',
    }],
    variable: '--font-berlin',
    subsets: ['latin'],
    display: 'swap',
});

export { primary, berlinFont };