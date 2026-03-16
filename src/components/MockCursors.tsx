"use client";

import { useEffect, useState } from "react";
import { MousePointer2 } from "lucide-react";

type Cursor = {
    id: string;
    x: number;
    y: number;
    color: string;
    name: string;
};

export function MockCursors() {
    const [cursors, setCursors] = useState<Cursor[]>([
        { id: "c1", x: 400, y: 300, color: "text-blue-500", name: "Alice" },
        { id: "c2", x: 800, y: 500, color: "text-green-500", name: "Bob" },
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCursors((prev) =>
                prev.map((c) => ({
                    ...c,
                    x: Math.max(0, Math.min(window.innerWidth - 100, c.x + (Math.random() - 0.5) * 150)),
                    y: Math.max(0, Math.min(window.innerHeight - 100, c.y + (Math.random() - 0.5) * 150)),
                }))
            );
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
            {cursors.map((cursor) => (
                <div
                    key={cursor.id}
                    className="absolute transition-all duration-1000 ease-out flex flex-col items-start drop-shadow-md"
                    style={{ transform: `translate(${cursor.x}px, ${cursor.y}px)` }}
                >
                    <MousePointer2 className={`w-5 h-5 ${cursor.color} fill-current`} />
                    <div className={`px-2 py-0.5 rounded-full text-[10px] font-bold text-white shadow-sm mt-1 ml-3 bg-opacity-90 ${cursor.color.replace('text', 'bg')}`}>
                        {cursor.name}
                    </div>
                </div>
            ))}
        </div>
    );
}
