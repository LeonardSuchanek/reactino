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

const L1C2 = () => {
  const items = [
    { id: uuid(), content: "function", color: "bg-red-100" },
    { id: uuid(), content: "ProjectsPage()", color: "bg-pink-100" },
    { id: uuid(), content: "{", color: "bg-yellow-100" },
    { id: uuid(), content: "}", color: "bg-yellow-100" },
    { id: uuid(), content: "</h1>", color: "bg-red-100" },
    { id: uuid(), content: "<h1>", color: "bg-red-100" },
    { id: uuid(), content: "return", color: "bg-red-100" },
    { id: uuid(), content: "Hello World", color: "bg-red-100" },
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
    <main>
      <DragDropContext onDragEnd={(result) => onDragEnd(result, rows, setRows)}>
        <div>
          <h1 className="font-bold text-4xl mb-12">
            Bringe die Bauteile einer Komponente in die richtige Reihenfolge.
          </h1>
          <p>
            Ziehe dafür die Bauteile in der richtigen Reigenfolge auf die Linie.
            Zum Prüfen deiner Antwort nutze den Button.
          </p>
          <div className="answer-wrapper mt-10">
            {winReady ? (
              <Droppable droppableId="Answer" direction="horizontal">
                {(provided, snapshot) => {
                  return (
                    <div
                      className="answers flex gap-2 w-full h-10"
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
                                  className={`${item.color} shadow-lg py-2 px-4 rounded-lg`}
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

            <hr className=" border-gray-600" />
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

      <div className="">
        <Link to="/">
          <Button
            buttonText="Zurück zur Übersicht →"
            className=""
            color="lime"
          />
        </Link>
      </div>
    </main>
  );
};

export default L1C2;
