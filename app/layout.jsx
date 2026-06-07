import './globals.css';

export const metadata = {
    title: 'Truus — We make advertising for you',
    description: 'Truus is a creative advertising agency specialising in brand strategy, social media, video production, and activations.',
    icons: {
        icon: '/assets/ai-generated/work-social.png',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
