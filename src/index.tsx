import React from "react";
import ReactDOM from "react-dom";
import initialData from "./initial-data";
import Column from "./column";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { Fab, Action } from "react-tiny-fab";
import "react-tiny-fab/dist/styles.css";
import { PrimaryButton, IconButton } from "office-ui-fabric-react/lib/Button";
import { ThemeGenerator } from "office-ui-fabric-react/lib/ThemeGenerator";
import { getTheme, createTheme } from "office-ui-fabric-react/lib/Styling";
import { initializeIcons } from "office-ui-fabric-react/lib/Icons";
import { Icon } from "office-ui-fabric-react/lib/Icon";

initializeIcons(/* optional base url */);

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
    let sourceColumn = (this.state.columns as any)[source.droppableId];
    let destinationColumn = (this.state.columns as any)[
      destination.droppableId
    ];

    let newSourceTaskIds = Array.from(sourceColumn.taskIds);
    newSourceTaskIds.splice(source.index, 1);
    let newDestinationTaskIds = Array.from(destinationColumn.taskIds);

    if (destination.droppableId === source.droppableId) {
      newDestinationTaskIds = newSourceTaskIds;
    }
    newDestinationTaskIds.splice(destination.index, 0, draggableId);

    let newSourceColumn = { ...sourceColumn, taskIds: newSourceTaskIds };
    let newDestinationColumn = {
      ...destinationColumn,
      taskIds: newDestinationTaskIds
    };

    let newState = {
      ...this.state,
      columns: {
        ...this.state.columns, // spread is not important if we only have 1 column, but it's a good practice
        [newSourceColumn.id]: newSourceColumn, // override the column
        [newDestinationColumn.id]: newDestinationColumn // override the column
      }
    };

    console.log(newState);
    this.setState(newState);
  };

  public render() {
    return (
      <React.Fragment>
        <Fab
          alwaysShowTitle={true}
          event="click"
          mainButtonStyles={{
            backgroundColor: "white",
            width: 36,
            height: 36,
            borderRadius: 23,
            color: "black"
          }}
          icon={<Icon iconName="CollapseMenu" />}
        >
          <Action
            text="Events"
            style={{
              backgroundColor: "white",
              width: 36,
              height: 36,
              borderRadius: 23,
              color: "red"
            }}
          >
            <Icon iconName="EventDate" />
          </Action>
          <Action
            text="Releases"
            style={{
              backgroundColor: "white",
              width: 36,
              height: 36,
              borderRadius: 23,
              color: "blue"
            }}
          >
           <Icon iconName="Rocket" />
          </Action>
        </Fab>

        <DragDropContext onDragEnd={this.onDragEnd}>
          {this.state.columnOrder.map((columnId: string) => {
            const column = (this.state.columns as any)[columnId];

            const tasks = column.taskIds.map((taskId: string) => {
              return (this.state.tasks as any)[taskId];
            });

            return <Column key={column.id} column={column} tasks={tasks} />;
          })}
        </DragDropContext>
      </React.Fragment>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
