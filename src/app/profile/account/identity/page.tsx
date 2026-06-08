import { User, Mail, Camera, Save } from "lucide-react";

export default function IdentityPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Identity</h1>
        <p className="text-foreground/60 text-sm">Manage your personal information and profile appearance.</p>
      </div>
      
      <div className="w-full h-[1px] bg-border/50 my-2"></div>
      
      {/* Profile Picture Section */}
      <div className="bg-black/20 rounded-xl border border-border/50 p-6 flex flex-col md:flex-row gap-6 items-center">
        <div className="relative w-24 h-24 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center group cursor-pointer overflow-hidden">
          <span className="text-primary text-2xl font-bold group-hover:opacity-0 transition-opacity">CW</span>
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <Camera className="w-6 h-6 text-white" />
          </div>
        </div>
        <div className="flex flex-col gap-2 text-center md:text-left">
          <h3 className="text-lg font-medium text-white">Profile Picture</h3>
          <p className="text-sm text-foreground/60 max-w-sm">
            We support PNGs, JPEGs and GIFs under 5MB. Recommended size 256x256px.
          </p>
          <div className="flex gap-3 justify-center md:justify-start mt-2">
            <button className="px-4 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-lg hover:bg-primary/90 transition-colors">
              Upload New
            </button>
            <button className="px-4 py-2 bg-white/5 border border-border text-white text-sm font-semibold rounded-lg hover:bg-white/10 transition-colors">
              Remove
            </button>
          </div>
        </div>
      </div>

      {/* Basic Info Form */}
      <div className="bg-black/20 rounded-xl border border-border/50 p-6 flex flex-col gap-6">
        <h3 className="text-lg font-medium text-white">Basic Information</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-foreground/80">Full Name</label>
            <div className="relative">
              <input 
                type="text" 
                defaultValue="Crypto Whale"
                className="w-full bg-black/50 border border-border/50 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors"
              />
              <User className="w-4 h-4 text-foreground/50 absolute left-3.5 top-1/2 -translate-y-1/2" />
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-foreground/80">Username</label>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-foreground/50 text-sm">@</span>
              <input 
                type="text" 
                defaultValue="crypto_whale_99"
                className="w-full bg-black/50 border border-border/50 rounded-lg pl-8 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>
          </div>
          
          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="text-sm font-medium text-foreground/80">Email Address</label>
            <div className="relative">
              <input 
                type="email" 
                defaultValue="whale@bitcoininfonews.com"
                className="w-full bg-black/50 border border-border/50 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors"
              />
              <Mail className="w-4 h-4 text-foreground/50 absolute left-3.5 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="text-sm font-medium text-foreground/80">Bio</label>
            <textarea 
              rows={4}
              placeholder="Tell us a little bit about yourself..."
              className="w-full bg-black/50 border border-border/50 rounded-lg p-4 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors resize-none"
              defaultValue="Crypto enthusiast since 2017. DeFi degen and NFT collector."
            ></textarea>
          </div>
        </div>
        
        <div className="flex justify-end mt-4">
          <button className="flex items-center gap-2 px-6 py-2.5 bg-[#ffb042] text-black text-sm font-bold rounded-lg hover:bg-[#ffa01c] transition-colors">
            <Save className="w-4 h-4" />
            Save Changes
          </button>
        </div>
      </div>

    </div>
  );
}