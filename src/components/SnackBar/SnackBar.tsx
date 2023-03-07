import * as React from 'react';
import Stack from '@mui/material/Stack';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars() {
  const [open, setOpen] = React.useState(false);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    setOpen(false);
  };

  return (
    <>
      <Stack spacing={2} sx={{ width: '25%', margin: '24px auto' }}>
        <Alert severity="error">Invalid Credentials!</Alert>
      </Stack>
    </>
  );
}
