import React, { Component } from "react";
import Company from "../components/Company/index";
import { Link } from "react-router-dom";
import api from "../services/api";

export default class index extends Component {
  state = {
    companies: []
  };
  componentDidMount() {
    this.loadCompanies();
  }
  loadCompanies = async () => {
    const response = await api.get(`/companies`);
    this.setState({ companies: response.data });
  };
  render() {
    const { companies } = this.state;
    return (
      <div>
        {companies.map(company => (
          <article key={company._id}>
            <Company
              id={company._id}
              title={company.companyName}
              description={company.description}
              category={company.category}
              imgUrl={company.image_url}
            />
          </article>
        ))}
        <button>
          <Link to="/cadastro">Cadastrar</Link>
        </button>
      </div>
    );
  }
}
