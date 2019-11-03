import React from 'react';
import ReactDOM from 'react-dom';
import initialData from './initial-data';
import Column from './column';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';


class App extends React.Component {
    state = initialData;

    onDragEnd = (result: DropResult) => {
        const { destination, source, draggableId } = result;
        console.log(result);
        if (!destination) {
            return;
        }

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        const column = (this.state.columns as any)[source.droppableId];
        const newTaskIds = Array.from(column.taskIds);
        newTaskIds.splice(source.index, 1);
        newTaskIds.splice(destination.index, 0, draggableId);

        const newColumn = { ...column, taskIds: newTaskIds, };

        const newState = {
            ...this.state,
            columns: {
                ...this.state.columns, // spread is not important if we only have 1 column, but it's a good practice
                [newColumn.id]: newColumn, // override the column
            },
        };

        this.setState(newState);
    }

    render() {
        return <DragDropContext
            onDragEnd={this.onDragEnd}
        >
            {this.state.columnOrder.map((columnId: string) => {
                const column = (this.state.columns as any)[columnId];

                const tasks = column.taskIds.map((taskId: string) => {
                    return (this.state.tasks as any)[taskId]
                }
                );

                return <Column key={column.id} column={column} tasks={tasks} />
            })
            };
        </DragDropContext>

    }
}
ReactDOM.render(<App />, document.getElementById('root'));
