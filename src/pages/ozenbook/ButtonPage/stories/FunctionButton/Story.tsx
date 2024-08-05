import { useRef } from 'react';

import { ChevronDownIcon, ChevronUpIcon } from '@ozen-ui/icons';
import { Button } from '@ozen-ui/kit/ButtonNext';
import { Collapse } from '@ozen-ui/kit/Collapse';
import { spacing } from '@ozen-ui/kit/MixSpacing';
import { Typography } from '@ozen-ui/kit/Typography';
import { useBoolean } from '@ozen-ui/kit/useBoolean';

export const Story = () => {
  const [expanded, { toggle }] = useBoolean(false);
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  return (
    <div style={{ width: '50%' }}>
      <Collapse
        expanded={expanded}
        collapsedSize={30}
        className={spacing({ pb: 'm' })}
        style={{
          position: 'relative',
        }}
      >
        <Typography ref={paragraphRef} variant="text-m">
          Давно выяснено, что при оценке дизайна и композиции читаемый текст
          мешает сосредоточиться. Lorem Ipsum используют потому, что тот
          обеспечивает более или менее стандартное заполнение шаблона, а также
          реальное распределение букв и пробелов в абзацах, которое не
          получается при простой дубликации.
        </Typography>
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            height: 20,
            width: '100%',
            background:
              'linear-gradient(to top,var(--color-background-main),transparent)',
            transform: expanded ? 'scaleY(0)' : 'scaleY(1)',
          }}
        />
      </Collapse>
      <Button
        onClick={toggle}
        variant="function"
        iconRight={expanded ? ChevronUpIcon : ChevronDownIcon}
      >
        {expanded ? 'Свернуть' : 'Еще'}
      </Button>
    </div>
  );
};
