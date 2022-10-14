import { FormControl, FormHelperText, InputLabel, OutlinedInput } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';

QuantityField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,

    label: PropTypes.string,
    disabled: PropTypes.bool,
};

function QuantityField(props) {
    const { form, name, label, disabled } = props;
    // const { errors } = form;
    // const hasError = !!errors[name];
    const { formState: { errors } } = form;
    const hasError = errors[name];

    return (
        <FormControl error={hasError} fullWidth margin="normal" variant="outlined">
            <InputLabel htmlFor={name}>{label}</InputLabel>
            <Controller
                name={name}
                control={form.control}
                render={({ onChange, onBlur, value, name }) => (
                    <OutlinedInput
                        onChange={onChange}
                        onBlur={onBlur}
                        id={name}
                        type={"number"}
                        label={label}
                        disabled={disabled}
                        value={value}


                    // helperText={errors[name]?.message}
                    />
                )}
            />
            <FormHelperText>{errors[name]?.message}</FormHelperText>
        </FormControl>
    );
}

export default QuantityField;