export default function Page() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Reputation</h1>
        <p className="text-foreground/60 text-sm">Manage your reputation settings and preferences.</p>
      </div>
      
      <div className="w-full h-[1px] bg-border/50 my-2"></div>
      
      <div className="bg-black/20 rounded-xl border border-border/50 p-8 flex flex-col items-center justify-center min-h-[300px] text-center">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 border border-primary/20">
          <span className="text-primary text-2xl font-bold">...</span>
        </div>
        <h3 className="text-lg font-medium text-white mb-2">Coming Soon</h3>
        <p className="text-sm text-foreground/50 max-w-md">The Reputation module is currently under development. Please check back later for updates.</p>
      </div>
    </div>
  );
}