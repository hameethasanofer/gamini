import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Gamini Engineering Works - Premium Industrial Redesign",
  description: "High-precision industrial machinery and complete turnkey engineering solutions since 1977.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#f7faf8] text-[#181c1b] font-['Inter',sans-serif] antialiased selection:bg-[#174a2a] selection:text-white">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
