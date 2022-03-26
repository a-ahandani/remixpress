var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var cloudflare = require("@remix-run/cloudflare");
    Object.defineProperty(exports, "createCloudflareKVSessionStorage", {
      enumerable: true,
      get: function() {
        return cloudflare.createCloudflareKVSessionStorage;
      }
    });
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return cloudflare.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return cloudflare.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return cloudflare.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return cloudflare.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// server-entry-module:@remix-run/dev/server-build
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var React2 = __toESM(require("react"));
var import_server = require("react-dom/server");
var import_remix = __toESM(require_remix());

// app/lib/create-emotion-cache.ts
init_react();
var import_cache = __toESM(require("@emotion/cache"));
function createEmotionCache() {
  return (0, import_cache.default)({ key: "css" });
}

// app/components/Layout/theme.ts
init_react();
var import_styles = require("@mui/material/styles");
var import_colors = require("@mui/material/colors");

// app/resources/fonts/apercu_regular-webfont.woff
var apercu_regular_webfont_default = "/build/_assets/apercu_regular-webfont-IRDCTV6L.woff";

// app/resources/fonts/apercu_regular-webfont.woff2
var apercu_regular_webfont_default2 = "/build/_assets/apercu_regular-webfont-UDJALLYU.woff2";

// app/resources/fonts/apercu_bold-webfont.woff
var apercu_bold_webfont_default = "/build/_assets/apercu_bold-webfont-ALRRZLNU.woff";

// app/resources/fonts/apercu_bold-webfont.woff2
var apercu_bold_webfont_default2 = "/build/_assets/apercu_bold-webfont-GIWS3VDD.woff2";

// app/components/Layout/theme.ts
var theme = (0, import_styles.createTheme)({
  typography: {
    fontFamily: "apercu, Arial",
    body1: {
      fontSize: "1.0625rem",
      lineHeight: "1.7"
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
            @font-face {
                font-family: 'apercu';
                src: url(${apercu_regular_webfont_default2}) format('woff2'),
                    url(${apercu_regular_webfont_default}) format('woff');
                font-weight: light;
                font-style: normal; 
            },
            @font-face {
              font-family: 'apercu';
              src: url(${apercu_bold_webfont_default2}) format('woff2'),
                   url(${apercu_bold_webfont_default}) format('woff');
              font-weight: bold;
              font-style: bold;
          
          }
          `
    }
  },
  palette: {
    primary: {
      main: "#556cd6"
    },
    secondary: {
      main: "#ff0067"
    },
    error: {
      main: import_colors.red.A400
    }
  }
});
var theme_default = theme;

// app/entry.server.tsx
var import_CssBaseline = __toESM(require("@mui/material/CssBaseline"));
var import_styles2 = require("@mui/material/styles");
var import_react = require("@emotion/react");
var import_create_instance = __toESM(require("@emotion/server/create-instance"));
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = (0, import_create_instance.default)(cache);
  const MuiRemixServer = () => /* @__PURE__ */ React2.createElement(import_react.CacheProvider, {
    value: cache
  }, /* @__PURE__ */ React2.createElement(import_styles2.ThemeProvider, {
    theme: theme_default
  }, /* @__PURE__ */ React2.createElement(import_CssBaseline.default, null), /* @__PURE__ */ React2.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  })));
  const html = (0, import_server.renderToString)(/* @__PURE__ */ React2.createElement(MuiRemixServer, null));
  const { styles } = extractCriticalToChunks(html);
  let stylesHTML = "";
  styles.forEach(({ key, ids, css }) => {
    const emotionKey = `${key} ${ids.join(" ")}`;
    const newStyleTag = `<style data-emotion="${emotionKey}">${css}</style>`;
    stylesHTML = `${stylesHTML}${newStyleTag}`;
  });
  const markup = html.replace(/<meta(\s)*name="emotion-insertion-point"(\s)*content="emotion-insertion-point"(\s)*\/>/, `<meta name="emotion-insertion-point" content="emotion-insertion-point"/>${stylesHTML}`);
  responseHeaders.set("Content-Type", "text/html");
  return new Response(`<!DOCTYPE html>${markup}`, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/ahmad/Dev/personal/remix/ahandani.com/app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App
});
init_react();
var import_react6 = require("react");
var import_remix5 = __toESM(require_remix());
var import_react_router_dom = require("react-router-dom");
var import_use_query_params = require("use-query-params");
var import_react7 = require("@emotion/react");
var import_material6 = require("@mui/material");

// app/lib/client-style-context.ts
init_react();
var import_react2 = require("react");
var client_style_context_default = (0, import_react2.createContext)({
  reset: () => {
  }
});

// app/components/Layout/index.tsx
init_react();
var import_remix4 = __toESM(require_remix());

// app/components/Logo/index.tsx
init_react();
var import_remix2 = __toESM(require_remix());
var import_material = require("@mui/material");

// app/components/Layout/hooks/use-layout-context.ts
init_react();
var import_react4 = require("react");

// app/components/Layout/context.ts
init_react();
var import_react3 = require("react");
var LayoutContext = (0, import_react3.createContext)({});
var context_default = LayoutContext;

// app/components/Layout/hooks/use-layout-context.ts
function useLayout() {
  const contextValue = (0, import_react4.useContext)(context_default) || {};
  if (!contextValue) {
    throw new Error(`useLayout must be used within a LayoutProvider`);
  }
  return contextValue;
}
var use_layout_context_default = useLayout;

// app/components/Logo/index.tsx
function Logo(_a) {
  var rest = __objRest(_a, []);
  const { layoutState, setLayoutState } = use_layout_context_default();
  const { isMenuOpen } = layoutState;
  function handleCloseMenu() {
    if (isMenuOpen)
      setLayoutState(__spreadProps(__spreadValues({}, layoutState), {
        isMenuOpen: false
      }));
  }
  return /* @__PURE__ */ React.createElement(import_material.Link, __spreadProps(__spreadValues({}, rest), {
    onClick: handleCloseMenu,
    component: import_remix2.Link,
    to: "/",
    color: "text.primary",
    sx: __spreadValues({
      textDecoration: "none"
    }, rest == null ? void 0 : rest.sx)
  }), /* @__PURE__ */ React.createElement(import_material.Typography, {
    sx: { fontWeight: "bold" },
    variant: "h5"
  }, "AHANDANI."), /* @__PURE__ */ React.createElement(import_material.Typography, {
    sx: { fontWeight: "light" },
    variant: "caption"
  }, "AHAMAD ESMAEILZADEH AHANDANI"));
}

// app/components/Layout/components/LayoutProvider/index.tsx
init_react();
var import_react5 = require("react");
var import_lodash = require("lodash");
function LayoutProvider(props) {
  const { children, defaultLayoutState } = props;
  const [layoutState, setLayoutState] = (0, import_react5.useState)(defaultLayoutState);
  const layoutContext = (0, import_react5.useMemo)(() => ({
    layoutState,
    setLayoutState
  }), [layoutState]);
  return /* @__PURE__ */ React.createElement(context_default.Provider, {
    value: layoutContext
  }, (0, import_lodash.isFunction)(children) ? children(layoutContext) : children);
}
var LayoutProvider_default = LayoutProvider;

// app/components/Layout/index.tsx
var import_material5 = require("@mui/material");

// app/components/Menu/index.tsx
init_react();
var import_material4 = require("@mui/material");
var import_hamburger_react = require("hamburger-react");

// app/components/Menu/components/Navigation/index.tsx
init_react();
var import_styles3 = require("@mui/material/styles");
var import_material3 = require("@mui/material");

// app/resources/images/hip-square.png
var hip_square_default = "/build/_assets/hip-square-ID5H3KNX.png";

// app/components/Menu/components/Navigation/components/NavLink/index.tsx
init_react();
var import_remix3 = __toESM(require_remix());
var import_material2 = require("@mui/material");
function NavLink(_a) {
  var _b = _a, { to, children } = _b, rest = __objRest(_b, ["to", "children"]);
  const { layoutState, setLayoutState } = use_layout_context_default();
  const { isMenuOpen } = layoutState;
  function handleCloseMenu() {
    if (isMenuOpen)
      setLayoutState(__spreadProps(__spreadValues({}, layoutState), {
        isMenuOpen: false
      }));
  }
  return /* @__PURE__ */ React.createElement(import_material2.Link, __spreadValues({
    component: import_remix3.Link,
    onClick: handleCloseMenu,
    variant: "h4",
    to,
    color: "text.primary",
    sx: {
      my: 1,
      mx: 1.5,
      textDecoration: "none",
      display: "block",
      pb: 1,
      pl: 6
    }
  }, rest), children);
}

// app/components/Menu/components/Navigation/index.tsx
function Navigation(_a) {
  var rest = __objRest(_a, []);
  const { layoutState } = use_layout_context_default();
  const { isMenuOpen } = layoutState;
  return /* @__PURE__ */ React.createElement(import_material3.Box, __spreadProps(__spreadValues({}, rest), {
    sx: {
      flexDirection: "row",
      display: "flex",
      height: "100vh",
      width: "100vw"
    }
  }), /* @__PURE__ */ React.createElement(import_material3.Grid, {
    sx: { height: "100vh", width: "100vw" },
    container: true,
    spacing: 0
  }, /* @__PURE__ */ React.createElement(import_material3.Grid, {
    item: true,
    xs: 5
  }, /* @__PURE__ */ React.createElement(import_material3.Box, {
    sx: { p: 4, fontWeight: "bold", height: "100vh" }
  }, isMenuOpen && /* @__PURE__ */ React.createElement(Logo, null))), /* @__PURE__ */ React.createElement(import_material3.Grid, {
    item: true,
    xs: 7
  }, /* @__PURE__ */ React.createElement(import_material3.Box, {
    sx: {
      backgroundColor: (theme2) => (0, import_styles3.alpha)(theme2.palette.primary.main, theme2.palette.action.selectedOpacity),
      background: `url(${hip_square_default})`,
      height: "100vh",
      display: "flex",
      alignContent: "center",
      justifyContent: "center",
      flexDirection: "column"
    }
  }, /* @__PURE__ */ React.createElement(import_material3.MenuList, null, /* @__PURE__ */ React.createElement(NavLink, {
    to: "/"
  }, "Home"), /* @__PURE__ */ React.createElement(NavLink, {
    to: "/about"
  }, "About"), /* @__PURE__ */ React.createElement(NavLink, {
    to: "/posts"
  }, "Blog"), /* @__PURE__ */ React.createElement(NavLink, {
    to: "/contact"
  }, "Contact"))))));
}

// app/components/Menu/index.tsx
function Menu({ width }) {
  const { layoutState, setLayoutState } = use_layout_context_default();
  const { isMenuOpen } = layoutState;
  function handleToggleMenu() {
    setLayoutState(__spreadProps(__spreadValues({}, layoutState), {
      isMenuOpen: !isMenuOpen
    }));
  }
  return /* @__PURE__ */ React.createElement(import_material4.Drawer, {
    sx: {
      width: "100%",
      "& .MuiDrawer-paper": __spreadValues(__spreadValues({
        overflow: "hidden"
      }, isMenuOpen && {
        width: "100%",
        transition: (theme2) => theme2.transitions.create("width", {
          easing: theme2.transitions.easing.sharp,
          duration: theme2.transitions.duration.standard
        })
      }), !isMenuOpen && {
        width,
        transition: (theme2) => theme2.transitions.create("width", {
          easing: theme2.transitions.easing.sharp,
          duration: theme2.transitions.duration.shortest
        })
      })
    },
    variant: "permanent",
    anchor: "right",
    open: isMenuOpen
  }, /* @__PURE__ */ React.createElement(import_material4.Box, {
    sx: {
      position: "fixed",
      right: (width - 48) / 2,
      top: 24
    }
  }, /* @__PURE__ */ React.createElement(import_hamburger_react.Squeeze, {
    toggled: isMenuOpen,
    toggle: handleToggleMenu,
    size: width / 2.8
  })), /* @__PURE__ */ React.createElement(import_material4.Box, null, /* @__PURE__ */ React.createElement(Navigation, null)));
}

// app/components/Layout/index.tsx
var MENU_WIDTH = 80;
function Layout({ children }) {
  const { location, state, submission, type } = (0, import_remix4.useTransition)();
  const isLoading = state === "loading";
  return /* @__PURE__ */ React.createElement(LayoutProvider_default, {
    defaultLayoutState: { isMenuOpen: false }
  }, /* @__PURE__ */ React.createElement(import_material5.Box, null, /* @__PURE__ */ React.createElement(Menu, {
    width: MENU_WIDTH
  }), /* @__PURE__ */ React.createElement(import_material5.Box, {
    sx: { width: `calc(100vw - ${MENU_WIDTH}px)` }
  }, /* @__PURE__ */ React.createElement(import_material5.AppBar, {
    position: "static",
    color: "transparent",
    elevation: 0
  }, /* @__PURE__ */ React.createElement(import_material5.Toolbar, {
    sx: {
      flexWrap: "wrap",
      py: 2,
      px: 6,
      borderBottom: (theme2) => `1px solid ${theme2.palette.divider}`
    }
  }, /* @__PURE__ */ React.createElement(import_material5.Box, {
    sx: { p: 2, fontWeight: "bold", flexGrow: 1 }
  }, /* @__PURE__ */ React.createElement(Logo, null)))), isLoading && /* @__PURE__ */ React.createElement(import_material5.Box, {
    sx: { height: 5, mb: "-5px" }
  }, /* @__PURE__ */ React.createElement(import_material5.LinearProgress, {
    color: "inherit"
  })), /* @__PURE__ */ React.createElement(import_material5.Container, {
    maxWidth: "md"
  }, /* @__PURE__ */ React.createElement(import_material5.Box, {
    sx: { my: 4 }
  }, children)))));
}

// route:/Users/ahmad/Dev/personal/remix/ahandani.com/app/root.tsx
var Document = (0, import_react7.withEmotionCache)(({ children, title }, emotionCache) => {
  const clientStyleData = (0, import_react6.useContext)(client_style_context_default);
  (0, import_material6.unstable_useEnhancedEffect)(() => {
    emotionCache.sheet.container = document.head;
    const tags = emotionCache.sheet.tags;
    emotionCache.sheet.flush();
    tags.forEach((tag) => {
      emotionCache.sheet._insertTag(tag);
    });
    clientStyleData.reset();
  }, []);
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "theme-color",
    content: theme_default.palette.primary.main
  }), title ? /* @__PURE__ */ React.createElement("title", null, title) : null, /* @__PURE__ */ React.createElement(import_remix5.Meta, null), /* @__PURE__ */ React.createElement(import_remix5.Links, null), /* @__PURE__ */ React.createElement("meta", {
    name: "emotion-insertion-point",
    content: "emotion-insertion-point"
  })), /* @__PURE__ */ React.createElement("body", null, children, /* @__PURE__ */ React.createElement(import_remix5.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix5.Scripts, null), /* @__PURE__ */ React.createElement(import_remix5.LiveReload, null)));
});
var RouteAdapter = ({ children }) => {
  const navigate = (0, import_react_router_dom.useNavigate)();
  const location = (0, import_react_router_dom.useLocation)();
  const adaptedHistory = (0, import_react6.useMemo)(() => ({
    replace(location2) {
      navigate(location2, { replace: true, state: location2.state });
    },
    push(location2) {
      navigate(location2, { replace: false, state: location2.state });
    }
  }), [navigate]);
  return children({ history: adaptedHistory, location });
};
function App() {
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(import_use_query_params.QueryParamProvider, {
    ReactRouterRoute: RouteAdapter
  }, /* @__PURE__ */ React.createElement(import_remix5.Outlet, null))));
}
function ErrorBoundary({ error }) {
  console.log(error);
  return /* @__PURE__ */ React.createElement(Document, {
    title: "Error!"
  }, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "There was an error"), /* @__PURE__ */ React.createElement("p", null, error.message))));
}
function CatchBoundary() {
  const caught = (0, import_remix5.useCatch)();
  let message;
  switch (caught.status) {
    case 401:
      message = /* @__PURE__ */ React.createElement("p", null, "Oops! Looks like you tried to visit a page that you do not have access to.");
      break;
    case 404:
      message = /* @__PURE__ */ React.createElement("p", null, "Oops! Looks like you tried to visit a page that does not exist.");
      break;
    default:
      throw new Error(caught.data || caught.statusText);
  }
  return /* @__PURE__ */ React.createElement(Document, {
    title: `${caught.status} ${caught.statusText}`
  }, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement("h1", null, caught.status, ": ", caught.statusText), message));
}

// route:/Users/ahmad/Dev/personal/remix/ahandani.com/app/routes/contact/index.tsx
var contact_exports = {};
__export(contact_exports, {
  default: () => Contact
});
init_react();
var import_material7 = require("@mui/material");
function Contact() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_material7.Typography, {
    variant: "h1"
  }, "Contact"));
}

// route:/Users/ahmad/Dev/personal/remix/ahandani.com/app/routes/about/index.tsx
var about_exports = {};
__export(about_exports, {
  default: () => About
});
init_react();
var import_material8 = require("@mui/material");
function About() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_material8.Typography, {
    variant: "h1"
  }, "About"), /* @__PURE__ */ React.createElement(import_material8.Typography, {
    variant: "body1"
  }, "Hi, My name is Ahmad. I'm a software developer with a decade of experience. I live in Vancouver BC."));
}

// route:/Users/ahmad/Dev/personal/remix/ahandani.com/app/routes/posts/$slug.tsx
var slug_exports = {};
__export(slug_exports, {
  action: () => action,
  default: () => PostSlug,
  loader: () => loader
});
init_react();
var import_remix8 = __toESM(require_remix());
var import_material21 = require("@mui/material");
var import_icons_material = require("@mui/icons-material");

// app/api/posts/getPost.ts
init_react();
var import_graphql_request3 = require("graphql-request");

// app/lib/graphql.tsx
init_react();
var import_graphql_request = require("graphql-request");
var API_URL = process.env.API_URL;
var graphql = new import_graphql_request.GraphQLClient("http://blog.ahandani.com/?");

// app/api/queries.ts
init_react();
var import_graphql_request2 = require("graphql-request");
var COMMENT = import_graphql_request2.gql`
  fragment comment on Comment {
    id
    databaseId
    content
    parentId
    date
    dateGmt
    author {
      node {
        avatar {
          foundAvatar
          default
          size
          url
        }
        name
        id
      }
    }
  }
`;

// app/api/posts/getPost.ts
var GET_POST = import_graphql_request3.gql`
  ${COMMENT}
  query getPost($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      id
      databaseId
      title
      uri
      content
      date
      comments(first: 100, where: { parent: null }) {
        # Get three levels of comments reply
        nodes {
          ...comment
          replies {
            nodes {
              ...comment
              replies {
                nodes {
                  ...comment
                  replies {
                    nodes {
                      ...comment
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
var getPost = async ({
  slug
}) => {
  const data = await graphql.request(GET_POST, { slug });
  return data.post;
};

// app/api/comments/createComment.ts
init_react();
var import_graphql_request4 = require("graphql-request");
var CREATE_COMMENT = import_graphql_request4.gql`
  mutation CREATE_COMMENT($input: CreateCommentInput!) {
    createComment(input: $input) {
      success
      comment {
        id
        content
        approved
      }
    }
  }
`;
var createComment = async ({
  commentOn,
  content,
  author,
  authorEmail,
  parent
}) => {
  const { createComment: createComment2 } = await graphql.request(CREATE_COMMENT, {
    input: {
      commentOn: Number(commentOn),
      content,
      author,
      authorEmail,
      parent: Number(parent)
    }
  });
  return createComment2;
};

// app/components/Content/components/Title/index.tsx
init_react();
var import_material9 = require("@mui/material");
var import_remix6 = __toESM(require_remix());
function Title(_a) {
  var _b = _a, { children, to, sx } = _b, rest = __objRest(_b, ["children", "to", "sx"]);
  return /* @__PURE__ */ React.createElement(import_material9.Typography, __spreadProps(__spreadValues(__spreadProps(__spreadValues({}, to && { component: import_remix6.Link, to }), {
    variant: "h4"
  }), rest), {
    sx: __spreadValues({
      textDecoration: "none",
      color: (theme2) => theme2.palette.common.black,
      pb: 0
    }, sx)
  }), children);
}

// app/components/Content/components/Comments/index.tsx
init_react();

// app/components/Content/components/Comments/components/Comment/index.tsx
init_react();
var import_material18 = require("@mui/material");

// app/components/Date/index.tsx
init_react();
var import_material10 = require("@mui/material");
var import_dayjs = __toESM(require("dayjs"));
function Date({
  date,
  format = "dddd, MMM DD, YYYY"
}) {
  const day = (0, import_dayjs.default)(date);
  return /* @__PURE__ */ React.createElement(import_material10.Typography, {
    variant: "caption"
  }, day.format(format));
}

// app/components/Avatar/index.tsx
init_react();
var import_material11 = require("@mui/material");
function Avatar({ name, image, size, sx }) {
  return /* @__PURE__ */ React.createElement(import_material11.Avatar, {
    alt: name ? name : "",
    src: image ? image : void 0,
    sx: __spreadValues({ width: size, height: size }, sx)
  });
}

// app/components/Content/components/Body/index.tsx
init_react();
var import_material17 = require("@mui/material");

// app/components/Content/components/Body/components/CodeBlock/index.tsx
init_react();
var import_react_syntax_highlighter = require("react-syntax-highlighter");
var import_prism = require("react-syntax-highlighter/dist/cjs/styles/prism");
var import_material12 = require("@mui/material");
var import_html_react_parser = require("html-react-parser");
function CodeBlock({ node }) {
  const { attribs, children, parent } = node;
  const { name } = parent;
  const { lang } = attribs;
  const render = (0, import_html_react_parser.domToReact)(children);
  return name == "pre" ? /* @__PURE__ */ React.createElement(import_react_syntax_highlighter.Prism, {
    style: import_prism.xonokai,
    showLineNumbers: true,
    showInlineLineNumbers: true,
    wrapLines: true,
    language: lang
  }, render) : /* @__PURE__ */ React.createElement(import_material12.Typography, {
    variant: "body1",
    component: "code",
    paragraph: false,
    sx: {
      backgroundColor: (theme2) => theme2.palette.primary.main,
      color: (theme2) => theme2.palette.common.white,
      px: 0.8,
      borderRadius: 1
    }
  }, render);
}

// app/components/Content/components/Body/components/Blockquote/index.tsx
init_react();
var import_material13 = require("@mui/material");
var import_html_react_parser2 = require("html-react-parser");
function Blockquote({ node }) {
  const { children } = node;
  return /* @__PURE__ */ React.createElement(import_material13.Typography, {
    sx: {
      p: 4,
      my: 2,
      backgroundColor: ({ palette }) => palette.grey[100]
    }
  }, (0, import_html_react_parser2.domToReact)(children));
}

// app/components/Content/components/Body/components/Image/index.tsx
init_react();
var import_material14 = require("@mui/material");
function Image({ node }) {
  const { attribs } = node;
  const { src, alt } = attribs;
  return /* @__PURE__ */ React.createElement(import_material14.Card, {
    raised: true
  }, /* @__PURE__ */ React.createElement(import_material14.CardMedia, {
    component: "img",
    image: src,
    alt
  }));
}

// app/components/Content/components/Body/components/Media/index.tsx
init_react();
var import_material15 = require("@mui/material");
var import_html_react_parser3 = require("html-react-parser");
function Media({ node }) {
  const { children } = node;
  return /* @__PURE__ */ React.createElement(import_material15.Card, {
    sx: {
      my: 4,
      "& iframe, & video": {
        width: "100%",
        display: "block"
      }
    }
  }, (0, import_html_react_parser3.domToReact)(children));
}

// app/components/Content/components/Body/components/Heading/index.tsx
init_react();
var import_material16 = require("@mui/material");
var import_html_react_parser4 = require("html-react-parser");
function Image2({ node }) {
  const { children, name } = node;
  const BLOCK_VARIANTS = {
    ["h1" /* H1 */]: "h1",
    ["h2" /* H2 */]: "h2",
    ["h3" /* H3 */]: "h3",
    ["h4" /* H4 */]: "h4",
    ["h5" /* H5 */]: "h5",
    ["h6" /* H6 */]: "h6",
    ["p" /* P */]: "body1"
  };
  return /* @__PURE__ */ React.createElement(import_material16.Typography, {
    variant: BLOCK_VARIANTS[name]
  }, (0, import_html_react_parser4.domToReact)(children));
}

// app/components/Content/components/Body/index.tsx
var import_html_react_parser5 = __toESM(require("html-react-parser"));
var BLOCK_COMPONENTS = {
  ["code" /* CODE */]: CodeBlock,
  ["blockquote" /* BLOCKQUOTE */]: Blockquote,
  ["img" /* IMAGE */]: Image,
  ["figure" /* FIGURE */]: Media,
  ["h1" /* H1 */]: Image2,
  ["h2" /* H2 */]: Image2,
  ["h3" /* H3 */]: Image2,
  ["h4" /* H4 */]: Image2,
  ["h5" /* H5 */]: Image2,
  ["h6" /* H6 */]: Image2
};
function Body(_a) {
  var _b = _a, { body, children, sx } = _b, rest = __objRest(_b, ["body", "children", "sx"]);
  const content = body || children || "";
  const replaceCode = (node) => {
    if (node instanceof import_html_react_parser5.Element && Object.keys(BLOCK_COMPONENTS).includes(node.name)) {
      const RenderComponent = BLOCK_COMPONENTS[node.name];
      return /* @__PURE__ */ React.createElement(RenderComponent, {
        node
      });
    }
  };
  return /* @__PURE__ */ React.createElement(import_material17.Box, __spreadProps(__spreadValues({}, rest), {
    sx: __spreadValues({
      "& a": ({ palette }) => ({
        textDecoration: "none",
        color: palette.primary.main
      }),
      "& .more-link": {
        display: "none"
      }
    }, sx)
  }), (0, import_html_react_parser5.default)(String(content), { replace: replaceCode }));
}

// app/components/Content/components/Comments/components/Comment/index.tsx
function Comment({
  authorImageSize = 60,
  date,
  author,
  children
}) {
  var _a, _b;
  const authorName = (_a = author == null ? void 0 : author.node) == null ? void 0 : _a.name;
  const authorImage = (_b = author == null ? void 0 : author.node) == null ? void 0 : _b.url;
  return /* @__PURE__ */ React.createElement(import_material18.Box, {
    className: "comment-box"
  }, /* @__PURE__ */ React.createElement(import_material18.Box, {
    sx: { display: "flex", alignItems: "center", p: 1 }
  }, /* @__PURE__ */ React.createElement(Avatar, {
    name: authorName,
    image: authorImage,
    size: authorImageSize
  }), /* @__PURE__ */ React.createElement(import_material18.Box, {
    sx: { display: "flex", flexDirection: "column", p: 1 }
  }, /* @__PURE__ */ React.createElement(import_material18.Typography, {
    sx: { fontWeight: "bold" },
    variant: "body2"
  }, authorName), /* @__PURE__ */ React.createElement(Date, {
    date
  }))), /* @__PURE__ */ React.createElement(Body, null, children));
}

// app/components/Content/components/Comments/components/CreateComment/index.tsx
init_react();
var import_remix7 = __toESM(require_remix());
var import_react8 = require("react");
var import_material19 = require("@mui/material");
var import_react9 = require("react");
function CreateComment({
  commentOn,
  parent
}) {
  const transition = (0, import_remix7.useTransition)();
  const actionData = (0, import_remix7.useActionData)();
  const isSubmitting = transition.state == "submitting";
  const isReloading = transition.type === "actionReload";
  const formRef = (0, import_react8.useRef)(null);
  const [open, setOpen] = (0, import_react9.useState)(false);
  (0, import_react8.useEffect)(() => {
    var _a;
    if (!isSubmitting) {
      (_a = formRef.current) == null ? void 0 : _a.reset();
    }
  }, [isSubmitting]);
  (0, import_react8.useEffect)(() => {
    if (open && isReloading) {
      setOpen(false);
    }
  }, [open, isReloading]);
  console.log(actionData == null ? void 0 : actionData.success, transition.type);
  return /* @__PURE__ */ React.createElement(import_material19.Box, {
    className: "comment-box"
  }, /* @__PURE__ */ React.createElement(import_material19.Button, {
    size: "small",
    onClick: () => setOpen(!open),
    variant: "text",
    disableRipple: true,
    disableFocusRipple: true,
    disableTouchRipple: true,
    disableElevation: true
  }, "Reply"), /* @__PURE__ */ React.createElement(import_material19.Collapse, {
    in: open
  }, /* @__PURE__ */ React.createElement(import_remix7.Form, {
    ref: formRef,
    method: "post"
  }, parent && /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "parent",
    value: parent
  }), commentOn && /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "commentOn",
    value: commentOn
  }), /* @__PURE__ */ React.createElement(import_material19.Grid, {
    sx: { mt: 1 },
    container: true,
    spacing: 1
  }, /* @__PURE__ */ React.createElement(import_material19.Grid, {
    item: true,
    xs: 12,
    sm: 4,
    sx: { display: "flex", flexDirection: "column" }
  }, /* @__PURE__ */ React.createElement(import_material19.TextField, {
    label: "Name",
    name: "author",
    size: "small",
    required: true,
    sx: { mb: 1 }
  }), /* @__PURE__ */ React.createElement(import_material19.TextField, {
    label: "Email",
    type: "email",
    placeholder: "Enter a valid email address",
    name: "authorEmail",
    size: "small"
  })), /* @__PURE__ */ React.createElement(import_material19.Grid, {
    item: true,
    xs: 12,
    sm: 8
  }, /* @__PURE__ */ React.createElement(import_material19.TextField, {
    label: "Comment",
    name: "content",
    required: true,
    multiline: true,
    fullWidth: true,
    minRows: 2.4
  })), /* @__PURE__ */ React.createElement(import_material19.Grid, {
    item: true,
    xs: 12
  }, /* @__PURE__ */ React.createElement(import_material19.Box, {
    sx: {
      mx: 1,
      display: "flex",
      flexDirection: "row",
      alignItems: "center"
    }
  }, /* @__PURE__ */ React.createElement(import_material19.Typography, {
    sx: { flex: 1 },
    variant: "caption"
  }, "Emails wont be published."), /* @__PURE__ */ React.createElement(import_material19.Button, {
    size: "small",
    variant: "contained",
    type: "submit",
    disableElevation: true
  }, "Submit")))))));
}

// app/components/Content/components/Comments/index.tsx
var import_lodash2 = require("lodash");
var import_material20 = require("@mui/material");
function Comments({
  comments,
  child,
  databaseId
}) {
  var _a;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, !child && /* @__PURE__ */ React.createElement(CreateComment, {
    commentOn: databaseId
  }), (_a = comments == null ? void 0 : comments.nodes) == null ? void 0 : _a.map((comment) => {
    const {
      content,
      date,
      id: commentId,
      databaseId: commentDatabaseId,
      author,
      replies
    } = comment || {};
    return /* @__PURE__ */ React.createElement(import_material20.Box, {
      sx: { backgroundColor: "#EEE", borderRadius: 3, p: 2, mb: 1 }
    }, /* @__PURE__ */ React.createElement(Comment, {
      key: commentId,
      author,
      date
    }, content), /* @__PURE__ */ React.createElement(CreateComment, {
      parent: commentDatabaseId,
      commentOn: databaseId
    }), !(0, import_lodash2.isEmpty)(replies == null ? void 0 : replies.nodes) && /* @__PURE__ */ React.createElement(import_material20.Box, null, /* @__PURE__ */ React.createElement(Comments, {
      databaseId,
      comments: replies,
      child: true
    })));
  }));
}

// route:/Users/ahmad/Dev/personal/remix/ahandani.com/app/routes/posts/$slug.tsx
var loader = async ({ params }) => {
  return getPost({ slug: params.slug });
};
var action = async ({ request }) => {
  const formData = await request.formData();
  const values = Object.fromEntries(formData);
  return createComment(values);
};
function PostSlug() {
  const { title, content, comments, databaseId } = (0, import_remix8.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_material21.Button, {
    component: import_remix8.Link,
    disableRipple: true,
    variant: "text",
    to: "/posts",
    startIcon: /* @__PURE__ */ React.createElement(import_icons_material.ArrowBackOutlined, null)
  }, "Back to blog"), /* @__PURE__ */ React.createElement(Title, {
    variant: "h2"
  }, title), /* @__PURE__ */ React.createElement(Body, null, content), /* @__PURE__ */ React.createElement(Comments, {
    databaseId,
    comments
  }));
}

// route:/Users/ahmad/Dev/personal/remix/ahandani.com/app/routes/posts/index.tsx
var posts_exports = {};
__export(posts_exports, {
  default: () => Posts,
  loader: () => loader2
});
init_react();
var import_remix9 = __toESM(require_remix());

// app/api/posts/getPosts.ts
init_react();
var import_graphql_request5 = require("graphql-request");
var GET_POSTS = import_graphql_request5.gql`
  query getPosts($first: Int, $last: Int, $after: String, $before: String) {
    posts(first: $first, last: $last, after: $after, before: $before) {
      nodes {
        id
        title
        excerpt
        slug
        categories {
          nodes {
            name
            id
          }
        }
        commentCount
        date
        dateGmt
      }
      pageInfo {
        hasNextPage
        endCursor
        hasPreviousPage
        startCursor
      }
    }
  }
`;
var getPosts = async ({
  limit = 5,
  after,
  before
}) => {
  const data = await graphql.request(GET_POSTS, {
    first: after ? limit : before ? null : limit,
    last: before ? limit : null,
    after,
    before
  });
  return data.posts;
};

// route:/Users/ahmad/Dev/personal/remix/ahandani.com/app/routes/posts/index.tsx
var import_query_string = __toESM(require("query-string"));
var import_use_query_params2 = require("use-query-params");

// app/components/Content/components/Excerpt/index.tsx
init_react();
var import_material22 = require("@mui/material");
function Excerpt({
  slug,
  title,
  excerpt,
  commentCount,
  date
}) {
  return /* @__PURE__ */ React.createElement(import_material22.Box, {
    sx: { mt: 4, ml: 3 }
  }, /* @__PURE__ */ React.createElement(Date, {
    date
  }), /* @__PURE__ */ React.createElement(Title, {
    to: slug
  }, title), excerpt && /* @__PURE__ */ React.createElement(Body, null, excerpt), commentCount && `comments: ${commentCount}`);
}

// route:/Users/ahmad/Dev/personal/remix/ahandani.com/app/routes/posts/index.tsx
var import_material23 = require("@mui/material");
var loader2 = async ({ request }) => {
  const url = new URL(request.url);
  const params = import_query_string.default.parse(url.search, { parseNumbers: true });
  return getPosts(params);
};
function Posts() {
  const { nodes, pageInfo } = (0, import_remix9.useLoaderData)();
  const { endCursor, hasNextPage, hasPreviousPage, startCursor } = pageInfo;
  const pagingOptions = [5, 10, 15, 20];
  const [query, setQuery] = (0, import_use_query_params2.useQueryParams)({
    limit: import_use_query_params2.NumberParam,
    after: import_use_query_params2.StringParam,
    before: import_use_query_params2.StringParam
  });
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_material23.Typography, {
    variant: "h1"
  }, "Posts"), /* @__PURE__ */ React.createElement("div", null, nodes.map((_a) => {
    var _b = _a, { id } = _b, rest = __objRest(_b, ["id"]);
    return /* @__PURE__ */ React.createElement(Excerpt, __spreadProps(__spreadValues({}, rest), {
      key: String(id)
    }));
  })), /* @__PURE__ */ React.createElement(import_material23.FormControl, {
    sx: { m: 1, minWidth: 120 }
  }, /* @__PURE__ */ React.createElement(import_material23.InputLabel, {
    htmlFor: "grouped-native-select"
  }, "Page size"), /* @__PURE__ */ React.createElement(import_material23.Select, {
    native: true,
    defaultValue: 5,
    size: "small",
    value: query.limit,
    onChange: (e) => {
      const limit = Number(e.target.value);
      setQuery({ before: void 0, after: void 0, limit });
    },
    label: "Page size"
  }, pagingOptions.map((value, i) => /* @__PURE__ */ React.createElement("option", {
    key: i,
    value
  }, value))), /* @__PURE__ */ React.createElement(import_material23.ButtonGroup, {
    variant: "text",
    "aria-label": "text button group"
  }, /* @__PURE__ */ React.createElement(import_material23.Button, {
    disabled: !hasPreviousPage,
    onClick: () => {
      setQuery({
        before: startCursor,
        after: void 0
      });
    }
  }, "Previous"), /* @__PURE__ */ React.createElement(import_material23.Button, {
    disabled: !hasNextPage,
    onClick: () => {
      setQuery({
        after: endCursor,
        before: void 0
      });
    }
  }, "Next"))));
}

// route:/Users/ahmad/Dev/personal/remix/ahandani.com/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
init_react();
function Index() {
  return /* @__PURE__ */ React.createElement("div", null);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "bf0c6a3b", "entry": { "module": "/build/entry.client-I2GG7G3Q.js", "imports": ["/build/_shared/chunk-XZLQHWVS.js", "/build/_shared/chunk-LIQCG3RX.js", "/build/_shared/chunk-YLBUDMC5.js", "/build/_shared/chunk-5HASPQVD.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-4H2X5V7P.js", "imports": ["/build/_shared/chunk-QSQ47YZO.js", "/build/_shared/chunk-W4U6QUXF.js", "/build/_shared/chunk-R3JABAGB.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/about/index": { "id": "routes/about/index", "parentId": "root", "path": "about", "index": true, "caseSensitive": void 0, "module": "/build/routes/about/index-LKCHZWAG.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/contact/index": { "id": "routes/contact/index", "parentId": "root", "path": "contact", "index": true, "caseSensitive": void 0, "module": "/build/routes/contact/index-F477WJ7T.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-KUEVHEPF.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/posts/$slug": { "id": "routes/posts/$slug", "parentId": "root", "path": "posts/:slug", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/posts/$slug-AFJ54IKY.js", "imports": ["/build/_shared/chunk-2PAA74GY.js", "/build/_shared/chunk-FEVHTCW3.js", "/build/_shared/chunk-SJ76CP4Q.js", "/build/_shared/chunk-5IKEBJUR.js", "/build/_shared/chunk-2F4MTZAO.js", "/build/_shared/chunk-QNTONTJ3.js", "/build/_shared/chunk-Z2BXIESR.js", "/build/_shared/chunk-PWUL6Z63.js", "/build/_shared/chunk-7BGXFX2V.js", "/build/_shared/chunk-WKPFRMWH.js", "/build/_shared/chunk-3FL5XQFV.js", "/build/_shared/chunk-ZCPKQDXW.js", "/build/_shared/chunk-GPKRTIYB.js", "/build/_shared/chunk-SEBT6LDT.js", "/build/_shared/chunk-GBB7ZAKN.js", "/build/_shared/chunk-KD7TJNGY.js", "/build/_shared/chunk-R3FD57FO.js", "/build/_shared/chunk-GOBH7FYO.js", "/build/_shared/chunk-L77FJ5EY.js", "/build/_shared/chunk-BRMMSIFF.js", "/build/_shared/chunk-DOBDAXM2.js", "/build/_shared/chunk-V7XQ3TIE.js", "/build/_shared/chunk-M23JJHED.js", "/build/_shared/chunk-Y3LU4HBN.js", "/build/_shared/chunk-4YSDC3ER.js", "/build/_shared/chunk-GUPNPFHZ.js", "/build/_shared/chunk-W4A7SHMU.js", "/build/_shared/chunk-W56QXCHJ.js", "/build/_shared/chunk-ALQ745R6.js", "/build/_shared/chunk-XG2GI2CK.js", "/build/_shared/chunk-UGTDFQJA.js", "/build/_shared/chunk-3P27AQ4G.js", "/build/_shared/chunk-3S3LZSCG.js", "/build/_shared/chunk-VB22A75O.js", "/build/_shared/chunk-GJMZXVSY.js", "/build/_shared/chunk-DVHDMMMH.js", "/build/_shared/chunk-YHLFOESM.js", "/build/_shared/chunk-6FBVEQWS.js", "/build/_shared/chunk-NXHDPPES.js", "/build/_shared/chunk-JPBKDIST.js", "/build/_shared/chunk-JORED3IQ.js", "/build/_shared/chunk-4BX3NLNY.js", "/build/_shared/chunk-VUZOTFO7.js", "/build/_shared/chunk-RJ5CQMTB.js", "/build/_shared/chunk-FDNWWYVD.js", "/build/_shared/chunk-UFWMUKBJ.js", "/build/_shared/chunk-7BTTJ2IX.js", "/build/_shared/chunk-3XGUCSLJ.js", "/build/_shared/chunk-UNYKXEBL.js", "/build/_shared/chunk-FWFQX4GN.js", "/build/_shared/chunk-XM5QZXWO.js", "/build/_shared/chunk-C3ZOSX4C.js", "/build/_shared/chunk-OVJ65CHB.js", "/build/_shared/chunk-PFSU2SGA.js", "/build/_shared/chunk-H4D6UN3K.js", "/build/_shared/chunk-XJYCQAT4.js", "/build/_shared/chunk-BNF3JSEM.js", "/build/_shared/chunk-CCKYR4WK.js", "/build/_shared/chunk-M7TQXBW4.js", "/build/_shared/chunk-WCEVWUF2.js", "/build/_shared/chunk-NTMTHKUX.js", "/build/_shared/chunk-PUDAVAGD.js", "/build/_shared/chunk-SVYDQDT2.js", "/build/_shared/chunk-6245GZRY.js", "/build/_shared/chunk-SNZT7QBJ.js", "/build/_shared/chunk-WUH37ECU.js", "/build/_shared/chunk-NO2ZEGRK.js", "/build/_shared/chunk-DOQKUZJ6.js", "/build/_shared/chunk-KFSHD2MQ.js", "/build/_shared/chunk-7XZYW2LQ.js", "/build/_shared/chunk-LLCUSMLV.js", "/build/_shared/chunk-GZQ42VGR.js", "/build/_shared/chunk-XLTNFOEH.js", "/build/_shared/chunk-BUH7Z4XX.js", "/build/_shared/chunk-WKX7WOLX.js", "/build/_shared/chunk-CV2TZB3B.js", "/build/_shared/chunk-FLHDETGA.js", "/build/_shared/chunk-FQEHSIU5.js", "/build/_shared/chunk-ZHD5KFMQ.js", "/build/_shared/chunk-4HSA74UT.js", "/build/_shared/chunk-CPFRMS43.js", "/build/_shared/chunk-3EQ7BZTR.js", "/build/_shared/chunk-OCOJ45CS.js", "/build/_shared/chunk-IWXV3OBO.js", "/build/_shared/chunk-4RTRVQOD.js", "/build/_shared/chunk-OEPICTYQ.js", "/build/_shared/chunk-ZTCCHYRV.js", "/build/_shared/chunk-WFEXFX5P.js", "/build/_shared/chunk-27HUB2X6.js", "/build/_shared/chunk-ULLAVCTK.js", "/build/_shared/chunk-VXG3GNAC.js", "/build/_shared/chunk-6TWLUE5F.js", "/build/_shared/chunk-Q7KYYUGL.js", "/build/_shared/chunk-HKO7YHOA.js", "/build/_shared/chunk-NDZL66DV.js", "/build/_shared/chunk-33RA7KAQ.js", "/build/_shared/chunk-PMLNWZDD.js", "/build/_shared/chunk-KO6G4JMP.js", "/build/_shared/chunk-74AHNABO.js", "/build/_shared/chunk-7LQTZNKQ.js", "/build/_shared/chunk-4YGNL5JX.js", "/build/_shared/chunk-7KVMDFXQ.js", "/build/_shared/chunk-47WWQJ46.js", "/build/_shared/chunk-6N7KLR7V.js", "/build/_shared/chunk-VMKMHX34.js", "/build/_shared/chunk-WTBZOJYF.js", "/build/_shared/chunk-LRE4W5EA.js", "/build/_shared/chunk-AAFX3XDJ.js", "/build/_shared/chunk-EMYRTA4B.js", "/build/_shared/chunk-4VOXDLMP.js", "/build/_shared/chunk-J6B36CCP.js", "/build/_shared/chunk-7G5ZUTRW.js", "/build/_shared/chunk-D4TPO2XH.js", "/build/_shared/chunk-3S64FGO4.js", "/build/_shared/chunk-6OMXTSFE.js", "/build/_shared/chunk-PJQPVRXM.js", "/build/_shared/chunk-E64VTCQE.js", "/build/_shared/chunk-HQ7IQXT6.js", "/build/_shared/chunk-KBFJZIAE.js", "/build/_shared/chunk-EWMTJUNQ.js", "/build/_shared/chunk-SC6T7XS4.js", "/build/_shared/chunk-Z7TH5IPW.js", "/build/_shared/chunk-7Y7VTZFH.js", "/build/_shared/chunk-T2Z3R4FC.js", "/build/_shared/chunk-NLFH2HAX.js", "/build/_shared/chunk-QCUR7RYS.js", "/build/_shared/chunk-IQ6JESOU.js", "/build/_shared/chunk-BSNBLGDB.js", "/build/_shared/chunk-WICH6G2S.js", "/build/_shared/chunk-NRBEKVJK.js", "/build/_shared/chunk-6NPO4GZC.js", "/build/_shared/chunk-QC7C3FXD.js", "/build/_shared/chunk-VR4Z2UCN.js", "/build/_shared/chunk-DU745X5B.js", "/build/_shared/chunk-DXWILPX5.js", "/build/_shared/chunk-LKOAU6JF.js", "/build/_shared/chunk-UJQV7VOG.js", "/build/_shared/chunk-JJ4ZZSXL.js", "/build/_shared/chunk-EQFWUJMV.js", "/build/_shared/chunk-A4A3OZE2.js", "/build/_shared/chunk-J6FK2MAA.js", "/build/_shared/chunk-DMBX3E4I.js", "/build/_shared/chunk-2DQFMENJ.js", "/build/_shared/chunk-4XE56PWW.js", "/build/_shared/chunk-WQ7VZLRX.js", "/build/_shared/chunk-QBJY3INQ.js", "/build/_shared/chunk-XVMEYARA.js", "/build/_shared/chunk-OXJ5EORS.js", "/build/_shared/chunk-RCYHLLOI.js", "/build/_shared/chunk-AHIIGELO.js", "/build/_shared/chunk-AFCW2ZB4.js", "/build/_shared/chunk-AKHGCG7P.js", "/build/_shared/chunk-EWDJSKWQ.js", "/build/_shared/chunk-5JBDOJ6O.js", "/build/_shared/chunk-Z67DXQW3.js", "/build/_shared/chunk-J5FBDERU.js", "/build/_shared/chunk-KBDGL5FR.js", "/build/_shared/chunk-IW3CDDHT.js", "/build/_shared/chunk-PJWJBP23.js", "/build/_shared/chunk-NX7KGWLE.js", "/build/_shared/chunk-RF6MZZCN.js", "/build/_shared/chunk-CQKV2EQ7.js", "/build/_shared/chunk-NKKBHMCW.js", "/build/_shared/chunk-DXERLLHV.js", "/build/_shared/chunk-UI5GPMBE.js", "/build/_shared/chunk-GZYA3Y3Y.js", "/build/_shared/chunk-RWJ45GUW.js", "/build/_shared/chunk-INIJJ3GQ.js", "/build/_shared/chunk-KFW3XBRL.js", "/build/_shared/chunk-WLG4XGM5.js", "/build/_shared/chunk-BG6YPP4S.js", "/build/_shared/chunk-IM2SYY6B.js", "/build/_shared/chunk-7FI3NJOG.js", "/build/_shared/chunk-IPDCZGQQ.js", "/build/_shared/chunk-D2EYOIDH.js", "/build/_shared/chunk-AGG6EU65.js", "/build/_shared/chunk-Q2CY67S3.js", "/build/_shared/chunk-IPEVTXBN.js", "/build/_shared/chunk-R2ZVW7JS.js", "/build/_shared/chunk-JDAPERZZ.js", "/build/_shared/chunk-ZE6KGRPR.js", "/build/_shared/chunk-76KJNLVB.js", "/build/_shared/chunk-OF4QVGAW.js", "/build/_shared/chunk-4OEUC3QZ.js", "/build/_shared/chunk-4ZYPRY6K.js", "/build/_shared/chunk-G34KKQ2I.js", "/build/_shared/chunk-OANZ2DTD.js", "/build/_shared/chunk-CESVXAL6.js", "/build/_shared/chunk-7C76YFPZ.js", "/build/_shared/chunk-M47TVVLZ.js", "/build/_shared/chunk-5TNOMBYC.js", "/build/_shared/chunk-NDWG523S.js", "/build/_shared/chunk-NTRIDUO4.js", "/build/_shared/chunk-NSZ5GVQZ.js", "/build/_shared/chunk-AY6J7ACD.js", "/build/_shared/chunk-XURQE7IY.js", "/build/_shared/chunk-SACKUBOH.js", "/build/_shared/chunk-PDBL2ZH2.js", "/build/_shared/chunk-NY5B3VBQ.js", "/build/_shared/chunk-HBIIU4RT.js", "/build/_shared/chunk-3YZP3JE3.js", "/build/_shared/chunk-7WZQQYG3.js", "/build/_shared/chunk-F7WNZUEY.js", "/build/_shared/chunk-5E2IIC3R.js", "/build/_shared/chunk-NRD7ZSGE.js", "/build/_shared/chunk-ELKX7PXO.js", "/build/_shared/chunk-TAA62HQF.js", "/build/_shared/chunk-EUO7UKZO.js", "/build/_shared/chunk-FB3CJ3RE.js", "/build/_shared/chunk-FPAGCYY7.js", "/build/_shared/chunk-273AWAVK.js", "/build/_shared/chunk-5BHZEMOS.js", "/build/_shared/chunk-SZY2HKD5.js", "/build/_shared/chunk-YX37WHUH.js", "/build/_shared/chunk-UDBDOEDF.js", "/build/_shared/chunk-E7BE5DA4.js", "/build/_shared/chunk-TGU24Y64.js", "/build/_shared/chunk-YWGYYMT6.js", "/build/_shared/chunk-5CQVFFK7.js", "/build/_shared/chunk-QT3PH773.js", "/build/_shared/chunk-56VNAKMI.js", "/build/_shared/chunk-SBEGFZ4Y.js", "/build/_shared/chunk-BCFHO6AZ.js", "/build/_shared/chunk-LQF7JM2A.js", "/build/_shared/chunk-DXYXNPDA.js", "/build/_shared/chunk-ABLL3IKH.js", "/build/_shared/chunk-JGLRJ4N7.js", "/build/_shared/chunk-4YOESQDZ.js", "/build/_shared/chunk-CPHV3GDJ.js", "/build/_shared/chunk-W4VOUYU4.js", "/build/_shared/chunk-UEQCM5Y2.js", "/build/_shared/chunk-KNPYGY67.js", "/build/_shared/chunk-AQ3RRPJZ.js", "/build/_shared/chunk-B6LR7LVO.js", "/build/_shared/chunk-H6UE2LYC.js", "/build/_shared/chunk-MWYVHWLM.js", "/build/_shared/chunk-OU5QN6CP.js", "/build/_shared/chunk-LY5F7D7N.js", "/build/_shared/chunk-KYK6DOST.js", "/build/_shared/chunk-UVA5AHOJ.js", "/build/_shared/chunk-NLNL6Z3Q.js", "/build/_shared/chunk-3HEETLBS.js", "/build/_shared/chunk-7K77MYWA.js", "/build/_shared/chunk-CJET6DMI.js", "/build/_shared/chunk-AMFP7YQG.js", "/build/_shared/chunk-ARV2MSXF.js", "/build/_shared/chunk-VJJDK3MF.js", "/build/_shared/chunk-UEDB5XQW.js", "/build/_shared/chunk-IANEEX5H.js", "/build/_shared/chunk-6ALFTNRC.js", "/build/_shared/chunk-4HVZ7ZKY.js", "/build/_shared/chunk-2V4F4FJS.js", "/build/_shared/chunk-54AY2HKU.js", "/build/_shared/chunk-PJULP4I7.js", "/build/_shared/chunk-BZWLXBSQ.js", "/build/_shared/chunk-NTF7N3KY.js", "/build/_shared/chunk-3WIRSHPM.js", "/build/_shared/chunk-TETON7QR.js", "/build/_shared/chunk-A4EI3TZZ.js", "/build/_shared/chunk-K4LBQVEJ.js", "/build/_shared/chunk-WNELA774.js", "/build/_shared/chunk-TMDSH6YP.js", "/build/_shared/chunk-QZ7QG3ZW.js", "/build/_shared/chunk-FRWTR53C.js", "/build/_shared/chunk-V6EP7BOA.js", "/build/_shared/chunk-DLV6CGUG.js", "/build/_shared/chunk-EYRHCD54.js", "/build/_shared/chunk-3HSACRL7.js", "/build/_shared/chunk-K6OZHEZ3.js", "/build/_shared/chunk-2FW3SO2E.js", "/build/_shared/chunk-6YK5DBWL.js", "/build/_shared/chunk-VALKZUOM.js", "/build/_shared/chunk-ZLBN4CV5.js", "/build/_shared/chunk-V3YKWVC3.js", "/build/_shared/chunk-35VJKJR6.js", "/build/_shared/chunk-APSE4HBP.js", "/build/_shared/chunk-UJ3I7HBF.js", "/build/_shared/chunk-HLD7XDTH.js", "/build/_shared/chunk-XTSACFYX.js", "/build/_shared/chunk-KWPGIKIO.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/posts/index": { "id": "routes/posts/index", "parentId": "root", "path": "posts", "index": true, "caseSensitive": void 0, "module": "/build/routes/posts/index-MKCBP7MX.js", "imports": ["/build/_shared/chunk-2PAA74GY.js", "/build/_shared/chunk-FEVHTCW3.js", "/build/_shared/chunk-SJ76CP4Q.js", "/build/_shared/chunk-5IKEBJUR.js", "/build/_shared/chunk-2F4MTZAO.js", "/build/_shared/chunk-QNTONTJ3.js", "/build/_shared/chunk-Z2BXIESR.js", "/build/_shared/chunk-PWUL6Z63.js", "/build/_shared/chunk-7BGXFX2V.js", "/build/_shared/chunk-WKPFRMWH.js", "/build/_shared/chunk-3FL5XQFV.js", "/build/_shared/chunk-ZCPKQDXW.js", "/build/_shared/chunk-GPKRTIYB.js", "/build/_shared/chunk-SEBT6LDT.js", "/build/_shared/chunk-GBB7ZAKN.js", "/build/_shared/chunk-KD7TJNGY.js", "/build/_shared/chunk-R3FD57FO.js", "/build/_shared/chunk-GOBH7FYO.js", "/build/_shared/chunk-L77FJ5EY.js", "/build/_shared/chunk-BRMMSIFF.js", "/build/_shared/chunk-DOBDAXM2.js", "/build/_shared/chunk-V7XQ3TIE.js", "/build/_shared/chunk-M23JJHED.js", "/build/_shared/chunk-Y3LU4HBN.js", "/build/_shared/chunk-4YSDC3ER.js", "/build/_shared/chunk-GUPNPFHZ.js", "/build/_shared/chunk-W4A7SHMU.js", "/build/_shared/chunk-W56QXCHJ.js", "/build/_shared/chunk-ALQ745R6.js", "/build/_shared/chunk-XG2GI2CK.js", "/build/_shared/chunk-UGTDFQJA.js", "/build/_shared/chunk-3P27AQ4G.js", "/build/_shared/chunk-3S3LZSCG.js", "/build/_shared/chunk-VB22A75O.js", "/build/_shared/chunk-GJMZXVSY.js", "/build/_shared/chunk-DVHDMMMH.js", "/build/_shared/chunk-YHLFOESM.js", "/build/_shared/chunk-6FBVEQWS.js", "/build/_shared/chunk-NXHDPPES.js", "/build/_shared/chunk-JPBKDIST.js", "/build/_shared/chunk-JORED3IQ.js", "/build/_shared/chunk-4BX3NLNY.js", "/build/_shared/chunk-VUZOTFO7.js", "/build/_shared/chunk-RJ5CQMTB.js", "/build/_shared/chunk-FDNWWYVD.js", "/build/_shared/chunk-UFWMUKBJ.js", "/build/_shared/chunk-7BTTJ2IX.js", "/build/_shared/chunk-3XGUCSLJ.js", "/build/_shared/chunk-UNYKXEBL.js", "/build/_shared/chunk-FWFQX4GN.js", "/build/_shared/chunk-XM5QZXWO.js", "/build/_shared/chunk-C3ZOSX4C.js", "/build/_shared/chunk-OVJ65CHB.js", "/build/_shared/chunk-PFSU2SGA.js", "/build/_shared/chunk-H4D6UN3K.js", "/build/_shared/chunk-XJYCQAT4.js", "/build/_shared/chunk-BNF3JSEM.js", "/build/_shared/chunk-CCKYR4WK.js", "/build/_shared/chunk-M7TQXBW4.js", "/build/_shared/chunk-WCEVWUF2.js", "/build/_shared/chunk-NTMTHKUX.js", "/build/_shared/chunk-PUDAVAGD.js", "/build/_shared/chunk-SVYDQDT2.js", "/build/_shared/chunk-6245GZRY.js", "/build/_shared/chunk-SNZT7QBJ.js", "/build/_shared/chunk-WUH37ECU.js", "/build/_shared/chunk-NO2ZEGRK.js", "/build/_shared/chunk-DOQKUZJ6.js", "/build/_shared/chunk-KFSHD2MQ.js", "/build/_shared/chunk-7XZYW2LQ.js", "/build/_shared/chunk-LLCUSMLV.js", "/build/_shared/chunk-GZQ42VGR.js", "/build/_shared/chunk-XLTNFOEH.js", "/build/_shared/chunk-BUH7Z4XX.js", "/build/_shared/chunk-WKX7WOLX.js", "/build/_shared/chunk-CV2TZB3B.js", "/build/_shared/chunk-FLHDETGA.js", "/build/_shared/chunk-FQEHSIU5.js", "/build/_shared/chunk-ZHD5KFMQ.js", "/build/_shared/chunk-4HSA74UT.js", "/build/_shared/chunk-CPFRMS43.js", "/build/_shared/chunk-3EQ7BZTR.js", "/build/_shared/chunk-OCOJ45CS.js", "/build/_shared/chunk-IWXV3OBO.js", "/build/_shared/chunk-4RTRVQOD.js", "/build/_shared/chunk-OEPICTYQ.js", "/build/_shared/chunk-ZTCCHYRV.js", "/build/_shared/chunk-WFEXFX5P.js", "/build/_shared/chunk-27HUB2X6.js", "/build/_shared/chunk-ULLAVCTK.js", "/build/_shared/chunk-VXG3GNAC.js", "/build/_shared/chunk-6TWLUE5F.js", "/build/_shared/chunk-Q7KYYUGL.js", "/build/_shared/chunk-HKO7YHOA.js", "/build/_shared/chunk-NDZL66DV.js", "/build/_shared/chunk-33RA7KAQ.js", "/build/_shared/chunk-PMLNWZDD.js", "/build/_shared/chunk-KO6G4JMP.js", "/build/_shared/chunk-74AHNABO.js", "/build/_shared/chunk-7LQTZNKQ.js", "/build/_shared/chunk-4YGNL5JX.js", "/build/_shared/chunk-7KVMDFXQ.js", "/build/_shared/chunk-47WWQJ46.js", "/build/_shared/chunk-6N7KLR7V.js", "/build/_shared/chunk-VMKMHX34.js", "/build/_shared/chunk-WTBZOJYF.js", "/build/_shared/chunk-LRE4W5EA.js", "/build/_shared/chunk-AAFX3XDJ.js", "/build/_shared/chunk-EMYRTA4B.js", "/build/_shared/chunk-4VOXDLMP.js", "/build/_shared/chunk-J6B36CCP.js", "/build/_shared/chunk-7G5ZUTRW.js", "/build/_shared/chunk-D4TPO2XH.js", "/build/_shared/chunk-3S64FGO4.js", "/build/_shared/chunk-6OMXTSFE.js", "/build/_shared/chunk-PJQPVRXM.js", "/build/_shared/chunk-E64VTCQE.js", "/build/_shared/chunk-HQ7IQXT6.js", "/build/_shared/chunk-KBFJZIAE.js", "/build/_shared/chunk-EWMTJUNQ.js", "/build/_shared/chunk-SC6T7XS4.js", "/build/_shared/chunk-Z7TH5IPW.js", "/build/_shared/chunk-7Y7VTZFH.js", "/build/_shared/chunk-T2Z3R4FC.js", "/build/_shared/chunk-NLFH2HAX.js", "/build/_shared/chunk-QCUR7RYS.js", "/build/_shared/chunk-IQ6JESOU.js", "/build/_shared/chunk-BSNBLGDB.js", "/build/_shared/chunk-WICH6G2S.js", "/build/_shared/chunk-NRBEKVJK.js", "/build/_shared/chunk-6NPO4GZC.js", "/build/_shared/chunk-QC7C3FXD.js", "/build/_shared/chunk-VR4Z2UCN.js", "/build/_shared/chunk-DU745X5B.js", "/build/_shared/chunk-DXWILPX5.js", "/build/_shared/chunk-LKOAU6JF.js", "/build/_shared/chunk-UJQV7VOG.js", "/build/_shared/chunk-JJ4ZZSXL.js", "/build/_shared/chunk-EQFWUJMV.js", "/build/_shared/chunk-A4A3OZE2.js", "/build/_shared/chunk-J6FK2MAA.js", "/build/_shared/chunk-DMBX3E4I.js", "/build/_shared/chunk-2DQFMENJ.js", "/build/_shared/chunk-4XE56PWW.js", "/build/_shared/chunk-WQ7VZLRX.js", "/build/_shared/chunk-QBJY3INQ.js", "/build/_shared/chunk-XVMEYARA.js", "/build/_shared/chunk-OXJ5EORS.js", "/build/_shared/chunk-RCYHLLOI.js", "/build/_shared/chunk-AHIIGELO.js", "/build/_shared/chunk-AFCW2ZB4.js", "/build/_shared/chunk-AKHGCG7P.js", "/build/_shared/chunk-EWDJSKWQ.js", "/build/_shared/chunk-5JBDOJ6O.js", "/build/_shared/chunk-Z67DXQW3.js", "/build/_shared/chunk-J5FBDERU.js", "/build/_shared/chunk-KBDGL5FR.js", "/build/_shared/chunk-IW3CDDHT.js", "/build/_shared/chunk-PJWJBP23.js", "/build/_shared/chunk-NX7KGWLE.js", "/build/_shared/chunk-RF6MZZCN.js", "/build/_shared/chunk-CQKV2EQ7.js", "/build/_shared/chunk-NKKBHMCW.js", "/build/_shared/chunk-DXERLLHV.js", "/build/_shared/chunk-UI5GPMBE.js", "/build/_shared/chunk-GZYA3Y3Y.js", "/build/_shared/chunk-RWJ45GUW.js", "/build/_shared/chunk-INIJJ3GQ.js", "/build/_shared/chunk-KFW3XBRL.js", "/build/_shared/chunk-WLG4XGM5.js", "/build/_shared/chunk-BG6YPP4S.js", "/build/_shared/chunk-IM2SYY6B.js", "/build/_shared/chunk-7FI3NJOG.js", "/build/_shared/chunk-IPDCZGQQ.js", "/build/_shared/chunk-D2EYOIDH.js", "/build/_shared/chunk-AGG6EU65.js", "/build/_shared/chunk-Q2CY67S3.js", "/build/_shared/chunk-IPEVTXBN.js", "/build/_shared/chunk-R2ZVW7JS.js", "/build/_shared/chunk-JDAPERZZ.js", "/build/_shared/chunk-ZE6KGRPR.js", "/build/_shared/chunk-76KJNLVB.js", "/build/_shared/chunk-OF4QVGAW.js", "/build/_shared/chunk-4OEUC3QZ.js", "/build/_shared/chunk-4ZYPRY6K.js", "/build/_shared/chunk-G34KKQ2I.js", "/build/_shared/chunk-OANZ2DTD.js", "/build/_shared/chunk-CESVXAL6.js", "/build/_shared/chunk-7C76YFPZ.js", "/build/_shared/chunk-M47TVVLZ.js", "/build/_shared/chunk-5TNOMBYC.js", "/build/_shared/chunk-NDWG523S.js", "/build/_shared/chunk-NTRIDUO4.js", "/build/_shared/chunk-NSZ5GVQZ.js", "/build/_shared/chunk-AY6J7ACD.js", "/build/_shared/chunk-XURQE7IY.js", "/build/_shared/chunk-SACKUBOH.js", "/build/_shared/chunk-PDBL2ZH2.js", "/build/_shared/chunk-NY5B3VBQ.js", "/build/_shared/chunk-HBIIU4RT.js", "/build/_shared/chunk-3YZP3JE3.js", "/build/_shared/chunk-7WZQQYG3.js", "/build/_shared/chunk-F7WNZUEY.js", "/build/_shared/chunk-5E2IIC3R.js", "/build/_shared/chunk-NRD7ZSGE.js", "/build/_shared/chunk-ELKX7PXO.js", "/build/_shared/chunk-TAA62HQF.js", "/build/_shared/chunk-EUO7UKZO.js", "/build/_shared/chunk-FB3CJ3RE.js", "/build/_shared/chunk-FPAGCYY7.js", "/build/_shared/chunk-273AWAVK.js", "/build/_shared/chunk-5BHZEMOS.js", "/build/_shared/chunk-SZY2HKD5.js", "/build/_shared/chunk-YX37WHUH.js", "/build/_shared/chunk-UDBDOEDF.js", "/build/_shared/chunk-E7BE5DA4.js", "/build/_shared/chunk-TGU24Y64.js", "/build/_shared/chunk-YWGYYMT6.js", "/build/_shared/chunk-5CQVFFK7.js", "/build/_shared/chunk-QT3PH773.js", "/build/_shared/chunk-56VNAKMI.js", "/build/_shared/chunk-SBEGFZ4Y.js", "/build/_shared/chunk-BCFHO6AZ.js", "/build/_shared/chunk-LQF7JM2A.js", "/build/_shared/chunk-DXYXNPDA.js", "/build/_shared/chunk-ABLL3IKH.js", "/build/_shared/chunk-JGLRJ4N7.js", "/build/_shared/chunk-4YOESQDZ.js", "/build/_shared/chunk-CPHV3GDJ.js", "/build/_shared/chunk-W4VOUYU4.js", "/build/_shared/chunk-UEQCM5Y2.js", "/build/_shared/chunk-KNPYGY67.js", "/build/_shared/chunk-AQ3RRPJZ.js", "/build/_shared/chunk-B6LR7LVO.js", "/build/_shared/chunk-H6UE2LYC.js", "/build/_shared/chunk-MWYVHWLM.js", "/build/_shared/chunk-OU5QN6CP.js", "/build/_shared/chunk-LY5F7D7N.js", "/build/_shared/chunk-KYK6DOST.js", "/build/_shared/chunk-UVA5AHOJ.js", "/build/_shared/chunk-NLNL6Z3Q.js", "/build/_shared/chunk-3HEETLBS.js", "/build/_shared/chunk-7K77MYWA.js", "/build/_shared/chunk-CJET6DMI.js", "/build/_shared/chunk-AMFP7YQG.js", "/build/_shared/chunk-ARV2MSXF.js", "/build/_shared/chunk-VJJDK3MF.js", "/build/_shared/chunk-UEDB5XQW.js", "/build/_shared/chunk-IANEEX5H.js", "/build/_shared/chunk-6ALFTNRC.js", "/build/_shared/chunk-4HVZ7ZKY.js", "/build/_shared/chunk-2V4F4FJS.js", "/build/_shared/chunk-54AY2HKU.js", "/build/_shared/chunk-PJULP4I7.js", "/build/_shared/chunk-BZWLXBSQ.js", "/build/_shared/chunk-NTF7N3KY.js", "/build/_shared/chunk-3WIRSHPM.js", "/build/_shared/chunk-TETON7QR.js", "/build/_shared/chunk-A4EI3TZZ.js", "/build/_shared/chunk-K4LBQVEJ.js", "/build/_shared/chunk-WNELA774.js", "/build/_shared/chunk-TMDSH6YP.js", "/build/_shared/chunk-QZ7QG3ZW.js", "/build/_shared/chunk-FRWTR53C.js", "/build/_shared/chunk-V6EP7BOA.js", "/build/_shared/chunk-DLV6CGUG.js", "/build/_shared/chunk-EYRHCD54.js", "/build/_shared/chunk-3HSACRL7.js", "/build/_shared/chunk-K6OZHEZ3.js", "/build/_shared/chunk-2FW3SO2E.js", "/build/_shared/chunk-6YK5DBWL.js", "/build/_shared/chunk-VALKZUOM.js", "/build/_shared/chunk-ZLBN4CV5.js", "/build/_shared/chunk-V3YKWVC3.js", "/build/_shared/chunk-35VJKJR6.js", "/build/_shared/chunk-APSE4HBP.js", "/build/_shared/chunk-UJ3I7HBF.js", "/build/_shared/chunk-HLD7XDTH.js", "/build/_shared/chunk-XTSACFYX.js", "/build/_shared/chunk-KWPGIKIO.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-BF0C6A3B.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/contact/index": {
    id: "routes/contact/index",
    parentId: "root",
    path: "contact",
    index: true,
    caseSensitive: void 0,
    module: contact_exports
  },
  "routes/about/index": {
    id: "routes/about/index",
    parentId: "root",
    path: "about",
    index: true,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/posts/$slug": {
    id: "routes/posts/$slug",
    parentId: "root",
    path: "posts/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: slug_exports
  },
  "routes/posts/index": {
    id: "routes/posts/index",
    parentId: "root",
    path: "posts",
    index: true,
    caseSensitive: void 0,
    module: posts_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/cloudflare v1.3.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.3.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.3.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIudHN4IiwgIi4uL2FwcC9saWIvY3JlYXRlLWVtb3Rpb24tY2FjaGUudHMiLCAiLi4vYXBwL2NvbXBvbmVudHMvTGF5b3V0L3RoZW1lLnRzIiwgInJvdXRlOi9Vc2Vycy9haG1hZC9EZXYvcGVyc29uYWwvcmVtaXgvYWhhbmRhbmkuY29tL2FwcC9yb290LnRzeCIsICIuLi9hcHAvbGliL2NsaWVudC1zdHlsZS1jb250ZXh0LnRzIiwgIi4uL2FwcC9jb21wb25lbnRzL0xheW91dC9pbmRleC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvTG9nby9pbmRleC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvTGF5b3V0L2hvb2tzL3VzZS1sYXlvdXQtY29udGV4dC50cyIsICIuLi9hcHAvY29tcG9uZW50cy9MYXlvdXQvY29udGV4dC50cyIsICIuLi9hcHAvY29tcG9uZW50cy9MYXlvdXQvY29tcG9uZW50cy9MYXlvdXRQcm92aWRlci9pbmRleC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvTWVudS9pbmRleC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvTWVudS9jb21wb25lbnRzL05hdmlnYXRpb24vaW5kZXgudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL01lbnUvY29tcG9uZW50cy9OYXZpZ2F0aW9uL2NvbXBvbmVudHMvTmF2TGluay9pbmRleC50c3giLCAicm91dGU6L1VzZXJzL2FobWFkL0Rldi9wZXJzb25hbC9yZW1peC9haGFuZGFuaS5jb20vYXBwL3JvdXRlcy9jb250YWN0L2luZGV4LnRzeCIsICJyb3V0ZTovVXNlcnMvYWhtYWQvRGV2L3BlcnNvbmFsL3JlbWl4L2FoYW5kYW5pLmNvbS9hcHAvcm91dGVzL2Fib3V0L2luZGV4LnRzeCIsICJyb3V0ZTovVXNlcnMvYWhtYWQvRGV2L3BlcnNvbmFsL3JlbWl4L2FoYW5kYW5pLmNvbS9hcHAvcm91dGVzL3Bvc3RzLyRzbHVnLnRzeCIsICIuLi9hcHAvYXBpL3Bvc3RzL2dldFBvc3QudHMiLCAiLi4vYXBwL2xpYi9ncmFwaHFsLnRzeCIsICIuLi9hcHAvYXBpL3F1ZXJpZXMudHMiLCAiLi4vYXBwL2FwaS9jb21tZW50cy9jcmVhdGVDb21tZW50LnRzIiwgIi4uL2FwcC9jb21wb25lbnRzL0NvbnRlbnQvY29tcG9uZW50cy9UaXRsZS9pbmRleC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvQ29udGVudC9jb21wb25lbnRzL0NvbW1lbnRzL2luZGV4LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9Db250ZW50L2NvbXBvbmVudHMvQ29tbWVudHMvY29tcG9uZW50cy9Db21tZW50L2luZGV4LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9EYXRlL2luZGV4LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9BdmF0YXIvaW5kZXgudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0NvbnRlbnQvY29tcG9uZW50cy9Cb2R5L2luZGV4LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9Db250ZW50L2NvbXBvbmVudHMvQm9keS9jb21wb25lbnRzL0NvZGVCbG9jay9pbmRleC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvQ29udGVudC9jb21wb25lbnRzL0JvZHkvY29tcG9uZW50cy9CbG9ja3F1b3RlL2luZGV4LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9Db250ZW50L2NvbXBvbmVudHMvQm9keS9jb21wb25lbnRzL0ltYWdlL2luZGV4LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9Db250ZW50L2NvbXBvbmVudHMvQm9keS9jb21wb25lbnRzL01lZGlhL2luZGV4LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9Db250ZW50L2NvbXBvbmVudHMvQm9keS9jb21wb25lbnRzL0hlYWRpbmcvaW5kZXgudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0NvbnRlbnQvY29tcG9uZW50cy9Db21tZW50cy9jb21wb25lbnRzL0NyZWF0ZUNvbW1lbnQvaW5kZXgudHN4IiwgInJvdXRlOi9Vc2Vycy9haG1hZC9EZXYvcGVyc29uYWwvcmVtaXgvYWhhbmRhbmkuY29tL2FwcC9yb3V0ZXMvcG9zdHMvaW5kZXgudHN4IiwgIi4uL2FwcC9hcGkvcG9zdHMvZ2V0UG9zdHMudHMiLCAiLi4vYXBwL2NvbXBvbmVudHMvQ29udGVudC9jb21wb25lbnRzL0V4Y2VycHQvaW5kZXgudHN4IiwgInJvdXRlOi9Vc2Vycy9haG1hZC9EZXYvcGVyc29uYWwvcmVtaXgvYWhhbmRhbmkuY29tL2FwcC9yb3V0ZXMvaW5kZXgudHN4IiwgInNlcnZlci1hc3NldHMtbWFuaWZlc3Q6QHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL2Nsb3VkZmxhcmUgdjEuMy4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGNsb3VkZmxhcmUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL2Nsb3VkZmxhcmUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ2xvdWRmbGFyZUtWU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gY2xvdWRmbGFyZS5jcmVhdGVDbG91ZGZsYXJlS1ZTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjbG91ZGZsYXJlLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNsb3VkZmxhcmUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjbG91ZGZsYXJlLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gY2xvdWRmbGFyZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4zLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjMuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuXG4iLCAiZXhwb3J0ICogZnJvbSBcIkByZW1peC1ydW4vZGV2L3NlcnZlci1idWlsZFwiOyIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCIvVXNlcnMvYWhtYWQvRGV2L3BlcnNvbmFsL3JlbWl4L2FoYW5kYW5pLmNvbS9hcHAvZW50cnkuc2VydmVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCIvVXNlcnMvYWhtYWQvRGV2L3BlcnNvbmFsL3JlbWl4L2FoYW5kYW5pLmNvbS9hcHAvcm9vdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiL1VzZXJzL2FobWFkL0Rldi9wZXJzb25hbC9yZW1peC9haGFuZGFuaS5jb20vYXBwL3JvdXRlcy9jb250YWN0L2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvVXNlcnMvYWhtYWQvRGV2L3BlcnNvbmFsL3JlbWl4L2FoYW5kYW5pLmNvbS9hcHAvcm91dGVzL2Fib3V0L2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUzIGZyb20gXCIvVXNlcnMvYWhtYWQvRGV2L3BlcnNvbmFsL3JlbWl4L2FoYW5kYW5pLmNvbS9hcHAvcm91dGVzL3Bvc3RzLyRzbHVnLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU0IGZyb20gXCIvVXNlcnMvYWhtYWQvRGV2L3BlcnNvbmFsL3JlbWl4L2FoYW5kYW5pLmNvbS9hcHAvcm91dGVzL3Bvc3RzL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU1IGZyb20gXCIvVXNlcnMvYWhtYWQvRGV2L3BlcnNvbmFsL3JlbWl4L2FoYW5kYW5pLmNvbS9hcHAvcm91dGVzL2luZGV4LnRzeFwiO1xuICBleHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCJAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3RcIjtcbiAgZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG4gIGV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gICAgXCJyb290XCI6IHtcbiAgICAgIGlkOiBcInJvb3RcIixcbiAgICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgICBwYXRoOiBcIlwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUwXG4gICAgfSxcbiAgXCJyb3V0ZXMvY29udGFjdC9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvY29udGFjdC9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJjb250YWN0XCIsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxXG4gICAgfSxcbiAgXCJyb3V0ZXMvYWJvdXQvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Fib3V0L2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImFib3V0XCIsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUyXG4gICAgfSxcbiAgXCJyb3V0ZXMvcG9zdHMvJHNsdWdcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3Bvc3RzLyRzbHVnXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInBvc3RzLzpzbHVnXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTNcbiAgICB9LFxuICBcInJvdXRlcy9wb3N0cy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvcG9zdHMvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwicG9zdHNcIixcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTRcbiAgICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTVcbiAgICB9XG4gIH07IiwgImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSBcInJlbWl4XCI7XG5cbmltcG9ydCBjcmVhdGVFbW90aW9uQ2FjaGUgZnJvbSBcIi4vbGliL2NyZWF0ZS1lbW90aW9uLWNhY2hlXCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4vY29tcG9uZW50cy9MYXlvdXQvdGhlbWVcIjtcblxuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gXCJAbXVpL21hdGVyaWFsL0Nzc0Jhc2VsaW5lXCI7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvc3R5bGVzXCI7XG5pbXBvcnQgeyBDYWNoZVByb3ZpZGVyIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XG5pbXBvcnQgY3JlYXRlRW1vdGlvblNlcnZlciBmcm9tIFwiQGVtb3Rpb24vc2VydmVyL2NyZWF0ZS1pbnN0YW5jZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG4gIGNvbnN0IGNhY2hlID0gY3JlYXRlRW1vdGlvbkNhY2hlKCk7XG4gIGNvbnN0IHsgZXh0cmFjdENyaXRpY2FsVG9DaHVua3MgfSA9IGNyZWF0ZUVtb3Rpb25TZXJ2ZXIoY2FjaGUpO1xuXG4gIGNvbnN0IE11aVJlbWl4U2VydmVyID0gKCkgPT4gKFxuICAgIDxDYWNoZVByb3ZpZGVyIHZhbHVlPXtjYWNoZX0+XG4gICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICB7LyogQ3NzQmFzZWxpbmUga2lja3N0YXJ0IGFuIGVsZWdhbnQsIGNvbnNpc3RlbnQsIGFuZCBzaW1wbGUgYmFzZWxpbmUgdG8gYnVpbGQgdXBvbi4gKi99XG4gICAgICAgIDxDc3NCYXNlbGluZSAvPlxuICAgICAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgIDwvQ2FjaGVQcm92aWRlcj5cbiAgKTtcblxuICAvLyBSZW5kZXIgdGhlIGNvbXBvbmVudCB0byBhIHN0cmluZy5cbiAgY29uc3QgaHRtbCA9IHJlbmRlclRvU3RyaW5nKDxNdWlSZW1peFNlcnZlciAvPik7XG5cbiAgLy8gR3JhYiB0aGUgQ1NTIGZyb20gZW1vdGlvblxuICBjb25zdCB7IHN0eWxlcyB9ID0gZXh0cmFjdENyaXRpY2FsVG9DaHVua3MoaHRtbCk7XG5cbiAgbGV0IHN0eWxlc0hUTUwgPSBcIlwiO1xuXG4gIHN0eWxlcy5mb3JFYWNoKCh7IGtleSwgaWRzLCBjc3MgfSkgPT4ge1xuICAgIGNvbnN0IGVtb3Rpb25LZXkgPSBgJHtrZXl9ICR7aWRzLmpvaW4oXCIgXCIpfWA7XG4gICAgY29uc3QgbmV3U3R5bGVUYWcgPSBgPHN0eWxlIGRhdGEtZW1vdGlvbj1cIiR7ZW1vdGlvbktleX1cIj4ke2Nzc308L3N0eWxlPmA7XG4gICAgc3R5bGVzSFRNTCA9IGAke3N0eWxlc0hUTUx9JHtuZXdTdHlsZVRhZ31gO1xuICB9KTtcblxuICAvLyBBZGQgdGhlIGVtb3Rpb24gc3R5bGUgdGFncyBhZnRlciB0aGUgaW5zZXJ0aW9uIHBvaW50IG1ldGEgdGFnXG4gIGNvbnN0IG1hcmt1cCA9IGh0bWwucmVwbGFjZShcbiAgICAvPG1ldGEoXFxzKSpuYW1lPVwiZW1vdGlvbi1pbnNlcnRpb24tcG9pbnRcIihcXHMpKmNvbnRlbnQ9XCJlbW90aW9uLWluc2VydGlvbi1wb2ludFwiKFxccykqXFwvPi8sXG4gICAgYDxtZXRhIG5hbWU9XCJlbW90aW9uLWluc2VydGlvbi1wb2ludFwiIGNvbnRlbnQ9XCJlbW90aW9uLWluc2VydGlvbi1wb2ludFwiLz4ke3N0eWxlc0hUTUx9YFxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShgPCFET0NUWVBFIGh0bWw+JHttYXJrdXB9YCwge1xuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgfSk7XG59XG4iLCAiaW1wb3J0IGNyZWF0ZUNhY2hlIGZyb20gXCJAZW1vdGlvbi9jYWNoZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVFbW90aW9uQ2FjaGUoKSB7XG4gIHJldHVybiBjcmVhdGVDYWNoZSh7IGtleTogXCJjc3NcIiB9KTtcbn1cbiIsICJpbXBvcnQgeyBjcmVhdGVUaGVtZSB9IGZyb20gXCJAbXVpL21hdGVyaWFsL3N0eWxlc1wiO1xuaW1wb3J0IHsgcmVkIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvY29sb3JzXCI7XG5pbXBvcnQgQXBlcmN1UmVndWxhcldvZmYgZnJvbSBcIn4vcmVzb3VyY2VzL2ZvbnRzL2FwZXJjdV9yZWd1bGFyLXdlYmZvbnQud29mZlwiO1xuaW1wb3J0IEFwZXJjdVJlZ3VsYXJXb2ZmMiBmcm9tIFwifi9yZXNvdXJjZXMvZm9udHMvYXBlcmN1X3JlZ3VsYXItd2ViZm9udC53b2ZmMlwiO1xuaW1wb3J0IEFwZXJjdUJvbGRXb2ZmIGZyb20gXCJ+L3Jlc291cmNlcy9mb250cy9hcGVyY3VfYm9sZC13ZWJmb250LndvZmZcIjtcbmltcG9ydCBBcGVyY3VCb2xkV29mZjIgZnJvbSBcIn4vcmVzb3VyY2VzL2ZvbnRzL2FwZXJjdV9ib2xkLXdlYmZvbnQud29mZjJcIjtcblxuLy8gQ3JlYXRlIGEgdGhlbWUgaW5zdGFuY2UuXG5jb25zdCB0aGVtZSA9IGNyZWF0ZVRoZW1lKHtcbiAgdHlwb2dyYXBoeToge1xuICAgIGZvbnRGYW1pbHk6IFwiYXBlcmN1LCBBcmlhbFwiLFxuICAgIGJvZHkxOiB7XG4gICAgICBmb250U2l6ZTogXCIxLjA2MjVyZW1cIixcbiAgICAgIGxpbmVIZWlnaHQ6IFwiMS43XCIsXG4gICAgfSxcbiAgfSxcbiAgY29tcG9uZW50czoge1xuICAgIE11aUNzc0Jhc2VsaW5lOiB7XG4gICAgICBzdHlsZU92ZXJyaWRlczogYFxuICAgICAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdhcGVyY3UnO1xuICAgICAgICAgICAgICAgIHNyYzogdXJsKCR7QXBlcmN1UmVndWxhcldvZmYyfSkgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgICAgICAgICAgICAgICB1cmwoJHtBcGVyY3VSZWd1bGFyV29mZn0pIGZvcm1hdCgnd29mZicpO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodDtcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7IFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogJ2FwZXJjdSc7XG4gICAgICAgICAgICAgIHNyYzogdXJsKCR7QXBlcmN1Qm9sZFdvZmYyfSkgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgICAgICAgICAgICAgIHVybCgke0FwZXJjdUJvbGRXb2ZmfSkgZm9ybWF0KCd3b2ZmJyk7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICBmb250LXN0eWxlOiBib2xkO1xuICAgICAgICAgIFxuICAgICAgICAgIH1cbiAgICAgICAgICBgLFxuICAgIH0sXG4gIH0sXG4gIHBhbGV0dGU6IHtcbiAgICBwcmltYXJ5OiB7XG4gICAgICBtYWluOiBcIiM1NTZjZDZcIixcbiAgICB9LFxuICAgIHNlY29uZGFyeToge1xuICAgICAgbWFpbjogXCIjZmYwMDY3XCIsXG4gICAgfSxcbiAgICBlcnJvcjoge1xuICAgICAgbWFpbjogcmVkLkE0MDAsXG4gICAgfSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB0aGVtZTtcbiIsICJpbXBvcnQgeyBSZWFjdE5vZGUsIHVzZUNvbnRleHQsIHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIExpbmtzLFxuICBMaXZlUmVsb2FkLFxuICBNZXRhLFxuICBPdXRsZXQsXG4gIFNjcmlwdHMsXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxuICB1c2VDYXRjaCxcbn0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSwgdXNlTG9jYXRpb24gfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgUXVlcnlQYXJhbVByb3ZpZGVyIH0gZnJvbSBcInVzZS1xdWVyeS1wYXJhbXNcIjtcbmltcG9ydCB7IHdpdGhFbW90aW9uQ2FjaGUgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIjtcbmltcG9ydCB7IHVuc3RhYmxlX3VzZUVuaGFuY2VkRWZmZWN0IGFzIHVzZUVuaGFuY2VkRWZmZWN0IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCBDbGllbnRTdHlsZUNvbnRleHQgZnJvbSBcIi4vbGliL2NsaWVudC1zdHlsZS1jb250ZXh0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4vY29tcG9uZW50cy9MYXlvdXQvdGhlbWVcIjtcblxuaW50ZXJmYWNlIERvY3VtZW50UHJvcHMge1xuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xuICB0aXRsZT86IHN0cmluZztcbn1cblxuY29uc3QgRG9jdW1lbnQgPSB3aXRoRW1vdGlvbkNhY2hlKFxuICAoeyBjaGlsZHJlbiwgdGl0bGUgfTogRG9jdW1lbnRQcm9wcywgZW1vdGlvbkNhY2hlKSA9PiB7XG4gICAgY29uc3QgY2xpZW50U3R5bGVEYXRhID0gdXNlQ29udGV4dChDbGllbnRTdHlsZUNvbnRleHQpO1xuXG4gICAgLy8gT25seSBleGVjdXRlZCBvbiBjbGllbnRcbiAgICB1c2VFbmhhbmNlZEVmZmVjdCgoKSA9PiB7XG4gICAgICAvLyByZS1saW5rIHNoZWV0IGNvbnRhaW5lclxuICAgICAgZW1vdGlvbkNhY2hlLnNoZWV0LmNvbnRhaW5lciA9IGRvY3VtZW50LmhlYWQ7XG4gICAgICAvLyByZS1pbmplY3QgdGFnc1xuICAgICAgY29uc3QgdGFncyA9IGVtb3Rpb25DYWNoZS5zaGVldC50YWdzO1xuICAgICAgZW1vdGlvbkNhY2hlLnNoZWV0LmZsdXNoKCk7XG4gICAgICB0YWdzLmZvckVhY2goKHRhZykgPT4ge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGVcbiAgICAgICAgKGVtb3Rpb25DYWNoZS5zaGVldCBhcyBhbnkpLl9pbnNlcnRUYWcodGFnKTtcbiAgICAgIH0pO1xuICAgICAgLy8gcmVzZXQgY2FjaGUgdG8gcmVhcHBseSBnbG9iYWwgc3R5bGVzXG4gICAgICBjbGllbnRTdHlsZURhdGEucmVzZXQoKTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICAgIDxoZWFkPlxuICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9e3RoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWlufSAvPlxuICAgICAgICAgIHt0aXRsZSA/IDx0aXRsZT57dGl0bGV9PC90aXRsZT4gOiBudWxsfVxuICAgICAgICAgIDxNZXRhIC8+XG4gICAgICAgICAgPExpbmtzIC8+XG4gICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgIG5hbWU9XCJlbW90aW9uLWluc2VydGlvbi1wb2ludFwiXG4gICAgICAgICAgICBjb250ZW50PVwiZW1vdGlvbi1pbnNlcnRpb24tcG9pbnRcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvaGVhZD5cbiAgICAgICAgPGJvZHk+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuICAgICAgICAgIDxTY3JpcHRzIC8+XG4gICAgICAgICAge3Byb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIgJiYgPExpdmVSZWxvYWQgLz59XG4gICAgICAgIDwvYm9keT5cbiAgICAgIDwvaHRtbD5cbiAgICApO1xuICB9XG4pO1xuXG5jb25zdCBSb3V0ZUFkYXB0ZXI6IFJlYWN0LkZDID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcblxuICBjb25zdCBhZGFwdGVkSGlzdG9yeSA9IHVzZU1lbW8oXG4gICAgKCkgPT4gKHtcbiAgICAgIHJlcGxhY2UobG9jYXRpb246IGFueSkge1xuICAgICAgICBuYXZpZ2F0ZShsb2NhdGlvbiwgeyByZXBsYWNlOiB0cnVlLCBzdGF0ZTogbG9jYXRpb24uc3RhdGUgfSk7XG4gICAgICB9LFxuICAgICAgcHVzaChsb2NhdGlvbjogYW55KSB7XG4gICAgICAgIG5hdmlnYXRlKGxvY2F0aW9uLCB7IHJlcGxhY2U6IGZhbHNlLCBzdGF0ZTogbG9jYXRpb24uc3RhdGUgfSk7XG4gICAgICB9LFxuICAgIH0pLFxuICAgIFtuYXZpZ2F0ZV1cbiAgKTtcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3BiZXNoYWkvdXNlLXF1ZXJ5LXBhcmFtcy9pc3N1ZXMvMTk2XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbiAgLy8gQHRzLWlnbm9yZVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1yZXR1cm5cbiAgcmV0dXJuIGNoaWxkcmVuKHsgaGlzdG9yeTogYWRhcHRlZEhpc3RvcnksIGxvY2F0aW9uIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICByZXR1cm4gKFxuICAgIDxEb2N1bWVudD5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxRdWVyeVBhcmFtUHJvdmlkZXIgUmVhY3RSb3V0ZXJSb3V0ZT17Um91dGVBZGFwdGVyfT5cbiAgICAgICAgICA8T3V0bGV0IC8+XG4gICAgICAgIDwvUXVlcnlQYXJhbVByb3ZpZGVyPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC9Eb2N1bWVudD5cbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEVycm9yQm91bmRhcnkoeyBlcnJvciB9OiB7IGVycm9yOiBFcnJvciB9KSB7XG4gIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgcmV0dXJuIChcbiAgICA8RG9jdW1lbnQgdGl0bGU9XCJFcnJvciFcIj5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgxPlRoZXJlIHdhcyBhbiBlcnJvcjwvaDE+XG4gICAgICAgICAgPHA+e2Vycm9yLm1lc3NhZ2V9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvRG9jdW1lbnQ+XG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDYXRjaEJvdW5kYXJ5KCkge1xuICBjb25zdCBjYXVnaHQgPSB1c2VDYXRjaCgpO1xuICBsZXQgbWVzc2FnZTtcbiAgc3dpdGNoIChjYXVnaHQuc3RhdHVzKSB7XG4gICAgY2FzZSA0MDE6XG4gICAgICBtZXNzYWdlID0gKFxuICAgICAgICA8cD5cbiAgICAgICAgICBPb3BzISBMb29rcyBsaWtlIHlvdSB0cmllZCB0byB2aXNpdCBhIHBhZ2UgdGhhdCB5b3UgZG8gbm90IGhhdmUgYWNjZXNzXG4gICAgICAgICAgdG8uXG4gICAgICAgIDwvcD5cbiAgICAgICk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDQwNDpcbiAgICAgIG1lc3NhZ2UgPSAoXG4gICAgICAgIDxwPk9vcHMhIExvb2tzIGxpa2UgeW91IHRyaWVkIHRvIHZpc2l0IGEgcGFnZSB0aGF0IGRvZXMgbm90IGV4aXN0LjwvcD5cbiAgICAgICk7XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoY2F1Z2h0LmRhdGEgfHwgY2F1Z2h0LnN0YXR1c1RleHQpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8RG9jdW1lbnQgdGl0bGU9e2Ake2NhdWdodC5zdGF0dXN9ICR7Y2F1Z2h0LnN0YXR1c1RleHR9YH0+XG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8aDE+XG4gICAgICAgICAge2NhdWdodC5zdGF0dXN9OiB7Y2F1Z2h0LnN0YXR1c1RleHR9XG4gICAgICAgIDwvaDE+XG4gICAgICAgIHttZXNzYWdlfVxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC9Eb2N1bWVudD5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2xpZW50U3R5bGVDb250ZXh0RGF0YSB7XG4gIHJlc2V0OiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb250ZXh0PENsaWVudFN0eWxlQ29udGV4dERhdGE+KHtcbiAgcmVzZXQ6ICgpID0+IHt9LFxufSk7XG4iLCAiaW1wb3J0IHsgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VUcmFuc2l0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5cbmltcG9ydCBMb2dvIGZyb20gXCJ+L2NvbXBvbmVudHMvTG9nb1wiO1xuaW1wb3J0IExheW91dFByb3ZpZGVyIGZyb20gXCJ+L2NvbXBvbmVudHMvTGF5b3V0L2NvbXBvbmVudHMvTGF5b3V0UHJvdmlkZXJcIjtcbmltcG9ydCB7IENvbnRhaW5lciwgQXBwQmFyLCBUb29sYmFyLCBCb3gsIExpbmVhclByb2dyZXNzIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCBNZW51IGZyb20gXCJ+L2NvbXBvbmVudHMvTWVudVwiO1xuY29uc3QgTUVOVV9XSURUSCA9IDgwO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3ROb2RlIH0pIHtcbiAgY29uc3QgeyBsb2NhdGlvbiwgc3RhdGUsIHN1Ym1pc3Npb24sIHR5cGUgfSA9IHVzZVRyYW5zaXRpb24oKTtcblxuICBjb25zdCBpc0xvYWRpbmcgPSBzdGF0ZSA9PT0gXCJsb2FkaW5nXCI7XG4gIHJldHVybiAoXG4gICAgPExheW91dFByb3ZpZGVyIGRlZmF1bHRMYXlvdXRTdGF0ZT17eyBpc01lbnVPcGVuOiBmYWxzZSB9fT5cbiAgICAgIDxCb3g+XG4gICAgICAgIDxNZW51IHdpZHRoPXtNRU5VX1dJRFRIfSAvPlxuICAgICAgICA8Qm94IHN4PXt7IHdpZHRoOiBgY2FsYygxMDB2dyAtICR7TUVOVV9XSURUSH1weClgIH19PlxuICAgICAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJzdGF0aWNcIiBjb2xvcj1cInRyYW5zcGFyZW50XCIgZWxldmF0aW9uPXswfT5cbiAgICAgICAgICAgIDxUb29sYmFyXG4gICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgZmxleFdyYXA6IFwid3JhcFwiLFxuICAgICAgICAgICAgICAgIHB5OiAyLFxuICAgICAgICAgICAgICAgIHB4OiA2LFxuICAgICAgICAgICAgICAgIGJvcmRlckJvdHRvbTogKHRoZW1lKSA9PiBgMXB4IHNvbGlkICR7dGhlbWUucGFsZXR0ZS5kaXZpZGVyfWAsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxCb3ggc3g9e3sgcDogMiwgZm9udFdlaWdodDogXCJib2xkXCIsIGZsZXhHcm93OiAxIH19PlxuICAgICAgICAgICAgICAgIDxMb2dvIC8+XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9Ub29sYmFyPlxuICAgICAgICAgIDwvQXBwQmFyPlxuICAgICAgICAgIHtpc0xvYWRpbmcgJiYgKFxuICAgICAgICAgICAgPEJveCBzeD17eyBoZWlnaHQ6IDUsIG1iOiBcIi01cHhcIiB9fT5cbiAgICAgICAgICAgICAgPExpbmVhclByb2dyZXNzIGNvbG9yPVwiaW5oZXJpdFwiIC8+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cIm1kXCI+XG4gICAgICAgICAgICA8Qm94IHN4PXt7IG15OiA0IH19PntjaGlsZHJlbn08L0JveD5cbiAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0JveD5cbiAgICA8L0xheW91dFByb3ZpZGVyPlxuICApO1xufVxuIiwgImltcG9ydCB7IExpbmsgYXMgUm14TGluayB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgVHlwb2dyYXBoeSwgTGluayB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgdXNlTGF5b3V0IGZyb20gXCJ+L2NvbXBvbmVudHMvTGF5b3V0L2hvb2tzL3VzZS1sYXlvdXQtY29udGV4dFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dvKHsgLi4ucmVzdCB9KSB7XG4gIGNvbnN0IHsgbGF5b3V0U3RhdGUsIHNldExheW91dFN0YXRlIH0gPSB1c2VMYXlvdXQoKTtcbiAgY29uc3QgeyBpc01lbnVPcGVuIH0gPSBsYXlvdXRTdGF0ZTtcblxuICBmdW5jdGlvbiBoYW5kbGVDbG9zZU1lbnUoKSB7XG4gICAgaWYgKGlzTWVudU9wZW4pXG4gICAgICBzZXRMYXlvdXRTdGF0ZSh7XG4gICAgICAgIC4uLmxheW91dFN0YXRlLFxuICAgICAgICBpc01lbnVPcGVuOiBmYWxzZSxcbiAgICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8TGlua1xuICAgICAgey4uLnJlc3R9XG4gICAgICBvbkNsaWNrPXtoYW5kbGVDbG9zZU1lbnV9XG4gICAgICBjb21wb25lbnQ9e1JteExpbmt9XG4gICAgICB0bz17XCIvXCJ9XG4gICAgICBjb2xvcj1cInRleHQucHJpbWFyeVwiXG4gICAgICBzeD17e1xuICAgICAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXG4gICAgICAgIC4uLnJlc3Q/LnN4LFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8VHlwb2dyYXBoeSBzeD17eyBmb250V2VpZ2h0OiBcImJvbGRcIiB9fSB2YXJpYW50PVwiaDVcIj5cbiAgICAgICAgQUhBTkRBTkkuXG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8VHlwb2dyYXBoeSBzeD17eyBmb250V2VpZ2h0OiBcImxpZ2h0XCIgfX0gdmFyaWFudD1cImNhcHRpb25cIj5cbiAgICAgICAgQUhBTUFEIEVTTUFFSUxaQURFSCBBSEFOREFOSVxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgIDwvTGluaz5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0Q29udGV4dCwgeyBMYXlvdXRDb250ZXh0UHJvcHMgfSBmcm9tIFwifi9jb21wb25lbnRzL0xheW91dC9jb250ZXh0XCI7XG5cbmZ1bmN0aW9uIHVzZUxheW91dCgpOiBMYXlvdXRDb250ZXh0UHJvcHMge1xuICBjb25zdCBjb250ZXh0VmFsdWUgPSB1c2VDb250ZXh0KExheW91dENvbnRleHQpIHx8IHt9O1xuICBpZiAoIWNvbnRleHRWYWx1ZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgdXNlTGF5b3V0IG11c3QgYmUgdXNlZCB3aXRoaW4gYSBMYXlvdXRQcm92aWRlcmApO1xuICB9XG4gIHJldHVybiBjb250ZXh0VmFsdWU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUxheW91dDtcbiIsICIvLyBAZmxvd1xuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHR5cGUgeyBMYXlvdXRTdGF0ZVByb3BzIH0gZnJvbSBcIi4vY29tcG9uZW50cy9MYXlvdXRQcm92aWRlci90eXBlc1wiO1xuZXhwb3J0IGludGVyZmFjZSBMYXlvdXRDb250ZXh0UHJvcHMge1xuICBzZXRMYXlvdXRTdGF0ZTogKHBhcmFtczogTGF5b3V0U3RhdGVQcm9wcykgPT4gdm9pZDtcbiAgbGF5b3V0U3RhdGU6IExheW91dFN0YXRlUHJvcHM7XG59XG5cbmNvbnN0IExheW91dENvbnRleHQgPSBjcmVhdGVDb250ZXh0PExheW91dENvbnRleHRQcm9wcz4oXG4gIHt9IGFzIExheW91dENvbnRleHRQcm9wc1xuKTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0Q29udGV4dDtcbiIsICIvLyBAZmxvd1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMYXlvdXRDb250ZXh0IGZyb20gXCJ+L2NvbXBvbmVudHMvTGF5b3V0L2NvbnRleHRcIjtcbmltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgdHlwZSB7IExheW91dFByb3ZpZGVyUHJvcHMgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5mdW5jdGlvbiBMYXlvdXRQcm92aWRlcihwcm9wczogTGF5b3V0UHJvdmlkZXJQcm9wcykge1xuICBjb25zdCB7IGNoaWxkcmVuLCBkZWZhdWx0TGF5b3V0U3RhdGUgfSA9IHByb3BzO1xuICBjb25zdCBbbGF5b3V0U3RhdGUsIHNldExheW91dFN0YXRlXSA9IHVzZVN0YXRlKGRlZmF1bHRMYXlvdXRTdGF0ZSk7XG5cbiAgY29uc3QgbGF5b3V0Q29udGV4dCA9IHVzZU1lbW8oXG4gICAgKCkgPT4gKHtcbiAgICAgIGxheW91dFN0YXRlLFxuICAgICAgc2V0TGF5b3V0U3RhdGUsXG4gICAgfSksXG4gICAgW2xheW91dFN0YXRlXVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2xheW91dENvbnRleHR9PlxuICAgICAge2lzRnVuY3Rpb24oY2hpbGRyZW4pID8gY2hpbGRyZW4obGF5b3V0Q29udGV4dCkgOiBjaGlsZHJlbn1cbiAgICA8L0xheW91dENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dFByb3ZpZGVyO1xuIiwgImltcG9ydCB7IEJveCwgRHJhd2VyIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB0eXBlIHsgTWVudVByb3BzIH0gZnJvbSBcIi4vdHlwZXNcIjtcbmltcG9ydCB7IFNxdWVlemUgYXMgSGFtYnVyZ2VyIH0gZnJvbSBcImhhbWJ1cmdlci1yZWFjdFwiO1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSBcIn4vY29tcG9uZW50cy9NZW51L2NvbXBvbmVudHMvTmF2aWdhdGlvblwiO1xuaW1wb3J0IHVzZUxheW91dCBmcm9tIFwifi9jb21wb25lbnRzL0xheW91dC9ob29rcy91c2UtbGF5b3V0LWNvbnRleHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWVudSh7IHdpZHRoIH06IE1lbnVQcm9wcykge1xuICBjb25zdCB7IGxheW91dFN0YXRlLCBzZXRMYXlvdXRTdGF0ZSB9ID0gdXNlTGF5b3V0KCk7XG4gIGNvbnN0IHsgaXNNZW51T3BlbiB9ID0gbGF5b3V0U3RhdGU7XG5cbiAgZnVuY3Rpb24gaGFuZGxlVG9nZ2xlTWVudSgpIHtcbiAgICBzZXRMYXlvdXRTdGF0ZSh7XG4gICAgICAuLi5sYXlvdXRTdGF0ZSxcbiAgICAgIGlzTWVudU9wZW46ICFpc01lbnVPcGVuLFxuICAgIH0pO1xuICB9XG4gIHJldHVybiAoXG4gICAgPERyYXdlclxuICAgICAgc3g9e3tcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICBcIiYgLk11aURyYXdlci1wYXBlclwiOiB7XG4gICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gICAgICAgICAgLi4uKGlzTWVudU9wZW4gJiYge1xuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogKHRoZW1lKSA9PlxuICAgICAgICAgICAgICB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoXCJ3aWR0aFwiLCB7XG4gICAgICAgICAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLnN0YW5kYXJkLFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAuLi4oIWlzTWVudU9wZW4gJiYge1xuICAgICAgICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogKHRoZW1lKSA9PlxuICAgICAgICAgICAgICB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoXCJ3aWR0aFwiLCB7XG4gICAgICAgICAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLnNob3J0ZXN0LFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgfSxcbiAgICAgIH19XG4gICAgICB2YXJpYW50PVwicGVybWFuZW50XCJcbiAgICAgIGFuY2hvcj1cInJpZ2h0XCJcbiAgICAgIG9wZW49e2lzTWVudU9wZW59XG4gICAgPlxuICAgICAgPEJveFxuICAgICAgICBzeD17e1xuICAgICAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXG4gICAgICAgICAgcmlnaHQ6ICh3aWR0aCAtIDQ4KSAvIDIsXG4gICAgICAgICAgdG9wOiAyNCxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPEhhbWJ1cmdlclxuICAgICAgICAgIHRvZ2dsZWQ9e2lzTWVudU9wZW59XG4gICAgICAgICAgdG9nZ2xlPXtoYW5kbGVUb2dnbGVNZW51fVxuICAgICAgICAgIHNpemU9e3dpZHRoIC8gMi44fVxuICAgICAgICAvPlxuICAgICAgPC9Cb3g+XG4gICAgICA8Qm94PlxuICAgICAgICA8TmF2aWdhdGlvbiAvPlxuICAgICAgPC9Cb3g+XG4gICAgPC9EcmF3ZXI+XG4gICk7XG59XG4iLCAiaW1wb3J0IExvZ28gZnJvbSBcIn4vY29tcG9uZW50cy9Mb2dvXCI7XG5pbXBvcnQgeyBhbHBoYSB9IGZyb20gXCJAbXVpL21hdGVyaWFsL3N0eWxlc1wiO1xuaW1wb3J0IHsgR3JpZCwgQm94LCBNZW51TGlzdCB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgYmdJbWFnZSBmcm9tIFwifi9yZXNvdXJjZXMvaW1hZ2VzL2hpcC1zcXVhcmUucG5nXCI7XG5pbXBvcnQgTmF2TGluayBmcm9tIFwiLi9jb21wb25lbnRzL05hdkxpbmtcIjtcbmltcG9ydCB1c2VMYXlvdXQgZnJvbSBcIn4vY29tcG9uZW50cy9MYXlvdXQvaG9va3MvdXNlLWxheW91dC1jb250ZXh0XCI7XG5pbXBvcnQgdHlwZSB7IE5hdmlnYXRpb25Qcm9wcyB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmlnYXRpb24oeyAuLi5yZXN0IH06IE5hdmlnYXRpb25Qcm9wcykge1xuICBjb25zdCB7IGxheW91dFN0YXRlIH0gPSB1c2VMYXlvdXQoKTtcbiAgY29uc3QgeyBpc01lbnVPcGVuIH0gPSBsYXlvdXRTdGF0ZTtcbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICB7Li4ucmVzdH1cbiAgICAgIHN4PXt7XG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICBoZWlnaHQ6IFwiMTAwdmhcIixcbiAgICAgICAgd2lkdGg6IFwiMTAwdndcIixcbiAgICAgIH19XG4gICAgPlxuICAgICAgPEdyaWQgc3g9e3sgaGVpZ2h0OiBcIjEwMHZoXCIsIHdpZHRoOiBcIjEwMHZ3XCIgfX0gY29udGFpbmVyIHNwYWNpbmc9ezB9PlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXs1fT5cbiAgICAgICAgICA8Qm94IHN4PXt7IHA6IDQsIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLCBoZWlnaHQ6IFwiMTAwdmhcIiB9fT5cbiAgICAgICAgICAgIHtpc01lbnVPcGVuICYmIDxMb2dvIC8+fVxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezd9PlxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogKHRoZW1lKSA9PlxuICAgICAgICAgICAgICAgIGFscGhhKFxuICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXG4gICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLmFjdGlvbi5zZWxlY3RlZE9wYWNpdHlcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBgdXJsKCR7YmdJbWFnZX0pYCxcbiAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMHZoXCIsXG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICBhbGlnbkNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TWVudUxpc3Q+XG4gICAgICAgICAgICAgIDxOYXZMaW5rIHRvPXtcIi9cIn0+SG9tZTwvTmF2TGluaz5cbiAgICAgICAgICAgICAgPE5hdkxpbmsgdG89e1wiL2Fib3V0XCJ9PkFib3V0PC9OYXZMaW5rPlxuICAgICAgICAgICAgICA8TmF2TGluayB0bz17XCIvcG9zdHNcIn0+QmxvZzwvTmF2TGluaz5cbiAgICAgICAgICAgICAgPE5hdkxpbmsgdG89e1wiL2NvbnRhY3RcIn0+Q29udGFjdDwvTmF2TGluaz5cbiAgICAgICAgICAgIDwvTWVudUxpc3Q+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvR3JpZD5cbiAgICA8L0JveD5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBMaW5rIGFzIFJteExpbmsgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHVzZUxheW91dCBmcm9tIFwifi9jb21wb25lbnRzL0xheW91dC9ob29rcy91c2UtbGF5b3V0LWNvbnRleHRcIjtcblxuaW1wb3J0IHR5cGUgeyBOYXZMaW5rUHJvcHMgfSBmcm9tIFwiLi90eXBlc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2TGluayh7IHRvLCBjaGlsZHJlbiwgLi4ucmVzdCB9OiBOYXZMaW5rUHJvcHMpIHtcbiAgY29uc3QgeyBsYXlvdXRTdGF0ZSwgc2V0TGF5b3V0U3RhdGUgfSA9IHVzZUxheW91dCgpO1xuICBjb25zdCB7IGlzTWVudU9wZW4gfSA9IGxheW91dFN0YXRlO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUNsb3NlTWVudSgpIHtcbiAgICBpZiAoaXNNZW51T3BlbilcbiAgICAgIHNldExheW91dFN0YXRlKHtcbiAgICAgICAgLi4ubGF5b3V0U3RhdGUsXG4gICAgICAgIGlzTWVudU9wZW46IGZhbHNlLFxuICAgICAgfSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxMaW5rXG4gICAgICBjb21wb25lbnQ9e1JteExpbmt9XG4gICAgICBvbkNsaWNrPXtoYW5kbGVDbG9zZU1lbnV9XG4gICAgICB2YXJpYW50PVwiaDRcIlxuICAgICAgdG89e3RvfVxuICAgICAgY29sb3I9XCJ0ZXh0LnByaW1hcnlcIlxuICAgICAgc3g9e3tcbiAgICAgICAgbXk6IDEsXG4gICAgICAgIG14OiAxLjUsXG4gICAgICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcbiAgICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgICAgICBwYjogMSxcbiAgICAgICAgcGw6IDYsXG4gICAgICB9fVxuICAgICAgey4uLnJlc3R9XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvTGluaz5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGFjdCgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgxXCI+Q29udGFjdDwvVHlwb2dyYXBoeT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWJvdXQoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMVwiPkFib3V0PC9UeXBvZ3JhcGh5PlxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCI+XG4gICAgICAgIEhpLCBNeSBuYW1lIGlzIEFobWFkLiBJJ20gYSBzb2Z0d2FyZSBkZXZlbG9wZXIgd2l0aCBhIGRlY2FkZSBvZlxuICAgICAgICBleHBlcmllbmNlLiBJIGxpdmUgaW4gVmFuY291dmVyIEJDLlxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB7IHVzZUxvYWRlckRhdGEsIExpbmsgYXMgUm14TGluayB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB0eXBlIHsgTG9hZGVyRnVuY3Rpb24sIEFjdGlvbkZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBBcnJvd0JhY2tPdXRsaW5lZCB9IGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsXCI7XG5pbXBvcnQgdHlwZSB7IFBvc3QgfSBmcm9tIFwifi90eXBlcy9wb3N0c1wiO1xuaW1wb3J0IHsgZ2V0UG9zdCB9IGZyb20gXCJ+L2FwaS9wb3N0cy9nZXRQb3N0XCI7XG5pbXBvcnQgeyBjcmVhdGVDb21tZW50IH0gZnJvbSBcIn4vYXBpL2NvbW1lbnRzL2NyZWF0ZUNvbW1lbnRcIjtcbmltcG9ydCBUaXRsZSBmcm9tIFwifi9jb21wb25lbnRzL0NvbnRlbnQvY29tcG9uZW50cy9UaXRsZVwiO1xuaW1wb3J0IENvbW1lbnRzIGZyb20gXCJ+L2NvbXBvbmVudHMvQ29udGVudC9jb21wb25lbnRzL0NvbW1lbnRzXCI7XG5pbXBvcnQgQm9keSBmcm9tIFwifi9jb21wb25lbnRzL0NvbnRlbnQvY29tcG9uZW50cy9Cb2R5XCI7XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcbiAgcmV0dXJuIGdldFBvc3QoeyBzbHVnOiBwYXJhbXMuc2x1ZyBhcyBzdHJpbmcgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCBmb3JtRGF0YSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcbiAgY29uc3QgdmFsdWVzID0gT2JqZWN0LmZyb21FbnRyaWVzKGZvcm1EYXRhKTtcbiAgcmV0dXJuIGNyZWF0ZUNvbW1lbnQodmFsdWVzKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3RTbHVnKCkge1xuICBjb25zdCB7IHRpdGxlLCBjb250ZW50LCBjb21tZW50cywgZGF0YWJhc2VJZCB9ID0gdXNlTG9hZGVyRGF0YTxQb3N0PigpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgY29tcG9uZW50PXtSbXhMaW5rfVxuICAgICAgICBkaXNhYmxlUmlwcGxlXG4gICAgICAgIHZhcmlhbnQ9XCJ0ZXh0XCJcbiAgICAgICAgdG89e1wiL3Bvc3RzXCJ9XG4gICAgICAgIHN0YXJ0SWNvbj17PEFycm93QmFja091dGxpbmVkIC8+fVxuICAgICAgPlxuICAgICAgICBCYWNrIHRvIGJsb2dcbiAgICAgIDwvQnV0dG9uPlxuXG4gICAgICA8VGl0bGUgdmFyaWFudD1cImgyXCI+e3RpdGxlfTwvVGl0bGU+XG4gICAgICA8Qm9keT57Y29udGVudH08L0JvZHk+XG4gICAgICA8Q29tbWVudHMgZGF0YWJhc2VJZD17ZGF0YWJhc2VJZH0gY29tbWVudHM9e2NvbW1lbnRzfSAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB7IGdxbCB9IGZyb20gXCJncmFwaHFsLXJlcXVlc3RcIjtcbmltcG9ydCB7IGdyYXBocWwgfSBmcm9tIFwifi9saWIvZ3JhcGhxbFwiO1xuaW1wb3J0IHR5cGUgeyBQb3N0IH0gZnJvbSBcIn4vdHlwZXMvcG9zdHNcIjtcbmltcG9ydCB7IENPTU1FTlQgfSBmcm9tIFwiLi4vcXVlcmllc1wiO1xuXG5jb25zdCBHRVRfUE9TVCA9IGdxbGBcbiAgJHtDT01NRU5UfVxuICBxdWVyeSBnZXRQb3N0KCRzbHVnOiBJRCEpIHtcbiAgICBwb3N0KGlkOiAkc2x1ZywgaWRUeXBlOiBTTFVHKSB7XG4gICAgICBpZFxuICAgICAgZGF0YWJhc2VJZFxuICAgICAgdGl0bGVcbiAgICAgIHVyaVxuICAgICAgY29udGVudFxuICAgICAgZGF0ZVxuICAgICAgY29tbWVudHMoZmlyc3Q6IDEwMCwgd2hlcmU6IHsgcGFyZW50OiBudWxsIH0pIHtcbiAgICAgICAgIyBHZXQgdGhyZWUgbGV2ZWxzIG9mIGNvbW1lbnRzIHJlcGx5XG4gICAgICAgIG5vZGVzIHtcbiAgICAgICAgICAuLi5jb21tZW50XG4gICAgICAgICAgcmVwbGllcyB7XG4gICAgICAgICAgICBub2RlcyB7XG4gICAgICAgICAgICAgIC4uLmNvbW1lbnRcbiAgICAgICAgICAgICAgcmVwbGllcyB7XG4gICAgICAgICAgICAgICAgbm9kZXMge1xuICAgICAgICAgICAgICAgICAgLi4uY29tbWVudFxuICAgICAgICAgICAgICAgICAgcmVwbGllcyB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVzIHtcbiAgICAgICAgICAgICAgICAgICAgICAuLi5jb21tZW50XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBnZXRQb3N0ID0gYXN5bmMgKHtcbiAgc2x1Zyxcbn06IHtcbiAgc2x1Zzogc3RyaW5nO1xufSk6IFByb21pc2U8eyBwb3N0czogeyBub2RlczogUG9zdFtdIH0gfT4gPT4ge1xuICBjb25zdCBkYXRhID0gYXdhaXQgZ3JhcGhxbC5yZXF1ZXN0KEdFVF9QT1NULCB7IHNsdWcgfSk7XG4gIHJldHVybiBkYXRhLnBvc3Q7XG59O1xuIiwgImltcG9ydCB7IEdyYXBoUUxDbGllbnQgfSBmcm9tIFwiZ3JhcGhxbC1yZXF1ZXN0XCI7XG5cbmNvbnN0IEFQSV9VUkwgPSBwcm9jZXNzLmVudi5BUElfVVJMO1xuXG5leHBvcnQgY29uc3QgZ3JhcGhxbCA9IG5ldyBHcmFwaFFMQ2xpZW50KFwiaHR0cDovL2Jsb2cuYWhhbmRhbmkuY29tLz9cIik7XG4iLCAiaW1wb3J0IHsgZ3FsIH0gZnJvbSBcImdyYXBocWwtcmVxdWVzdFwiO1xuXG5leHBvcnQgY29uc3QgQ09NTUVOVCA9IGdxbGBcbiAgZnJhZ21lbnQgY29tbWVudCBvbiBDb21tZW50IHtcbiAgICBpZFxuICAgIGRhdGFiYXNlSWRcbiAgICBjb250ZW50XG4gICAgcGFyZW50SWRcbiAgICBkYXRlXG4gICAgZGF0ZUdtdFxuICAgIGF1dGhvciB7XG4gICAgICBub2RlIHtcbiAgICAgICAgYXZhdGFyIHtcbiAgICAgICAgICBmb3VuZEF2YXRhclxuICAgICAgICAgIGRlZmF1bHRcbiAgICAgICAgICBzaXplXG4gICAgICAgICAgdXJsXG4gICAgICAgIH1cbiAgICAgICAgbmFtZVxuICAgICAgICBpZFxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcbiIsICJpbXBvcnQgeyBncWwgfSBmcm9tIFwiZ3JhcGhxbC1yZXF1ZXN0XCI7XG5pbXBvcnQgeyBncmFwaHFsIH0gZnJvbSBcIn4vbGliL2dyYXBocWxcIjtcbmltcG9ydCB0eXBlIHsgQ3JlYXRlQ29tbWVudCB9IGZyb20gXCJ+L3R5cGVzL3Bvc3RzXCI7XG5cbmNvbnN0IENSRUFURV9DT01NRU5UID0gZ3FsYFxuICBtdXRhdGlvbiBDUkVBVEVfQ09NTUVOVCgkaW5wdXQ6IENyZWF0ZUNvbW1lbnRJbnB1dCEpIHtcbiAgICBjcmVhdGVDb21tZW50KGlucHV0OiAkaW5wdXQpIHtcbiAgICAgIHN1Y2Nlc3NcbiAgICAgIGNvbW1lbnQge1xuICAgICAgICBpZFxuICAgICAgICBjb250ZW50XG4gICAgICAgIGFwcHJvdmVkXG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlQ29tbWVudCA9IGFzeW5jICh7XG4gIGNvbW1lbnRPbixcbiAgY29udGVudCxcbiAgYXV0aG9yLFxuICBhdXRob3JFbWFpbCxcbiAgcGFyZW50LFxufTogQ3JlYXRlQ29tbWVudCk6IFByb21pc2U8dW5rbm93bj4gPT4ge1xuICBjb25zdCB7IGNyZWF0ZUNvbW1lbnQgfSA9IGF3YWl0IGdyYXBocWwucmVxdWVzdChDUkVBVEVfQ09NTUVOVCwge1xuICAgIGlucHV0OiB7XG4gICAgICBjb21tZW50T246IE51bWJlcihjb21tZW50T24pLFxuICAgICAgY29udGVudCxcbiAgICAgIGF1dGhvcixcbiAgICAgIGF1dGhvckVtYWlsLFxuICAgICAgcGFyZW50OiBOdW1iZXIocGFyZW50KSxcbiAgICB9LFxuICB9KTtcbiAgcmV0dXJuIGNyZWF0ZUNvbW1lbnQ7XG59O1xuIiwgImltcG9ydCB7IFR5cG9ncmFwaHkgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZW1peFwiO1xuXG5pbXBvcnQgdHlwZSB7IFRpdGxlUHJvcHMgfSBmcm9tIFwiLi90eXBlc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGl0bGUoeyBjaGlsZHJlbiwgdG8sIHN4LCAuLi5yZXN0IH06IFRpdGxlUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8VHlwb2dyYXBoeVxuICAgICAgey4uLih0byAmJiB7IGNvbXBvbmVudDogTGluaywgdG8gfSl9XG4gICAgICB2YXJpYW50PVwiaDRcIlxuICAgICAgey4uLnJlc3R9XG4gICAgICBzeD17e1xuICAgICAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXG4gICAgICAgIGNvbG9yOiAodGhlbWUpID0+IHRoZW1lLnBhbGV0dGUuY29tbW9uLmJsYWNrLFxuICAgICAgICBwYjogMCxcbiAgICAgICAgLi4uc3gsXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1R5cG9ncmFwaHk+XG4gICk7XG59XG4iLCAiaW1wb3J0IENvbW1lbnQgZnJvbSBcIi4vY29tcG9uZW50cy9Db21tZW50XCI7XG5pbXBvcnQgQ3JlYXRlQ29tbWVudCBmcm9tIFwiLi9jb21wb25lbnRzL0NyZWF0ZUNvbW1lbnRcIjtcbmltcG9ydCB7IGlzRW1wdHkgfSBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgeyBCb3ggfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuXG5pbXBvcnQgdHlwZSB7IENvbW1lbnRzUHJvcHMgfSBmcm9tIFwiLi90eXBlc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29tbWVudHMoe1xuICBjb21tZW50cyxcbiAgY2hpbGQsXG4gIGRhdGFiYXNlSWQsXG59OiBDb21tZW50c1Byb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHshY2hpbGQgJiYgPENyZWF0ZUNvbW1lbnQgY29tbWVudE9uPXtkYXRhYmFzZUlkfSAvPn1cbiAgICAgIHtjb21tZW50cz8ubm9kZXM/Lm1hcCgoY29tbWVudCkgPT4ge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgY29udGVudCxcbiAgICAgICAgICBkYXRlLFxuICAgICAgICAgIGlkOiBjb21tZW50SWQsXG4gICAgICAgICAgZGF0YWJhc2VJZDogY29tbWVudERhdGFiYXNlSWQsXG4gICAgICAgICAgYXV0aG9yLFxuICAgICAgICAgIHJlcGxpZXMsXG4gICAgICAgIH0gPSBjb21tZW50IHx8IHt9O1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxCb3ggc3g9e3sgYmFja2dyb3VuZENvbG9yOiBcIiNFRUVcIiwgYm9yZGVyUmFkaXVzOiAzLCBwOiAyLCBtYjogMSB9fT5cbiAgICAgICAgICAgIDxDb21tZW50IGtleT17Y29tbWVudElkfSBhdXRob3I9e2F1dGhvcn0gZGF0ZT17ZGF0ZX0+XG4gICAgICAgICAgICAgIHtjb250ZW50fVxuICAgICAgICAgICAgPC9Db21tZW50PlxuICAgICAgICAgICAgPENyZWF0ZUNvbW1lbnQgcGFyZW50PXtjb21tZW50RGF0YWJhc2VJZH0gY29tbWVudE9uPXtkYXRhYmFzZUlkfSAvPlxuICAgICAgICAgICAgeyFpc0VtcHR5KHJlcGxpZXM/Lm5vZGVzKSAmJiAoXG4gICAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgICAgPENvbW1lbnRzIGRhdGFiYXNlSWQ9e2RhdGFiYXNlSWR9IGNvbW1lbnRzPXtyZXBsaWVzfSBjaGlsZCAvPlxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8Lz5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBUeXBvZ3JhcGh5LCBCb3ggfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IERhdGUgZnJvbSBcIn4vY29tcG9uZW50cy9EYXRlXCI7XG5pbXBvcnQgQXZhdGFyIGZyb20gXCJ+L2NvbXBvbmVudHMvQXZhdGFyXCI7XG5pbXBvcnQgQm9keSBmcm9tIFwifi9jb21wb25lbnRzL0NvbnRlbnQvY29tcG9uZW50cy9Cb2R5XCI7XG5cbmltcG9ydCB0eXBlIHsgQ29tbWVudFByb3BzIH0gZnJvbSBcIi4vdHlwZXNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbW1lbnQoe1xuICBhdXRob3JJbWFnZVNpemUgPSA2MCxcbiAgZGF0ZSxcbiAgYXV0aG9yLFxuICBjaGlsZHJlbixcbn06IENvbW1lbnRQcm9wcykge1xuICBjb25zdCBhdXRob3JOYW1lID0gYXV0aG9yPy5ub2RlPy5uYW1lO1xuICBjb25zdCBhdXRob3JJbWFnZSA9IGF1dGhvcj8ubm9kZT8udXJsO1xuXG4gIHJldHVybiAoXG4gICAgPEJveCBjbGFzc05hbWU9XCJjb21tZW50LWJveFwiPlxuICAgICAgPEJveCBzeD17eyBkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwgcDogMSB9fT5cbiAgICAgICAgPEF2YXRhciBuYW1lPXthdXRob3JOYW1lfSBpbWFnZT17YXV0aG9ySW1hZ2V9IHNpemU9e2F1dGhvckltYWdlU2l6ZX0gLz5cbiAgICAgICAgPEJveCBzeD17eyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiwgcDogMSB9fT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSBzeD17eyBmb250V2VpZ2h0OiBcImJvbGRcIiB9fSB2YXJpYW50PVwiYm9keTJcIj5cbiAgICAgICAgICAgIHthdXRob3JOYW1lfVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8RGF0ZSBkYXRlPXtkYXRlfSAvPlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQm94PlxuICAgICAgPEJvZHk+e2NoaWxkcmVufTwvQm9keT5cbiAgICA8L0JveD5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcbmltcG9ydCB0eXBlIHsgRGF0ZVByb3BzIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGF0ZSh7XG4gIGRhdGUsXG4gIGZvcm1hdCA9IFwiZGRkZCwgTU1NIERELCBZWVlZXCIsXG59OiBEYXRlUHJvcHMpIHtcbiAgY29uc3QgZGF5ID0gZGF5anMoZGF0ZSk7XG4gIHJldHVybiA8VHlwb2dyYXBoeSB2YXJpYW50PVwiY2FwdGlvblwiPntkYXkuZm9ybWF0KGZvcm1hdCl9PC9UeXBvZ3JhcGh5Pjtcbn1cbiIsICJpbXBvcnQgeyBBdmF0YXIgYXMgTXVpQXZhdGFyLCBCb3gsIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuXG5pbXBvcnQgdHlwZSB7IEF2YXRhclByb3BzIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXZhdGFyKHsgbmFtZSwgaW1hZ2UsIHNpemUsIHN4IH06IEF2YXRhclByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPE11aUF2YXRhclxuICAgICAgYWx0PXtuYW1lID8gbmFtZSA6IFwiXCJ9XG4gICAgICBzcmM9e2ltYWdlID8gaW1hZ2UgOiB1bmRlZmluZWR9XG4gICAgICBzeD17eyB3aWR0aDogc2l6ZSwgaGVpZ2h0OiBzaXplLCAuLi5zeCB9fVxuICAgIC8+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgUmVhY3RFbGVtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IEJveCB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgQ29kZUJsb2NrIGZyb20gXCJ+L2NvbXBvbmVudHMvQ29udGVudC9jb21wb25lbnRzL0JvZHkvY29tcG9uZW50cy9Db2RlQmxvY2tcIjtcbmltcG9ydCBCbG9ja3F1b3RlIGZyb20gXCJ+L2NvbXBvbmVudHMvQ29udGVudC9jb21wb25lbnRzL0JvZHkvY29tcG9uZW50cy9CbG9ja3F1b3RlXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIn4vY29tcG9uZW50cy9Db250ZW50L2NvbXBvbmVudHMvQm9keS9jb21wb25lbnRzL0ltYWdlXCI7XG5pbXBvcnQgTWVkaWEgZnJvbSBcIn4vY29tcG9uZW50cy9Db250ZW50L2NvbXBvbmVudHMvQm9keS9jb21wb25lbnRzL01lZGlhXCI7XG5pbXBvcnQgSGVhZGluZyBmcm9tIFwifi9jb21wb25lbnRzL0NvbnRlbnQvY29tcG9uZW50cy9Cb2R5L2NvbXBvbmVudHMvSGVhZGluZ1wiO1xuaW1wb3J0IHBhcnNlLCB7IEVsZW1lbnQsIERPTU5vZGUgfSBmcm9tIFwiaHRtbC1yZWFjdC1wYXJzZXJcIjtcbmltcG9ydCB0eXBlIHsgQm9keVByb3BzIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuZXhwb3J0IHR5cGUgQmxvY2tDb21wb25lbnRCYXNlUHJvcHMgPSB7XG4gIG5vZGU6IEVsZW1lbnQ7XG59O1xuXG5leHBvcnQgdHlwZSBCbG9ja0NvbXBvbmVudEJhc2VUeXBlcyA9IChcbiAgcHJvcHM6IEJsb2NrQ29tcG9uZW50QmFzZVByb3BzXG4pID0+IFJlYWN0RWxlbWVudDtcblxuZXhwb3J0IGVudW0gQkxPQ0tfS0VZUyB7XG4gIENPREUgPSBcImNvZGVcIixcbiAgQkxPQ0tRVU9URSA9IFwiYmxvY2txdW90ZVwiLFxuICBJTUFHRSA9IFwiaW1nXCIsXG4gIEZJR1VSRSA9IFwiZmlndXJlXCIsXG4gIEgxID0gXCJoMVwiLFxuICBIMiA9IFwiaDJcIixcbiAgSDMgPSBcImgzXCIsXG4gIEg0ID0gXCJoNFwiLFxuICBINSA9IFwiaDVcIixcbiAgSDYgPSBcImg2XCIsXG4gIFAgPSBcInBcIixcbn1cblxuY29uc3QgQkxPQ0tfQ09NUE9ORU5UUzoge1xuICBba2V5OiBzdHJpbmddOiBCbG9ja0NvbXBvbmVudEJhc2VUeXBlcztcbn0gPSB7XG4gIFtCTE9DS19LRVlTLkNPREVdOiBDb2RlQmxvY2ssXG4gIFtCTE9DS19LRVlTLkJMT0NLUVVPVEVdOiBCbG9ja3F1b3RlLFxuICBbQkxPQ0tfS0VZUy5JTUFHRV06IEltYWdlLFxuICBbQkxPQ0tfS0VZUy5GSUdVUkVdOiBNZWRpYSxcbiAgW0JMT0NLX0tFWVMuSDFdOiBIZWFkaW5nLFxuICBbQkxPQ0tfS0VZUy5IMl06IEhlYWRpbmcsXG4gIFtCTE9DS19LRVlTLkgzXTogSGVhZGluZyxcbiAgW0JMT0NLX0tFWVMuSDRdOiBIZWFkaW5nLFxuICBbQkxPQ0tfS0VZUy5INV06IEhlYWRpbmcsXG4gIFtCTE9DS19LRVlTLkg2XTogSGVhZGluZyxcbiAgLy8gW0JMT0NLX0tFWVMuUF06IEhlYWRpbmcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCb2R5KHsgYm9keSwgY2hpbGRyZW4sIHN4LCAuLi5yZXN0IH06IEJvZHlQcm9wcykge1xuICBjb25zdCBjb250ZW50ID0gYm9keSB8fCBjaGlsZHJlbiB8fCBcIlwiO1xuXG4gIGNvbnN0IHJlcGxhY2VDb2RlID0gKG5vZGU6IERPTU5vZGUpID0+IHtcbiAgICBpZiAoXG4gICAgICBub2RlIGluc3RhbmNlb2YgRWxlbWVudCAmJlxuICAgICAgT2JqZWN0LmtleXMoQkxPQ0tfQ09NUE9ORU5UUykuaW5jbHVkZXMobm9kZS5uYW1lKVxuICAgICkge1xuICAgICAgY29uc3QgUmVuZGVyQ29tcG9uZW50ID0gQkxPQ0tfQ09NUE9ORU5UU1tub2RlLm5hbWVdO1xuICAgICAgcmV0dXJuIDxSZW5kZXJDb21wb25lbnQgbm9kZT17bm9kZX0gLz47XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgey4uLnJlc3R9XG4gICAgICBzeD17e1xuICAgICAgICBcIiYgYVwiOiAoeyBwYWxldHRlIH0pID0+ICh7XG4gICAgICAgICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxuICAgICAgICAgIGNvbG9yOiBwYWxldHRlLnByaW1hcnkubWFpbixcbiAgICAgICAgfSksXG4gICAgICAgIFwiJiAubW9yZS1saW5rXCI6IHtcbiAgICAgICAgICBkaXNwbGF5OiBcIm5vbmVcIixcbiAgICAgICAgfSxcbiAgICAgICAgLi4uc3gsXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtwYXJzZShTdHJpbmcoY29udGVudCksIHsgcmVwbGFjZTogcmVwbGFjZUNvZGUgfSl9XG4gICAgPC9Cb3g+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgUHJpc20gYXMgU3ludGF4SGlnaGxpZ2h0ZXIgfSBmcm9tIFwicmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyXCI7XG5pbXBvcnQgeyB4b25va2FpIH0gZnJvbSBcInJlYWN0LXN5bnRheC1oaWdobGlnaHRlci9kaXN0L2Nqcy9zdHlsZXMvcHJpc21cIjtcbmltcG9ydCB7IFR5cG9ncmFwaHkgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgZG9tVG9SZWFjdCwgRWxlbWVudCB9IGZyb20gXCJodG1sLXJlYWN0LXBhcnNlclwiO1xuXG5pbXBvcnQgdHlwZSB7IENvZGVCbG9ja1Byb3BzIH0gZnJvbSBcIi4vdHlwZXNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvZGVCbG9jayh7IG5vZGUgfTogQ29kZUJsb2NrUHJvcHMpIHtcbiAgY29uc3QgeyBhdHRyaWJzLCBjaGlsZHJlbiwgcGFyZW50IH0gPSBub2RlO1xuICBjb25zdCB7IG5hbWUgfSA9IHBhcmVudCBhcyBFbGVtZW50O1xuICBjb25zdCB7IGxhbmcgfSA9IGF0dHJpYnM7XG4gIGNvbnN0IHJlbmRlciA9IGRvbVRvUmVhY3QoY2hpbGRyZW4pO1xuXG4gIHJldHVybiBuYW1lID09IFwicHJlXCIgPyAoXG4gICAgPFN5bnRheEhpZ2hsaWdodGVyXG4gICAgICBzdHlsZT17eG9ub2thaX1cbiAgICAgIHNob3dMaW5lTnVtYmVyc1xuICAgICAgc2hvd0lubGluZUxpbmVOdW1iZXJzXG4gICAgICB3cmFwTGluZXNcbiAgICAgIGxhbmd1YWdlPXtsYW5nfVxuICAgID5cbiAgICAgIHtyZW5kZXJ9XG4gICAgPC9TeW50YXhIaWdobGlnaHRlcj5cbiAgKSA6IChcbiAgICA8VHlwb2dyYXBoeVxuICAgICAgdmFyaWFudD1cImJvZHkxXCJcbiAgICAgIGNvbXBvbmVudD17XCJjb2RlXCJ9XG4gICAgICBwYXJhZ3JhcGg9e2ZhbHNlfVxuICAgICAgc3g9e3tcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAodGhlbWUpID0+IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLFxuICAgICAgICBjb2xvcjogKHRoZW1lKSA9PiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcbiAgICAgICAgcHg6IDAuOCxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAxLFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7cmVuZGVyfVxuICAgIDwvVHlwb2dyYXBoeT5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IGRvbVRvUmVhY3QgfSBmcm9tIFwiaHRtbC1yZWFjdC1wYXJzZXJcIjtcblxuaW1wb3J0IHR5cGUgeyBCbG9ja3F1b3RlUHJvcHMgfSBmcm9tIFwiLi90eXBlc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmxvY2txdW90ZSh7IG5vZGUgfTogQmxvY2txdW90ZVByb3BzKSB7XG4gIGNvbnN0IHsgY2hpbGRyZW4gfSA9IG5vZGU7XG4gIHJldHVybiAoXG4gICAgPFR5cG9ncmFwaHlcbiAgICAgIHN4PXt7XG4gICAgICAgIHA6IDQsXG4gICAgICAgIG15OiAyLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICh7IHBhbGV0dGUgfSkgPT4gcGFsZXR0ZS5ncmV5WzEwMF0sXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtkb21Ub1JlYWN0KGNoaWxkcmVuKX1cbiAgICA8L1R5cG9ncmFwaHk+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgQ2FyZE1lZGlhLCBDYXJkIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB0eXBlIHsgSW1hZ2VQcm9wcyB9IGZyb20gXCIuL3R5cGVzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbWFnZSh7IG5vZGUgfTogSW1hZ2VQcm9wcykge1xuICBjb25zdCB7IGF0dHJpYnMgfSA9IG5vZGU7XG4gIGNvbnN0IHsgc3JjLCBhbHQgfSA9IGF0dHJpYnM7XG5cbiAgcmV0dXJuIChcbiAgICA8Q2FyZCByYWlzZWQ+XG4gICAgICA8Q2FyZE1lZGlhIGNvbXBvbmVudD1cImltZ1wiIGltYWdlPXtzcmN9IGFsdD17YWx0fSAvPlxuICAgIDwvQ2FyZD5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBDYXJkIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB0eXBlIHsgTWVkaWFQcm9wcyB9IGZyb20gXCIuL3R5cGVzXCI7XG5pbXBvcnQgeyBkb21Ub1JlYWN0IH0gZnJvbSBcImh0bWwtcmVhY3QtcGFyc2VyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lZGlhKHsgbm9kZSB9OiBNZWRpYVByb3BzKSB7XG4gIGNvbnN0IHsgY2hpbGRyZW4gfSA9IG5vZGU7XG4gIHJldHVybiAoXG4gICAgPENhcmRcbiAgICAgIHN4PXt7XG4gICAgICAgIG15OiA0LFxuICAgICAgICBcIiYgaWZyYW1lLCAmIHZpZGVvXCI6IHtcbiAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgICAgICB9LFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7ZG9tVG9SZWFjdChjaGlsZHJlbil9XG4gICAgPC9DYXJkPlxuICApO1xufVxuIiwgImltcG9ydCB7IFR5cG9ncmFwaHkgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgZG9tVG9SZWFjdCB9IGZyb20gXCJodG1sLXJlYWN0LXBhcnNlclwiO1xuaW1wb3J0IHsgQkxPQ0tfS0VZUyB9IGZyb20gXCJ+L2NvbXBvbmVudHMvQ29udGVudC9jb21wb25lbnRzL0JvZHlcIjtcblxuaW1wb3J0IHR5cGUgeyBJbWFnZVByb3BzIH0gZnJvbSBcIi4vdHlwZXNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEltYWdlKHsgbm9kZSB9OiBJbWFnZVByb3BzKSB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIG5hbWUgfSA9IG5vZGU7XG5cbiAgY29uc3QgQkxPQ0tfVkFSSUFOVFM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBcImgxXCIgfCBcImgyXCIgfCBcImgzXCIgfCBcImg0XCIgfCBcImg1XCIgfCBcImg2XCIgfCBcImJvZHkxXCI7XG4gIH0gPSB7XG4gICAgW0JMT0NLX0tFWVMuSDFdOiBcImgxXCIsXG4gICAgW0JMT0NLX0tFWVMuSDJdOiBcImgyXCIsXG4gICAgW0JMT0NLX0tFWVMuSDNdOiBcImgzXCIsXG4gICAgW0JMT0NLX0tFWVMuSDRdOiBcImg0XCIsXG4gICAgW0JMT0NLX0tFWVMuSDVdOiBcImg1XCIsXG4gICAgW0JMT0NLX0tFWVMuSDZdOiBcImg2XCIsXG4gICAgW0JMT0NLX0tFWVMuUF06IFwiYm9keTFcIixcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9e0JMT0NLX1ZBUklBTlRTW25hbWVdfT5cbiAgICAgIHtkb21Ub1JlYWN0KGNoaWxkcmVuKX1cbiAgICA8L1R5cG9ncmFwaHk+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgdXNlVHJhbnNpdGlvbiwgdXNlQWN0aW9uRGF0YSwgRm9ybSB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIFRleHRGaWVsZCxcbiAgQm94LFxuICBHcmlkLFxuICBCdXR0b24sXG4gIFR5cG9ncmFwaHksXG4gIENvbGxhcHNlLFxufSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB0eXBlIHsgQ3JlYXRlQ29tbWVudFByb3BzIH0gZnJvbSBcIi4vdHlwZXNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENyZWF0ZUNvbW1lbnQoe1xuICBjb21tZW50T24sXG4gIHBhcmVudCxcbn06IENyZWF0ZUNvbW1lbnRQcm9wcykge1xuICBjb25zdCB0cmFuc2l0aW9uID0gdXNlVHJhbnNpdGlvbigpO1xuICBjb25zdCBhY3Rpb25EYXRhID0gdXNlQWN0aW9uRGF0YSgpO1xuXG4gIGNvbnN0IGlzU3VibWl0dGluZyA9IHRyYW5zaXRpb24uc3RhdGUgPT0gXCJzdWJtaXR0aW5nXCI7XG4gIGNvbnN0IGlzUmVsb2FkaW5nID0gdHJhbnNpdGlvbi50eXBlID09PSBcImFjdGlvblJlbG9hZFwiO1xuXG4gIGNvbnN0IGZvcm1SZWYgPSB1c2VSZWY8SFRNTEZvcm1FbGVtZW50IHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaXNTdWJtaXR0aW5nKSB7XG4gICAgICBmb3JtUmVmLmN1cnJlbnQ/LnJlc2V0KCk7XG4gICAgfVxuICB9LCBbaXNTdWJtaXR0aW5nXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAob3BlbiAmJiBpc1JlbG9hZGluZykge1xuICAgICAgc2V0T3BlbihmYWxzZSk7XG4gICAgfVxuICB9LCBbb3BlbiwgaXNSZWxvYWRpbmddKTtcblxuICBjb25zb2xlLmxvZyhhY3Rpb25EYXRhPy5zdWNjZXNzLCB0cmFuc2l0aW9uLnR5cGUpO1xuICByZXR1cm4gKFxuICAgIDxCb3ggY2xhc3NOYW1lPVwiY29tbWVudC1ib3hcIj5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0T3Blbighb3Blbil9XG4gICAgICAgIHZhcmlhbnQ9XCJ0ZXh0XCJcbiAgICAgICAgZGlzYWJsZVJpcHBsZVxuICAgICAgICBkaXNhYmxlRm9jdXNSaXBwbGVcbiAgICAgICAgZGlzYWJsZVRvdWNoUmlwcGxlXG4gICAgICAgIGRpc2FibGVFbGV2YXRpb25cbiAgICAgID5cbiAgICAgICAgUmVwbHlcbiAgICAgIDwvQnV0dG9uPlxuICAgICAgPENvbGxhcHNlIGluPXtvcGVufT5cbiAgICAgICAgPEZvcm0gcmVmPXtmb3JtUmVmfSBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICAgICAge3BhcmVudCAmJiA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJwYXJlbnRcIiB2YWx1ZT17cGFyZW50fSAvPn1cbiAgICAgICAgICB7Y29tbWVudE9uICYmIChcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImNvbW1lbnRPblwiIHZhbHVlPXtjb21tZW50T259IC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8R3JpZCBzeD17eyBtdDogMSB9fSBjb250YWluZXIgc3BhY2luZz17MX0+XG4gICAgICAgICAgICA8R3JpZFxuICAgICAgICAgICAgICBpdGVtXG4gICAgICAgICAgICAgIHhzPXsxMn1cbiAgICAgICAgICAgICAgc209ezR9XG4gICAgICAgICAgICAgIHN4PXt7IGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICBsYWJlbD1cIk5hbWVcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJhdXRob3JcIlxuICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICBzeD17eyBtYjogMSB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJFbWFpbFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGEgdmFsaWQgZW1haWwgYWRkcmVzc1wiXG4gICAgICAgICAgICAgICAgbmFtZT1cImF1dGhvckVtYWlsXCJcbiAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs4fT5cbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgIGxhYmVsPVwiQ29tbWVudFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cImNvbnRlbnRcIlxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgbXVsdGlsaW5lXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgbWluUm93cz17Mi40fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIG14OiAxLFxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxuICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3g9e3sgZmxleDogMSB9fSB2YXJpYW50PVwiY2FwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgRW1haWxzIHdvbnQgYmUgcHVibGlzaGVkLlxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVFbGV2YXRpb25cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBTdWJtaXRcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0Zvcm0+XG4gICAgICA8L0NvbGxhcHNlPlxuICAgIDwvQm94PlxuICApO1xufVxuIiwgImltcG9ydCB7IHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IGdldFBvc3RzIH0gZnJvbSBcIn4vYXBpL3Bvc3RzL2dldFBvc3RzXCI7XG5pbXBvcnQgcXMgZnJvbSBcInF1ZXJ5LXN0cmluZ1wiO1xuaW1wb3J0IHR5cGUgeyBQb3N0LCBRdWVyeSB9IGZyb20gXCJ+L3R5cGVzL3Bvc3RzXCI7XG5pbXBvcnQgdHlwZSB7IExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyB1c2VRdWVyeVBhcmFtcywgTnVtYmVyUGFyYW0sIFN0cmluZ1BhcmFtIH0gZnJvbSBcInVzZS1xdWVyeS1wYXJhbXNcIjtcblxuaW1wb3J0IEV4Y2VycHQgZnJvbSBcIn4vY29tcG9uZW50cy9Db250ZW50L2NvbXBvbmVudHMvRXhjZXJwdFwiO1xuXG5pbXBvcnQge1xuICBUeXBvZ3JhcGh5LFxuICBGb3JtQ29udHJvbCxcbiAgSW5wdXRMYWJlbCxcbiAgU2VsZWN0LFxuICBCdXR0b25Hcm91cCxcbiAgQnV0dG9uLFxufSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCB1cmwgPSBuZXcgVVJMKHJlcXVlc3QudXJsKTtcbiAgY29uc3QgcGFyYW1zID0gcXMucGFyc2UodXJsLnNlYXJjaCwgeyBwYXJzZU51bWJlcnM6IHRydWUgfSkgYXMgUXVlcnk7XG4gIHJldHVybiBnZXRQb3N0cyhwYXJhbXMpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdHMoKSB7XG4gIGNvbnN0IHsgbm9kZXMsIHBhZ2VJbmZvIH0gPSB1c2VMb2FkZXJEYXRhPHtcbiAgICBub2RlczogUG9zdFtdO1xuICAgIHBhZ2VJbmZvOiB7XG4gICAgICBlbmRDdXJzb3I/OiBzdHJpbmc7XG4gICAgICBoYXNOZXh0UGFnZTogYm9vbGVhbjtcbiAgICAgIGhhc1ByZXZpb3VzUGFnZTogYm9vbGVhbjtcbiAgICAgIHN0YXJ0Q3Vyc29yOiBzdHJpbmc7XG4gICAgfTtcbiAgfT4oKTtcblxuICBjb25zdCB7IGVuZEN1cnNvciwgaGFzTmV4dFBhZ2UsIGhhc1ByZXZpb3VzUGFnZSwgc3RhcnRDdXJzb3IgfSA9IHBhZ2VJbmZvO1xuXG4gIGNvbnN0IHBhZ2luZ09wdGlvbnMgPSBbNSwgMTAsIDE1LCAyMF07XG5cbiAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VRdWVyeVBhcmFtcyh7XG4gICAgbGltaXQ6IE51bWJlclBhcmFtLFxuICAgIGFmdGVyOiBTdHJpbmdQYXJhbSxcbiAgICBiZWZvcmU6IFN0cmluZ1BhcmFtLFxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDFcIj5Qb3N0czwvVHlwb2dyYXBoeT5cbiAgICAgIDxkaXY+XG4gICAgICAgIHtub2Rlcy5tYXAoKHsgaWQsIC4uLnJlc3QgfSkgPT4gKFxuICAgICAgICAgIDxFeGNlcnB0IHsuLi5yZXN0fSBrZXk9e1N0cmluZyhpZCl9IC8+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgICA8Rm9ybUNvbnRyb2wgc3g9e3sgbTogMSwgbWluV2lkdGg6IDEyMCB9fT5cbiAgICAgICAgPElucHV0TGFiZWwgaHRtbEZvcj1cImdyb3VwZWQtbmF0aXZlLXNlbGVjdFwiPlBhZ2Ugc2l6ZTwvSW5wdXRMYWJlbD5cbiAgICAgICAgPFNlbGVjdFxuICAgICAgICAgIG5hdGl2ZVxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT17NX1cbiAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgIHZhbHVlPXtxdWVyeS5saW1pdH1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxpbWl0ID0gTnVtYmVyKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgIHNldFF1ZXJ5KHsgYmVmb3JlOiB1bmRlZmluZWQsIGFmdGVyOiB1bmRlZmluZWQsIGxpbWl0IH0pO1xuICAgICAgICAgIH19XG4gICAgICAgICAgbGFiZWw9XCJQYWdlIHNpemVcIlxuICAgICAgICA+XG4gICAgICAgICAge3BhZ2luZ09wdGlvbnMubWFwKCh2YWx1ZSwgaSkgPT4gKFxuICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2l9IHZhbHVlPXt2YWx1ZX0+XG4gICAgICAgICAgICAgIHt2YWx1ZX1cbiAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1NlbGVjdD5cblxuICAgICAgICA8QnV0dG9uR3JvdXAgdmFyaWFudD1cInRleHRcIiBhcmlhLWxhYmVsPVwidGV4dCBidXR0b24gZ3JvdXBcIj5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBkaXNhYmxlZD17IWhhc1ByZXZpb3VzUGFnZX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgc2V0UXVlcnkoe1xuICAgICAgICAgICAgICAgIGJlZm9yZTogc3RhcnRDdXJzb3IsXG4gICAgICAgICAgICAgICAgYWZ0ZXI6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFByZXZpb3VzXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgZGlzYWJsZWQ9eyFoYXNOZXh0UGFnZX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgc2V0UXVlcnkoe1xuICAgICAgICAgICAgICAgIGFmdGVyOiBlbmRDdXJzb3IsXG4gICAgICAgICAgICAgICAgYmVmb3JlOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBOZXh0XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvQnV0dG9uR3JvdXA+XG4gICAgICA8L0Zvcm1Db250cm9sPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB7IGdxbCB9IGZyb20gXCJncmFwaHFsLXJlcXVlc3RcIjtcbmltcG9ydCB7IGdyYXBocWwgfSBmcm9tIFwifi9saWIvZ3JhcGhxbFwiO1xuaW1wb3J0IHR5cGUgeyBQb3N0LCBRdWVyeSB9IGZyb20gXCJ+L3R5cGVzL3Bvc3RzXCI7XG5cbmNvbnN0IEdFVF9QT1NUUyA9IGdxbGBcbiAgcXVlcnkgZ2V0UG9zdHMoJGZpcnN0OiBJbnQsICRsYXN0OiBJbnQsICRhZnRlcjogU3RyaW5nLCAkYmVmb3JlOiBTdHJpbmcpIHtcbiAgICBwb3N0cyhmaXJzdDogJGZpcnN0LCBsYXN0OiAkbGFzdCwgYWZ0ZXI6ICRhZnRlciwgYmVmb3JlOiAkYmVmb3JlKSB7XG4gICAgICBub2RlcyB7XG4gICAgICAgIGlkXG4gICAgICAgIHRpdGxlXG4gICAgICAgIGV4Y2VycHRcbiAgICAgICAgc2x1Z1xuICAgICAgICBjYXRlZ29yaWVzIHtcbiAgICAgICAgICBub2RlcyB7XG4gICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICBpZFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb21tZW50Q291bnRcbiAgICAgICAgZGF0ZVxuICAgICAgICBkYXRlR210XG4gICAgICB9XG4gICAgICBwYWdlSW5mbyB7XG4gICAgICAgIGhhc05leHRQYWdlXG4gICAgICAgIGVuZEN1cnNvclxuICAgICAgICBoYXNQcmV2aW91c1BhZ2VcbiAgICAgICAgc3RhcnRDdXJzb3JcbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBnZXRQb3N0cyA9IGFzeW5jICh7XG4gIGxpbWl0ID0gNSxcbiAgYWZ0ZXIsXG4gIGJlZm9yZSxcbn06IFF1ZXJ5KTogUHJvbWlzZTx7IHBvc3RzOiB7IG5vZGVzOiBQb3N0W10gfSB9PiA9PiB7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBncmFwaHFsLnJlcXVlc3QoR0VUX1BPU1RTLCB7XG4gICAgZmlyc3Q6IGFmdGVyID8gbGltaXQgOiBiZWZvcmUgPyBudWxsIDogbGltaXQsXG4gICAgbGFzdDogYmVmb3JlID8gbGltaXQgOiBudWxsLFxuICAgIGFmdGVyLFxuICAgIGJlZm9yZSxcbiAgfSk7XG4gIHJldHVybiBkYXRhLnBvc3RzO1xufTtcbiIsICJpbXBvcnQgeyBCb3gsIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IEJvZHkgZnJvbSBcIn4vY29tcG9uZW50cy9Db250ZW50L2NvbXBvbmVudHMvQm9keVwiO1xuaW1wb3J0IFRpdGxlIGZyb20gXCJ+L2NvbXBvbmVudHMvQ29udGVudC9jb21wb25lbnRzL1RpdGxlXCI7XG5pbXBvcnQgRGF0ZSBmcm9tIFwifi9jb21wb25lbnRzL0RhdGVcIjtcblxuaW1wb3J0IHR5cGUgeyBFeGNlcnB0UHJvcHMgfSBmcm9tIFwiLi90eXBlc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXhjZXJwdCh7XG4gIHNsdWcsXG4gIHRpdGxlLFxuICBleGNlcnB0LFxuICBjb21tZW50Q291bnQsXG4gIGRhdGUsXG59OiBFeGNlcnB0UHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8Qm94IHN4PXt7IG10OiA0LCBtbDogMyB9fT5cbiAgICAgIDxEYXRlIGRhdGU9e2RhdGV9IC8+XG4gICAgICA8VGl0bGUgdG89e3NsdWd9Pnt0aXRsZX08L1RpdGxlPlxuICAgICAge2V4Y2VycHQgJiYgPEJvZHk+e2V4Y2VycHR9PC9Cb2R5Pn1cbiAgICAgIHtjb21tZW50Q291bnQgJiYgYGNvbW1lbnRzOiAke2NvbW1lbnRDb3VudH1gfVxuICAgIDwvQm94PlxuICApO1xufVxuIiwgImltcG9ydCB7IFR5cG9ncmFwaHkgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PnsvKiA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDJcIj5XZWxjb21lIHRvIFJlbWl4PC9UeXBvZ3JhcGh5PiAqL308L2Rpdj5cbiAgKTtcbn1cbiIsICJleHBvcnQgZGVmYXVsdCB7J3ZlcnNpb24nOidiZjBjNmEzYicsJ2VudHJ5Jzp7J21vZHVsZSc6Jy9idWlsZC9lbnRyeS5jbGllbnQtSTJHRzdHM1EuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVhaTFFIV1ZTLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTElRQ0czUlguanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1ZTEJVRE1DNS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTVIQVNQUVZELmpzJ119LCdyb3V0ZXMnOnsncm9vdCc6eydpZCc6J3Jvb3QnLCdwYXJlbnRJZCc6dW5kZWZpbmVkLCdwYXRoJzonJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm9vdC00SDJYNVY3UC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstUVNRNDdZWk8uanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1XNFU2UVVYRi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVIzSkFCQUdCLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOnRydWUsJ2hhc0Vycm9yQm91bmRhcnknOnRydWV9LCdyb3V0ZXMvYWJvdXQvaW5kZXgnOnsnaWQnOidyb3V0ZXMvYWJvdXQvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYWJvdXQnLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Fib3V0L2luZGV4LUxLQ0haV0FHLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvY29udGFjdC9pbmRleCc6eydpZCc6J3JvdXRlcy9jb250YWN0L2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J2NvbnRhY3QnLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2NvbnRhY3QvaW5kZXgtRjQ3N1dKN1QuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9pbmRleCc6eydpZCc6J3JvdXRlcy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9pbmRleC1LVUVWSEVQRi5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3Bvc3RzLyRzbHVnJzp7J2lkJzoncm91dGVzL3Bvc3RzLyRzbHVnJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3Bvc3RzLzpzbHVnJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3Bvc3RzLyRzbHVnLUFGSjU0SUtZLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay0yUEFBNzRHWS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUZFVkhUQ1czLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstU0o3NkNQNFEuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay01SUtFQkpVUi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTJGNE1UWkFPLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUU5UT05USjMuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1aMkJYSUVTUi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVBXVUw2WjYzLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstN0JHWEZYMlYuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1XS1BGUk1XSC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTNGTDVYUUZWLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstWkNQS1FEWFcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1HUEtSVElZQi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVNFQlQ2TERULmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstR0JCN1pBS04uanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1LRDdUSk5HWS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVIzRkQ1N0ZPLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstR09CSDdGWU8uanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1MNzdGSjVFWS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUJSTU1TSUZGLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRE9CREFYTTIuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1WN1hRM1RJRS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLU0yM0pKSEVELmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstWTNMVTRIQk4uanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay00WVNEQzNFUi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUdVUE5QRkhaLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstVzRBN1NITVUuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1XNTZRWENISi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUFMUTc0NVI2LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstWEcyR0kyQ0suanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1VR1RERlFKQS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTNQMjdBUTRHLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstM1MzTFpTQ0cuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1WQjIyQTc1Ty5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUdKTVpYVlNZLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRFZIRE1NTUguanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1ZSExGT0VTTS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTZGQlZFUVdTLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTlhIRFBQRVMuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1KUEJLRElTVC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUpPUkVEM0lRLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNEJYM05MTlkuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1WVVpPVEZPNy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVJKNUNRTVRCLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRkROV1dZVkQuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1VRldNVUtCSi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTdCVFRKMklYLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstM1hHVUNTTEouanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1VTllLWEVCTC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUZXRlFYNEdOLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstWE01UVpYV08uanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1DM1pPU1g0Qy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLU9WSjY1Q0hCLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUEZTVTJTR0EuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1INEQ2VU4zSy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVhKWUNRQVQ0LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstQk5GM0pTRU0uanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1DQ0tZUjRXSy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLU03VFFYQlc0LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstV0NFVldVRjIuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1OVE1USEtVWC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVBVREFWQUdELmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstU1ZZRFFEVDIuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay02MjQ1R1pSWS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVNOWlQ3UUJKLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstV1VIMzdFQ1UuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1OTzJaRUdSSy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLURPUUtVWko2LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstS0ZTSEQyTVEuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay03WFpZVzJMUS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUxMQ1VTTUxWLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstR1pRNDJWR1IuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1YTFRORk9FSC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUJVSDdaNFhYLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstV0tYN1dPTFguanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1DVjJUWkIzQi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUZMSERFVEdBLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRlFFSFNJVTUuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1aSEQ1S0ZNUS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTRIU0E3NFVULmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstQ1BGUk1TNDMuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay0zRVE3QlpUUi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLU9DT0o0NUNTLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSVdYVjNPQk8uanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay00UlRSVlFPRC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLU9FUElDVFlRLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstWlRDQ0hZUlYuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1XRkVYRlg1UC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTI3SFVCMlg2LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstVUxMQVZDVEsuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1WWEczR05BQy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTZUV0xVRTVGLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUTdLWVlVR0wuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1IS083WUhPQS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLU5EWkw2NkRWLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstMzNSQTdLQVEuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1QTUxOV1pERC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUtPNkc0Sk1QLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNzRBSE5BQk8uanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay03TFFUWk5LUS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTRZR05MNUpYLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstN0tWTURGWFEuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay00N1dXUUo0Ni5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTZON0tMUjdWLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstVk1LTUhYMzQuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1XVEJaT0pZRi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUxSRTRXNUVBLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstQUFGWDNYREouanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1FTVlSVEE0Qi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTRWT1hETE1QLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSjZCMzZDQ1AuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay03RzVaVVRSVy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUQ0VFBPMlhILmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstM1M2NEZHTzQuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay02T01YVFNGRS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVBKUVBWUlhNLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRTY0VlRDUUUuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1IUTdJUVhUNi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUtCRkpaSUFFLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRVdNVEpVTlEuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1TQzZUN1hTNC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVo3VEg1SVBXLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstN1k3VlRaRkguanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1UMlozUjRGQy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLU5MRkgySEFYLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUUNVUjdSWVMuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1JUTZKRVNPVS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUJTTkJMR0RCLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstV0lDSDZHMlMuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1OUkJFS1ZKSy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTZOUE80R1pDLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUUM3QzNGWEQuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1WUjRaMlVDTi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLURVNzQ1WDVCLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRFhXSUxQWDUuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1MS09BVTZKRi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVVKUVY3Vk9HLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSko0WlpTWEwuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1FUUZXVUpNVi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUE0QTNPWkUyLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSjZGSzJNQUEuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1ETUJYM0U0SS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTJEUUZNRU5KLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNFhFNTZQV1cuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1XUTdWWkxSWC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVFCSlkzSU5RLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstWFZNRVlBUkEuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1PWEo1RU9SUy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVJDWUhMTE9JLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstQUhJSUdFTE8uanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1BRkNXMlpCNC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUFLSEdDRzdQLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRVdESlNLV1EuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay01SkJET0o2Ty5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVo2N0RYUVczLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSjVGQkRFUlUuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1LQkRHTDVGUi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUlXM0NEREhULmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUEpXSkJQMjMuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1OWDdLR1dMRS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVJGNk1aWkNOLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstQ1FLVjJFUTcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1OS0tCSE1DVy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLURYRVJMTEhWLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstVUk1R1BNQkUuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1HWllBM1kzWS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVJXSjQ1R1VXLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSU5JSkozR1EuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1LRlczWEJSTC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVdMRzRYR001LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstQkc2WVBQNFMuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1JTTJTWVk2Qi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTdGSTNOSk9HLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSVBEQ1pHUVEuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1EMkVZT0lESC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUFHRzZFVTY1LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUTJDWTY3UzMuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1JUEVWVFhCTi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVIyWlZXN0pTLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSkRBUEVSWlouanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1aRTZLR1JQUi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTc2S0pOTFZCLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstT0Y0UVZHQVcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay00T0VVQzNRWi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTRaWVBSWTZLLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRzM0S0tRMkkuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1PQU5aMkRURC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUNFU1ZYQUw2LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstN0M3NllGUFouanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1NNDdUVlZMWi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTVUTk9NQllDLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTkRXRzUyM1MuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1OVFJJRFVPNC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLU5TWjVHVlFaLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstQVk2SjdBQ0QuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1YVVJRRTdJWS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVNBQ0tVQk9ILmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUERCTDJaSDIuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1OWTVCM1ZCUS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUhCSUlVNFJULmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstM1laUDNKRTMuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay03V1pRUVlHMy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUY3V05aVUVZLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNUUySUlDM1IuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1OUkQ3WlNHRS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUVMS1g3UFhPLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstVEFBNjJIUUYuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1FVU83VUtaTy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUZCM0NKM1JFLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRlBBR0NZWTcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay0yNzNBV0FWSy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTVCSFpFTU9TLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstU1pZMkhLRDUuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1ZWDM3V0hVSC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVVEQkRPRURGLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRTdCRTVEQTQuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1UR1UyNFk2NC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVlXR1lZTVQ2LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNUNRVkZGSzcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1RVDNQSDc3My5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTU2Vk5BS01JLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstU0JFR0ZaNFkuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1CQ0ZITzZBWi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUxRRjdKTTJBLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRFhZWE5QREEuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1BQkxMM0lLSC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUpHTFJKNE43LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNFlPRVNRRFouanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1DUEhWM0dESi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVc0Vk9VWVU0LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstVUVRQ001WTIuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1LTlBZR1k2Ny5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUFRM1JSUEpaLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstQjZMUjdMVk8uanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1INlVFMkxZQy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLU1XWVZIV0xNLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstT1U1UU42Q1AuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1MWTVGN0Q3Ti5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUtZSzZET1NULmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstVVZBNUFIT0ouanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1OTE5MNlozUS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTNIRUVUTEJTLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstN0s3N01ZV0EuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1DSkVUNkRNSS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUFNRlA3WVFHLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstQVJWMk1TWEYuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1WSkpESzNNRi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVVFREI1WFFXLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSUFORUVYNUguanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay02QUxGVE5SQy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTRIVlo3WktZLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstMlY0RjRGSlMuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay01NEFZMkhLVS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVBKVUxQNEk3LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstQlpXTFhCU1EuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1OVEY3TjNLWS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTNXSVJTSFBNLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstVEVUT043UVIuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1BNEVJM1RaWi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUs0TEJRVkVKLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstV05FTEE3NzQuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1UTURTSDZZUC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVFaN1FHM1pXLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRlJXVFI1M0MuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1WNkVQN0JPQS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLURMVjZDR1VHLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRVlSSENENTQuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay0zSFNBQ1JMNy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUs2T1pIRVozLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstMkZXM1NPMkUuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay02WUs1REJXTC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVZBTEtaVU9NLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstWkxCTjRDVjUuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1WM1lLV1ZDMy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTM1VkpLSlI2LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstQVBTRTRIQlAuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1VSjNJN0hCRi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUhMRDdYRFRILmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstWFRTQUNGWVguanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1LV1BHSUtJTy5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3Bvc3RzL2luZGV4Jzp7J2lkJzoncm91dGVzL3Bvc3RzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J3Bvc3RzJywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9wb3N0cy9pbmRleC1NS0NCUDdNWC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstMlBBQTc0R1kuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1GRVZIVENXMy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVNKNzZDUDRRLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNUlLRUJKVVIuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay0yRjRNVFpBTy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVFOVE9OVEozLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstWjJCWElFU1IuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1QV1VMNlo2My5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTdCR1hGWDJWLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstV0tQRlJNV0guanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay0zRkw1WFFGVi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVpDUEtRRFhXLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstR1BLUlRJWUIuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1TRUJUNkxEVC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUdCQjdaQUtOLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstS0Q3VEpOR1kuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1SM0ZENTdGTy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUdPQkg3RllPLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTDc3Rko1RVkuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1CUk1NU0lGRi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLURPQkRBWE0yLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstVjdYUTNUSUUuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1NMjNKSkhFRC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVkzTFU0SEJOLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNFlTREMzRVIuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1HVVBOUEZIWi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVc0QTdTSE1VLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstVzU2UVhDSEouanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1BTFE3NDVSNi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVhHMkdJMkNLLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstVUdUREZRSkEuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay0zUDI3QVE0Ry5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTNTM0xaU0NHLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstVkIyMkE3NU8uanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1HSk1aWFZTWS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLURWSERNTU1ILmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstWUhMRk9FU00uanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay02RkJWRVFXUy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLU5YSERQUEVTLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSlBCS0RJU1QuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1KT1JFRDNJUS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTRCWDNOTE5ZLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstVlVaT1RGTzcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1SSjVDUU1UQi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUZETldXWVZELmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstVUZXTVVLQkouanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay03QlRUSjJJWC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTNYR1VDU0xKLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstVU5ZS1hFQkwuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1GV0ZRWDRHTi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVhNNVFaWFdPLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstQzNaT1NYNEMuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1PVko2NUNIQi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVBGU1UyU0dBLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSDRENlVOM0suanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1YSllDUUFUNC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUJORjNKU0VNLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstQ0NLWVI0V0suanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1NN1RRWEJXNC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVdDRVZXVUYyLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTlRNVEhLVVguanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1QVURBVkFHRC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVNWWURRRFQyLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNjI0NUdaUlkuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1TTlpUN1FCSi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVdVSDM3RUNVLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTk8yWkVHUksuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1ET1FLVVpKNi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUtGU0hEMk1RLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstN1haWVcyTFEuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1MTENVU01MVi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUdaUTQyVkdSLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstWExUTkZPRUguanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1CVUg3WjRYWC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVdLWDdXT0xYLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstQ1YyVFpCM0IuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1GTEhERVRHQS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUZRRUhTSVU1LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstWkhENUtGTVEuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay00SFNBNzRVVC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUNQRlJNUzQzLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstM0VRN0JaVFIuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1PQ09KNDVDUy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUlXWFYzT0JPLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNFJUUlZRT0QuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1PRVBJQ1RZUS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVpUQ0NIWVJWLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstV0ZFWEZYNVAuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay0yN0hVQjJYNi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVVMTEFWQ1RLLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstVlhHM0dOQUMuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay02VFdMVUU1Ri5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVE3S1lZVUdMLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSEtPN1lIT0EuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1ORFpMNjZEVi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTMzUkE3S0FRLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUE1MTldaREQuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1LTzZHNEpNUC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTc0QUhOQUJPLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstN0xRVFpOS1EuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay00WUdOTDVKWC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTdLVk1ERlhRLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNDdXV1FKNDYuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay02TjdLTFI3Vi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVZNS01IWDM0LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstV1RCWk9KWUYuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1MUkU0VzVFQS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUFBRlgzWERKLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRU1ZUlRBNEIuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay00Vk9YRExNUC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUo2QjM2Q0NQLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstN0c1WlVUUlcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1ENFRQTzJYSC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTNTNjRGR080LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNk9NWFRTRkUuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1QSlFQVlJYTS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUU2NFZUQ1FFLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSFE3SVFYVDYuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1LQkZKWklBRS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUVXTVRKVU5RLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstU0M2VDdYUzQuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1aN1RINUlQVy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTdZN1ZUWkZILmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstVDJaM1I0RkMuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1OTEZIMkhBWC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVFDVVI3UllTLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSVE2SkVTT1UuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1CU05CTEdEQi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVdJQ0g2RzJTLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTlJCRUtWSksuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay02TlBPNEdaQy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVFDN0MzRlhELmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstVlI0WjJVQ04uanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1EVTc0NVg1Qi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLURYV0lMUFg1LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTEtPQVU2SkYuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1VSlFWN1ZPRy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUpKNFpaU1hMLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRVFGV1VKTVYuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1BNEEzT1pFMi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUo2RksyTUFBLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRE1CWDNFNEkuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay0yRFFGTUVOSi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTRYRTU2UFdXLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstV1E3VlpMUlguanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1RQkpZM0lOUS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVhWTUVZQVJBLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstT1hKNUVPUlMuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1SQ1lITExPSS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUFISUlHRUxPLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstQUZDVzJaQjQuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1BS0hHQ0c3UC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUVXREpTS1dRLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNUpCRE9KNk8uanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1aNjdEWFFXMy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUo1RkJERVJVLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstS0JER0w1RlIuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1JVzNDRERIVC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVBKV0pCUDIzLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTlg3S0dXTEUuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1SRjZNWlpDTi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUNRS1YyRVE3LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTktLQkhNQ1cuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1EWEVSTExIVi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVVJNUdQTUJFLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstR1pZQTNZM1kuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1SV0o0NUdVVy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUlOSUpKM0dRLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstS0ZXM1hCUkwuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1XTEc0WEdNNS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUJHNllQUDRTLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSU0yU1lZNkIuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay03RkkzTkpPRy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUlQRENaR1FRLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRDJFWU9JREguanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1BR0c2RVU2NS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVEyQ1k2N1MzLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSVBFVlRYQk4uanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1SMlpWVzdKUy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUpEQVBFUlpaLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstWkU2S0dSUFIuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay03NktKTkxWQi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLU9GNFFWR0FXLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNE9FVUMzUVouanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay00WllQUlk2Sy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUczNEtLUTJJLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstT0FOWjJEVEQuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1DRVNWWEFMNi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTdDNzZZRlBaLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTTQ3VFZWTFouanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay01VE5PTUJZQy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLU5EV0c1MjNTLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTlRSSURVTzQuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1OU1o1R1ZRWi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUFZNko3QUNELmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstWFVSUUU3SVkuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1TQUNLVUJPSC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVBEQkwyWkgyLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTlk1QjNWQlEuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1IQklJVTRSVC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTNZWlAzSkUzLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstN1daUVFZRzMuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1GN1dOWlVFWS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTVFMklJQzNSLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTlJEN1pTR0UuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1FTEtYN1BYTy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVRBQTYySFFGLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRVVPN1VLWk8uanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1GQjNDSjNSRS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUZQQUdDWVk3LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstMjczQVdBVksuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay01QkhaRU1PUy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVNaWTJIS0Q1LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstWVgzN1dIVUguanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1VREJET0VERi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUU3QkU1REE0LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstVEdVMjRZNjQuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1ZV0dZWU1UNi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTVDUVZGRks3LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUVQzUEg3NzMuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay01NlZOQUtNSS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVNCRUdGWjRZLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstQkNGSE82QVouanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1MUUY3Sk0yQS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLURYWVhOUERBLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstQUJMTDNJS0guanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1KR0xSSjRONy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTRZT0VTUURaLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstQ1BIVjNHREouanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1XNFZPVVlVNC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVVFUUNNNVkyLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstS05QWUdZNjcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1BUTNSUlBKWi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUI2TFI3TFZPLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSDZVRTJMWUMuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1NV1lWSFdMTS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLU9VNVFONkNQLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTFk1RjdEN04uanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1LWUs2RE9TVC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVVWQTVBSE9KLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTkxOTDZaM1EuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay0zSEVFVExCUy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTdLNzdNWVdBLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstQ0pFVDZETUkuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1BTUZQN1lRRy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUFSVjJNU1hGLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstVkpKREszTUYuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1VRURCNVhRVy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUlBTkVFWDVILmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNkFMRlROUkMuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay00SFZaN1pLWS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTJWNEY0RkpTLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNTRBWTJIS1UuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1QSlVMUDRJNy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUJaV0xYQlNRLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTlRGN04zS1kuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay0zV0lSU0hQTS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVRFVE9ON1FSLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstQTRFSTNUWlouanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1LNExCUVZFSi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVdORUxBNzc0LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstVE1EU0g2WVAuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1RWjdRRzNaVy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUZSV1RSNTNDLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstVjZFUDdCT0EuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1ETFY2Q0dVRy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUVZUkhDRDU0LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstM0hTQUNSTDcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1LNk9aSEVaMy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTJGVzNTTzJFLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNllLNURCV0wuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1WQUxLWlVPTS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVpMQk40Q1Y1LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstVjNZS1dWQzMuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay0zNVZKS0pSNi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUFQU0U0SEJQLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstVUozSTdIQkYuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1ITEQ3WERUSC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVhUU0FDRllYLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstS1dQR0lLSU8uanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9fSwndXJsJzonL2J1aWxkL21hbmlmZXN0LUJGMEM2QTNCLmpzJ307Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBQUE7QUFBQTs7O0FDQXZCO0FBQUE7QUFBQTtBQUFBO0FBWUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxhQUFhLFFBQVE7QUFJekIsV0FBTyxlQUFlLFNBQVMsb0NBQW9DO0FBQUEsTUFDakUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxXQUFXO0FBQUE7QUFBQTtBQUV2QyxXQUFPLGVBQWUsU0FBUyxnQkFBZ0I7QUFBQSxNQUM3QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLFdBQVc7QUFBQTtBQUFBO0FBRXZDLFdBQU8sZUFBZSxTQUFTLDhCQUE4QjtBQUFBLE1B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Q0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxxQ0FBb0MsYUFBWSxNQUFLLGFBQVksTUFBSyxvQkFBbUIsT0FBTSxvQkFBbUIsU0FBTyxzQkFBcUIsRUFBQyxNQUFLLHNCQUFxQixZQUFXLFFBQU8sUUFBTyxTQUFRLFNBQVEsTUFBSyxpQkFBZ0IsUUFBVSxVQUFTLHlDQUF3QyxXQUFVLENBQUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMscUNBQW9DLGFBQVksT0FBTSxhQUFZLE1BQUssb0JBQW1CLE9BQU0sb0JBQW1CLFdBQVEsT0FBTTs7O0FyQ1MxaXFCLElBQU0sUUFBUSxFQUFFLFFBQVE7QUFDeEIsSUFBTSxTQUFTO0FBQUEsRUFDcEIsUUFBUTtBQUFBLElBQ04sSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWix3QkFBd0I7QUFBQSxJQUNwQixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLHNCQUFzQjtBQUFBLElBQ2xCLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosc0JBQXNCO0FBQUEsSUFDbEIsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWixzQkFBc0I7QUFBQSxJQUNsQixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLGdCQUFnQjtBQUFBLElBQ1osSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUE7IiwKICAibmFtZXMiOiBbXQp9Cg==
