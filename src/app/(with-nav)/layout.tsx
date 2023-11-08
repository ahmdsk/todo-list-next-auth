export default function RootLayout({ children } : { children: React.ReactNode }) {
    return (
        <div className="flex justify-center my-4 mx-3 md:mx-0">
            <div className="max-w-xl w-full">
                {children}
            </div>
        </div>
    );
}