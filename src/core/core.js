//     D3fault.js 1.0.0
//     http://d3faultjs.org
//     (c) 2015 Preethi Kasireddy, Banun Atina Idris and Colin Seale
//     D3fault may be freely distributed under the MIT license.

/**
This is required for d3 to load.
*/
/* global d3 */

/**
Import all necessary submodules into the core module
*/
/**
This defines our main library object.
@private
*/

import charts from '../subModules/charts';
import data from '../subModules/data';

const D3fault = {
  version: '1.0.0',
  make(chartType) {
    return new charts[chartType]();
  },
};

const chart = D3fault.make('BarChart')
                   .using(data)
                   .in('#yo');

chart.updateFontSize(40)
     .updateTitle('new title, yo yo yo ');

export default D3fault;