import React from 'react'
import { useForm } from '../hooks/useForm';

const TodoAdd = ( {handleNewTodo} ) => {

  const { description, onInputChange, onResetForm } = useForm({
		description: '',
	});


  const onFormSubmit = e => {
		e.preventDefault();

		if (description.length <= 1) return;

		let newTodo = {
			id: new Date().getTime(),
			description: description,
			done: false,
		};

		handleNewTodo(newTodo);
		onResetForm();
	};


  return (
    <>
      <div className="add-todo">
        <form onSubmit={onFormSubmit}>
          <input
            type='text'
            className='input-add'
            name='description'
            value={description}
            onChange={onInputChange}
            placeholder='What is to be done?  '
          />

          <button className='btn-add' type='submit'>
            Add Task
          </button>
        </form>
      </div>
    </>
  )
}

export default TodoAdd