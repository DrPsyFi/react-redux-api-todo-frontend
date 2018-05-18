export const CHECK = 'CHECK'
export const ADD = 'ADD'
export const CHECK_ALL = 'CHECK_ALL'
export const DELETE = 'DELETE'

export const handleCheck = (id) => {
  return {
    type: CHECK,
    payload: id
  }
}

export const handleAdd = (newTodo) => {
  return {
    type: ADD,
    payload: newTodo
  }
}

export const handleCheckAll = (boolean_value) => {
  return {
    type: CHECK_ALL,
    payload: boolean_value
  }
}

export const handleDelete = () => {
  return {
    type: DELETE
  }
}
