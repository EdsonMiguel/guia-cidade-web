import React, { Component } from "react";
import { Button } from "@material-ui/core";
import api from "../services/api";

export default class company extends Component {
  state = {
    company: {}
  };
  async componentDidMount() {
    const { id } = this.props.match.params;
    const response = await api.get(`/companies/${id}`);
    this.setState({ company: response.data });
    console.log(this.state.company);
  }

  delete = async () => {
    const { _id } = this.state.company;
    console.log(_id);
    await api.delete(`/companies/${_id}`);
    this.setState({ company: {} });
  };

  render() {
    const {
      companyName,
      description,
      category,
      addres,
      image_url,
      facebook_url,
      intagram_url,
      openingHours,
      closingHour
    } = this.state.company;
    console.log(companyName);
    return (
      <div>
        <p>Nome: {companyName}</p>
        <p>{`Descrição: ${description}`}</p>
        <p>{`Categoria: ${category}`}</p>
        <p>{`Endereço: ${addres}`}</p>
        <p>{`Abre: ${openingHours}`}</p>
        <p>{`Fecha: ${closingHour}`}</p>
        <a href={facebook_url}>Facebook</a>
        <a href={intagram_url}>Instagram</a>
        <img src={image_url} alt="Logo" />
        <Button onClick={this.delete}>Deletar</Button>
      </div>
    );
  }
}
