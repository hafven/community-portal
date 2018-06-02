import React from "react";
import styled from "react-emotion";

import logoImage from "./hafven-community-logo.png";

const NavBar = () => (
  <nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
    <a class="navbar-brand" href="/dashboard">
      <img src={logoImage} width="75" height="auto" alt="Hafven Community" />
    </a>
    <div>
      <a
        class="nav-link float-left d-inline-block mr-2 pr-4"
        href="/directory"
        title="Community"
        id="useralerts"
      >
        <i class="fa fa-users"> </i>
        <span class="badge badge-pill badge-primary" />
        <strong class="d-none d-sm-inline">
          <small>Community</small>
        </strong>
      </a>
      <a
        class="nav-link float-left d-inline-block mr-4 pr-4"
        href="/messages"
        title="Messages"
        id="messagealerts"
      >
        <i class="fa fa-comments"> </i>
        <span class="badge badge-pill badge-primary" />
        <strong class="d-none d-sm-inline">
          <small>Unterhaltungen</small>
        </strong>
      </a>
      <div class="btn-group mr-1 show">
        <div
          class="dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="true"
        >
          <small class="d-none d-sm-inline">
            Jan Sauer <span class="badge badge-primary">Community</span>
          </small>
          <img
            src="https://s3.eu-central-1.amazonaws.com/hafven-community-app-uploads/uploads/avatars/jan_sauer-1525344403524-99-small.jpg"
            class="rounded-circle"
            width="44"
            height="44"
            alt="Jan Sauer"
          />
        </div>
        <div class="dropdown-menu dropdown-menu-right show">
          <a class="dropdown-item" href="/myprofile">
            Profil bearbeiten
          </a>
          <a
            class="dropdown-item"
            href="https://mitglieder.hafven.de/membership"
            target="_blank"
          >
            Tarif und Abrechnung
          </a>
          <a
            class="dropdown-item"
            href="https://mitglieder.hafven.de/issues"
            title="Hilfe"
            target="_blank"
          >
            Hilfe
          </a>
          <div class="dropdown-divider" />
          <a class="dropdown-item" href="/logout" title="abmelden">
            Abmelden
          </a>
        </div>
      </div>
    </div>
  </nav>
);

export default NavBar;
