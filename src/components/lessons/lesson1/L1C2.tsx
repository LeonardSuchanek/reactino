import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import Option from "../../Option";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
import Button from "../../Button";
import { Link } from "react-router-dom";
import Toast, { ToastType } from "../../Toast";

interface Item {
  id: string;
  content: string;
}

interface Row {
  items: Item[];
}

type Rows = { [key: string]: Row };

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

  const [toast, setToast] = useState<{
    message: string;
    type: ToastType;
  } | null>(null);

  const [winReady, setwinReady] = useState(false);
  useEffect(() => {
    setwinReady(true);
  }, []);

  const onDragEnd = (
    result: DropResult,
    rows: Rows,
    setRows: React.Dispatch<React.SetStateAction<Rows>>
  ) => {
    if (!result.destination) return;

    const { source, destination } = result;

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

  const handleSubmit = (
    rows: Rows,
    items: Item[],
    setToast: React.Dispatch<{ message: string; type: ToastType } | null>
  ) => {
    const answer = "function ProjectsPage() { return <h1> Hello World </h1> }";
    const res = rows.Answer.items.map((item) => item.content).join(" ");
    console.log(res);
    if (res === answer) {
      setToast({
        message: "Super! Das ist die richtige Antwort.",
        type: "success",
      });
    } else {
      setToast({
        message: "Falsch, denke nochmal scharf nach!",
        type: "error",
      });
    }

    setTimeout(() => setToast(null), 5000);
  };

  return (
    <main className="max-w-7xl md:justify-self-center">
      <DragDropContext onDragEnd={(result) => onDragEnd(result, rows, setRows)}>
        <div>
          <p className="text-xl font-bold md:text-2xl">Aufgabe 2</p>

          <h1 className="font-bold text-4xl md:text-5xl mb-1">
            Bringe die Bauteile einer Komponente in die richtige Reihenfolge.
          </h1>
          <p className="text-xl md:text-2xl mb-3">
            Ziehe dafür die Bauteile in der richtigen Reigenfolge auf die Linie.
            Zum Prüfen deiner Antwort nutze den Button.
          </p>
          <div className="answer-wrapper mt-10 bg-cyan-100 padding-2 h-12 ">
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
                                  className="border-black border-2 bg-yellow-400 hover:bg-yellow-200 text-xl p-2"
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
              onClick={() => handleSubmit(rows, items, setToast)}
              color="red"
              buttonText="Prüfe dein Antwort"
            />
          </div>
        </div>
      </DragDropContext>
      {toast && <Toast message={toast.message} type={toast.type} />}
      <div className="fixed bottom-0 left-0 w-full bg-cyan-200 flex justify-center p-4 md:relative md:p-0 md:bg-transparent">
        <Link to="/">
          <Button buttonText="← Zurück" className="mr-4 mb-4" color="lime" />
        </Link>
        <Link to="/lesson/2">
          <Button buttonText="Nächste Lektion →" className="" color="red" />
        </Link>
      </div>
    </main>
  );
};

export default L1C2;
