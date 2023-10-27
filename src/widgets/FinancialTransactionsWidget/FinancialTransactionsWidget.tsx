import { ReactElement } from 'react';

import { spacing } from '@ozen-ui/kit/MixSpacing';
import { Stack } from '@ozen-ui/kit/Stack';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@ozen-ui/kit/Table';
import { Tag } from '@ozen-ui/kit/Tag';
import { Typography } from '@ozen-ui/kit/Typography';

enum TransactionType {
  success = 'success',
  declined = 'declined',
}

type TransactionTypes = {
  [key in TransactionType]: ReactElement;
};

const transactionTypes: TransactionTypes = {
  success: <Tag variant="action" label="Исполнена" size="s" />,
  declined: <Tag variant="warning" label="Отклонена" size="s" />,
};

export const FinancialTransactionsWidget = () => {
  const transactions = [
    {
      type: TransactionType.success,
      name: {
        first: 'Операция 1',
        second: 'Списание',
      },
      date: '27.08.2023',
      amount: '- 9 500,00 ₸',
    },
    {
      type: TransactionType.success,
      name: {
        first: 'Операция 2',
        second: 'Списание',
      },
      date: '27.08.2023',
      amount: '- 16 500,00 ₸',
    },
    {
      type: TransactionType.success,
      name: {
        first: 'Операция 3',
        second: 'Пополнение',
      },
      date: '03.05.2023',
      amount: '+ 546 400,00 ₸',
    },
    {
      type: TransactionType.declined,
      name: {
        first: 'Операция 4',
        second: 'Пополнение',
      },
      date: '06.04.2023',
      amount: '+ 17 450,00 ₸',
    },
  ];

  return (
    <Stack direction="column" fullWidth>
      <Typography
        variant="text-xl_1"
        align="left"
        className={spacing({ mb: 'l' })}
      >
        Финансовые операции
      </Typography>
      <Typography color="tertiary" align="left">
        События получены на основе финансовой платформы
      </Typography>
      <TableContainer>
        <Table size="s" fullWidth>
          <TableHead>
            <TableRow>
              <TableCell align="left">Наименование</TableCell>
              <TableCell align="left">Статус</TableCell>
              <TableCell align="left">Дата</TableCell>
              <TableCell align="left">Сумма</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map(({ type, name, date, amount }, index) => (
              <TableRow key={index} hover>
                <TableCell>
                  <Typography variant="text-m" noWrap>
                    {name.first}
                  </Typography>
                  <Typography variant="text-s" color="secondary" noWrap>
                    {name.second}
                  </Typography>
                </TableCell>
                <TableCell>{transactionTypes[type]}</TableCell>
                <TableCell>
                  <Typography variant="text-m">{date}</Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    variant="text-m_1"
                    color={amount.indexOf('-') > -1 ? 'error' : 'success'}
                    noWrap
                  >
                    {amount}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
};
