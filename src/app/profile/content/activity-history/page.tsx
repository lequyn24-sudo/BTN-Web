import { Clock, BookOpen, Star, LogIn, Edit3, ArrowRight } from "lucide-react";

export default function ActivityHistoryPage() {
  const activities = [
    {
      id: 1,
      type: "read",
      title: "Read article: 'Bitcoin Surges Past $64K'",
      date: "Today at 10:45 AM",
      icon: <BookOpen className="w-4 h-4 text-blue-400" />,
      bgColor: "bg-blue-400/10"
    },
    {
      id: 2,
      type: "save",
      title: "Saved article to 'Market Analysis' folder",
      date: "Today at 10:46 AM",
      icon: <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />,
      bgColor: "bg-yellow-400/10"
    },
    {
      id: 3,
      type: "comment",
      title: "Commented on 'The Future of DeFi'",
      date: "Yesterday at 4:20 PM",
      icon: <Edit3 className="w-4 h-4 text-green-400" />,
      bgColor: "bg-green-400/10",
      details: "Great write-up! I think Layer 2s will definitely be the narrative for the next bull run."
    },
    {
      id: 4,
      type: "login",
      title: "Logged in from new device (Windows 11)",
      date: "Oct 12, 2026 at 9:00 AM",
      icon: <LogIn className="w-4 h-4 text-purple-400" />,
      bgColor: "bg-purple-400/10"
    },
    {
      id: 5,
      type: "read",
      title: "Read article: 'Regulatory Crackdown: What It Means for Crypto Exchanges'",
      date: "Oct 10, 2026 at 2:15 PM",
      icon: <BookOpen className="w-4 h-4 text-blue-400" />,
      bgColor: "bg-blue-400/10"
    }
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Activity History</h1>
          <p className="text-foreground/60 text-sm">Review your recent actions and interactions on the platform.</p>
        </div>
        <button className="text-sm font-medium text-primary hover:underline w-fit">
          Clear History
        </button>
      </div>
      
      <div className="w-full h-[1px] bg-border/50 my-2"></div>
      
      {/* Timeline */}
      <div className="bg-black/20 rounded-xl border border-border/50 p-6 md:p-8">
        <div className="relative border-l border-border/50 ml-4 md:ml-6 space-y-8 pb-4">
          
          {activities.map((activity) => (
            <div key={activity.id} className="relative pl-8 md:pl-10">
              {/* Timeline Dot */}
              <div className={`absolute -left-5 top-0 w-10 h-10 rounded-full border-4 border-background ${activity.bgColor} flex items-center justify-center`}>
                {activity.icon}
              </div>
              
              {/* Content */}
              <div className="flex flex-col gap-1.5 pt-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <span className="text-sm font-medium text-white">{activity.title}</span>
                  <span className="text-xs text-foreground/50 flex items-center gap-1 shrink-0">
                    <Clock className="w-3 h-3" /> {activity.date}
                  </span>
                </div>
                
                {activity.details && (
                  <div className="mt-2 p-3 bg-white/5 border border-border/30 rounded-lg text-sm text-foreground/70 italic relative">
                    <div className="absolute top-0 left-4 -translate-y-full w-0 h-0 border-l-[6px] border-r-[6px] border-b-[8px] border-transparent border-b-white/5"></div>
                    "{activity.details}"
                  </div>
                )}
                
                {activity.type === "read" && (
                  <button className="text-xs font-semibold text-primary hover:underline flex items-center gap-1 w-fit mt-1">
                    Read again <ArrowRight className="w-3 h-3" />
                  </button>
                )}
              </div>
            </div>
          ))}

        </div>
        
        <div className="flex justify-center mt-8">
          <button className="px-6 py-2 bg-white/5 border border-border text-white text-sm font-semibold rounded-lg hover:bg-white/10 transition-colors">
            Load More Activity
          </button>
        </div>
      </div>

    </div>
  );
}