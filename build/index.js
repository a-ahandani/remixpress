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
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return node.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return node.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
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
var assets_manifest_default = { "version": "3bab575d", "entry": { "module": "/build/entry.client-5IO2LV5W.js", "imports": ["/build/_shared/chunk-K3JRMTTJ.js", "/build/_shared/chunk-MZNM66LN.js", "/build/_shared/chunk-C2OHLKYT.js", "/build/_shared/chunk-5TFQ3ZYS.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-34HRAROH.js", "imports": ["/build/_shared/chunk-6DSOGP7N.js", "/build/_shared/chunk-QWWQYAD7.js", "/build/_shared/chunk-C7OMGYA4.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/about/index": { "id": "routes/about/index", "parentId": "root", "path": "about", "index": true, "caseSensitive": void 0, "module": "/build/routes/about/index-YSPOI57T.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/contact/index": { "id": "routes/contact/index", "parentId": "root", "path": "contact", "index": true, "caseSensitive": void 0, "module": "/build/routes/contact/index-NN366RCS.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-OO2PXICE.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/posts/$slug": { "id": "routes/posts/$slug", "parentId": "root", "path": "posts/:slug", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/posts/$slug-WLTE6BE2.js", "imports": ["/build/_shared/chunk-CGOFX57S.js", "/build/_shared/chunk-KST6MIJM.js", "/build/_shared/chunk-W4DDCGJR.js", "/build/_shared/chunk-DL5MXO3V.js", "/build/_shared/chunk-63ZETLZ5.js", "/build/_shared/chunk-WKZUMOLK.js", "/build/_shared/chunk-4JMUBB5D.js", "/build/_shared/chunk-YAHOO7HF.js", "/build/_shared/chunk-3NWSROZK.js", "/build/_shared/chunk-YXYLHWEE.js", "/build/_shared/chunk-W5XEF3HT.js", "/build/_shared/chunk-4L34RSK4.js", "/build/_shared/chunk-BXYVCON7.js", "/build/_shared/chunk-PLY2CTKC.js", "/build/_shared/chunk-PGRJMBPO.js", "/build/_shared/chunk-FUQK6TIK.js", "/build/_shared/chunk-BFJOWWEP.js", "/build/_shared/chunk-HMWCXQ3V.js", "/build/_shared/chunk-NAPXDXXB.js", "/build/_shared/chunk-CUPBCDN3.js", "/build/_shared/chunk-PV6GHHUB.js", "/build/_shared/chunk-T2MHQ3MI.js", "/build/_shared/chunk-3GJM5HW2.js", "/build/_shared/chunk-LHH3YA2K.js", "/build/_shared/chunk-YPP22SGO.js", "/build/_shared/chunk-JSTBMPPO.js", "/build/_shared/chunk-6TIX52WA.js", "/build/_shared/chunk-76ZEK5O2.js", "/build/_shared/chunk-EXICM756.js", "/build/_shared/chunk-6R2LS7SF.js", "/build/_shared/chunk-3RLQ6WQG.js", "/build/_shared/chunk-Y3HSXWYU.js", "/build/_shared/chunk-FEULJQMS.js", "/build/_shared/chunk-ZESSP3YA.js", "/build/_shared/chunk-LF4PESBU.js", "/build/_shared/chunk-AZWR6XEB.js", "/build/_shared/chunk-HXWFRX2G.js", "/build/_shared/chunk-OWNBK76N.js", "/build/_shared/chunk-CXEKE2B6.js", "/build/_shared/chunk-D3DMFONL.js", "/build/_shared/chunk-CMD6ED26.js", "/build/_shared/chunk-B5GCQKIT.js", "/build/_shared/chunk-FERKE32K.js", "/build/_shared/chunk-RD2LXSZC.js", "/build/_shared/chunk-WYL7LVL7.js", "/build/_shared/chunk-TIIWKSTR.js", "/build/_shared/chunk-VUSNIGOL.js", "/build/_shared/chunk-HGKQPUE6.js", "/build/_shared/chunk-P2XARRBX.js", "/build/_shared/chunk-5CEPTFYF.js", "/build/_shared/chunk-46UFQLZG.js", "/build/_shared/chunk-HWOOHABY.js", "/build/_shared/chunk-GXFPP5KH.js", "/build/_shared/chunk-BD6UHRFJ.js", "/build/_shared/chunk-LZHAU4DX.js", "/build/_shared/chunk-PXR7MEZV.js", "/build/_shared/chunk-RCZ4BMLZ.js", "/build/_shared/chunk-BMBOZF77.js", "/build/_shared/chunk-BTQCGS27.js", "/build/_shared/chunk-NMLWH2Q4.js", "/build/_shared/chunk-V54HEZ2D.js", "/build/_shared/chunk-ZJ2LEFOZ.js", "/build/_shared/chunk-U2OIPWYS.js", "/build/_shared/chunk-CXAVSQ3C.js", "/build/_shared/chunk-2PU4CCMF.js", "/build/_shared/chunk-3LGOVRRN.js", "/build/_shared/chunk-RPOH2DQ6.js", "/build/_shared/chunk-KENR2DMN.js", "/build/_shared/chunk-O3T5Z33Z.js", "/build/_shared/chunk-27SN2OUO.js", "/build/_shared/chunk-NKPQ3BIR.js", "/build/_shared/chunk-J6FYO5NY.js", "/build/_shared/chunk-Q4JVCCWS.js", "/build/_shared/chunk-UV32FUWD.js", "/build/_shared/chunk-DMVYPAU4.js", "/build/_shared/chunk-5ASTUBBO.js", "/build/_shared/chunk-F4PO4C4K.js", "/build/_shared/chunk-LJMPLKQD.js", "/build/_shared/chunk-CXCXAOHJ.js", "/build/_shared/chunk-M5NX5S6W.js", "/build/_shared/chunk-HIBU6QJM.js", "/build/_shared/chunk-IDWOZEF3.js", "/build/_shared/chunk-AJNDHUW4.js", "/build/_shared/chunk-AJYJML3X.js", "/build/_shared/chunk-SIJCQEOC.js", "/build/_shared/chunk-H4B2PSO4.js", "/build/_shared/chunk-I52E5XWW.js", "/build/_shared/chunk-CW24WMCT.js", "/build/_shared/chunk-OPGMNQ5H.js", "/build/_shared/chunk-FTF37TBS.js", "/build/_shared/chunk-U7IN5SFG.js", "/build/_shared/chunk-KLJZX4QP.js", "/build/_shared/chunk-WK4OC4UG.js", "/build/_shared/chunk-N5HILVIS.js", "/build/_shared/chunk-2XG4N3UV.js", "/build/_shared/chunk-6AP2JSMP.js", "/build/_shared/chunk-RJKTSEO2.js", "/build/_shared/chunk-2BPQMW6Y.js", "/build/_shared/chunk-S2RPQISY.js", "/build/_shared/chunk-MVOYF363.js", "/build/_shared/chunk-DAA7MYCU.js", "/build/_shared/chunk-JRVAR26H.js", "/build/_shared/chunk-53KHJ63A.js", "/build/_shared/chunk-XI35STE5.js", "/build/_shared/chunk-PC3RIDGW.js", "/build/_shared/chunk-SRDJECLQ.js", "/build/_shared/chunk-NP3JXNG4.js", "/build/_shared/chunk-U45PUTZS.js", "/build/_shared/chunk-ZDZ3XLG2.js", "/build/_shared/chunk-TDSQ3U63.js", "/build/_shared/chunk-4KJ6JEBM.js", "/build/_shared/chunk-5FRRE5MW.js", "/build/_shared/chunk-QMNTG3XX.js", "/build/_shared/chunk-L2AYDJAL.js", "/build/_shared/chunk-PRY45XQV.js", "/build/_shared/chunk-E2PO37LI.js", "/build/_shared/chunk-2MSK5GNM.js", "/build/_shared/chunk-LR47OGWQ.js", "/build/_shared/chunk-LB4VWKA7.js", "/build/_shared/chunk-O3OUWPSZ.js", "/build/_shared/chunk-GJHNEYGV.js", "/build/_shared/chunk-ZDPGWYTL.js", "/build/_shared/chunk-KQ3Z5OWL.js", "/build/_shared/chunk-2P2OKU7O.js", "/build/_shared/chunk-3PZFG7DF.js", "/build/_shared/chunk-GWHLWWBY.js", "/build/_shared/chunk-DTFFTUNR.js", "/build/_shared/chunk-L6TSM7J6.js", "/build/_shared/chunk-M4RJFZHX.js", "/build/_shared/chunk-UDGG76DC.js", "/build/_shared/chunk-2JJJTZDR.js", "/build/_shared/chunk-U76YJQAZ.js", "/build/_shared/chunk-Y5ENMNAX.js", "/build/_shared/chunk-KVORQRJU.js", "/build/_shared/chunk-XG6GLIGK.js", "/build/_shared/chunk-U4YIEEIV.js", "/build/_shared/chunk-OUNSXQ7E.js", "/build/_shared/chunk-RFHFVMUS.js", "/build/_shared/chunk-5LXDWMES.js", "/build/_shared/chunk-QN6EHWVC.js", "/build/_shared/chunk-C6OMSJ5L.js", "/build/_shared/chunk-34BZZNJP.js", "/build/_shared/chunk-G6OIJ7I2.js", "/build/_shared/chunk-UEPORS5S.js", "/build/_shared/chunk-4FRF2GZF.js", "/build/_shared/chunk-EGE2V5B2.js", "/build/_shared/chunk-6RYJBKGS.js", "/build/_shared/chunk-AW4QDL7Y.js", "/build/_shared/chunk-5SM5RQE3.js", "/build/_shared/chunk-FUXOI5RD.js", "/build/_shared/chunk-RB7D7HOC.js", "/build/_shared/chunk-3AGPOOZF.js", "/build/_shared/chunk-WIUAJYFV.js", "/build/_shared/chunk-3AWCLSBI.js", "/build/_shared/chunk-5YPCHH2H.js", "/build/_shared/chunk-I6PO4VJZ.js", "/build/_shared/chunk-3ANZMUJ2.js", "/build/_shared/chunk-23C67NMC.js", "/build/_shared/chunk-VTSUI2WU.js", "/build/_shared/chunk-QPJXMBOB.js", "/build/_shared/chunk-DUFAX7XN.js", "/build/_shared/chunk-HV5Z5WHV.js", "/build/_shared/chunk-PGW2Y3FO.js", "/build/_shared/chunk-IUDPHVFH.js", "/build/_shared/chunk-SU5334PU.js", "/build/_shared/chunk-4ZTMDUF2.js", "/build/_shared/chunk-EAN4RCJC.js", "/build/_shared/chunk-CL2WYOBR.js", "/build/_shared/chunk-I5X4JFGF.js", "/build/_shared/chunk-PPSAMUSJ.js", "/build/_shared/chunk-NYC5AAMB.js", "/build/_shared/chunk-S4R6HXVB.js", "/build/_shared/chunk-5T2LLYUG.js", "/build/_shared/chunk-I3BXZ7JB.js", "/build/_shared/chunk-G5PMXPIW.js", "/build/_shared/chunk-INZ6MKCT.js", "/build/_shared/chunk-IZNM3W5J.js", "/build/_shared/chunk-AYZNBRMS.js", "/build/_shared/chunk-JZOU5ZFS.js", "/build/_shared/chunk-WTDXZA2H.js", "/build/_shared/chunk-BIXJHJHR.js", "/build/_shared/chunk-3ZIV3INX.js", "/build/_shared/chunk-HNXUJN5Q.js", "/build/_shared/chunk-A66EDVXQ.js", "/build/_shared/chunk-QNGMIGJV.js", "/build/_shared/chunk-X57OH7WJ.js", "/build/_shared/chunk-RSF52JGP.js", "/build/_shared/chunk-QXDTHOFD.js", "/build/_shared/chunk-5M36PEOH.js", "/build/_shared/chunk-2KTBYAZB.js", "/build/_shared/chunk-HE5C6AAG.js", "/build/_shared/chunk-DXSSUCOE.js", "/build/_shared/chunk-U6HWBIYQ.js", "/build/_shared/chunk-FSYJURGQ.js", "/build/_shared/chunk-AUIAIKQ6.js", "/build/_shared/chunk-X4T7ZYMZ.js", "/build/_shared/chunk-SYQVCINH.js", "/build/_shared/chunk-3PWBXWMT.js", "/build/_shared/chunk-2ZWWB2E2.js", "/build/_shared/chunk-Q5SGXVAF.js", "/build/_shared/chunk-B3A5LPRI.js", "/build/_shared/chunk-3FOVSXJU.js", "/build/_shared/chunk-V45E3LON.js", "/build/_shared/chunk-VKRKIP5V.js", "/build/_shared/chunk-UQJI5LJU.js", "/build/_shared/chunk-SSJTWOIO.js", "/build/_shared/chunk-AVUMP6RR.js", "/build/_shared/chunk-NSIIO5IM.js", "/build/_shared/chunk-TCME4ZFS.js", "/build/_shared/chunk-TYDJZHKF.js", "/build/_shared/chunk-DWQGT7ZT.js", "/build/_shared/chunk-PXVHN5AK.js", "/build/_shared/chunk-GHUEFKPZ.js", "/build/_shared/chunk-GO2TEWUM.js", "/build/_shared/chunk-7ERIU4X2.js", "/build/_shared/chunk-VNPPVFM2.js", "/build/_shared/chunk-52QX7H6W.js", "/build/_shared/chunk-I26XTX7X.js", "/build/_shared/chunk-K743TFTY.js", "/build/_shared/chunk-PH7K77A2.js", "/build/_shared/chunk-AEFX3MAO.js", "/build/_shared/chunk-7CQLU5PY.js", "/build/_shared/chunk-B5422AI7.js", "/build/_shared/chunk-O44DMM3E.js", "/build/_shared/chunk-ZJES2G5U.js", "/build/_shared/chunk-65XF4CXI.js", "/build/_shared/chunk-FOMIFTPA.js", "/build/_shared/chunk-DH4DHO6N.js", "/build/_shared/chunk-NQXO32G3.js", "/build/_shared/chunk-VEWPAZEI.js", "/build/_shared/chunk-GRSAA3J7.js", "/build/_shared/chunk-TUX6DP74.js", "/build/_shared/chunk-JQPK4TUT.js", "/build/_shared/chunk-VY6HUKKV.js", "/build/_shared/chunk-WMEDGZK3.js", "/build/_shared/chunk-CZJSYN24.js", "/build/_shared/chunk-6EHMN46O.js", "/build/_shared/chunk-LXZXBQZV.js", "/build/_shared/chunk-SABBA6BV.js", "/build/_shared/chunk-UJ733BH3.js", "/build/_shared/chunk-JSKQS36X.js", "/build/_shared/chunk-5ZSZYPIR.js", "/build/_shared/chunk-P7LUHIR2.js", "/build/_shared/chunk-YAO34MZD.js", "/build/_shared/chunk-FPBXUEAB.js", "/build/_shared/chunk-UJTP3FNR.js", "/build/_shared/chunk-HVT7Q67Y.js", "/build/_shared/chunk-P5H6OIMQ.js", "/build/_shared/chunk-ENZQUQEF.js", "/build/_shared/chunk-GU6FLLNM.js", "/build/_shared/chunk-PO6BHJYP.js", "/build/_shared/chunk-C5BAUKJP.js", "/build/_shared/chunk-O4JGGWBW.js", "/build/_shared/chunk-4W3UJMVG.js", "/build/_shared/chunk-N7HYXASU.js", "/build/_shared/chunk-OTETDIJ7.js", "/build/_shared/chunk-BFD4LQAN.js", "/build/_shared/chunk-G5UMZQ7K.js", "/build/_shared/chunk-VM33AQWJ.js", "/build/_shared/chunk-PJTX37ZS.js", "/build/_shared/chunk-MBETASJ4.js", "/build/_shared/chunk-ND4I7OIU.js", "/build/_shared/chunk-EN66W67V.js", "/build/_shared/chunk-UXYRYNGO.js", "/build/_shared/chunk-GMNLOHUO.js", "/build/_shared/chunk-6KIAIFNQ.js", "/build/_shared/chunk-O63XEMGV.js", "/build/_shared/chunk-SOAHDGY2.js", "/build/_shared/chunk-PSBNHUBL.js", "/build/_shared/chunk-JYU3P4IH.js", "/build/_shared/chunk-WIBOSL4J.js", "/build/_shared/chunk-RZH3ID57.js", "/build/_shared/chunk-ZSEOYX2K.js", "/build/_shared/chunk-ZXPWVWRZ.js", "/build/_shared/chunk-XREYBCSE.js", "/build/_shared/chunk-KDZPMHIO.js", "/build/_shared/chunk-KF7ANJN5.js", "/build/_shared/chunk-KL73TLON.js", "/build/_shared/chunk-UMXMOVNY.js", "/build/_shared/chunk-LHIGZZH7.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/posts/index": { "id": "routes/posts/index", "parentId": "root", "path": "posts", "index": true, "caseSensitive": void 0, "module": "/build/routes/posts/index-W5JUXECW.js", "imports": ["/build/_shared/chunk-CGOFX57S.js", "/build/_shared/chunk-KST6MIJM.js", "/build/_shared/chunk-W4DDCGJR.js", "/build/_shared/chunk-DL5MXO3V.js", "/build/_shared/chunk-63ZETLZ5.js", "/build/_shared/chunk-WKZUMOLK.js", "/build/_shared/chunk-4JMUBB5D.js", "/build/_shared/chunk-YAHOO7HF.js", "/build/_shared/chunk-3NWSROZK.js", "/build/_shared/chunk-YXYLHWEE.js", "/build/_shared/chunk-W5XEF3HT.js", "/build/_shared/chunk-4L34RSK4.js", "/build/_shared/chunk-BXYVCON7.js", "/build/_shared/chunk-PLY2CTKC.js", "/build/_shared/chunk-PGRJMBPO.js", "/build/_shared/chunk-FUQK6TIK.js", "/build/_shared/chunk-BFJOWWEP.js", "/build/_shared/chunk-HMWCXQ3V.js", "/build/_shared/chunk-NAPXDXXB.js", "/build/_shared/chunk-CUPBCDN3.js", "/build/_shared/chunk-PV6GHHUB.js", "/build/_shared/chunk-T2MHQ3MI.js", "/build/_shared/chunk-3GJM5HW2.js", "/build/_shared/chunk-LHH3YA2K.js", "/build/_shared/chunk-YPP22SGO.js", "/build/_shared/chunk-JSTBMPPO.js", "/build/_shared/chunk-6TIX52WA.js", "/build/_shared/chunk-76ZEK5O2.js", "/build/_shared/chunk-EXICM756.js", "/build/_shared/chunk-6R2LS7SF.js", "/build/_shared/chunk-3RLQ6WQG.js", "/build/_shared/chunk-Y3HSXWYU.js", "/build/_shared/chunk-FEULJQMS.js", "/build/_shared/chunk-ZESSP3YA.js", "/build/_shared/chunk-LF4PESBU.js", "/build/_shared/chunk-AZWR6XEB.js", "/build/_shared/chunk-HXWFRX2G.js", "/build/_shared/chunk-OWNBK76N.js", "/build/_shared/chunk-CXEKE2B6.js", "/build/_shared/chunk-D3DMFONL.js", "/build/_shared/chunk-CMD6ED26.js", "/build/_shared/chunk-B5GCQKIT.js", "/build/_shared/chunk-FERKE32K.js", "/build/_shared/chunk-RD2LXSZC.js", "/build/_shared/chunk-WYL7LVL7.js", "/build/_shared/chunk-TIIWKSTR.js", "/build/_shared/chunk-VUSNIGOL.js", "/build/_shared/chunk-HGKQPUE6.js", "/build/_shared/chunk-P2XARRBX.js", "/build/_shared/chunk-5CEPTFYF.js", "/build/_shared/chunk-46UFQLZG.js", "/build/_shared/chunk-HWOOHABY.js", "/build/_shared/chunk-GXFPP5KH.js", "/build/_shared/chunk-BD6UHRFJ.js", "/build/_shared/chunk-LZHAU4DX.js", "/build/_shared/chunk-PXR7MEZV.js", "/build/_shared/chunk-RCZ4BMLZ.js", "/build/_shared/chunk-BMBOZF77.js", "/build/_shared/chunk-BTQCGS27.js", "/build/_shared/chunk-NMLWH2Q4.js", "/build/_shared/chunk-V54HEZ2D.js", "/build/_shared/chunk-ZJ2LEFOZ.js", "/build/_shared/chunk-U2OIPWYS.js", "/build/_shared/chunk-CXAVSQ3C.js", "/build/_shared/chunk-2PU4CCMF.js", "/build/_shared/chunk-3LGOVRRN.js", "/build/_shared/chunk-RPOH2DQ6.js", "/build/_shared/chunk-KENR2DMN.js", "/build/_shared/chunk-O3T5Z33Z.js", "/build/_shared/chunk-27SN2OUO.js", "/build/_shared/chunk-NKPQ3BIR.js", "/build/_shared/chunk-J6FYO5NY.js", "/build/_shared/chunk-Q4JVCCWS.js", "/build/_shared/chunk-UV32FUWD.js", "/build/_shared/chunk-DMVYPAU4.js", "/build/_shared/chunk-5ASTUBBO.js", "/build/_shared/chunk-F4PO4C4K.js", "/build/_shared/chunk-LJMPLKQD.js", "/build/_shared/chunk-CXCXAOHJ.js", "/build/_shared/chunk-M5NX5S6W.js", "/build/_shared/chunk-HIBU6QJM.js", "/build/_shared/chunk-IDWOZEF3.js", "/build/_shared/chunk-AJNDHUW4.js", "/build/_shared/chunk-AJYJML3X.js", "/build/_shared/chunk-SIJCQEOC.js", "/build/_shared/chunk-H4B2PSO4.js", "/build/_shared/chunk-I52E5XWW.js", "/build/_shared/chunk-CW24WMCT.js", "/build/_shared/chunk-OPGMNQ5H.js", "/build/_shared/chunk-FTF37TBS.js", "/build/_shared/chunk-U7IN5SFG.js", "/build/_shared/chunk-KLJZX4QP.js", "/build/_shared/chunk-WK4OC4UG.js", "/build/_shared/chunk-N5HILVIS.js", "/build/_shared/chunk-2XG4N3UV.js", "/build/_shared/chunk-6AP2JSMP.js", "/build/_shared/chunk-RJKTSEO2.js", "/build/_shared/chunk-2BPQMW6Y.js", "/build/_shared/chunk-S2RPQISY.js", "/build/_shared/chunk-MVOYF363.js", "/build/_shared/chunk-DAA7MYCU.js", "/build/_shared/chunk-JRVAR26H.js", "/build/_shared/chunk-53KHJ63A.js", "/build/_shared/chunk-XI35STE5.js", "/build/_shared/chunk-PC3RIDGW.js", "/build/_shared/chunk-SRDJECLQ.js", "/build/_shared/chunk-NP3JXNG4.js", "/build/_shared/chunk-U45PUTZS.js", "/build/_shared/chunk-ZDZ3XLG2.js", "/build/_shared/chunk-TDSQ3U63.js", "/build/_shared/chunk-4KJ6JEBM.js", "/build/_shared/chunk-5FRRE5MW.js", "/build/_shared/chunk-QMNTG3XX.js", "/build/_shared/chunk-L2AYDJAL.js", "/build/_shared/chunk-PRY45XQV.js", "/build/_shared/chunk-E2PO37LI.js", "/build/_shared/chunk-2MSK5GNM.js", "/build/_shared/chunk-LR47OGWQ.js", "/build/_shared/chunk-LB4VWKA7.js", "/build/_shared/chunk-O3OUWPSZ.js", "/build/_shared/chunk-GJHNEYGV.js", "/build/_shared/chunk-ZDPGWYTL.js", "/build/_shared/chunk-KQ3Z5OWL.js", "/build/_shared/chunk-2P2OKU7O.js", "/build/_shared/chunk-3PZFG7DF.js", "/build/_shared/chunk-GWHLWWBY.js", "/build/_shared/chunk-DTFFTUNR.js", "/build/_shared/chunk-L6TSM7J6.js", "/build/_shared/chunk-M4RJFZHX.js", "/build/_shared/chunk-UDGG76DC.js", "/build/_shared/chunk-2JJJTZDR.js", "/build/_shared/chunk-U76YJQAZ.js", "/build/_shared/chunk-Y5ENMNAX.js", "/build/_shared/chunk-KVORQRJU.js", "/build/_shared/chunk-XG6GLIGK.js", "/build/_shared/chunk-U4YIEEIV.js", "/build/_shared/chunk-OUNSXQ7E.js", "/build/_shared/chunk-RFHFVMUS.js", "/build/_shared/chunk-5LXDWMES.js", "/build/_shared/chunk-QN6EHWVC.js", "/build/_shared/chunk-C6OMSJ5L.js", "/build/_shared/chunk-34BZZNJP.js", "/build/_shared/chunk-G6OIJ7I2.js", "/build/_shared/chunk-UEPORS5S.js", "/build/_shared/chunk-4FRF2GZF.js", "/build/_shared/chunk-EGE2V5B2.js", "/build/_shared/chunk-6RYJBKGS.js", "/build/_shared/chunk-AW4QDL7Y.js", "/build/_shared/chunk-5SM5RQE3.js", "/build/_shared/chunk-FUXOI5RD.js", "/build/_shared/chunk-RB7D7HOC.js", "/build/_shared/chunk-3AGPOOZF.js", "/build/_shared/chunk-WIUAJYFV.js", "/build/_shared/chunk-3AWCLSBI.js", "/build/_shared/chunk-5YPCHH2H.js", "/build/_shared/chunk-I6PO4VJZ.js", "/build/_shared/chunk-3ANZMUJ2.js", "/build/_shared/chunk-23C67NMC.js", "/build/_shared/chunk-VTSUI2WU.js", "/build/_shared/chunk-QPJXMBOB.js", "/build/_shared/chunk-DUFAX7XN.js", "/build/_shared/chunk-HV5Z5WHV.js", "/build/_shared/chunk-PGW2Y3FO.js", "/build/_shared/chunk-IUDPHVFH.js", "/build/_shared/chunk-SU5334PU.js", "/build/_shared/chunk-4ZTMDUF2.js", "/build/_shared/chunk-EAN4RCJC.js", "/build/_shared/chunk-CL2WYOBR.js", "/build/_shared/chunk-I5X4JFGF.js", "/build/_shared/chunk-PPSAMUSJ.js", "/build/_shared/chunk-NYC5AAMB.js", "/build/_shared/chunk-S4R6HXVB.js", "/build/_shared/chunk-5T2LLYUG.js", "/build/_shared/chunk-I3BXZ7JB.js", "/build/_shared/chunk-G5PMXPIW.js", "/build/_shared/chunk-INZ6MKCT.js", "/build/_shared/chunk-IZNM3W5J.js", "/build/_shared/chunk-AYZNBRMS.js", "/build/_shared/chunk-JZOU5ZFS.js", "/build/_shared/chunk-WTDXZA2H.js", "/build/_shared/chunk-BIXJHJHR.js", "/build/_shared/chunk-3ZIV3INX.js", "/build/_shared/chunk-HNXUJN5Q.js", "/build/_shared/chunk-A66EDVXQ.js", "/build/_shared/chunk-QNGMIGJV.js", "/build/_shared/chunk-X57OH7WJ.js", "/build/_shared/chunk-RSF52JGP.js", "/build/_shared/chunk-QXDTHOFD.js", "/build/_shared/chunk-5M36PEOH.js", "/build/_shared/chunk-2KTBYAZB.js", "/build/_shared/chunk-HE5C6AAG.js", "/build/_shared/chunk-DXSSUCOE.js", "/build/_shared/chunk-U6HWBIYQ.js", "/build/_shared/chunk-FSYJURGQ.js", "/build/_shared/chunk-AUIAIKQ6.js", "/build/_shared/chunk-X4T7ZYMZ.js", "/build/_shared/chunk-SYQVCINH.js", "/build/_shared/chunk-3PWBXWMT.js", "/build/_shared/chunk-2ZWWB2E2.js", "/build/_shared/chunk-Q5SGXVAF.js", "/build/_shared/chunk-B3A5LPRI.js", "/build/_shared/chunk-3FOVSXJU.js", "/build/_shared/chunk-V45E3LON.js", "/build/_shared/chunk-VKRKIP5V.js", "/build/_shared/chunk-UQJI5LJU.js", "/build/_shared/chunk-SSJTWOIO.js", "/build/_shared/chunk-AVUMP6RR.js", "/build/_shared/chunk-NSIIO5IM.js", "/build/_shared/chunk-TCME4ZFS.js", "/build/_shared/chunk-TYDJZHKF.js", "/build/_shared/chunk-DWQGT7ZT.js", "/build/_shared/chunk-PXVHN5AK.js", "/build/_shared/chunk-GHUEFKPZ.js", "/build/_shared/chunk-GO2TEWUM.js", "/build/_shared/chunk-7ERIU4X2.js", "/build/_shared/chunk-VNPPVFM2.js", "/build/_shared/chunk-52QX7H6W.js", "/build/_shared/chunk-I26XTX7X.js", "/build/_shared/chunk-K743TFTY.js", "/build/_shared/chunk-PH7K77A2.js", "/build/_shared/chunk-AEFX3MAO.js", "/build/_shared/chunk-7CQLU5PY.js", "/build/_shared/chunk-B5422AI7.js", "/build/_shared/chunk-O44DMM3E.js", "/build/_shared/chunk-ZJES2G5U.js", "/build/_shared/chunk-65XF4CXI.js", "/build/_shared/chunk-FOMIFTPA.js", "/build/_shared/chunk-DH4DHO6N.js", "/build/_shared/chunk-NQXO32G3.js", "/build/_shared/chunk-VEWPAZEI.js", "/build/_shared/chunk-GRSAA3J7.js", "/build/_shared/chunk-TUX6DP74.js", "/build/_shared/chunk-JQPK4TUT.js", "/build/_shared/chunk-VY6HUKKV.js", "/build/_shared/chunk-WMEDGZK3.js", "/build/_shared/chunk-CZJSYN24.js", "/build/_shared/chunk-6EHMN46O.js", "/build/_shared/chunk-LXZXBQZV.js", "/build/_shared/chunk-SABBA6BV.js", "/build/_shared/chunk-UJ733BH3.js", "/build/_shared/chunk-JSKQS36X.js", "/build/_shared/chunk-5ZSZYPIR.js", "/build/_shared/chunk-P7LUHIR2.js", "/build/_shared/chunk-YAO34MZD.js", "/build/_shared/chunk-FPBXUEAB.js", "/build/_shared/chunk-UJTP3FNR.js", "/build/_shared/chunk-HVT7Q67Y.js", "/build/_shared/chunk-P5H6OIMQ.js", "/build/_shared/chunk-ENZQUQEF.js", "/build/_shared/chunk-GU6FLLNM.js", "/build/_shared/chunk-PO6BHJYP.js", "/build/_shared/chunk-C5BAUKJP.js", "/build/_shared/chunk-O4JGGWBW.js", "/build/_shared/chunk-4W3UJMVG.js", "/build/_shared/chunk-N7HYXASU.js", "/build/_shared/chunk-OTETDIJ7.js", "/build/_shared/chunk-BFD4LQAN.js", "/build/_shared/chunk-G5UMZQ7K.js", "/build/_shared/chunk-VM33AQWJ.js", "/build/_shared/chunk-PJTX37ZS.js", "/build/_shared/chunk-MBETASJ4.js", "/build/_shared/chunk-ND4I7OIU.js", "/build/_shared/chunk-EN66W67V.js", "/build/_shared/chunk-UXYRYNGO.js", "/build/_shared/chunk-GMNLOHUO.js", "/build/_shared/chunk-6KIAIFNQ.js", "/build/_shared/chunk-O63XEMGV.js", "/build/_shared/chunk-SOAHDGY2.js", "/build/_shared/chunk-PSBNHUBL.js", "/build/_shared/chunk-JYU3P4IH.js", "/build/_shared/chunk-WIBOSL4J.js", "/build/_shared/chunk-RZH3ID57.js", "/build/_shared/chunk-ZSEOYX2K.js", "/build/_shared/chunk-ZXPWVWRZ.js", "/build/_shared/chunk-XREYBCSE.js", "/build/_shared/chunk-KDZPMHIO.js", "/build/_shared/chunk-KF7ANJN5.js", "/build/_shared/chunk-KL73TLON.js", "/build/_shared/chunk-UMXMOVNY.js", "/build/_shared/chunk-LHIGZZH7.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-3BAB575D.js" };

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
 * @remix-run/node v1.3.3
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIudHN4IiwgIi4uL2FwcC9saWIvY3JlYXRlLWVtb3Rpb24tY2FjaGUudHMiLCAiLi4vYXBwL2NvbXBvbmVudHMvTGF5b3V0L3RoZW1lLnRzIiwgInJvdXRlOi9Vc2Vycy9haG1hZC9EZXYvcGVyc29uYWwvcmVtaXgvYWhhbmRhbmkuY29tL2FwcC9yb290LnRzeCIsICIuLi9hcHAvbGliL2NsaWVudC1zdHlsZS1jb250ZXh0LnRzIiwgIi4uL2FwcC9jb21wb25lbnRzL0xheW91dC9pbmRleC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvTG9nby9pbmRleC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvTGF5b3V0L2hvb2tzL3VzZS1sYXlvdXQtY29udGV4dC50cyIsICIuLi9hcHAvY29tcG9uZW50cy9MYXlvdXQvY29udGV4dC50cyIsICIuLi9hcHAvY29tcG9uZW50cy9MYXlvdXQvY29tcG9uZW50cy9MYXlvdXRQcm92aWRlci9pbmRleC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvTWVudS9pbmRleC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvTWVudS9jb21wb25lbnRzL05hdmlnYXRpb24vaW5kZXgudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL01lbnUvY29tcG9uZW50cy9OYXZpZ2F0aW9uL2NvbXBvbmVudHMvTmF2TGluay9pbmRleC50c3giLCAicm91dGU6L1VzZXJzL2FobWFkL0Rldi9wZXJzb25hbC9yZW1peC9haGFuZGFuaS5jb20vYXBwL3JvdXRlcy9jb250YWN0L2luZGV4LnRzeCIsICJyb3V0ZTovVXNlcnMvYWhtYWQvRGV2L3BlcnNvbmFsL3JlbWl4L2FoYW5kYW5pLmNvbS9hcHAvcm91dGVzL2Fib3V0L2luZGV4LnRzeCIsICJyb3V0ZTovVXNlcnMvYWhtYWQvRGV2L3BlcnNvbmFsL3JlbWl4L2FoYW5kYW5pLmNvbS9hcHAvcm91dGVzL3Bvc3RzLyRzbHVnLnRzeCIsICIuLi9hcHAvYXBpL3Bvc3RzL2dldFBvc3QudHMiLCAiLi4vYXBwL2xpYi9ncmFwaHFsLnRzeCIsICIuLi9hcHAvYXBpL3F1ZXJpZXMudHMiLCAiLi4vYXBwL2FwaS9jb21tZW50cy9jcmVhdGVDb21tZW50LnRzIiwgIi4uL2FwcC9jb21wb25lbnRzL0NvbnRlbnQvY29tcG9uZW50cy9UaXRsZS9pbmRleC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvQ29udGVudC9jb21wb25lbnRzL0NvbW1lbnRzL2luZGV4LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9Db250ZW50L2NvbXBvbmVudHMvQ29tbWVudHMvY29tcG9uZW50cy9Db21tZW50L2luZGV4LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9EYXRlL2luZGV4LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9BdmF0YXIvaW5kZXgudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0NvbnRlbnQvY29tcG9uZW50cy9Cb2R5L2luZGV4LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9Db250ZW50L2NvbXBvbmVudHMvQm9keS9jb21wb25lbnRzL0NvZGVCbG9jay9pbmRleC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvQ29udGVudC9jb21wb25lbnRzL0JvZHkvY29tcG9uZW50cy9CbG9ja3F1b3RlL2luZGV4LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9Db250ZW50L2NvbXBvbmVudHMvQm9keS9jb21wb25lbnRzL0ltYWdlL2luZGV4LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9Db250ZW50L2NvbXBvbmVudHMvQm9keS9jb21wb25lbnRzL01lZGlhL2luZGV4LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9Db250ZW50L2NvbXBvbmVudHMvQm9keS9jb21wb25lbnRzL0hlYWRpbmcvaW5kZXgudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0NvbnRlbnQvY29tcG9uZW50cy9Db21tZW50cy9jb21wb25lbnRzL0NyZWF0ZUNvbW1lbnQvaW5kZXgudHN4IiwgInJvdXRlOi9Vc2Vycy9haG1hZC9EZXYvcGVyc29uYWwvcmVtaXgvYWhhbmRhbmkuY29tL2FwcC9yb3V0ZXMvcG9zdHMvaW5kZXgudHN4IiwgIi4uL2FwcC9hcGkvcG9zdHMvZ2V0UG9zdHMudHMiLCAiLi4vYXBwL2NvbXBvbmVudHMvQ29udGVudC9jb21wb25lbnRzL0V4Y2VycHQvaW5kZXgudHN4IiwgInJvdXRlOi9Vc2Vycy9haG1hZC9EZXYvcGVyc29uYWwvcmVtaXgvYWhhbmRhbmkuY29tL2FwcC9yb3V0ZXMvaW5kZXgudHN4IiwgInNlcnZlci1hc3NldHMtbWFuaWZlc3Q6QHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMy4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMy4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4zLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcblxuIiwgImV4cG9ydCAqIGZyb20gXCJAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGRcIjsiLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL1VzZXJzL2FobWFkL0Rldi9wZXJzb25hbC9yZW1peC9haGFuZGFuaS5jb20vYXBwL2VudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL1VzZXJzL2FobWFkL0Rldi9wZXJzb25hbC9yZW1peC9haGFuZGFuaS5jb20vYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9Vc2Vycy9haG1hZC9EZXYvcGVyc29uYWwvcmVtaXgvYWhhbmRhbmkuY29tL2FwcC9yb3V0ZXMvY29udGFjdC9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiL1VzZXJzL2FobWFkL0Rldi9wZXJzb25hbC9yZW1peC9haGFuZGFuaS5jb20vYXBwL3JvdXRlcy9hYm91dC9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiL1VzZXJzL2FobWFkL0Rldi9wZXJzb25hbC9yZW1peC9haGFuZGFuaS5jb20vYXBwL3JvdXRlcy9wb3N0cy8kc2x1Zy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNCBmcm9tIFwiL1VzZXJzL2FobWFkL0Rldi9wZXJzb25hbC9yZW1peC9haGFuZGFuaS5jb20vYXBwL3JvdXRlcy9wb3N0cy9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNSBmcm9tIFwiL1VzZXJzL2FobWFkL0Rldi9wZXJzb25hbC9yZW1peC9haGFuZGFuaS5jb20vYXBwL3JvdXRlcy9pbmRleC50c3hcIjtcbiAgZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0XCI7XG4gIGV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuICBleHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICAgIFwicm9vdFwiOiB7XG4gICAgICBpZDogXCJyb290XCIsXG4gICAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgICAgcGF0aDogXCJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMFxuICAgIH0sXG4gIFwicm91dGVzL2NvbnRhY3QvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2NvbnRhY3QvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiY29udGFjdFwiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMVxuICAgIH0sXG4gIFwicm91dGVzL2Fib3V0L2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9hYm91dC9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJhYm91dFwiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMlxuICAgIH0sXG4gIFwicm91dGVzL3Bvc3RzLyRzbHVnXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9wb3N0cy8kc2x1Z1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJwb3N0cy86c2x1Z1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUzXG4gICAgfSxcbiAgXCJyb3V0ZXMvcG9zdHMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3Bvc3RzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInBvc3RzXCIsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU0XG4gICAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU1XG4gICAgfVxuICB9OyIsICJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJyZW1peFwiO1xuXG5pbXBvcnQgY3JlYXRlRW1vdGlvbkNhY2hlIGZyb20gXCIuL2xpYi9jcmVhdGUtZW1vdGlvbi1jYWNoZVwiO1xuaW1wb3J0IHRoZW1lIGZyb20gXCIuL2NvbXBvbmVudHMvTGF5b3V0L3RoZW1lXCI7XG5cbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tIFwiQG11aS9tYXRlcmlhbC9Dc3NCYXNlbGluZVwiO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gXCJAbXVpL21hdGVyaWFsL3N0eWxlc1wiO1xuaW1wb3J0IHsgQ2FjaGVQcm92aWRlciB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IGNyZWF0ZUVtb3Rpb25TZXJ2ZXIgZnJvbSBcIkBlbW90aW9uL3NlcnZlci9jcmVhdGUtaW5zdGFuY2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdDogUmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXG4gIHJlc3BvbnNlSGVhZGVyczogSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHRcbikge1xuICBjb25zdCBjYWNoZSA9IGNyZWF0ZUVtb3Rpb25DYWNoZSgpO1xuICBjb25zdCB7IGV4dHJhY3RDcml0aWNhbFRvQ2h1bmtzIH0gPSBjcmVhdGVFbW90aW9uU2VydmVyKGNhY2hlKTtcblxuICBjb25zdCBNdWlSZW1peFNlcnZlciA9ICgpID0+IChcbiAgICA8Q2FjaGVQcm92aWRlciB2YWx1ZT17Y2FjaGV9PlxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgey8qIENzc0Jhc2VsaW5lIGtpY2tzdGFydCBhbiBlbGVnYW50LCBjb25zaXN0ZW50LCBhbmQgc2ltcGxlIGJhc2VsaW5lIHRvIGJ1aWxkIHVwb24uICovfVxuICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cbiAgICAgICAgPFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICA8L0NhY2hlUHJvdmlkZXI+XG4gICk7XG5cbiAgLy8gUmVuZGVyIHRoZSBjb21wb25lbnQgdG8gYSBzdHJpbmcuXG4gIGNvbnN0IGh0bWwgPSByZW5kZXJUb1N0cmluZyg8TXVpUmVtaXhTZXJ2ZXIgLz4pO1xuXG4gIC8vIEdyYWIgdGhlIENTUyBmcm9tIGVtb3Rpb25cbiAgY29uc3QgeyBzdHlsZXMgfSA9IGV4dHJhY3RDcml0aWNhbFRvQ2h1bmtzKGh0bWwpO1xuXG4gIGxldCBzdHlsZXNIVE1MID0gXCJcIjtcblxuICBzdHlsZXMuZm9yRWFjaCgoeyBrZXksIGlkcywgY3NzIH0pID0+IHtcbiAgICBjb25zdCBlbW90aW9uS2V5ID0gYCR7a2V5fSAke2lkcy5qb2luKFwiIFwiKX1gO1xuICAgIGNvbnN0IG5ld1N0eWxlVGFnID0gYDxzdHlsZSBkYXRhLWVtb3Rpb249XCIke2Vtb3Rpb25LZXl9XCI+JHtjc3N9PC9zdHlsZT5gO1xuICAgIHN0eWxlc0hUTUwgPSBgJHtzdHlsZXNIVE1MfSR7bmV3U3R5bGVUYWd9YDtcbiAgfSk7XG5cbiAgLy8gQWRkIHRoZSBlbW90aW9uIHN0eWxlIHRhZ3MgYWZ0ZXIgdGhlIGluc2VydGlvbiBwb2ludCBtZXRhIHRhZ1xuICBjb25zdCBtYXJrdXAgPSBodG1sLnJlcGxhY2UoXG4gICAgLzxtZXRhKFxccykqbmFtZT1cImVtb3Rpb24taW5zZXJ0aW9uLXBvaW50XCIoXFxzKSpjb250ZW50PVwiZW1vdGlvbi1pbnNlcnRpb24tcG9pbnRcIihcXHMpKlxcLz4vLFxuICAgIGA8bWV0YSBuYW1lPVwiZW1vdGlvbi1pbnNlcnRpb24tcG9pbnRcIiBjb250ZW50PVwiZW1vdGlvbi1pbnNlcnRpb24tcG9pbnRcIi8+JHtzdHlsZXNIVE1MfWBcbiAgKTtcblxuICByZXNwb25zZUhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9odG1sXCIpO1xuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoYDwhRE9DVFlQRSBodG1sPiR7bWFya3VwfWAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gIH0pO1xufVxuIiwgImltcG9ydCBjcmVhdGVDYWNoZSBmcm9tIFwiQGVtb3Rpb24vY2FjaGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlRW1vdGlvbkNhY2hlKCkge1xuICByZXR1cm4gY3JlYXRlQ2FjaGUoeyBrZXk6IFwiY3NzXCIgfSk7XG59XG4iLCAiaW1wb3J0IHsgY3JlYXRlVGhlbWUgfSBmcm9tIFwiQG11aS9tYXRlcmlhbC9zdHlsZXNcIjtcbmltcG9ydCB7IHJlZCB9IGZyb20gXCJAbXVpL21hdGVyaWFsL2NvbG9yc1wiO1xuaW1wb3J0IEFwZXJjdVJlZ3VsYXJXb2ZmIGZyb20gXCJ+L3Jlc291cmNlcy9mb250cy9hcGVyY3VfcmVndWxhci13ZWJmb250LndvZmZcIjtcbmltcG9ydCBBcGVyY3VSZWd1bGFyV29mZjIgZnJvbSBcIn4vcmVzb3VyY2VzL2ZvbnRzL2FwZXJjdV9yZWd1bGFyLXdlYmZvbnQud29mZjJcIjtcbmltcG9ydCBBcGVyY3VCb2xkV29mZiBmcm9tIFwifi9yZXNvdXJjZXMvZm9udHMvYXBlcmN1X2JvbGQtd2ViZm9udC53b2ZmXCI7XG5pbXBvcnQgQXBlcmN1Qm9sZFdvZmYyIGZyb20gXCJ+L3Jlc291cmNlcy9mb250cy9hcGVyY3VfYm9sZC13ZWJmb250LndvZmYyXCI7XG5cbi8vIENyZWF0ZSBhIHRoZW1lIGluc3RhbmNlLlxuY29uc3QgdGhlbWUgPSBjcmVhdGVUaGVtZSh7XG4gIHR5cG9ncmFwaHk6IHtcbiAgICBmb250RmFtaWx5OiBcImFwZXJjdSwgQXJpYWxcIixcbiAgICBib2R5MToge1xuICAgICAgZm9udFNpemU6IFwiMS4wNjI1cmVtXCIsXG4gICAgICBsaW5lSGVpZ2h0OiBcIjEuN1wiLFxuICAgIH0sXG4gIH0sXG4gIGNvbXBvbmVudHM6IHtcbiAgICBNdWlDc3NCYXNlbGluZToge1xuICAgICAgc3R5bGVPdmVycmlkZXM6IGBcbiAgICAgICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnYXBlcmN1JztcbiAgICAgICAgICAgICAgICBzcmM6IHVybCgke0FwZXJjdVJlZ3VsYXJXb2ZmMn0pIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgICAgICAgICAgICAgdXJsKCR7QXBlcmN1UmVndWxhcldvZmZ9KSBmb3JtYXQoJ3dvZmYnKTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbGlnaHQ7XG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsOyBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdhcGVyY3UnO1xuICAgICAgICAgICAgICBzcmM6IHVybCgke0FwZXJjdUJvbGRXb2ZmMn0pIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgICAgICAgICAgICB1cmwoJHtBcGVyY3VCb2xkV29mZn0pIGZvcm1hdCgnd29mZicpO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgZm9udC1zdHlsZTogYm9sZDtcbiAgICAgICAgICBcbiAgICAgICAgICB9XG4gICAgICAgICAgYCxcbiAgICB9LFxuICB9LFxuICBwYWxldHRlOiB7XG4gICAgcHJpbWFyeToge1xuICAgICAgbWFpbjogXCIjNTU2Y2Q2XCIsXG4gICAgfSxcbiAgICBzZWNvbmRhcnk6IHtcbiAgICAgIG1haW46IFwiI2ZmMDA2N1wiLFxuICAgIH0sXG4gICAgZXJyb3I6IHtcbiAgICAgIG1haW46IHJlZC5BNDAwLFxuICAgIH0sXG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgdGhlbWU7XG4iLCAiaW1wb3J0IHsgUmVhY3ROb2RlLCB1c2VDb250ZXh0LCB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBMaW5rcyxcbiAgTGl2ZVJlbG9hZCxcbiAgTWV0YSxcbiAgT3V0bGV0LFxuICBTY3JpcHRzLFxuICBTY3JvbGxSZXN0b3JhdGlvbixcbiAgdXNlQ2F0Y2gsXG59IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUsIHVzZUxvY2F0aW9uIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IFF1ZXJ5UGFyYW1Qcm92aWRlciB9IGZyb20gXCJ1c2UtcXVlcnktcGFyYW1zXCI7XG5pbXBvcnQgeyB3aXRoRW1vdGlvbkNhY2hlIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XG5pbXBvcnQgeyB1bnN0YWJsZV91c2VFbmhhbmNlZEVmZmVjdCBhcyB1c2VFbmhhbmNlZEVmZmVjdCB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgQ2xpZW50U3R5bGVDb250ZXh0IGZyb20gXCIuL2xpYi9jbGllbnQtc3R5bGUtY29udGV4dFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IHRoZW1lIGZyb20gXCIuL2NvbXBvbmVudHMvTGF5b3V0L3RoZW1lXCI7XG5cbmludGVyZmFjZSBEb2N1bWVudFByb3BzIHtcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcbiAgdGl0bGU/OiBzdHJpbmc7XG59XG5cbmNvbnN0IERvY3VtZW50ID0gd2l0aEVtb3Rpb25DYWNoZShcbiAgKHsgY2hpbGRyZW4sIHRpdGxlIH06IERvY3VtZW50UHJvcHMsIGVtb3Rpb25DYWNoZSkgPT4ge1xuICAgIGNvbnN0IGNsaWVudFN0eWxlRGF0YSA9IHVzZUNvbnRleHQoQ2xpZW50U3R5bGVDb250ZXh0KTtcblxuICAgIC8vIE9ubHkgZXhlY3V0ZWQgb24gY2xpZW50XG4gICAgdXNlRW5oYW5jZWRFZmZlY3QoKCkgPT4ge1xuICAgICAgLy8gcmUtbGluayBzaGVldCBjb250YWluZXJcbiAgICAgIGVtb3Rpb25DYWNoZS5zaGVldC5jb250YWluZXIgPSBkb2N1bWVudC5oZWFkO1xuICAgICAgLy8gcmUtaW5qZWN0IHRhZ3NcbiAgICAgIGNvbnN0IHRhZ3MgPSBlbW90aW9uQ2FjaGUuc2hlZXQudGFncztcbiAgICAgIGVtb3Rpb25DYWNoZS5zaGVldC5mbHVzaCgpO1xuICAgICAgdGFncy5mb3JFYWNoKCh0YWcpID0+IHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlXG4gICAgICAgIChlbW90aW9uQ2FjaGUuc2hlZXQgYXMgYW55KS5faW5zZXJ0VGFnKHRhZyk7XG4gICAgICB9KTtcbiAgICAgIC8vIHJlc2V0IGNhY2hlIHRvIHJlYXBwbHkgZ2xvYmFsIHN0eWxlc1xuICAgICAgY2xpZW50U3R5bGVEYXRhLnJlc2V0KCk7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxodG1sIGxhbmc9XCJlblwiPlxuICAgICAgICA8aGVhZD5cbiAgICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwidGhlbWUtY29sb3JcIiBjb250ZW50PXt0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbn0gLz5cbiAgICAgICAgICB7dGl0bGUgPyA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+IDogbnVsbH1cbiAgICAgICAgICA8TWV0YSAvPlxuICAgICAgICAgIDxMaW5rcyAvPlxuICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICBuYW1lPVwiZW1vdGlvbi1pbnNlcnRpb24tcG9pbnRcIlxuICAgICAgICAgICAgY29udGVudD1cImVtb3Rpb24taW5zZXJ0aW9uLXBvaW50XCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2hlYWQ+XG4gICAgICAgIDxib2R5PlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cbiAgICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgICAgIHtwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiICYmIDxMaXZlUmVsb2FkIC8+fVxuICAgICAgICA8L2JvZHk+XG4gICAgICA8L2h0bWw+XG4gICAgKTtcbiAgfVxuKTtcblxuY29uc3QgUm91dGVBZGFwdGVyOiBSZWFjdC5GQyA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XG5cbiAgY29uc3QgYWRhcHRlZEhpc3RvcnkgPSB1c2VNZW1vKFxuICAgICgpID0+ICh7XG4gICAgICByZXBsYWNlKGxvY2F0aW9uOiBhbnkpIHtcbiAgICAgICAgbmF2aWdhdGUobG9jYXRpb24sIHsgcmVwbGFjZTogdHJ1ZSwgc3RhdGU6IGxvY2F0aW9uLnN0YXRlIH0pO1xuICAgICAgfSxcbiAgICAgIHB1c2gobG9jYXRpb246IGFueSkge1xuICAgICAgICBuYXZpZ2F0ZShsb2NhdGlvbiwgeyByZXBsYWNlOiBmYWxzZSwgc3RhdGU6IGxvY2F0aW9uLnN0YXRlIH0pO1xuICAgICAgfSxcbiAgICB9KSxcbiAgICBbbmF2aWdhdGVdXG4gICk7XG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wYmVzaGFpL3VzZS1xdWVyeS1wYXJhbXMvaXNzdWVzLzE5NlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4gIC8vIEB0cy1pZ25vcmVcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtcmV0dXJuXG4gIHJldHVybiBjaGlsZHJlbih7IGhpc3Rvcnk6IGFkYXB0ZWRIaXN0b3J5LCBsb2NhdGlvbiB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8RG9jdW1lbnQ+XG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8UXVlcnlQYXJhbVByb3ZpZGVyIFJlYWN0Um91dGVyUm91dGU9e1JvdXRlQWRhcHRlcn0+XG4gICAgICAgICAgPE91dGxldCAvPlxuICAgICAgICA8L1F1ZXJ5UGFyYW1Qcm92aWRlcj5cbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvRG9jdW1lbnQ+XG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBFcnJvckJvdW5kYXJ5KHsgZXJyb3IgfTogeyBlcnJvcjogRXJyb3IgfSkge1xuICBjb25zb2xlLmxvZyhlcnJvcik7XG4gIHJldHVybiAoXG4gICAgPERvY3VtZW50IHRpdGxlPVwiRXJyb3IhXCI+XG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMT5UaGVyZSB3YXMgYW4gZXJyb3I8L2gxPlxuICAgICAgICAgIDxwPntlcnJvci5tZXNzYWdlfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xheW91dD5cbiAgICA8L0RvY3VtZW50PlxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQ2F0Y2hCb3VuZGFyeSgpIHtcbiAgY29uc3QgY2F1Z2h0ID0gdXNlQ2F0Y2goKTtcbiAgbGV0IG1lc3NhZ2U7XG4gIHN3aXRjaCAoY2F1Z2h0LnN0YXR1cykge1xuICAgIGNhc2UgNDAxOlxuICAgICAgbWVzc2FnZSA9IChcbiAgICAgICAgPHA+XG4gICAgICAgICAgT29wcyEgTG9va3MgbGlrZSB5b3UgdHJpZWQgdG8gdmlzaXQgYSBwYWdlIHRoYXQgeW91IGRvIG5vdCBoYXZlIGFjY2Vzc1xuICAgICAgICAgIHRvLlxuICAgICAgICA8L3A+XG4gICAgICApO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA0MDQ6XG4gICAgICBtZXNzYWdlID0gKFxuICAgICAgICA8cD5Pb3BzISBMb29rcyBsaWtlIHlvdSB0cmllZCB0byB2aXNpdCBhIHBhZ2UgdGhhdCBkb2VzIG5vdCBleGlzdC48L3A+XG4gICAgICApO1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKGNhdWdodC5kYXRhIHx8IGNhdWdodC5zdGF0dXNUZXh0KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPERvY3VtZW50IHRpdGxlPXtgJHtjYXVnaHQuc3RhdHVzfSAke2NhdWdodC5zdGF0dXNUZXh0fWB9PlxuICAgICAgPExheW91dD5cbiAgICAgICAgPGgxPlxuICAgICAgICAgIHtjYXVnaHQuc3RhdHVzfToge2NhdWdodC5zdGF0dXNUZXh0fVxuICAgICAgICA8L2gxPlxuICAgICAgICB7bWVzc2FnZX1cbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvRG9jdW1lbnQ+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIENsaWVudFN0eWxlQ29udGV4dERhdGEge1xuICByZXNldDogKCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29udGV4dDxDbGllbnRTdHlsZUNvbnRleHREYXRhPih7XG4gIHJlc2V0OiAoKSA9PiB7fSxcbn0pO1xuIiwgImltcG9ydCB7IFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlVHJhbnNpdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuXG5pbXBvcnQgTG9nbyBmcm9tIFwifi9jb21wb25lbnRzL0xvZ29cIjtcbmltcG9ydCBMYXlvdXRQcm92aWRlciBmcm9tIFwifi9jb21wb25lbnRzL0xheW91dC9jb21wb25lbnRzL0xheW91dFByb3ZpZGVyXCI7XG5pbXBvcnQgeyBDb250YWluZXIsIEFwcEJhciwgVG9vbGJhciwgQm94LCBMaW5lYXJQcm9ncmVzcyB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgTWVudSBmcm9tIFwifi9jb21wb25lbnRzL01lbnVcIjtcbmNvbnN0IE1FTlVfV0lEVEggPSA4MDtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCh7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0Tm9kZSB9KSB7XG4gIGNvbnN0IHsgbG9jYXRpb24sIHN0YXRlLCBzdWJtaXNzaW9uLCB0eXBlIH0gPSB1c2VUcmFuc2l0aW9uKCk7XG5cbiAgY29uc3QgaXNMb2FkaW5nID0gc3RhdGUgPT09IFwibG9hZGluZ1wiO1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXRQcm92aWRlciBkZWZhdWx0TGF5b3V0U3RhdGU9e3sgaXNNZW51T3BlbjogZmFsc2UgfX0+XG4gICAgICA8Qm94PlxuICAgICAgICA8TWVudSB3aWR0aD17TUVOVV9XSURUSH0gLz5cbiAgICAgICAgPEJveCBzeD17eyB3aWR0aDogYGNhbGMoMTAwdncgLSAke01FTlVfV0lEVEh9cHgpYCB9fT5cbiAgICAgICAgICA8QXBwQmFyIHBvc2l0aW9uPVwic3RhdGljXCIgY29sb3I9XCJ0cmFuc3BhcmVudFwiIGVsZXZhdGlvbj17MH0+XG4gICAgICAgICAgICA8VG9vbGJhclxuICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgIGZsZXhXcmFwOiBcIndyYXBcIixcbiAgICAgICAgICAgICAgICBweTogMixcbiAgICAgICAgICAgICAgICBweDogNixcbiAgICAgICAgICAgICAgICBib3JkZXJCb3R0b206ICh0aGVtZSkgPT4gYDFweCBzb2xpZCAke3RoZW1lLnBhbGV0dGUuZGl2aWRlcn1gLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Qm94IHN4PXt7IHA6IDIsIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLCBmbGV4R3JvdzogMSB9fT5cbiAgICAgICAgICAgICAgICA8TG9nbyAvPlxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDwvVG9vbGJhcj5cbiAgICAgICAgICA8L0FwcEJhcj5cbiAgICAgICAgICB7aXNMb2FkaW5nICYmIChcbiAgICAgICAgICAgIDxCb3ggc3g9e3sgaGVpZ2h0OiA1LCBtYjogXCItNXB4XCIgfX0+XG4gICAgICAgICAgICAgIDxMaW5lYXJQcm9ncmVzcyBjb2xvcj1cImluaGVyaXRcIiAvPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJtZFwiPlxuICAgICAgICAgICAgPEJveCBzeD17eyBteTogNCB9fT57Y2hpbGRyZW59PC9Cb3g+XG4gICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Cb3g+XG4gICAgPC9MYXlvdXRQcm92aWRlcj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBMaW5rIGFzIFJteExpbmsgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IFR5cG9ncmFwaHksIExpbmsgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHVzZUxheW91dCBmcm9tIFwifi9jb21wb25lbnRzL0xheW91dC9ob29rcy91c2UtbGF5b3V0LWNvbnRleHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9nbyh7IC4uLnJlc3QgfSkge1xuICBjb25zdCB7IGxheW91dFN0YXRlLCBzZXRMYXlvdXRTdGF0ZSB9ID0gdXNlTGF5b3V0KCk7XG4gIGNvbnN0IHsgaXNNZW51T3BlbiB9ID0gbGF5b3V0U3RhdGU7XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2xvc2VNZW51KCkge1xuICAgIGlmIChpc01lbnVPcGVuKVxuICAgICAgc2V0TGF5b3V0U3RhdGUoe1xuICAgICAgICAuLi5sYXlvdXRTdGF0ZSxcbiAgICAgICAgaXNNZW51T3BlbjogZmFsc2UsXG4gICAgICB9KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPExpbmtcbiAgICAgIHsuLi5yZXN0fVxuICAgICAgb25DbGljaz17aGFuZGxlQ2xvc2VNZW51fVxuICAgICAgY29tcG9uZW50PXtSbXhMaW5rfVxuICAgICAgdG89e1wiL1wifVxuICAgICAgY29sb3I9XCJ0ZXh0LnByaW1hcnlcIlxuICAgICAgc3g9e3tcbiAgICAgICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxuICAgICAgICAuLi5yZXN0Py5zeCxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPFR5cG9ncmFwaHkgc3g9e3sgZm9udFdlaWdodDogXCJib2xkXCIgfX0gdmFyaWFudD1cImg1XCI+XG4gICAgICAgIEFIQU5EQU5JLlxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPFR5cG9ncmFwaHkgc3g9e3sgZm9udFdlaWdodDogXCJsaWdodFwiIH19IHZhcmlhbnQ9XCJjYXB0aW9uXCI+XG4gICAgICAgIEFIQU1BRCBFU01BRUlMWkFERUggQUhBTkRBTklcbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICA8L0xpbms+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExheW91dENvbnRleHQsIHsgTGF5b3V0Q29udGV4dFByb3BzIH0gZnJvbSBcIn4vY29tcG9uZW50cy9MYXlvdXQvY29udGV4dFwiO1xuXG5mdW5jdGlvbiB1c2VMYXlvdXQoKTogTGF5b3V0Q29udGV4dFByb3BzIHtcbiAgY29uc3QgY29udGV4dFZhbHVlID0gdXNlQ29udGV4dChMYXlvdXRDb250ZXh0KSB8fCB7fTtcbiAgaWYgKCFjb250ZXh0VmFsdWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYHVzZUxheW91dCBtdXN0IGJlIHVzZWQgd2l0aGluIGEgTGF5b3V0UHJvdmlkZXJgKTtcbiAgfVxuICByZXR1cm4gY29udGV4dFZhbHVlO1xufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VMYXlvdXQ7XG4iLCAiLy8gQGZsb3dcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB0eXBlIHsgTGF5b3V0U3RhdGVQcm9wcyB9IGZyb20gXCIuL2NvbXBvbmVudHMvTGF5b3V0UHJvdmlkZXIvdHlwZXNcIjtcbmV4cG9ydCBpbnRlcmZhY2UgTGF5b3V0Q29udGV4dFByb3BzIHtcbiAgc2V0TGF5b3V0U3RhdGU6IChwYXJhbXM6IExheW91dFN0YXRlUHJvcHMpID0+IHZvaWQ7XG4gIGxheW91dFN0YXRlOiBMYXlvdXRTdGF0ZVByb3BzO1xufVxuXG5jb25zdCBMYXlvdXRDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxMYXlvdXRDb250ZXh0UHJvcHM+KFxuICB7fSBhcyBMYXlvdXRDb250ZXh0UHJvcHNcbik7XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dENvbnRleHQ7XG4iLCAiLy8gQGZsb3dcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0Q29udGV4dCBmcm9tIFwifi9jb21wb25lbnRzL0xheW91dC9jb250ZXh0XCI7XG5pbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IHR5cGUgeyBMYXlvdXRQcm92aWRlclByb3BzIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuZnVuY3Rpb24gTGF5b3V0UHJvdmlkZXIocHJvcHM6IExheW91dFByb3ZpZGVyUHJvcHMpIHtcbiAgY29uc3QgeyBjaGlsZHJlbiwgZGVmYXVsdExheW91dFN0YXRlIH0gPSBwcm9wcztcbiAgY29uc3QgW2xheW91dFN0YXRlLCBzZXRMYXlvdXRTdGF0ZV0gPSB1c2VTdGF0ZShkZWZhdWx0TGF5b3V0U3RhdGUpO1xuXG4gIGNvbnN0IGxheW91dENvbnRleHQgPSB1c2VNZW1vKFxuICAgICgpID0+ICh7XG4gICAgICBsYXlvdXRTdGF0ZSxcbiAgICAgIHNldExheW91dFN0YXRlLFxuICAgIH0pLFxuICAgIFtsYXlvdXRTdGF0ZV1cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXRDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtsYXlvdXRDb250ZXh0fT5cbiAgICAgIHtpc0Z1bmN0aW9uKGNoaWxkcmVuKSA/IGNoaWxkcmVuKGxheW91dENvbnRleHQpIDogY2hpbGRyZW59XG4gICAgPC9MYXlvdXRDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRQcm92aWRlcjtcbiIsICJpbXBvcnQgeyBCb3gsIERyYXdlciB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgdHlwZSB7IE1lbnVQcm9wcyB9IGZyb20gXCIuL3R5cGVzXCI7XG5pbXBvcnQgeyBTcXVlZXplIGFzIEhhbWJ1cmdlciB9IGZyb20gXCJoYW1idXJnZXItcmVhY3RcIjtcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gXCJ+L2NvbXBvbmVudHMvTWVudS9jb21wb25lbnRzL05hdmlnYXRpb25cIjtcbmltcG9ydCB1c2VMYXlvdXQgZnJvbSBcIn4vY29tcG9uZW50cy9MYXlvdXQvaG9va3MvdXNlLWxheW91dC1jb250ZXh0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lbnUoeyB3aWR0aCB9OiBNZW51UHJvcHMpIHtcbiAgY29uc3QgeyBsYXlvdXRTdGF0ZSwgc2V0TGF5b3V0U3RhdGUgfSA9IHVzZUxheW91dCgpO1xuICBjb25zdCB7IGlzTWVudU9wZW4gfSA9IGxheW91dFN0YXRlO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZVRvZ2dsZU1lbnUoKSB7XG4gICAgc2V0TGF5b3V0U3RhdGUoe1xuICAgICAgLi4ubGF5b3V0U3RhdGUsXG4gICAgICBpc01lbnVPcGVuOiAhaXNNZW51T3BlbixcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxEcmF3ZXJcbiAgICAgIHN4PXt7XG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgXCImIC5NdWlEcmF3ZXItcGFwZXJcIjoge1xuICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICAgICAgICAgIC4uLihpc01lbnVPcGVuICYmIHtcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgIHRyYW5zaXRpb246ICh0aGVtZSkgPT5cbiAgICAgICAgICAgICAgdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFwid2lkdGhcIiwge1xuICAgICAgICAgICAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5zdGFuZGFyZCxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgfSksXG4gICAgICAgICAgLi4uKCFpc01lbnVPcGVuICYmIHtcbiAgICAgICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgICAgIHRyYW5zaXRpb246ICh0aGVtZSkgPT5cbiAgICAgICAgICAgICAgdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFwid2lkdGhcIiwge1xuICAgICAgICAgICAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5zaG9ydGVzdCxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgfSksXG4gICAgICAgIH0sXG4gICAgICB9fVxuICAgICAgdmFyaWFudD1cInBlcm1hbmVudFwiXG4gICAgICBhbmNob3I9XCJyaWdodFwiXG4gICAgICBvcGVuPXtpc01lbnVPcGVufVxuICAgID5cbiAgICAgIDxCb3hcbiAgICAgICAgc3g9e3tcbiAgICAgICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxuICAgICAgICAgIHJpZ2h0OiAod2lkdGggLSA0OCkgLyAyLFxuICAgICAgICAgIHRvcDogMjQsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxIYW1idXJnZXJcbiAgICAgICAgICB0b2dnbGVkPXtpc01lbnVPcGVufVxuICAgICAgICAgIHRvZ2dsZT17aGFuZGxlVG9nZ2xlTWVudX1cbiAgICAgICAgICBzaXplPXt3aWR0aCAvIDIuOH1cbiAgICAgICAgLz5cbiAgICAgIDwvQm94PlxuICAgICAgPEJveD5cbiAgICAgICAgPE5hdmlnYXRpb24gLz5cbiAgICAgIDwvQm94PlxuICAgIDwvRHJhd2VyPlxuICApO1xufVxuIiwgImltcG9ydCBMb2dvIGZyb20gXCJ+L2NvbXBvbmVudHMvTG9nb1wiO1xuaW1wb3J0IHsgYWxwaGEgfSBmcm9tIFwiQG11aS9tYXRlcmlhbC9zdHlsZXNcIjtcbmltcG9ydCB7IEdyaWQsIEJveCwgTWVudUxpc3QgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IGJnSW1hZ2UgZnJvbSBcIn4vcmVzb3VyY2VzL2ltYWdlcy9oaXAtc3F1YXJlLnBuZ1wiO1xuaW1wb3J0IE5hdkxpbmsgZnJvbSBcIi4vY29tcG9uZW50cy9OYXZMaW5rXCI7XG5pbXBvcnQgdXNlTGF5b3V0IGZyb20gXCJ+L2NvbXBvbmVudHMvTGF5b3V0L2hvb2tzL3VzZS1sYXlvdXQtY29udGV4dFwiO1xuaW1wb3J0IHR5cGUgeyBOYXZpZ2F0aW9uUHJvcHMgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZpZ2F0aW9uKHsgLi4ucmVzdCB9OiBOYXZpZ2F0aW9uUHJvcHMpIHtcbiAgY29uc3QgeyBsYXlvdXRTdGF0ZSB9ID0gdXNlTGF5b3V0KCk7XG4gIGNvbnN0IHsgaXNNZW51T3BlbiB9ID0gbGF5b3V0U3RhdGU7XG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgey4uLnJlc3R9XG4gICAgICBzeD17e1xuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgaGVpZ2h0OiBcIjEwMHZoXCIsXG4gICAgICAgIHdpZHRoOiBcIjEwMHZ3XCIsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxHcmlkIHN4PXt7IGhlaWdodDogXCIxMDB2aFwiLCB3aWR0aDogXCIxMDB2d1wiIH19IGNvbnRhaW5lciBzcGFjaW5nPXswfT5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17NX0+XG4gICAgICAgICAgPEJveCBzeD17eyBwOiA0LCBmb250V2VpZ2h0OiBcImJvbGRcIiwgaGVpZ2h0OiBcIjEwMHZoXCIgfX0+XG4gICAgICAgICAgICB7aXNNZW51T3BlbiAmJiA8TG9nbyAvPn1cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXs3fT5cbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICh0aGVtZSkgPT5cbiAgICAgICAgICAgICAgICBhbHBoYShcbiAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLFxuICAgICAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5hY3Rpb24uc2VsZWN0ZWRPcGFjaXR5XG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogYHVybCgke2JnSW1hZ2V9KWAsXG4gICAgICAgICAgICAgIGhlaWdodDogXCIxMDB2aFwiLFxuICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgYWxpZ25Db250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPE1lbnVMaXN0PlxuICAgICAgICAgICAgICA8TmF2TGluayB0bz17XCIvXCJ9PkhvbWU8L05hdkxpbms+XG4gICAgICAgICAgICAgIDxOYXZMaW5rIHRvPXtcIi9hYm91dFwifT5BYm91dDwvTmF2TGluaz5cbiAgICAgICAgICAgICAgPE5hdkxpbmsgdG89e1wiL3Bvc3RzXCJ9PkJsb2c8L05hdkxpbms+XG4gICAgICAgICAgICAgIDxOYXZMaW5rIHRvPXtcIi9jb250YWN0XCJ9PkNvbnRhY3Q8L05hdkxpbms+XG4gICAgICAgICAgICA8L01lbnVMaXN0PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0dyaWQ+XG4gICAgPC9Cb3g+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgTGluayBhcyBSbXhMaW5rIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB1c2VMYXlvdXQgZnJvbSBcIn4vY29tcG9uZW50cy9MYXlvdXQvaG9va3MvdXNlLWxheW91dC1jb250ZXh0XCI7XG5cbmltcG9ydCB0eXBlIHsgTmF2TGlua1Byb3BzIH0gZnJvbSBcIi4vdHlwZXNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdkxpbmsoeyB0bywgY2hpbGRyZW4sIC4uLnJlc3QgfTogTmF2TGlua1Byb3BzKSB7XG4gIGNvbnN0IHsgbGF5b3V0U3RhdGUsIHNldExheW91dFN0YXRlIH0gPSB1c2VMYXlvdXQoKTtcbiAgY29uc3QgeyBpc01lbnVPcGVuIH0gPSBsYXlvdXRTdGF0ZTtcblxuICBmdW5jdGlvbiBoYW5kbGVDbG9zZU1lbnUoKSB7XG4gICAgaWYgKGlzTWVudU9wZW4pXG4gICAgICBzZXRMYXlvdXRTdGF0ZSh7XG4gICAgICAgIC4uLmxheW91dFN0YXRlLFxuICAgICAgICBpc01lbnVPcGVuOiBmYWxzZSxcbiAgICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8TGlua1xuICAgICAgY29tcG9uZW50PXtSbXhMaW5rfVxuICAgICAgb25DbGljaz17aGFuZGxlQ2xvc2VNZW51fVxuICAgICAgdmFyaWFudD1cImg0XCJcbiAgICAgIHRvPXt0b31cbiAgICAgIGNvbG9yPVwidGV4dC5wcmltYXJ5XCJcbiAgICAgIHN4PXt7XG4gICAgICAgIG15OiAxLFxuICAgICAgICBteDogMS41LFxuICAgICAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXG4gICAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICAgICAgcGI6IDEsXG4gICAgICAgIHBsOiA2LFxuICAgICAgfX1cbiAgICAgIHsuLi5yZXN0fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0xpbms+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgVHlwb2dyYXBoeSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRhY3QoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMVwiPkNvbnRhY3Q8L1R5cG9ncmFwaHk+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgVHlwb2dyYXBoeSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFib3V0KCkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDFcIj5BYm91dDwvVHlwb2dyYXBoeT5cbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiPlxuICAgICAgICBIaSwgTXkgbmFtZSBpcyBBaG1hZC4gSSdtIGEgc29mdHdhcmUgZGV2ZWxvcGVyIHdpdGggYSBkZWNhZGUgb2ZcbiAgICAgICAgZXhwZXJpZW5jZS4gSSBsaXZlIGluIFZhbmNvdXZlciBCQy5cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyB1c2VMb2FkZXJEYXRhLCBMaW5rIGFzIFJteExpbmsgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgdHlwZSB7IExvYWRlckZ1bmN0aW9uLCBBY3Rpb25GdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgQXJyb3dCYWNrT3V0bGluZWQgfSBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbFwiO1xuaW1wb3J0IHR5cGUgeyBQb3N0IH0gZnJvbSBcIn4vdHlwZXMvcG9zdHNcIjtcbmltcG9ydCB7IGdldFBvc3QgfSBmcm9tIFwifi9hcGkvcG9zdHMvZ2V0UG9zdFwiO1xuaW1wb3J0IHsgY3JlYXRlQ29tbWVudCB9IGZyb20gXCJ+L2FwaS9jb21tZW50cy9jcmVhdGVDb21tZW50XCI7XG5pbXBvcnQgVGl0bGUgZnJvbSBcIn4vY29tcG9uZW50cy9Db250ZW50L2NvbXBvbmVudHMvVGl0bGVcIjtcbmltcG9ydCBDb21tZW50cyBmcm9tIFwifi9jb21wb25lbnRzL0NvbnRlbnQvY29tcG9uZW50cy9Db21tZW50c1wiO1xuaW1wb3J0IEJvZHkgZnJvbSBcIn4vY29tcG9uZW50cy9Db250ZW50L2NvbXBvbmVudHMvQm9keVwiO1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XG4gIHJldHVybiBnZXRQb3N0KHsgc2x1ZzogcGFyYW1zLnNsdWcgYXMgc3RyaW5nIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3QgZm9ybURhdGEgPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XG4gIGNvbnN0IHZhbHVlcyA9IE9iamVjdC5mcm9tRW50cmllcyhmb3JtRGF0YSk7XG4gIHJldHVybiBjcmVhdGVDb21tZW50KHZhbHVlcyk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0U2x1ZygpIHtcbiAgY29uc3QgeyB0aXRsZSwgY29udGVudCwgY29tbWVudHMsIGRhdGFiYXNlSWQgfSA9IHVzZUxvYWRlckRhdGE8UG9zdD4oKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8QnV0dG9uXG4gICAgICAgIGNvbXBvbmVudD17Um14TGlua31cbiAgICAgICAgZGlzYWJsZVJpcHBsZVxuICAgICAgICB2YXJpYW50PVwidGV4dFwiXG4gICAgICAgIHRvPXtcIi9wb3N0c1wifVxuICAgICAgICBzdGFydEljb249ezxBcnJvd0JhY2tPdXRsaW5lZCAvPn1cbiAgICAgID5cbiAgICAgICAgQmFjayB0byBibG9nXG4gICAgICA8L0J1dHRvbj5cblxuICAgICAgPFRpdGxlIHZhcmlhbnQ9XCJoMlwiPnt0aXRsZX08L1RpdGxlPlxuICAgICAgPEJvZHk+e2NvbnRlbnR9PC9Cb2R5PlxuICAgICAgPENvbW1lbnRzIGRhdGFiYXNlSWQ9e2RhdGFiYXNlSWR9IGNvbW1lbnRzPXtjb21tZW50c30gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBncWwgfSBmcm9tIFwiZ3JhcGhxbC1yZXF1ZXN0XCI7XG5pbXBvcnQgeyBncmFwaHFsIH0gZnJvbSBcIn4vbGliL2dyYXBocWxcIjtcbmltcG9ydCB0eXBlIHsgUG9zdCB9IGZyb20gXCJ+L3R5cGVzL3Bvc3RzXCI7XG5pbXBvcnQgeyBDT01NRU5UIH0gZnJvbSBcIi4uL3F1ZXJpZXNcIjtcblxuY29uc3QgR0VUX1BPU1QgPSBncWxgXG4gICR7Q09NTUVOVH1cbiAgcXVlcnkgZ2V0UG9zdCgkc2x1ZzogSUQhKSB7XG4gICAgcG9zdChpZDogJHNsdWcsIGlkVHlwZTogU0xVRykge1xuICAgICAgaWRcbiAgICAgIGRhdGFiYXNlSWRcbiAgICAgIHRpdGxlXG4gICAgICB1cmlcbiAgICAgIGNvbnRlbnRcbiAgICAgIGRhdGVcbiAgICAgIGNvbW1lbnRzKGZpcnN0OiAxMDAsIHdoZXJlOiB7IHBhcmVudDogbnVsbCB9KSB7XG4gICAgICAgICMgR2V0IHRocmVlIGxldmVscyBvZiBjb21tZW50cyByZXBseVxuICAgICAgICBub2RlcyB7XG4gICAgICAgICAgLi4uY29tbWVudFxuICAgICAgICAgIHJlcGxpZXMge1xuICAgICAgICAgICAgbm9kZXMge1xuICAgICAgICAgICAgICAuLi5jb21tZW50XG4gICAgICAgICAgICAgIHJlcGxpZXMge1xuICAgICAgICAgICAgICAgIG5vZGVzIHtcbiAgICAgICAgICAgICAgICAgIC4uLmNvbW1lbnRcbiAgICAgICAgICAgICAgICAgIHJlcGxpZXMge1xuICAgICAgICAgICAgICAgICAgICBub2RlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgLi4uY29tbWVudFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgZ2V0UG9zdCA9IGFzeW5jICh7XG4gIHNsdWcsXG59OiB7XG4gIHNsdWc6IHN0cmluZztcbn0pOiBQcm9taXNlPHsgcG9zdHM6IHsgbm9kZXM6IFBvc3RbXSB9IH0+ID0+IHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGdyYXBocWwucmVxdWVzdChHRVRfUE9TVCwgeyBzbHVnIH0pO1xuICByZXR1cm4gZGF0YS5wb3N0O1xufTtcbiIsICJpbXBvcnQgeyBHcmFwaFFMQ2xpZW50IH0gZnJvbSBcImdyYXBocWwtcmVxdWVzdFwiO1xuXG5jb25zdCBBUElfVVJMID0gcHJvY2Vzcy5lbnYuQVBJX1VSTDtcblxuZXhwb3J0IGNvbnN0IGdyYXBocWwgPSBuZXcgR3JhcGhRTENsaWVudChcImh0dHA6Ly9ibG9nLmFoYW5kYW5pLmNvbS8/XCIpO1xuIiwgImltcG9ydCB7IGdxbCB9IGZyb20gXCJncmFwaHFsLXJlcXVlc3RcIjtcblxuZXhwb3J0IGNvbnN0IENPTU1FTlQgPSBncWxgXG4gIGZyYWdtZW50IGNvbW1lbnQgb24gQ29tbWVudCB7XG4gICAgaWRcbiAgICBkYXRhYmFzZUlkXG4gICAgY29udGVudFxuICAgIHBhcmVudElkXG4gICAgZGF0ZVxuICAgIGRhdGVHbXRcbiAgICBhdXRob3Ige1xuICAgICAgbm9kZSB7XG4gICAgICAgIGF2YXRhciB7XG4gICAgICAgICAgZm91bmRBdmF0YXJcbiAgICAgICAgICBkZWZhdWx0XG4gICAgICAgICAgc2l6ZVxuICAgICAgICAgIHVybFxuICAgICAgICB9XG4gICAgICAgIG5hbWVcbiAgICAgICAgaWRcbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG4iLCAiaW1wb3J0IHsgZ3FsIH0gZnJvbSBcImdyYXBocWwtcmVxdWVzdFwiO1xuaW1wb3J0IHsgZ3JhcGhxbCB9IGZyb20gXCJ+L2xpYi9ncmFwaHFsXCI7XG5pbXBvcnQgdHlwZSB7IENyZWF0ZUNvbW1lbnQgfSBmcm9tIFwifi90eXBlcy9wb3N0c1wiO1xuXG5jb25zdCBDUkVBVEVfQ09NTUVOVCA9IGdxbGBcbiAgbXV0YXRpb24gQ1JFQVRFX0NPTU1FTlQoJGlucHV0OiBDcmVhdGVDb21tZW50SW5wdXQhKSB7XG4gICAgY3JlYXRlQ29tbWVudChpbnB1dDogJGlucHV0KSB7XG4gICAgICBzdWNjZXNzXG4gICAgICBjb21tZW50IHtcbiAgICAgICAgaWRcbiAgICAgICAgY29udGVudFxuICAgICAgICBhcHByb3ZlZFxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUNvbW1lbnQgPSBhc3luYyAoe1xuICBjb21tZW50T24sXG4gIGNvbnRlbnQsXG4gIGF1dGhvcixcbiAgYXV0aG9yRW1haWwsXG4gIHBhcmVudCxcbn06IENyZWF0ZUNvbW1lbnQpOiBQcm9taXNlPHVua25vd24+ID0+IHtcbiAgY29uc3QgeyBjcmVhdGVDb21tZW50IH0gPSBhd2FpdCBncmFwaHFsLnJlcXVlc3QoQ1JFQVRFX0NPTU1FTlQsIHtcbiAgICBpbnB1dDoge1xuICAgICAgY29tbWVudE9uOiBOdW1iZXIoY29tbWVudE9uKSxcbiAgICAgIGNvbnRlbnQsXG4gICAgICBhdXRob3IsXG4gICAgICBhdXRob3JFbWFpbCxcbiAgICAgIHBhcmVudDogTnVtYmVyKHBhcmVudCksXG4gICAgfSxcbiAgfSk7XG4gIHJldHVybiBjcmVhdGVDb21tZW50O1xufTtcbiIsICJpbXBvcnQgeyBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVtaXhcIjtcblxuaW1wb3J0IHR5cGUgeyBUaXRsZVByb3BzIH0gZnJvbSBcIi4vdHlwZXNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRpdGxlKHsgY2hpbGRyZW4sIHRvLCBzeCwgLi4ucmVzdCB9OiBUaXRsZVByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPFR5cG9ncmFwaHlcbiAgICAgIHsuLi4odG8gJiYgeyBjb21wb25lbnQ6IExpbmssIHRvIH0pfVxuICAgICAgdmFyaWFudD1cImg0XCJcbiAgICAgIHsuLi5yZXN0fVxuICAgICAgc3g9e3tcbiAgICAgICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxuICAgICAgICBjb2xvcjogKHRoZW1lKSA9PiB0aGVtZS5wYWxldHRlLmNvbW1vbi5ibGFjayxcbiAgICAgICAgcGI6IDAsXG4gICAgICAgIC4uLnN4LFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9UeXBvZ3JhcGh5PlxuICApO1xufVxuIiwgImltcG9ydCBDb21tZW50IGZyb20gXCIuL2NvbXBvbmVudHMvQ29tbWVudFwiO1xuaW1wb3J0IENyZWF0ZUNvbW1lbnQgZnJvbSBcIi4vY29tcG9uZW50cy9DcmVhdGVDb21tZW50XCI7XG5pbXBvcnQgeyBpc0VtcHR5IH0gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IHsgQm94IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcblxuaW1wb3J0IHR5cGUgeyBDb21tZW50c1Byb3BzIH0gZnJvbSBcIi4vdHlwZXNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbW1lbnRzKHtcbiAgY29tbWVudHMsXG4gIGNoaWxkLFxuICBkYXRhYmFzZUlkLFxufTogQ29tbWVudHNQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7IWNoaWxkICYmIDxDcmVhdGVDb21tZW50IGNvbW1lbnRPbj17ZGF0YWJhc2VJZH0gLz59XG4gICAgICB7Y29tbWVudHM/Lm5vZGVzPy5tYXAoKGNvbW1lbnQpID0+IHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgIGNvbnRlbnQsXG4gICAgICAgICAgZGF0ZSxcbiAgICAgICAgICBpZDogY29tbWVudElkLFxuICAgICAgICAgIGRhdGFiYXNlSWQ6IGNvbW1lbnREYXRhYmFzZUlkLFxuICAgICAgICAgIGF1dGhvcixcbiAgICAgICAgICByZXBsaWVzLFxuICAgICAgICB9ID0gY29tbWVudCB8fCB7fTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8Qm94IHN4PXt7IGJhY2tncm91bmRDb2xvcjogXCIjRUVFXCIsIGJvcmRlclJhZGl1czogMywgcDogMiwgbWI6IDEgfX0+XG4gICAgICAgICAgICA8Q29tbWVudCBrZXk9e2NvbW1lbnRJZH0gYXV0aG9yPXthdXRob3J9IGRhdGU9e2RhdGV9PlxuICAgICAgICAgICAgICB7Y29udGVudH1cbiAgICAgICAgICAgIDwvQ29tbWVudD5cbiAgICAgICAgICAgIDxDcmVhdGVDb21tZW50IHBhcmVudD17Y29tbWVudERhdGFiYXNlSWR9IGNvbW1lbnRPbj17ZGF0YWJhc2VJZH0gLz5cbiAgICAgICAgICAgIHshaXNFbXB0eShyZXBsaWVzPy5ub2RlcykgJiYgKFxuICAgICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICAgIDxDb21tZW50cyBkYXRhYmFzZUlkPXtkYXRhYmFzZUlkfSBjb21tZW50cz17cmVwbGllc30gY2hpbGQgLz5cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvQm94PlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgPC8+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgVHlwb2dyYXBoeSwgQm94IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCBEYXRlIGZyb20gXCJ+L2NvbXBvbmVudHMvRGF0ZVwiO1xuaW1wb3J0IEF2YXRhciBmcm9tIFwifi9jb21wb25lbnRzL0F2YXRhclwiO1xuaW1wb3J0IEJvZHkgZnJvbSBcIn4vY29tcG9uZW50cy9Db250ZW50L2NvbXBvbmVudHMvQm9keVwiO1xuXG5pbXBvcnQgdHlwZSB7IENvbW1lbnRQcm9wcyB9IGZyb20gXCIuL3R5cGVzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb21tZW50KHtcbiAgYXV0aG9ySW1hZ2VTaXplID0gNjAsXG4gIGRhdGUsXG4gIGF1dGhvcixcbiAgY2hpbGRyZW4sXG59OiBDb21tZW50UHJvcHMpIHtcbiAgY29uc3QgYXV0aG9yTmFtZSA9IGF1dGhvcj8ubm9kZT8ubmFtZTtcbiAgY29uc3QgYXV0aG9ySW1hZ2UgPSBhdXRob3I/Lm5vZGU/LnVybDtcblxuICByZXR1cm4gKFxuICAgIDxCb3ggY2xhc3NOYW1lPVwiY29tbWVudC1ib3hcIj5cbiAgICAgIDxCb3ggc3g9e3sgZGlzcGxheTogXCJmbGV4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIHA6IDEgfX0+XG4gICAgICAgIDxBdmF0YXIgbmFtZT17YXV0aG9yTmFtZX0gaW1hZ2U9e2F1dGhvckltYWdlfSBzaXplPXthdXRob3JJbWFnZVNpemV9IC8+XG4gICAgICAgIDxCb3ggc3g9e3sgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsIHA6IDEgfX0+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgc3g9e3sgZm9udFdlaWdodDogXCJib2xkXCIgfX0gdmFyaWFudD1cImJvZHkyXCI+XG4gICAgICAgICAgICB7YXV0aG9yTmFtZX1cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPERhdGUgZGF0ZT17ZGF0ZX0gLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0JveD5cbiAgICAgIDxCb2R5PntjaGlsZHJlbn08L0JvZHk+XG4gICAgPC9Cb3g+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgVHlwb2dyYXBoeSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XG5pbXBvcnQgdHlwZSB7IERhdGVQcm9wcyB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhdGUoe1xuICBkYXRlLFxuICBmb3JtYXQgPSBcImRkZGQsIE1NTSBERCwgWVlZWVwiLFxufTogRGF0ZVByb3BzKSB7XG4gIGNvbnN0IGRheSA9IGRheWpzKGRhdGUpO1xuICByZXR1cm4gPFR5cG9ncmFwaHkgdmFyaWFudD1cImNhcHRpb25cIj57ZGF5LmZvcm1hdChmb3JtYXQpfTwvVHlwb2dyYXBoeT47XG59XG4iLCAiaW1wb3J0IHsgQXZhdGFyIGFzIE11aUF2YXRhciwgQm94LCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcblxuaW1wb3J0IHR5cGUgeyBBdmF0YXJQcm9wcyB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEF2YXRhcih7IG5hbWUsIGltYWdlLCBzaXplLCBzeCB9OiBBdmF0YXJQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxNdWlBdmF0YXJcbiAgICAgIGFsdD17bmFtZSA/IG5hbWUgOiBcIlwifVxuICAgICAgc3JjPXtpbWFnZSA/IGltYWdlIDogdW5kZWZpbmVkfVxuICAgICAgc3g9e3sgd2lkdGg6IHNpemUsIGhlaWdodDogc2l6ZSwgLi4uc3ggfX1cbiAgICAvPlxuICApO1xufVxuIiwgImltcG9ydCB7IFJlYWN0RWxlbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBCb3ggfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IENvZGVCbG9jayBmcm9tIFwifi9jb21wb25lbnRzL0NvbnRlbnQvY29tcG9uZW50cy9Cb2R5L2NvbXBvbmVudHMvQ29kZUJsb2NrXCI7XG5pbXBvcnQgQmxvY2txdW90ZSBmcm9tIFwifi9jb21wb25lbnRzL0NvbnRlbnQvY29tcG9uZW50cy9Cb2R5L2NvbXBvbmVudHMvQmxvY2txdW90ZVwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJ+L2NvbXBvbmVudHMvQ29udGVudC9jb21wb25lbnRzL0JvZHkvY29tcG9uZW50cy9JbWFnZVwiO1xuaW1wb3J0IE1lZGlhIGZyb20gXCJ+L2NvbXBvbmVudHMvQ29udGVudC9jb21wb25lbnRzL0JvZHkvY29tcG9uZW50cy9NZWRpYVwiO1xuaW1wb3J0IEhlYWRpbmcgZnJvbSBcIn4vY29tcG9uZW50cy9Db250ZW50L2NvbXBvbmVudHMvQm9keS9jb21wb25lbnRzL0hlYWRpbmdcIjtcbmltcG9ydCBwYXJzZSwgeyBFbGVtZW50LCBET01Ob2RlIH0gZnJvbSBcImh0bWwtcmVhY3QtcGFyc2VyXCI7XG5pbXBvcnQgdHlwZSB7IEJvZHlQcm9wcyB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmV4cG9ydCB0eXBlIEJsb2NrQ29tcG9uZW50QmFzZVByb3BzID0ge1xuICBub2RlOiBFbGVtZW50O1xufTtcblxuZXhwb3J0IHR5cGUgQmxvY2tDb21wb25lbnRCYXNlVHlwZXMgPSAoXG4gIHByb3BzOiBCbG9ja0NvbXBvbmVudEJhc2VQcm9wc1xuKSA9PiBSZWFjdEVsZW1lbnQ7XG5cbmV4cG9ydCBlbnVtIEJMT0NLX0tFWVMge1xuICBDT0RFID0gXCJjb2RlXCIsXG4gIEJMT0NLUVVPVEUgPSBcImJsb2NrcXVvdGVcIixcbiAgSU1BR0UgPSBcImltZ1wiLFxuICBGSUdVUkUgPSBcImZpZ3VyZVwiLFxuICBIMSA9IFwiaDFcIixcbiAgSDIgPSBcImgyXCIsXG4gIEgzID0gXCJoM1wiLFxuICBINCA9IFwiaDRcIixcbiAgSDUgPSBcImg1XCIsXG4gIEg2ID0gXCJoNlwiLFxuICBQID0gXCJwXCIsXG59XG5cbmNvbnN0IEJMT0NLX0NPTVBPTkVOVFM6IHtcbiAgW2tleTogc3RyaW5nXTogQmxvY2tDb21wb25lbnRCYXNlVHlwZXM7XG59ID0ge1xuICBbQkxPQ0tfS0VZUy5DT0RFXTogQ29kZUJsb2NrLFxuICBbQkxPQ0tfS0VZUy5CTE9DS1FVT1RFXTogQmxvY2txdW90ZSxcbiAgW0JMT0NLX0tFWVMuSU1BR0VdOiBJbWFnZSxcbiAgW0JMT0NLX0tFWVMuRklHVVJFXTogTWVkaWEsXG4gIFtCTE9DS19LRVlTLkgxXTogSGVhZGluZyxcbiAgW0JMT0NLX0tFWVMuSDJdOiBIZWFkaW5nLFxuICBbQkxPQ0tfS0VZUy5IM106IEhlYWRpbmcsXG4gIFtCTE9DS19LRVlTLkg0XTogSGVhZGluZyxcbiAgW0JMT0NLX0tFWVMuSDVdOiBIZWFkaW5nLFxuICBbQkxPQ0tfS0VZUy5INl06IEhlYWRpbmcsXG4gIC8vIFtCTE9DS19LRVlTLlBdOiBIZWFkaW5nLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQm9keSh7IGJvZHksIGNoaWxkcmVuLCBzeCwgLi4ucmVzdCB9OiBCb2R5UHJvcHMpIHtcbiAgY29uc3QgY29udGVudCA9IGJvZHkgfHwgY2hpbGRyZW4gfHwgXCJcIjtcblxuICBjb25zdCByZXBsYWNlQ29kZSA9IChub2RlOiBET01Ob2RlKSA9PiB7XG4gICAgaWYgKFxuICAgICAgbm9kZSBpbnN0YW5jZW9mIEVsZW1lbnQgJiZcbiAgICAgIE9iamVjdC5rZXlzKEJMT0NLX0NPTVBPTkVOVFMpLmluY2x1ZGVzKG5vZGUubmFtZSlcbiAgICApIHtcbiAgICAgIGNvbnN0IFJlbmRlckNvbXBvbmVudCA9IEJMT0NLX0NPTVBPTkVOVFNbbm9kZS5uYW1lXTtcbiAgICAgIHJldHVybiA8UmVuZGVyQ29tcG9uZW50IG5vZGU9e25vZGV9IC8+O1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIHsuLi5yZXN0fVxuICAgICAgc3g9e3tcbiAgICAgICAgXCImIGFcIjogKHsgcGFsZXR0ZSB9KSA9PiAoe1xuICAgICAgICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcbiAgICAgICAgICBjb2xvcjogcGFsZXR0ZS5wcmltYXJ5Lm1haW4sXG4gICAgICAgIH0pLFxuICAgICAgICBcIiYgLm1vcmUtbGlua1wiOiB7XG4gICAgICAgICAgZGlzcGxheTogXCJub25lXCIsXG4gICAgICAgIH0sXG4gICAgICAgIC4uLnN4LFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7cGFyc2UoU3RyaW5nKGNvbnRlbnQpLCB7IHJlcGxhY2U6IHJlcGxhY2VDb2RlIH0pfVxuICAgIDwvQm94PlxuICApO1xufVxuIiwgImltcG9ydCB7IFByaXNtIGFzIFN5bnRheEhpZ2hsaWdodGVyIH0gZnJvbSBcInJlYWN0LXN5bnRheC1oaWdobGlnaHRlclwiO1xuaW1wb3J0IHsgeG9ub2thaSB9IGZyb20gXCJyZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXIvZGlzdC9janMvc3R5bGVzL3ByaXNtXCI7XG5pbXBvcnQgeyBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IGRvbVRvUmVhY3QsIEVsZW1lbnQgfSBmcm9tIFwiaHRtbC1yZWFjdC1wYXJzZXJcIjtcblxuaW1wb3J0IHR5cGUgeyBDb2RlQmxvY2tQcm9wcyB9IGZyb20gXCIuL3R5cGVzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb2RlQmxvY2soeyBub2RlIH06IENvZGVCbG9ja1Byb3BzKSB7XG4gIGNvbnN0IHsgYXR0cmlicywgY2hpbGRyZW4sIHBhcmVudCB9ID0gbm9kZTtcbiAgY29uc3QgeyBuYW1lIH0gPSBwYXJlbnQgYXMgRWxlbWVudDtcbiAgY29uc3QgeyBsYW5nIH0gPSBhdHRyaWJzO1xuICBjb25zdCByZW5kZXIgPSBkb21Ub1JlYWN0KGNoaWxkcmVuKTtcblxuICByZXR1cm4gbmFtZSA9PSBcInByZVwiID8gKFxuICAgIDxTeW50YXhIaWdobGlnaHRlclxuICAgICAgc3R5bGU9e3hvbm9rYWl9XG4gICAgICBzaG93TGluZU51bWJlcnNcbiAgICAgIHNob3dJbmxpbmVMaW5lTnVtYmVyc1xuICAgICAgd3JhcExpbmVzXG4gICAgICBsYW5ndWFnZT17bGFuZ31cbiAgICA+XG4gICAgICB7cmVuZGVyfVxuICAgIDwvU3ludGF4SGlnaGxpZ2h0ZXI+XG4gICkgOiAoXG4gICAgPFR5cG9ncmFwaHlcbiAgICAgIHZhcmlhbnQ9XCJib2R5MVwiXG4gICAgICBjb21wb25lbnQ9e1wiY29kZVwifVxuICAgICAgcGFyYWdyYXBoPXtmYWxzZX1cbiAgICAgIHN4PXt7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogKHRoZW1lKSA9PiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcbiAgICAgICAgY29sb3I6ICh0aGVtZSkgPT4gdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXG4gICAgICAgIHB4OiAwLjgsXG4gICAgICAgIGJvcmRlclJhZGl1czogMSxcbiAgICAgIH19XG4gICAgPlxuICAgICAge3JlbmRlcn1cbiAgICA8L1R5cG9ncmFwaHk+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgVHlwb2dyYXBoeSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBkb21Ub1JlYWN0IH0gZnJvbSBcImh0bWwtcmVhY3QtcGFyc2VyXCI7XG5cbmltcG9ydCB0eXBlIHsgQmxvY2txdW90ZVByb3BzIH0gZnJvbSBcIi4vdHlwZXNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJsb2NrcXVvdGUoeyBub2RlIH06IEJsb2NrcXVvdGVQcm9wcykge1xuICBjb25zdCB7IGNoaWxkcmVuIH0gPSBub2RlO1xuICByZXR1cm4gKFxuICAgIDxUeXBvZ3JhcGh5XG4gICAgICBzeD17e1xuICAgICAgICBwOiA0LFxuICAgICAgICBteTogMixcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAoeyBwYWxldHRlIH0pID0+IHBhbGV0dGUuZ3JleVsxMDBdLFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7ZG9tVG9SZWFjdChjaGlsZHJlbil9XG4gICAgPC9UeXBvZ3JhcGh5PlxuICApO1xufVxuIiwgImltcG9ydCB7IENhcmRNZWRpYSwgQ2FyZCB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgdHlwZSB7IEltYWdlUHJvcHMgfSBmcm9tIFwiLi90eXBlc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW1hZ2UoeyBub2RlIH06IEltYWdlUHJvcHMpIHtcbiAgY29uc3QgeyBhdHRyaWJzIH0gPSBub2RlO1xuICBjb25zdCB7IHNyYywgYWx0IH0gPSBhdHRyaWJzO1xuXG4gIHJldHVybiAoXG4gICAgPENhcmQgcmFpc2VkPlxuICAgICAgPENhcmRNZWRpYSBjb21wb25lbnQ9XCJpbWdcIiBpbWFnZT17c3JjfSBhbHQ9e2FsdH0gLz5cbiAgICA8L0NhcmQ+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgQ2FyZCB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgdHlwZSB7IE1lZGlhUHJvcHMgfSBmcm9tIFwiLi90eXBlc1wiO1xuaW1wb3J0IHsgZG9tVG9SZWFjdCB9IGZyb20gXCJodG1sLXJlYWN0LXBhcnNlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZWRpYSh7IG5vZGUgfTogTWVkaWFQcm9wcykge1xuICBjb25zdCB7IGNoaWxkcmVuIH0gPSBub2RlO1xuICByZXR1cm4gKFxuICAgIDxDYXJkXG4gICAgICBzeD17e1xuICAgICAgICBteTogNCxcbiAgICAgICAgXCImIGlmcmFtZSwgJiB2aWRlb1wiOiB7XG4gICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICAgICAgfSxcbiAgICAgIH19XG4gICAgPlxuICAgICAge2RvbVRvUmVhY3QoY2hpbGRyZW4pfVxuICAgIDwvQ2FyZD5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IGRvbVRvUmVhY3QgfSBmcm9tIFwiaHRtbC1yZWFjdC1wYXJzZXJcIjtcbmltcG9ydCB7IEJMT0NLX0tFWVMgfSBmcm9tIFwifi9jb21wb25lbnRzL0NvbnRlbnQvY29tcG9uZW50cy9Cb2R5XCI7XG5cbmltcG9ydCB0eXBlIHsgSW1hZ2VQcm9wcyB9IGZyb20gXCIuL3R5cGVzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbWFnZSh7IG5vZGUgfTogSW1hZ2VQcm9wcykge1xuICBjb25zdCB7IGNoaWxkcmVuLCBuYW1lIH0gPSBub2RlO1xuXG4gIGNvbnN0IEJMT0NLX1ZBUklBTlRTOiB7XG4gICAgW2tleTogc3RyaW5nXTogXCJoMVwiIHwgXCJoMlwiIHwgXCJoM1wiIHwgXCJoNFwiIHwgXCJoNVwiIHwgXCJoNlwiIHwgXCJib2R5MVwiO1xuICB9ID0ge1xuICAgIFtCTE9DS19LRVlTLkgxXTogXCJoMVwiLFxuICAgIFtCTE9DS19LRVlTLkgyXTogXCJoMlwiLFxuICAgIFtCTE9DS19LRVlTLkgzXTogXCJoM1wiLFxuICAgIFtCTE9DS19LRVlTLkg0XTogXCJoNFwiLFxuICAgIFtCTE9DS19LRVlTLkg1XTogXCJoNVwiLFxuICAgIFtCTE9DS19LRVlTLkg2XTogXCJoNlwiLFxuICAgIFtCTE9DS19LRVlTLlBdOiBcImJvZHkxXCIsXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8VHlwb2dyYXBoeSB2YXJpYW50PXtCTE9DS19WQVJJQU5UU1tuYW1lXX0+XG4gICAgICB7ZG9tVG9SZWFjdChjaGlsZHJlbil9XG4gICAgPC9UeXBvZ3JhcGh5PlxuICApO1xufVxuIiwgImltcG9ydCB7IHVzZVRyYW5zaXRpb24sIHVzZUFjdGlvbkRhdGEsIEZvcm0gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBUZXh0RmllbGQsXG4gIEJveCxcbiAgR3JpZCxcbiAgQnV0dG9uLFxuICBUeXBvZ3JhcGh5LFxuICBDb2xsYXBzZSxcbn0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdHlwZSB7IENyZWF0ZUNvbW1lbnRQcm9wcyB9IGZyb20gXCIuL3R5cGVzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcmVhdGVDb21tZW50KHtcbiAgY29tbWVudE9uLFxuICBwYXJlbnQsXG59OiBDcmVhdGVDb21tZW50UHJvcHMpIHtcbiAgY29uc3QgdHJhbnNpdGlvbiA9IHVzZVRyYW5zaXRpb24oKTtcbiAgY29uc3QgYWN0aW9uRGF0YSA9IHVzZUFjdGlvbkRhdGEoKTtcblxuICBjb25zdCBpc1N1Ym1pdHRpbmcgPSB0cmFuc2l0aW9uLnN0YXRlID09IFwic3VibWl0dGluZ1wiO1xuICBjb25zdCBpc1JlbG9hZGluZyA9IHRyYW5zaXRpb24udHlwZSA9PT0gXCJhY3Rpb25SZWxvYWRcIjtcblxuICBjb25zdCBmb3JtUmVmID0gdXNlUmVmPEhUTUxGb3JtRWxlbWVudCB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWlzU3VibWl0dGluZykge1xuICAgICAgZm9ybVJlZi5jdXJyZW50Py5yZXNldCgpO1xuICAgIH1cbiAgfSwgW2lzU3VibWl0dGluZ10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKG9wZW4gJiYgaXNSZWxvYWRpbmcpIHtcbiAgICAgIHNldE9wZW4oZmFsc2UpO1xuICAgIH1cbiAgfSwgW29wZW4sIGlzUmVsb2FkaW5nXSk7XG5cbiAgY29uc29sZS5sb2coYWN0aW9uRGF0YT8uc3VjY2VzcywgdHJhbnNpdGlvbi50eXBlKTtcbiAgcmV0dXJuIChcbiAgICA8Qm94IGNsYXNzTmFtZT1cImNvbW1lbnQtYm94XCI+XG4gICAgICA8QnV0dG9uXG4gICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE9wZW4oIW9wZW4pfVxuICAgICAgICB2YXJpYW50PVwidGV4dFwiXG4gICAgICAgIGRpc2FibGVSaXBwbGVcbiAgICAgICAgZGlzYWJsZUZvY3VzUmlwcGxlXG4gICAgICAgIGRpc2FibGVUb3VjaFJpcHBsZVxuICAgICAgICBkaXNhYmxlRWxldmF0aW9uXG4gICAgICA+XG4gICAgICAgIFJlcGx5XG4gICAgICA8L0J1dHRvbj5cbiAgICAgIDxDb2xsYXBzZSBpbj17b3Blbn0+XG4gICAgICAgIDxGb3JtIHJlZj17Zm9ybVJlZn0gbWV0aG9kPVwicG9zdFwiPlxuICAgICAgICAgIHtwYXJlbnQgJiYgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwicGFyZW50XCIgdmFsdWU9e3BhcmVudH0gLz59XG4gICAgICAgICAge2NvbW1lbnRPbiAmJiAoXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJjb21tZW50T25cIiB2YWx1ZT17Y29tbWVudE9ufSAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPEdyaWQgc3g9e3sgbXQ6IDEgfX0gY29udGFpbmVyIHNwYWNpbmc9ezF9PlxuICAgICAgICAgICAgPEdyaWRcbiAgICAgICAgICAgICAgaXRlbVxuICAgICAgICAgICAgICB4cz17MTJ9XG4gICAgICAgICAgICAgIHNtPXs0fVxuICAgICAgICAgICAgICBzeD17eyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJOYW1lXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwiYXV0aG9yXCJcbiAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgc3g9e3sgbWI6IDEgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgIGxhYmVsPVwiRW1haWxcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBhIHZhbGlkIGVtYWlsIGFkZHJlc3NcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJhdXRob3JFbWFpbFwiXG4gICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17OH0+XG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkNvbW1lbnRcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJjb250ZW50XCJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgIG11bHRpbGluZVxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgIG1pblJvd3M9ezIuNH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICBteDogMSxcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcbiAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN4PXt7IGZsZXg6IDEgfX0gdmFyaWFudD1cImNhcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgIEVtYWlscyB3b250IGJlIHB1Ymxpc2hlZC5cbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlRWxldmF0aW9uXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgU3VibWl0XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9Gb3JtPlxuICAgICAgPC9Db2xsYXBzZT5cbiAgICA8L0JveD5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBnZXRQb3N0cyB9IGZyb20gXCJ+L2FwaS9wb3N0cy9nZXRQb3N0c1wiO1xuaW1wb3J0IHFzIGZyb20gXCJxdWVyeS1zdHJpbmdcIjtcbmltcG9ydCB0eXBlIHsgUG9zdCwgUXVlcnkgfSBmcm9tIFwifi90eXBlcy9wb3N0c1wiO1xuaW1wb3J0IHR5cGUgeyBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgdXNlUXVlcnlQYXJhbXMsIE51bWJlclBhcmFtLCBTdHJpbmdQYXJhbSB9IGZyb20gXCJ1c2UtcXVlcnktcGFyYW1zXCI7XG5cbmltcG9ydCBFeGNlcnB0IGZyb20gXCJ+L2NvbXBvbmVudHMvQ29udGVudC9jb21wb25lbnRzL0V4Y2VycHRcIjtcblxuaW1wb3J0IHtcbiAgVHlwb2dyYXBoeSxcbiAgRm9ybUNvbnRyb2wsXG4gIElucHV0TGFiZWwsXG4gIFNlbGVjdCxcbiAgQnV0dG9uR3JvdXAsXG4gIEJ1dHRvbixcbn0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3QgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XG4gIGNvbnN0IHBhcmFtcyA9IHFzLnBhcnNlKHVybC5zZWFyY2gsIHsgcGFyc2VOdW1iZXJzOiB0cnVlIH0pIGFzIFF1ZXJ5O1xuICByZXR1cm4gZ2V0UG9zdHMocGFyYW1zKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3RzKCkge1xuICBjb25zdCB7IG5vZGVzLCBwYWdlSW5mbyB9ID0gdXNlTG9hZGVyRGF0YTx7XG4gICAgbm9kZXM6IFBvc3RbXTtcbiAgICBwYWdlSW5mbzoge1xuICAgICAgZW5kQ3Vyc29yPzogc3RyaW5nO1xuICAgICAgaGFzTmV4dFBhZ2U6IGJvb2xlYW47XG4gICAgICBoYXNQcmV2aW91c1BhZ2U6IGJvb2xlYW47XG4gICAgICBzdGFydEN1cnNvcjogc3RyaW5nO1xuICAgIH07XG4gIH0+KCk7XG5cbiAgY29uc3QgeyBlbmRDdXJzb3IsIGhhc05leHRQYWdlLCBoYXNQcmV2aW91c1BhZ2UsIHN0YXJ0Q3Vyc29yIH0gPSBwYWdlSW5mbztcblxuICBjb25zdCBwYWdpbmdPcHRpb25zID0gWzUsIDEwLCAxNSwgMjBdO1xuXG4gIGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gdXNlUXVlcnlQYXJhbXMoe1xuICAgIGxpbWl0OiBOdW1iZXJQYXJhbSxcbiAgICBhZnRlcjogU3RyaW5nUGFyYW0sXG4gICAgYmVmb3JlOiBTdHJpbmdQYXJhbSxcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgxXCI+UG9zdHM8L1R5cG9ncmFwaHk+XG4gICAgICA8ZGl2PlxuICAgICAgICB7bm9kZXMubWFwKCh7IGlkLCAuLi5yZXN0IH0pID0+IChcbiAgICAgICAgICA8RXhjZXJwdCB7Li4ucmVzdH0ga2V5PXtTdHJpbmcoaWQpfSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPEZvcm1Db250cm9sIHN4PXt7IG06IDEsIG1pbldpZHRoOiAxMjAgfX0+XG4gICAgICAgIDxJbnB1dExhYmVsIGh0bWxGb3I9XCJncm91cGVkLW5hdGl2ZS1zZWxlY3RcIj5QYWdlIHNpemU8L0lucHV0TGFiZWw+XG4gICAgICAgIDxTZWxlY3RcbiAgICAgICAgICBuYXRpdmVcbiAgICAgICAgICBkZWZhdWx0VmFsdWU9ezV9XG4gICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICB2YWx1ZT17cXVlcnkubGltaXR9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsaW1pdCA9IE51bWJlcihlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICBzZXRRdWVyeSh7IGJlZm9yZTogdW5kZWZpbmVkLCBhZnRlcjogdW5kZWZpbmVkLCBsaW1pdCB9KTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIGxhYmVsPVwiUGFnZSBzaXplXCJcbiAgICAgICAgPlxuICAgICAgICAgIHtwYWdpbmdPcHRpb25zLm1hcCgodmFsdWUsIGkpID0+IChcbiAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpfSB2YWx1ZT17dmFsdWV9PlxuICAgICAgICAgICAgICB7dmFsdWV9XG4gICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9TZWxlY3Q+XG5cbiAgICAgICAgPEJ1dHRvbkdyb3VwIHZhcmlhbnQ9XCJ0ZXh0XCIgYXJpYS1sYWJlbD1cInRleHQgYnV0dG9uIGdyb3VwXCI+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgZGlzYWJsZWQ9eyFoYXNQcmV2aW91c1BhZ2V9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldFF1ZXJ5KHtcbiAgICAgICAgICAgICAgICBiZWZvcmU6IHN0YXJ0Q3Vyc29yLFxuICAgICAgICAgICAgICAgIGFmdGVyOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBQcmV2aW91c1xuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGRpc2FibGVkPXshaGFzTmV4dFBhZ2V9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldFF1ZXJ5KHtcbiAgICAgICAgICAgICAgICBhZnRlcjogZW5kQ3Vyc29yLFxuICAgICAgICAgICAgICAgIGJlZm9yZTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgTmV4dFxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0J1dHRvbkdyb3VwPlxuICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBncWwgfSBmcm9tIFwiZ3JhcGhxbC1yZXF1ZXN0XCI7XG5pbXBvcnQgeyBncmFwaHFsIH0gZnJvbSBcIn4vbGliL2dyYXBocWxcIjtcbmltcG9ydCB0eXBlIHsgUG9zdCwgUXVlcnkgfSBmcm9tIFwifi90eXBlcy9wb3N0c1wiO1xuXG5jb25zdCBHRVRfUE9TVFMgPSBncWxgXG4gIHF1ZXJ5IGdldFBvc3RzKCRmaXJzdDogSW50LCAkbGFzdDogSW50LCAkYWZ0ZXI6IFN0cmluZywgJGJlZm9yZTogU3RyaW5nKSB7XG4gICAgcG9zdHMoZmlyc3Q6ICRmaXJzdCwgbGFzdDogJGxhc3QsIGFmdGVyOiAkYWZ0ZXIsIGJlZm9yZTogJGJlZm9yZSkge1xuICAgICAgbm9kZXMge1xuICAgICAgICBpZFxuICAgICAgICB0aXRsZVxuICAgICAgICBleGNlcnB0XG4gICAgICAgIHNsdWdcbiAgICAgICAgY2F0ZWdvcmllcyB7XG4gICAgICAgICAgbm9kZXMge1xuICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgaWRcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29tbWVudENvdW50XG4gICAgICAgIGRhdGVcbiAgICAgICAgZGF0ZUdtdFxuICAgICAgfVxuICAgICAgcGFnZUluZm8ge1xuICAgICAgICBoYXNOZXh0UGFnZVxuICAgICAgICBlbmRDdXJzb3JcbiAgICAgICAgaGFzUHJldmlvdXNQYWdlXG4gICAgICAgIHN0YXJ0Q3Vyc29yXG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgZ2V0UG9zdHMgPSBhc3luYyAoe1xuICBsaW1pdCA9IDUsXG4gIGFmdGVyLFxuICBiZWZvcmUsXG59OiBRdWVyeSk6IFByb21pc2U8eyBwb3N0czogeyBub2RlczogUG9zdFtdIH0gfT4gPT4ge1xuICBjb25zdCBkYXRhID0gYXdhaXQgZ3JhcGhxbC5yZXF1ZXN0KEdFVF9QT1NUUywge1xuICAgIGZpcnN0OiBhZnRlciA/IGxpbWl0IDogYmVmb3JlID8gbnVsbCA6IGxpbWl0LFxuICAgIGxhc3Q6IGJlZm9yZSA/IGxpbWl0IDogbnVsbCxcbiAgICBhZnRlcixcbiAgICBiZWZvcmUsXG4gIH0pO1xuICByZXR1cm4gZGF0YS5wb3N0cztcbn07XG4iLCAiaW1wb3J0IHsgQm94LCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCBCb2R5IGZyb20gXCJ+L2NvbXBvbmVudHMvQ29udGVudC9jb21wb25lbnRzL0JvZHlcIjtcbmltcG9ydCBUaXRsZSBmcm9tIFwifi9jb21wb25lbnRzL0NvbnRlbnQvY29tcG9uZW50cy9UaXRsZVwiO1xuaW1wb3J0IERhdGUgZnJvbSBcIn4vY29tcG9uZW50cy9EYXRlXCI7XG5cbmltcG9ydCB0eXBlIHsgRXhjZXJwdFByb3BzIH0gZnJvbSBcIi4vdHlwZXNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEV4Y2VycHQoe1xuICBzbHVnLFxuICB0aXRsZSxcbiAgZXhjZXJwdCxcbiAgY29tbWVudENvdW50LFxuICBkYXRlLFxufTogRXhjZXJwdFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPEJveCBzeD17eyBtdDogNCwgbWw6IDMgfX0+XG4gICAgICA8RGF0ZSBkYXRlPXtkYXRlfSAvPlxuICAgICAgPFRpdGxlIHRvPXtzbHVnfT57dGl0bGV9PC9UaXRsZT5cbiAgICAgIHtleGNlcnB0ICYmIDxCb2R5PntleGNlcnB0fTwvQm9keT59XG4gICAgICB7Y29tbWVudENvdW50ICYmIGBjb21tZW50czogJHtjb21tZW50Q291bnR9YH1cbiAgICA8L0JveD5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj57LyogPFR5cG9ncmFwaHkgdmFyaWFudD1cImgyXCI+V2VsY29tZSB0byBSZW1peDwvVHlwb2dyYXBoeT4gKi99PC9kaXY+XG4gICk7XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgeyd2ZXJzaW9uJzonM2JhYjU3NWQnLCdlbnRyeSc6eydtb2R1bGUnOicvYnVpbGQvZW50cnkuY2xpZW50LTVJTzJMVjVXLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1LM0pSTVRUSi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLU1aTk02NkxOLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstQzJPSExLWVQuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay01VEZRM1pZUy5qcyddfSwncm91dGVzJzp7J3Jvb3QnOnsnaWQnOidyb290JywncGFyZW50SWQnOnVuZGVmaW5lZCwncGF0aCc6JycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3Jvb3QtMzRIUkFST0guanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTZEU09HUDdOLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUVdXUVlBRDcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1DN09NR1lBNC5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5Jzp0cnVlLCdoYXNFcnJvckJvdW5kYXJ5Jzp0cnVlfSwncm91dGVzL2Fib3V0L2luZGV4Jzp7J2lkJzoncm91dGVzL2Fib3V0L2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J2Fib3V0JywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hYm91dC9pbmRleC1ZU1BPSTU3VC5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2NvbnRhY3QvaW5kZXgnOnsnaWQnOidyb3V0ZXMvY29udGFjdC9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidjb250YWN0JywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9jb250YWN0L2luZGV4LU5OMzY2UkNTLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvaW5kZXgtT08yUFhJQ0UuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9wb3N0cy8kc2x1Zyc6eydpZCc6J3JvdXRlcy9wb3N0cy8kc2x1ZycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidwb3N0cy86c2x1ZycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9wb3N0cy8kc2x1Zy1XTFRFNkJFMi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstQ0dPRlg1N1MuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1LU1Q2TUlKTS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVc0RERDR0pSLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstREw1TVhPM1YuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay02M1pFVExaNS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVdLWlVNT0xLLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNEpNVUJCNUQuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1ZQUhPTzdIRi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTNOV1NST1pLLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstWVhZTEhXRUUuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1XNVhFRjNIVC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTRMMzRSU0s0LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstQlhZVkNPTjcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1QTFkyQ1RLQy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVBHUkpNQlBPLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRlVRSzZUSUsuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1CRkpPV1dFUC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUhNV0NYUTNWLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTkFQWERYWEIuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1DVVBCQ0ROMy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVBWNkdISFVCLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstVDJNSFEzTUkuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay0zR0pNNUhXMi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUxISDNZQTJLLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstWVBQMjJTR08uanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1KU1RCTVBQTy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTZUSVg1MldBLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNzZaRUs1TzIuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1FWElDTTc1Ni5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTZSMkxTN1NGLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstM1JMUTZXUUcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1ZM0hTWFdZVS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUZFVUxKUU1TLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstWkVTU1AzWUEuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1MRjRQRVNCVS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUFaV1I2WEVCLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSFhXRlJYMkcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1PV05CSzc2Ti5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUNYRUtFMkI2LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRDNETUZPTkwuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1DTUQ2RUQyNi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUI1R0NRS0lULmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRkVSS0UzMksuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1SRDJMWFNaQy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVdZTDdMVkw3LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstVElJV0tTVFIuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1WVVNOSUdPTC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUhHS1FQVUU2LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUDJYQVJSQlguanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay01Q0VQVEZZRi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTQ2VUZRTFpHLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSFdPT0hBQlkuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1HWEZQUDVLSC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUJENlVIUkZKLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTFpIQVU0RFguanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1QWFI3TUVaVi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVJDWjRCTUxaLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstQk1CT1pGNzcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1CVFFDR1MyNy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLU5NTFdIMlE0LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstVjU0SEVaMkQuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1aSjJMRUZPWi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVUyT0lQV1lTLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstQ1hBVlNRM0MuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay0yUFU0Q0NNRi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTNMR09WUlJOLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUlBPSDJEUTYuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1LRU5SMkRNTi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLU8zVDVaMzNaLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstMjdTTjJPVU8uanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1OS1BRM0JJUi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUo2RllPNU5ZLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUTRKVkNDV1MuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1VVjMyRlVXRC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLURNVllQQVU0LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNUFTVFVCQk8uanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1GNFBPNEM0Sy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUxKTVBMS1FELmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstQ1hDWEFPSEouanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1NNU5YNVM2Vy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUhJQlU2UUpNLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSURXT1pFRjMuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1BSk5ESFVXNC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUFKWUpNTDNYLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstU0lKQ1FFT0MuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1INEIyUFNPNC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUk1MkU1WFdXLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstQ1cyNFdNQ1QuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1PUEdNTlE1SC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUZURjM3VEJTLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstVTdJTjVTRkcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1LTEpaWDRRUC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVdLNE9DNFVHLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTjVISUxWSVMuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay0yWEc0TjNVVi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTZBUDJKU01QLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUkpLVFNFTzIuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay0yQlBRTVc2WS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVMyUlBRSVNZLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTVZPWUYzNjMuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1EQUE3TVlDVS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUpSVkFSMjZILmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNTNLSEo2M0EuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1YSTM1U1RFNS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVBDM1JJREdXLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstU1JESkVDTFEuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1OUDNKWE5HNC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVU0NVBVVFpTLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstWkRaM1hMRzIuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1URFNRM1U2My5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTRLSjZKRUJNLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNUZSUkU1TVcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1RTU5URzNYWC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUwyQVlESkFMLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUFJZNDVYUVYuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1FMlBPMzdMSS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTJNU0s1R05NLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTFI0N09HV1EuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1MQjRWV0tBNy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLU8zT1VXUFNaLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstR0pITkVZR1YuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1aRFBHV1lUTC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUtRM1o1T1dMLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstMlAyT0tVN08uanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay0zUFpGRzdERi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUdXSExXV0JZLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRFRGRlRVTlIuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1MNlRTTTdKNi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLU00UkpGWkhYLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstVURHRzc2REMuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay0ySkpKVFpEUi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVU3NllKUUFaLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstWTVFTk1OQVguanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1LVk9SUVJKVS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVhHNkdMSUdLLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstVTRZSUVFSVYuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1PVU5TWFE3RS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVJGSEZWTVVTLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNUxYRFdNRVMuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1RTjZFSFdWQy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUM2T01TSjVMLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstMzRCWlpOSlAuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1HNk9JSjdJMi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVVFUE9SUzVTLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNEZSRjJHWkYuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1FR0UyVjVCMi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTZSWUpCS0dTLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstQVc0UURMN1kuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay01U001UlFFMy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUZVWE9JNVJELmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUkI3RDdIT0MuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay0zQUdQT09aRi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVdJVUFKWUZWLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstM0FXQ0xTQkkuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay01WVBDSEgySC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUk2UE80VkpaLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstM0FOWk1VSjIuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay0yM0M2N05NQy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVZUU1VJMldVLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUVBKWE1CT0IuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1EVUZBWDdYTi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUhWNVo1V0hWLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUEdXMlkzRk8uanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1JVURQSFZGSC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVNVNTMzNFBVLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNFpUTURVRjIuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1FQU40UkNKQy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUNMMldZT0JSLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSTVYNEpGR0YuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1QUFNBTVVTSi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLU5ZQzVBQU1CLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUzRSNkhYVkIuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay01VDJMTFlVRy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUkzQlhaN0pCLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRzVQTVhQSVcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1JTlo2TUtDVC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUlaTk0zVzVKLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstQVlaTkJSTVMuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1KWk9VNVpGUy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVdURFhaQTJILmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstQklYSkhKSFIuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay0zWklWM0lOWC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUhOWFVKTjVRLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstQTY2RURWWFEuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1RTkdNSUdKVi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVg1N09IN1dKLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUlNGNTJKR1AuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1RWERUSE9GRC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTVNMzZQRU9ILmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstMktUQllBWkIuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1IRTVDNkFBRy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLURYU1NVQ09FLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstVTZIV0JJWVEuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1GU1lKVVJHUS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUFVSUFJS1E2LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstWDRUN1pZTVouanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1TWVFWQ0lOSC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTNQV0JYV01ULmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstMlpXV0IyRTIuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1RNVNHWFZBRi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUIzQTVMUFJJLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstM0ZPVlNYSlUuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1WNDVFM0xPTi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVZLUktJUDVWLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstVVFKSTVMSlUuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1TU0pUV09JTy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUFWVU1QNlJSLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTlNJSU81SU0uanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1UQ01FNFpGUy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVRZREpaSEtGLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRFdRR1Q3WlQuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1QWFZITjVBSy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUdIVUVGS1BaLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstR08yVEVXVU0uanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay03RVJJVTRYMi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVZOUFBWRk0yLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNTJRWDdINlcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1JMjZYVFg3WC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUs3NDNURlRZLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUEg3Szc3QTIuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1BRUZYM01BTy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTdDUUxVNVBZLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstQjU0MjJBSTcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1PNDRETU0zRS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVpKRVMyRzVVLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNjVYRjRDWEkuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1GT01JRlRQQS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLURINERITzZOLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTlFYTzMyRzMuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1WRVdQQVpFSS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUdSU0FBM0o3LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstVFVYNkRQNzQuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1KUVBLNFRVVC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVZZNkhVS0tWLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstV01FREdaSzMuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1DWkpTWU4yNC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTZFSE1ONDZPLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTFhaWEJRWlYuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1TQUJCQTZCVi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVVKNzMzQkgzLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSlNLUVMzNlguanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay01WlNaWVBJUi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVA3TFVISVIyLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstWUFPMzRNWkQuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1GUEJYVUVBQi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVVKVFAzRk5SLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSFZUN1E2N1kuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1QNUg2T0lNUS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUVOWlFVUUVGLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstR1U2RkxMTk0uanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1QTzZCSEpZUC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUM1QkFVS0pQLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTzRKR0dXQlcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay00VzNVSk1WRy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLU43SFlYQVNVLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstT1RFVERJSjcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1CRkQ0TFFBTi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUc1VU1aUTdLLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstVk0zM0FRV0ouanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1QSlRYMzdaUy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLU1CRVRBU0o0LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTkQ0STdPSVUuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1FTjY2VzY3Vi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVVYWVJZTkdPLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstR01OTE9IVU8uanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay02S0lBSUZOUS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLU82M1hFTUdWLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstU09BSERHWTIuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1QU0JOSFVCTC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUpZVTNQNElILmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstV0lCT1NMNEouanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1SWkgzSUQ1Ny5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVpTRU9ZWDJLLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstWlhQV1ZXUlouanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1YUkVZQkNTRS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUtEWlBNSElPLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstS0Y3QU5KTjUuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1LTDczVExPTi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVVNWE1PVk5ZLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTEhJR1paSDcuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9wb3N0cy9pbmRleCc6eydpZCc6J3JvdXRlcy9wb3N0cy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidwb3N0cycsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvcG9zdHMvaW5kZXgtVzVKVVhFQ1cuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUNHT0ZYNTdTLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstS1NUNk1JSk0uanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1XNEREQ0dKUi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLURMNU1YTzNWLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNjNaRVRMWjUuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1XS1pVTU9MSy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTRKTVVCQjVELmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstWUFIT083SEYuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay0zTldTUk9aSy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVlYWUxIV0VFLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstVzVYRUYzSFQuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay00TDM0UlNLNC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUJYWVZDT043LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUExZMkNUS0MuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1QR1JKTUJQTy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUZVUUs2VElLLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstQkZKT1dXRVAuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1ITVdDWFEzVi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLU5BUFhEWFhCLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstQ1VQQkNETjMuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1QVjZHSEhVQi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVQyTUhRM01JLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstM0dKTTVIVzIuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1MSEgzWUEySy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVlQUDIyU0dPLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSlNUQk1QUE8uanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay02VElYNTJXQS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTc2WkVLNU8yLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRVhJQ003NTYuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay02UjJMUzdTRi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTNSTFE2V1FHLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstWTNIU1hXWVUuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1GRVVMSlFNUy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVpFU1NQM1lBLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTEY0UEVTQlUuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1BWldSNlhFQi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUhYV0ZSWDJHLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstT1dOQks3Nk4uanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1DWEVLRTJCNi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUQzRE1GT05MLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstQ01ENkVEMjYuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1CNUdDUUtJVC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUZFUktFMzJLLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUkQyTFhTWkMuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1XWUw3TFZMNy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVRJSVdLU1RSLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstVlVTTklHT0wuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1IR0tRUFVFNi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVAyWEFSUkJYLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNUNFUFRGWUYuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay00NlVGUUxaRy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUhXT09IQUJZLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstR1hGUFA1S0guanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1CRDZVSFJGSi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUxaSEFVNERYLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUFhSN01FWlYuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1SQ1o0Qk1MWi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUJNQk9aRjc3LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstQlRRQ0dTMjcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1OTUxXSDJRNC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVY1NEhFWjJELmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstWkoyTEVGT1ouanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1VMk9JUFdZUy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUNYQVZTUTNDLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstMlBVNENDTUYuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay0zTEdPVlJSTi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVJQT0gyRFE2LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstS0VOUjJETU4uanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1PM1Q1WjMzWi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTI3U04yT1VPLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTktQUTNCSVIuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1KNkZZTzVOWS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVE0SlZDQ1dTLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstVVYzMkZVV0QuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1ETVZZUEFVNC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTVBU1RVQkJPLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRjRQTzRDNEsuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1MSk1QTEtRRC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUNYQ1hBT0hKLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTTVOWDVTNlcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1ISUJVNlFKTS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUlEV09aRUYzLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstQUpOREhVVzQuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1BSllKTUwzWC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVNJSkNRRU9DLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSDRCMlBTTzQuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1JNTJFNVhXVy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUNXMjRXTUNULmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstT1BHTU5RNUguanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1GVEYzN1RCUy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVU3SU41U0ZHLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstS0xKWlg0UVAuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1XSzRPQzRVRy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLU41SElMVklTLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstMlhHNE4zVVYuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay02QVAySlNNUC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVJKS1RTRU8yLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstMkJQUU1XNlkuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1TMlJQUUlTWS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLU1WT1lGMzYzLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstREFBN01ZQ1UuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1KUlZBUjI2SC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTUzS0hKNjNBLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstWEkzNVNURTUuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1QQzNSSURHVy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVNSREpFQ0xRLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTlAzSlhORzQuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1VNDVQVVRaUy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVpEWjNYTEcyLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstVERTUTNVNjMuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay00S0o2SkVCTS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTVGUlJFNU1XLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUU1OVEczWFguanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1MMkFZREpBTC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVBSWTQ1WFFWLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRTJQTzM3TEkuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay0yTVNLNUdOTS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUxSNDdPR1dRLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTEI0VldLQTcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1PM09VV1BTWi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUdKSE5FWUdWLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstWkRQR1dZVEwuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1LUTNaNU9XTC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTJQMk9LVTdPLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstM1BaRkc3REYuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1HV0hMV1dCWS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLURURkZUVU5SLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTDZUU003SjYuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1NNFJKRlpIWC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVVER0c3NkRDLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstMkpKSlRaRFIuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1VNzZZSlFBWi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVk1RU5NTkFYLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstS1ZPUlFSSlUuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1YRzZHTElHSy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVU0WUlFRUlWLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstT1VOU1hRN0UuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1SRkhGVk1VUy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTVMWERXTUVTLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUU42RUhXVkMuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1DNk9NU0o1TC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTM0QlpaTkpQLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRzZPSUo3STIuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1VRVBPUlM1Uy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTRGUkYyR1pGLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRUdFMlY1QjIuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay02UllKQktHUy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUFXNFFETDdZLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNVNNNVJRRTMuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1GVVhPSTVSRC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVJCN0Q3SE9DLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstM0FHUE9PWkYuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1XSVVBSllGVi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTNBV0NMU0JJLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNVlQQ0hIMkguanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1JNlBPNFZKWi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTNBTlpNVUoyLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstMjNDNjdOTUMuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1WVFNVSTJXVS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVFQSlhNQk9CLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRFVGQVg3WE4uanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1IVjVaNVdIVi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVBHVzJZM0ZPLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSVVEUEhWRkguanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1TVTUzMzRQVS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTRaVE1EVUYyLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRUFONFJDSkMuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1DTDJXWU9CUi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUk1WDRKRkdGLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUFBTQU1VU0ouanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1OWUM1QUFNQi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVM0UjZIWFZCLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNVQyTExZVUcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1JM0JYWjdKQi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUc1UE1YUElXLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSU5aNk1LQ1QuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1JWk5NM1c1Si5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUFZWk5CUk1TLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSlpPVTVaRlMuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1XVERYWkEySC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUJJWEpISkhSLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstM1pJVjNJTlguanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1ITlhVSk41US5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUE2NkVEVlhRLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUU5HTUlHSlYuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1YNTdPSDdXSi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVJTRjUySkdQLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUVhEVEhPRkQuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay01TTM2UEVPSC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTJLVEJZQVpCLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSEU1QzZBQUcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1EWFNTVUNPRS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVU2SFdCSVlRLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRlNZSlVSR1EuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1BVUlBSUtRNi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVg0VDdaWU1aLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstU1lRVkNJTkguanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay0zUFdCWFdNVC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTJaV1dCMkUyLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUTVTR1hWQUYuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1CM0E1TFBSSS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTNGT1ZTWEpVLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstVjQ1RTNMT04uanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1WS1JLSVA1Vi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVVRSkk1TEpVLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstU1NKVFdPSU8uanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1BVlVNUDZSUi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLU5TSUlPNUlNLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstVENNRTRaRlMuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1UWURKWkhLRi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLURXUUdUN1pULmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUFhWSE41QUsuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1HSFVFRktQWi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUdPMlRFV1VNLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstN0VSSVU0WDIuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1WTlBQVkZNMi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTUyUVg3SDZXLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSTI2WFRYN1guanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1LNzQzVEZUWS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVBIN0s3N0EyLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstQUVGWDNNQU8uanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay03Q1FMVTVQWS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUI1NDIyQUk3LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTzQ0RE1NM0UuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1aSkVTMkc1VS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTY1WEY0Q1hJLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRk9NSUZUUEEuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1ESDRESE82Ti5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLU5RWE8zMkczLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstVkVXUEFaRUkuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1HUlNBQTNKNy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVRVWDZEUDc0LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSlFQSzRUVVQuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1WWTZIVUtLVi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVdNRURHWkszLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstQ1pKU1lOMjQuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay02RUhNTjQ2Ty5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUxYWlhCUVpWLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstU0FCQkE2QlYuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1VSjczM0JIMy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUpTS1FTMzZYLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNVpTWllQSVIuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1QN0xVSElSMi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVlBTzM0TVpELmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRlBCWFVFQUIuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1VSlRQM0ZOUi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUhWVDdRNjdZLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUDVINk9JTVEuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1FTlpRVVFFRi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUdVNkZMTE5NLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUE82QkhKWVAuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1DNUJBVUtKUC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLU80SkdHV0JXLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNFczVUpNVkcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1ON0hZWEFTVS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLU9URVRESUo3LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstQkZENExRQU4uanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1HNVVNWlE3Sy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVZNMzNBUVdKLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUEpUWDM3WlMuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1NQkVUQVNKNC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLU5ENEk3T0lVLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRU42Nlc2N1YuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1VWFlSWU5HTy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUdNTkxPSFVPLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNktJQUlGTlEuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1PNjNYRU1HVi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVNPQUhER1kyLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUFNCTkhVQkwuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1KWVUzUDRJSC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVdJQk9TTDRKLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUlpIM0lENTcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1aU0VPWVgySy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVpYUFdWV1JaLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstWFJFWUJDU0UuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1LRFpQTUhJTy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUtGN0FOSk41LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstS0w3M1RMT04uanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1VTVhNT1ZOWS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUxISUdaWkg3LmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfX0sJ3VybCc6Jy9idWls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QUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMscUNBQW9DLGFBQVksTUFBSyxhQUFZLE1BQUssb0JBQW1CLE9BQU0sb0JBQW1CLFNBQU8sc0JBQXFCLEVBQUMsTUFBSyxzQkFBcUIsWUFBVyxRQUFPLFFBQU8sU0FBUSxTQUFRLE1BQUssaUJBQWdCLFFBQVUsVUFBUyx5Q0FBd0MsV0FBVSxDQUFDLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLHFDQUFvQyxhQUFZLE9BQU0sYUFBWSxNQUFLLG9CQUFtQixPQUFNLG9CQUFtQixXQUFRLE9BQU07OztBckNTMWlxQixJQUFNLFFBQVEsRUFBRSxRQUFRO0FBQ3hCLElBQU0sU0FBUztBQUFBLEVBQ3BCLFFBQVE7QUFBQSxJQUNOLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosd0JBQXdCO0FBQUEsSUFDcEIsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWixzQkFBc0I7QUFBQSxJQUNsQixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLHNCQUFzQjtBQUFBLElBQ2xCLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosc0JBQXNCO0FBQUEsSUFDbEIsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWixnQkFBZ0I7QUFBQSxJQUNaLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBOyIsCiAgIm5hbWVzIjogW10KfQo=
