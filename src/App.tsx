import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import "./App.css";

interface AppState {
  readonly companies: Company[];
}

interface Company {
  readonly name: string;
  readonly domain: string;
  readonly logo: string;
}

export class App extends React.Component<{}, AppState> {
  constructor() {
    super({});

    this.state = {
      companies: [
        {
          name: "Facebook",
          domain: "facebook.com",
          logo: "https://logo.clearbit.com/facebook.com"
        },
        {
          name: "FANDOM",
          domain: "fandom.com",
          logo: "https://logo.clearbit.com/fandom.com"
        }
      ]
    };
  }

  searchCompanies = (searchText: string) => {
    if (!searchText || searchText === "") {
      return;
    }

    console.log(searchText);
  };

  render() {
    return (
      <div className="App">
        <Typeahead
          options={this.state.companies}
          labelKey={"name"}
          onInputChange={this.searchCompanies}
        />
      </div>
    );
  }
}

export default App;
