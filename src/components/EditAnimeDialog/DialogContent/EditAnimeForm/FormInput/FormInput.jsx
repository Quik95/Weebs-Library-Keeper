import React from "react";
import PropTypes from "prop-types";

// MUI
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

//styles
import useStyles from "./FormInput.styles";

const FormInput = function FormInput({ title, id, type = "text", value }) {
  const classes = useStyles();
  const error = false;

  return (
    <Grid item xs={12} sm={6} md={4} className={classes.grid}>
      <TextField
        error={error}
        id={id}
        label={title}
        // value={value}
        defaultValue={value}
        variant="outlined"
        type={type}
      />
    </Grid>
  );
};

FormInput.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

export default FormInput;
