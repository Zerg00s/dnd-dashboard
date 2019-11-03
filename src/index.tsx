import React from 'react';
import ReactDOM from 'react-dom';
import initialData from './initial-data';
import Column from './column';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';


class App extends React.Component {
    state = initialData;

    onDragEnd = (result: DropResult) => {
        const { destination, source, draggableId } = result;
       
        if (!destination) {
            return;
        }

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        console.log(result);
        const sourceColumn = (this.state.columns as any)[source.droppableId];
        const destinationColumn = (this.state.columns as any)[destination.droppableId];

        const newSourceTaskIds = Array.from(sourceColumn.taskIds);
        newSourceTaskIds.splice(source.index, 1);

        const newDestinationTaskIds = Array.from(destinationColumn.taskIds);
        newDestinationTaskIds.splice(destination.index, 0, draggableId);

        const newSourceColumn = { ...sourceColumn, taskIds: newSourceTaskIds, };
        const newDestinationColumn = { ...destinationColumn, taskIds: newDestinationTaskIds, };

        const newState = {
            ...this.state,
            columns: {
                ...this.state.columns, // spread is not important if we only have 1 column, but it's a good practice
                [newSourceColumn.id]: newSourceColumn, // override the column
                [newDestinationColumn.id]: newDestinationColumn, // override the column
            },
        };

        console.log(newState);

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
