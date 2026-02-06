/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/admin/CategoryPicker.js":
/*!************************************************!*\
  !*** ./src/components/admin/CategoryPicker.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);

/**
 * WordPress dependencies
 */



const CategoryPicker = ({
  selectedCats,
  onSelected
}) => {
  const categories = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => select('core').getEntityRecords('taxonomy', 'category', {
    per_page: 100
  }));
  const isLoading = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
    return select('core/data').isResolving('core', 'getEntityRecords', ['taxonomy', 'category', {
      per_page: 100
    }]);
  });
  if (isLoading) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Loading categories…', 'jalw_i18n'));
  }
  if (categories === null) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "No categories found");
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    hideLabelFromVision: true,
    multiple: true,
    options: categories.map(({
      id,
      name
    }) => ({
      label: name,
      value: id
    })),
    onChange: selected => {
      onSelected(selected);
    },
    style: {
      minWidth: '250px',
      height: '100px'
    },
    value: selectedCats
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoryPicker);

/***/ }),

/***/ "./src/components/frontend/JsArchiveList.js":
/*!**************************************************!*\
  !*** ./src/components/frontend/JsArchiveList.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_displayers_DisplayYear__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/displayers/DisplayYear */ "./src/components/frontend/components/displayers/DisplayYear.js");
/* harmony import */ var _context_ConfigContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./context/ConfigContext */ "./src/components/frontend/context/ConfigContext.tsx");
/* harmony import */ var _components_ShowOlderYears__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/ShowOlderYears */ "./src/components/frontend/components/ShowOlderYears.js");
/* harmony import */ var _hooks_useApi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hooks/useApi */ "./src/components/frontend/hooks/useApi.js");
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Loading */ "./src/components/frontend/components/Loading.js");

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */





const JsArchiveList = () => {
  const {
    config
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_ConfigContext__WEBPACK_IMPORTED_MODULE_4__.ConfigContext);
  const [loaded, setLoaded] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    loading,
    data: apiData,
    error,
    apiClient: loadYears
  } = (0,_hooks_useApi__WEBPACK_IMPORTED_MODULE_6__["default"])('/jalw/v1/archive');
  const yearsToShow = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    const loadedYears = apiData ? apiData.years : [];
    if (config.hide_from_year && !isNaN(config.hide_from_year)) {
      return {
        current: loadedYears.filter(yearObj => yearObj.year >= config.hide_from_year),
        olders: loadedYears.filter(yearObj => yearObj.year < config.hide_from_year)
      };
    }
    return {
      current: loadedYears,
      olders: []
    };
  }, [apiData, config]);

  /* eslint-disable react-hooks/exhaustive-deps */
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    loadYears(config);
  }, []);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!loaded && (error || loaded)) {
      setLoaded(true);
    }
  }, [loaded, error]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "js-archive-list dynamic"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, config.title), loading ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Loading__WEBPACK_IMPORTED_MODULE_7__["default"], {
    loading: loading
  }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Loading…', 'jalw')) : '', apiData && apiData.years ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    className: "jaw_widget"
  }, yearsToShow.current.length === 0 ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('There are no post to show.', 'jalw')) : yearsToShow.current.map(yearObj => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_displayers_DisplayYear__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: yearObj.year,
    yearObj: yearObj
  })), yearsToShow.olders.length > 0 ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_ShowOlderYears__WEBPACK_IMPORTED_MODULE_5__["default"], {
    years: yearsToShow.olders
  }) : '') : '', (loaded || error) && !apiData ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Cannot load posts.', 'jalw') : '');
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (JsArchiveList);

/***/ }),

/***/ "./src/components/frontend/components/BulletWithSymbol.js":
/*!****************************************************************!*\
  !*** ./src/components/frontend/components/BulletWithSymbol.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_ConfigContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/ConfigContext */ "./src/components/frontend/context/ConfigContext.tsx");
/* harmony import */ var _hooks_useFrontend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useFrontend */ "./src/components/frontend/hooks/useFrontend.js");

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


const BulletWithSymbol = ({
  expanded,
  expandSubLevel,
  title,
  permalink,
  onToggle
}) => {
  const {
    config
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_ConfigContext__WEBPACK_IMPORTED_MODULE_2__.ConfigContext);
  const {
    expandSymbol,
    collapseSymbol
  } = (0,_hooks_useFrontend__WEBPACK_IMPORTED_MODULE_3__.useSymbol)(config.symbol);
  const expandedClass = expanded && expandSubLevel ? 'expanded' : '';
  const symbol = expanded ? collapseSymbol : expandSymbol;

  // Do not show the component if it's disabled in the options.
  if (config.symbol.toString() === '0') {
    return '';
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: permalink,
    title: title,
    className: `${expandedClass} jaw_symbol`,
    onClick: onToggle
  }, symbol);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BulletWithSymbol);

/***/ }),

/***/ "./src/components/frontend/components/ListWithAnimation.js":
/*!*****************************************************************!*\
  !*** ./src/components/frontend/components/ListWithAnimation.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BulletWithSymbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BulletWithSymbol */ "./src/components/frontend/components/BulletWithSymbol.js");
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Loading */ "./src/components/frontend/components/Loading.js");
/* harmony import */ var _context_ConfigContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/ConfigContext */ "./src/components/frontend/context/ConfigContext.tsx");

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



const ListWithAnimation = ({
  children,
  items,
  expand,
  initialExpand,
  link,
  loading,
  rootLink,
  showToggleSymbol,
  subListCustomClass
}) => {
  const {
    animationFunction
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_ConfigContext__WEBPACK_IMPORTED_MODULE_4__.ConfigContext);
  const listElement = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const [isExpanded, setIsExpanded] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(expand);
  const animateList = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    const archiveList = [...listElement.current.children].filter(ch => ch.nodeName.toLowerCase() === 'ul');
    if (archiveList.length > 0) animationFunction(archiveList[0]);
  }, [listElement, animationFunction]);
  const liClass = expand ? 'expanded' : '';
  const loopItems = Array.isArray(items) || !items ? items : [];
  const hasItems = loopItems && loopItems.length && loopItems.length > 0;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (listElement && !!initialExpand) {
      if (showToggleSymbol && listElement.current.children[0]) {
        listElement.current.children[0].click();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (expand !== isExpanded) {
      setIsExpanded(expand);
      animateList();
    }
  }, [expand, animateList, isExpanded]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    ref: listElement,
    className: liClass
  }, showToggleSymbol || items.length > 0 ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_BulletWithSymbol__WEBPACK_IMPORTED_MODULE_2__["default"], {
    expanded: isExpanded,
    expandSubLevel: rootLink.expand,
    title: rootLink.title,
    permalink: link.href,
    onToggle: rootLink.onClick
  }) : '', (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: link.href,
    title: link.title,
    onClick: link.onClick
  }, link.content, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Loading__WEBPACK_IMPORTED_MODULE_3__["default"], {
    loading: loading
  })), hasItems ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    className: subListCustomClass + ' jal-hide'
  }, loopItems.map((item, index) => children(item, index))) : '');
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListWithAnimation);

/***/ }),

/***/ "./src/components/frontend/components/Loading.js":
/*!*******************************************************!*\
  !*** ./src/components/frontend/components/Loading.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Loading = ({
  loading
}) => {
  if (loading) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "loading",
      role: "progressbar"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      x: "0",
      y: "0",
      version: "1.1",
      viewBox: "0 0 100 100",
      xmlSpace: "preserve"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      fill: "#000",
      d: "M73 50c0-12.7-10.3-23-23-23S27 37.3 27 50m3.9 0c0-10.5 8.5-19.1 19.1-19.1S69.1 39.5 69.1 50"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("animateTransform", {
      attributeName: "transform",
      attributeType: "XML",
      dur: "1s",
      from: "0 50 50",
      repeatCount: "indefinite",
      to: "360 50 50",
      type: "rotate"
    }))));
  }
  return '';
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loading);

/***/ }),

/***/ "./src/components/frontend/components/ShowOlderYears.js":
/*!**************************************************************!*\
  !*** ./src/components/frontend/components/ShowOlderYears.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _displayers_DisplayYear__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayers/DisplayYear */ "./src/components/frontend/components/displayers/DisplayYear.js");

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */

const ShowOlderYears = ({
  years
}) => {
  const [showYears, setShowYears] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const handleShowYears = evt => {
    evt.preventDefault();
    setShowYears(!showYears);
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, showYears ? years.map(yearObj => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_displayers_DisplayYear__WEBPACK_IMPORTED_MODULE_2__["default"], {
    yearObj: yearObj,
    key: yearObj.year
  })) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "#show",
    onClick: handleShowYears
  }, "Show Older Years")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShowOlderYears);

/***/ }),

/***/ "./src/components/frontend/components/displayers/DisplayDay.js":
/*!*********************************************************************!*\
  !*** ./src/components/frontend/components/displayers/DisplayDay.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DisplayPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DisplayPost */ "./src/components/frontend/components/displayers/DisplayPost.tsx");
/* harmony import */ var _ListWithAnimation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ListWithAnimation */ "./src/components/frontend/components/ListWithAnimation.js");

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


const DisplayDay = ({
  dayObj
}) => {
  const [expand, setExpand] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const loadPosts = async event => {
    event.preventDefault();
    setExpand(!expand);
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ListWithAnimation__WEBPACK_IMPORTED_MODULE_3__["default"], {
    items: dayObj.posts,
    link: {
      content: dayObj.title,
      href: "#",
      title: dayObj.title,
      onClick: loadPosts
    },
    expand: expand,
    initialExpand: dayObj.expand,
    loading: false,
    rootLink: {
      ...dayObj,
      title: dayObj.title,
      onClick: loadPosts
    },
    showToggleSymbol: true,
    subListCustomClass: "posts"
  }, item => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    key: item.ID
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_DisplayPost__WEBPACK_IMPORTED_MODULE_2__["default"], {
    post: item
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DisplayDay);

/***/ }),

/***/ "./src/components/frontend/components/displayers/DisplayMonth.js":
/*!***********************************************************************!*\
  !*** ./src/components/frontend/components/displayers/DisplayMonth.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_ConfigContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/ConfigContext */ "./src/components/frontend/context/ConfigContext.tsx");
/* harmony import */ var _hooks_useApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useApi */ "./src/components/frontend/hooks/useApi.js");
/* harmony import */ var _ListWithAnimation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ListWithAnimation */ "./src/components/frontend/components/ListWithAnimation.js");
/* harmony import */ var _DisplayPost__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DisplayPost */ "./src/components/frontend/components/displayers/DisplayPost.tsx");
/* harmony import */ var _DisplayDay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DisplayDay */ "./src/components/frontend/components/displayers/DisplayDay.js");
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/date */ "@wordpress/date");
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_date__WEBPACK_IMPORTED_MODULE_7__);

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */






const DisplayMonth = ({
  monthObj,
  year
}) => {
  const {
    config
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_ConfigContext__WEBPACK_IMPORTED_MODULE_2__.ConfigContext);
  const {
    loading,
    data: apiData,
    apiClient
  } = (0,_hooks_useApi__WEBPACK_IMPORTED_MODULE_3__["default"])(`/jalw/v1/archive/${year}/${monthObj.month}`);
  const [expand, setExpand] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const loadPosts = async event => {
    event.preventDefault();
    if (!apiData || !Array.isArray(apiData.posts)) {
      const dataWasLoaded = await apiClient(config);
      setExpand(dataWasLoaded);
    } else {
      setExpand(!expand);
    }
  };
  const handleLink = config.only_sym_link || !config.showpost ? () => true : loadPosts;
  let linkContent = monthObj.title;
  if (config.showcount === true) {
    linkContent = `${monthObj.title} (${monthObj.posts})`;
  }
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (expand && !loading && (!apiData || !Array.isArray(apiData.posts))) {
      apiClient(config);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expand]);
  const subListCustomClass = config.show_day_archive ? 'jawl_days' : 'jaw_posts';
  let items;
  if (apiData && apiData.posts) {
    items = config.show_day_archive ? groupPostsByDay(config, apiData.posts) : apiData.posts;
  } else {
    items = [];
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ListWithAnimation__WEBPACK_IMPORTED_MODULE_4__["default"], {
    items: items,
    link: {
      content: linkContent,
      href: monthObj.permalink,
      title: monthObj.title,
      onClick: handleLink
    },
    expand: expand,
    initialExpand: monthObj.expand,
    loading: loading,
    rootLink: {
      ...monthObj,
      onClick: loadPosts
    },
    showToggleSymbol: config.showpost,
    subListCustomClass: subListCustomClass
  }, item => config.show_day_archive ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_DisplayDay__WEBPACK_IMPORTED_MODULE_6__["default"], {
    key: item.ID,
    dayObj: item
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    key: item.ID
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_DisplayPost__WEBPACK_IMPORTED_MODULE_5__["default"], {
    post: item
  })));
};
const groupPostsByDay = (config, posts) => {
  if (!posts) return [];
  const groupedByDays = posts.reduce((acc, post) => {
    const day = (0,_wordpress_date__WEBPACK_IMPORTED_MODULE_7__.dateI18n)('d', post.post_date);
    if (!acc[day]) {
      acc[day] = {
        ID: day,
        title: day,
        permalink: '#',
        expand: config.expand === 'all',
        posts: [],
        onClick: () => false
      };
    }
    acc[day].posts.push(post);
    return acc;
  }, {});
  const sortedKeys = Object.keys(groupedByDays).sort((a, b) => a - b);
  const groupedAndSorted = {};
  sortedKeys.forEach(key => {
    groupedAndSorted[key] = groupedByDays[key];
  });
  return Object.values(groupedAndSorted);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DisplayMonth);

/***/ }),

/***/ "./src/components/frontend/components/displayers/DisplayYear.js":
/*!**********************************************************************!*\
  !*** ./src/components/frontend/components/displayers/DisplayYear.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_ConfigContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/ConfigContext */ "./src/components/frontend/context/ConfigContext.tsx");
/* harmony import */ var _DisplayMonth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DisplayMonth */ "./src/components/frontend/components/displayers/DisplayMonth.js");
/* harmony import */ var _hooks_useApi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useApi */ "./src/components/frontend/hooks/useApi.js");
/* harmony import */ var _ListWithAnimation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ListWithAnimation */ "./src/components/frontend/components/ListWithAnimation.js");

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */




const DisplayYear = ({
  yearObj
}) => {
  const {
    config
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_ConfigContext__WEBPACK_IMPORTED_MODULE_2__.ConfigContext);
  const {
    loading,
    data: apiData,
    apiClient
  } = (0,_hooks_useApi__WEBPACK_IMPORTED_MODULE_4__["default"])(`/jalw/v1/archive/${yearObj.year}`);
  const [expand, setExpand] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const loadMonths = async event => {
    event.preventDefault();
    if (!apiData || !Array.isArray(apiData.months)) {
      const dataWasLoaded = await apiClient(config);
      setExpand(dataWasLoaded);
    } else {
      setExpand(!expand);
    }
  };

  // If this option is enabled, then the year link will only expand.
  const handleLink = config.only_sym_link ? () => true : loadMonths;
  let linkContent = yearObj.year;
  if (config.showcount === true) {
    linkContent = `${yearObj.year} (${yearObj.posts})`;
  }
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (expand && !loading && (!apiData || !Array.isArray(apiData.months))) {
      apiClient(config);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expand]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ListWithAnimation__WEBPACK_IMPORTED_MODULE_5__["default"], {
    items: apiData ? apiData.months : [],
    link: {
      content: linkContent,
      href: yearObj.permalink,
      title: yearObj.title,
      onClick: handleLink
    },
    expand: expand,
    initialExpand: yearObj.expand,
    loading: loading,
    rootLink: {
      ...yearObj,
      onClick: loadMonths
    },
    showToggleSymbol: true,
    subListCustomClass: "jaw_months"
  }, item => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_DisplayMonth__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: yearObj.year + item.month,
    year: yearObj.year,
    monthObj: item
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DisplayYear);

/***/ }),

/***/ "./src/components/frontend/hooks/useAnimation.js":
/*!*******************************************************!*\
  !*** ./src/components/frontend/hooks/useAnimation.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useAnimation)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */

function useAnimation(effect) {
  const supportsRequestAnimation = typeof window.requestAnimationFrame === 'function';
  const fadeIn = (element, duration = 500) => {
    element.style.removeProperty('display');
    let display = window.getComputedStyle(element).display;
    if (display === 'none') {
      display = 'block';
    }
    element.style.display = display;
    element.style.opacity = 0;
    let last = +new Date();
    const tick = function () {
      element.style.opacity = +element.style.opacity + (new Date() - last) / duration;
      last = +new Date();
      if (+element.style.opacity < 1) {
        if (supportsRequestAnimation) window.requestAnimationFrame(tick);else setTimeout(tick, 16);
      }
    };
    tick();
  };
  const fadeOut = (element, duration = 500) => {
    element.style.display = '';
    element.style.opacity = 1;
    let last = +new Date();
    const tick = function () {
      element.style.opacity = Number(+element.style.opacity - (new Date() - last) / duration).toFixed(4);
      last = +new Date();
      if (-element.style.opacity <= 0) {
        if (supportsRequestAnimation) window.requestAnimationFrame(tick);else setTimeout(tick, 16);
      } else {
        element.style.display = 'none';
      }
    };
    tick();
  };
  const fadeToggle = (target, duration = 500) => {
    if (window.getComputedStyle(target).display === 'none') {
      target.classList.remove('jal-hide');
      return fadeIn(target, duration);
    }
    return fadeOut(target, duration);
  };
  const slideUp = (target, duration = 500) => {
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.boxSizing = 'border-box';
    target.style.height = target.offsetHeight + 'px';
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    window.setTimeout(() => {
      target.style.display = 'none';
      target.style.removeProperty('height');
      target.style.removeProperty('padding-top');
      target.style.removeProperty('padding-bottom');
      target.style.removeProperty('margin-top');
      target.style.removeProperty('margin-bottom');
      target.style.removeProperty('overflow');
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
    }, duration);
  };
  const slideDown = (target, duration = 500) => {
    target.style.removeProperty('display');
    let display = window.getComputedStyle(target).display;
    if (display === 'none') {
      display = 'block';
    }
    target.style.display = display;
    const height = target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.style.boxSizing = 'border-box';
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.height = height + 'px';
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    window.setTimeout(() => {
      target.style.removeProperty('height');
      target.style.removeProperty('overflow');
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
    }, duration);
  };
  const slideToggle = (target, duration = 500) => {
    if (window.getComputedStyle(target).display === 'none') {
      return slideDown(target, duration);
    }
    return slideUp(target, duration);
  };
  const showToggle = target => {
    if (window.getComputedStyle(target).display === 'none') {
      target.style.removeProperty('display');
      target.classList.remove('jal-hide');
    } else {
      target.style.display = 'none';
    }
  };
  const hideOpenedLists = listRoot => {
    if (listRoot === undefined) return;
    if (!listRoot.classList.contains('expanded')) return;

    // Expanded siblings
    const expandedSiblings = [...listRoot.parentElement.children].filter(ch => {
      return listRoot !== ch && ch.nodeName.toLowerCase() === 'li' && ch.classList.contains('expanded');
    });
    expandedSiblings.forEach(expandedList => {
      if (expandedList !== listRoot) {
        expandedList.querySelectorAll(':scope > .jaw_symbol').forEach(toggler => toggler.click());
      }
    });
  };
  const [animationFunction, setAnimationFunction] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setAnimationFunction(() => {
      let animationFn;
      switch (effect) {
        case 'fade':
          animationFn = fadeToggle;
          break;
        case 'slide':
          animationFn = slideToggle;
          break;
        default:
          animationFn = showToggle;
          break;
      }
      return animationFn;
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [effect]);
  return {
    animationFunction,
    hideOpenedLists
  };
}

/***/ }),

/***/ "./src/components/frontend/hooks/useApi.js":
/*!*************************************************!*\
  !*** ./src/components/frontend/hooks/useApi.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useApi)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 *
 * @param {string} url
 */
function useApi(url) {
  const [data, setData] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [error, setError] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [loading, setLoading] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  /* global jalwCurrentCat, jalwCurrentPost */
  const apiClient = async function (config) {
    setLoading(true);
    const params = new URLSearchParams({
      monthFormat: config.month_format,
      expand: config.expand
    });
    if (typeof jalwCurrentCat !== 'undefined' && config.onlycategory > 0) {
      params.append('onlycats', jalwCurrentCat);
    }
    if (config.categories) {
      params.append('exclusionType', config.include_or_exclude);
      params.append('cats', config.categories);
    }
    if (typeof jalwCurrentPost !== 'undefined') {
      if (jalwCurrentPost.month) {
        params.append('postMonth', jalwCurrentPost.month);
      }
      if (jalwCurrentPost.year) {
        params.append('postYear', jalwCurrentPost.year);
      }
    }

    // Checks if it's a post list request.
    if (config.showpost === true && /\/archive\/\d+\/\d+/.test(url)) {
      params.append('sort', config.sortpost);
    }
    return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
      path: `${url}?${params.toString()}`
    }).then(response => {
      setData(response);
      setLoading(false);
      return true;
    }).catch(e => {
      setError(e);
      setLoading(false);
      return false;
    });
  };
  return {
    apiClient,
    data,
    error,
    loading,
    setLoading
  };
}

/***/ }),

/***/ "./src/components/frontend/hooks/useFrontend.js":
/*!******************************************************!*\
  !*** ./src/components/frontend/hooks/useFrontend.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useSymbol: () => (/* binding */ useSymbol)
/* harmony export */ });
function useSymbol(symbol) {
  let collapseSymbol = '';
  let expandSymbol = '';
  switch (symbol.toString()) {
    case '1':
      collapseSymbol = '▼';
      expandSymbol = '►';
      break;
    case '2':
      collapseSymbol = '(–)';
      expandSymbol = '(+)';
      break;
    case '3':
      collapseSymbol = '[–]';
      expandSymbol = '[+]';
      break;
  }
  return {
    collapseSymbol,
    expandSymbol
  };
}

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_admin_CategoryPicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/admin/CategoryPicker */ "./src/components/admin/CategoryPicker.js");
/* harmony import */ var _components_frontend_JsArchiveList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/frontend/JsArchiveList */ "./src/components/frontend/JsArchiveList.js");
/* harmony import */ var _components_frontend_context_ConfigContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/frontend/context/ConfigContext */ "./src/components/frontend/context/ConfigContext.tsx");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */




function Edit({
  attributes,
  setAttributes
}) {
  const categories = Array.isArray(attributes.categories) ? attributes.categories : [];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)()
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_frontend_context_ConfigContext__WEBPACK_IMPORTED_MODULE_6__.ConfigProvider, {
    attributes: attributes
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_frontend_JsArchiveList__WEBPACK_IMPORTED_MODULE_5__["default"], null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
    key: "setting"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "jalw-controls"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Panel, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("General options", "jalw"),
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Title", "jalw"),
    value: attributes.title,
    onChange: val => setAttributes({
      title: val
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Trigger Symbol", "jalw"),
    value: attributes.symbol,
    onChange: val => setAttributes({
      symbol: val
    }),
    options: [{
      value: "0",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Empty Space", "jalw")
    }, {
      value: "1",
      label: "► ▼"
    }, {
      value: "2",
      label: "(+) (–)"
    }, {
      value: "3",
      label: "[+] [–]"
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Effect", "jalw"),
    value: attributes.effect,
    onChange: val => setAttributes({
      effect: val
    }),
    options: [{
      value: "none",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("None", "jalw")
    }, {
      value: "slide",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Slide( Accordion )", "jalw")
    }, {
      value: "fade",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Fade", "jalw")
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Month Format", "jalw"),
    value: attributes.month_format,
    onChange: val => setAttributes({
      month_format: val
    }),
    options: [{
      value: "full",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Full Name( January )", "jalw")
    }, {
      value: "short",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Short Name( Jan )", "jalw")
    }, {
      value: "number",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Number( 01 )", "jalw")
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Expand", "jalw"),
    value: attributes.expand,
    onChange: val => setAttributes({
      expand: val
    }),
    options: [{
      value: "",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("None", "jalw")
    }, {
      value: "all",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("All", "jalw")
    }, {
      value: "current",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Current or post date", "jalw")
    }, {
      value: "current_post",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Only post date", "jalw")
    }, {
      value: "current_date",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Only current date", "jalw")
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    type: "number",
    step: "1",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Hide years from before", "jalw"),
    value: attributes.hide_from_year,
    onChange: val => setAttributes({
      hide_from_year: val
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Leave empty to show all years", "jalw")
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Post type", "jalw"),
    value: attributes.expand,
    onChange: val => setAttributes({
      expand: val
    }),
    options: []
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Panel, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Extra options", "jalw"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CheckboxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Show days inside month list", "jalw"),
    checked: attributes.show_day_archive,
    onChange: val => setAttributes({
      show_day_archive: val
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CheckboxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Show number of posts", "jalw"),
    checked: attributes.showcount,
    onChange: val => setAttributes({
      showcount: val
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CheckboxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Show only posts from selected category in a category page", "jalw"),
    checked: attributes.onlycategory,
    onChange: val => setAttributes({
      onlycategory: val
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CheckboxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Only expand / reduce by clicking the symbol", "jalw"),
    checked: attributes.only_sym_link,
    onChange: val => setAttributes({
      only_sym_link: val
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CheckboxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Only expand one at a the same time (accordion effect)", "jalw"),
    checked: attributes.accordion,
    onChange: val => setAttributes({
      accordion: val
    })
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Panel, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Display posts", "jalw"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CheckboxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Show posts under months", "jalw"),
    checked: attributes.showpost,
    onChange: val => setAttributes({
      showpost: val
    })
  })), attributes.showpost ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CheckboxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Show post date next to post title", "jalw"),
    checked: attributes.show_post_date,
    onChange: val => setAttributes({
      show_post_date: val
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Sort posts by", "jalw"),
    value: attributes.sortpost,
    onChange: val => setAttributes({
      sortpost: val
    }),
    options: [{
      value: "id_asc",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("ID (ASC)", "jalw")
    }, {
      value: "id_desc",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("ID (DESC)", "jalw")
    }, {
      value: "name_asc",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Name (ASC)", "jalw")
    }, {
      value: "name_desc",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Name (DESC)", "jalw")
    }, {
      value: "date_asc",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Date (ASC)", "jalw")
    }, {
      value: "date_desc",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Date (DESC)", "jalw")
    }]
  }))) : null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Panel, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Category management", "jalw"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RadioControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Include or exclude", "jalw"),
    selected: attributes.include_or_exclude,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Include the following categories", "jalw"),
      value: "include"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Exclude the following categories ", "jalw"),
      value: "exclude"
    }],
    onChange: val => setAttributes({
      include_or_exclude: val
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_admin_CategoryPicker__WEBPACK_IMPORTED_MODULE_4__["default"], {
    selectedCats: categories,
    onSelected: val => setAttributes({
      categories: val
    })
  })))))));
}

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
function save() {
  return null;
}

/***/ }),

/***/ "./src/components/frontend/components/displayers/DisplayPost.tsx":
/*!***********************************************************************!*\
  !*** ./src/components/frontend/components/displayers/DisplayPost.tsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/date */ "@wordpress/date");
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_date__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_ConfigContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/ConfigContext */ "./src/components/frontend/context/ConfigContext.tsx");

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */

const DisplayPost = ({
  post
}) => {
  var _a;
  const {
    config
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_ConfigContext__WEBPACK_IMPORTED_MODULE_3__.ConfigContext);
  const dateSettings = (0,_wordpress_date__WEBPACK_IMPORTED_MODULE_2__.getSettings)();
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
    href: post.permalink,
    title: post.post_title,
    children: [post.post_title, config.show_post_date ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
      className: "post-date",
      children: (0,_wordpress_date__WEBPACK_IMPORTED_MODULE_2__.dateI18n)((_a = dateSettings === null || dateSettings === void 0 ? void 0 : dateSettings.formats) === null || _a === void 0 ? void 0 : _a.date, post.post_date)
    }) : '']
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DisplayPost);

/***/ }),

/***/ "./src/components/frontend/context/ConfigContext.tsx":
/*!***********************************************************!*\
  !*** ./src/components/frontend/context/ConfigContext.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfigContext: () => (/* binding */ ConfigContext),
/* harmony export */   ConfigProvider: () => (/* binding */ ConfigProvider),
/* harmony export */   defaultConfig: () => (/* binding */ defaultConfig)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useAnimation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useAnimation */ "./src/components/frontend/hooks/useAnimation.js");

/**
 * WordPress dependencies
 */


const defaultConfig = {
  title: '',
  symbol: '0',
  effect: 'none',
  month_format: 'full',
  expand: 'none',
  showcount: false,
  showpost: false,
  sortpost: 'id_asc',
  show_post_date: false,
  show_day_archive: false,
  hide_from_year: null,
  onlycategory: null,
  only_sym_link: false,
  accordion: false,
  include_or_exclude: 'include',
  categories: [],
  currentPost: null
};
const ConfigContext = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);
const ConfigProvider = ({
  attributes,
  children
}) => {
  const initialConfig = Object.assign(Object.assign({}, defaultConfig), attributes);
  const [config, updateContextConfig] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(initialConfig);
  const setConfig = newConfig => {
    const parsedConfig = Object.assign({}, newConfig);
    /* global jalwCurrentPost */
    if (typeof jalwCurrentPost !== 'undefined') {
      parsedConfig.currentPost = jalwCurrentPost;
    }
    parsedConfig.accordion = !!parseInt(parsedConfig.accordion, 10);
    parsedConfig.showcount = !!parseInt(parsedConfig.showcount, 10);
    parsedConfig.showpost = !!parseInt(parsedConfig.showpost, 10);
    parsedConfig.show_post_date = !!parseInt(parsedConfig.show_post_date, 10);
    parsedConfig.only_sym_link = !!parseInt(parsedConfig.only_sym_link, 10);
    parsedConfig.show_day_archive = !!parseInt(parsedConfig.show_day_archive, 10);
    updateContextConfig(prevState => Object.assign(Object.assign({}, prevState), parsedConfig));
  };
  const {
    animationFunction,
    hideOpenedLists
  } = (0,_hooks_useAnimation__WEBPACK_IMPORTED_MODULE_2__["default"])(config.effect);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setConfig(attributes);
  }, [attributes]);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ConfigContext.Provider, {
    value: {
      config,
      setConfig,
      animationFunction,
      hideOpenedLists
    },
    children: children
  });
};

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/save.js");


/**
 * Internal dependencies
 */


/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('js-archive-list/archive-widget', {
  category: 'widgets',
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/react/cjs/react-jsx-runtime.development.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react/cjs/react-jsx-runtime.development.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var React = __webpack_require__(/*! react */ "react");

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types.
var REACT_ELEMENT_TYPE = Symbol.for('react.element');
var REACT_PORTAL_TYPE = Symbol.for('react.portal');
var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
var REACT_CONTEXT_TYPE = Symbol.for('react.context');
var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
var REACT_MEMO_TYPE = Symbol.for('react.memo');
var REACT_LAZY_TYPE = Symbol.for('react.lazy');
var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

function error(format) {
  {
    {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      printWarning('error', format, args);
    }
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    } // eslint-disable-next-line react-internal/safe-string-coercion


    var argsWithFormat = args.map(function (item) {
      return String(item);
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

// -----------------------------------------------------------------------------

var enableScopeAPI = false; // Experimental Create Event Handle API.
var enableCacheElement = false;
var enableTransitionTracing = false; // No known bugs, but needs performance testing

var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
// stuff. Intended to enable React core members to more easily debug scheduling
// issues in DEV builds.

var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

var REACT_MODULE_REFERENCE;

{
  REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
}

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing  || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden  || type === REACT_OFFSCREEN_TYPE || enableScopeAPI  || enableCacheElement  || enableTransitionTracing ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
    // types supported by any Flight configuration anywhere since
    // we don't know which Flight build this will end up being used
    // with.
    type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
      return true;
    }
  }

  return false;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var displayName = outerType.displayName;

  if (displayName) {
    return displayName;
  }

  var functionName = innerType.displayName || innerType.name || '';
  return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
} // Keep in sync with react-reconciler/getComponentNameFromFiber


function getContextName(type) {
  return type.displayName || 'Context';
} // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.


function getComponentNameFromType(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';

  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        var outerName = type.displayName || null;

        if (outerName !== null) {
          return outerName;
        }

        return getComponentNameFromType(type.type) || 'Memo';

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentNameFromType(init(payload));
          } catch (x) {
            return null;
          }
        }

      // eslint-disable-next-line no-fallthrough
    }
  }

  return null;
}

var assign = Object.assign;

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: assign({}, props, {
          value: prevLog
        }),
        info: assign({}, props, {
          value: prevInfo
        }),
        warn: assign({}, props, {
          value: prevWarn
        }),
        error: assign({}, props, {
          value: prevError
        }),
        group: assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if ( !fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
                // but we have a user-provided "displayName"
                // splice it in to make the stack more readable.


                if (fn.displayName && _frame.includes('<anonymous>')) {
                  _frame = _frame.replace('<anonymous>', fn.displayName);
                }

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var hasOwnProperty = Object.prototype.hasOwnProperty;

var loggedTypeFailures = {};
var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            // eslint-disable-next-line react-internal/prod-error-codes
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

function isArray(a) {
  return isArrayImpl(a);
}

/*
 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
 *
 * The functions in this module will throw an easier-to-understand,
 * easier-to-debug exception with a clear errors message message explaining the
 * problem. (Instead of a confusing exception thrown inside the implementation
 * of the `value` object).
 */
// $FlowFixMe only called in DEV, so void return is not possible.
function typeName(value) {
  {
    // toStringTag is needed for namespaced types like Temporal.Instant
    var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
    var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
    return type;
  }
} // $FlowFixMe only called in DEV, so void return is not possible.


function willCoercionThrow(value) {
  {
    try {
      testStringCoercion(value);
      return false;
    } catch (e) {
      return true;
    }
  }
}

function testStringCoercion(value) {
  // If you ended up here by following an exception call stack, here's what's
  // happened: you supplied an object or symbol value to React (as a prop, key,
  // DOM attribute, CSS property, string ref, etc.) and when React tried to
  // coerce it to a string using `'' + value`, an exception was thrown.
  //
  // The most common types that will cause this exception are `Symbol` instances
  // and Temporal objects like `Temporal.Instant`. But any object that has a
  // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
  // exception. (Library authors do this to prevent users from using built-in
  // numeric operators like `+` or comparison operators like `>=` because custom
  // methods are needed to perform accurate arithmetic or comparison.)
  //
  // To fix the problem, coerce this object or symbol value to a string before
  // passing it to React. The most reliable way is usually `String(value)`.
  //
  // To find which value is throwing, check the browser or debugger console.
  // Before this exception was thrown, there should be `console.error` output
  // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
  // problem and how that type was used: key, atrribute, input value prop, etc.
  // In most cases, this console output also shows the component and its
  // ancestor components where the exception happened.
  //
  // eslint-disable-next-line react-internal/safe-string-coercion
  return '' + value;
}
function checkKeyStringCoercion(value) {
  {
    if (willCoercionThrow(value)) {
      error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));

      return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
    }
  }
}

var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown;
var specialPropRefWarningShown;
var didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function warnIfStringRefCannotBeAutoConverted(config, self) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
      var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}

function defineKeyPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingKey = function () {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingKey.isReactWarning = true;
    Object.defineProperty(props, 'key', {
      get: warnAboutAccessingKey,
      configurable: true
    });
  }
}

function defineRefPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingRef = function () {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingRef.isReactWarning = true;
    Object.defineProperty(props, 'ref', {
      get: warnAboutAccessingRef,
      configurable: true
    });
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */

function jsxDEV(type, config, maybeKey, source, self) {
  {
    var propName; // Reserved names are extracted

    var props = {};
    var key = null;
    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
    // but as an intermediary step, we will use jsxDEV for everything except
    // <div {...props} key="Hi" />, because we aren't currently able to tell if
    // key is explicitly declared to be undefined or not.

    if (maybeKey !== undefined) {
      {
        checkKeyStringCoercion(maybeKey);
      }

      key = '' + maybeKey;
    }

    if (hasValidKey(config)) {
      {
        checkKeyStringCoercion(config.key);
      }

      key = '' + config.key;
    }

    if (hasValidRef(config)) {
      ref = config.ref;
      warnIfStringRefCannotBeAutoConverted(config, self);
    } // Remaining properties are added to a new props object


    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    } // Resolve default props


    if (type && type.defaultProps) {
      var defaultProps = type.defaultProps;

      for (propName in defaultProps) {
        if (props[propName] === undefined) {
          props[propName] = defaultProps[propName];
        }
      }
    }

    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }

    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
  }
}

var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */


function isValidElement(object) {
  {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
}

function getDeclarationErrorAddendum() {
  {
    if (ReactCurrentOwner$1.current) {
      var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);

      if (name) {
        return '\n\nCheck the render method of `' + name + '`.';
      }
    }

    return '';
  }
}

function getSourceInfoErrorAddendum(source) {
  {
    if (source !== undefined) {
      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
      var lineNumber = source.lineNumber;
      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
    }

    return '';
  }
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  {
    var info = getDeclarationErrorAddendum();

    if (!info) {
      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

      if (parentName) {
        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
      }
    }

    return info;
  }
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  {
    if (!element._store || element._store.validated || element.key != null) {
      return;
    }

    element._store.validated = true;
    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
      return;
    }

    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
    // property, it may be the creator of the child that's responsible for
    // assigning it a key.

    var childOwner = '';

    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
      // Give the component that originally created this child.
      childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
    }

    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  {
    if (typeof node !== 'object') {
      return;
    }

    if (isArray(node)) {
      for (var i = 0; i < node.length; i++) {
        var child = node[i];

        if (isValidElement(child)) {
          validateExplicitKey(child, parentType);
        }
      }
    } else if (isValidElement(node)) {
      // This element was passed in a valid location.
      if (node._store) {
        node._store.validated = true;
      }
    } else if (node) {
      var iteratorFn = getIteratorFn(node);

      if (typeof iteratorFn === 'function') {
        // Entry iterators used to provide implicit keys,
        // but now we print a separate warning for them later.
        if (iteratorFn !== node.entries) {
          var iterator = iteratorFn.call(node);
          var step;

          while (!(step = iterator.next()).done) {
            if (isValidElement(step.value)) {
              validateExplicitKey(step.value, parentType);
            }
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentNameFromType(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentNameFromType(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}

function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
  {
    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.

    if (!validType) {
      var info = '';

      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
      }

      var sourceInfo = getSourceInfoErrorAddendum(source);

      if (sourceInfo) {
        info += sourceInfo;
      } else {
        info += getDeclarationErrorAddendum();
      }

      var typeString;

      if (type === null) {
        typeString = 'null';
      } else if (isArray(type)) {
        typeString = 'array';
      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
        typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
        info = ' Did you accidentally export a JSX literal instead of a component?';
      } else {
        typeString = typeof type;
      }

      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }

    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.

    if (element == null) {
      return element;
    } // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)


    if (validType) {
      var children = props.children;

      if (children !== undefined) {
        if (isStaticChildren) {
          if (isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              validateChildKeys(children[i], type);
            }

            if (Object.freeze) {
              Object.freeze(children);
            }
          } else {
            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
          }
        } else {
          validateChildKeys(children, type);
        }
      }
    }

    if (type === REACT_FRAGMENT_TYPE) {
      validateFragmentProps(element);
    } else {
      validatePropTypes(element);
    }

    return element;
  }
} // These two functions exist to still get child warnings in dev
// even with the prod transform. This means that jsxDEV is purely
// opt-in behavior for better messages but that we won't stop
// giving you warnings if you use production apis.

function jsxWithValidationStatic(type, props, key) {
  {
    return jsxWithValidation(type, props, key, true);
  }
}
function jsxWithValidationDynamic(type, props, key) {
  {
    return jsxWithValidation(type, props, key, false);
  }
}

var jsx =  jsxWithValidationDynamic ; // we may want to special case jsxs internally to take advantage of static children.
// for now we can ship identical prod functions

var jsxs =  jsxWithValidationStatic ;

exports.Fragment = REACT_FRAGMENT_TYPE;
exports.jsx = jsx;
exports.jsxs = jsxs;
  })();
}


/***/ }),

/***/ "./node_modules/react/jsx-runtime.js":
/*!*******************************************!*\
  !*** ./node_modules/react/jsx-runtime.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-jsx-runtime.development.js */ "./node_modules/react/cjs/react-jsx-runtime.development.js");
}


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/date":
/*!******************************!*\
  !*** external ["wp","date"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["date"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0,
/******/ 			"./style-main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkjs_archive_list"] = globalThis["webpackChunkjs_archive_list"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-main"], () => (__webpack_require__("./src/index.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map