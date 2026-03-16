"use client";

import { Sidebar } from "@/components/Sidebar";
import { KanbanBoard } from "@/components/KanbanBoard";
import { MockCursors } from "@/components/MockCursors";
import { CallInterface } from "@/components/CallInterface";
import { useState } from "react";

export default function Home() {
  const [isCallActive, setIsCallActive] = useState(false);

  return (
    <div className="flex h-screen w-full bg-[#000] text-[#ededed] overflow-hidden font-sans">
      <Sidebar />
      <main className="flex-1 flex flex-col h-screen min-w-0">
        <header className="h-14 border-b border-[#333] flex items-center px-6 shrink-0 bg-[#000]">
          <h1 className="text-sm font-medium">Frontend Sync</h1>
          <div className="ml-auto flex items-center gap-4 text-sm text-[#888]">
            <button className="hover:text-white transition-colors">Share</button>
            <button onClick={() => setIsCallActive(true)} className="px-3 py-1.5 bg-white text-black rounded-md font-medium text-xs hover:bg-neutral-200 transition-colors">Join Call</button>
          </div>
        </header>
        <div className="flex-1 overflow-auto p-6 bg-[#000]">
          <MockCursors />
          <KanbanBoard />
          {isCallActive && <CallInterface onClose={() => setIsCallActive(false)} />}
        </div>
      </main>
      <aside className="w-72 border-l border-[#333] bg-[#000] flex flex-col shrink-0">
        <div className="h-14 border-b border-[#333] flex items-center px-4 shrink-0">
          <h2 className="text-sm font-medium">Activity Stream & Chat</h2>
        </div>
        <div className="flex-1 p-4 overflow-y-auto">
          {/* Fake stream items */}
          <div className="space-y-4">
            <div className="flex gap-3 text-sm">
              <div className="w-6 h-6 rounded-full bg-blue-500 shrink-0"></div>
              <div>
                <p className="text-[#ededed] leading-tight"><span className="font-medium text-white">Alice</span> moved <span className="text-white">"Fix CRDT conflict logic"</span> to In Progress</p>
                <span className="text-[10px] text-[#888]">2 mins ago</span>
              </div>
            </div>
            <div className="flex gap-3 text-sm">
              <div className="w-6 h-6 rounded-full bg-green-500 shrink-0"></div>
              <div>
                <p className="text-[#ededed] leading-tight"><span className="font-medium text-white">Bob</span> joined the room</p>
                <span className="text-[10px] text-[#888]">5 mins ago</span>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Input Placeholder */}
        <div className="p-4 border-t border-[#333]">
          <div className="w-full bg-[#111] border border-[#333] rounded-md px-3 py-2 flex items-center">
            <span className="text-xs text-[#888]">Message... (markdown)</span>
          </div>
        </div>
      </aside>
    </div>
  );
}
