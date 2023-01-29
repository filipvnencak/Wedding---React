import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useFormControls } from "./validation-table-hook";

const RequestForm = () => {
  const [kido, setKido] = useState(0);
  const [partner, setPartner] = useState(0);
  const { errors, handleInputValue, handleFormSubmit, formIsValid } =
    useFormControls();

  return (
    <FormControl onSubmit={() => handleFormSubmit()}>
      <Stack width={"130%"} mt={10}>
        <Typography variant="subtitle1">Svadobný formulár</Typography>
        <TextField
          fullWidth
          onBlur={handleInputValue}
          onChange={handleInputValue}
          name="name"
          label="Meno a priezvisko"
          autoComplete="none"
          {...(errors["name"] && {
            error: true,
            helperText: errors["name"],
          })}
          sx={{ mb: "1vh" }}
        />
        <TextField
          fullWidth
          onBlur={handleInputValue}
          onChange={handleInputValue}
          name="email"
          label="E-mail"
          autoComplete="none"
          {...(errors["email"] && {
            error: true,
            helperText: errors["email"],
          })}
          sx={{ mb: "1vh" }}
        />
        <FormLabel id="demo-row-radio-buttons-group-label">
          Prídem na hostinu?
        </FormLabel>
        <RadioGroup row aria-labelledby="Prídem na hostinu?" name="attend">
          <FormControlLabel value={1} control={<Radio />} label="Áno" />
          <FormControlLabel value={0} control={<Radio />} label="Nie" />
        </RadioGroup>
        <TextField
          fullWidth
          multiline
          onBlur={handleInputValue}
          onChange={handleInputValue}
          name="allergy"
          label="Intolerancie a alergie"
          autoComplete="none"
          {...(errors["allergy"] && {
            error: true,
            helperText: errors["allergy"],
          })}
          sx={{ mb: "1vh" }}
        />
        <FormLabel id="demo-row-radio-buttons-group-label">
          Idem na hostinu autobusom?
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="Pôjdem na hostinu autobusom?"
          name="Bus"
        >
          <FormControlLabel value={1} control={<Radio />} label="Áno" />
          <FormControlLabel value={0} control={<Radio />} label="Nie" />
        </RadioGroup>
        <Button
          sx={{ mb: 3 }}
          variant="contained"
          onClick={() => setKido(kido + 1)}
        >
          Pridať dieťa
        </Button>{" "}
        {/* <Button
          sx={{ ml: 2, mb: 3 }}
          variant="contained"
          onClick={() => setKido(kido - 1)}
        >
          Ubrať dieťa
        </Button> */}
        {kido > 0 && (
          <Typography>
            Na hostinu idem s{" "}
            <TextField
              variant="standard"
              size="small"
              sx={{ minWidth: 3, maxWidth: 20, mb: 2, textAlign: "center" }}
              value={kido}
              onChange={(e) => setKido(+e.target.value)}
            />
            {kido > 1 ? " detmi" : " dieťaťom"}
          </Typography>
        )}
        {kido > 0 && (
          <TextField
            fullWidth
            multiline
            onBlur={handleInputValue}
            onChange={handleInputValue}
            name="kids_details"
            label="Intolerancie a alergie dieťaťa"
            autoComplete="none"
            {...(errors["kids_details"] && {
              error: true,
              helperText: errors["kids_details"],
            })}
            sx={{ mb: "1vh" }}
          />
        )}
        {partner == 0 && (
          <Button
            sx={{ mb: 2 }}
            variant="contained"
            onClick={() => setPartner(1)}
          >
            Pridať partnera
          </Button>
        )}
        {partner != 0 && (
          <>
            <Button
              sx={{ mb: 2 }}
              variant="contained"
              onClick={() => setPartner(0)}
            >
              Ubrať partnera
            </Button>
            <TextField
              fullWidth
              onBlur={handleInputValue}
              onChange={handleInputValue}
              name="partner_name"
              label="Meno partnera"
              autoComplete="none"
              {...(errors["partner_name"] && {
                error: true,
                helperText: errors["partner_name"],
              })}
              sx={{ mb: "1vh" }}
            />
            <TextField
              fullWidth
              multiline
              onBlur={handleInputValue}
              onChange={handleInputValue}
              name="partner_details"
              label="Intolerancie alebo alergie partnera"
              autoComplete="none"
              {...(errors["partner_details"] && {
                error: true,
                helperText: errors["partner_details"],
              })}
              sx={{ mb: "1vh" }}
            />
          </>
        )}
        <TextField
          fullWidth
          multiline
          onBlur={handleInputValue}
          onChange={handleInputValue}
          name="message"
          label="Odkaz pre nás"
          autoComplete="none"
          {...(errors["message"] && {
            error: true,
            helperText: errors["message"],
          })}
          sx={{ mb: "1vh" }}
        />
        <Button
          disabled={!formIsValid()}
          color="primary"
          type="submit"
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={handleFormSubmit}
        >
          Odoslať
        </Button>
      </Stack>
    </FormControl>
  );
};
export default RequestForm;
