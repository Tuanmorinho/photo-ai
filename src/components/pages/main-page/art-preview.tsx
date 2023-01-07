import OpenInFullRoundedIcon from '@mui/icons-material/OpenInFullRounded';
import FileDownloadRoundedIcon from '@mui/icons-material/FileDownloadRounded';
import { Box, Grid, IconButton, Stack, Typography } from "@mui/material";
import { NoImageIcon } from "asset/icon";
import { IPreviewImageStore } from "models";
import { useSelector } from "react-redux";
import { RootState } from "store-redux/store";
import { useEffect, useState } from 'react';

export function ArtPreview() {

    const previewImages: IPreviewImageStore = useSelector((state: RootState) => state.previewImages);   
    const [imgRemain, setImgRemain] = useState<number[]>([0, 1, 2, 3]); 

    useEffect(() => {
        if (previewImages.images.length < 4) {
            let imgRemainArrCount = [];

            for (let i = 0; i < 4 - previewImages.images.length; i++) {
                imgRemainArrCount.push(i);
            }
            setImgRemain(imgRemainArrCount);            
        }
    }, [previewImages])

    return (
        <Box sx={{ width: '100%' }}>
            <Stack direction='column' alignItems='stretch' justifyContent='flex-start'>
                <Box sx={{ width: '100%', textAlign: 'center' }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, lineHeight: '30px' }}>Art Preview</Typography>
                </Box>
                <Box sx={{ width: '100%', mt: '16px', backgroundColor: 'primary.light', borderRadius: '12px' }}>
                    <Grid container justifyContent='center' alignItems='stretch' sx={{ p: '8px' }}>
                        { previewImages.images.length !== 0 && previewImages.images.map((img, i) => (
                            <Grid key={i} item xs={12} lg={6} justifyContent='center' alignItems='center' sx={{ width: '100%', height: '100%', p: '8px'}}>
                                <Box sx={{ width: '100%', height: '344px', backgroundImage: `url(data:image/png;base64,${img})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', borderRadius: '8px', position: 'relative' }}>
                                    <Box sx={{ position: 'absolute', top: 10, right: 10 }}>
                                        <IconButton>
                                            <OpenInFullRoundedIcon />
                                        </IconButton>
                                    </Box>
                                    <Box sx={{ position: 'absolute', bottom: 10, left: 10 }}>
                                        <IconButton>
                                            <FileDownloadRoundedIcon />
                                        </IconButton>
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                        { imgRemain.length !== 0 && imgRemain.map(v => (
                            <Grid key={v} item xs={12} lg={6} justifyContent='center' alignItems='center' sx={{ width: '100%', height: '100%', p: '8px'}}>
                                <Box sx={{ width: '100%', height: '344px', background: 'linear-gradient(162.93deg, #4B9CFC -16.46%, #EF90FF 124.24%)', borderRadius: '8px' }}>
                                    <Stack sx={{ width: '100%', height: '100%' }} alignItems='center' justifyContent='center'>
                                        <NoImageIcon />
                                    </Stack>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Stack>
        </Box>
    );
}