"use client";

import { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable, DropResult } from "@hello-pangea/dnd";
import { Plus } from "lucide-react";

type Task = { id: string; content: string; tag: string; avatarColor: string };
type Columns = Record<string, { id: string; title: string; tasks: Task[] }>;

const initialColumns: Columns = {
    backlog: {
        id: "backlog", title: "Backlog", tasks: [
            { id: "t1", content: "Design System Specs", tag: "Design", avatarColor: "bg-purple-500" },
            { id: "t2", content: "API Architecture", tag: "Backend", avatarColor: "bg-yellow-600" }
        ]
    },
    in_progress: {
        id: "in_progress", title: "In Progress", tasks: [
            { id: "t3", content: "Liveblocks Integration", tag: "Infrastructure", avatarColor: "bg-blue-500" }
        ]
    },
    in_review: {
        id: "in_review", title: "In Review", tasks: [
            { id: "t4", content: "Holy Grail Layout", tag: "Frontend", avatarColor: "bg-green-500" }
        ]
    },
    done: {
        id: "done", title: "Done", tasks: []
    },
};

export function KanbanBoard() {
    const [columns, setColumns] = useState<Columns>(initialColumns);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => setIsMounted(true), []);

    const onDragEnd = (result: DropResult) => {
        if (!result.destination) return;
        const { source, destination } = result;

        if (source.droppableId !== destination.droppableId) {
            const sourceCol = columns[source.droppableId];
            const destCol = columns[destination.droppableId];
            const sourceTasks = [...sourceCol.tasks];
            const destTasks = [...destCol.tasks];
            const [removed] = sourceTasks.splice(source.index, 1);
            destTasks.splice(destination.index, 0, removed);

            setColumns({
                ...columns,
                [source.droppableId]: { ...sourceCol, tasks: sourceTasks },
                [destination.droppableId]: { ...destCol, tasks: destTasks },
            });
        } else {
            const column = columns[source.droppableId];
            const copiedTasks = [...column.tasks];
            const [removed] = copiedTasks.splice(source.index, 1);
            copiedTasks.splice(destination.index, 0, removed);

            setColumns({
                ...columns,
                [source.droppableId]: { ...column, tasks: copiedTasks },
            });
        }
    };

    if (!isMounted) return null;

    return (
        <div className="h-full flex gap-6 overflow-x-auto pb-4 items-start w-full">
            <DragDropContext onDragEnd={onDragEnd}>
                {Object.values(columns).map((column) => (
                    <div key={column.id} className="flex flex-col w-72 shrink-0 bg-[#0a0a0a] rounded-lg p-2 border border-[#222]">
                        <div className="flex items-center justify-between mb-3 px-2 mt-1">
                            <div className="flex items-center gap-2">
                                <h3 className="font-semibold text-sm text-[#ededed]">{column.title}</h3>
                                <span className="text-xs text-[#888] bg-[#1a1a1a] px-2 py-0.5 rounded-full border border-[#333]">{column.tasks.length}</span>
                            </div>
                            <button className="text-[#888] hover:text-white p-1"><Plus size={14} /></button>
                        </div>

                        <Droppable droppableId={column.id}>
                            {(provided, snapshot) => (
                                <div
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                    className={`flex-1 min-h-[150px] transition-colors rounded-md p-1 ${snapshot.isDraggingOver ? "bg-[#111]" : ""}`}
                                >
                                    <div className="space-y-3">
                                        {column.tasks.map((task, index) => (
                                            <Draggable key={task.id} draggableId={task.id} index={index}>
                                                {(provided, snapshot) => (
                                                    <div
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        className={`p-3 bg-[#111] border rounded-md shadow-sm transition-all group ${snapshot.isDragging ? "shadow-md shadow-black ring-1 ring-[#555] border-[#555]" : "border-[#333] hover:border-[#555]"}`}
                                                        style={{ ...provided.draggableProps.style }}
                                                    >
                                                        <p className="text-sm text-[#ededed] leading-snug">{task.content}</p>

                                                        <div className="mt-4 flex items-center justify-between">
                                                            <span className="text-[10px] px-2 py-0.5 rounded-sm bg-[#1a1a1a] text-[#888] border border-[#333] tracking-wide">{task.tag}</span>
                                                            <div className={`w-5 h-5 rounded-full ${task.avatarColor} border-2 border-[#111] ring-1 ring-[#333] opacity-80 group-hover:opacity-100 transition-opacity`}></div>
                                                        </div>
                                                    </div>
                                                )}
                                            </Draggable>
                                        ))}
                                        {provided.placeholder}
                                    </div>
                                </div>
                            )}
                        </Droppable>
                    </div>
                ))}
            </DragDropContext>
        </div>
    );
}
