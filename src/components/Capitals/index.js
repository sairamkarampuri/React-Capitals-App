import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {selectedCapital: countryAndCapitalsList[0]}

  onChangeCapital = event => {
    const newChangeCapital = event.target.value
    const newList = countryAndCapitalsList.filter(
      eachItem => eachItem.id === newChangeCapital,
    )
    this.setState({selectedCapital: newList[0]})
  }

  render() {
    const {selectedCapital} = this.state
    return (
      <div className="app-container">
        <div className="capital-container">
          <h1 className="heading">Countries And capitals</h1>
          <form className="form-container">
            <select
              className="select-section"
              id="dropdownMenu"
              onChange={this.onChangeCapital}
            >
              {countryAndCapitalsList.map(eachCountryDetails => (
                <option
                  className="option-section"
                  key={eachCountryDetails.id}
                  value={eachCountryDetails.id}
                >
                  {eachCountryDetails.capitalDisplayText}
                </option>
              ))}
            </select>
            <label htmlFor="dropdownMenu" className="label-text">
              is capital of which country?
            </label>
          </form>
          <p className="result-text">{selectedCapital.country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
