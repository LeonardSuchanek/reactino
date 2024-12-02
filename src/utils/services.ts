import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DropResult } from "react-beautiful-dnd";

interface Item {
    id: string;
    content: string;
}

interface Row {
    items: Item[];
}

type Rows = { [key: string]: Row };

const onDragEnd = (result: DropResult, rows: Rows, setRows: React.Dispatch<React.SetStateAction<Rows>>) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
        const sourceRow = rows[source.droppableId];
        const destRow = rows[destination.droppableId];
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
    } else {
        const row = rows[source.droppableId];
        const copiedItem = [...row.items];
        const [removed] = copiedItem.splice(source.index, 1);
        copiedItem.splice(destination.index, 0, removed);
        setRows({
            ...rows,
            [source.droppableId]: {
                ...row,
                items: copiedItem,
            },
        });
    }
};

const handleSubmit = (rows: Rows, setRows: React.Dispatch<React.SetStateAction<Rows>>, items: Item[]) => {
    const answer = "function ProjectsPage() { return <h1> Hello World </h1> }";
    const res = rows.Answer.items.map((item) => item.content).join(" ");
    console.log(res);
    if (res === answer) {
        toast.success('Well done! That is the correct answer', {
            position: "top-right",
            autoClose: false,
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
            autoClose: false,
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

const services = {
    onDragEnd,
    handleSubmit
}

export default services;