"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const requireContext = require['context']("./img", true, /^\.\/.*\.svg$/);
const projectImgs = requireContext.keys().map(requireContext);
const SidebarMenuImgMap = {};
let imgNames = requireContext.keys();
imgNames.forEach((item, index) => {
    SidebarMenuImgMap[item] = projectImgs[index];
});
exports.default = SidebarMenuImgMap;
//# sourceMappingURL=sidebarmenumap.js.map