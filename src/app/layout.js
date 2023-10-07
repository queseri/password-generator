import "./globals.css";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";

export const metadata = {
    generator: "Next.js",
    title: "Password random generator",
    description: "Generate random passwords",
    keywords: ["Passwords", "Random", "generate"],
    author: { name: "Chamu Mutezva" },
    colorScheme: "dark",
    themeColor: "black",
    creator: "Chamu Mutezva",
    publisher: "Chamu Mutezva",
    manifest: "/manifest.json",
    icons: {
        icon: "/favicon.ico",
    },
    alternates: {
        canomical: "/",
    },
    twitter: {
        card: "summary",
        title: "Password random generator",
        site: "@ChamuMutezva",
        description: "An application to generate random passwords",
        image: "./images/favicon-16x16.png",
    },
    openGraph: {
        facebook: {
            url: "https://password-generator-queseri.vercel.app/",
            type: "website",
            title: "Password random generator",
            description: "An application to generate random passwords",
            image: "./images/favicon-16x16.png",
        },
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <ThemeRegistry>{children}</ThemeRegistry>
            </body>
        </html>
    );
}
