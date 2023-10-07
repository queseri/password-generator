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
        card: "summary_large_image",
        title: "Password random generator",
        description: "Generate random passwords",
        image: "",
    },
    openGraph: {
        url: "https://password-generator-queseri.vercel.app/",
        type: "website",
        title: "Password random generator",
        description: "Generate random passwords",
        image: "",
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
