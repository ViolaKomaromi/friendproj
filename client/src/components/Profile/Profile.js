/* eslint-disable no-unused-vars */
import React, { useState} from "react";
import axios from "axios";
import { FaUserCircle } from "react-icons/fa";
import { makeStyles, Container, TextField, Grid} from '@material-ui/core'
import FormControl from '@material-ui/core/FormControl';
import clsx from 'clsx';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Radio from '@material-ui/core/Radio';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import { useForm } from "react-hook-form";



// Inspired by blueprintjs
function StyledRadio(props) {
  const classes = useStyles();

  return (
    <Radio
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    '&:hover': {
      backgroundColor: 'transparent',
      
    },
  },
  container: {
    
    display: 'flex',
    flexWrap: 'wrap',
  },
  group: {
    width: 'auto',
    height: 'auto',
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    
},
  icon: {
    borderRadius: '50%',
    width: 16,
    height: 16,
    boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: '#f5f8fa',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '$root.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },
    'input:hover ~ &': {
      backgroundColor: '#ebf1f5',
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'rgba(206,217,224,.5)',
    },
  },
  checkedIcon: {
    backgroundColor: '#137cbd',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: '#106ba3',
    },
  },
  Submit:{
    marginTop: 30,
    // color: 'blue',
  // marginLeft: 100,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  Grid: {
    marginTop: 40,
  },
  TextField:{ 
    width: '90%',
    // marginLeft: 'auto',
    // marginRight: 'auto', 
       marginLeft: theme.spacing(1),
       marginRight: theme.spacing(1),           
    // marginTop: 30,
    // marginLeft: 100,   
},
}));


 





export default  function Profile () {
  const [success, setSuccess] = useState();
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  // const onSubmit = (data) => console.log(data);
  const classes = useStyles();


  // const [user, setUser] = useState({});
  const [image, setImage] = useState({preview: false, raw: ""})
  const [user, setUser] = useState({});


  

 
  //when you select a profile picture
  const fileHandler = (e) => {
    //if any file selected store file info into state variable
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0]
      })
    }
  }



    //to handle changes on other form elements
    const changeHandler = (e) => {
      setUser({...user, [e.target.name]:e.target.value})
    }


    
    //if the form submited by clicking on submit button
    const onSubmit = (data) => {
      console.log('data', data)
      const fd = new FormData();
      fd.append('fullname',data.fullname);
      fd.append('gender',data.gender);
      fd.append('bio',data.bio);
      fd.append('hobbies', data.hobbies);
      fd.append('beverages', data.beverages);
      fd.append('dishes', data.dishes);
      fd.append('states', data.states);
      fd.append('cities', data.cities);
      fd.append('file', image.raw, image.preview);
      
      

    

      axios({
        method: 'POST',
        url: '/profile/create',
        baseURL: 'http://localhost:4001',
        data: fd,
        headers: {
          "Content-Type": "multipart/formdata"
        }
      }).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    };
    

    
    
    

    
    
    const PopperMy = function (props) {
        return <popper {...props} style={styles.popper} placement="bottom-start" />;
    };
    const styles = (theme) => ({
        popper: {
          width: "fit-content"
        }
    });

    

  return (
    <Container  maxWidth="md">
         <Grid container alignItems="center" justifyContent="center" direction="column">
                <div className="container rounded text-center mt-3 col-md-7 col-sm-10 col-xs-12">
                  <div className="bg-light border p-md-5 p-sm-2 p-xs-1 rounded">
                    <h4 className="text-dark mb-5 mt-3">
                      My Profile
                    </h4>
                    <h4 className="text-dark mb-5 mt-3">
                      Hallo
                    </h4>
                      {success && (
                      <div className="alert alert-success" role="alert">
                        {success}
                      </div>
                    )}
                    <hr />

                    <form 
                      className="form m-5"
                      encType="multipart/form-data"
                    >
                      {/* upload Image */}
                      <label htmlFor="upload-button" className="float-left mb-3">
                        {/* image preview */}
                        {image.preview ? (
                          <img
                            src={image.preview}
                            alt="profile-pic"
                            className="rounded-circle ml-3"
                            style={{
                              width: "100px",
                              height: "100px",
                              boxShadow: "3px 3px 6px 2px #173F5F",
                            }}
                          />
                        ) : (
                          <span
                            style={{ float: "left" }}
                            className="ml-3 mb-4 d-flex flex-direction-column align-items-start"
                          >
                            <span className="text-dark col-3">
                              <FaUserCircle
                                style={{ fontSize: "xxx-large", float: "left" }}
                              />
                            </span>
                            <br />
                            <h6 className="text-secondary col-7">Upload photo</h6>
                          </span>
                        )}
                      </label>

                      <input {...register('userImg')}
                        type="file"
                        name="userImg"
                        style={{ display: "none" }}
                        id="upload-button"
                        onChange={fileHandler}
                      />
                      <br />
                    </form>
                    
       <form onSubmit={handleSubmit(onSubmit)}>
            <TextField 
                {...register('fullname')}
                name={"fullname"} 
                // variant="outlined"
                placeholder="Enter Full Name"
                fullWidth
                margin="dense"
                
            />
          <Container>
          <Grid style={{display: "flex", alignItems:"center", flexirection:"row"}} >
                    <Select {...register("gender")}>
                  <MenuItem value="female" control={<StyledRadio />}>female</MenuItem>
                  <MenuItem value="male" control={<StyledRadio />}>male</MenuItem>
                  <MenuItem value="other" control={<StyledRadio />}>other</MenuItem>
                </Select>
           
              <TextField style={{width:"100%" }}
                    // variant="outlined"
                    placeholder="Write awesome things about yourself"
                    multiline
                    rows={5}
                    rowsMax={10}
                    label="Bio" 
                    // variant="filled"
                    {...register('bio')}
                    name="bio"
                  />
             </Grid >
            </Container>
            <hr />
        <div className={classes.root}>
      <Autocomplete 
        PopperComponent={PopperMy}
        multiple
        filterSelectedOptions= "true"
        size="small"
        options={hobbies}
        getOptionLabel={(options) => options.title}
        defaultValue={[hobbies[13]]}
        renderInput={(params) => (
          <TextField {...params} 
          variant="standard"  placeholder="Hobbies" {...register("hobbies")}
          
          name={"hobbies"} 
          />
        )}
      />
      <Autocomplete   
        multiple
        size="small"
        options={dishes}
        getOptionLabel={(options) => options.title}
        defaultValue={[dishes[13]]}
        renderInput={(params) => (
          <TextField {...params} variant="standard"  placeholder="Dishes" {...register("dishes")}
          name= {"dishes"}
          />
        )}
      />
      <Autocomplete    
        multiple
        size="small"
        option={beverages}
        getOptionLabel={(option) => option.title}
        defaultValue={[beverages[13]]}
        renderInput={(params) => (
        <TextField {...params} variant="standard" placeholder="Beverages" {...register("beverages")}
        name={"beverages"}
        />
        )}
      />
     
    </div>
         <div className={classes.root}>
                    
                      <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="grouped-native-select">State</InputLabel>
                        <select native defaultValue="" id="grouped-native-select" {...register('states')} name="states">
                          <option aria-label="None" value="states" />
                          <optgroup label="states">
                          
                            <option value="Berlin">Berlin</option>
                            <option value="Brandenburg">Brandenburg</option>
                            <option value="Hesse">Hesse</option>
                            <option value="Saarland">Saarland</option>
                          </optgroup>
                          <optgroup label="states">
                            <option value="Saxony-Anhalt">Saxony-Anhalt</option>
                            <option value="Rhineland-Palatinate">Rhineland-Palatinate</option>
                            <option value="Lower Saxony">Lower Saxony</option>
                            <option value="Baden-Württemberg">Baden-Württemberg</option>
                            <option value="Baden-Württemberg">North Rhine-Westphalia</option>
                          </optgroup>
                        </select>
                      </FormControl>
                      <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="grouped-select">City</InputLabel>
                        <Select defaultValue="" id="grouped-select"
                        {...register('cities')} name="cities">
                          <MenuItem value="cities">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem label="cities" value="Berlin">Berlin</MenuItem>
                          <MenuItem label="cities" value="Hamburg">Hamburg</MenuItem>
                          <MenuItem label="cities" value="Essen">Essen</MenuItem>
                          <MenuItem label="cities" value="Cologne">Cologne</MenuItem>
                          <MenuItem label="cities" value="Stuttgart">Stuttgart</MenuItem>
                          <MenuItem label="cities" value="Leipzig">Leipzig</MenuItem>
                          <MenuItem label="cities" value="Dortmund">Dortmund</MenuItem>
                          <MenuItem label="cities" value="Hannover">Hannover</MenuItem>
                          <MenuItem label="cities" value="Nuremberg">Nuremberg</MenuItem>
                          <MenuItem label="cities" value="Duisburg">Duisburg</MenuItem>
                          <MenuItem label="cities" value="City">Bochum</MenuItem>
                          <MenuItem label="cities" value="Bochum">Wuppertal</MenuItem>
                          <MenuItem label="cities" value="Bielefeld">Bielefeld</MenuItem>
                          <MenuItem label="cities" value="Bonn">Bonn</MenuItem>
                          <MenuItem label="cities" value="Münster">Münster</MenuItem>
                          <MenuItem label="cities" value="Karlsruhe">Karlsruhe</MenuItem>
                          <MenuItem label="cities" value="Mannheim">Mannheim</MenuItem>
                          <MenuItem label="cities" value="Augsburg">Augsburg</MenuItem>
                          <MenuItem label="cities" value="Kassel">Kassel</MenuItem>
                          <MenuItem label="cities" value="Mönchengladbach">Mönchengladbach</MenuItem>
                          <MenuItem label="cities" value="Gelsenkirchen">Gelsenkirchen</MenuItem>
                          <MenuItem label="cities" value="Braunschweig">Braunschweig</MenuItem>
                          <MenuItem label="cities" value="Aachen">Aachen</MenuItem>
                          <MenuItem label="cities" value="Kiel">Kiel</MenuItem>
                          <MenuItem label="cities" value="Chemnitz">Chemnitz</MenuItem>
                          <MenuItem label="cities" value="Halle">Halle</MenuItem>
                          <MenuItem label="cities" value="Magdeburg">Magdeburg</MenuItem>
                          <MenuItem label="cities" value="Krefeld">Krefeld</MenuItem>
                          <MenuItem label="cities" value="Potsdam">Potsdam</MenuItem>
                          <MenuItem label="cities" value="Oldenburg">Oldenburg</MenuItem>
                          <MenuItem label="cities" value="Mülheim">Mülheim</MenuItem>
                          <MenuItem label="cities" value="Bremerhaven">Bremerhaven</MenuItem>
                          <MenuItem label="cities" value="Reutlingen">Reutlingen</MenuItem>
                          <MenuItem label="cities" value="Heilbronn">Heilbronn</MenuItem>
                          <MenuItem label="cities" value="Tübingen">Tübingen</MenuItem>
                          <MenuItem label="cities" value="Konstanz">Konstanz</MenuItem>
                          <MenuItem label="cities" value="Brandenburg">Brandenburg</MenuItem>
                          <MenuItem label="cities" value="Ravensburg">Ravensburg</MenuItem>
                          <MenuItem label="cities" value="Cloppenburg">Cloppenburg</MenuItem>
                        </Select>
                      </FormControl>
                    <div className={classes.Submit}>
                    <input type="submit" value="Submit" />
                  </div>
                </div>
                 </form>
              </div>
            </div>
            </Grid>
            </Container>
  );
};













// 
const hobbies = [
  { title: 'Singing' },
  { title: 'Movies' },
  { title: 'Dancing' },
  { title: 'Swimming' },
  { title: 'Cooking' },
  { title: 'Football' },
  { title: 'Computer' },
  { title: 'Shopping' },
  { title: 'Yoga' },
  { title: 'Gardening' },
  { title: 'VolleyBall' },
  { title: 'Card games' },
  { title: 'Cleaning' },
  { title: 'Karaoke' },
  { title: 'Jogging' },
  { title: 'Skiing' },
  { title: 'Reading' },
  { title: 'Fishing' },
];
const dishes = [
{ title: 'German' },
{ title: 'Asian' },
{ title: 'Italian' },
{ title: 'Costa Rican' },
{ title: 'Greek' },
{ title: 'Italian' },
{ title: 'Canadian' },
{ title: 'African' },
{ title: 'Indian' },
{ title: 'British' },
{ title: 'Chinese' },
{ title: 'Bolivian' },
{ title: 'Caribbean' },
{ title: 'Mexican' },
{ title: 'American' },
{ title: 'Austrian' },
{ title: 'Carrebean' },
{ title: 'Vietnameese' },
{ title: 'Thai' },
{ title: 'Russian' },
{ title: 'Turkish' },
{ title: 'Syrian' },
];
const beverages = [
  { title: 'Beer' },
  { title: 'Cider' },
  { title: 'Rum' },
  { title: 'Whisky' },
  { title: 'Wine' },
  { title: 'Vodka' },
  { title: 'Coffee' },
  { title: 'Hot Chocolate' },
  { title: 'Hot Tea' },
  { title: 'Water' },
  { title: 'Non-alcoholic' },
  { title: 'Milk' },
  { title: 'Cocktails' },
  { title: 'Orange Juice' },
  { title: 'Soft Drinks' },
  { title: 'Lemonade' },
  { title: 'Gin' },
  { title: 'Natural Still Wines' },
  { title: 'Sparkling Wines' },
  { title: 'Brandy' },
  { title: 'Tequila' },
  { title: 'Soda' },
];
