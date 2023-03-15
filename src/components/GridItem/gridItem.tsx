import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Box, Grid, Typography, CardActionArea } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import { CardContainer, Item } from './gridItem.style';
import { CardImage } from './gridItem.style';
import { grey } from '@mui/material/colors';
import img from 'public/assert/images/bot.png';
import AppContext from '../AppContext';

export default function ResponsiveCard(props: { dataFromApi: any }) {
  const { dataFromApi } = props;

  const blackColorShade = grey[900];
  // console.log(dataFromApi);

  //Adding useContext.
  const context = useContext(AppContext);
  const theme = context.mode.theme;
  const color = context.mode.color;
  const bgcolor = context.mode.bgColor;

  useEffect(() => {
    if (theme === 'light') {
      context.setMode({
        theme: 'dark',
        color: 'rgb(17,24,39)',
        bgColor: '#f8f8f8',
      });
    } else {
      context.setMode({
        theme: 'light',
        color: '#f8f8f8',
        bgColor: 'rgb(17,24,39)',
      });
    }
  }, []);
  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          width: '100vw',
          padding: '18px ',
          backgroundColor: `${theme}` === 'dark' ? '#fff' : 'black',
        }}
      >
        <Grid
          container
          spacing={{ xs: 2, md: 2 }}
          columns={{ xs: 1, sm: 8, md: 12 }}
        >
          {dataFromApi.map((curEle: { OrgName: string; link: string }) => {
            const url = curEle.link;
            return (
              <>
                <Grid item xs={4} sm={4} md={4}>
                  <Item>
                    <CardActionArea
                      sx={{ minWidth: '288px', backgroundColor: `${bgcolor}` }}
                    >
                      <Link href={url}>
                        {/* Link from -> Mui */}
                        <CardContainer>
                          <CardImage>
                            <Image
                              src={img}
                              alt="Bot Image"
                              width={140}
                              height={100}
                            />
                          </CardImage>
                          <CardContent>
                            <Typography
                              variant="h5"
                              color={blackColorShade}
                              gutterBottom
                              sx={{ color: `${color}` }}
                            >
                              {curEle.OrgName}
                            </Typography>
                          </CardContent>
                        </CardContainer>
                      </Link>
                    </CardActionArea>
                  </Item>
                </Grid>
              </>
            );
          })}
        </Grid>
      </Box>
    </>
  );
}
