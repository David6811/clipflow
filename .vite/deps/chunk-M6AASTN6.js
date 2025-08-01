import {
  InitColorSchemeScript,
  ThemeProvider_default,
  createBreakpoints,
  createCssVarsProvider,
  createSpacing,
  createTheme,
  createThemeWithVars,
  createTypography,
  deepmerge,
  defaultTheme_default,
  identifier_default,
  require_jsx_runtime,
  require_prop_types,
  styleFunctionSx_default,
  useThemeProps
} from "./chunk-PMTJJHNK.js";
import {
  __toESM,
  require_react
} from "./chunk-DDNM7ENY.js";

// node_modules/@mui/material/esm/styles/adaptV4Theme.js
function adaptV4Theme(inputTheme) {
  if (true) {
    console.warn(["MUI: adaptV4Theme() is deprecated.", "Follow the upgrade guide on https://mui.com/r/migration-v4#theme."].join("\n"));
  }
  const {
    defaultProps = {},
    mixins = {},
    overrides = {},
    palette = {},
    props = {},
    styleOverrides = {},
    ...other
  } = inputTheme;
  const theme = {
    ...other,
    components: {}
  };
  Object.keys(defaultProps).forEach((component) => {
    const componentValue = theme.components[component] || {};
    componentValue.defaultProps = defaultProps[component];
    theme.components[component] = componentValue;
  });
  Object.keys(props).forEach((component) => {
    const componentValue = theme.components[component] || {};
    componentValue.defaultProps = props[component];
    theme.components[component] = componentValue;
  });
  Object.keys(styleOverrides).forEach((component) => {
    const componentValue = theme.components[component] || {};
    componentValue.styleOverrides = styleOverrides[component];
    theme.components[component] = componentValue;
  });
  Object.keys(overrides).forEach((component) => {
    const componentValue = theme.components[component] || {};
    componentValue.styleOverrides = overrides[component];
    theme.components[component] = componentValue;
  });
  theme.spacing = createSpacing(inputTheme.spacing);
  const breakpoints = createBreakpoints(inputTheme.breakpoints || {});
  const spacing = theme.spacing;
  theme.mixins = {
    gutters: (styles = {}) => {
      return {
        paddingLeft: spacing(2),
        paddingRight: spacing(2),
        ...styles,
        [breakpoints.up("sm")]: {
          paddingLeft: spacing(3),
          paddingRight: spacing(3),
          ...styles[breakpoints.up("sm")]
        }
      };
    },
    ...mixins
  };
  const {
    type: typeInput,
    mode: modeInput,
    ...paletteRest
  } = palette;
  const finalMode = modeInput || typeInput || "light";
  theme.palette = {
    // theme.palette.text.hint
    text: {
      hint: finalMode === "dark" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.38)"
    },
    mode: finalMode,
    type: finalMode,
    ...paletteRest
  };
  return theme;
}

// node_modules/@mui/material/esm/styles/createMuiStrictModeTheme.js
function createMuiStrictModeTheme(options, ...args) {
  return createTheme(deepmerge({
    unstable_strictMode: true
  }, options), ...args);
}

// node_modules/@mui/material/esm/styles/createStyles.js
var warnedOnce = false;
function createStyles(styles) {
  if (!warnedOnce) {
    console.warn(["MUI: createStyles from @mui/material/styles is deprecated.", "Please use @mui/styles/createStyles"].join("\n"));
    warnedOnce = true;
  }
  return styles;
}

// node_modules/@mui/material/esm/styles/cssUtils.js
function isUnitless(value) {
  return String(parseFloat(value)).length === String(value).length;
}
function getUnit(input) {
  return String(input).match(/[\d.\-+]*\s*(.*)/)[1] || "";
}
function toUnitless(length) {
  return parseFloat(length);
}
function convertLength(baseFontSize) {
  return (length, toUnit) => {
    const fromUnit = getUnit(length);
    if (fromUnit === toUnit) {
      return length;
    }
    let pxLength = toUnitless(length);
    if (fromUnit !== "px") {
      if (fromUnit === "em") {
        pxLength = toUnitless(length) * toUnitless(baseFontSize);
      } else if (fromUnit === "rem") {
        pxLength = toUnitless(length) * toUnitless(baseFontSize);
      }
    }
    let outputLength = pxLength;
    if (toUnit !== "px") {
      if (toUnit === "em") {
        outputLength = pxLength / toUnitless(baseFontSize);
      } else if (toUnit === "rem") {
        outputLength = pxLength / toUnitless(baseFontSize);
      } else {
        return length;
      }
    }
    return parseFloat(outputLength.toFixed(5)) + toUnit;
  };
}
function alignProperty({
  size,
  grid
}) {
  const sizeBelow = size - size % grid;
  const sizeAbove = sizeBelow + grid;
  return size - sizeBelow < sizeAbove - size ? sizeBelow : sizeAbove;
}
function fontGrid({
  lineHeight,
  pixels,
  htmlFontSize
}) {
  return pixels / (lineHeight * htmlFontSize);
}
function responsiveProperty({
  cssProperty,
  min,
  max,
  unit = "rem",
  breakpoints = [600, 900, 1200],
  transform = null
}) {
  const output = {
    [cssProperty]: `${min}${unit}`
  };
  const factor = (max - min) / breakpoints[breakpoints.length - 1];
  breakpoints.forEach((breakpoint) => {
    let value = min + factor * breakpoint;
    if (transform !== null) {
      value = transform(value);
    }
    output[`@media (min-width:${breakpoint}px)`] = {
      [cssProperty]: `${Math.round(value * 1e4) / 1e4}${unit}`
    };
  });
  return output;
}

// node_modules/@mui/material/esm/styles/responsiveFontSizes.js
function responsiveFontSizes(themeInput, options = {}) {
  const {
    breakpoints = ["sm", "md", "lg"],
    disableAlign = false,
    factor = 2,
    variants = ["h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "caption", "button", "overline"]
  } = options;
  const theme = {
    ...themeInput
  };
  theme.typography = {
    ...theme.typography
  };
  const typography = theme.typography;
  const convert = convertLength(typography.htmlFontSize);
  const breakpointValues = breakpoints.map((x) => theme.breakpoints.values[x]);
  variants.forEach((variant) => {
    const style = typography[variant];
    if (!style) {
      return;
    }
    const remFontSize = parseFloat(convert(style.fontSize, "rem"));
    if (remFontSize <= 1) {
      return;
    }
    const maxFontSize = remFontSize;
    const minFontSize = 1 + (maxFontSize - 1) / factor;
    let {
      lineHeight
    } = style;
    if (!isUnitless(lineHeight) && !disableAlign) {
      throw new Error(true ? "MUI: Unsupported non-unitless line height with grid alignment.\nUse unitless line heights instead." : formatMuiErrorMessage(6));
    }
    if (!isUnitless(lineHeight)) {
      lineHeight = parseFloat(convert(lineHeight, "rem")) / parseFloat(remFontSize);
    }
    let transform = null;
    if (!disableAlign) {
      transform = (value) => alignProperty({
        size: value,
        grid: fontGrid({
          pixels: 4,
          lineHeight,
          htmlFontSize: typography.htmlFontSize
        })
      });
    }
    typography[variant] = {
      ...style,
      ...responsiveProperty({
        cssProperty: "fontSize",
        min: minFontSize,
        max: maxFontSize,
        unit: "rem",
        breakpoints: breakpointValues,
        transform
      })
    };
  });
  return theme;
}

// node_modules/@mui/material/esm/styles/useThemeProps.js
function useThemeProps2({
  props,
  name
}) {
  return useThemeProps({
    props,
    name,
    defaultTheme: defaultTheme_default,
    themeId: identifier_default
  });
}

// node_modules/@mui/material/esm/styles/ThemeProvider.js
var React4 = __toESM(require_react(), 1);

// node_modules/@mui/material/esm/styles/ThemeProviderNoVars.js
var React = __toESM(require_react(), 1);
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
function ThemeProviderNoVars({
  theme: themeInput,
  ...props
}) {
  const scopedTheme = identifier_default in themeInput ? themeInput[identifier_default] : void 0;
  return (0, import_jsx_runtime.jsx)(ThemeProvider_default, {
    ...props,
    themeId: scopedTheme ? identifier_default : void 0,
    theme: scopedTheme || themeInput
  });
}

// node_modules/@mui/material/esm/styles/ThemeProviderWithVars.js
var React3 = __toESM(require_react(), 1);

// node_modules/@mui/material/esm/InitColorSchemeScript/InitColorSchemeScript.js
var React2 = __toESM(require_react(), 1);
var import_prop_types = __toESM(require_prop_types(), 1);
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
var defaultConfig = {
  attribute: "data-mui-color-scheme",
  colorSchemeStorageKey: "mui-color-scheme",
  defaultLightColorScheme: "light",
  defaultDarkColorScheme: "dark",
  modeStorageKey: "mui-mode"
};
function InitColorSchemeScript2(props) {
  const {
    defaultMode = "system",
    defaultLightColorScheme = defaultConfig.defaultLightColorScheme,
    defaultDarkColorScheme = defaultConfig.defaultDarkColorScheme,
    modeStorageKey = defaultConfig.modeStorageKey,
    colorSchemeStorageKey = defaultConfig.colorSchemeStorageKey,
    attribute: initialAttribute = defaultConfig.attribute,
    colorSchemeNode = "document.documentElement",
    nonce
  } = props;
  return (0, import_jsx_runtime2.jsx)(InitColorSchemeScript, {
    defaultMode,
    defaultLightColorScheme,
    defaultDarkColorScheme,
    modeStorageKey,
    colorSchemeStorageKey,
    attribute: initialAttribute,
    colorSchemeNode,
    nonce
  });
}
true ? InitColorSchemeScript2.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * DOM attribute for applying a color scheme.
   * @default 'data-mui-color-scheme'
   * @example '.mode-%s' // for class based color scheme
   * @example '[data-mode-%s]' // for data-attribute without '='
   */
  attribute: import_prop_types.default.string,
  /**
   * The node (provided as string) used to attach the color-scheme attribute.
   * @default 'document.documentElement'
   */
  colorSchemeNode: import_prop_types.default.string,
  /**
   * localStorage key used to store `colorScheme`.
   * @default 'mui-color-scheme'
   */
  colorSchemeStorageKey: import_prop_types.default.string,
  /**
   * The default color scheme to be used in dark mode.
   * @default 'dark'
   */
  defaultDarkColorScheme: import_prop_types.default.string,
  /**
   * The default color scheme to be used in light mode.
   * @default 'light'
   */
  defaultLightColorScheme: import_prop_types.default.string,
  /**
   * The default mode when the storage is empty (user's first visit).
   * @default 'system'
   */
  defaultMode: import_prop_types.default.oneOf(["dark", "light", "system"]),
  /**
   * localStorage key used to store `mode`.
   * @default 'mui-mode'
   */
  modeStorageKey: import_prop_types.default.string,
  /**
   * Nonce string to pass to the inline script for CSP headers.
   */
  nonce: import_prop_types.default.string
} : void 0;
var InitColorSchemeScript_default = InitColorSchemeScript2;

// node_modules/@mui/material/esm/styles/ThemeProviderWithVars.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
var {
  CssVarsProvider: InternalCssVarsProvider,
  useColorScheme,
  getInitColorSchemeScript: deprecatedGetInitColorSchemeScript
} = createCssVarsProvider({
  themeId: identifier_default,
  // @ts-ignore ignore module augmentation tests
  theme: () => createTheme({
    cssVariables: true
  }),
  colorSchemeStorageKey: defaultConfig.colorSchemeStorageKey,
  modeStorageKey: defaultConfig.modeStorageKey,
  defaultColorScheme: {
    light: defaultConfig.defaultLightColorScheme,
    dark: defaultConfig.defaultDarkColorScheme
  },
  resolveTheme: (theme) => {
    const newTheme = {
      ...theme,
      typography: createTypography(theme.palette, theme.typography)
    };
    newTheme.unstable_sx = function sx(props) {
      return styleFunctionSx_default({
        sx: props,
        theme: this
      });
    };
    return newTheme;
  }
});
var warnedOnce2 = false;
function Experimental_CssVarsProvider(props) {
  if (true) {
    if (!warnedOnce2) {
      console.warn(["MUI: The Experimental_CssVarsProvider component has been ported into ThemeProvider.", "", "You should use `import { ThemeProvider } from '@mui/material/styles'` instead.", "For more details, check out https://mui.com/material-ui/customization/css-theme-variables/usage/"].join("\n"));
      warnedOnce2 = true;
    }
  }
  return (0, import_jsx_runtime3.jsx)(InternalCssVarsProvider, {
    ...props
  });
}
var warnedInitScriptOnce = false;
var getInitColorSchemeScript = (params) => {
  if (!warnedInitScriptOnce) {
    console.warn(["MUI: The getInitColorSchemeScript function has been deprecated.", "", "You should use `import InitColorSchemeScript from '@mui/material/InitColorSchemeScript'`", "and replace the function call with `<InitColorSchemeScript />` instead."].join("\n"));
    warnedInitScriptOnce = true;
  }
  return deprecatedGetInitColorSchemeScript(params);
};
var CssVarsProvider = InternalCssVarsProvider;

// node_modules/@mui/material/esm/styles/ThemeProvider.js
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
function ThemeProvider({
  theme,
  ...props
}) {
  const noVarsTheme = React4.useMemo(() => {
    if (typeof theme === "function") {
      return theme;
    }
    const muiTheme = identifier_default in theme ? theme[identifier_default] : theme;
    if (!("colorSchemes" in muiTheme)) {
      if (!("vars" in muiTheme)) {
        return {
          ...theme,
          vars: null
        };
      }
      return theme;
    }
    return null;
  }, [theme]);
  if (noVarsTheme) {
    return (0, import_jsx_runtime4.jsx)(ThemeProviderNoVars, {
      theme: noVarsTheme,
      ...props
    });
  }
  return (0, import_jsx_runtime4.jsx)(CssVarsProvider, {
    theme,
    ...props
  });
}

// node_modules/@mui/material/esm/styles/makeStyles.js
function makeStyles() {
  throw new Error(true ? "MUI: makeStyles is no longer exported from @mui/material/styles.\nYou have to import it from @mui/styles.\nSee https://mui.com/r/migration-v4/#mui-material-styles for more details." : formatMuiErrorMessage(14));
}

// node_modules/@mui/material/esm/styles/withStyles.js
function withStyles() {
  throw new Error(true ? "MUI: withStyles is no longer exported from @mui/material/styles.\nYou have to import it from @mui/styles.\nSee https://mui.com/r/migration-v4/#mui-material-styles for more details." : formatMuiErrorMessage(15));
}

// node_modules/@mui/material/esm/styles/withTheme.js
function withTheme() {
  throw new Error(true ? "MUI: withTheme is no longer exported from @mui/material/styles.\nYou have to import it from @mui/styles.\nSee https://mui.com/r/migration-v4/#mui-material-styles for more details." : formatMuiErrorMessage(16));
}

// node_modules/@mui/material/esm/styles/experimental_extendTheme.js
var warnedOnce3 = false;
function deprecatedExtendTheme(...args) {
  if (!warnedOnce3) {
    console.warn(["MUI: The `experimental_extendTheme` has been stabilized.", "", "You should use `import { extendTheme } from '@mui/material/styles'`"].join("\n"));
    warnedOnce3 = true;
  }
  return createThemeWithVars(...args);
}

// node_modules/@mui/material/esm/styles/index.js
function experimental_sx() {
  throw new Error(true ? "MUI: The `experimental_sx` has been moved to `theme.unstable_sx`.For more details, see https://github.com/mui/material-ui/pull/35150." : formatMuiErrorMessage(19));
}

export {
  adaptV4Theme,
  createMuiStrictModeTheme,
  createStyles,
  getUnit,
  toUnitless,
  responsiveFontSizes,
  useThemeProps2 as useThemeProps,
  InitColorSchemeScript_default,
  useColorScheme,
  Experimental_CssVarsProvider,
  getInitColorSchemeScript,
  CssVarsProvider,
  ThemeProvider,
  makeStyles,
  withStyles,
  withTheme,
  deprecatedExtendTheme,
  experimental_sx
};
//# sourceMappingURL=chunk-M6AASTN6.js.map
