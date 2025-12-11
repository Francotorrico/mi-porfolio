export default function Loading() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-background/90 backdrop-blur-md">
            <div className="relative w-16 h-16">
                <div className="absolute top-0 left-0 w-full h-full border-4 border-primary/30 rounded-full animate-pulse"></div>
                <div className="absolute top-0 left-0 w-full h-full border-4 border-t-primary rounded-full animate-spin"></div>
            </div>
        </div>
    );
}
