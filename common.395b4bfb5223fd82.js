(self.webpackChunk_1inch = self.webpackChunk_1inch || []).push([
  [8592],
  {
    70216: (t) => {
      (t.exports = function s(r) {
        if (void 0 === r)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return r;
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    49014: (t) => {
      function s(e, i, n, a, o, _, f) {
        try {
          var u = e[_](f),
            h = u.value;
        } catch (v) {
          return void n(v);
        }
        u.done ? i(h) : Promise.resolve(h).then(a, o);
      }
      (t.exports = function r(e) {
        return function () {
          var i = this,
            n = arguments;
          return new Promise(function (a, o) {
            var _ = e.apply(i, n);
            function f(h) {
              s(_, a, o, f, u, "next", h);
            }
            function u(h) {
              s(_, a, o, f, u, "throw", h);
            }
            f(void 0);
          });
        };
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    56387: (t) => {
      (t.exports = function s(r, e) {
        if (!(r instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    29144: (t) => {
      function s(e, i) {
        for (var n = 0; n < i.length; n++) {
          var a = i[n];
          (a.enumerable = a.enumerable || !1),
            (a.configurable = !0),
            "value" in a && (a.writable = !0),
            Object.defineProperty(e, a.key, a);
        }
      }
      (t.exports = function r(e, i, n) {
        return (
          i && s(e.prototype, i),
          n && s(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    97350: (t) => {
      (t.exports = function s(r, e, i) {
        return (
          e in r
            ? Object.defineProperty(r, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (r[e] = i),
          r
        );
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    21573: (t) => {
      function s(r) {
        return (
          (t.exports = s =
            Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (i) {
                  return i.__proto__ || Object.getPrototypeOf(i);
                }),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports),
          s(r)
        );
      }
      (t.exports = s),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    22824: (t, s, r) => {
      var e = r(3842);
      (t.exports = function i(n, a) {
        if ("function" != typeof a && null !== a)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (n.prototype = Object.create(a && a.prototype, {
          constructor: { value: n, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(n, "prototype", { writable: !1 }),
          a && e(n, a);
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    16298: (t, s, r) => {
      var e = r(49132).default,
        i = r(70216);
      (t.exports = function n(a, o) {
        if (o && ("object" === e(o) || "function" == typeof o)) return o;
        if (void 0 !== o)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return i(a);
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    3842: (t) => {
      function s(r, e) {
        return (
          (t.exports = s =
            Object.setPrototypeOf ||
            function (n, a) {
              return (n.__proto__ = a), n;
            }),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports),
          s(r, e)
        );
      }
      (t.exports = s),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    49132: (t) => {
      function s(r) {
        return (
          (t.exports = s =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports),
          s(r)
        );
      }
      (t.exports = s),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    50530: (t, s, r) => {
      t.exports = r(77394);
    },
    79714: (t, s, r) => {
      "use strict";
      r.d(s, { h: () => i });
      var e = r(51109);
      let i = (() => {
        class n {
          transform(o) {
            return o >= 0 ? `+${o}%` : `${o}%`;
          }
        }
        return (
          (n.ɵfac = function (o) {
            return new (o || n)();
          }),
          (n.ɵpipe = e.ɵɵdefinePipe({
            name: "percentDifference",
            type: n,
            pure: !0,
          })),
          n
        );
      })();
    },
    76307: (t, s, r) => {
      "use strict";
      r.d(s, { V: () => p });
      var e = r(57817),
        i = r(33646),
        n = r(3012),
        a = r(77724),
        o = r(30459),
        _ = r(76327),
        f = r(17114),
        u = r(7722),
        h = r(51109),
        v = r(98066),
        l = r(33246);
      let p = (() => {
        class c {
          constructor(x, R) {
            (this.txStatusDialogService = x),
              (this.approveTransactionService = R);
          }
          twoStepApprove(x, R, O, g, C, M, y, d) {
            const S = this.approveTransaction(x, O, g, C, M, y, !1),
              m = this.approveTransaction(R, O, g, C, M, d, !1),
              I = `Step 2 of 2. Unlock ${R.symbol}`,
              A = this.txStatusDialogService.open({
                status: e._.provideLiquidityUnlock,
                metaInfo: { customText: `Step 1 of 2. Unlock ${x.symbol}` },
              });
            return S.pipe(
              (0, a.b)(() => {
                this.txStatusDialogService.changeTo({
                  status: e._.provideLiquidityUnlock,
                  metaInfo: { customText: I },
                });
              }),
              (0, o.g)(700),
              (0, _.w)((P) =>
                (0, i.D)({ firstHash: (0, n.of)(P), secondHash: m })
              ),
              (0, a.b)(({ firstHash: P, secondHash: B }) => {
                this.txStatusDialogService.changeTo({
                  status: e._.success,
                  links: [P, B].map((T) =>
                    this.txStatusDialogService.txStatusDialogLink(T)
                  ),
                });
              }),
              (0, f.K)(() => (A.close(), (0, n.of)(void 0))),
              (0, u.h)(void 0)
            );
          }
          approveTransaction(x, R, O, g, C, M, y) {
            return this.approveTransactionService.contractApproveTransaction(
              {
                txType: g,
                txSubType: C,
                contractAddress: x.address,
                meta: M,
                spenderAddress: R,
                amount: O,
              },
              y
            );
          }
        }
        return (
          (c.ɵfac = function (x) {
            return new (x || c)(h.ɵɵinject(v.i), h.ɵɵinject(l.f));
          }),
          (c.ɵprov = h.ɵɵdefineInjectable({
            token: c,
            factory: c.ɵfac,
            providedIn: "root",
          })),
          c
        );
      })();
    },
    67265: (t, s, r) => {
      "use strict";
      r.d(s, { L: () => i });
      var e = r(51109);
      let i = (() => {
        class n {}
        return (
          (n.ɵfac = function (o) {
            return new (o || n)();
          }),
          (n.ɵmod = e.ɵɵdefineNgModule({ type: n })),
          (n.ɵinj = e.ɵɵdefineInjector({})),
          n
        );
      })();
    },
    93094: (t, s, r) => {
      "use strict";
      r.d(s, { X: () => n });
      var e = r(51109);
      const i = ["*"];
      let n = (() => {
        class a {
          constructor() {}
        }
        return (
          (a.ɵfac = function (_) {
            return new (_ || a)();
          }),
          (a.ɵcmp = e.ɵɵdefineComponent({
            type: a,
            selectors: [["classic-container-page"]],
            inputs: { isGridView: "isGridView" },
            ngContentSelectors: i,
            decls: 2,
            vars: 4,
            template: function (_, f) {
              1 & _ &&
                (e.ɵɵprojectionDef(),
                e.ɵɵelementStart(0, "div"),
                e.ɵɵprojection(1),
                e.ɵɵelementEnd()),
                2 & _ &&
                  e.ɵɵclassProp("grid-layout", f.isGridView)(
                    "simple-layout",
                    !f.isGridView
                  );
            },
            styles: [
              ".simple-layout{display:flex;justify-content:center}  .simple-layout>*{width:100%}@media (min-width: 480px){  .simple-layout>*{width:480px}}@media (min-width: 940px){.grid-layout[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 480px;grid-column-gap:40px;width:100%;margin-bottom:32px}.grid-layout[_ngcontent-%COMP%]     .right-col{grid-column-start:2;grid-column-end:3;grid-row-start:1}.grid-layout[_ngcontent-%COMP%]     .left-col{grid-column-start:1;grid-column-end:2;grid-row-start:1;overflow:hidden}.grid-layout[_ngcontent-%COMP%]   .graph[_ngcontent-%COMP%]{display:block}}",
            ],
          })),
          a
        );
      })();
    },
    53842: (t, s, r) => {
      "use strict";
      r.d(s, { P: () => a });
      var e = r(38143),
        i = r(12725),
        n = r(51109);
      let a = (() => {
        class o {}
        return (
          (o.ɵfac = function (f) {
            return new (f || o)();
          }),
          (o.ɵmod = n.ɵɵdefineNgModule({ type: o })),
          (o.ɵinj = n.ɵɵdefineInjector({ imports: [e.ez, i.y4] })),
          o
        );
      })();
    },
    71668: (t, s, r) => {
      "use strict";
      r.d(s, { _: () => h });
      var e = r(51109),
        i = r(24654),
        n = r(38143),
        a = r(9907),
        o = r(38964),
        _ = r(12725),
        f = r(95475);
      function u(v, l) {
        if (
          (1 & v &&
            (e.ɵɵelementStart(0, "trade-info-item")(1, "div", 5),
            e.ɵɵtext(2),
            e.ɵɵpipe(3, "displaySymbol"),
            e.ɵɵpipe(4, "transloco"),
            e.ɵɵelementEnd(),
            e.ɵɵelement(5, "usd-token-price", 3),
            e.ɵɵelementEnd()),
          2 & v)
        ) {
          const p = e.ɵɵnextContext();
          e.ɵɵadvance(2),
            e.ɵɵtextInterpolate2(
              " ",
              e.ɵɵpipeBind1(3, 10, p.firstToken),
              " ",
              e.ɵɵpipeBind1(4, 12, p.secondTokenTitleKey),
              " "
            ),
            e.ɵɵadvance(3),
            e.ɵɵclassProp("skeleton-host", p.loading)(
              "skeleton-host-wider",
              p.loading
            ),
            e.ɵɵproperty("showTokenAmount", !0)("amount", p.secondTokenRate)(
              "token",
              p.secondToken
            )("invertValuesOrder", p.invertValuesOrder);
        }
      }
      let h = (() => {
        class v {
          constructor() {
            (this.rateDirection = i.N.direct),
              (this.invertValuesOrder = !1),
              (this.loading = !1),
              (this.handleRatesExpandChange = new e.EventEmitter()),
              (this.Direction = i.N),
              (this.isSecondRateInfoOpened = !1);
          }
          set isRatesExpand(p) {
            this.isSecondRateInfoOpened = !!p;
          }
          get firstTokenTitleKey() {
            return this.rateDirection === i.N.reversed
              ? "trade-info.sell-price"
              : "trade-info.buy-price";
          }
          get secondTokenTitleKey() {
            return this.rateDirection === i.N.reversed
              ? "trade-info.buy-price"
              : "trade-info.sell-price";
          }
          get firstToken() {
            return this.rateDirection === i.N.reversed
              ? this.destinationToken
              : this.sourceToken;
          }
          get secondToken() {
            return this.rateDirection === i.N.reversed
              ? this.sourceToken
              : this.destinationToken;
          }
          get sourceTokenRate() {
            const p = +this.sourceTokenAmount,
              c = +this.destinationTokenAmount;
            return 0 === c || 0 === p ? 0 : p / c;
          }
          get destinationTokenRate() {
            const p = +this.sourceTokenAmount,
              c = +this.destinationTokenAmount;
            return 0 === c || 0 === p ? 0 : c / p;
          }
          get firstTokenRate() {
            return this.rateDirection === i.N.reversed
              ? this.destinationTokenRate
              : this.sourceTokenRate;
          }
          get secondTokenRate() {
            return this.rateDirection === i.N.reversed
              ? this.sourceTokenRate
              : this.destinationTokenRate;
          }
          handleFirstTitleClick() {
            (this.isSecondRateInfoOpened = !this.isSecondRateInfoOpened),
              this.handleRatesExpandChange.emit(this.isSecondRateInfoOpened);
          }
        }
        return (
          (v.ɵfac = function (p) {
            return new (p || v)();
          }),
          (v.ɵcmp = e.ɵɵdefineComponent({
            type: v,
            selectors: [["expanded-rate-info"]],
            inputs: {
              sourceToken: "sourceToken",
              sourceTokenAmount: "sourceTokenAmount",
              destinationToken: "destinationToken",
              destinationTokenAmount: "destinationTokenAmount",
              rateDirection: "rateDirection",
              isRatesExpand: "isRatesExpand",
              invertValuesOrder: "invertValuesOrder",
              loading: "loading",
            },
            outputs: { handleRatesExpandChange: "handleRatesExpandChange" },
            decls: 9,
            vars: 15,
            consts: [
              [
                "tradeInfoItemTitle",
                "",
                "data-id",
                "limit-order.trade-info-expander",
                1,
                "trade-item__title",
                "first-item",
                3,
                "click",
              ],
              ["width", "16", "height", "16"],
              [0, "xlink", "href", "assets/images/arrow-down.svg#arrow-down"],
              [
                "tradeInfoItemValue",
                "",
                1,
                "trade-item__value",
                3,
                "showTokenAmount",
                "amount",
                "token",
                "invertValuesOrder",
              ],
              [4, "ngIf"],
              ["tradeInfoItemTitle", "", 1, "trade-item__title"],
            ],
            template: function (p, c) {
              1 & p &&
                (e.ɵɵelementStart(0, "trade-info-item")(1, "div", 0),
                e.ɵɵlistener("click", function () {
                  return c.handleFirstTitleClick();
                }),
                e.ɵɵtext(2),
                e.ɵɵpipe(3, "displaySymbol"),
                e.ɵɵpipe(4, "transloco"),
                e.ɵɵnamespaceSVG(),
                e.ɵɵelementStart(5, "svg", 1),
                e.ɵɵelement(6, "use", 2),
                e.ɵɵelementEnd()(),
                e.ɵɵnamespaceHTML(),
                e.ɵɵelement(7, "usd-token-price", 3),
                e.ɵɵelementEnd(),
                e.ɵɵtemplate(8, u, 6, 14, "trade-info-item", 4)),
                2 & p &&
                  (e.ɵɵadvance(2),
                  e.ɵɵtextInterpolate2(
                    " ",
                    e.ɵɵpipeBind1(3, 11, c.secondToken),
                    " ",
                    e.ɵɵpipeBind1(4, 13, c.firstTokenTitleKey),
                    " "
                  ),
                  e.ɵɵadvance(3),
                  e.ɵɵclassProp("rotated", c.isSecondRateInfoOpened),
                  e.ɵɵadvance(2),
                  e.ɵɵclassProp("skeleton-host", c.loading),
                  e.ɵɵproperty("showTokenAmount", !0)(
                    "amount",
                    c.firstTokenRate
                  )("token", c.firstToken)(
                    "invertValuesOrder",
                    c.invertValuesOrder
                  ),
                  e.ɵɵadvance(1),
                  e.ɵɵproperty("ngIf", c.isSecondRateInfoOpened));
            },
            dependencies: [n.O5, a.j, o.C, _.Ot, f.s],
            styles: [
              "[_nghost-%COMP%]{display:block}trade-info-item[_ngcontent-%COMP%]{height:16px}trade-info-item.tx-cost[_ngcontent-%COMP%]   .usd-value[_ngcontent-%COMP%]{color:var(--1inch__ui-02);margin-right:4px}trade-info-item.tx-cost[_ngcontent-%COMP%]   .usd-value-wrap[_ngcontent-%COMP%]{display:flex;align-items:center}trade-info-item[_ngcontent-%COMP%]   .trade-item__title[_ngcontent-%COMP%]{color:var(--1inch__ui-02)}.first-item[_ngcontent-%COMP%]{cursor:pointer}.first-item[_ngcontent-%COMP%]:hover{color:var(--1inch-text-03)!important}.rotated[_ngcontent-%COMP%]{transform:rotate(180deg)}.trade-item__value.skeleton-host[_ngcontent-%COMP%]{width:25%;height:16px}.trade-item__value.skeleton-host-wider[_ngcontent-%COMP%]{width:33%}",
            ],
            changeDetection: 0,
          })),
          v
        );
      })();
    },
    9862: (t, s, r) => {
      "use strict";
      r.d(s, { $: () => u });
      var e = r(38143),
        i = r(12725),
        n = r(77160),
        a = r(10047),
        o = r(62901),
        _ = r(74578),
        f = r(51109);
      let u = (() => {
        class h {}
        return (
          (h.ɵfac = function (l) {
            return new (l || h)();
          }),
          (h.ɵmod = f.ɵɵdefineNgModule({ type: h })),
          (h.ɵinj = f.ɵɵdefineInjector({
            imports: [e.ez, i.y4, n.D, o.w, a.y, _.WD],
          })),
          h
        );
      })();
    },
    59395: (t, s, r) => {
      "use strict";
      r.d(s, { w: () => p });
      var e = r(43253),
        i = r(51109),
        n = r(24124),
        a = r(54510),
        o = r(40475),
        _ = r(37867),
        f = r(69064),
        u = r(38143),
        h = r(91435),
        v = r(29229);
      function l(c, E) {
        1 & c && i.ɵɵelement(0, "trade-menu", 4);
      }
      let p = (() => {
        class c {
          constructor(x, R, O, g, C) {
            (this.activeConnectionQuery = x),
              (this.router = R),
              (this.swapSettingsService = O),
              (this.otcModeService = g),
              (this.swapSettingsQuery = C);
          }
          get showTabs() {
            return !this.router.url
              .slice(1)
              .split("/")
              .find((x) =>
                [
                  "settings",
                  "import-token",
                  "select-source-token",
                  "select-destination-token",
                  "confirm",
                ].includes(x)
              );
          }
          get isLimitOrderVerifyVisible() {
            return !!this.router.url
              .slice(1)
              .split("/")
              .find((x) => ["confirm"].includes(x));
          }
          ngOnInit() {
            this.router.url
              .slice(1)
              .split("/")
              .find((R) => ["swap"].includes(R)) &&
              this.resetPresetToMaxReturn();
          }
          resetPresetToMaxReturn() {
            const x = this.swapSettingsQuery.isPathfinderPresetOTCEnabled;
            this.swapSettingsService.setPartialValuesForCurrentChain({
              pathfinderPreset: e.dn.maxResult,
            }),
              x && this.otcModeService.onSwitchFromOTC();
          }
        }
        return (
          (c.ɵfac = function (x) {
            return new (x || c)(
              i.ɵɵdirectiveInject(n.r),
              i.ɵɵdirectiveInject(a.F0),
              i.ɵɵdirectiveInject(o._),
              i.ɵɵdirectiveInject(_.N),
              i.ɵɵdirectiveInject(f.G)
            );
          }),
          (c.ɵcmp = i.ɵɵdefineComponent({
            type: c,
            selectors: [["app-market-limit-box"]],
            decls: 5,
            vars: 3,
            consts: [
              ["id", "market-limit-wrap", 1, "market-limit-wrap"],
              [1, "market-limit-content"],
              ["class", "trade-menu", 4, "ngIf"],
              [1, "widget-wrap"],
              [1, "trade-menu"],
            ],
            template: function (x, R) {
              1 & x &&
                (i.ɵɵelementStart(0, "mat-card", 0)(1, "div", 1),
                i.ɵɵtemplate(2, l, 1, 0, "trade-menu", 2),
                i.ɵɵelementStart(3, "div", 3),
                i.ɵɵelement(4, "router-outlet"),
                i.ɵɵelementEnd()()()),
                2 & x &&
                  (i.ɵɵclassProp(
                    "limit-order-verify",
                    R.isLimitOrderVerifyVisible
                  ),
                  i.ɵɵadvance(2),
                  i.ɵɵproperty("ngIf", R.showTabs));
            },
            dependencies: [u.O5, h.a8, a.lC, v.q],
            styles: [
              ".market-limit-wrap[_ngcontent-%COMP%]{min-height:540px;max-height:100%;max-width:480px;margin:0 auto;border-radius:24px;padding:0;background:var(--1inch-bg-02)}@media (max-width: 520px){.market-limit-wrap[_ngcontent-%COMP%]{min-height:-moz-fit-content;min-height:fit-content}}@media (max-width: 418px){.market-limit-wrap[_ngcontent-%COMP%]{margin:0 -16px}}.limit-order-verify[_ngcontent-%COMP%]{min-height:480px!important}.market-limit-content[_ngcontent-%COMP%]{padding:16px;height:100%}",
            ],
            changeDetection: 0,
          })),
          c
        );
      })();
    },
    48915: (t, s, r) => {
      var e = r(44642).Buffer,
        i = (function () {
          "use strict";
          function n(c, E) {
            return null != E && c instanceof E;
          }
          var a, o, _;
          try {
            a = Map;
          } catch (c) {
            a = function () {};
          }
          try {
            o = Set;
          } catch (c) {
            o = function () {};
          }
          try {
            _ = Promise;
          } catch (c) {
            _ = function () {};
          }
          function f(c, E, x, R, O) {
            "object" == typeof E &&
              ((x = E.depth),
              (R = E.prototype),
              (O = E.includeNonEnumerable),
              (E = E.circular));
            var g = [],
              C = [],
              M = void 0 !== e;
            return (
              void 0 === E && (E = !0),
              void 0 === x && (x = 1 / 0),
              (function y(d, S) {
                if (null === d) return null;
                if (0 === S) return d;
                var m, F;
                if ("object" != typeof d) return d;
                if (n(d, a)) m = new a();
                else if (n(d, o)) m = new o();
                else if (n(d, _))
                  m = new _(function (D, b) {
                    d.then(
                      function (w) {
                        D(y(w, S - 1));
                      },
                      function (w) {
                        b(y(w, S - 1));
                      }
                    );
                  });
                else if (f.__isArray(d)) m = [];
                else if (f.__isRegExp(d))
                  (m = new RegExp(d.source, p(d))),
                    d.lastIndex && (m.lastIndex = d.lastIndex);
                else if (f.__isDate(d)) m = new Date(d.getTime());
                else {
                  if (M && e.isBuffer(d))
                    return (
                      (m = e.allocUnsafe
                        ? e.allocUnsafe(d.length)
                        : new e(d.length)),
                      d.copy(m),
                      m
                    );
                  n(d, Error)
                    ? (m = Object.create(d))
                    : void 0 === R
                    ? ((F = Object.getPrototypeOf(d)), (m = Object.create(F)))
                    : ((m = Object.create(R)), (F = R));
                }
                if (E) {
                  var I = g.indexOf(d);
                  if (-1 != I) return C[I];
                  g.push(d), C.push(m);
                }
                for (var A in (n(d, a) &&
                  d.forEach(function (D, b) {
                    var w = y(b, S - 1),
                      X = y(D, S - 1);
                    m.set(w, X);
                  }),
                n(d, o) &&
                  d.forEach(function (D) {
                    var b = y(D, S - 1);
                    m.add(b);
                  }),
                d)) {
                  var P;
                  F && (P = Object.getOwnPropertyDescriptor(F, A)),
                    (!P || null != P.set) && (m[A] = y(d[A], S - 1));
                }
                if (Object.getOwnPropertySymbols) {
                  var B = Object.getOwnPropertySymbols(d);
                  for (A = 0; A < B.length; A++) {
                    var T = B[A];
                    ((H = Object.getOwnPropertyDescriptor(d, T)) &&
                      !H.enumerable &&
                      !O) ||
                      ((m[T] = y(d[T], S - 1)),
                      H.enumerable ||
                        Object.defineProperty(m, T, { enumerable: !1 }));
                  }
                }
                if (O) {
                  var U = Object.getOwnPropertyNames(d);
                  for (A = 0; A < U.length; A++) {
                    var H,
                      k = U[A];
                    ((H = Object.getOwnPropertyDescriptor(d, k)) &&
                      H.enumerable) ||
                      ((m[k] = y(d[k], S - 1)),
                      Object.defineProperty(m, k, { enumerable: !1 }));
                  }
                }
                return m;
              })(c, x)
            );
          }
          function u(c) {
            return Object.prototype.toString.call(c);
          }
          function p(c) {
            var E = "";
            return (
              c.global && (E += "g"),
              c.ignoreCase && (E += "i"),
              c.multiline && (E += "m"),
              E
            );
          }
          return (
            (f.clonePrototype = function (E) {
              if (null === E) return null;
              var x = function () {};
              return (x.prototype = E), new x();
            }),
            (f.__objToStr = u),
            (f.__isDate = function h(c) {
              return "object" == typeof c && "[object Date]" === u(c);
            }),
            (f.__isArray = function v(c) {
              return "object" == typeof c && "[object Array]" === u(c);
            }),
            (f.__isRegExp = function l(c) {
              return "object" == typeof c && "[object RegExp]" === u(c);
            }),
            (f.__getRegExpFlags = p),
            f
          );
        })();
      t.exports && (t.exports = i);
    },
    63054: (module, exports, __webpack_require__) => {
      var process = __webpack_require__(11586),
        __WEBPACK_AMD_DEFINE_RESULT__;
      (function () {
        "use strict";
        var ERROR = "input is invalid type",
          WINDOW = "object" == typeof window,
          root = WINDOW ? window : {};
        root.JS_SHA256_NO_WINDOW && (WINDOW = !1);
        var WEB_WORKER = !WINDOW && "object" == typeof self,
          NODE_JS =
            !root.JS_SHA256_NO_NODE_JS &&
            "object" == typeof process &&
            process.versions &&
            process.versions.node;
        NODE_JS ? (root = __webpack_require__.g) : WEB_WORKER && (root = self);
        var COMMON_JS = !root.JS_SHA256_NO_COMMON_JS && module.exports,
          AMD = __webpack_require__.amdO,
          ARRAY_BUFFER =
            !root.JS_SHA256_NO_ARRAY_BUFFER &&
            "undefined" != typeof ArrayBuffer,
          HEX_CHARS = "0123456789abcdef".split(""),
          EXTRA = [-2147483648, 8388608, 32768, 128],
          SHIFT = [24, 16, 8, 0],
          K = [
            1116352408, 1899447441, 3049323471, 3921009573, 961987163,
            1508970993, 2453635748, 2870763221, 3624381080, 310598401,
            607225278, 1426881987, 1925078388, 2162078206, 2614888103,
            3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983,
            1249150122, 1555081692, 1996064986, 2554220882, 2821834349,
            2952996808, 3210313671, 3336571891, 3584528711, 113926993,
            338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700,
            1986661051, 2177026350, 2456956037, 2730485921, 2820302411,
            3259730800, 3345764771, 3516065817, 3600352804, 4094571909,
            275423344, 430227734, 506948616, 659060556, 883997877, 958139571,
            1322822218, 1537002063, 1747873779, 1955562222, 2024104815,
            2227730452, 2361852424, 2428436474, 2756734187, 3204031479,
            3329325298,
          ],
          OUTPUT_TYPES = ["hex", "array", "digest", "arrayBuffer"],
          blocks = [];
        (root.JS_SHA256_NO_NODE_JS || !Array.isArray) &&
          (Array.isArray = function (t) {
            return "[object Array]" === Object.prototype.toString.call(t);
          }),
          ARRAY_BUFFER &&
            (root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) &&
            (ArrayBuffer.isView = function (t) {
              return (
                "object" == typeof t &&
                t.buffer &&
                t.buffer.constructor === ArrayBuffer
              );
            });
        var createOutputMethod = function (t, s) {
            return function (r) {
              return new Sha256(s, !0).update(r)[t]();
            };
          },
          createMethod = function (t) {
            var s = createOutputMethod("hex", t);
            NODE_JS && (s = nodeWrap(s, t)),
              (s.create = function () {
                return new Sha256(t);
              }),
              (s.update = function (i) {
                return s.create().update(i);
              });
            for (var r = 0; r < OUTPUT_TYPES.length; ++r) {
              var e = OUTPUT_TYPES[r];
              s[e] = createOutputMethod(e, t);
            }
            return s;
          },
          nodeWrap = function (method, is224) {
            var crypto = eval("require('crypto')"),
              Buffer = eval("require('buffer').Buffer"),
              algorithm = is224 ? "sha224" : "sha256",
              nodeMethod = function (t) {
                if ("string" == typeof t)
                  return crypto
                    .createHash(algorithm)
                    .update(t, "utf8")
                    .digest("hex");
                if (null == t) throw new Error(ERROR);
                return (
                  t.constructor === ArrayBuffer && (t = new Uint8Array(t)),
                  Array.isArray(t) ||
                  ArrayBuffer.isView(t) ||
                  t.constructor === Buffer
                    ? crypto
                        .createHash(algorithm)
                        .update(new Buffer(t))
                        .digest("hex")
                    : method(t)
                );
              };
            return nodeMethod;
          },
          createHmacOutputMethod = function (t, s) {
            return function (r, e) {
              return new HmacSha256(r, s, !0).update(e)[t]();
            };
          },
          createHmacMethod = function (t) {
            var s = createHmacOutputMethod("hex", t);
            (s.create = function (i) {
              return new HmacSha256(i, t);
            }),
              (s.update = function (i, n) {
                return s.create(i).update(n);
              });
            for (var r = 0; r < OUTPUT_TYPES.length; ++r) {
              var e = OUTPUT_TYPES[r];
              s[e] = createHmacOutputMethod(e, t);
            }
            return s;
          };
        function Sha256(t, s) {
          s
            ? ((blocks[0] =
                blocks[16] =
                blocks[1] =
                blocks[2] =
                blocks[3] =
                blocks[4] =
                blocks[5] =
                blocks[6] =
                blocks[7] =
                blocks[8] =
                blocks[9] =
                blocks[10] =
                blocks[11] =
                blocks[12] =
                blocks[13] =
                blocks[14] =
                blocks[15] =
                  0),
              (this.blocks = blocks))
            : (this.blocks = [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              ]),
            t
              ? ((this.h0 = 3238371032),
                (this.h1 = 914150663),
                (this.h2 = 812702999),
                (this.h3 = 4144912697),
                (this.h4 = 4290775857),
                (this.h5 = 1750603025),
                (this.h6 = 1694076839),
                (this.h7 = 3204075428))
              : ((this.h0 = 1779033703),
                (this.h1 = 3144134277),
                (this.h2 = 1013904242),
                (this.h3 = 2773480762),
                (this.h4 = 1359893119),
                (this.h5 = 2600822924),
                (this.h6 = 528734635),
                (this.h7 = 1541459225)),
            (this.block = this.start = this.bytes = this.hBytes = 0),
            (this.finalized = this.hashed = !1),
            (this.first = !0),
            (this.is224 = t);
        }
        function HmacSha256(t, s, r) {
          var e,
            i = typeof t;
          if ("string" === i) {
            var _,
              n = [],
              a = t.length,
              o = 0;
            for (e = 0; e < a; ++e)
              (_ = t.charCodeAt(e)) < 128
                ? (n[o++] = _)
                : _ < 2048
                ? ((n[o++] = 192 | (_ >> 6)), (n[o++] = 128 | (63 & _)))
                : _ < 55296 || _ >= 57344
                ? ((n[o++] = 224 | (_ >> 12)),
                  (n[o++] = 128 | ((_ >> 6) & 63)),
                  (n[o++] = 128 | (63 & _)))
                : ((_ =
                    65536 + (((1023 & _) << 10) | (1023 & t.charCodeAt(++e)))),
                  (n[o++] = 240 | (_ >> 18)),
                  (n[o++] = 128 | ((_ >> 12) & 63)),
                  (n[o++] = 128 | ((_ >> 6) & 63)),
                  (n[o++] = 128 | (63 & _)));
            t = n;
          } else {
            if ("object" !== i) throw new Error(ERROR);
            if (null === t) throw new Error(ERROR);
            if (ARRAY_BUFFER && t.constructor === ArrayBuffer)
              t = new Uint8Array(t);
            else if (
              !(Array.isArray(t) || (ARRAY_BUFFER && ArrayBuffer.isView(t)))
            )
              throw new Error(ERROR);
          }
          t.length > 64 && (t = new Sha256(s, !0).update(t).array());
          var f = [],
            u = [];
          for (e = 0; e < 64; ++e) {
            var h = t[e] || 0;
            (f[e] = 92 ^ h), (u[e] = 54 ^ h);
          }
          Sha256.call(this, s, r),
            this.update(u),
            (this.oKeyPad = f),
            (this.inner = !0),
            (this.sharedMemory = r);
        }
        (Sha256.prototype.update = function (t) {
          if (!this.finalized) {
            var s,
              r = typeof t;
            if ("string" !== r) {
              if ("object" !== r) throw new Error(ERROR);
              if (null === t) throw new Error(ERROR);
              if (ARRAY_BUFFER && t.constructor === ArrayBuffer)
                t = new Uint8Array(t);
              else if (
                !(Array.isArray(t) || (ARRAY_BUFFER && ArrayBuffer.isView(t)))
              )
                throw new Error(ERROR);
              s = !0;
            }
            for (var e, n, i = 0, a = t.length, o = this.blocks; i < a; ) {
              if (
                (this.hashed &&
                  ((this.hashed = !1),
                  (o[0] = this.block),
                  (o[16] =
                    o[1] =
                    o[2] =
                    o[3] =
                    o[4] =
                    o[5] =
                    o[6] =
                    o[7] =
                    o[8] =
                    o[9] =
                    o[10] =
                    o[11] =
                    o[12] =
                    o[13] =
                    o[14] =
                    o[15] =
                      0)),
                s)
              )
                for (n = this.start; i < a && n < 64; ++i)
                  o[n >> 2] |= t[i] << SHIFT[3 & n++];
              else
                for (n = this.start; i < a && n < 64; ++i)
                  (e = t.charCodeAt(i)) < 128
                    ? (o[n >> 2] |= e << SHIFT[3 & n++])
                    : e < 2048
                    ? ((o[n >> 2] |= (192 | (e >> 6)) << SHIFT[3 & n++]),
                      (o[n >> 2] |= (128 | (63 & e)) << SHIFT[3 & n++]))
                    : e < 55296 || e >= 57344
                    ? ((o[n >> 2] |= (224 | (e >> 12)) << SHIFT[3 & n++]),
                      (o[n >> 2] |= (128 | ((e >> 6) & 63)) << SHIFT[3 & n++]),
                      (o[n >> 2] |= (128 | (63 & e)) << SHIFT[3 & n++]))
                    : ((e =
                        65536 +
                        (((1023 & e) << 10) | (1023 & t.charCodeAt(++i)))),
                      (o[n >> 2] |= (240 | (e >> 18)) << SHIFT[3 & n++]),
                      (o[n >> 2] |= (128 | ((e >> 12) & 63)) << SHIFT[3 & n++]),
                      (o[n >> 2] |= (128 | ((e >> 6) & 63)) << SHIFT[3 & n++]),
                      (o[n >> 2] |= (128 | (63 & e)) << SHIFT[3 & n++]));
              (this.lastByteIndex = n),
                (this.bytes += n - this.start),
                n >= 64
                  ? ((this.block = o[16]),
                    (this.start = n - 64),
                    this.hash(),
                    (this.hashed = !0))
                  : (this.start = n);
            }
            return (
              this.bytes > 4294967295 &&
                ((this.hBytes += (this.bytes / 4294967296) << 0),
                (this.bytes = this.bytes % 4294967296)),
              this
            );
          }
        }),
          (Sha256.prototype.finalize = function () {
            if (!this.finalized) {
              this.finalized = !0;
              var t = this.blocks,
                s = this.lastByteIndex;
              (t[16] = this.block),
                (t[s >> 2] |= EXTRA[3 & s]),
                (this.block = t[16]),
                s >= 56 &&
                  (this.hashed || this.hash(),
                  (t[0] = this.block),
                  (t[16] =
                    t[1] =
                    t[2] =
                    t[3] =
                    t[4] =
                    t[5] =
                    t[6] =
                    t[7] =
                    t[8] =
                    t[9] =
                    t[10] =
                    t[11] =
                    t[12] =
                    t[13] =
                    t[14] =
                    t[15] =
                      0)),
                (t[14] = (this.hBytes << 3) | (this.bytes >>> 29)),
                (t[15] = this.bytes << 3),
                this.hash();
            }
          }),
          (Sha256.prototype.hash = function () {
            var f,
              l,
              E,
              x,
              R,
              O,
              t = this.h0,
              s = this.h1,
              r = this.h2,
              e = this.h3,
              i = this.h4,
              n = this.h5,
              a = this.h6,
              o = this.h7,
              _ = this.blocks;
            for (f = 16; f < 64; ++f)
              _[f] =
                (_[f - 16] +
                  ((((l = _[f - 15]) >>> 7) | (l << 25)) ^
                    ((l >>> 18) | (l << 14)) ^
                    (l >>> 3)) +
                  _[f - 7] +
                  ((((l = _[f - 2]) >>> 17) | (l << 15)) ^
                    ((l >>> 19) | (l << 13)) ^
                    (l >>> 10))) <<
                0;
            for (O = s & r, f = 0; f < 64; f += 4)
              this.first
                ? (this.is224
                    ? ((E = 300032),
                      (o = ((l = _[0] - 1413257819) - 150054599) << 0),
                      (e = (l + 24177077) << 0))
                    : ((E = 704751109),
                      (o = ((l = _[0] - 210244248) - 1521486534) << 0),
                      (e = (l + 143694565) << 0)),
                  (this.first = !1))
                : ((o =
                    (e +
                      (l =
                        o +
                        (((i >>> 6) | (i << 26)) ^
                          ((i >>> 11) | (i << 21)) ^
                          ((i >>> 25) | (i << 7))) +
                        ((i & n) ^ (~i & a)) +
                        K[f] +
                        _[f])) <<
                    0),
                  (e =
                    (l +
                      ((((t >>> 2) | (t << 30)) ^
                        ((t >>> 13) | (t << 19)) ^
                        ((t >>> 22) | (t << 10))) +
                        ((E = t & s) ^ (t & r) ^ O))) <<
                    0)),
                (a =
                  (r +
                    (l =
                      a +
                      (((o >>> 6) | (o << 26)) ^
                        ((o >>> 11) | (o << 21)) ^
                        ((o >>> 25) | (o << 7))) +
                      ((o & i) ^ (~o & n)) +
                      K[f + 1] +
                      _[f + 1])) <<
                  0),
                (r =
                  (l +
                    ((((e >>> 2) | (e << 30)) ^
                      ((e >>> 13) | (e << 19)) ^
                      ((e >>> 22) | (e << 10))) +
                      ((x = e & t) ^ (e & s) ^ E))) <<
                  0),
                (n =
                  (s +
                    (l =
                      n +
                      (((a >>> 6) | (a << 26)) ^
                        ((a >>> 11) | (a << 21)) ^
                        ((a >>> 25) | (a << 7))) +
                      ((a & o) ^ (~a & i)) +
                      K[f + 2] +
                      _[f + 2])) <<
                  0),
                (s =
                  (l +
                    ((((r >>> 2) | (r << 30)) ^
                      ((r >>> 13) | (r << 19)) ^
                      ((r >>> 22) | (r << 10))) +
                      ((R = r & e) ^ (r & t) ^ x))) <<
                  0),
                (i =
                  (t +
                    (l =
                      i +
                      (((n >>> 6) | (n << 26)) ^
                        ((n >>> 11) | (n << 21)) ^
                        ((n >>> 25) | (n << 7))) +
                      ((n & a) ^ (~n & o)) +
                      K[f + 3] +
                      _[f + 3])) <<
                  0),
                (t =
                  (l +
                    ((((s >>> 2) | (s << 30)) ^
                      ((s >>> 13) | (s << 19)) ^
                      ((s >>> 22) | (s << 10))) +
                      ((O = s & r) ^ (s & e) ^ R))) <<
                  0);
            (this.h0 = (this.h0 + t) << 0),
              (this.h1 = (this.h1 + s) << 0),
              (this.h2 = (this.h2 + r) << 0),
              (this.h3 = (this.h3 + e) << 0),
              (this.h4 = (this.h4 + i) << 0),
              (this.h5 = (this.h5 + n) << 0),
              (this.h6 = (this.h6 + a) << 0),
              (this.h7 = (this.h7 + o) << 0);
          }),
          (Sha256.prototype.hex = function () {
            this.finalize();
            var t = this.h0,
              s = this.h1,
              r = this.h2,
              e = this.h3,
              i = this.h4,
              n = this.h5,
              a = this.h6,
              o = this.h7,
              _ =
                HEX_CHARS[(t >> 28) & 15] +
                HEX_CHARS[(t >> 24) & 15] +
                HEX_CHARS[(t >> 20) & 15] +
                HEX_CHARS[(t >> 16) & 15] +
                HEX_CHARS[(t >> 12) & 15] +
                HEX_CHARS[(t >> 8) & 15] +
                HEX_CHARS[(t >> 4) & 15] +
                HEX_CHARS[15 & t] +
                HEX_CHARS[(s >> 28) & 15] +
                HEX_CHARS[(s >> 24) & 15] +
                HEX_CHARS[(s >> 20) & 15] +
                HEX_CHARS[(s >> 16) & 15] +
                HEX_CHARS[(s >> 12) & 15] +
                HEX_CHARS[(s >> 8) & 15] +
                HEX_CHARS[(s >> 4) & 15] +
                HEX_CHARS[15 & s] +
                HEX_CHARS[(r >> 28) & 15] +
                HEX_CHARS[(r >> 24) & 15] +
                HEX_CHARS[(r >> 20) & 15] +
                HEX_CHARS[(r >> 16) & 15] +
                HEX_CHARS[(r >> 12) & 15] +
                HEX_CHARS[(r >> 8) & 15] +
                HEX_CHARS[(r >> 4) & 15] +
                HEX_CHARS[15 & r] +
                HEX_CHARS[(e >> 28) & 15] +
                HEX_CHARS[(e >> 24) & 15] +
                HEX_CHARS[(e >> 20) & 15] +
                HEX_CHARS[(e >> 16) & 15] +
                HEX_CHARS[(e >> 12) & 15] +
                HEX_CHARS[(e >> 8) & 15] +
                HEX_CHARS[(e >> 4) & 15] +
                HEX_CHARS[15 & e] +
                HEX_CHARS[(i >> 28) & 15] +
                HEX_CHARS[(i >> 24) & 15] +
                HEX_CHARS[(i >> 20) & 15] +
                HEX_CHARS[(i >> 16) & 15] +
                HEX_CHARS[(i >> 12) & 15] +
                HEX_CHARS[(i >> 8) & 15] +
                HEX_CHARS[(i >> 4) & 15] +
                HEX_CHARS[15 & i] +
                HEX_CHARS[(n >> 28) & 15] +
                HEX_CHARS[(n >> 24) & 15] +
                HEX_CHARS[(n >> 20) & 15] +
                HEX_CHARS[(n >> 16) & 15] +
                HEX_CHARS[(n >> 12) & 15] +
                HEX_CHARS[(n >> 8) & 15] +
                HEX_CHARS[(n >> 4) & 15] +
                HEX_CHARS[15 & n] +
                HEX_CHARS[(a >> 28) & 15] +
                HEX_CHARS[(a >> 24) & 15] +
                HEX_CHARS[(a >> 20) & 15] +
                HEX_CHARS[(a >> 16) & 15] +
                HEX_CHARS[(a >> 12) & 15] +
                HEX_CHARS[(a >> 8) & 15] +
                HEX_CHARS[(a >> 4) & 15] +
                HEX_CHARS[15 & a];
            return (
              this.is224 ||
                (_ +=
                  HEX_CHARS[(o >> 28) & 15] +
                  HEX_CHARS[(o >> 24) & 15] +
                  HEX_CHARS[(o >> 20) & 15] +
                  HEX_CHARS[(o >> 16) & 15] +
                  HEX_CHARS[(o >> 12) & 15] +
                  HEX_CHARS[(o >> 8) & 15] +
                  HEX_CHARS[(o >> 4) & 15] +
                  HEX_CHARS[15 & o]),
              _
            );
          }),
          (Sha256.prototype.toString = Sha256.prototype.hex),
          (Sha256.prototype.digest = function () {
            this.finalize();
            var t = this.h0,
              s = this.h1,
              r = this.h2,
              e = this.h3,
              i = this.h4,
              n = this.h5,
              a = this.h6,
              o = this.h7,
              _ = [
                (t >> 24) & 255,
                (t >> 16) & 255,
                (t >> 8) & 255,
                255 & t,
                (s >> 24) & 255,
                (s >> 16) & 255,
                (s >> 8) & 255,
                255 & s,
                (r >> 24) & 255,
                (r >> 16) & 255,
                (r >> 8) & 255,
                255 & r,
                (e >> 24) & 255,
                (e >> 16) & 255,
                (e >> 8) & 255,
                255 & e,
                (i >> 24) & 255,
                (i >> 16) & 255,
                (i >> 8) & 255,
                255 & i,
                (n >> 24) & 255,
                (n >> 16) & 255,
                (n >> 8) & 255,
                255 & n,
                (a >> 24) & 255,
                (a >> 16) & 255,
                (a >> 8) & 255,
                255 & a,
              ];
            return (
              this.is224 ||
                _.push(
                  (o >> 24) & 255,
                  (o >> 16) & 255,
                  (o >> 8) & 255,
                  255 & o
                ),
              _
            );
          }),
          (Sha256.prototype.array = Sha256.prototype.digest),
          (Sha256.prototype.arrayBuffer = function () {
            this.finalize();
            var t = new ArrayBuffer(this.is224 ? 28 : 32),
              s = new DataView(t);
            return (
              s.setUint32(0, this.h0),
              s.setUint32(4, this.h1),
              s.setUint32(8, this.h2),
              s.setUint32(12, this.h3),
              s.setUint32(16, this.h4),
              s.setUint32(20, this.h5),
              s.setUint32(24, this.h6),
              this.is224 || s.setUint32(28, this.h7),
              t
            );
          }),
          (HmacSha256.prototype = new Sha256()),
          (HmacSha256.prototype.finalize = function () {
            if ((Sha256.prototype.finalize.call(this), this.inner)) {
              this.inner = !1;
              var t = this.array();
              Sha256.call(this, this.is224, this.sharedMemory),
                this.update(this.oKeyPad),
                this.update(t),
                Sha256.prototype.finalize.call(this);
            }
          });
        var exports = createMethod();
        (exports.sha256 = exports),
          (exports.sha224 = createMethod(!0)),
          (exports.sha256.hmac = createHmacMethod()),
          (exports.sha224.hmac = createHmacMethod(!0)),
          COMMON_JS
            ? (module.exports = exports)
            : ((root.sha256 = exports.sha256),
              (root.sha224 = exports.sha224),
              AMD &&
                ((__WEBPACK_AMD_DEFINE_RESULT__ = function () {
                  return exports;
                }.call(exports, __webpack_require__, exports, module)),
                void 0 !== __WEBPACK_AMD_DEFINE_RESULT__ &&
                  (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)));
      })();
    },
    99778: (t) => {
      for (var s = [], r = 0; r < 256; ++r)
        s[r] = (r + 256).toString(16).substr(1);
      t.exports = function e(i, n) {
        var a = n || 0;
        return [
          s[i[a++]],
          s[i[a++]],
          s[i[a++]],
          s[i[a++]],
          "-",
          s[i[a++]],
          s[i[a++]],
          "-",
          s[i[a++]],
          s[i[a++]],
          "-",
          s[i[a++]],
          s[i[a++]],
          "-",
          s[i[a++]],
          s[i[a++]],
          s[i[a++]],
          s[i[a++]],
          s[i[a++]],
          s[i[a++]],
        ].join("");
      };
    },
    24871: (t) => {
      var s =
        ("undefined" != typeof crypto &&
          crypto.getRandomValues &&
          crypto.getRandomValues.bind(crypto)) ||
        ("undefined" != typeof msCrypto &&
          "function" == typeof window.msCrypto.getRandomValues &&
          msCrypto.getRandomValues.bind(msCrypto));
      if (s) {
        var r = new Uint8Array(16);
        t.exports = function () {
          return s(r), r;
        };
      } else {
        var e = new Array(16);
        t.exports = function () {
          for (var a, n = 0; n < 16; n++)
            0 == (3 & n) && (a = 4294967296 * Math.random()),
              (e[n] = (a >>> ((3 & n) << 3)) & 255);
          return e;
        };
      }
    },
    30678: (t, s, r) => {
      var e = r(24871),
        i = r(99778);
      t.exports = function n(a, o, _) {
        var f = (o && _) || 0;
        "string" == typeof a &&
          ((o = "binary" === a ? new Array(16) : null), (a = null));
        var u = (a = a || {}).random || (a.rng || e)();
        if (((u[6] = (15 & u[6]) | 64), (u[8] = (63 & u[8]) | 128), o))
          for (var h = 0; h < 16; ++h) o[f + h] = u[h];
        return o || i(u);
      };
    },
  },
]);
