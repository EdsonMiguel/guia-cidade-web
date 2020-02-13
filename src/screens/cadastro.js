import React, { useState } from "react";
import api from "../services/api";
import { Input, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const Cadastro = () => {
  // Declarar uma nova variável de state, na qual chamaremos de "count"
  const [company, setCompany] = useState({});

  const handleCompanyNameChange = event => {
    setCompany({ ...company, companyName: event.target.value });
  };
  const handleDescriptionChange = event => {
    setCompany({ ...company, description: event.target.value });
  };
  const handleCategoryChange = event => {
    setCompany({ ...company, category: event.target.value });
  };
  const handleAddresChange = event => {
    setCompany({ ...company, addres: event.target.value });
  };
  const handleImageUrlChange = event => {
    setCompany({ ...company, image_url: event.target.value });
  };
  const handleFacebookUrlChange = event => {
    setCompany({ ...company, facebook_url: event.target.value });
  };
  const handleInstagramUrlChange = event => {
    setCompany({ ...company, intagram_url: event.target.value });
  };
  const handleOpeningHourChange = event => {
    setCompany({ ...company, openingHours: event.target.value });
  };
  const handleClosinHourChange = event => {
    setCompany({ ...company, closingHour: event.target.value });
    console.log(company);
  };
  const handleEnviar = async () => {
    await api.post(`/companies`, company);
  };
  return (
    <div>
      <Input placeholder="Nome da Empresa" onChange={handleCompanyNameChange} />
      <Input placeholder="Descrição" onChange={handleDescriptionChange} />
      <Input placeholder="Categoria" onChange={handleCategoryChange} />
      <Input placeholder="Endereço" onChange={handleAddresChange} />
      <Input placeholder="Imagem" onChange={handleImageUrlChange} />
      <Input placeholder="Facebook" onChange={handleFacebookUrlChange} />
      <Input placeholder="Instagram" onChange={handleInstagramUrlChange} />
      <Input placeholder="Abre as:" onChange={handleOpeningHourChange} />
      <Input placeholder="Fecha as" onChange={handleClosinHourChange} />
      <Button onClick={handleEnviar}>Enviar</Button>
      <Button>
        <Link to="/">Voltar</Link>
      </Button>
    </div>
  );
};

export default Cadastro;
