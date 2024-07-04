import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './entity/todo.entity';
import { CreateTodoInput, UpdateTodoInput } from './dto/inputs/index';

@Injectable()
export class TodoService {



    private todos = [
        {id: 1, description: 'Descripcion 1', done: false},
        {id: 2, description: 'Descripcion 2', done: true},
        {id: 3, description: 'Descripcion 3', done: false},
    ]

    findAll(): Todo[]{
        return this.todos;
    }

    findOne(id: number): Todo{
        const todo = this.todos.find (todo => todo.id === id);

        if ( !todo) throw new NotFoundException(`Todo with id ${id} not found`);

        return todo;
    }

    create(createTodoInput: CreateTodoInput): Todo {
        
        const todo = new Todo();
        todo.description = createTodoInput.description;
        todo.id = Math.max(...this.todos.map( todo=> todo.id), 0) + 1;
        this.todos.push(todo);
        return todo;
    }

    update(updateTodoInput: UpdateTodoInput) {
        
        const { id, description, done } = updateTodoInput;
        const todoToUpdate = this.findOne(id);
        if (description) todoToUpdate.description = description;
        if (done !== undefined) todoToUpdate.done = done;
        

        this.todos = this.todos.map( todo => {
            return (todo.id === id) ? todoToUpdate : todo;
        })

        return todoToUpdate;
    }
}