import { type FC } from 'react';

import type { SectionMessageProps } from '@ozen-ui/kit/SectionMessage';
import { SectionMessage as OzenSectionMessage } from '@ozen-ui/kit/SectionMessage';

import './SectionMessage.css';

export const SectionMessage: FC<SectionMessageProps> = ({
  children,
  ...other
}) => (
  <OzenSectionMessage {...other} className="unstyled">
    {children}
  </OzenSectionMessage>
);
