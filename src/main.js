import Vue from "vue";
import VueRouter from "vue-router";
import { routes } from "./routes";
import { VueReCaptcha } from "vue-recaptcha-v3";
import VueLodash from "vue-lodash";
import lodash from "lodash";
import VueClipboard from "vue-clipboard2";
import VueSmoothScroll from "vue-smoothscroll";
import VueTreeList from 'vue-tree-list'

import App from "./App.vue";
import NestFooter from "./components/Footer";
import PackageVector from "./assets/package_vector.svg";

import "bulma/css/bulma.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHeart,
  faFeatherAlt,
  faTrashAlt,
  faGlobeAmericas,
  faSearch,
  faFingerprint,
  faFistRaised,
  faCodeBranch,
  faParachuteBox,
  faBoxOpen,
  faCubes,
  faFolder,
  faFolderOpen,
  faFolderPlus,
  faFile,
  faFileMedical,
  faFileImport,
  faLevelUpAlt,
  faFileCode,
  faBookOpen,
  faUser,
  faCalendarAlt,
  faImage,
  faShieldAlt,
  faBiohazard,
  faLock,
  faExclamationTriangle,
  faCopy,
  faCheckSquare,
  faFlag,
  faBook,
  faArrowLeft,
  faMoneyBill,
  faUsers,
  faExchangeAlt,
  faGavel,
  faBoxes,
  faPen,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faHeart,
  faFeatherAlt,
  faTrashAlt,
  faGlobeAmericas,
  faFingerprint,
  faFistRaised,
  faCodeBranch,
  faParachuteBox,
  faBoxOpen,
  faSearch,
  faCubes,
  faGithub,
  faTwitter,
  faFolder,
  faFolderOpen,
  faFolderPlus,
  faFile,
  faFileMedical,
  faFileImport,
  faLevelUpAlt,
  faFileCode,
  faBookOpen,
  faUser,
  faCalendarAlt,
  faImage,
  faShieldAlt,
  faBiohazard,
  faLock,
  faExclamationTriangle,
  faCopy,
  faCheckSquare,
  faFlag,
  faBook,
  faArrowLeft,
  faMoneyBill,
  faUsers,
  faExchangeAlt,
  faGavel,
  faBoxes,
  faPen,
  faExternalLinkAlt,
);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("nest-footer", NestFooter);
Vue.component("package-vector", PackageVector);

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(VueReCaptcha, { siteKey: "6Lepmf8UAAAAABsjF9Fo0kqzm3_2KcHHM2fX43YH" });
Vue.use(VueLodash, { lodash: lodash });
Vue.use(VueClipboard);
Vue.use(VueSmoothScroll);
Vue.use(VueTreeList)

const router = new VueRouter({
  routes,
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return {
        selector: to.hash,
      };
    }
    return {
      x: 0,
      y: 0,
    };
  },
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
