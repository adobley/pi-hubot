let chai = require('chai');
let expect = chai.expect;
let sinon = require('sinon');
let chaiSinon = require('chai-sinon');
chai.use(chaiSinon);

let provision = require('../scripts/provision');

describe('Provision Script', () => {
  let robot;
  let message;

  beforeEach(() => {
    robot = {
      respond: () => {}
    };
    message =  {
      send: () => {}
    };
    sinon.stub(robot, "respond");
    sinon.spy(message, "send");
  });

  it('should exist', () => {
    expect(provision).to.exist;
  });
  it('should export a function', () => {
    expect(provision).to.be.a('function');
  });
  it('should call respond method on robot', () => {
    provision(robot);
    expect(robot.respond).to.have.been.calledOnce;
  });
  it('should respond to "provision"', () => {
    provision(robot);
    expect(robot.respond).to.have.been.calledWith("/provision/i");
  });
  it('should respond with "You asked me to provision"', () => {
    provision(robot);
    robot.respond.yield(message);
    expect(message.send).to.have.been.calledWith("You asked me to provision");
  });
});