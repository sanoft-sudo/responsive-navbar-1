import React from "react";
import styled from "styled-components";

const DIV = styled.div`
  input[type="checkbox"] {
    display: none;
  }
  label {
    display: block;
    cursor: pointer;
    display: block;
    position: relative;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    box-shadow: 0 0 4.1666666667vw rgba(0, 0, 0, 0.25),
      0 0 0.8333333333vw rgba(0, 0, 0, 0.1);
    background-color: var(--color-white);
    margin: 0.5rem;
  }
  path {
    fill: none;
    stroke: #fff;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    --length: 24;
    --offset: -38;
    stroke-dasharray: var(--length) var(--total-length);
    stroke-dashoffset: var(--offset);
    transition: all 0.8s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  circle {
    opacity: 0;
  }

  .cross input:checked + svg .line--1,
  .cross input:checked + svg .line--3 {
    --length: 22.627416998;
  }

  .cross input:checked + svg .line--2 {
    --length: 0;
  }

  .menu--1 .line--1,
  .menu--1 .line--3 {
    --total-length: 126.64183044433594;
  }

  .menu--1 .line--2 {
    --total-length: 70;
  }

  .menu--1 input:checked + svg .line--1,
  .menu--1 input:checked + svg .line--3 {
    --offset: -94.1149185097;
  }

  .menu--1 input:checked + svg .line--2 {
    --offset: -50;
  }

  @media (min-width: 500px) {
  }
  label {
    width: 3rem;
    height: 3rem;
    margin: 0.3rem;
  }
  label svg {
    width: 3rem;
    height: 3rem;
  }
  circle {
    width: 40px;
    height: 40px;
  }
  .navbar-toggler {
    width: 40px;
    height: 40px;
  }
  @media (min-width: 768px) {
    .menu {
      display: none;
    }
  }
`;

const Humburger = ({ handleClick }) => {
  return (
    <DIV>
      <div className="menu cross menu--1">
        <label
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <input type="checkbox" onChange={handleClick} />
          <svg viewBox="15 15 70 70" xmlns="http://www.w3.org/2000/svg">
            {/* <circle cx="50" cy="50" r="40" /> */}
            <path className="line--1" d="M0 40h62c13 0 6 28-4 18L35 35" />
            <path className="line--2" d="M0 50h70" />
            <path className="line--3" d="M0 60h62c13 0 6-28-4-18L35 65" />
          </svg>
        </label>
      </div>
    </DIV>
  );
};
export default Humburger;
