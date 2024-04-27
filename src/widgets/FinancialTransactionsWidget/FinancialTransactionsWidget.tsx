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

import {
  paymentMethodsIcons,
  transactions,
  TransactionTypes,
} from '../../helpers';

import s from './FinancialTransactionsWidget.module.css';
import { sum } from './utils';

const transactionTypes: TransactionTypes = {
  success: <Tag variant="action" label="Исполнена" size="s" />,
  declined: <Tag variant="error" label="Отклонена" size="s" />,
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
              <TableCell align="left">Способ оплаты</TableCell>
              <TableCell align="left">Дата</TableCell>
              <TableCell align="left">Сумма</TableCell>
              <TableCell align="left">Статус</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map(
              ({ type, name, date, paymentMethod, amount }, index) => {
                const Icon = paymentMethodsIcons[paymentMethod.type];

                return (
                  <TableRow key={index} hover>
                    <TableCell verticalAlign="middle">
                      <Typography variant="text-m" noWrap>
                        {name.first}
                      </Typography>
                      <Typography variant="text-s" color="secondary" noWrap>
                        {name.second}
                      </Typography>
                    </TableCell>
                    <TableCell verticalAlign="middle">
                      <Stack gap="m" align="center">
                        <div className={s.paymentMethod}>
                          <Icon />
                        </div>
                        <Stack direction="column">
                          <Typography variant="text-s">
                            {paymentMethod.name}
                          </Typography>
                          <Typography variant="text-s" color="secondary">
                            {paymentMethod.number}
                          </Typography>
                        </Stack>
                      </Stack>
                    </TableCell>
                    <TableCell verticalAlign="middle">
                      <Typography variant="text-m">{date}</Typography>
                    </TableCell>
                    <TableCell verticalAlign="middle">
                      <Typography variant="text-m_1" noWrap>
                        {sum(amount)}
                      </Typography>
                    </TableCell>
                    <TableCell verticalAlign="middle">
                      {transactionTypes[type]}
                    </TableCell>
                  </TableRow>
                );
              }
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
};
