/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.130
 *
 * Copyright 2011-2022 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/CesiumGS/cesium/blob/main/LICENSE.md for full licensing details.
 */

import {
  EllipseGeometry_default
} from "./chunk-3CEWSDD6.js";
import "./chunk-F33UPGX4.js";
import "./chunk-UHGHLHXX.js";
import "./chunk-TF2FIAJH.js";
import "./chunk-I25UGRCO.js";
import "./chunk-PIL4KYPY.js";
import "./chunk-OQEJS5DO.js";
import "./chunk-HX7BP5BX.js";
import "./chunk-IUPKE27P.js";
import "./chunk-QVWQ3UFZ.js";
import "./chunk-N53AHUTA.js";
import "./chunk-C3BZAHZZ.js";
import "./chunk-4OZBDEVZ.js";
import "./chunk-KSUW52CB.js";
import "./chunk-EEPIX3G6.js";
import "./chunk-6MZLBHE3.js";
import {
  Cartesian3_default,
  Ellipsoid_default
} from "./chunk-ONGM4NH7.js";
import "./chunk-D3QW2ZBO.js";
import "./chunk-XW26DLRH.js";
import "./chunk-LVZNZ4UK.js";
import "./chunk-77GQGTAP.js";
import {
  defined_default
} from "./chunk-WCY5IZWR.js";

// packages/engine/Source/Workers/createEllipseGeometry.js
function createEllipseGeometry(ellipseGeometry, offset) {
  if (defined_default(offset)) {
    ellipseGeometry = EllipseGeometry_default.unpack(ellipseGeometry, offset);
  }
  ellipseGeometry._center = Cartesian3_default.clone(ellipseGeometry._center);
  ellipseGeometry._ellipsoid = Ellipsoid_default.clone(ellipseGeometry._ellipsoid);
  return EllipseGeometry_default.createGeometry(ellipseGeometry);
}
var createEllipseGeometry_default = createEllipseGeometry;
export {
  createEllipseGeometry_default as default
};
