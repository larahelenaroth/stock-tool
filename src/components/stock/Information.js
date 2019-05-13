import React from 'react';

const Information = props => {
  const { company } = props;
  return (
    <div className="font-weight-light">
      <p className="m-2">
        <span className="d-flex flex-row">
          <i className="fas fa-user-tie mr-3" />
          CEO:
        </span>
        <span className="ml-4">{company.CEO}</span>
      </p>
      <p className="m-2">
        <span className="d-flex flex-row">
          <i className="far fa-comments mr-3" />
          Company Description:
        </span>
        <span className="ml-4">{company.description}</span>
      </p>
      <p className="m-2">
        <span className="d-flex flex-row">
          <i className="fas fa-exchange-alt mr-3" />
          Exchange:
        </span>
        <span className="ml-4">{company.exchange}</span>
      </p>
      <p className="m-2">
        <span className="d-flex flex-row">
          <i className="fas fa-industry mr-3" />
          Industry:
        </span>
        <span className="ml-4">
          {company.industry} - {company.sector}
        </span>
      </p>
      <p className="m-2">
        <span className="d-flex flex-row">
          <i className="far fa-address-book mr-3" />
          Employees:
        </span>
        <span className="ml-4">
          {company.employees !== null && company.employees !== undefined
            ? company.employees.toLocaleString(undefined, {
                maximumFractionDigits: 0
              })
            : null}
        </span>
      </p>
      <p className="m-2">
        <span className="d-flex flex-row">
          <i className="fas fa-tags mr-3" />
          Tags:
        </span>
        <span className="ml-4">{company.tags.join(', ')}</span>
      </p>
    </div>
  );
};

export default Information;
