import React, { useContext, useEffect } from "react";
import { CCsContext } from "../../contexts/ccsContext";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 220,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function CCSelect() {
  const { ccs, getCCs } = useContext(CCsContext);

  useEffect(() => {
    getCCs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const classes = useStyles();

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">CC List</InputLabel>
        <Select native label="Assign CC">
          <option aria-label="None" value="" />
          {ccs.map((cc) => {
            return (
              <option key={cc.id} value={cc.id}>
                {cc.name}
              </option>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}
