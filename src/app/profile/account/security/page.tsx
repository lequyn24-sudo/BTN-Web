import { Shield, Key, Smartphone, Monitor } from "lucide-react";

export default function SecurityPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Security</h1>
        <p className="text-foreground/60 text-sm">Protect your account and manage your active sessions.</p>
      </div>
      
      <div className="w-full h-[1px] bg-border/50 my-2"></div>
      
      {/* Change Password */}
      <div className="bg-card rounded-xl border border-border/50 p-6 flex flex-col gap-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Key className="w-5 h-5 text-primary" />
          </div>
          <h3 className="text-lg font-medium text-foreground">Change Password</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="text-sm font-medium text-foreground/80">Current Password</label>
            <input 
              type="password" 
              placeholder="••••••••"
              className="w-full bg-card border border-border/50 rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary/50 transition-colors"
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-foreground/80">New Password</label>
            <input 
              type="password" 
              placeholder="••••••••"
              className="w-full bg-card border border-border/50 rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary/50 transition-colors"
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-foreground/80">Confirm New Password</label>
            <input 
              type="password" 
              placeholder="••••••••"
              className="w-full bg-card border border-border/50 rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary/50 transition-colors"
            />
          </div>
        </div>
        
        <div className="flex justify-end mt-2">
          <button className="px-6 py-2.5 bg-card border border-border text-foreground text-sm font-semibold rounded-lg hover:bg-white/10 transition-colors">
            Update Password
          </button>
        </div>
      </div>

      {/* Two-Factor Authentication */}
      <div className="bg-card rounded-xl border border-border/50 p-6 flex flex-col gap-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-500/10 rounded-lg">
              <Shield className="w-5 h-5 text-green-500" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-foreground">Two-Factor Authentication (2FA)</h3>
              <p className="text-sm text-foreground/60 mt-1">Add an extra layer of security to your account.</p>
            </div>
          </div>
          
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" defaultChecked />
            <div className="w-11 h-6 bg-foreground/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
            <span className="ml-3 text-sm font-medium text-foreground">Enabled</span>
          </label>
        </div>
        
        <div className="bg-background/50 border border-border/50 rounded-lg p-4 flex justify-between items-center">
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium text-foreground">Authenticator App</span>
            <span className="text-xs text-foreground/50">Google Authenticator, Authy, etc.</span>
          </div>
          <button className="text-xs font-semibold text-primary hover:underline">Configured</button>
        </div>
      </div>

      {/* Active Sessions */}
      <div className="bg-card rounded-xl border border-border/50 p-6 flex flex-col gap-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Smartphone className="w-5 h-5 text-primary" />
          </div>
          <h3 className="text-lg font-medium text-foreground">Active Sessions</h3>
        </div>
        
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center border-b border-border/50 pb-4">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-card rounded-full">
                <Monitor className="w-5 h-5 text-foreground/70" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-foreground flex items-center gap-2">
                  Windows 11 • Chrome 
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-green-500/20 text-green-500">Active Now</span>
                </span>
                <span className="text-xs text-foreground/50">Hanoi, Vietnam • IP: 192.168.1.1</span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-between items-center border-b border-border/50 pb-4">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-card rounded-full">
                <Smartphone className="w-5 h-5 text-foreground/70" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-foreground">iPhone 14 Pro • Safari</span>
                <span className="text-xs text-foreground/50">Hanoi, Vietnam • Last active: 2 hours ago</span>
              </div>
            </div>
            <button className="text-xs font-medium text-red-400 hover:text-red-300 transition-colors">Revoke</button>
          </div>
        </div>
        
        <div className="flex justify-start mt-2">
          <button className="text-sm font-semibold text-red-400 hover:text-red-300 transition-colors">
            Sign out of all other sessions
          </button>
        </div>
      </div>

    </div>
  );
}