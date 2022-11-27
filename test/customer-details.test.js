import { html, fixture, expect } from '@open-wc/testing';
import Sinon, { stub } from 'sinon';
import '../src/Customer/Customer-details.js';

const el = await fixture(html`<customer-details></customer-details>`);

describe('customer details', () => {
  // Write test cases inside this block
  it('check for accessibility',()=>{
    expect(el).to.be.accessible;
  });

  it('spy toEmidetails method', ()=>{
    const func = Sinon.stub(el, '_toEmidetails');
    el.shadowRoot.querySelector('lion-button').click()
    expect(func.calledOnce).to.be.false;
  })

  
});
