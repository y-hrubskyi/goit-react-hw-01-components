import PropTypes from 'prop-types';

import {
  TBodyData,
  TBodyRow,
  THead,
  THeadCell,
  TransactionsTable,
} from './TransactionHistory.styled';

export function TransactionHistory({ transactions }) {
  const tBodyRows = transactions.map(({ id, type, amount, currency }) => (
    <TBodyRow key={id}>
      <TBodyData>{type}</TBodyData>
      <TBodyData>{amount}</TBodyData>
      <TBodyData>{currency}</TBodyData>
    </TBodyRow>
  ));

  return (
    <TransactionsTable>
      <THead>
        <tr>
          <THeadCell>Type</THeadCell>
          <THeadCell>Amount</THeadCell>
          <THeadCell>Currency</THeadCell>
        </tr>
      </THead>

      <tbody>{tBodyRows}</tbody>
    </TransactionsTable>
  );
}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
