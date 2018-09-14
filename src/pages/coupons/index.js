import React, { Component } from 'react';
import Tab1 from './tabOne';
import Tab2 from './tabTwo';
import Tab3 from './tabThree';
export default class CouponPage extends Component {
  render() {
    return (
      <div>
        <span>
          <span heading="未使用">
            <Tab1 />
          </span>
          <span heading="已使用">
            <Tab2 />
          </span>
          <span heading="已过期">
            <Tab3 />
          </span>
        </span>
      </div>
    );
  }
}
