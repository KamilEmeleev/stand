import { type ChangeEvent, useEffect, useState } from 'react';

import { Button } from '@ozen-ui/kit/ButtonNext';
import { Card } from '@ozen-ui/kit/Card';
import { FilePicker } from '@ozen-ui/kit/FilePicker';
import { Grid, GridItem } from '@ozen-ui/kit/Grid';
import { Input } from '@ozen-ui/kit/Input';
import { Stack } from '@ozen-ui/kit/Stack';
import { Typography } from '@ozen-ui/kit/Typography';
import { useLocation } from 'wouter';

import { user } from '../../helpers';
import { BlogHeader } from '../BlogPage/components';

import s from './BlogWritePostPage.module.css';

export const BlogWritePostPage = () => {
  const [, setLocation] = useLocation();

  const [files, setFiles] = useState<File[]>([]);
  const [img, setImg] = useState('');

  useEffect(() => {
    if (!files[0]) return;
    const fr = new FileReader();

    fr.onload = function () {
      setImg(fr.result?.toString() || '');
    };

    fr.readAsDataURL(files[0]);
  }, [files]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFiles(e.target.files ? Array.from(e.target.files) : []);
  };

  const onClear = () => {
    setFiles([]);
    setImg('');
  };

  const renderActions = () => {
    return (
      <Stack gap="m">
        <Button
          color="secondary"
          variant="contained-additional"
          onClick={() => setLocation('/blog')}
        >
          Отмена
        </Button>
        <Button>Опубликовать</Button>
      </Stack>
    );
  };

  return (
    <>
      <BlogHeader user={user} renderActions={renderActions} />
      <Card borderWidth="none">
        <Grid cols={3}>
          <GridItem col={{ xs: 3, m: 1 }}>
            <Typography variant="text-xl_1">Основная информация</Typography>
          </GridItem>
          <GridItem col={{ xs: 3, m: 2 }} as={Stack} gap="l" direction="column">
            <Input label="Название" fullWidth />
            <Input label="Краткое описание" fullWidth />
          </GridItem>
        </Grid>
      </Card>
      <Card borderWidth="none">
        <Grid cols={3}>
          <GridItem col={{ xs: 3, m: 1 }}>
            <Typography variant="text-xl_1">Основное изображение</Typography>
          </GridItem>
          <GridItem col={{ xs: 3, m: 2 }} as={Stack} gap="l" direction="column">
            <img className={s.img} src={img} alt="" />
            <FilePicker
              fileList={files}
              onChange={onChange}
              onClear={onClear}
              accept="image/png, image/jpeg"
              placeholder="Загрузка изображения"
              fullWidth
            />
          </GridItem>
        </Grid>
      </Card>
    </>
  );
};
