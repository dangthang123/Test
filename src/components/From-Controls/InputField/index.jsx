import { RemoveCircleOutline } from '@mui/icons-material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Box, IconButton, TextField } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};
// const useStyles = makeStyles((theme) => ({
//   root: {},
//   box: {
//     // maxWidth: '150px',
//   }
// }));

function InputField(props) {
  // const classes = useStyles()
  const { form, name, label, disabled } = props;
  // const { errors, formState } = form;
  // const hasError = formState.touched[name] && errors[name];
  // console.log(errors[name], formState.touched[name]);
  const { formState: { errors } } = form;
  const { setValue } = form;
  const hasError = errors[name];
  console.log(hasError);
  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field: { onChange, onBlur, value, name, ref } }) => (
        <Box style={{ maxWidth: '150px', display: 'flex' }} >
          <IconButton onClick={() => setValue(name, Number.parseInt(value) ? Number.parseInt(value) - 1 : 1)}>
            <RemoveCircleOutline />
          </IconButton>
          <TextField
            size='small'
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            type={"number"}
            name={name}
            // label={label}
            disabled={disabled}

            // fullWidth
            error={!!hasError}
            helperText={errors[name]?.message}
          />
          <IconButton onClick={() => setValue(name, Number.parseInt(value) ? Number.parseInt(value) + 1 : 1)}>
            <AddCircleOutlineIcon />
          </IconButton>

        </Box>
      )}


    />
    // <div>
    //   <TextField fullWidth />
    // </div>

  );
}

export default InputField;
