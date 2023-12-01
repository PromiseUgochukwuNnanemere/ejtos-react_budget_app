
import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti'
import { AppContext } from '../context/AppContext';

// my code follows
import { FaMinusCircle } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

// My code follows
    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>£{props.cost}</td>
      

        {/*My code follows*/}
        <td onClick={event=> increaseAllocation(props.name)}><FaPlusCircle size='1.5em' color='green'/></td>
        <td onClick={event=> decreaseAllocation(props.name)}><FaMinusCircle size='1.5em' color='red'/></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;