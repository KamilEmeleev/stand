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

import { transactions, TransactionTypes } from '../../helpers';

import { sum } from './utils';

const transactionTypes: TransactionTypes = {
  success: <Tag variant="action" label="Исполнена" size="s" />,
  declined: <Tag variant="warning" label="Отклонена" size="s" />,
};

export const FinancialTransactionsWidget = () => {
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
                    color={amount > 0 ? 'success' : 'error'}
                    noWrap
                  >
                    {sum(amount)}
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
