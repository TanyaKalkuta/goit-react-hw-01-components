import React from 'react';
import PropTypes from 'prop-types';
import styles from "./TransactionsHistory.module.css"

const TransactionHistory = ({ items }) => (
  <table className={styles.transaction_history}>
  <thead className={styles.table_head}>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
   </thead>
   
  <tbody>
      {items.map(({ id, type, amount, currency}) => (
       <tr key={id} className={styles.table_item}>
         <td>{type}</td>
         <td>{amount}</td>
         <td>{currency}</td>
       </tr>
       ))}
    
   
  </tbody>  
</table>
)

TransactionHistory.propTypes = {
   items: PropTypes.array.isRequired
};

export default TransactionHistory;