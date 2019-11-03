import React from 'react';
import styled from 'styled-components';
import Task from './task';
import { Droppable } from 'react-beautiful-dnd';

const Container = styled.div`
    margin:8px;
    border: 1px solid lightgrey;
    border-radius: 2px;    
`;
const Title = styled.h3`
    padding: 8px;
`;
const TaskList = styled.div`
    padding:8px;
`;

export default class Column extends React.Component<any> {

    render() {
        return (
            <Container>
                <Title>{this.props.column.title}</Title>
                <Droppable droppableId={this.props.column.id}>
                    {
                        (droppableProvided:any) => (
                            <TaskList
                            ref={droppableProvided.innerRef}
                            >
                                {this.props.tasks.map((task: any, index: any) => <Task key={task.id} task={task} index={index} />)}
                                {droppableProvided.placeholder}
                            </TaskList>
                        )
                    }
                </Droppable>
            </Container>
        );
    }
}