import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import services from "../../../utils/services";
import Option from "../../Option";
import {
    DragDropContext,
    Draggable,
    Droppable,
    DropResult,
} from "react-beautiful-dnd";
import { ToastContainer } from "react-toastify";
import Button from "../../Button";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Item {
    id: string;
    content: string;
    color: string;
}

interface Row {
    items: Item[];
}

type Rows = { [key: string]: Row };

const onDragEnd = (
    result: DropResult,
    rows: Rows,
    setRows: React.Dispatch<React.SetStateAction<Rows>>
) => {
    if (!result.destination) return;

    const { source, destination } = result;

    // Check if the source and destination are the same
    if (
        source.droppableId === destination.droppableId &&
        source.index === destination.index
    ) {
        return;
    }

    const sourceRow = rows[source.droppableId];
    const destRow = rows[destination.droppableId];

    if (!sourceRow || !destRow) {
        console.error("Invalid source or destination row");
        return;
    }

    const sourceItems = [...sourceRow.items];
    const destItems = [...destRow.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);

    setRows({
        ...rows,
        [source.droppableId]: {
            ...sourceRow,
            items: sourceItems,
        },
        [destination.droppableId]: {
            ...destRow,
            items: destItems,
        },
    });
};

const handleSubmit = (rows: Rows, setRows: React.Dispatch<React.SetStateAction<Rows>>, items: Item[]) => {
    const answer = "function ProjectsPage() { return <h1> Hello World </h1> }";
    const res = rows.Answer.items.map((item) => item.content).join(" ");
    console.log(res);
    if (res === answer) {
        toast.success('Well done! That is the correct answer', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        setRows({
            Question: {
                items: items,
            },
            Answer: {
                items: [],
            },
        });
    } else {
        toast.error('Oops! That is the wrong answer', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        setRows({
            Question: {
                items: items,
            },
            Answer: {
                items: [],
            },
        });
    }
};

const L1C2 = () => {
    const items = [
        { id: uuid(), content: "function", color: "bg-yellow-200" },
        { id: uuid(), content: "ProjectsPage()", color: "bg-white" },
        { id: uuid(), content: "{", color: "bg-white" },
        { id: uuid(), content: "}", color: "bg-white" },
        { id: uuid(), content: "</h1>", color: "bg-white" },
        { id: uuid(), content: "<h1>", color: "bg-white" },
        { id: uuid(), content: "return", color: "bg-white" },
        { id: uuid(), content: "Hello World", color: "bg-white" },
    ];

    const rowsBackend: Rows = {
        Question: {
            items: items,
        },
        Answer: {
            items: [],
        },
    };

    const [rows, setRows] = useState(rowsBackend);

    const [winReady, setwinReady] = useState(false);
    useEffect(() => {
        setwinReady(true);
    }, []);

    return (
        <main className="max-w-7xl md:justify-self-center">
            <DragDropContext onDragEnd={(result) => onDragEnd(result, rows, setRows)}>
                <div>
                    <h1 className="font-bold text-4xl md:text-5xl mb-1">
                        Bringe die Bauteile einer Komponente in die richtige Reihenfolge.
                    </h1>
                    <p className="text-xl md:text-2xl mb-3">
                        Ziehe dafür die Bauteile in der richtigen Reigenfolge auf die Linie.
                        Zum Prüfen deiner Antwort nutze den Button.
                    </p>
                    <div className="answer-wrapper mt-10 bg-yellow-200 h-14 ">
                        {winReady ? (
                            <Droppable droppableId="Answer" direction="horizontal">
                                {(provided, snapshot) => {
                                    return (
                                        <div
                                            className="answers flex gap-2 w-full h-auto"
                                            ref={provided.innerRef}
                                            {...provided.droppableProps}
                                        >
                                            {rows["Answer"].items.map((item, index) => {
                                                return (
                                                    <Draggable
                                                        key={item.id}
                                                        draggableId={item.id}
                                                        index={index}
                                                    >
                                                        {(provided, snapshot) => {
                                                            return (
                                                                <div
                                                                    ref={provided.innerRef}
                                                                    {...provided.draggableProps}
                                                                    {...provided.dragHandleProps}
                                                                    className={`${item.color} p-4 
                                                                    relative before:absolute before:w-6 before:h-6 before:rounded-full before:bg-white 
                                                                    before:top-[-12px] before:left-[50%] before:transform before:translate-x-[-50%] 
                                                                    after:absolute after:w-6 after:h-6 after:rounded-full after:bg-cyan-200 
                                                                    after:bottom-[-12px] after:left-[50%] after:transform after:translate-x-[-50%]`}
                                                                >
                                                                    {item.content}
                                                                </div>
                                                            );
                                                        }}
                                                    </Draggable>
                                                );
                                            })}
                                            {provided.placeholder}
                                        </div>
                                    );
                                }}
                            </Droppable>
                        ) : null}

                        <br />
                    </div>
                    {winReady ? (
                        <Droppable droppableId="Question" direction="horizontal">
                            {(provided, snapshot) => {
                                return (
                                    <div
                                        className="Question option-wrapper mt-16 flex items-start gap-2 h-28"
                                        ref={provided.innerRef}
                                        {...provided.droppableProps}
                                    >
                                        {rows["Question"].items.map((item, index) => {
                                            return (
                                                <Draggable
                                                    key={item.id}
                                                    draggableId={item.id}
                                                    index={index}
                                                >
                                                    {(provided, snapshot) => {
                                                        return <Option item={item} provided={provided} />;
                                                    }}
                                                </Draggable>
                                            );
                                        })}
                                        {provided.placeholder}
                                    </div>
                                );
                            }}
                        </Droppable>
                    ) : null}

                    <div className="mt-10 mb-10 md:mt-5">
                        <Button
                            onClick={() => services.handleSubmit(rows, setRows, items)}
                            color="red"
                            buttonText="Prüfe dein Antwort"
                        />
                    </div>
                </div>
            </DragDropContext>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

            <div className="fixed bottom-0 left-0 w-full bg-cyan-200 flex justify-center p-4 md:relative md:p-0 md:bg-transparent">
                <Link to="/">
                    <Button buttonText="← Zurück" className="mr-4 mb-4" color="lime" />
                </Link>
                <Link to="/lesson/1/chapter/2">
                    <Button buttonText="Aufgabe 2 →" className="" color="red" />
                </Link>
            </div>
        </main>
    );
};

export default L1C2;
