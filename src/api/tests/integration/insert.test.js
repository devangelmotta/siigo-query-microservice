/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-expressions */
const request = require('supertest');
const httpStatus = require('http-status');
const { expect } = require('chai');
const sinon = require('sinon');
const bcrypt = require('bcryptjs');
const { some, omitBy, isNil } = require('lodash');
const app = require('../../../index');
const User = require('../../models/product.model');
const fetch = require("node-fetch");

async function simulatePetions() {
  for (var i = 0; i < 4; i++) {
    sendPetition()
  }
}

function sendPetition() {
  fetch('http://localhost:3000/v1/products/', { method: 'POST' })
    .then((response) => response.json())
    .then(responseJson => {
      console.log(responseJson)
    }).catch(e => console.error(e));
}

simulatePetions();




