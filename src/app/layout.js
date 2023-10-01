import "./globals.css";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";

export const metadata = {
    generator: "Next.js",
    title: "Password random generator",
    description: "Generated by create next app",
    keywords: ["Next.js", "React", "Tailwind"],
    author: { name: "Chamu Mutezva" },
    colorScheme: "dark",
    themeColor: "black",
    creator: "Chamu Mutezva",
    publisher: "Chamu Mutezva",
    manifest: "/manifest.json",
    icons: {
        icon: "/favicon.ico",
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
