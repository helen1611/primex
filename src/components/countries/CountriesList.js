import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCountries } from '../../actions';

const CountriesList = (props) => {
  useEffect(() => {
    props.fetchCountries(props.countries);
  }, [])
  

  return(
    <div>
      <h2>List Countries</h2>
       {
          props.countries.map((country, index) => (
            <p key={country.index}>{country.name}</p>
          ))
        }
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log('Countries State =======', state);
  return { 
    countries: state.countriesReducer.countries
  };
};

export default connect(
  mapStateToProps,
  { fetchCountries}
)(CountriesList);