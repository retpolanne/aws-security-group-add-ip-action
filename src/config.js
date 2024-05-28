const core = require('@actions/core');
const AWS = require('aws-sdk/global');
const EC2 = require('aws-sdk/clients/ec2');

const groupIds = core
  .getInput('aws-security-group-id', { required: true })
  .split(',')
  .map(item => item.trim());
const port = parseInt(core.getInput('port', { required: false }));

const toPortInput = core.getInput('to-port', { required: false });
const toPort = toPortInput.length > 0 ? parseInt(toPortInput) : false;

const description = core.getInput('description', { required: false });
const protocol = core.getInput('protocol', { required: false });

const ec2 = new EC2();

module.exports = {
  groupIds,
  port,
  toPort,
  protocol,
  description,
  ec2,
};
