import { FC } from 'react';

import { BillIcon, CloseIcon, TickIcon } from '@ozen-ui/icons';
import { Button } from '@ozen-ui/kit/Button';
import { Divider } from '@ozen-ui/kit/Divider';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  type DrawerProps,
  DrawerTitle,
} from '@ozen-ui/kit/Drawer';
import { spacing } from '@ozen-ui/kit/MixSpacing';
import { Skeleton } from '@ozen-ui/kit/Skeleton';
import { Stack } from '@ozen-ui/kit/Stack';
import { Typography } from '@ozen-ui/kit/Typography';
import { useBreakpoints } from '@ozen-ui/kit/useBreakpoints';

import type {
  Order,
  OrderStatus as OrderStatusType,
} from '../../../../helpers';
import { dictionary, formatDate, randomWidth } from '../../utils';
import { OrderStatus } from '../OrderStatus';

import s from './OrdersPageDrawer.module.css';

export type OrdersPageDrawerProps = DrawerProps & {
  order?: Order;
  loading?: boolean;
};

export const OrdersPageDrawer: FC<OrdersPageDrawerProps> = ({
  open,
  onClose,
  order,
  loading,
}) => {
  const { m } = useBreakpoints();
  const isMobile = !m;

  return (
    <Drawer
      open={open}
      size={isMobile ? 's' : 'l'}
      onClose={onClose}
      placement="right"
      windowProps={{
        className: s.window,
      }}
      disablePortal
      hideBackdrop
      disableClickOutside
      disableScrollLock
    >
      <DrawerHeader>
        <DrawerTitle>
          {loading ? (
            <Skeleton
              variant="typography"
              typographyVariant="heading-2xl"
              width={180}
            />
          ) : (
            `Заказ № ${order?.id}`
          )}
        </DrawerTitle>
      </DrawerHeader>
      <DrawerBody>
        <Stack direction="column" gap="3xl" fullWidth>
          <Stack
            fullWidth
            gap="m"
            direction="column"
            divider={
              <Divider flexItem orientation="horizontal" color="secondary" />
            }
          >
            {order &&
              Object.entries(order).map(([key, value]) => {
                return (
                  <Stack gap="xl" key={key} className={s.item} fullWidth>
                    <div>
                      {loading ? (
                        <Skeleton
                          variant="typography"
                          typographyVariant="text-m"
                          width={100}
                        />
                      ) : (
                        <Typography color="secondary">
                          {dictionary[key]}
                        </Typography>
                      )}
                    </div>
                    <div>
                      {loading ? (
                        <Skeleton
                          variant="typography"
                          typographyVariant="text-m"
                          width={randomWidth(140, 200)}
                        />
                      ) : (
                        <Typography>
                          {key === 'date' && formatDate(value)}
                          {key === 'status' && (
                            <OrderStatus status={value as OrderStatusType} />
                          )}
                          {key !== 'date' && key !== 'status' && value}
                        </Typography>
                      )}
                    </div>
                  </Stack>
                );
              })}
          </Stack>
          {!loading && (
            <Stack
              gap="m"
              justify="start"
              className={spacing({ mb: 'xl' })}
              fullWidth
            >
              <Button iconLeft={TickIcon} size="s" variant="outlined">
                Принять
              </Button>
              <Button
                iconLeft={CloseIcon}
                size="s"
                color="error"
                variant="outlined"
              >
                Отклонить
              </Button>
            </Stack>
          )}
        </Stack>
      </DrawerBody>
      <Divider color="secondary" />
      <DrawerFooter className={s.footer}>
        {loading ? (
          <Skeleton
            width={200}
            variant="typography"
            typographyVariant="text-m"
          />
        ) : (
          <Button variant="function" iconLeft={BillIcon} color="secondary">
            Скачать чек операции
          </Button>
        )}
      </DrawerFooter>
    </Drawer>
  );
};
