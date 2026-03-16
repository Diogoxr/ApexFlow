"use client";

import { useState } from "react";
import { Mic, MicOff, Video, VideoOff, PhoneOff, MonitorUp, Settings, GripHorizontal } from "lucide-react";

export function CallInterface({ onClose }: { onClose: () => void }) {
    const [isMuted, setIsMuted] = useState(false);
    const [isVideoOff, setIsVideoOff] = useState(false);

    return (
        <div className="fixed bottom-6 right-6 w-80 bg-[#111] border border-[#333] rounded-xl shadow-2xl overflow-hidden font-sans z-[60] flex flex-col cursor-move">
            {/* Header */}
            <div className="flex items-center justify-between px-3 py-2 bg-[#0a0a0a] border-b border-[#333]">
                <div className="flex items-center gap-2">
                    <div className="flex -space-x-1 pl-1">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    </div>
                    <span className="text-xs font-medium pl-2 text-[#888]">Frontend Sync (02:45)</span>
                </div>
                <GripHorizontal size={14} className="text-[#555]" />
            </div>

            {/* Video Grid Mock */}
            <div className="relative h-48 bg-black flex p-2 gap-2">
                <div className="flex-1 rounded-lg bg-zinc-900 border border-[#333] flex items-center justify-center relative overflow-hidden">
                    {isVideoOff ? (
                        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-zinc-800 to-zinc-600 flex items-center justify-center text-xl font-bold text-white">D</div>
                    ) : (
                        <div className="absolute inset-0 bg-blue-900/20 backdrop-blur-sm flex items-center justify-center">
                            <span className="text-[#888] text-xs">Camera Feed</span>
                        </div>
                    )}
                    <div className="absolute bottom-2 left-2 bg-black/60 px-2 py-0.5 rounded text-[10px] text-white backdrop-blur-md">Diogo (You)</div>
                    {isMuted && <div className="absolute top-2 right-2 bg-red-500/80 p-1 rounded-full"><MicOff size={10} className="text-white" /></div>}
                </div>

                <div className="flex-1 rounded-lg bg-zinc-900 border border-[#333] flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-purple-900/20 backdrop-blur-sm flex items-center justify-center">
                        <span className="text-[#888] text-xs">Alice's Feed</span>
                    </div>
                    <div className="absolute bottom-2 left-2 bg-black/60 px-2 py-0.5 rounded text-[10px] text-white backdrop-blur-md">Alice</div>
                </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-3 p-3 bg-[#0a0a0a] border-t border-[#333]">
                <button
                    onClick={() => setIsMuted(!isMuted)}
                    className={`p-2.5 rounded-full transition-colors ${isMuted ? 'bg-red-500/20 text-red-500 hover:bg-red-500/30' : 'bg-[#1a1a1a] text-[#ededed] hover:bg-[#222]'}`}
                >
                    {isMuted ? <MicOff size={18} /> : <Mic size={18} />}
                </button>
                <button
                    onClick={() => setIsVideoOff(!isVideoOff)}
                    className={`p-2.5 rounded-full transition-colors ${isVideoOff ? 'bg-red-500/20 text-red-500 hover:bg-red-500/30' : 'bg-[#1a1a1a] text-[#ededed] hover:bg-[#222]'}`}
                >
                    {isVideoOff ? <VideoOff size={18} /> : <Video size={18} />}
                </button>
                <button className="p-2.5 rounded-full bg-[#1a1a1a] text-[#ededed] hover:bg-[#222] transition-colors">
                    <MonitorUp size={18} />
                </button>
                <button className="p-2.5 rounded-full bg-[#1a1a1a] text-[#ededed] hover:bg-[#222] transition-colors">
                    <Settings size={18} />
                </button>
                <button
                    onClick={onClose}
                    className="p-2.5 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors ml-2 shadow-lg shadow-red-500/20"
                >
                    <PhoneOff size={18} />
                </button>
            </div>
        </div>
    );
}
