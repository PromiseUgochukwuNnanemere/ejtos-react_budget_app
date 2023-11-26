// import React from 'react';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import Remaining from './components/Remaining';
// import ExpenseTotal from './components/ExpenseTotal';

// //Code to import Budget.js
// import Budget from './components/Budget';

// // Add code to import the other components here under
// import AllocationForm from './components/AllocationForm';
// import ExpenseItem from './components/ExpenseItem';
// import ExpenseList from './components/ExpenseList';

// import { AppProvider } from './context/AppContext';
// const App = () => {
//     return (
//         <AppProvider>
//             <div className='container'>
//                 <h1 className='mt-3'>Company's Budget Allocation</h1>
//                     <div className='row mt-3'>
//                         {
                           
//                             // Budget component
//                            <div className='col-sm'>
//                                 <Budget />
//                             </div>
//                         }        

//                         {
//                             /* Add Remaining component here*/
//                             //Remaining component
//                             <div className='col-sm'>
//                                 <Remaining />
//                             </div>
//                         }        

//                         {
//                             /* Add ExpenseTotal component here */
//                             //ExpenseTotal component
//                             <div className='col-sm'>
//                                 <ExpenseTotal />
//                             </div>
//                         }        
                       
//                         {
//                             /* Add ExpenseList component here */
//                             <div className='col-sm'>
//                                 <ExpenseList/>
//                             </div>
//                         }         

//                         {
//                             /* Add ExpenseItem component here */
//                             <div className='col-sm'>
//                                 <ExpenseItem/>
//                             </div>
//                         }        

//                         {
//                             /* Add AllocationForm component here under */
//                             <div className='col-sm'>
//                                 <AllocationForm/>

//                             </div>
//                         }        

//                 </div>
//             </div>
//         </AppProvider>
//     );
// };
// export default App;



import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import RemainingBudget from './components/Remaining';

const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <Budget />
                    </div>
                    <div className='col-sm'>
                        <RemainingBudget />
                    </div>
                    <div className='col-sm'>
                        <ExpenseTotal />
                    </div>
                </div>
                <h3 className='mt-3'>Allocation</h3>
                <div className='row '>
                    <div className='col-sm'>
                        <ExpenseList />
                    </div>
                </div>
                <h3 className='mt-3'>Change allocation</h3>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <AllocationForm/>
                    </div>
                </div>
            </div>
        </AppProvider>
    );
};

export default App;
