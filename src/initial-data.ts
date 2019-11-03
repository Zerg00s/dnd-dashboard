const initialData = {
    tasks:{
        'task-1':{ id:'task-1', content:'Take out the garbage'},
        'task-2':{ id:'task-2', content:'Clean dishes'},
        'task-3':{ id:'task-3', content:'Fix the washroom'},
        'task-4':{ id:'task-4', content:'Water plants'},
        'task-5':{ id:'task-5', content:'Vacuum car'},
        'task-6':{ id:'task-6', content:'Dust the table'},
    },
    columns:{
        'column-1': {
            id:'column-1',
            title:'To do',
            taskIds: ['task-1', 'task-2', 'task-3','task-4']
        },
        'column-2': {
            id:'column-2',
            title:'In progress',
            taskIds: ['task-5', 'task-6']
        }
    },
    columnOrder: ['column-1','column-2'],
};


export default initialData;