import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { eventsList } from "@/data/mockData";

export function BlockchainEvents() {
  return (
    <section className="flex flex-col flex-1">
      <div className="flex items-center justify-between mb-6 border-b border-border/50 pb-4 shrink-0">
        <h2 className="text-xl md:text-2xl font-bold text-foreground uppercase tracking-wider relative">
          Blockchain Event
          <span className="absolute -bottom-[18px] left-0 w-12 h-1 bg-primary rounded-full shadow-[0_0_10px_rgba(255,107,0,0.8)]"></span>
        </h2>
        <Link href="/category/blockchain-event" className="flex items-center gap-2 text-primary hover:text-foreground transition-colors text-sm font-semibold uppercase tracking-wider shrink-0">
          View All <ArrowRight size={16} />
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 flex-1">
        {eventsList.map((event, idx) => (
          <Link href={event.link} key={idx} className="flex flex-col gap-4 group skeuo-card velocity-glow-hover p-[6px] rounded-[20px] transition-transform hover:-translate-y-1 h-full">
            <div className="w-full aspect-[21/9] lg:aspect-video rounded-[14px] relative overflow-hidden shadow-inner shrink-0">
              <Image 
                src={event.img} 
                alt={event.title} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              
              {/* Date Badge */}
              <div className="absolute top-2 left-2 bg-[#0a0a0a] border border-[#333] rounded-lg px-3 py-2 flex flex-col items-center justify-center shadow-lg min-w-[50px]">
                <span className="text-[10px] font-bold text-foreground/70 uppercase tracking-widest leading-none mb-1">{event.month}</span>
                <span className="text-sm font-bold text-foreground leading-none">{event.date}</span>
              </div>
            </div>
            
            <div className="px-3 pb-3 pt-1 flex flex-col flex-1">
              <h3 className="font-semibold text-base leading-snug mb-1 text-foreground group-hover:text-primary transition-colors">
                {event.title}
              </h3>
              <p className="text-[11px] text-foreground/50 mb-3">{event.location}</p>
              <p className="text-sm text-foreground/80 line-clamp-2 leading-relaxed mt-auto">
                {event.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
