//rfc
import fetch from 'cross-fetch';
import React,{useState} from 'react'
import {Form, Button} from 'react-bootstrap'
//import DatePicker from 'react-datepicker' se veía mal 
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function Stays() {
    const [open, setOpen] = React.useState(false);
    const [options, setOptions] = React.useState([]);
    const loading = open && options.length === 0;
    let countries;

    React.useEffect(() => {
        let active = true;
    

        if (!loading) {
          return undefined;
        }
    
        (async () => {
            //https://country.register.gov.uk/records.json?page-size=5000
            //http://localhost:55330/api/Countries/GetLocations?stringALocation=mex
          const response = await fetch('https://country.register.gov.uk/records.json?page-size=5000');
          countries = await response.json();

          /*
          let keys = Object.keys(countries).map(
            (key) => countries[key].Column1
            )
            */

           let keys = Object.keys(countries).map(function(key, index) {
                return countries[key].item[0]
                } 
            )

            let keys2 = Object.keys(countries).map(
                (key) =>  countries[key].item[0]
                )


          if (active) {

            setOptions(
                Object.keys(countries).map(
                    (key) =>  countries[key].item[0]
                    )
                );

          }
        })();
    
        return () => {
          active = false;
        };
      }, [loading]);
    
      React.useEffect(() => {
        if (!open) {
          setOptions([]);
        }
      }, [open]);

    const useStyles = makeStyles((theme) => ({
        container: {
          display: 'flex',
          flexWrap: 'wrap',
        },
        textField: {
          marginLeft: theme.spacing(1),
          marginRight: theme.spacing(1),
          width: 200,
        },
      }));

    const classes = useStyles();




    return (
        <div>
            <Form>
                <table >
                    <tbody>
                        <tr>
                            <td height="200px">
                            <h2> Find deals on hotels, homes and much more...</h2>
                            From cosy country homes to funky city flats                            

                            </td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td align="center" style={{width:"2000px"}}>

                                <table>
                                        <tbody>
                                        <tr>
                                            <td>
                                            < Autocomplete
                                                re
                                                id="location"
                                                style={{ width: 300 }}
                                                open={open}
                                                onOpen={() => {
                                                    setOpen(true);
                                                }}
                                                onClose={() => {
                                                    setOpen(false);
                                                }}
                                                getOptionSelected={(option, value) => option.name === value.name}
                                                getOptionLabel={(option) => option.name}
                                                options={options}
                                                loading={loading}
                                                renderInput={(params) => (
                                                    <TextField
                                                    {...params}
                                                    label="Asynchronous"
                                                    variant="outlined"
                                                    InputProps={{
                                                        ...params.InputProps,
                                                        endAdornment: (
                                                        <React.Fragment>
                                                            {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                                            {params.InputProps.endAdornment}
                                                        </React.Fragment>
                                                        ),
                                                    }}
                                                    />
                                                )}
                                                renderOption={(option, { selected }) => (
                                                    <React.Fragment>
                                                      <span className={classes.color} style={{ backgroundColor: option.color }} />
                                                      <div className={classes.text}>
                                                        {option.name}
                                                        <br />
                                                        {option.name}
                                                      </div>
                                                    </React.Fragment>
                                                  )}
                                                                                    />
                                            </td>
                                            <td>
                                            <TextField
                                                    id="checkIn"
                                                    label="Check In"
                                                    type="date"
                                                    defaultValue="2017-05-24"
                                                    variant="outlined" 
                                                    InputLabelProps={{
                                                    shrink: true,
                                                    }}
                                                />
                                            </td>
                                            <td>
                                            <TextField
                                                    id="checkOut"
                                                    label="Check Out"
                                                    type="date"
                                                    defaultValue="2017-05-24"
                                                    variant="outlined" 
                                                    InputLabelProps={{
                                                    shrink: true,
                                                    }}
                                                />
                                            </td>
                                            <td>
                                            <Form.Group controlId="formBasicEmail">
                                                        <Form.Control type="text" placeholder="" />
                                                </Form.Group>
                                            </td>
                                            <td>
                                                <Button variant="primary">Search</Button>
                                            </td>

                                            </tr>
                                        </tbody>
                                </table>    


                            </td>
                        </tr>
                    </tbody>

                </table>            
            </Form>                            

        </div>
    )
}
