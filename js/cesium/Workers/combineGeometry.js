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
  PrimitivePipeline_default
} from "./chunk-66LLKYYL.js";
import {
  createTaskProcessorWorker_default
} from "./chunk-AHZIFZFA.js";
import "./chunk-JTE4MXKI.js";
import "./chunk-TF2FIAJH.js";
import "./chunk-I25UGRCO.js";
import "./chunk-PIL4KYPY.js";
import "./chunk-IUPKE27P.js";
import "./chunk-QVWQ3UFZ.js";
import "./chunk-N53AHUTA.js";
import "./chunk-C3BZAHZZ.js";
import "./chunk-4OZBDEVZ.js";
import "./chunk-KSUW52CB.js";
import "./chunk-EEPIX3G6.js";
import "./chunk-6MZLBHE3.js";
import "./chunk-ONGM4NH7.js";
import "./chunk-D3QW2ZBO.js";
import "./chunk-XW26DLRH.js";
import "./chunk-LVZNZ4UK.js";
import "./chunk-77GQGTAP.js";
import "./chunk-WCY5IZWR.js";

// packages/engine/Source/Workers/combineGeometry.js
function combineGeometry(packedParameters, transferableObjects) {
  const parameters = PrimitivePipeline_default.unpackCombineGeometryParameters(packedParameters);
  const results = PrimitivePipeline_default.combineGeometry(parameters);
  return PrimitivePipeline_default.packCombineGeometryResults(
    results,
    transferableObjects
  );
}
var combineGeometry_default = createTaskProcessorWorker_default(combineGeometry);
export {
  combineGeometry_default as default
};
