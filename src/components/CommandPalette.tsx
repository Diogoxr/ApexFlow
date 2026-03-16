"use client";

import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { Hash, Plus, Settings, User } from "lucide-react";

export function CommandPalette() {
    const [open, setOpen] = useState(false);

    // Toggle the menu when ⌘K is pressed
    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
            // Close on escape
            if (e.key === "Escape") {
                setOpen(false);
            }
        };

        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, []);

    if (!open) return null;

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-start justify-center pt-[20vh]" onClick={() => setOpen(false)}>
            <div className="w-full max-w-lg bg-[#111] border border-[#333] rounded-xl shadow-2xl overflow-hidden font-sans" onClick={(e) => e.stopPropagation()}>
                <Command label="Global Command Menu" className="flex flex-col h-full w-full bg-transparent" loop>
                    <div className="flex items-center px-4 py-3 border-b border-[#333]">
                        <Command.Input
                            autoFocus
                            placeholder="Type a command or search..."
                            className="w-full bg-transparent outline-none text-[#ededed] placeholder:text-[#888] text-sm"
                        />
                    </div>
                    <Command.List className="max-h-[300px] overflow-y-auto p-2">
                        <Command.Empty className="py-6 text-center text-sm text-[#888]">No results found.</Command.Empty>

                        <Command.Group heading="Suggestions" className="px-2 py-1.5 text-xs font-semibold text-[#888] uppercase tracking-wider">
                            <Command.Item className="flex items-center gap-2 px-3 py-2 text-sm text-[#ededed] rounded-md hover:bg-[#1a1a1a] cursor-pointer aria-selected:bg-[#222]" onSelect={() => setOpen(false)}>
                                <Plus size={16} /> Create New Room
                            </Command.Item>
                            <Command.Item className="flex items-center gap-2 px-3 py-2 text-sm text-[#ededed] rounded-md hover:bg-[#1a1a1a] cursor-pointer aria-selected:bg-[#222]" onSelect={() => setOpen(false)}>
                                <User size={16} /> Assign Task to Diogo
                            </Command.Item>
                            <Command.Item className="flex items-center gap-2 px-3 py-2 text-sm text-[#ededed] rounded-md hover:bg-[#1a1a1a] cursor-pointer aria-selected:bg-[#222]" onSelect={() => setOpen(false)}>
                                <Settings size={16} /> Go to Settings
                            </Command.Item>
                        </Command.Group>

                        <Command.Group heading="Rooms" className="px-2 py-1.5 mt-2 text-xs font-semibold text-[#888] uppercase tracking-wider">
                            <Command.Item className="flex items-center gap-2 px-3 py-2 text-sm text-[#ededed] rounded-md hover:bg-[#1a1a1a] cursor-pointer aria-selected:bg-[#222]" onSelect={() => setOpen(false)}>
                                <Hash size={16} className="text-[#888]" /> Frontend Sync
                            </Command.Item>
                            <Command.Item className="flex items-center gap-2 px-3 py-2 text-sm text-[#ededed] rounded-md hover:bg-[#1a1a1a] cursor-pointer aria-selected:bg-[#222]" onSelect={() => setOpen(false)}>
                                <Hash size={16} className="text-[#888]" /> Design Crit
                            </Command.Item>
                        </Command.Group>
                    </Command.List>
                </Command>
            </div>
        </div>
    );
}
