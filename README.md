
	 Instituto Federal de Ciência e Tecnologia do Maranhão | @IFMA
	 Departamento de Computação | Sistemas de Informação 

</br>

> [![interação_homem_máquina](https://img.shields.io/badge/Interação_Homem_Máquina-Profa%20Eveline%20Sá-blue.svg)](url)
> [![engenharia_de_software](https://img.shields.io/badge/Engenharia_de_Software-Prof%20Daniel%20Lima%20Jr-blue.svg)](url)
<!-- > [![sistemas_de_informação](https://img.shields.io/badge/Sistemas_de_Informação-@IFMA-blue.svg)](url) -->
---
> [![diego_teixeira](https://img.shields.io/badge/Diego_Teixeira-Prototyping-orange.svg)](url)
> [![odival_quaresma](https://img.shields.io/badge/Odival_Quaresma-Frontend-orange.svg)](url)
> [![iulano_santos](https://img.shields.io/badge/Iulano_Santos-Backend-orange.svg)](url)
> [![jailson_soares](https://img.shields.io/badge/Jailson_Soares-Database-orange.svg)](url)

---
### • Estudo de Caso

Empresas de grande porte que trabalham com manutenção, logística, gerenciamento de estoque, etc. geralmente possuem sistemas de informação que geram alertas, seja para manutenção de equipamentos, seja para informar atualização de estoque, manutenções urgentes e etc.

Nesse contexto, temos o cenário da **EMSERF** *Empresa Maranhense de Serviços Ferroviários*, que tem um endpoint para gerar alertas de manutenção e atualização de estoque por e-mail, todavia o banco de dados que informa os técnicos que recebem alerta é atualizado manualmente. 

O setor de manutenção manda um "planilhão de excel" semanalmente com a relação de técnicos. Por conseguinte, também de forma manual, o Administrador de Banco de Dados <a href="https://github.com/scjailson"> *@scjailson* </a> escreve consultas SQL *(INSERT/UPDATE/DELETE)*, no banco de dados com os técnicos que devem receber os alertas. 

Esse processo fatalmente demanda tempo, concentração, sujeição à falha humana e gera impacto direto na fila de demandas do time de Desenvolvedores.

Como MVP, temos uma **Aplicação Web para Gerenciamento do Mapa de Alertas de Manutenção**.

---

Vide abaixo as tecnologias utilizadas na construção da aplicação:

### • MVP Prototype

	 Diagramação da arquitetura e Prototipagem de interface da app.
- [x] Draw.io
- [x] Figma


### • Client-side + Server-side

	Desenvolvimento da interface + API com a Stack Javascript.
- [x] ReactJS
- [x] NodeJS
	
### • Database

	Desenvolvimento, Modelagem e Adminstração.

- [x] HeidiSQL
- [x] MySQL

---

| Documentação |Programador| Disciplina(s)| Status|
| ----------------- | -------- | ----------------- |-------|
|<a href="https://github.com/yullano90/EMSERF_Service_Map_Manager/blob/main/Documenta%C3%A7%C3%A3o/3.%20Prototyping.md"> Prototyping </a>|<a href="https://github.com/DiegoRodrig0"> *@DiegoRodrig0* </a> | Interação Homem-Máquina | *Não iniciado* |
|<a href="https://github.com/yullano90/EMSERF_Service_Map_Manager/blob/main/Documenta%C3%A7%C3%A3o/4.%20Front-end.md"> Client-side </a>|<a href="https://github.com/odivalq"> *@odivalq* </a>| Interação Homem-Máquina + Engenharia de Software| *Andamento* |
|<a href="https://github.com/yullano90/EMSERF_Service_Map_Manager/blob/main/Documenta%C3%A7%C3%A3o/5.%20Back-end.md"> Server-side </a>|<a href="https://github.com/yullano90"> *@yullano90* </a>| Interação Homem-Máquina + Engenharia de Software | *Andamento* |
|<a href="https://github.com/yullano90/EMSERF_Service_Map_Manager/blob/main/Documenta%C3%A7%C3%A3o/6.%20Database.md"> Database </a>|<a href="https://github.com/scjailson"> *@scjailson* </a>| Engenharia de Software | *Não iniciado* |




