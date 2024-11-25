import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import services from "../../../utils/services"
import Word from "../../Word";
import Option from "../../Option";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"
import { ToastContainer } from "react-toastify";
import Button from "../../Button";


const L1C2 = () => {
    const items = [
        { id: uuid(), content: "function" },
        { id: uuid(), content: "ProjectsPage()" },
        { id: uuid(), content: "{" },
        { id: uuid(), content: "}" },
        { id: uuid(), content: "</h1>" },
        { id: uuid(), content: "<h1>" },
        { id: uuid(), content: "return" },
        { id: uuid(), content: "Hello World" },
        { id: uuid(), content: ";" },
    ];

    const rowsBackend = {
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
        <main>
            <DragDropContext
                onDragEnd={(result) =>
                    services.onDragEnd(result, rows, setRows)
                }
            >
                <div>
                    <h2 className="text-3xl font-medium">
                        Bringe die Bauteile einer Komponente in die richtge Reihenfolge.
                    </h2>
                    <div className="answer-wrapper mt-10">
                        {winReady ? (
                            <Droppable
                                droppableId="Answer"
                                direction="horizontal"
                            >
                                {(provided, snapshot) => {
                                    return (
                                        <div
                                            className="answers flex gap-2 w-full h-10"
                                            ref={provided.innerRef}
                                            {...provided.droppableProps}
                                        >
                                            {rows["Answer"].items.map(
                                                (item, index) => {
                                                    return (
                                                        <Draggable key={item} draggableId={item} index={index}>
                                                            {(provided, snapshot) => {
                                                                return (<Option item={item} provided={provided} />);
                                                            }}
                                                        </Draggable>
                                                    );
                                                }
                                            )}
                                            {provided.placeholder}
                                        </div>
                                    );
                                }}
                            </Droppable>
                        ) : null}

                        <hr className=" border-gray-600" />
                        <br />
                    </div>
                    {winReady ? (
                        <Droppable
                            droppableId="Question"
                            direction="horizontal"
                        >
                            {(provided, snapshot) => {
                                return (
                                    <div
                                        className="Question option-wrapper mt-16 flex items-start gap-2 h-28"
                                        ref={provided.innerRef}
                                        {...provided.droppableProps}
                                    >
                                        {rows["Question"].items.map(
                                            (item, index) => {
                                                return (
                                                    <Draggable
                                                        key={item.id}
                                                        draggableId={
                                                            item.id
                                                        }
                                                        index={index}
                                                    >
                                                        {(
                                                            provided,
                                                            snapshot
                                                        ) => {
                                                            return (
                                                                <Option
                                                                    item={
                                                                        item
                                                                    }
                                                                    provided={
                                                                        provided
                                                                    }
                                                                />
                                                            );
                                                        }}
                                                    </Draggable>
                                                );
                                            }
                                        )}
                                        {provided.placeholder}
                                    </div>
                                );
                            }}
                        </Droppable>
                    ) : null}

                    <div className="flex justify-center mt-10 md:mt-5">
                        <Button onClick={() => services.handleSubmit(rows, setRows, items)} color="red" buttonText="Prüfe dein Antwort" />
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
        </main >
    );
}

export default L1C2;