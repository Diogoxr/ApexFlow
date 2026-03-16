import { Hash, Plus, Circle, Settings, Sparkles } from "lucide-react";

export function Sidebar() {
    return (
        <aside className="w-64 border-r border-[#333] bg-[#000] h-screen flex flex-col py-4 shrink-0">
            {/* Brand */}
            <div className="px-4 mb-8 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-white rounded-md flex items-center justify-center">
                        <div className="w-3 h-3 bg-black rounded-sm" />
                    </div>
                    <span className="font-semibold text-white tracking-wide text-sm">ApexFlow</span>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto px-3 space-y-6">
                {/* Teams */}
                <div>
                    <h3 className="text-xs font-semibold text-[#888] mb-2 px-2 uppercase tracking-wider">Teams</h3>
                    <div className="space-y-1">
                        <button className="w-full flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-[#111] text-[#ededed] text-sm transition-colors">
                            <span className="w-5 h-5 rounded flex items-center justify-center bg-[#1a1a1a] border border-[#333] text-[10px]">E</span>
                            Engineering
                        </button>
                        <button className="w-full flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-[#111] text-[#888] text-sm transition-colors">
                            <span className="w-5 h-5 rounded flex items-center justify-center bg-[#1a1a1a] border border-[#333] text-[10px]">D</span>
                            Design
                        </button>
                    </div>
                </div>

                {/* Active Rooms */}
                <div>
                    <div className="flex items-center justify-between px-2 mb-2">
                        <h3 className="text-xs font-semibold text-[#888] uppercase tracking-wider">Active Rooms</h3>
                        <button className="text-[#888] hover:text-white"><Plus size={14} /></button>
                    </div>
                    <div className="space-y-1">
                        <button className="w-full flex items-center justify-between px-2 py-1.5 rounded-md bg-[#111] text-white text-sm transition-colors border border-[#333]">
                            <div className="flex items-center gap-2">
                                <Hash size={14} className="text-[#888]" />
                                <span>Frontend Sync</span>
                            </div>
                            <div className="flex -space-x-1">
                                <div className="w-4 h-4 rounded-full bg-blue-500 border border-[#111]"></div>
                                <div className="w-4 h-4 rounded-full bg-green-500 border border-[#111]"></div>
                            </div>
                        </button>
                        <button className="w-full flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-[#111] text-[#888] text-sm transition-colors">
                            <Hash size={14} />
                            <span>Design Crit</span>
                        </button>
                    </div>
                </div>

                {/* My Tasks */}
                <div>
                    <h3 className="text-xs font-semibold text-[#888] mb-2 px-2 uppercase tracking-wider">My Tasks</h3>
                    <div className="space-y-1">
                        <div className="flex items-center justify-between px-2 py-1.5 rounded-md hover:bg-[#111] transition-colors group cursor-pointer text-[#ededed]">
                            <div className="flex items-center gap-2 overflow-hidden">
                                <Circle size={12} className="text-red-500 shrink-0" />
                                <span className="text-sm truncate">Fix CRDT conflict logic</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between px-2 py-1.5 rounded-md hover:bg-[#111] transition-colors group cursor-pointer text-[#888]">
                            <div className="flex items-center gap-2 overflow-hidden">
                                <Circle size={12} className="text-yellow-500 shrink-0" />
                                <span className="text-sm truncate group-hover:text-[#ededed]">Build command palette</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between px-2 py-1.5 rounded-md hover:bg-[#111] transition-colors group cursor-pointer text-[#888]">
                            <div className="flex items-center gap-2 overflow-hidden">
                                <Circle size={12} className="text-blue-500 shrink-0" />
                                <span className="text-sm truncate group-hover:text-[#ededed]">Database schemas</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Online Members / Bottom */}
            <div className="mt-auto px-4 pt-4 border-t border-[#333]">
                {/* Upgrade Banner */}
                <div className="mb-4 p-3 rounded-lg bg-gradient-to-br from-[#1a1a1a] to-[#111] border border-[#333] relative overflow-hidden group border-dashed">
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#888] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <p className="text-xs font-medium text-white mb-1"><Sparkles size={12} className="inline mr-1 text-yellow-500 mb-0.5" />Upgrade to Pro</p>
                    <p className="text-[10px] text-[#888] mb-2 leading-tight">Unlock custom branding and untethered real-time rooms.</p>
                    <button className="w-full text-[10px] font-semibold bg-white text-black py-1.5 rounded-md hover:bg-neutral-200 transition-colors shadow-sm">Upgrade Plan</button>
                </div>

                <button className="w-full flex items-center gap-2 px-2 py-2 rounded-md hover:bg-[#111] text-[#888] text-sm transition-colors mb-4">
                    <Settings size={16} />
                    <span>Settings</span>
                </button>
                <div className="flex items-center gap-3 px-2 py-2 rounded-md hover:bg-[#11] transition-colors cursor-pointer border border-[#333] bg-[#0a0a0a]">
                    <div className="relative">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-zinc-800 to-zinc-600"></div>
                        <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-[#000]"></div>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm font-medium text-white leading-none">Diogo</span>
                        <span className="text-[10px] text-[#888] mt-1">Online</span>
                    </div>
                </div>
            </div>
        </aside>
    );
}
