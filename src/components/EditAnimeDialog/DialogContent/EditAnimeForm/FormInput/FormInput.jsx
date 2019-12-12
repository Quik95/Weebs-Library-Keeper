import React, { memo } from 'react';
import PropTypes from 'prop-types';

// MUI
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import Grid from '@material-ui/core/Grid';

const FormInput = memo(function FormInput({ title, id, type = 'text' }) {
  const error = false;

  return (
    <Grid item xs={4}>
      <FormControl variant="outlined" error={error}>
        <InputLabel htmlFor={id}>{`Edit ${title}`}</InputLabel>
        <Input
          id={id}
          aria-describedby={`edit-anime-${title}`}
          variant="outlined"
          type={type}
        />
        {error && (
          <FormHelperText id={`${id}-helper-text`}>
            {`${title} helper text`}
          </FormHelperText>
        )}
      </FormControl>
    </Grid>
  );
});

FormInput.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default FormInput;
