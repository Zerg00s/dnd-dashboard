import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
    border: 1px solid lightgrey;
    border-radius: 2px;
    padding: 8px;
    margin-bottom: 8px
`;

export default class task extends React.Component<any> {
    render() {
        return (

            <Draggable
                draggableId={this.props.task.id}
                index={this.props.index}
            >
                {
                   (draggableProvided) => (
                        <Container
                            ref={draggableProvided.innerRef}
                            {...draggableProvided.draggableProps}
                            {...draggableProvided.dragHandleProps}
                        >
                            {this.props.task.content}
                        </Container>
                   )
                }

            </Draggable>
        );
    }
}