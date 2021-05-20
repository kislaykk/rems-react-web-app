/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    marginBottom: theme.spacing(6),
  },
}));

export default function PropertyCard({ property }) {
  const classes = useStyles();

  return (
    <Card className={classes.root} key={property.id}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {property.name}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            street:
            {property.address.street}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            locality:
            {property.address.locality}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            city:
            {property.address.city}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            state:
            {property.address.state}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            pin:
            {property.address.pin}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Grid
          container
          direction="row"
          justify="flex-end"
        >
          <IconButton size="small" color="primary" variant="contained">
            <EditIcon />
          </IconButton>
          <IconButton size="small" color="secondary" variant="contained">
            <DeleteIcon />
          </IconButton>

        </Grid>
      </CardActions>
    </Card>
  );
}
