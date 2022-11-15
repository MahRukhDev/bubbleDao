"use strict";
(self.webpackChunk_1inch = self.webpackChunk_1inch || []).push([
  [9263],
  {
    70859: (z, M, e) => {
      e.d(M, { _: () => _ });
      var t = e(51109),
        s = e(97202);
      let _ = (() => {
        class h {
          constructor(u) {
            this.liquiditySourcesQuery = u;
          }
          transform(u) {
            var C;
            return (
              (null === (C = this.liquiditySourcesQuery.getEntity(u)) ||
              void 0 === C
                ? void 0
                : C.title) || u
            );
          }
        }
        return (
          (h.ɵfac = function (u) {
            return new (u || h)(t.ɵɵdirectiveInject(s.F, 16));
          }),
          (h.ɵpipe = t.ɵɵdefinePipe({
            name: "liquiditySourceName",
            type: h,
            pure: !0,
          })),
          h
        );
      })();
    },
    22406: (z, M, e) => {
      e.d(M, { Z: () => u });
      var t = e(89950),
        s = e(51109),
        _ = e(23534),
        h = e(24124),
        f = e(93130);
      let u = (() => {
        class C {
          constructor(E, T, S) {
            (this.sendTransactionService = E),
              (this.activeConnectionQuery = T),
              (this.walletConnectionQuery = S);
          }
          get showSwapType() {
            return (
              !!this.activeConnectionQuery.isEthereumMainnet &&
              this.sendTransactionService.isSignTxSupported
            );
          }
          get showTxCost() {
            return (
              !!t.U.value ||
              (!this.showSwapType &&
                !this.walletConnectionQuery.isCurrentWalletGnosis)
            );
          }
        }
        return (
          (C.ɵfac = function (E) {
            return new (E || C)(
              s.ɵɵinject(_.J),
              s.ɵɵinject(h.r),
              s.ɵɵinject(f.r)
            );
          }),
          (C.ɵprov = s.ɵɵdefineInjectable({
            token: C,
            factory: C.ɵfac,
            providedIn: "root",
          })),
          C
        );
      })();
    },
    73592: (z, M, e) => {
      e.d(M, { M: () => f, N: () => h });
      var t = e(1753),
        s = e(15810),
        _ = e(64736);
      function h() {
        const u = document.hasFocus(),
          C = "visible" === document.visibilityState;
        return u && C;
      }
      function f() {
        return (0, t.T)(
          (0, s.R)(window, "focus"),
          (0, s.R)(window, "blur"),
          (0, s.R)(document, "visibilitychange")
        ).pipe(
          (0, _.U)(() => {
            const u = document.hasFocus(),
              C = "visible" === document.visibilityState;
            return u && C;
          })
        );
      }
    },
    4685: (z, M, e) => {
      e.d(M, { o: () => R });
      var t = e(51109),
        s = e(38143),
        _ = e(12725),
        h = e(38964),
        f = e(80135),
        u = e(89092),
        C = e(95475);
      function v(d, j) {
        1 & d && t.ɵɵelement(0, "span");
      }
      function E(d, j) {
        if (
          (1 & d &&
            (t.ɵɵelementContainerStart(0),
            t.ɵɵtemplate(1, v, 1, 0, "span", 7),
            t.ɵɵelementContainerEnd()),
          2 & d)
        ) {
          t.ɵɵnextContext();
          const A = t.ɵɵreference(9);
          t.ɵɵadvance(1), t.ɵɵproperty("ngTemplateOutlet", A);
        }
      }
      function T(d, j) {
        1 & d && t.ɵɵelement(0, "span");
      }
      function S(d, j) {
        if (
          (1 & d &&
            (t.ɵɵelementContainerStart(0),
            t.ɵɵtemplate(1, T, 1, 0, "span", 7),
            t.ɵɵelementContainerEnd()),
          2 & d)
        ) {
          t.ɵɵnextContext();
          const A = t.ɵɵreference(9);
          t.ɵɵadvance(1), t.ɵɵproperty("ngTemplateOutlet", A);
        }
      }
      function D(d, j) {
        if (
          (1 & d &&
            (t.ɵɵelementStart(0, "span"),
            t.ɵɵtext(1),
            t.ɵɵpipe(2, "formatTokenAmount"),
            t.ɵɵpipe(3, "displaySymbol"),
            t.ɵɵelementEnd()),
          2 & d)
        ) {
          const A = t.ɵɵnextContext();
          t.ɵɵadvance(1),
            t.ɵɵtextInterpolate2(
              " ",
              t.ɵɵpipeBind3(
                2,
                2,
                A.partnersFees.feeAmountInSourceTokens,
                A.sourceToken.decimals,
                "1.0-4"
              ),
              " \xa0",
              t.ɵɵpipeBind1(3, 6, A.sourceToken),
              " "
            );
        }
      }
      const I = function (d) {
        return { feePercent: d };
      };
      function x(d, j) {
        if (
          (1 & d &&
            (t.ɵɵelementStart(0, "p", 8), t.ɵɵtext(1), t.ɵɵelementEnd()),
          2 & d)
        ) {
          const A = t.ɵɵnextContext();
          t.ɵɵproperty(
            "translocoParams",
            t.ɵɵpureFunction1(2, I, A.partnersFees.feePercent)
          ),
            t.ɵɵadvance(1),
            t.ɵɵtextInterpolate1(
              " Partner fees are set to ",
              A.partnersFees.feePercent,
              "% for this trade "
            );
        }
      }
      let R = (() => {
        class d {
          constructor() {
            (this.usdFirst = !1),
              (this.showBrackets = !1),
              (this.classicMode = !1);
          }
        }
        return (
          (d.ɵfac = function (A) {
            return new (A || d)();
          }),
          (d.ɵcmp = t.ɵɵdefineComponent({
            type: d,
            selectors: [["partner-fees"]],
            inputs: {
              partnersFees: "partnersFees",
              sourceToken: "sourceToken",
              usdFirst: "usdFirst",
              showBrackets: "showBrackets",
              classicMode: "classicMode",
            },
            decls: 12,
            vars: 8,
            consts: [
              [
                "transloco",
                "uni.quoteInfo.partners-fees.title2",
                1,
                "trade-item__title",
              ],
              [1, "usd-value-wrap", "trade-item__value"],
              [4, "ngIf"],
              [1, "usd-token-price", 3, "amount", "token", "showBrackets"],
              ["direction", "right", 1, "rate-info-icon", 3, "tooltip"],
              ["feeAmount", ""],
              ["partnerFeesTooltip", ""],
              [4, "ngTemplateOutlet"],
              [
                "transloco",
                "uni.quoteInfo.partners-fees.tooltip",
                3,
                "translocoParams",
              ],
            ],
            template: function (A, L) {
              if (
                (1 & A &&
                  (t.ɵɵelementStart(0, "span", 0),
                  t.ɵɵtext(1, "Partner fees"),
                  t.ɵɵelementEnd(),
                  t.ɵɵelementStart(2, "div")(3, "div", 1),
                  t.ɵɵtemplate(4, E, 2, 1, "ng-container", 2),
                  t.ɵɵelement(5, "usd-token-price", 3),
                  t.ɵɵtemplate(6, S, 2, 1, "ng-container", 2),
                  t.ɵɵelement(7, "tooltip", 4),
                  t.ɵɵelementEnd()(),
                  t.ɵɵtemplate(
                    8,
                    D,
                    4,
                    8,
                    "ng-template",
                    null,
                    5,
                    t.ɵɵtemplateRefExtractor
                  ),
                  t.ɵɵtemplate(
                    10,
                    x,
                    2,
                    4,
                    "ng-template",
                    null,
                    6,
                    t.ɵɵtemplateRefExtractor
                  )),
                2 & A)
              ) {
                const O = t.ɵɵreference(11);
                t.ɵɵadvance(2),
                  t.ɵɵclassProp("usd-first", L.usdFirst),
                  t.ɵɵadvance(2),
                  t.ɵɵproperty("ngIf", !L.usdFirst),
                  t.ɵɵadvance(1),
                  t.ɵɵproperty(
                    "amount",
                    L.partnersFees.feeAmountInSourceTokens
                  )("token", L.sourceToken)("showBrackets", L.showBrackets),
                  t.ɵɵadvance(1),
                  t.ɵɵproperty("ngIf", L.usdFirst),
                  t.ɵɵadvance(1),
                  t.ɵɵproperty("tooltip", O);
              }
            },
            dependencies: [s.O5, s.tP, _.KI, h.C, f.K, u.l, C.s],
            styles: [
              ".usd-first[_ngcontent-%COMP%]   .usd-token-price[_ngcontent-%COMP%]{margin-right:5px}.rate-info-icon[_ngcontent-%COMP%]{margin:-1px 0 0 4px}",
            ],
            changeDetection: 0,
          })),
          d
        );
      })();
    },
    4671: (z, M, e) => {
      e.d(M, { T: () => C });
      var t = e(64324),
        s = e(51109),
        _ = e(91664),
        h = e(38143),
        f = e(12725);
      function u(v, E) {
        if ((1 & v && s.ɵɵelement(0, "pathfinder-routing", 6), 2 & v)) {
          const T = s.ɵɵnextContext();
          s.ɵɵproperty("sourceToken", T.data.sourceToken)(
            "destinationToken",
            T.data.destinationToken
          )("isLoading", !1)("routes", T.data.routes);
        }
      }
      let C = (() => {
        class v {
          constructor(T) {
            (this.context = T), (this.data = this.context.data);
          }
          close() {
            this.context.completeWith();
          }
        }
        return (
          (v.ɵfac = function (T) {
            return new (T || v)(s.ɵɵdirectiveInject(t.yf));
          }),
          (v.ɵcmp = s.ɵɵdefineComponent({
            type: v,
            selectors: [["pathfinder-route-popup"]],
            decls: 7,
            vars: 1,
            consts: [
              [
                "transloco",
                "routingPopUp.routing",
                1,
                "pathfinder-route-title",
              ],
              [
                "data-id",
                "routing.close-icon",
                1,
                "blank-button",
                "pathfinder-route-close",
                3,
                "click",
              ],
              ["width", "24", "height", "24"],
              [0, "xlink", "href", "assets/images/icons/cross.svg#cross"],
              [1, "schema-wrap"],
              [
                3,
                "sourceToken",
                "destinationToken",
                "isLoading",
                "routes",
                4,
                "ngIf",
              ],
              [3, "sourceToken", "destinationToken", "isLoading", "routes"],
            ],
            template: function (T, S) {
              1 & T &&
                (s.ɵɵelementStart(0, "h2", 0),
                s.ɵɵtext(1, "Routing"),
                s.ɵɵelementEnd(),
                s.ɵɵelementStart(2, "button", 1),
                s.ɵɵlistener("click", function () {
                  return S.close();
                }),
                s.ɵɵnamespaceSVG(),
                s.ɵɵelementStart(3, "svg", 2),
                s.ɵɵelement(4, "use", 3),
                s.ɵɵelementEnd()(),
                s.ɵɵnamespaceHTML(),
                s.ɵɵelementStart(5, "div", 4),
                s.ɵɵtemplate(6, u, 1, 4, "pathfinder-routing", 5),
                s.ɵɵelementEnd()),
                2 & T && (s.ɵɵadvance(6), s.ɵɵproperty("ngIf", !!S.data));
            },
            dependencies: [_.Q, h.O5, f.KI],
            styles: [
              "[_nghost-%COMP%]{display:block;position:relative;width:100%;border-radius:24px;padding:16px 1px;background-color:var(--1inch-bg-02)}.pathfinder-route-title[_ngcontent-%COMP%]{text-align:center;font-size:20px;line-height:23px;margin-bottom:0;padding:0 24px;margin-bottom:20px!important;text-align:start!important}@media (max-width: 520px){.pathfinder-route-title[_ngcontent-%COMP%]{font-size:18px}}.pathfinder-route-close[_ngcontent-%COMP%]{position:absolute;width:36px;height:36px;padding:6px;border-radius:12px;color:var(--1inch__ui-01);right:10px;top:10px;right:20px}.pathfinder-route-close[_ngcontent-%COMP%]:hover{background:var(--1inch-common-btn-bg-03)}@media (max-width: 520px){.pathfinder-route-close[_ngcontent-%COMP%]{display:none}}.schema-wrap[_ngcontent-%COMP%]{max-height:calc(100vh - 220px);overflow:scroll;padding:0 16px}.schema-wrap[_ngcontent-%COMP%]::-webkit-scrollbar-corner{background-color:transparent}@media (min-width: 720px){[_nghost-%COMP%]{min-width:720px}.schema-wrap[_ngcontent-%COMP%]{padding:0 32px}}",
            ],
            changeDetection: 0,
          })),
          v
        );
      })();
    },
    91664: (z, M, e) => {
      e.d(M, { Q: () => vt });
      var t = e(78846),
        s = e(6944),
        _ = e(96479),
        h = e(29737),
        f = e(80849),
        u = e(76027),
        C = e(53886),
        v = e(3012),
        E = e(76327),
        T = e(64736),
        S = e(17114),
        D = e(69682),
        I = e(5327),
        x = e(55468),
        R = e(41967);
      function O(p, P) {
        return (0, h.Cgt)(
          (r) =>
            !!r &&
            (function A(p, P) {
              return p.subRoutes.every((r) =>
                r.every((c) => {
                  var b, G;
                  return (
                    (null ===
                      (G =
                        null === (b = c.meta) || void 0 === b
                          ? void 0
                          : b.toTokenAddress) || void 0 === G
                      ? void 0
                      : G.toLowerCase()) === P.toLowerCase()
                  );
                })
              );
            })(r, P),
          p
        );
      }
      const K = {
        [I.$L.etherumMainnet]: {
          [R.B.ONE_INCH_LIMIT_ORDER]: x.mM.limitOrderLegacy,
          [R.B.ONE_INCH_LIMIT_ORDER_V2]: x.mM.limitOrder,
        },
        [I.$L.binanceMainnet]: {
          [R.B.BSC_ONE_INCH_LIMIT_ORDER]: x.l3.limitOrderLegacy,
          [R.B.BSC_ONE_INCH_LIMIT_ORDER_V2]: x.l3.limitOrder,
        },
        [I.$L.polygonMainnet]: {
          [R.B.POLYGON_ONE_INCH_LIMIT_ORDER]: x.bA.limitOrderLegacy,
          [R.B.POLYGON_ONE_INCH_LIMIT_ORDER_V2]: x.bA.limitOrder,
        },
        [I.$L.optimismMainnet]: {
          [R.B.OPTIMISM_ONE_INCH_LIMIT_ORDER]: x.__.limitOrderLegacy,
          [R.B.OPTIMISM_ONE_INCH_LIMIT_ORDER_V2]: x.__.limitOrder,
        },
        [I.$L.arbitrumMainnet]: {
          [R.B.ARBITRUM_ONE_INCH_LIMIT_ORDER]: x.oJ.limitOrderLegacy,
          [R.B.ARBITRUM_ONE_INCH_LIMIT_ORDER_V2]: x.oJ.limitOrder,
        },
        [I.$L.gnosisMainnet]: {
          [R.B.GNOSIS_ONE_INCH_LIMIT_ORDER_V2]: x.Qz.limitOrder,
        },
        [I.$L.avalancheMainnet]: {
          [R.B.AVALANCHE_ONE_INCH_LIMIT_ORDER_V2]: x.Iw.limitOrder,
        },
        [I.$L.fantomMainnet]: {
          [R.B.FANTOM_ONE_INCH_LIMIT_ORDER_V2]: x.GQ.limitOrder,
        },
        [I.$L.auroraMainnet]: {
          [R.B.FANTOM_ONE_INCH_LIMIT_ORDER_V2]: x.Gs.limitOrder,
        },
        [I.$L.klaytnMainnet]: {
          [R.B.FANTOM_ONE_INCH_LIMIT_ORDER_V2]: x.m7.limitOrder,
        },
      };
      var n = e(51109),
        H = e(56472),
        X = e(26960),
        U = e(24124),
        W = e(38143),
        w = e(12725),
        B = e(45256),
        V = e(70859);
      const J = ["tokenRoutes"],
        Q = ["tokenRoutesScale"];
      function tt(p, P) {
        1 & p &&
          (n.ɵɵelementContainerStart(0),
          n.ɵɵelementStart(1, "div", 13),
          n.ɵɵelement(2, "img", 14),
          n.ɵɵelementEnd(),
          n.ɵɵelementContainerEnd());
      }
      function et(p, P) {
        1 & p &&
          (n.ɵɵelementStart(0, "div", 15),
          n.ɵɵnamespaceSVG(),
          n.ɵɵelementStart(1, "svg", 16),
          n.ɵɵelement(2, "use", 17),
          n.ɵɵelementEnd(),
          n.ɵɵnamespaceHTML(),
          n.ɵɵelementStart(3, "p", 18),
          n.ɵɵelement(4, "span", 19),
          n.ɵɵelementEnd()());
      }
      function $(p, P) {
        if (
          (1 & p &&
            (n.ɵɵelementStart(0, "span"), n.ɵɵtext(1), n.ɵɵelementEnd()),
          2 & p)
        ) {
          const r = n.ɵɵnextContext(2).$implicit;
          n.ɵɵadvance(1), n.ɵɵtextInterpolate1("", r.routeShare, "%");
        }
      }
      function Y(p, P) {
        1 & p && n.ɵɵelementContainer(0);
      }
      const Z = function (p, P, r) {
        return { subRoutes: p, rowIndex: P, colIndex: r };
      };
      function it(p, P) {
        if (
          (1 & p &&
            (n.ɵɵnamespaceSVG(),
            n.ɵɵnamespaceHTML(),
            n.ɵɵelementContainerStart(0),
            n.ɵɵtemplate(1, Y, 1, 0, "ng-container", 24),
            n.ɵɵelementContainerEnd()),
          2 & p)
        ) {
          const r = P.$implicit,
            c = P.index,
            b = n.ɵɵnextContext(2).index;
          n.ɵɵnextContext(2);
          const G = n.ɵɵreference(3);
          n.ɵɵadvance(1),
            n.ɵɵproperty("ngTemplateOutlet", G)(
              "ngTemplateOutletContext",
              n.ɵɵpureFunction3(2, Z, r, b, c)
            );
        }
      }
      const rt = function () {
        return [];
      };
      function lt(p, P) {
        if (
          (1 & p &&
            (n.ɵɵelementContainerStart(0),
            n.ɵɵelementStart(1, "div", 20)(2, "div", 21),
            n.ɵɵtemplate(3, $, 2, 1, "span", 7),
            n.ɵɵnamespaceSVG(),
            n.ɵɵelementStart(4, "svg", 22),
            n.ɵɵelement(5, "use", 23),
            n.ɵɵelementEnd()(),
            n.ɵɵtemplate(6, it, 2, 6, "ng-container", 11),
            n.ɵɵelementEnd(),
            n.ɵɵelementContainerEnd()),
          2 & p)
        ) {
          const r = n.ɵɵnextContext().$implicit,
            c = n.ɵɵnextContext().ngIf;
          n.ɵɵadvance(3),
            n.ɵɵproperty("ngIf", c.length > 1),
            n.ɵɵadvance(3),
            n.ɵɵproperty(
              "ngForOf",
              (null == r ? null : r.subRoutes) || n.ɵɵpureFunction0(2, rt)
            );
        }
      }
      function dt(p, P) {
        if (
          (1 & p &&
            (n.ɵɵelementStart(0, "div"),
            n.ɵɵtemplate(1, lt, 7, 3, "ng-container", 7),
            n.ɵɵelementEnd()),
          2 & p)
        ) {
          const r = P.$implicit,
            c = n.ɵɵnextContext(2);
          n.ɵɵadvance(1), n.ɵɵproperty("ngIf", c.getCountRows(r.subRoutes));
        }
      }
      function ut(p, P) {
        1 & p && n.ɵɵelementContainer(0);
      }
      function mt(p, P) {
        if (
          (1 & p &&
            (n.ɵɵelementContainerStart(0),
            n.ɵɵtemplate(1, ut, 1, 0, "ng-container", 24),
            n.ɵɵelementContainerEnd()),
          2 & p)
        ) {
          const r = P.$implicit,
            c = P.index,
            b = n.ɵɵnextContext().index;
          n.ɵɵnextContext(3);
          const G = n.ɵɵreference(3);
          n.ɵɵadvance(1),
            n.ɵɵproperty("ngTemplateOutlet", G)(
              "ngTemplateOutletContext",
              n.ɵɵpureFunction3(2, Z, r, b, c)
            );
        }
      }
      function _t(p, P) {
        if (
          (1 & p &&
            (n.ɵɵelementContainerStart(0),
            n.ɵɵtemplate(1, mt, 2, 6, "ng-container", 11),
            n.ɵɵelementContainerEnd()),
          2 & p)
        ) {
          const r = P.$implicit;
          n.ɵɵadvance(1),
            n.ɵɵproperty("ngForOf", r.subRoutes || n.ɵɵpureFunction0(1, rt));
        }
      }
      function gt(p, P) {
        if (
          (1 & p &&
            (n.ɵɵelementStart(0, "div", 25),
            n.ɵɵelement(1, "div", 26),
            n.ɵɵelementStart(2, "div", 27),
            n.ɵɵtemplate(3, _t, 2, 2, "ng-container", 11),
            n.ɵɵelementEnd()()),
          2 & p)
        ) {
          const r = n.ɵɵnextContext().ngIf,
            c = n.ɵɵnextContext();
          n.ɵɵadvance(3), n.ɵɵproperty("ngForOf", c.destinationRoutes(r));
        }
      }
      function ft(p, P) {
        if (
          (1 & p &&
            (n.ɵɵelementStart(0, "div", 2)(1, "div", 3),
            n.ɵɵelement(2, "token-icon", 4),
            n.ɵɵelementEnd(),
            n.ɵɵelementStart(3, "div", 5, 6),
            n.ɵɵtemplate(5, tt, 3, 0, "ng-container", 7),
            n.ɵɵtemplate(6, et, 5, 0, "div", 8),
            n.ɵɵelementStart(7, "div", 9, 10),
            n.ɵɵtemplate(9, dt, 2, 1, "div", 11),
            n.ɵɵelementEnd(),
            n.ɵɵtemplate(10, gt, 4, 1, "div", 12),
            n.ɵɵelementEnd(),
            n.ɵɵelementStart(11, "div", 3),
            n.ɵɵelement(12, "token-icon", 4),
            n.ɵɵelementEnd()()),
          2 & p)
        ) {
          const r = P.ngIf,
            c = n.ɵɵnextContext();
          n.ɵɵadvance(2),
            n.ɵɵproperty("token", c.sourceToken),
            n.ɵɵadvance(1),
            n.ɵɵclassProp("display-grid", !(null == r || !r.length))(
              "two-columns",
              c.isHitchSwap
            ),
            n.ɵɵadvance(2),
            n.ɵɵproperty("ngIf", c.isLoading),
            n.ɵɵadvance(1),
            n.ɵɵproperty("ngIf", !(c.isLoading || (null != r && r.length))),
            n.ɵɵadvance(3),
            n.ɵɵproperty(
              "ngForOf",
              c.isHitchSwap ? c.routesWithoutDestination(r) : r
            ),
            n.ɵɵadvance(1),
            n.ɵɵproperty("ngIf", c.isHitchSwap),
            n.ɵɵadvance(2),
            n.ɵɵproperty("token", c.destinationToken);
        }
      }
      function ht(p, P) {
        if (1 & p) {
          const r = n.ɵɵgetCurrentView();
          n.ɵɵelementContainerStart(0),
            n.ɵɵelementStart(1, "p", 33)(2, "span", 34),
            n.ɵɵlistener("click", function () {
              const G = n.ɵɵrestoreView(r).$implicit,
                q = n.ɵɵnextContext(2);
              return n.ɵɵresetView(q.openEtherscan(G.market.id, G.market.name));
            }),
            n.ɵɵtext(3),
            n.ɵɵpipe(4, "liquiditySourceName"),
            n.ɵɵelementEnd(),
            n.ɵɵelementStart(5, "span", 35),
            n.ɵɵlistener("click", function () {
              n.ɵɵrestoreView(r);
              const b = n.ɵɵnextContext(2);
              return n.ɵɵresetView(b.toggleDisplayMode());
            }),
            n.ɵɵtext(6),
            n.ɵɵelementEnd()(),
            n.ɵɵelementContainerEnd();
        }
        if (2 & p) {
          const r = P.$implicit,
            c = n.ɵɵnextContext(2);
          n.ɵɵadvance(2),
            n.ɵɵclassProp("hover-underline", !c.isPMM(r.market.name)),
            n.ɵɵadvance(1),
            n.ɵɵtextInterpolate1(
              " ",
              n.ɵɵpipeBind1(4, 4, r.market.name.replace("ZEROEX", "0x")),
              " "
            ),
            n.ɵɵadvance(3),
            n.ɵɵtextInterpolate1("", r.subRouteShare, "% ");
        }
      }
      function Ct(p, P) {
        if (
          (1 & p &&
            (n.ɵɵelementStart(0, "div", 28)(1, "div", 29)(2, "div", 30),
            n.ɵɵelement(3, "token-icon", 31),
            n.ɵɵelementStart(4, "p"),
            n.ɵɵtext(5),
            n.ɵɵelementEnd()(),
            n.ɵɵtemplate(6, ht, 7, 6, "ng-container", 11),
            n.ɵɵnamespaceSVG(),
            n.ɵɵelementStart(7, "svg", 32),
            n.ɵɵelement(8, "use", 23),
            n.ɵɵelementEnd()()()),
          2 & p)
        ) {
          const r = P.subRoutes,
            c = P.rowIndex,
            b = P.colIndex,
            G = n.ɵɵnextContext();
          n.ɵɵadvance(1),
            n.ɵɵattribute("data-id", "pathfinder-routing-" + c + "-" + b),
            n.ɵɵadvance(2),
            n.ɵɵproperty("token", G.getToken(r.routes[0].toTokenAddress)),
            n.ɵɵadvance(2),
            n.ɵɵtextInterpolate(G.getTokenSymbol(r.routes[0].toTokenAddress)),
            n.ɵɵadvance(1),
            n.ɵɵproperty("ngForOf", r.routes);
        }
      }
      function st(p) {
        return p.reduce((P, r) => P + r.part, 0);
      }
      let vt = (() => {
        class p {
          constructor(r, c, b) {
            (this.tokensQuery = r),
              (this.chainExplorerService = c),
              (this.activeConnectionQuery = b),
              (this.isHitchSwap = !1),
              (this.hitchSwapDestinationRoutes = 0),
              (this.routes$ = new f.t(1)),
              (this.showAbsoluteInEachSubRoute$ = new u.X(!1)),
              (this.data$ = this.routes$.pipe(
                (0, E.w)((G) =>
                  (0, C.a)([
                    (0, v.of)(G),
                    this.showAbsoluteInEachSubRoute$,
                  ]).pipe(
                    (0, T.U)((q) => {
                      const [ot] = q;
                      return null != ot && ot.length
                        ? this.processRoutes(q)
                        : [];
                    }),
                    (0, S.K)(() => (0, v.of)([]))
                  )
                ),
                (0, D.d)({ refCount: !0, bufferSize: 1 })
              ));
          }
          set routes(r) {
            !r ||
              ((this.isHitchSwap = (function d(p, P) {
                if (p.length < 2) return !1;
                const r = (0, h.Z$Q)(
                  p[0].subRoutes
                )[0].toTokenAddress.toLowerCase();
                if (r === P) return !1;
                const c = (function L(p, P) {
                    return (0, h.oEU)(
                      (r) =>
                        !!r &&
                        (function j(p, P) {
                          return (
                            (0, h.Z$Q)(
                              (0, h.Z$Q)(p.subRoutes)
                            ).toTokenAddress.toLowerCase() === P
                          );
                        })(r, P),
                      p
                    );
                  })(p, r),
                  b = O(p, P);
                return c.length + b.length === p.length;
              })(r, this.destinationToken.address)),
              this.isHitchSwap &&
                (this.hitchSwapDestinationRoutes = O(
                  r,
                  this.destinationToken.address
                ).length),
              this.routes$.next(r));
          }
          routesWithoutDestination(r) {
            return (0, h.mAg)(this.hitchSwapDestinationRoutes, r);
          }
          destinationRoutes(r) {
            return (0, h.h$H)(this.hitchSwapDestinationRoutes, r);
          }
          processRoutes(r) {
            const [c, b] = r,
              G = st(c);
            return c.map((q) => {
              const ot = q.part / G,
                pt = (0, t.l)(100 * ot, 2),
                wt = q.subRoutes.map((a) => {
                  const k = st(a);
                  return {
                    routes: a.map((y) => {
                      let N = (y.part / k) * 100;
                      b && (N *= ot);
                      const at = (0, t.l)(N, 2);
                      return Object.assign(Object.assign({}, y), {
                        subRouteShare: at,
                      });
                    }),
                  };
                });
              return Object.assign(Object.assign({}, q), {
                subRoutes: wt,
                routeShare: this.isHitchSwap ? 2 * pt : pt,
              });
            });
          }
          getTokenSymbol(r) {
            const c = this.tokensQuery.getByAddress(r.toLowerCase());
            if (c) return (0, _.O)(c);
          }
          getToken(r) {
            return this.tokensQuery.getByAddress(r.toLowerCase());
          }
          fact(r) {
            let c = 2;
            const b = [];
            if (r === c) return [c];
            for (; r > c; ) r % c == 0 && b.push(c), c++;
            return b.push(r), b;
          }
          getNOK(r) {
            const c = r.length;
            let b = Math.abs(r[0]);
            for (let G = 1; G < c; G++) {
              let q = Math.abs(r[G]);
              const ot = b;
              for (; b && q; ) b > q ? (b %= q) : (q %= b);
              b = Math.abs(ot * r[G]) / (b + q);
            }
            return b;
          }
          getCountRows(r) {
            const c = r.map((b) => b.routes.length);
            return this.getNOK(c);
          }
          getCellHeight(r, c) {
            return c / r.length;
          }
          getCellOffset(r, c, b) {
            return this.getCellHeight(r, c) * b + 1;
          }
          toggleDisplayMode() {
            const r = this.showAbsoluteInEachSubRoute$.getValue();
            this.showAbsoluteInEachSubRoute$.next(!r);
          }
          isPMM(r) {
            return (0, s.s)(r);
          }
          isZeroX(r) {
            return "ZEROEX" === r;
          }
          isBancorV3(r) {
            return "ETH_BANCOR_V3" === r;
          }
          isOneInchLimitOrderProtocol(r) {
            const { currentChainId: c } = this.activeConnectionQuery;
            return !!K[c][r];
          }
          getOneInchLimitOrderAddress(r) {
            const { currentChainId: c } = this.activeConnectionQuery;
            return K[c][r];
          }
          openEtherscan(r, c) {
            this.isPMM(c) ||
              this.isZeroX(c) ||
              this.isBancorV3(c) ||
              (this.isOneInchLimitOrderProtocol(c) &&
                (r = this.getOneInchLimitOrderAddress(c)),
              this.chainExplorerService.openAddressLink(r));
          }
        }
        return (
          (p.ɵfac = function (r) {
            return new (r || p)(
              n.ɵɵdirectiveInject(H.d),
              n.ɵɵdirectiveInject(X.o),
              n.ɵɵdirectiveInject(U.r)
            );
          }),
          (p.ɵcmp = n.ɵɵdefineComponent({
            type: p,
            selectors: [["pathfinder-routing"]],
            viewQuery: function (r, c) {
              if (
                (1 & r && (n.ɵɵviewQuery(J, 5), n.ɵɵviewQuery(Q, 5)), 2 & r)
              ) {
                let b;
                n.ɵɵqueryRefresh((b = n.ɵɵloadQuery())) &&
                  (c.tokenRoutesElement = b.first),
                  n.ɵɵqueryRefresh((b = n.ɵɵloadQuery())) &&
                    (c.tokenRoutesScaleElement = b.first);
              }
            },
            inputs: {
              sourceToken: "sourceToken",
              destinationToken: "destinationToken",
              isLoading: "isLoading",
              routes: "routes",
            },
            decls: 4,
            vars: 3,
            consts: [
              ["class", "routing-wrap", 4, "ngIf"],
              ["routeCell", ""],
              [1, "routing-wrap"],
              [1, "routing-wrap-item", "side-separator"],
              [1, "token-label", 3, "token"],
              [1, "token-routes"],
              ["tokenRoutes", ""],
              [4, "ngIf"],
              ["class", "warning-box", 4, "ngIf"],
              [1, "token-routes-scale"],
              ["tokenRoutesScale", ""],
              [4, "ngFor", "ngForOf"],
              ["class", "hitch-swap-routes", 4, "ngIf"],
              [1, "routing-loader"],
              ["src", "/assets/images/loader3.svg", "alt", ""],
              [1, "warning-box"],
              ["height", "20", "width", "20", 1, "warning-icon"],
              [
                0,
                "xlink",
                "href",
                "assets/images/icons/attention-triangle.svg#attention-triangle",
              ],
              [1, "text-yellow"],
              ["transloco", "button.insufficient-liquidity"],
              [1, "route-wrap", "display-flex-row"],
              [1, "text-gray", "route-info"],
              [
                "width",
                "24",
                "height",
                "24",
                1,
                "text-gray",
                "route-info-arrow",
              ],
              [
                0,
                "xlink",
                "href",
                "/assets/images/icons/arrow-right_2.svg#arrow-right",
              ],
              [4, "ngTemplateOutlet", "ngTemplateOutletContext"],
              [1, "hitch-swap-routes"],
              [1, "routing-wrap-item", "side-separator", "token-label"],
              [1, "hitch-swap-routes-column"],
              [1, "display-flex-col"],
              [1, "routing-box-border", "display-flex-col-val"],
              [1, "cell-header"],
              [1, "cell-header-token", 3, "token"],
              [
                "width",
                "24",
                "height",
                "24",
                1,
                "text-gray",
                "display-flex-col-img",
              ],
              [1, "text-gray", "routing-box-value-bg", "cell-value"],
              [3, "click"],
              [1, "hover-underline", 2, "cursor", "pointer", 3, "click"],
            ],
            template: function (r, c) {
              1 & r &&
                (n.ɵɵtemplate(0, ft, 13, 10, "div", 0),
                n.ɵɵpipe(1, "async"),
                n.ɵɵtemplate(
                  2,
                  Ct,
                  9,
                  4,
                  "ng-template",
                  null,
                  1,
                  n.ɵɵtemplateRefExtractor
                )),
                2 & r && n.ɵɵproperty("ngIf", n.ɵɵpipeBind1(1, 1, c.data$));
            },
            dependencies: [W.sg, W.O5, W.tP, w.KI, B.o, W.Ov, V._],
            styles: [
              ".schema[_ngcontent-%COMP%]{margin:40px 0;display:block}.schema-card[_ngcontent-%COMP%]{border-radius:20px!important;padding:16px;margin:16px 0!important}.schema-title[_ngcontent-%COMP%]{padding:0}.mat-expansion-panel-header[_ngcontent-%COMP%]{height:auto!important}.schema-header[_ngcontent-%COMP%]{margin:0;padding:0}.schema-header[_ngcontent-%COMP%]:hover{background:none!important}.routing-wrap[_ngcontent-%COMP%]{display:flex;justify-content:center;margin:0 -16px}.token-label[_ngcontent-%COMP%]{border-radius:8px;display:flex;flex-direction:column;justify-content:center;align-items:center;width:32px;height:32px}.token-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{white-space:nowrap}.routing-wrap-item[_ngcontent-%COMP%]{display:flex;align-items:center;padding:16px}.token-route-wrap[_ngcontent-%COMP%]{display:grid;grid-template-columns:24px 1fr 24px;grid-column-gap:24px;align-items:center;margin-bottom:24px}.token-route-wrap[_ngcontent-%COMP%]:last-child{margin-bottom:0}.token-route[_ngcontent-%COMP%]{display:grid;grid-template-columns:32px 1fr;grid-column-gap:8px;align-items:center}.token-route[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:32px;height:32px}.display-grid[_ngcontent-%COMP%]{display:grid;grid-template-rows:1fr;grid-template-columns:1fr;grid-row-gap:10px;grid-column-gap:24px}.display-flex-row[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.display-flex-col[_ngcontent-%COMP%]{display:flex;justify-content:center;flex-direction:column;width:100%}.display-flex-col-val[_ngcontent-%COMP%]{padding:16px 16px 0;border-radius:16px;margin:4px 20px;font-size:16px;position:relative}.display-flex-col-val[_ngcontent-%COMP%]   .display-flex-col-img[_ngcontent-%COMP%]{position:absolute;right:-34px;top:calc(50% - 13px)}.cell-header[_ngcontent-%COMP%]{display:grid;grid-template-columns:24px 1fr;grid-column-gap:8px;align-items:center;margin-bottom:6px}.cell-header-token[_ngcontent-%COMP%]{width:24px;height:24px}.cell-value[_ngcontent-%COMP%]{border-radius:8px;padding:4px 6px;margin-bottom:8px;white-space:nowrap;-webkit-user-select:none;user-select:none}.cell-value[_ngcontent-%COMP%]:last-of-type{margin-bottom:12px}.token-routes[_ngcontent-%COMP%]{width:100%;overflow:auto;grid-row-gap:32px;padding:0 20px 0 12px}.token-routes.two-columns[_ngcontent-%COMP%]{grid-template-columns:2fr 1fr}.route-wrap[_ngcontent-%COMP%]{position:relative}.route-info[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;position:relative;margin-right:-12px;min-width:50px}.route-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-right:-2px;min-width:30px}.hover-underline[_ngcontent-%COMP%]{cursor:pointer}.hover-underline[_ngcontent-%COMP%]:hover{text-decoration:underline}.more-btn[_ngcontent-%COMP%]{color:var(--1inch-common-btn-bg-01);padding:4px;margin-top:8px}.more-btn[_ngcontent-%COMP%]:hover{cursor:pointer}.route-info-arrow[_ngcontent-%COMP%]{margin-top:-2px}.warning-box[_ngcontent-%COMP%]{width:100%;padding:10px;border:solid 1px var(--1inch-warning-text-02);border-radius:20px;color:var(--1inch__text-and-icons__warning);display:flex;align-items:center;flex-direction:column;justify-content:center}.routing-loader[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:100%;padding:16px}.routing-loader[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40px;height:40px}.hitch-swap-routes[_ngcontent-%COMP%]{display:flex}.hitch-swap-routes-column[_ngcontent-%COMP%]{margin:auto 0}@media (min-width: 720px){.schema-card[_ngcontent-%COMP%]{padding:20px 40px;margin:40px 0 20px!important}.schema-toggles-line[_ngcontent-%COMP%]{overflow:hidden;margin:32px -30px -8px;display:block}}",
            ],
            changeDetection: 0,
          })),
          p
        );
      })();
    },
    78090: (z, M, e) => {
      e.d(M, { r: () => L });
      var t = e(57015),
        s = e(38143),
        _ = e(31777),
        h = e(54510),
        f = e(12725),
        u = e(65395),
        C = e(74578),
        v = e(65687),
        E = e(26341),
        T = e(60803),
        S = e(91066),
        D = e(74586),
        I = e(56739),
        x = e(84316),
        R = e(65028),
        d = e(63223),
        j = e(83506),
        A = e(51109);
      let L = (() => {
        class O {}
        return (
          (O.ɵfac = function (n) {
            return new (n || O)();
          }),
          (O.ɵmod = A.ɵɵdefineNgModule({ type: O })),
          (O.ɵinj = A.ɵɵdefineInjector({
            imports: [
              h.Bz,
              s.ez,
              t.Cl,
              D.I,
              R.Y,
              E.Q,
              d._,
              x.k,
              S.E,
              T.p,
              f.y4,
              I.U,
              _.ReactiveFormsModule,
              j.Z,
              C.WD,
              v.m,
              u.I,
            ],
          })),
          O
        );
      })();
    },
    96139: (z, M, e) => {
      e.d(M, { y: () => X });
      var t = e(51109),
        s = e(31777),
        _ = e(48205),
        h = e(33747),
        f = e(76027),
        u = e(84154),
        C = e(55231),
        v = e(25221),
        E = e(35878),
        T = e(76277),
        S = e(68751),
        D = e(64736),
        I = e(93130),
        x = e(8035),
        R = e(38143),
        d = e(19424),
        j = e(57951),
        A = e(43529),
        L = e(98569),
        O = e(12725);
      function K(U, W) {
        1 & U &&
          (t.ɵɵelementStart(0, "alert", 8)(1, "p", 9)(2, "span", 10),
          t.ɵɵtext(
            3,
            " If you use an address that belongs to Binance or another centralized exchange you might lose your funds. "
          ),
          t.ɵɵelementEnd(),
          t.ɵɵelementStart(4, "span"),
          t.ɵɵtext(5, "\xa0"),
          t.ɵɵelementEnd(),
          t.ɵɵelementStart(6, "span"),
          t.ɵɵtext(7, "\xa0"),
          t.ɵɵelementEnd(),
          t.ɵɵelementStart(8, "a", 11)(9, "span", 12),
          t.ɵɵtext(10, "Learn more"),
          t.ɵɵelementEnd(),
          t.ɵɵnamespaceSVG(),
          t.ɵɵelementStart(11, "svg", 13),
          t.ɵɵelement(12, "use", 14),
          t.ɵɵelementEnd()()(),
          t.ɵɵnamespaceHTML(),
          t.ɵɵelementStart(13, "tui-checkbox-labeled", 15)(14, "span", 16),
          t.ɵɵtext(15, "I understand"),
          t.ɵɵelementEnd()()());
      }
      function n(U, W) {
        if (
          (1 & U &&
            (t.ɵɵelementStart(0, "div", 4),
            t.ɵɵelement(1, "app-address", 5)(2, "tui-field-error", 6),
            t.ɵɵtemplate(3, K, 16, 0, "alert", 7),
            t.ɵɵpipe(4, "async"),
            t.ɵɵelementEnd()),
          2 & U)
        ) {
          const w = t.ɵɵnextContext();
          t.ɵɵadvance(1),
            t.ɵɵproperty("label", w.addressLabel),
            t.ɵɵadvance(2),
            t.ɵɵproperty("ngIf", t.ɵɵpipeBind1(4, 2, w.showWarning$));
        }
      }
      const H = {
        checkEns: !0,
        banTheSameAddress: !0,
        banContract: !0,
        ignoreEmptyAddress: !1,
      };
      let X = (() => {
        class U {
          constructor(w, B, V, J) {
            (this.fb = w),
              (this.onDestroy$ = B),
              (this.walletConnectionQuery = V),
              (this.checkAddressService = J),
              (this.label = ""),
              (this.addressLabel = ""),
              (this.form = this.fb.group({
                checked: [!1],
                warningAccepted: [
                  { value: !1, disabled: !0 },
                  s.Validators.requiredTrue,
                ],
                address: [
                  { value: "", disabled: !0 },
                  [],
                  this.checkAddressService.getAsyncAddressValidator(H),
                ],
              })),
              (this.showWarning$ = new f.X(!1)),
              (this.onChanged = _.iD),
              (this.onTouched = _.iD),
              (this.onValidatorChanged = _.iD);
          }
          get checkedControl() {
            return this.form.get("checked");
          }
          get checked() {
            return this.checkedControl.value;
          }
          get warningAcceptedControl() {
            return this.form.get("warningAccepted");
          }
          get warningAccepted() {
            return this.warningAcceptedControl.value;
          }
          get addressControl() {
            return this.form.get("address");
          }
          get address() {
            return this.addressControl.value;
          }
          ngOnInit() {
            this.checkedControl.valueChanges
              .pipe((0, C.R)(this.onDestroy$))
              .subscribe({
                next: (w) => {
                  const B = { emitEvent: !1 };
                  w
                    ? (this.addressControl.enable(B),
                      this.warningAcceptedControl.enable(B))
                    : (this.addressControl.disable(B),
                      this.warningAcceptedControl.disable(B)),
                    this.onChanged(this.form.value);
                },
              }),
              this.warningAcceptedControl.valueChanges
                .pipe((0, C.R)(this.onDestroy$))
                .subscribe({
                  next: () => {
                    this.onChanged(this.form.value);
                  },
                }),
              this.addressControl.valueChanges
                .pipe((0, v.T)(1), (0, E.x)(), (0, C.R)(this.onDestroy$))
                .subscribe({
                  next: (w) => {
                    const B = localStorage.getItem("savedReceiverAddresses"),
                      V = B && JSON.parse(B).includes(w.toLowerCase());
                    this.showWarning$.next(!V),
                      this.warningAcceptedControl.setValue(V),
                      this.onChanged(
                        Object.assign(Object.assign({}, this.form.value), {
                          address: w,
                        })
                      ),
                      this.addressControl.markAsTouched();
                  },
                }),
              this.addressControl.statusChanges
                .pipe(
                  (0, T.Q)(u.z),
                  (0, S.h)((w) => "VALID" === w || "INVALID" === w),
                  (0, D.U)(() => this.form.valid),
                  (0, E.x)(),
                  (0, C.R)(this.onDestroy$)
                )
                .subscribe({
                  next: () => {
                    this.onValidatorChanged();
                  },
                });
          }
          registerOnChange(w) {
            this.onChanged = w;
          }
          registerOnTouched(w) {
            this.onTouched = w;
          }
          setDisabledState(w) {
            w
              ? (this.addressControl.disable({ emitEvent: !1 }),
                this.checkedControl.disable({ emitEvent: !1 }),
                this.warningAcceptedControl.disable({ emitEvent: !1 }))
              : (this.addressControl.enable({ emitEvent: !1 }),
                this.checkedControl.enable({ emitEvent: !1 }),
                this.warningAcceptedControl.enable({ emitEvent: !1 }));
          }
          writeValue(w) {
            var B, V, J;
            const tt =
                null !== (B = null == w ? void 0 : w.checked) &&
                void 0 !== B &&
                B,
              et =
                null !== (V = null == w ? void 0 : w.warningAccepted) &&
                void 0 !== V &&
                V,
              $ =
                null !== (J = null == w ? void 0 : w.address) && void 0 !== J
                  ? J
                  : "";
            tt ? this.addressControl.enable() : this.addressControl.disable(),
              tt
                ? this.warningAcceptedControl.enable()
                : this.warningAcceptedControl.disable(),
              this.form.patchValue(
                { checked: tt, warningAccepted: et, address: $ },
                { emitEvent: !1 }
              );
          }
          validate() {
            return this.addressControl.disabled ||
              (this.addressControl.valid && this.warningAcceptedControl.valid)
              ? null
              : { invalidAddress: !0 };
          }
          registerOnValidatorChange(w) {
            this.onValidatorChanged = w;
          }
          ngDoCheck() {
            this.checkedControl.touched && this.onTouched();
          }
        }
        return (
          (U.ɵfac = function (w) {
            return new (w || U)(
              t.ɵɵdirectiveInject(s.UntypedFormBuilder),
              t.ɵɵdirectiveInject(h.a3, 2),
              t.ɵɵdirectiveInject(I.r),
              t.ɵɵdirectiveInject(x.v)
            );
          }),
          (U.ɵcmp = t.ɵɵdefineComponent({
            type: U,
            selectors: [["send-to-another-address"]],
            inputs: { label: "label", addressLabel: "addressLabel" },
            features: [
              t.ɵɵProvidersFeature([
                h.a3,
                {
                  provide: s.NG_VALUE_ACCESSOR,
                  useExisting: (0, t.forwardRef)(() => U),
                  multi: !0,
                },
                {
                  provide: s.NG_VALIDATORS,
                  useExisting: (0, t.forwardRef)(() => U),
                  multi: !0,
                },
              ]),
            ],
            decls: 5,
            vars: 3,
            consts: [
              [1, "another-receiver-container", 3, "formGroup"],
              [
                "formControlName",
                "checked",
                "data-id",
                "send-to-another-address.checkbox",
                1,
                "tui-checkbox",
              ],
              [1, "tui-checkbox-label"],
              ["class", "address-container", 4, "ngIf"],
              [1, "address-container"],
              ["formControlName", "address", 1, "address", 3, "label"],
              ["formControlName", "address", 1, "tui-error"],
              ["type", "alert", "hideCloseButton", "true", 4, "ngIf"],
              ["type", "alert", "hideCloseButton", "true"],
              ["data-id", "send-to-another-address.centralized-exchange-alert"],
              ["transloco", "another-receiver.if-address-belongs"],
              [
                "href",
                "https://help.1inch.io/en/articles/6086287-what-is-a-smart-contract-transfer-and-how-do-they-affect-me",
                "target",
                "_blank",
                1,
                "another-receiver-link",
              ],
              ["transloco", "learn-more"],
              ["width", "16", "height", "16"],
              [
                0,
                "xlink",
                "href",
                "assets/images/icons/arrow-link-2.svg#arrow-link-2",
              ],
              [
                "data-id",
                "send-to-another-address.i-understand",
                "formControlName",
                "warningAccepted",
                1,
                "tui-checkbox",
                "warning-checkbox",
              ],
              [
                "transloco",
                "uni.importToken.i-understand",
                1,
                "tui-checkbox-label",
              ],
            ],
            template: function (w, B) {
              1 & w &&
                (t.ɵɵelementStart(0, "div", 0)(1, "tui-checkbox-labeled", 1)(
                  2,
                  "span",
                  2
                ),
                t.ɵɵtext(3),
                t.ɵɵelementEnd()(),
                t.ɵɵtemplate(4, n, 5, 4, "div", 3),
                t.ɵɵelementEnd()),
                2 & w &&
                  (t.ɵɵproperty("formGroup", B.form),
                  t.ɵɵadvance(3),
                  t.ɵɵtextInterpolate(B.label),
                  t.ɵɵadvance(1),
                  t.ɵɵproperty("ngIf", B.checked));
            },
            dependencies: [
              R.O5,
              d.p,
              s.NgControlStatus,
              s.NgControlStatusGroup,
              s.FormGroupDirective,
              s.FormControlName,
              A.h,
              j.y,
              L.w,
              O.KI,
              R.Ov,
            ],
            styles: [
              ".another-receiver-container[_ngcontent-%COMP%]{display:flex;flex-direction:column}.tui-checkbox[_ngcontent-%COMP%]     tui-primitive-checkbox{width:18px;height:18px}.tui-checkbox[_ngcontent-%COMP%]     tui-primitive-checkbox tui-wrapper{border-radius:3px}.tui-checkbox[_ngcontent-%COMP%]     tui-primitive-checkbox tui-wrapper[data-appearance=primary]{background-color:var(--1inch-common-btn-bg-01)}.tui-checkbox[_ngcontent-%COMP%]     tui-primitive-checkbox tui-wrapper[data-appearance=outline] span{display:block;height:18px;border:1px solid var(--1inch-border-04)}.tui-checkbox[_ngcontent-%COMP%]     tui-primitive-checkbox tui-wrapper span{background:inherit;color:inherit;border-radius:inherit}.tui-checkbox[_ngcontent-%COMP%]     tui-primitive-checkbox tui-wrapper span tui-svg{color:#fff;border-radius:inherit;background-color:inherit}.tui-checkbox[_ngcontent-%COMP%]   .tui-checkbox-label[_ngcontent-%COMP%]{line-height:20px}.address-container[_ngcontent-%COMP%]{margin-top:16px}.address-container[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%]     .hint{position:relative;margin-bottom:8px}.address-container[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%]     .paste-icon{position:absolute;right:0;top:20px;z-index:3}.address-container[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%]     tui-wrapper{width:calc(100% - 20px);font-size:16px}.address-container[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%]     tui-wrapper .t-input{font-size:16px;min-height:16px}.address-container[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%]     .input-container .input-control .t-placeholder{font-size:16px!important}.address-container[_ngcontent-%COMP%] > alert[_ngcontent-%COMP%]{margin-bottom:-16px}.address-container[_ngcontent-%COMP%] > alert[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:none}tui-field-error[_ngcontent-%COMP%]{padding-left:10px}.warning-checkbox[_ngcontent-%COMP%]{margin-top:8px}.warning-checkbox[_ngcontent-%COMP%]     tui-checkbox tui-primitive-checkbox tui-wrapper[data-appearance=primary]{background-color:#fff}.warning-checkbox[_ngcontent-%COMP%]     tui-checkbox tui-primitive-checkbox tui-wrapper[data-appearance=outline]{color:#fff;background-color:transparent}.warning-checkbox[_ngcontent-%COMP%]     tui-checkbox tui-primitive-checkbox tui-wrapper[data-appearance=outline]:after{color:var(--1inch-border-04)}.warning-checkbox[_ngcontent-%COMP%]     tui-checkbox tui-primitive-checkbox tui-wrapper span{background:inherit;color:inherit;border-radius:inherit}.warning-checkbox[_ngcontent-%COMP%]     tui-checkbox tui-primitive-checkbox tui-wrapper span tui-svg{color:var(--1inch-common-text-05);border-radius:inherit}.warning-checkbox[_ngcontent-%COMP%]     tui-checkbox tui-primitive-checkbox tui-wrapper span tui-svg.mark{padding:0;background-color:inherit}.another-receiver-link[_ngcontent-%COMP%]{display:inline-block;color:var(--1inch-text-01)}.another-receiver-link[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{margin:-2px 0 0 4px}",
            ],
            changeDetection: 0,
          })),
          U
        );
      })();
    },
    51415: (z, M, e) => {
      e.d(M, { n: () => O });
      var t = e(68487),
        s = e(30137),
        _ = e(1596),
        h = e(45461),
        f = e(32005),
        u = e(71426),
        C = e(29737),
        v = e(3012),
        E = e(53886),
        T = e(64736),
        S = e(69682),
        D = e(76327),
        I = e(35878),
        x = e(17114),
        R = e(12733),
        d = e(84756),
        A = e(83140);
      const L = localStorage.getItem("logSwapButtonStateChanges");
      class O {
        constructor(n, H, X, U, W, w, B, V, J, Q, tt, et) {
          (this.stateRecalculateTrigger$ = n),
            (this.isSynthetixRoute$ = H),
            (this.swapInfo$ = X),
            (this.activeConnectionQuery = U),
            (this.tokenBalanceQuery = W),
            (this.gasPriceQuery = w),
            (this.walletConnectionQuery = B),
            (this.tokenAllowanceQuery = V),
            (this.permitAvailabilityService = J),
            (this.swapSettingsService = Q),
            (this.swapPriceImpactService = tt),
            (this.limitOrderQuery = et),
            (this.sourceToken$ = this.swapInfo$.pipe(
              (0, T.U)(({ sourceToken: $ }) => $),
              (0, S.d)({ refCount: !0, bufferSize: 1 })
            )),
            (this.isSourceTokenApproved$ = this.swapInfo$.pipe(
              (0, D.w)(({ sourceToken: $, sourceTokenAmount: Y }) =>
                this.walletConnectionQuery.isCurrentWalletGnosis
                  ? (0, v.of)(!0)
                  : this.tokenAllowanceQuery.isTokenApprovedForSwap$($, Y)
              ),
              (0, I.x)(),
              (0, S.d)({ refCount: !0, bufferSize: 1 })
            )),
            (this.isPermitSupported$ = this.sourceToken$.pipe(
              (0, D.w)(($) => {
                if (_.G3) return (0, v.of)(!0);
                const { address: Y, chainId: Z } = $,
                  it = (0, t.buildTokenIdentifier)(Y, null != Z ? Z : 0);
                return t.TOKEN_ADDRESSES_WITH_SALT.includes(it)
                  ? (0, v.of)(!0)
                  : $.eip2612
                  ? this.permitAvailabilityService.isPermitAvailableForToken(
                      $.address
                    )
                  : (0, v.of)(!1);
              }),
              (0, I.x)(),
              (0, S.d)({ refCount: !0, bufferSize: 1 })
            )),
            (this.isNullableSourceTokenAmount$ = this.swapInfo$.pipe(
              (0, T.U)(({ sourceTokenAmount: $ }) => 0 == +$),
              (0, I.x)(),
              (0, S.d)({ refCount: !0, bufferSize: 1 })
            )),
            (this.isEnoughLiquidity$ = this.swapInfo$.pipe(
              (0, T.U)(({ destinationTokenAmount: $ }) => !!$ && !!+$),
              (0, I.x)(),
              (0, S.d)({ refCount: !0, bufferSize: 1 })
            )),
            (this.availableSourceTokenBalance$ = this.sourceToken$.pipe(
              (0, D.w)(($) =>
                (0, E.a)([
                  (0, v.of)($),
                  this.tokenBalanceQuery.getBalance$($),
                  this.gasPriceQuery.currentGasPriceOnce$.pipe(
                    (0, x.K)(
                      (Y) => (
                        A.error(
                          "Unknown gas price for availableSourceTokenBalance$",
                          Y
                        ),
                        (0, v.of)(null)
                      )
                    )
                  ),
                ])
              ),
              (0, I.x)(C.fS0),
              (0, T.U)(([$, Y, Z]) =>
                (0, h.M)($.address) && Z
                  ? (0, f.D)(Y, Z, this.activeConnectionQuery.currentChainId)
                  : Y
              ),
              (0, S.d)({ refCount: !0, bufferSize: 1 })
            )),
            (this.isEnoughBalance$ = (0, E.a)([
              this.swapInfo$,
              this.availableSourceTokenBalance$,
            ]).pipe(
              (0, T.U)(([{ sourceToken: $, sourceTokenAmount: Y }, Z]) => {
                if (!Y) return !0;
                if (!$ || !Z) return !1;
                const it = (0, s.Pz)(Y.toString(), $.decimals);
                return u.O$.from(Z).gte(it);
              }),
              (0, I.x)(),
              (0, S.d)({ refCount: !0, bufferSize: 1 })
            )),
            (this.isHighPriceImpact$ = this.swapInfo$.pipe(
              (0, D.w)(($) =>
                this.swapPriceImpactService.isHighPriceImpact$(
                  Object.assign(Object.assign({}, $), {
                    destinationTokenAmount: $.destinationTokenAmount,
                  })
                )
              ),
              (0, I.x)(),
              (0, S.d)({ refCount: !0, bufferSize: 1 })
            )),
            (this.swapButtonState$ = (0, E.a)([
              this.stateRecalculateTrigger$.pipe((0, R.O)(null)),
              this.walletConnectionQuery.connectedWalletAddress$.pipe(
                (0, I.x)()
              ),
              this.swapSettingsService.isGasPriceNeedAdjust$,
              this.limitOrderQuery
                .getTokenAddressesForLimitOrdersWithPermits$()
                .pipe((0, I.x)(C.fS0)),
            ]).pipe(
              (0, D.w)(([, $, Y]) =>
                $
                  ? Y
                    ? (0, v.of)(d.N.adjustGasPriceButton)
                    : (0, E.a)({
                        isSynthetixRoute: this.isSynthetixRoute$,
                        isSourceTokenApproved: this.isSourceTokenApproved$,
                        isPermitSupported: this.isSourceTokenApproved$.pipe(
                          (0, D.w)((Z) =>
                            Z ? (0, v.of)(!1) : this.isPermitSupported$
                          )
                        ),
                        isNullableSourceTokenAmount:
                          this.isNullableSourceTokenAmount$,
                        isEnoughLiquidity: this.isEnoughLiquidity$,
                        isEnoughBalance: this.isEnoughBalance$,
                        isHighPriceImpact: this.isHighPriceImpact$.pipe(
                          (0, R.O)(!0)
                        ),
                      }).pipe(
                        (0, I.x)(C.fS0),
                        (0, T.U)(
                          (Z) => (
                            L && A.log("Swap button state update: ", Z),
                            (function j(K) {
                              const {
                                isSourceTokenApproved: n,
                                isPermitSupported: H,
                                isNullableSourceTokenAmount: X,
                                isEnoughLiquidity: U,
                                isEnoughBalance: W,
                                isHighPriceImpact: w,
                                isSynthetixRoute: B,
                              } = K;
                              if (X) return d.N.nullableSourceTokenAmount;
                              if (!W) return d.N.insufficientBalance;
                              if (!U) return d.N.insufficientLiquidity;
                              if (!B) {
                                if (!n && H)
                                  return d.N.notApprovedSourceTokenWithPermit;
                                if (!n && !H)
                                  return d.N
                                    .notApprovedSourceTokenWithoutPermit;
                              }
                              return w
                                ? d.N.swapEnabledWithHighPriceImpact
                                : d.N.swapEnabled;
                            })(Z)
                          )
                        )
                      )
                  : (0, v.of)(d.N.walletNotConnected)
              ),
              (0, R.O)(d.N.loading),
              (0, S.d)({ refCount: !0, bufferSize: 1 })
            ));
        }
      }
    },
    33798: (z, M, e) => {
      e.d(M, { C: () => wt });
      var t = e(51109),
        s = e(84756),
        _ = e(38143),
        h = e(74578),
        f = e(98182),
        u = e(78612),
        C = e(54510),
        v = e(48163),
        E = e(80849),
        T = e(68751),
        S = e(77724),
        D = e(76327),
        I = e(64736),
        x = e(29173),
        R = e(30137),
        d = e(52611),
        A =
          (e(1596),
          (() => {
            return (
              ((a = A || (A = {}))[(a.swap = 0)] = "swap"),
              (a[(a.walletIsNotConnected = 1)] = "walletIsNotConnected"),
              (a[(a.highPriceImpact = 2)] = "highPriceImpact"),
              (a[(a.loading = 3)] = "loading"),
              (a[(a.insufficientBalance = 4)] = "insufficientBalance"),
              (a[(a.sourceTokenIsNotApproved = 5)] =
                "sourceTokenIsNotApproved"),
              (a[(a.sourceTokenApproveInProgress = 6)] =
                "sourceTokenApproveInProgress"),
              (a[(a.noLiquidity = 7)] = "noLiquidity"),
              (a[(a.synthetixSourceToken = 8)] = "synthetixSourceToken"),
              (a[(a.needPermit = 9)] = "needPermit"),
              (a[(a.hasPermit = 10)] = "hasPermit"),
              (a[(a.needToAdjustGasPrice = 11)] = "needToAdjustGasPrice"),
              (a[(a.invalidGasPrice = 12)] = "invalidGasPrice"),
              A
            );
            var a;
          })());
      var K = e(55822),
        n = e(16440),
        H = e(20727),
        X = e(33246),
        U = e(12725),
        W = e(80135),
        w = e(12356);
      const B = function (a) {
        return { symbol: a };
      };
      function V(a, k) {
        if (
          (1 & a &&
            (t.ɵɵelementStart(0, "span", 4)(1, "span"),
            t.ɵɵtext(2),
            t.ɵɵpipe(3, "transloco"),
            t.ɵɵelementEnd(),
            t.ɵɵelementStart(4, "span", 5),
            t.ɵɵtext(
              5,
              " To do this, we use signed approvals, which allows you to give permission and make a swap in one transaction."
            ),
            t.ɵɵelementEnd(),
            t.ɵɵelementStart(6, "a", 6),
            t.ɵɵtext(7, "Read more about EIP-2612: permit"),
            t.ɵɵelementEnd()()),
          2 & a)
        ) {
          const l = t.ɵɵnextContext(2);
          t.ɵɵadvance(2),
            t.ɵɵtextInterpolate(
              t.ɵɵpipeBind2(
                3,
                1,
                "uni.tooltip.permit-and-swap-tooltip",
                t.ɵɵpureFunction1(4, B, l.swapTokensData.sourceToken.symbol)
              )
            );
        }
      }
      function J(a, k) {
        if (1 & a) {
          const l = t.ɵɵgetCurrentView();
          t.ɵɵelementStart(0, "simple-button", 7),
            t.ɵɵlistener("click", function () {
              t.ɵɵrestoreView(l);
              const N = t.ɵɵnextContext(2);
              return t.ɵɵresetView(N.permitAndSwap());
            }),
            t.ɵɵelementStart(1, "span", 8),
            t.ɵɵtext(2, "Permit and swap"),
            t.ɵɵelementEnd(),
            t.ɵɵelement(3, "tooltip", 9),
            t.ɵɵelementEnd();
        }
        if (2 & a) {
          t.ɵɵnextContext();
          const l = t.ɵɵreference(2);
          t.ɵɵadvance(3), t.ɵɵproperty("tooltip", l);
        }
      }
      function Q(a, k) {
        1 & a &&
          (t.ɵɵelementStart(0, "span", 4)(1, "span", 10),
          t.ɵɵtext(
            2,
            " We use signed approvals, which allows you to give permission and make a swap in one transaction."
          ),
          t.ɵɵelementEnd(),
          t.ɵɵelementStart(3, "a", 6),
          t.ɵɵtext(4, "Read more about EIP-2612: permit"),
          t.ɵɵelementEnd()());
      }
      function tt(a, k) {
        if (1 & a) {
          const l = t.ɵɵgetCurrentView();
          t.ɵɵelementStart(0, "simple-button", 7),
            t.ɵɵlistener("click", function () {
              t.ɵɵrestoreView(l);
              const N = t.ɵɵnextContext(2);
              return t.ɵɵresetView(N.startSwapFlow());
            }),
            t.ɵɵelementStart(1, "span", 11)(2, "span", 12),
            t.ɵɵtext(3, "Swap. Permit is valid until:"),
            t.ɵɵelementEnd(),
            t.ɵɵelementStart(4, "span"),
            t.ɵɵtext(5, "\xa0"),
            t.ɵɵelementEnd(),
            t.ɵɵelementStart(6, "span", 13),
            t.ɵɵtext(7),
            t.ɵɵpipe(8, "async"),
            t.ɵɵpipe(9, "timeTicker"),
            t.ɵɵelementEnd()(),
            t.ɵɵelement(10, "tooltip", 9),
            t.ɵɵelementEnd();
        }
        if (2 & a) {
          const l = t.ɵɵnextContext().tuiLet,
            y = t.ɵɵreference(5);
          t.ɵɵadvance(7),
            t.ɵɵtextInterpolate(
              t.ɵɵpipeBind1(8, 2, t.ɵɵpipeBind1(9, 4, l.ttl))
            ),
            t.ɵɵadvance(3),
            t.ɵɵproperty("tooltip", y);
        }
      }
      function et(a, k) {
        if (
          (1 & a &&
            (t.ɵɵelementContainerStart(0),
            t.ɵɵtemplate(
              1,
              V,
              8,
              6,
              "ng-template",
              null,
              1,
              t.ɵɵtemplateRefExtractor
            ),
            t.ɵɵtemplate(3, J, 4, 1, "simple-button", 2),
            t.ɵɵtemplate(
              4,
              Q,
              5,
              0,
              "ng-template",
              null,
              3,
              t.ɵɵtemplateRefExtractor
            ),
            t.ɵɵtemplate(6, tt, 11, 6, "simple-button", 2),
            t.ɵɵelementContainerEnd()),
          2 & a)
        ) {
          const l = k.tuiLet;
          t.ɵɵadvance(3),
            t.ɵɵproperty("ngIf", !l),
            t.ɵɵadvance(3),
            t.ɵɵproperty("ngIf", l);
        }
      }
      let $ = (() => {
        class a {
          constructor(l, y, N, at) {
            (this.swapPermitQuery = l),
              (this.swapPermitService = y),
              (this.swapPermitTtlService = N),
              (this.approveTransactionService = at),
              (this.onSwap = new t.EventEmitter()),
              (this.swapTokensData$ = new E.t(1)),
              (this.sourceTokenPermit$ = this.swapTokensData$.pipe(
                (0, T.h)(
                  (nt) => !!nt.sourceTokenAmount && 0 != +nt.sourceTokenAmount
                ),
                (0, S.b)(() => {
                  this.swapPermitTtlService.stopWatchForTtlForActivePermit();
                }),
                (0, D.w)((nt) =>
                  this.swapPermitQuery
                    .selectAndValidateEntity(nt.sourceToken.address)
                    .pipe(
                      (0, I.U)((o) =>
                        (function O(a, k) {
                          if (a) {
                            const { sourceToken: l, sourceTokenAmount: y } = k,
                              N = (0, R.Pz)(y, l.decimals),
                              at = a.permitAmount === d.zL.toString(),
                              nt = a.permitAmount === N.toString();
                            if (at || nt) return A.hasPermit;
                          }
                          return A.needPermit;
                        })(o, nt) === A.needPermit
                          ? null
                          : o
                      )
                    )
                ),
                (0, S.b)((nt) => {
                  nt &&
                    this.swapPermitTtlService.startWatchForTtlForPermitId(
                      nt.id
                    );
                })
              ));
          }
          set swapTokensData(l) {
            (this._swapTokensData = l), this.swapTokensData$.next(l);
          }
          get swapTokensData() {
            return this._swapTokensData;
          }
          ngOnDestroy() {
            this.swapPermitTtlService.stopWatchForTtlForActivePermit();
          }
          startSwapFlow() {
            this.onSwap.next();
          }
          permitAndSwap() {
            return (0, v.__awaiter)(this, void 0, void 0, function* () {
              try {
                yield this.swapPermitService.buildAndSavePermit(
                  this.swapTokensData.sourceToken
                ),
                  this.startSwapFlow();
              } catch (l) {
                if ((0, x.nj)(l)) return;
                yield this.approveTransactionService
                  .approveInfinitySwapTransaction$(
                    this.swapTokensData.sourceToken
                  )
                  .toPromise();
              }
            });
          }
        }
        return (
          (a.ɵfac = function (l) {
            return new (l || a)(
              t.ɵɵdirectiveInject(K.o),
              t.ɵɵdirectiveInject(n.C),
              t.ɵɵdirectiveInject(H.K),
              t.ɵɵdirectiveInject(X.f)
            );
          }),
          (a.ɵcmp = t.ɵɵdefineComponent({
            type: a,
            selectors: [["permit-swap-button"]],
            inputs: { swapTokensData: "swapTokensData" },
            outputs: { onSwap: "onSwap" },
            decls: 2,
            vars: 3,
            consts: [
              [4, "tuiLet"],
              ["permitAndSwapTooltip", ""],
              [
                "color",
                "gradient-blue",
                "class",
                "token-swap-button",
                3,
                "click",
                4,
                "ngIf",
              ],
              ["swapWithPermitTooltip", ""],
              [1, "info-icon-text"],
              ["transloco", "uni.tooltip.signed-approvals"],
              [
                "href",
                "https://eips.ethereum.org/EIPS/eip-2612",
                "target",
                "_blank",
                "transloco",
                "uni.tooltip.read-more-about-permit",
              ],
              ["color", "gradient-blue", 1, "token-swap-button", 3, "click"],
              [
                "transloco",
                "uni.button.permit-and-swap",
                "data-id",
                "swap-box.permit-button",
              ],
              [
                "direction",
                "right",
                "contentType",
                "question",
                "iconColor",
                "white",
                3,
                "tooltip",
              ],
              ["transloco", "uni.tooltip.we-use-signed-approvals"],
              ["data-id", "swap-box.permit-timer"],
              ["transloco", "uni.button.swap-permit-is-valid"],
              ["data-id", "swap-box.permit-timer-value"],
            ],
            template: function (l, y) {
              1 & l &&
                (t.ɵɵtemplate(0, et, 7, 2, "ng-container", 0),
                t.ɵɵpipe(1, "async")),
                2 & l &&
                  t.ɵɵproperty(
                    "tuiLet",
                    t.ɵɵpipeBind1(1, 1, y.sourceTokenPermit$)
                  );
            },
            dependencies: [_.O5, U.KI, W.K, h.Ls, f.q, _.Ov, U.Ot, w.Z],
            styles: [
              ".info-icon-text[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{display:block;margin-bottom:15px}.info-icon-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin-bottom:0}",
            ],
            changeDetection: 0,
          })),
          a
        );
      })();
      var Y = e(24960),
        Z = e(95475);
      function it(a, k) {
        if (1 & a) {
          const l = t.ɵɵgetCurrentView();
          t.ɵɵelementStart(0, "permit-swap-button", 9),
            t.ɵɵlistener("onSwap", function () {
              t.ɵɵrestoreView(l);
              const N = t.ɵɵnextContext(4);
              return t.ɵɵresetView(N.doSwap());
            }),
            t.ɵɵelementEnd();
        }
        if (2 & a) {
          const l = t.ɵɵnextContext(4);
          t.ɵɵproperty("swapTokensData", l.swapInfo),
            t.ɵɵattribute("data-disabled", !1);
        }
      }
      const rt = function (a) {
        return { symbol: a };
      };
      function lt(a, k) {
        if (
          (1 & a &&
            (t.ɵɵelement(0, "source-token-approve-button", 10),
            t.ɵɵpipe(1, "transloco"),
            t.ɵɵpipe(2, "displaySymbol")),
          2 & a)
        ) {
          const l = t.ɵɵnextContext(2).tuiLet;
          t.ɵɵproperty("sourceToken", l)(
            "approveButtonTitle",
            t.ɵɵpipeBind2(
              1,
              3,
              "uni.swap.give-permission-to-swap",
              t.ɵɵpureFunction1(8, rt, t.ɵɵpipeBind1(2, 6, l))
            )
          ),
            t.ɵɵattribute("data-disabled", !1);
        }
      }
      function dt(a, k) {
        if (
          (1 & a &&
            (t.ɵɵelementContainerStart(0),
            t.ɵɵtemplate(1, it, 1, 2, "permit-swap-button", 7),
            t.ɵɵtemplate(2, lt, 3, 10, "source-token-approve-button", 8),
            t.ɵɵelementContainerEnd()),
          2 & a)
        ) {
          const l = t.ɵɵnextContext(3);
          t.ɵɵadvance(1),
            t.ɵɵproperty(
              "ngIf",
              l.swapButtonState ===
                l.SwapButtonState.notApprovedSourceTokenWithPermit
            ),
            t.ɵɵadvance(1),
            t.ɵɵproperty(
              "ngIf",
              l.swapButtonState ===
                l.SwapButtonState.notApprovedSourceTokenWithoutPermit
            );
        }
      }
      function ut(a, k) {
        1 & a &&
          (t.ɵɵelementStart(0, "simple-button", 11),
          t.ɵɵelement(1, "img", 12),
          t.ɵɵtext(2),
          t.ɵɵpipe(3, "transloco"),
          t.ɵɵelementEnd()),
          2 & a &&
            (t.ɵɵattribute("data-disabled", !1),
            t.ɵɵadvance(2),
            t.ɵɵtextInterpolate1(
              " ",
              t.ɵɵpipeBind1(3, 2, "button.connect-wallet2"),
              " "
            ));
      }
      function mt(a, k) {
        1 & a && t.ɵɵelementContainer(0);
      }
      const _t = function (a) {
        return {
          showWhen: !0,
          text: a,
          color: "light-red",
          disabled: !1,
          ignoreClick: !0,
        };
      };
      function gt(a, k) {
        if (
          (1 & a &&
            (t.ɵɵelementStart(0, "a", 13),
            t.ɵɵtemplate(1, mt, 1, 0, "ng-container", 1),
            t.ɵɵpipe(2, "transloco"),
            t.ɵɵelementEnd()),
          2 & a)
        ) {
          t.ɵɵnextContext(3);
          const l = t.ɵɵreference(4);
          t.ɵɵproperty("routerLink", "settings"),
            t.ɵɵadvance(1),
            t.ɵɵproperty("ngTemplateOutlet", l)(
              "ngTemplateOutletContext",
              t.ɵɵpureFunction1(
                5,
                _t,
                t.ɵɵpipeBind1(2, 3, "uni.button.need-to-adjust-gas-price2")
              )
            );
        }
      }
      function ft(a, k) {
        if (1 & a) {
          const l = t.ɵɵgetCurrentView();
          t.ɵɵelementStart(0, "simple-button", 14),
            t.ɵɵlistener("click", function () {
              t.ɵɵrestoreView(l);
              const N = t.ɵɵnextContext(3);
              return t.ɵɵresetView(N.doUpdateGasSettings());
            }),
            t.ɵɵtext(1),
            t.ɵɵpipe(2, "transloco"),
            t.ɵɵelementEnd();
        }
        2 & a &&
          (t.ɵɵadvance(1),
          t.ɵɵtextInterpolate1(
            " ",
            t.ɵɵpipeBind1(2, 1, "uni.button.need-to-adjust-gas-price2"),
            " "
          ));
      }
      function ht(a, k) {
        1 & a && t.ɵɵelementContainer(0);
      }
      function Ct(a, k) {
        1 & a && t.ɵɵelementContainer(0);
      }
      function st(a, k) {
        1 & a && t.ɵɵelementContainer(0);
      }
      function vt(a, k) {
        1 & a && t.ɵɵelementContainer(0);
      }
      function p(a, k) {
        1 & a && t.ɵɵelementContainer(0);
      }
      const P = function (a, k) {
          return { showWhen: a, text: k, disabled: !0 };
        },
        r = function (a, k) {
          return { showWhen: a, text: k, color: "light-red", disabled: !1 };
        },
        c = function (a, k) {
          return { showWhen: a, text: k, disabled: !1 };
        };
      function b(a, k) {
        if (
          (1 & a &&
            (t.ɵɵelementContainerStart(0),
            t.ɵɵtemplate(1, dt, 3, 2, "ng-container", 0),
            t.ɵɵtemplate(2, ut, 4, 4, "simple-button", 4),
            t.ɵɵtemplate(3, gt, 3, 7, "a", 5),
            t.ɵɵtemplate(4, ft, 3, 3, "simple-button", 6),
            t.ɵɵtemplate(5, ht, 1, 0, "ng-container", 1),
            t.ɵɵpipe(6, "transloco"),
            t.ɵɵtemplate(7, Ct, 1, 0, "ng-container", 1),
            t.ɵɵpipe(8, "transloco"),
            t.ɵɵpipe(9, "displaySymbol"),
            t.ɵɵtemplate(10, st, 1, 0, "ng-container", 1),
            t.ɵɵpipe(11, "transloco"),
            t.ɵɵtemplate(12, vt, 1, 0, "ng-container", 1),
            t.ɵɵpipe(13, "transloco"),
            t.ɵɵtemplate(14, p, 1, 0, "ng-container", 1),
            t.ɵɵpipe(15, "transloco"),
            t.ɵɵelementContainerEnd()),
          2 & a)
        ) {
          const l = k.tuiLet,
            y = t.ɵɵnextContext(2),
            N = t.ɵɵreference(4);
          t.ɵɵadvance(1),
            t.ɵɵproperty("ngIf", y.isTokenShouldBeApproved),
            t.ɵɵadvance(1),
            t.ɵɵproperty(
              "ngIf",
              y.swapButtonState === y.SwapButtonState.walletNotConnected
            ),
            t.ɵɵadvance(1),
            t.ɵɵproperty(
              "ngIf",
              y.swapButtonState === y.SwapButtonState.adjustGasPriceButton &&
                !y.isCustomFlowForUpdateGasSettings
            ),
            t.ɵɵadvance(1),
            t.ɵɵproperty(
              "ngIf",
              y.swapButtonState === y.SwapButtonState.adjustGasPriceButton &&
                y.isCustomFlowForUpdateGasSettings
            ),
            t.ɵɵadvance(1),
            t.ɵɵproperty("ngTemplateOutlet", N)(
              "ngTemplateOutletContext",
              t.ɵɵpureFunction2(
                27,
                P,
                y.swapButtonState ===
                  y.SwapButtonState.nullableSourceTokenAmount,
                t.ɵɵpipeBind1(6, 14, "uni.button.enter-amount-to-swap")
              )
            ),
            t.ɵɵadvance(2),
            t.ɵɵproperty("ngTemplateOutlet", N)(
              "ngTemplateOutletContext",
              t.ɵɵpureFunction2(
                32,
                P,
                y.swapButtonState === y.SwapButtonState.insufficientBalance,
                t.ɵɵpipeBind2(
                  8,
                  16,
                  "uni.swap.insufficient-balance",
                  t.ɵɵpureFunction1(30, rt, t.ɵɵpipeBind1(9, 19, l))
                )
              )
            ),
            t.ɵɵadvance(3),
            t.ɵɵproperty("ngTemplateOutlet", N)(
              "ngTemplateOutletContext",
              t.ɵɵpureFunction2(
                35,
                P,
                y.swapButtonState === y.SwapButtonState.insufficientLiquidity,
                t.ɵɵpipeBind1(11, 21, "button.insufficient-liquidity")
              )
            ),
            t.ɵɵadvance(2),
            t.ɵɵproperty("ngTemplateOutlet", N)(
              "ngTemplateOutletContext",
              t.ɵɵpureFunction2(
                38,
                r,
                y.swapButtonState ===
                  y.SwapButtonState.swapEnabledWithHighPriceImpact,
                t.ɵɵpipeBind1(13, 23, "uni.button.swap-anyway")
              )
            ),
            t.ɵɵadvance(2),
            t.ɵɵproperty("ngTemplateOutlet", N)(
              "ngTemplateOutletContext",
              t.ɵɵpureFunction2(
                41,
                c,
                y.swapButtonState === y.SwapButtonState.swapEnabled,
                t.ɵɵpipeBind1(15, 25, "txType.swap")
              )
            );
        }
      }
      function G(a, k) {
        if (
          (1 & a &&
            (t.ɵɵelementContainerStart(0),
            t.ɵɵtemplate(1, b, 16, 44, "ng-container", 3),
            t.ɵɵelementContainerEnd()),
          2 & a)
        ) {
          const l = t.ɵɵnextContext();
          t.ɵɵadvance(1), t.ɵɵproperty("tuiLet", l.swapInfo.sourceToken);
        }
      }
      function q(a, k) {
        1 & a && t.ɵɵelementContainer(0);
      }
      function ot(a, k) {
        if (1 & a) {
          const l = t.ɵɵgetCurrentView();
          t.ɵɵelementStart(0, "simple-button", 16),
            t.ɵɵlistener("click", function () {
              t.ɵɵrestoreView(l);
              const N = t.ɵɵnextContext(),
                at = N.disabled,
                nt = N.ignoreClick,
                o = t.ɵɵnextContext();
              return t.ɵɵresetView(at || nt ? null : o.doSwap());
            }),
            t.ɵɵtext(1),
            t.ɵɵelementEnd();
        }
        if (2 & a) {
          const l = t.ɵɵnextContext(),
            N = l.disabled,
            at = l.text;
          t.ɵɵproperty("color", l.color || "gradient-blue")("disabled", N),
            t.ɵɵattribute("data-disabled", N),
            t.ɵɵadvance(1),
            t.ɵɵtextInterpolate1(" ", at, " ");
        }
      }
      function pt(a, k) {
        1 & a && t.ɵɵtemplate(0, ot, 2, 4, "simple-button", 15),
          2 & a && t.ɵɵproperty("ngIf", k.showWhen);
      }
      let wt = (() => {
        class a {
          constructor() {
            (this.isCustomFlowForUpdateGasSettings = !1),
              (this.swap = new t.EventEmitter()),
              (this.updateGasSettings = new t.EventEmitter()),
              (this.SwapButtonState = s.N);
          }
          get isTokenShouldBeApproved() {
            return [
              s.N.notApprovedSourceTokenWithPermit,
              s.N.notApprovedSourceTokenWithoutPermit,
            ].includes(this.swapButtonState);
          }
          doSwap() {
            this.swap.next();
          }
          doUpdateGasSettings() {
            this.updateGasSettings.next();
          }
        }
        return (
          (a.ɵfac = function (l) {
            return new (l || a)();
          }),
          (a.ɵcmp = t.ɵɵdefineComponent({
            type: a,
            selectors: [["swap-button"]],
            inputs: {
              swapInfo: "swapInfo",
              swapButtonState: "swapButtonState",
              isCustomFlowForUpdateGasSettings:
                "isCustomFlowForUpdateGasSettings",
            },
            outputs: { swap: "swap", updateGasSettings: "updateGasSettings" },
            decls: 5,
            vars: 8,
            consts: [
              [4, "ngIf"],
              [4, "ngTemplateOutlet", "ngTemplateOutletContext"],
              ["swapButton", ""],
              [4, "tuiLet"],
              [
                "walletConnect",
                "",
                "color",
                "light-blue",
                "class",
                "swap-button",
                "data-id",
                "swap-box.connect-wallet",
                4,
                "ngIf",
              ],
              [3, "routerLink", 4, "ngIf"],
              [
                "class",
                "swap-button",
                "color",
                "light-red",
                "data-id",
                "swap-box.swap-button",
                "id",
                "swap-box.swap-button",
                3,
                "click",
                4,
                "ngIf",
              ],
              [
                "class",
                "swap-button",
                "data-id",
                "swap-box.swap-button",
                3,
                "swapTokensData",
                "onSwap",
                4,
                "ngIf",
              ],
              [
                "widgetId",
                "swap-approve",
                "color",
                "gradient-blue",
                "approveContractType",
                "swap",
                "class",
                "swap-button",
                "data-id",
                "swap-box.swap-button",
                3,
                "sourceToken",
                "approveButtonTitle",
                4,
                "ngIf",
              ],
              [
                "data-id",
                "swap-box.swap-button",
                1,
                "swap-button",
                3,
                "swapTokensData",
                "onSwap",
              ],
              [
                "widgetId",
                "swap-approve",
                "color",
                "gradient-blue",
                "approveContractType",
                "swap",
                "data-id",
                "swap-box.swap-button",
                1,
                "swap-button",
                3,
                "sourceToken",
                "approveButtonTitle",
              ],
              [
                "walletConnect",
                "",
                "color",
                "light-blue",
                "data-id",
                "swap-box.connect-wallet",
                1,
                "swap-button",
              ],
              [
                "src",
                "/assets/images/icons/connect.svg",
                "alt",
                "connect",
                1,
                "mr-2",
              ],
              [3, "routerLink"],
              [
                "color",
                "light-red",
                "data-id",
                "swap-box.swap-button",
                "id",
                "swap-box.swap-button",
                1,
                "swap-button",
                3,
                "click",
              ],
              [
                "class",
                "swap-button",
                "data-id",
                "swap-box.swap-button",
                "id",
                "swap-box.swap-button",
                3,
                "color",
                "disabled",
                "click",
                4,
                "ngIf",
              ],
              [
                "data-id",
                "swap-box.swap-button",
                "id",
                "swap-box.swap-button",
                1,
                "swap-button",
                3,
                "color",
                "disabled",
                "click",
              ],
            ],
            template: function (l, y) {
              if (
                (1 & l &&
                  (t.ɵɵtemplate(0, G, 2, 1, "ng-container", 0),
                  t.ɵɵtemplate(1, q, 1, 0, "ng-container", 1),
                  t.ɵɵpipe(2, "transloco"),
                  t.ɵɵtemplate(
                    3,
                    pt,
                    1,
                    1,
                    "ng-template",
                    null,
                    2,
                    t.ɵɵtemplateRefExtractor
                  )),
                2 & l)
              ) {
                const N = t.ɵɵreference(4);
                t.ɵɵproperty(
                  "ngIf",
                  y.swapButtonState !== y.SwapButtonState.loading
                ),
                  t.ɵɵadvance(1),
                  t.ɵɵproperty("ngTemplateOutlet", N)(
                    "ngTemplateOutletContext",
                    t.ɵɵpureFunction2(
                      5,
                      P,
                      y.isTokenShouldBeApproved ||
                        y.swapButtonState === y.SwapButtonState.loading,
                      t.ɵɵpipeBind1(2, 3, "txType.swap")
                    )
                  );
              }
            },
            dependencies: [_.O5, _.tP, h.Ls, f.q, u.M, C.yS, $, Y.b, U.Ot, Z.s],
            styles: [
              "[_nghost-%COMP%]{display:flex;flex-direction:column}.swap-button[_ngcontent-%COMP%] + .swap-button[_ngcontent-%COMP%]{margin-top:16px}a[_ngcontent-%COMP%]{text-decoration:none}",
            ],
            changeDetection: 0,
          })),
          a
        );
      })();
    },
    84756: (z, M, e) => {
      e.d(M, { N: () => t });
      var t = (() => {
        return (
          ((s = t || (t = {})).walletNotConnected = "walletNotConnected"),
          (s.adjustGasPriceButton = "adjustGasPriceButton"),
          (s.notApprovedSourceTokenWithoutPermit =
            "notApprovedSourceTokenWithoutPermit"),
          (s.notApprovedSourceTokenWithPermit =
            "notApprovedSourceTokenWithPermit"),
          (s.nullableSourceTokenAmount = "nullableSourceTokenAmount"),
          (s.insufficientBalance = "insufficientBalance"),
          (s.insufficientLiquidity = "insufficientLiquidity"),
          (s.swapEnabledWithHighPriceImpact = "swapEnabledWithHighPriceImpact"),
          (s.swapEnabled = "swapEnabled"),
          (s.loading = "loading"),
          t
        );
        var s;
      })();
    },
    76044: (z, M, e) => {
      e.d(M, { h: () => S });
      var t = e(38143),
        s = e(54510),
        _ = e(12725),
        h = e(74578),
        f = e(62901),
        u = e(35950),
        C = e(63223),
        v = e(86046),
        E = e(40934),
        T = e(51109);
      let S = (() => {
        class D {}
        return (
          (D.ɵfac = function (x) {
            return new (x || D)();
          }),
          (D.ɵmod = T.ɵɵdefineNgModule({ type: D })),
          (D.ɵinj = T.ɵɵdefineInjector({
            imports: [t.ez, h.WD, C._, u.S, _.y4, s.Bz, v.q, E.f, f.w],
          })),
          D
        );
      })();
    },
    39829: (z, M, e) => {
      e.d(M, { X: () => h });
      var t = e(51109),
        s = e(52126),
        _ = e(12725);
      let h = (() => {
        class f {
          constructor() {
            this.backButtonClick = new t.EventEmitter();
          }
          get domain() {
            return "slippage" === this.settingsType
              ? "confirm-screen-slippage"
              : "confirm-screen-gas-price";
          }
          get title() {
            return "slippage" === this.settingsType
              ? "swapConfirmSettings.slippageTolerance"
              : "swapConfirmSettings.gasPrice";
          }
          handleBackButtonClick() {
            this.backButtonClick.emit();
          }
        }
        return (
          (f.ɵfac = function (C) {
            return new (C || f)();
          }),
          (f.ɵcmp = t.ɵɵdefineComponent({
            type: f,
            selectors: [["swap-confirm-settings"]],
            inputs: { settingsType: "settingsType" },
            outputs: { backButtonClick: "backButtonClick" },
            decls: 6,
            vars: 6,
            consts: [
              [1, "title"],
              ["width", "24", "height", "24", 1, "back-icon", 3, "click"],
              [
                0,
                "xlink",
                "href",
                "assets/images/icons/arrow-back.svg#arrow-back",
              ],
              [3, "compactMode", "domain", "showTitles"],
            ],
            template: function (C, v) {
              1 & C &&
                (t.ɵɵelementStart(0, "div", 0),
                t.ɵɵnamespaceSVG(),
                t.ɵɵelementStart(1, "svg", 1),
                t.ɵɵlistener("click", function () {
                  return v.handleBackButtonClick();
                }),
                t.ɵɵelement(2, "use", 2),
                t.ɵɵelementEnd(),
                t.ɵɵtext(3),
                t.ɵɵpipe(4, "transloco"),
                t.ɵɵelementEnd(),
                t.ɵɵnamespaceHTML(),
                t.ɵɵelement(5, "swap-settings", 3)),
                2 & C &&
                  (t.ɵɵadvance(3),
                  t.ɵɵtextInterpolate1(" ", t.ɵɵpipeBind1(4, 4, v.title), "\n"),
                  t.ɵɵadvance(2),
                  t.ɵɵproperty("compactMode", !0)("domain", v.domain)(
                    "showTitles",
                    !1
                  ));
            },
            dependencies: [s.W, _.Ot],
            styles: [
              "[_nghost-%COMP%]{display:block;min-height:494px}.title[_ngcontent-%COMP%]{color:var(--1inch-text-03);font-size:20px;font-weight:500;text-align:center;margin-bottom:24px;position:relative}.back-icon[_ngcontent-%COMP%]{width:36px;height:36px;border-radius:12px;position:absolute;left:0;top:-6px;padding:6px;border:none;color:var(--1inch-text-03);cursor:pointer}",
            ],
          })),
          f
        );
      })();
    },
    42585: (z, M, e) => {
      e.d(M, { K: () => h });
      var t = e(53886),
        s = e(64736);
      function _(f) {
        return !!f.isFoT;
      }
      function h(f, u) {
        return (0, t.a)([f, u]).pipe((0, s.U)((C) => C.map(_).some(Boolean)));
      }
    },
    68128: (z, M, e) => {
      e.d(M, { h: () => nt });
      var t = e(51109),
        s = e(76027),
        _ = e(93130),
        h = e(17041),
        f = e(86732),
        u = e(38143),
        C = e(54009),
        v = e(74578),
        E = e(23524),
        T = e(90927),
        S = e(82767),
        D = e(12725),
        I = e(4685),
        x = e(98569);
      const R = function (o) {
        return { token: o };
      };
      function d(o, m) {
        if (
          (1 & o &&
            (t.ɵɵelementStart(0, "span", 2),
            t.ɵɵtext(1),
            t.ɵɵpipe(2, "transloco"),
            t.ɵɵelementEnd()),
          2 & o)
        ) {
          const i = t.ɵɵnextContext();
          t.ɵɵadvance(1),
            t.ɵɵtextInterpolate1(
              " ",
              t.ɵɵpipeBind2(
                2,
                1,
                "confirmSwap.fot-swap-source-token",
                t.ɵɵpureFunction1(4, R, i.sourceToken.symbol)
              ),
              " "
            );
        }
      }
      function j(o, m) {
        if (
          (1 & o &&
            (t.ɵɵelementStart(0, "span", 2),
            t.ɵɵtext(1),
            t.ɵɵpipe(2, "transloco"),
            t.ɵɵelementEnd()),
          2 & o)
        ) {
          const i = t.ɵɵnextContext();
          t.ɵɵadvance(1),
            t.ɵɵtextInterpolate1(
              " ",
              t.ɵɵpipeBind2(
                2,
                1,
                "confirmSwap.fot-swap-destination-token",
                t.ɵɵpureFunction1(4, R, i.destinationToken.symbol)
              ),
              " "
            );
        }
      }
      let A = (() => {
        class o {}
        return (
          (o.ɵfac = function (i) {
            return new (i || o)();
          }),
          (o.ɵcmp = t.ɵɵdefineComponent({
            type: o,
            selectors: [["fot-swap-alert"]],
            inputs: {
              sourceToken: "sourceToken",
              destinationToken: "destinationToken",
            },
            decls: 3,
            vars: 3,
            consts: [
              ["type", "warning", 3, "hideCloseButton"],
              ["class", "confirm-swap-subtext-part", 4, "ngIf"],
              [1, "confirm-swap-subtext-part"],
            ],
            template: function (i, g) {
              1 & i &&
                (t.ɵɵelementStart(0, "alert", 0),
                t.ɵɵtemplate(1, d, 3, 6, "span", 1),
                t.ɵɵtemplate(2, j, 3, 6, "span", 1),
                t.ɵɵelementEnd()),
                2 & i &&
                  (t.ɵɵproperty("hideCloseButton", !0),
                  t.ɵɵadvance(1),
                  t.ɵɵproperty("ngIf", g.sourceToken.isFoT),
                  t.ɵɵadvance(1),
                  t.ɵɵproperty(
                    "ngIf",
                    !g.sourceToken.isFoT && g.destinationToken.isFoT
                  ));
            },
            dependencies: [x.w, u.O5, D.Ot],
            styles: [
              ".confirm-swap-subtext-part[_ngcontent-%COMP%]{display:block;margin-bottom:16px}.confirm-swap-subtext-part[_ngcontent-%COMP%]:last-child{margin-bottom:0}.confirm-swap-difference[_ngcontent-%COMP%]{color:var(--1inch__text-and-icons__error);margin-left:4px}",
            ],
            changeDetection: 0,
          })),
          o
        );
      })();
      var L = e(89247),
        O = e(31777),
        K = e(96139);
      let n = (() => {
        class o {}
        return (
          (o.ɵfac = function (i) {
            return new (i || o)();
          }),
          (o.ɵcmp = t.ɵɵdefineComponent({
            type: o,
            selectors: [["ledger-unoswap-info"]],
            decls: 7,
            vars: 1,
            consts: [
              [
                "type",
                "notification",
                "data-id",
                "confirm-swap.ledger-info",
                3,
                "hideCloseButton",
              ],
              ["transloco", "confirmSwap.ledger-unoswap-notification"],
              [
                "href",
                "https://help.1inch.io",
                "target",
                "_blank",
                "transloco",
                "learn-more",
              ],
            ],
            template: function (i, g) {
              1 & i &&
                (t.ɵɵelementStart(0, "alert", 0)(1, "p")(2, "span", 1),
                t.ɵɵtext(
                  3,
                  "On ledger confirmation screen only source token and amount will be shown."
                ),
                t.ɵɵelementEnd(),
                t.ɵɵelement(4, "br"),
                t.ɵɵelementStart(5, "a", 2),
                t.ɵɵtext(6, "Learn more"),
                t.ɵɵelementEnd()()()),
                2 & i && t.ɵɵproperty("hideCloseButton", !0);
            },
            dependencies: [D.KI, x.w],
            changeDetection: 0,
          })),
          o
        );
      })();
      var H = e(29889),
        X = e(86345);
      function U(o, m) {
        1 & o &&
          (t.ɵɵelementStart(0, "span"), t.ɵɵtext(1, "+"), t.ɵɵelementEnd());
      }
      function W(o, m) {
        if (
          (1 & o &&
            (t.ɵɵelementStart(0, "div")(1, "span", 7),
            t.ɵɵtext(2, "Difference: "),
            t.ɵɵelementEnd(),
            t.ɵɵelementStart(3, "span"),
            t.ɵɵtemplate(4, U, 2, 0, "span", 0),
            t.ɵɵelement(5, "token-amount", 4),
            t.ɵɵpipe(6, "toBigInt"),
            t.ɵɵelementEnd(),
            t.ɵɵtext(7),
            t.ɵɵelementEnd()),
          2 & o)
        ) {
          const i = m.tuiLet,
            g = t.ɵɵnextContext().ngIf;
          t.ɵɵadvance(3),
            t.ɵɵclassProp("text-green", i > 0)("warning-text", i < 0),
            t.ɵɵadvance(1),
            t.ɵɵproperty("ngIf", i > 0),
            t.ɵɵadvance(1),
            t.ɵɵproperty("value", t.ɵɵpipeBind2(6, 8, i, g.decimals))(
              "decimals",
              g.decimals
            ),
            t.ɵɵadvance(2),
            t.ɵɵtextInterpolate1(" ", g.destinationTokenSymbol, " ");
        }
      }
      function w(o, m) {
        if (
          (1 & o &&
            (t.ɵɵelementContainerStart(0),
            t.ɵɵelementStart(1, "alert", 1)(2, "p", 2),
            t.ɵɵtext(3, "Amount to receive has changed."),
            t.ɵɵelementEnd(),
            t.ɵɵelement(4, "br"),
            t.ɵɵelementStart(5, "div")(6, "span", 3),
            t.ɵɵtext(7, "At swap creation:"),
            t.ɵɵelementEnd(),
            t.ɵɵtext(8, "\xa0 "),
            t.ɵɵelement(9, "token-amount", 4),
            t.ɵɵpipe(10, "toBigInt"),
            t.ɵɵelementEnd(),
            t.ɵɵelementStart(11, "div")(12, "span", 5),
            t.ɵɵtext(13, "Re-estimated: "),
            t.ɵɵelementEnd(),
            t.ɵɵelement(14, "token-amount", 4),
            t.ɵɵpipe(15, "toBigInt"),
            t.ɵɵelementEnd(),
            t.ɵɵtemplate(16, W, 8, 11, "div", 6),
            t.ɵɵelementEnd(),
            t.ɵɵelementContainerEnd()),
          2 & o)
        ) {
          const i = m.ngIf,
            g = t.ɵɵnextContext();
          t.ɵɵadvance(1),
            t.ɵɵproperty("type", g.alertType)("hideCloseButton", !0),
            t.ɵɵadvance(8),
            t.ɵɵproperty(
              "value",
              t.ɵɵpipeBind2(10, 7, i.originalDestinationAmount, i.decimals)
            )("decimals", i.decimals),
            t.ɵɵadvance(5),
            t.ɵɵproperty(
              "value",
              t.ɵɵpipeBind2(15, 10, i.destinationTokenAmount, i.decimals)
            )("decimals", i.decimals),
            t.ɵɵadvance(2),
            t.ɵɵproperty("tuiLet", i.difference);
        }
      }
      let B = (() => {
        class o {
          constructor() {
            this.destinationTokenData = null;
          }
          get alertType() {
            return this.destinationTokenData &&
              this.destinationTokenData.difference >= 0
              ? "notification"
              : "warning";
          }
        }
        return (
          (o.ɵfac = function (i) {
            return new (i || o)();
          }),
          (o.ɵcmp = t.ɵɵdefineComponent({
            type: o,
            selectors: [["updated-route-alert"]],
            inputs: { destinationTokenData: "destinationTokenData" },
            decls: 1,
            vars: 1,
            consts: [
              [4, "ngIf"],
              [3, "type", "hideCloseButton"],
              ["transloco", "swap-confirmation.alert.recalculated-amount"],
              ["transloco", "swap-confirmation.alert.original-amount"],
              [3, "value", "decimals"],
              ["transloco", "swap-confirmation.alert.reestimated"],
              [4, "tuiLet"],
              ["transloco", "swap-confirmation.alert.difference"],
            ],
            template: function (i, g) {
              1 & i && t.ɵɵtemplate(0, w, 17, 13, "ng-container", 0),
                2 & i && t.ɵɵproperty("ngIf", g.destinationTokenData);
            },
            dependencies: [u.O5, x.w, v.Ls, H.O, X.M],
            styles: [
              ".warning-text[_ngcontent-%COMP%]{color:var(--1inch-warning-text-01)}",
            ],
            changeDetection: 0,
          })),
          o
        );
      })();
      var V = e(9907),
        J = e(69554);
      function Q(o, m) {
        if (1 & o) {
          const i = t.ɵɵgetCurrentView();
          t.ɵɵelementStart(0, "button", 6),
            t.ɵɵlistener("click", function () {
              t.ɵɵrestoreView(i);
              const F = t.ɵɵnextContext();
              return t.ɵɵresetView(F.handleRecalculateRoute());
            }),
            t.ɵɵelement(1, "span", 7),
            t.ɵɵelementEnd();
        }
      }
      function tt(o, m) {
        1 & o && t.ɵɵelementContainer(0);
      }
      function et(o, m) {
        if (
          (1 & o &&
            (t.ɵɵelementContainerStart(0),
            t.ɵɵtemplate(1, tt, 1, 0, "ng-container", 8),
            t.ɵɵelementContainerEnd()),
          2 & o)
        ) {
          t.ɵɵnextContext();
          const i = t.ɵɵreference(9);
          t.ɵɵadvance(1), t.ɵɵproperty("ngTemplateOutlet", i);
        }
      }
      function $(o, m) {
        1 & o && t.ɵɵelementContainer(0);
      }
      function Y(o, m) {
        if (
          (1 & o &&
            (t.ɵɵelementContainerStart(0),
            t.ɵɵtemplate(1, $, 1, 0, "ng-container", 8),
            t.ɵɵelementContainerEnd()),
          2 & o)
        ) {
          t.ɵɵnextContext();
          const i = t.ɵɵreference(9);
          t.ɵɵadvance(1), t.ɵɵproperty("ngTemplateOutlet", i);
        }
      }
      function Z(o, m) {
        if (1 & o) {
          const i = t.ɵɵgetCurrentView();
          t.ɵɵelementStart(0, "adjust-gas-price-button", 9),
            t.ɵɵlistener("clickHandler", function () {
              t.ɵɵrestoreView(i);
              const F = t.ɵɵnextContext();
              return t.ɵɵresetView(F.handleAdjustGasPrice());
            }),
            t.ɵɵelementEnd();
        }
      }
      function it(o, m) {
        if (1 & o) {
          const i = t.ɵɵgetCurrentView();
          t.ɵɵelementContainerStart(0),
            t.ɵɵelementStart(1, "button", 10),
            t.ɵɵlistener("click", function () {
              t.ɵɵrestoreView(i);
              const F = t.ɵɵnextContext();
              return t.ɵɵresetView(
                F.buttonState.disabled ? F.noop() : F.handleDoSwap()
              );
            }),
            t.ɵɵelementStart(2, "span", 11),
            t.ɵɵtext(3, " Confirm swap "),
            t.ɵɵelementEnd()(),
            t.ɵɵelementContainerEnd();
        }
        if (2 & o) {
          const i = t.ɵɵnextContext();
          t.ɵɵadvance(1), t.ɵɵproperty("disabled", i.buttonState.disabled);
        }
      }
      function rt(o, m) {
        1 & o &&
          (t.ɵɵelementContainerStart(0),
          t.ɵɵelementStart(1, "button", 12)(2, "span"),
          t.ɵɵelement(3, "span", 13)(4, "img", 14),
          t.ɵɵelementEnd()(),
          t.ɵɵelementContainerEnd()),
          2 & o && (t.ɵɵadvance(1), t.ɵɵproperty("disabled", !0));
      }
      function lt(o, m) {
        if (1 & o) {
          const i = t.ɵɵgetCurrentView();
          t.ɵɵelementStart(0, "button", 15),
            t.ɵɵlistener("click", function () {
              t.ɵɵrestoreView(i);
              const F = t.ɵɵnextContext();
              return t.ɵɵresetView(
                F.buttonState.disabled ? F.noop() : F.handleDoSwap()
              );
            }),
            t.ɵɵelementStart(1, "span", 16),
            t.ɵɵtext(2, " Swap anyway "),
            t.ɵɵelementEnd()();
        }
        if (2 & o) {
          const i = t.ɵɵnextContext();
          t.ɵɵproperty("disabled", i.buttonState.disabled);
        }
      }
      const dt = function (o, m) {
        return { sourceToken: o, destinationToken: m };
      };
      function ut(o, m) {
        if (1 & o) {
          const i = t.ɵɵgetCurrentView();
          t.ɵɵelementStart(0, "alert", 17),
            t.ɵɵtext(1),
            t.ɵɵpipe(2, "transloco"),
            t.ɵɵelementEnd(),
            t.ɵɵelementStart(3, "button", 18),
            t.ɵɵlistener("click", function () {
              t.ɵɵrestoreView(i);
              const F = t.ɵɵnextContext();
              return t.ɵɵresetView(F.handleUpdateRates());
            }),
            t.ɵɵelement(4, "span", 7),
            t.ɵɵelementEnd();
        }
        if (2 & o) {
          const i = t.ɵɵnextContext();
          t.ɵɵproperty("iconType", null)("hideCloseButton", !0),
            t.ɵɵadvance(1),
            t.ɵɵtextInterpolate1(
              " ",
              t.ɵɵpipeBind2(
                2,
                3,
                "uni.confirmSwap.rate-decreased",
                t.ɵɵpureFunction2(
                  6,
                  dt,
                  i.sourceToken.symbol,
                  i.destinationToken.symbol
                )
              ),
              " "
            );
        }
      }
      let mt = (() => {
        class o {
          constructor() {
            (this.onUpdateRates = new t.EventEmitter()),
              (this.onDoSwap = new t.EventEmitter()),
              (this.onAdjustGasPrice = new t.EventEmitter()),
              (this.onRecalculateRoute = new t.EventEmitter());
          }
          handleUpdateRates() {
            this.onUpdateRates.emit();
          }
          handleAdjustGasPrice() {
            this.onAdjustGasPrice.emit();
          }
          handleDoSwap() {
            this.onDoSwap.emit();
          }
          handleRecalculateRoute() {
            this.onRecalculateRoute.emit();
          }
          noop() {}
        }
        return (
          (o.ɵfac = function (i) {
            return new (i || o)();
          }),
          (o.ɵcmp = t.ɵɵdefineComponent({
            type: o,
            selectors: [["swap-confirmation-button"]],
            inputs: {
              buttonState: "buttonState",
              sourceToken: "sourceToken",
              destinationToken: "destinationToken",
            },
            outputs: {
              onUpdateRates: "onUpdateRates",
              onDoSwap: "onDoSwap",
              onAdjustGasPrice: "onAdjustGasPrice",
              onRecalculateRoute: "onRecalculateRoute",
            },
            decls: 10,
            vars: 8,
            consts: [
              [3, "ngSwitch"],
              [
                "class",
                "primary-action-button swap-confirm-button high-slippage",
                "data-id",
                "confirm-swap.recalculate-route",
                3,
                "click",
                4,
                "ngSwitchCase",
              ],
              [4, "ngSwitchCase"],
              [3, "clickHandler", 4, "ngSwitchCase"],
              [
                "class",
                "primary-action-button swap-confirm-button high-slippage",
                "data-id",
                "confirm-swap.do-swap-anyway-button",
                "id",
                "confirm-swap.do-swap-anyway-button",
                3,
                "disabled",
                "click",
                4,
                "ngSwitchCase",
              ],
              ["rateExpired", ""],
              [
                "data-id",
                "confirm-swap.recalculate-route",
                1,
                "primary-action-button",
                "swap-confirm-button",
                "high-slippage",
                3,
                "click",
              ],
              ["transloco", "confirmSwap.recalculate-route"],
              [4, "ngTemplateOutlet"],
              [3, "clickHandler"],
              [
                "data-id",
                "confirm-swap.do-swap-button",
                "id",
                "confirm-swap.do-swap-button",
                1,
                "primary-action-button",
                "swap-confirm-button",
                3,
                "disabled",
                "click",
              ],
              ["transloco", "confirmSwap.confirm-swap2"],
              [
                1,
                "primary-action-button",
                "swap-confirm-button",
                3,
                "disabled",
              ],
              ["transloco", "status.loading"],
              [
                "src",
                "assets/images/loader_blue.svg",
                "alt",
                "",
                1,
                "loading-img",
              ],
              [
                "data-id",
                "confirm-swap.do-swap-anyway-button",
                "id",
                "confirm-swap.do-swap-anyway-button",
                1,
                "primary-action-button",
                "swap-confirm-button",
                "high-slippage",
                3,
                "disabled",
                "click",
              ],
              ["transloco", "uni.button.swap-anyway"],
              ["type", "alert", 3, "iconType", "hideCloseButton"],
              [
                "data-id",
                "confirm-swap.price-updated",
                1,
                "primary-action-button",
                "alert-button",
                3,
                "click",
              ],
            ],
            template: function (i, g) {
              1 & i &&
                (t.ɵɵelementContainerStart(0, 0),
                t.ɵɵtemplate(1, Q, 2, 0, "button", 1),
                t.ɵɵtemplate(2, et, 2, 1, "ng-container", 2),
                t.ɵɵtemplate(3, Y, 2, 1, "ng-container", 2),
                t.ɵɵtemplate(4, Z, 1, 0, "adjust-gas-price-button", 3),
                t.ɵɵtemplate(5, it, 4, 1, "ng-container", 2),
                t.ɵɵtemplate(6, rt, 5, 1, "ng-container", 2),
                t.ɵɵtemplate(7, lt, 3, 1, "button", 4),
                t.ɵɵelementContainerEnd(),
                t.ɵɵtemplate(
                  8,
                  ut,
                  5,
                  9,
                  "ng-template",
                  null,
                  5,
                  t.ɵɵtemplateRefExtractor
                )),
                2 & i &&
                  (t.ɵɵproperty("ngSwitch", g.buttonState.type),
                  t.ɵɵadvance(1),
                  t.ɵɵproperty("ngSwitchCase", "broken-route"),
                  t.ɵɵadvance(1),
                  t.ɵɵproperty("ngSwitchCase", "rate-increased"),
                  t.ɵɵadvance(1),
                  t.ɵɵproperty("ngSwitchCase", "rate-decreased"),
                  t.ɵɵadvance(1),
                  t.ɵɵproperty("ngSwitchCase", "adjust-gas"),
                  t.ɵɵadvance(1),
                  t.ɵɵproperty("ngSwitchCase", "swap"),
                  t.ɵɵadvance(1),
                  t.ɵɵproperty("ngSwitchCase", "update-rates-in-progress"),
                  t.ɵɵadvance(1),
                  t.ɵɵproperty("ngSwitchCase", "swap-anyway"));
            },
            dependencies: [u.tP, u.RF, u.n9, D.KI, x.w, J.R, D.Ot],
            styles: [
              "adjust-gas-price-button[_ngcontent-%COMP%]{margin-top:-8px}.loading-img[_ngcontent-%COMP%]{height:24px;margin-left:10px;margin-top:-10px;margin-bottom:-6px}",
            ],
          })),
          o
        );
      })();
      function _t(o, m) {
        if ((1 & o && t.ɵɵelement(0, "partner-fees", 11), 2 & o)) {
          const i = t.ɵɵnextContext(3).ngIf;
          t.ɵɵproperty("usdFirst", !0)(
            "partnersFees",
            i.swapDetails.partnerFees
          )("sourceToken", i.sourceToken);
        }
      }
      function gt(o, m) {
        if (
          (1 & o &&
            (t.ɵɵelementStart(0, "trade-info-item", 12)(1, "span", 13),
            t.ɵɵtext(2, " (DEV) Amount from TX "),
            t.ɵɵelementEnd(),
            t.ɵɵelementStart(3, "span", 14),
            t.ɵɵtext(4),
            t.ɵɵpipe(5, "async"),
            t.ɵɵelementEnd()()),
          2 & o)
        ) {
          const i = t.ɵɵnextContext(4);
          t.ɵɵadvance(4),
            t.ɵɵtextInterpolate1(
              " ",
              t.ɵɵpipeBind1(5, 1, i.returnAmount$),
              " "
            );
        }
      }
      const ft = function () {
        return ["slippage", "transaction-cost"];
      };
      function ht(o, m) {
        if (1 & o) {
          const i = t.ɵɵgetCurrentView();
          t.ɵɵelementStart(0, "trade-info", 6),
            t.ɵɵelement(1, "min-received-amount", 7),
            t.ɵɵelementStart(2, "swap-confirm-settings-rows", 8),
            t.ɵɵlistener("openSettings", function (F) {
              t.ɵɵrestoreView(i);
              const ct = t.ɵɵnextContext(3);
              return t.ɵɵresetView(ct.handleOpenSettings(F));
            }),
            t.ɵɵelementEnd(),
            t.ɵɵtemplate(3, _t, 1, 3, "partner-fees", 9),
            t.ɵɵtemplate(4, gt, 6, 3, "trade-info-item", 10),
            t.ɵɵpipe(5, "async"),
            t.ɵɵelementEnd();
        }
        if (2 & o) {
          const i = m.tuiLet,
            g = t.ɵɵnextContext().tuiLet,
            F = t.ɵɵnextContext().ngIf,
            ct = t.ɵɵnextContext();
          t.ɵɵproperty("sourceToken", F.sourceToken)(
            "sourceTokenAmount",
            F.sourceTokenAmount
          )("destinationToken", F.destinationToken)(
            "destinationTokenAmount",
            F.destinationTokenAmount
          ),
            t.ɵɵadvance(1),
            t.ɵɵproperty("loading", g)("destinationToken", F.destinationToken)(
              "isHighSlippageTolerance",
              i.isHighSlippageTolerance
            )("minDestinationAmount", i.minReceivedTokenAmount)(
              "receivedAmountSlippage",
              i.slippageTolerance
            ),
            t.ɵɵadvance(1),
            t.ɵɵproperty("contextId", ct.contextId)(
              "visibleItems",
              t.ɵɵpureFunction0(19, ft)
            )("swapConfirmationData", F)("txTypeControl", ct.txTypeControl)(
              "customGasPriceControl",
              ct.customGasPriceControl
            )("gasLimit", ct.gasLimit),
            t.ɵɵadvance(1),
            t.ɵɵproperty("ngIf", F.swapDetails.partnerFees),
            t.ɵɵadvance(1),
            t.ɵɵproperty("ngIf", t.ɵɵpipeBind1(5, 17, ct.isDevMode$));
        }
      }
      function Ct(o, m) {
        if ((1 & o && t.ɵɵelement(0, "tx-type-switch", 15), 2 & o)) {
          const i = t.ɵɵnextContext(2).ngIf,
            g = t.ɵɵnextContext();
          t.ɵɵproperty("formControl", g.txTypeControl)(
            "params",
            i.swapType.params
          )("customGasPriceControl", g.customGasPriceControl);
        }
      }
      const st = function (o) {
        return { value: o };
      };
      function vt(o, m) {
        if (
          (1 & o &&
            (t.ɵɵelementStart(0, "alert", 17),
            t.ɵɵtext(1),
            t.ɵɵpipe(2, "transloco"),
            t.ɵɵelementEnd()),
          2 & o)
        ) {
          const i = t.ɵɵnextContext().ngIf;
          t.ɵɵproperty("hideCloseButton", !0),
            t.ɵɵadvance(1),
            t.ɵɵtextInterpolate1(
              " ",
              t.ɵɵpipeBind2(
                2,
                2,
                "swap-confirmation.alert.price-impact",
                t.ɵɵpureFunction1(5, st, i.loss.inPercent)
              ),
              " "
            );
        }
      }
      function p(o, m) {
        if (
          (1 & o &&
            (t.ɵɵelementContainerStart(0),
            t.ɵɵtemplate(1, vt, 3, 7, "alert", 16),
            t.ɵɵelementContainerEnd()),
          2 & o)
        ) {
          const i = m.ngIf,
            g = t.ɵɵnextContext().tuiLet;
          t.ɵɵadvance(1), t.ɵɵproperty("ngIf", !g && "extreme" === i.level);
        }
      }
      function P(o, m) {
        if (
          (1 & o &&
            (t.ɵɵelementContainerStart(0),
            t.ɵɵelement(1, "tokens-pair-preview", 3),
            t.ɵɵtemplate(2, ht, 6, 20, "trade-info", 4),
            t.ɵɵtemplate(3, Ct, 1, 3, "tx-type-switch", 5),
            t.ɵɵtemplate(4, p, 2, 1, "ng-container", 0),
            t.ɵɵelementContainerEnd()),
          2 & o)
        ) {
          const i = m.tuiLet,
            g = t.ɵɵnextContext().ngIf;
          t.ɵɵadvance(1),
            t.ɵɵproperty("isDestinationLoading", i)(
              "sourceToken",
              g.sourceToken
            )("sourceTokenAmount", g.sourceTokenAmount)(
              "destinationToken",
              g.destinationToken
            )("destinationTokenAmount", g.destinationTokenAmount)(
              "swapPriceImpact",
              g.swapPriceImpact
            ),
            t.ɵɵadvance(1),
            t.ɵɵproperty("tuiLet", g.swapDetails),
            t.ɵɵadvance(1),
            t.ɵɵproperty("ngIf", g.swapType),
            t.ɵɵadvance(1),
            t.ɵɵproperty("ngIf", g.swapPriceImpact);
        }
      }
      function r(o, m) {
        1 & o && t.ɵɵelement(0, "ledger-unoswap-info");
      }
      function c(o, m) {
        if ((1 & o && t.ɵɵelement(0, "fot-swap-alert", 18), 2 & o)) {
          const i = t.ɵɵnextContext().ngIf;
          t.ɵɵproperty("sourceToken", i.sourceToken)(
            "destinationToken",
            i.destinationToken
          );
        }
      }
      function b(o, m) {
        1 & o &&
          (t.ɵɵelementStart(0, "alert", 20),
          t.ɵɵelement(1, "span", 21),
          t.ɵɵelementEnd()),
          2 & o && t.ɵɵproperty("hideCloseButton", !0);
      }
      function G(o, m) {
        if (
          (1 & o &&
            (t.ɵɵelementContainerStart(0),
            t.ɵɵtemplate(1, b, 2, 1, "alert", 19),
            t.ɵɵelementContainerEnd()),
          2 & o)
        ) {
          const i = t.ɵɵnextContext().ngIf;
          t.ɵɵadvance(1),
            t.ɵɵproperty("ngIf", !i.isFot && i.estimateWith99SlippageEnabled);
        }
      }
      function q(o, m) {
        if ((1 & o && t.ɵɵelement(0, "updated-route-alert", 23), 2 & o)) {
          const i = t.ɵɵnextContext(2).tuiLet;
          t.ɵɵproperty("destinationTokenData", i);
        }
      }
      function ot(o, m) {
        if (
          (1 & o &&
            (t.ɵɵelementContainerStart(0),
            t.ɵɵtemplate(1, q, 1, 1, "updated-route-alert", 22),
            t.ɵɵelementContainerEnd()),
          2 & o)
        ) {
          const i = t.ɵɵnextContext().tuiLet,
            g = t.ɵɵnextContext().ngIf;
          t.ɵɵadvance(1),
            t.ɵɵproperty(
              "ngIf",
              i &&
                "rate-increased" !== g.buttonState.type &&
                "rate-decreased" !== g.buttonState.type
            );
        }
      }
      const pt = function (o) {
        return { sources: o };
      };
      function wt(o, m) {
        if (
          (1 & o &&
            (t.ɵɵelementStart(0, "alert", 28),
            t.ɵɵtext(1),
            t.ɵɵpipe(2, "transloco"),
            t.ɵɵelementEnd()),
          2 & o)
        ) {
          const i = t.ɵɵnextContext(2).tuiLet;
          t.ɵɵproperty("hideCloseButton", !0),
            t.ɵɵadvance(1),
            t.ɵɵtextInterpolate1(
              " ",
              t.ɵɵpipeBind2(
                2,
                2,
                "swap-confirmation.alert.broken-route",
                t.ɵɵpureFunction1(5, pt, i.join(", "))
              ),
              " "
            );
        }
      }
      function a(o, m) {
        1 & o && t.ɵɵelement(0, "div", 29);
      }
      function k(o, m) {
        if (
          (1 & o &&
            (t.ɵɵelement(0, "send-to-another-address", 30),
            t.ɵɵpipe(1, "transloco"),
            t.ɵɵpipe(2, "transloco")),
          2 & o)
        ) {
          const i = t.ɵɵnextContext(4).ngIf,
            g = t.ɵɵnextContext();
          t.ɵɵproperty("formControl", g.sendToReceiverControl)(
            "addressLabel",
            t.ɵɵpipeBind1(1, 3, "uni.confirmSwap.receive-to")
          )(
            "label",
            t.ɵɵpipeBind2(
              2,
              5,
              "uni.confirmSwap.send-to-another-wallet",
              t.ɵɵpureFunction1(8, st, i.destinationToken.symbol)
            )
          );
        }
      }
      function l(o, m) {
        if (1 & o) {
          const i = t.ɵɵgetCurrentView();
          t.ɵɵelementContainerStart(0),
            t.ɵɵtemplate(1, wt, 3, 7, "alert", 24),
            t.ɵɵtemplate(2, a, 1, 0, "div", 25),
            t.ɵɵtemplate(3, k, 3, 10, "send-to-another-address", 26),
            t.ɵɵelementStart(4, "swap-confirmation-button", 27),
            t.ɵɵlistener("onUpdateRates", function () {
              t.ɵɵrestoreView(i);
              const F = t.ɵɵnextContext(4);
              return t.ɵɵresetView(F.handleUpdateRates());
            })("onAdjustGasPrice", function () {
              t.ɵɵrestoreView(i);
              const F = t.ɵɵnextContext(4);
              return t.ɵɵresetView(F.handleAdjustGasPrice());
            })("onRecalculateRoute", function () {
              t.ɵɵrestoreView(i);
              const F = t.ɵɵnextContext(4);
              return t.ɵɵresetView(F.handleRecalculateRoute());
            })("onDoSwap", function () {
              t.ɵɵrestoreView(i);
              const F = t.ɵɵnextContext(4);
              return t.ɵɵresetView(F.handleDoSwap());
            }),
            t.ɵɵelementEnd(),
            t.ɵɵelementContainerEnd();
        }
        if (2 & o) {
          const i = m.tuiLet,
            g = t.ɵɵnextContext(3).ngIf;
          t.ɵɵadvance(1),
            t.ɵɵproperty("ngIf", i),
            t.ɵɵadvance(1),
            t.ɵɵproperty("ngIf", !i),
            t.ɵɵadvance(1),
            t.ɵɵproperty("ngIf", !i),
            t.ɵɵadvance(1),
            t.ɵɵproperty("buttonState", g.buttonState)(
              "sourceToken",
              g.sourceToken
            )("destinationToken", g.destinationToken);
        }
      }
      function y(o, m) {
        if (
          (1 & o &&
            (t.ɵɵelementContainerStart(0),
            t.ɵɵtemplate(1, l, 5, 6, "ng-container", 1),
            t.ɵɵelementContainerEnd()),
          2 & o)
        ) {
          const i = m.tuiLet,
            g = t.ɵɵnextContext().tuiLet;
          t.ɵɵadvance(1), t.ɵɵproperty("tuiLet", !g && !!i);
        }
      }
      function N(o, m) {
        if (
          (1 & o &&
            (t.ɵɵelementContainerStart(0),
            t.ɵɵtemplate(1, ot, 2, 1, "ng-container", 0),
            t.ɵɵtemplate(2, y, 2, 1, "ng-container", 1),
            t.ɵɵelementContainerEnd()),
          2 & o)
        ) {
          const i = m.tuiLet,
            g = t.ɵɵnextContext().ngIf;
          t.ɵɵadvance(1),
            t.ɵɵproperty(
              "ngIf",
              i && "update-rates-in-progress" !== g.buttonState.type
            ),
            t.ɵɵadvance(1),
            t.ɵɵproperty("tuiLet", g.alerts.brokenLiquiditySources);
        }
      }
      function at(o, m) {
        if (
          (1 & o &&
            (t.ɵɵelementContainerStart(0),
            t.ɵɵtemplate(1, P, 5, 9, "ng-container", 1),
            t.ɵɵtemplate(2, r, 1, 0, "ledger-unoswap-info", 0),
            t.ɵɵtemplate(3, c, 1, 2, "fot-swap-alert", 2),
            t.ɵɵtemplate(4, G, 2, 1, "ng-container", 0),
            t.ɵɵpipe(5, "async"),
            t.ɵɵtemplate(6, N, 3, 2, "ng-container", 1),
            t.ɵɵelementContainerEnd()),
          2 & o)
        ) {
          const i = m.ngIf,
            g = t.ɵɵnextContext();
          t.ɵɵadvance(1),
            t.ɵɵproperty(
              "tuiLet",
              "update-rates-in-progress" === i.buttonState.type
            ),
            t.ɵɵadvance(1),
            t.ɵɵproperty("ngIf", i.alerts.ledgerUnoswap),
            t.ɵɵadvance(1),
            t.ɵɵproperty("ngIf", i.isFot),
            t.ɵɵadvance(1),
            t.ɵɵproperty("ngIf", !t.ɵɵpipeBind1(5, 5, g.wasRecalculated$)),
            t.ɵɵadvance(2),
            t.ɵɵproperty("tuiLet", i.alerts.alertDestResult);
        }
      }
      let nt = (() => {
        class o {
          constructor(i, g, F) {
            (this.walletConnectionQuery = i),
              (this.returnAmountDevService = g),
              (this.settingToggleService = F),
              (this.onUpdateRates = new t.EventEmitter()),
              (this.onDoSwap = new t.EventEmitter()),
              (this.onRecalculateRoute = new t.EventEmitter()),
              (this.onOpenSettings = new t.EventEmitter()),
              (this.isDevMode$ = this.walletConnectionQuery.isDevMode$),
              (this.returnAmount$ = this.returnAmountDevService.returnAmount$),
              (this.wasRecalculated$ = new s.X(!1));
          }
          handleUpdateRates() {
            this.onUpdateRates.emit(), this.wasRecalculated$.next(!0);
          }
          handleAdjustGasPrice() {
            this.settingToggleService.changeIsWidgetOpened({
              isOpened: !0,
              contextId: this.contextId,
              widgetId: "gas-price",
            });
          }
          handleDoSwap() {
            this.onDoSwap.emit();
          }
          handleRecalculateRoute() {
            this.onRecalculateRoute.emit();
          }
          handleOpenSettings(i) {
            this.onOpenSettings.emit(i);
          }
        }
        return (
          (o.ɵfac = function (i) {
            return new (i || o)(
              t.ɵɵdirectiveInject(_.r),
              t.ɵɵdirectiveInject(h.F),
              t.ɵɵdirectiveInject(f.d)
            );
          }),
          (o.ɵcmp = t.ɵɵdefineComponent({
            type: o,
            selectors: [["swap-confirmation"]],
            inputs: {
              swapConfirmationData: "swapConfirmationData",
              txTypeControl: "txTypeControl",
              customGasPriceControl: "customGasPriceControl",
              sendToReceiverControl: "sendToReceiverControl",
              contextId: "contextId",
              gasLimit: "gasLimit",
            },
            outputs: {
              onUpdateRates: "onUpdateRates",
              onDoSwap: "onDoSwap",
              onRecalculateRoute: "onRecalculateRoute",
              onOpenSettings: "onOpenSettings",
            },
            decls: 1,
            vars: 1,
            consts: [
              [4, "ngIf"],
              [4, "tuiLet"],
              [3, "sourceToken", "destinationToken", 4, "ngIf"],
              [
                3,
                "isDestinationLoading",
                "sourceToken",
                "sourceTokenAmount",
                "destinationToken",
                "destinationTokenAmount",
                "swapPriceImpact",
              ],
              [
                3,
                "sourceToken",
                "sourceTokenAmount",
                "destinationToken",
                "destinationTokenAmount",
                4,
                "tuiLet",
              ],
              [
                "class",
                "switch-tx-type-control",
                "data-id",
                "confirm-swap.switch-tx-type-control",
                3,
                "formControl",
                "params",
                "customGasPriceControl",
                4,
                "ngIf",
              ],
              [
                3,
                "sourceToken",
                "sourceTokenAmount",
                "destinationToken",
                "destinationTokenAmount",
              ],
              [
                "tradeInfoItem",
                "",
                1,
                "trade-info-item-custom",
                3,
                "loading",
                "destinationToken",
                "isHighSlippageTolerance",
                "minDestinationAmount",
                "receivedAmountSlippage",
              ],
              [
                "tradeInfoItem",
                "",
                3,
                "contextId",
                "visibleItems",
                "swapConfirmationData",
                "txTypeControl",
                "customGasPriceControl",
                "gasLimit",
                "openSettings",
              ],
              [
                "tradeInfoItem",
                "",
                "class",
                "trade-info-item-custom",
                3,
                "usdFirst",
                "partnersFees",
                "sourceToken",
                4,
                "ngIf",
              ],
              ["class", "trade-info__dev-amount", 4, "ngIf"],
              [
                "tradeInfoItem",
                "",
                1,
                "trade-info-item-custom",
                3,
                "usdFirst",
                "partnersFees",
                "sourceToken",
              ],
              [1, "trade-info__dev-amount"],
              [
                "tradeInfoItemTitle",
                "",
                "transloco",
                "confirmSwap.dev-amount-from-tx",
              ],
              ["tradeInfoItemValue", "", 1, "text-green"],
              [
                "data-id",
                "confirm-swap.switch-tx-type-control",
                1,
                "switch-tx-type-control",
                3,
                "formControl",
                "params",
                "customGasPriceControl",
              ],
              [
                "data-id",
                "confirm-swap-price-impact-alert",
                "data-type",
                "alert",
                3,
                "hideCloseButton",
                4,
                "ngIf",
              ],
              [
                "data-id",
                "confirm-swap-price-impact-alert",
                "data-type",
                "alert",
                3,
                "hideCloseButton",
              ],
              [3, "sourceToken", "destinationToken"],
              ["type", "warning", 3, "hideCloseButton", 4, "ngIf"],
              ["type", "warning", 3, "hideCloseButton"],
              [
                "transloco",
                "confirmSwap.not-fot-swap-2",
                1,
                "confirm-swap-not-fot",
              ],
              [3, "destinationTokenData", 4, "ngIf"],
              [3, "destinationTokenData"],
              [3, "hideCloseButton", 4, "ngIf"],
              ["class", "divider", 4, "ngIf"],
              [3, "formControl", "addressLabel", "label", 4, "ngIf"],
              [
                3,
                "buttonState",
                "sourceToken",
                "destinationToken",
                "onUpdateRates",
                "onAdjustGasPrice",
                "onRecalculateRoute",
                "onDoSwap",
              ],
              [3, "hideCloseButton"],
              [1, "divider"],
              [3, "formControl", "addressLabel", "label"],
            ],
            template: function (i, g) {
              1 & i && t.ɵɵtemplate(0, at, 7, 7, "ng-container", 0),
                2 & i && t.ɵɵproperty("ngIf", g.swapConfirmationData);
            },
            dependencies: [
              u.O5,
              C.L,
              v.Ls,
              E.n,
              T.K,
              S.D,
              D.KI,
              I.o,
              A,
              x.w,
              L.S,
              O.NgControlStatus,
              O.FormControlDirective,
              K.y,
              n,
              B,
              V.j,
              mt,
              u.Ov,
              D.Ot,
            ],
            styles: [
              ".swap-confirmation__container[_ngcontent-%COMP%]{background-color:var(--1inch-bg-02);width:418px;border-radius:24px;padding:16px}trade-info[_ngcontent-%COMP%]{padding-left:4px;padding-right:4px;padding-top:8px}tx-type-switch[_ngcontent-%COMP%]{display:block;margin-top:24px}send-to-another-address[_ngcontent-%COMP%]{display:block;margin-right:4px;margin-left:4px}send-to-another-address[_ngcontent-%COMP%]     .t-content{margin-top:1px;margin-left:12px!important}swap-confirmation-button[_ngcontent-%COMP%]{display:block;margin-top:16px}.confirm-swap-not-fot[_ngcontent-%COMP%]{display:block;margin-bottom:16px}.confirm-swap-not-fot[_ngcontent-%COMP%]:last-child{margin-bottom:0}",
            ],
            changeDetection: 0,
          })),
          o
        );
      })();
    },
    83517: (z, M, e) => {
      e.d(M, { R: () => j });
      var t = e(30137),
        s = e(91488),
        _ = e(95021),
        h = e(64057),
        f = e(71426),
        u = e(47384),
        v = e(29737),
        E = e(76027),
        T = e(53886),
        S = e(64736),
        D = e(76327),
        I = e(68751),
        x = e(12733),
        R = e(35878),
        d = e(9667);
      class j {
        constructor(L, O, K, n, H, X, U) {
          (this.walletService = L),
            (this.tokensPairPriceImpactService = O),
            (this.swapConfirmManagerService = K),
            (this.swapSettingsService = n),
            (this.swapSettingsQuery = H),
            (this.swapConfirmTxService = X),
            (this.swapSlippageService = U),
            (this.isAlternativeReceiverValid$ = new E.X(!0)),
            (this.swapSnapshot$ = new E.X(null)),
            (this.slippageTolerance$ =
              this.swapSlippageService.slippageTolerance$),
            (this.showSwapType$ = (0, T.a)([
              this.walletService.getWalletCapability$(
                "isFlashTransactionsDisabled",
                !1
              ),
              this.swapSnapshot$,
            ]).pipe(
              (0, S.U)(([W, w]) => !W && (null == w ? void 0 : w.showSwapType))
            )),
            (this.swapPriceImpact$ = this.swapSnapshot$.pipe(
              (0, _.BX)(),
              (0, D.w)((W) => {
                const w = (0, v.eiS)(
                  [
                    "sourceToken",
                    "sourceTokenAmount",
                    "destinationToken",
                    "destinationTokenAmount",
                  ],
                  W.swapData
                );
                return this.tokensPairPriceImpactService.getPriceImpact$(w);
              })
            )),
            (this.swapRateChanges$ =
              this.swapConfirmManagerService.routeWasRecalculated$.pipe(
                (0, I.h)((W) => W === d.a.UpdateRate || W === d.a.None),
                (0, D.w)(
                  (W) => (
                    (0, h.H)(`RECALCULATE rates updated: ${W}`),
                    (0, T.a)({
                      pathfinderDestinationTokenAmount:
                        this.destinationTokenAmount$,
                      snapshotDestinationTokenAmount: this.swapSnapshot$.pipe(
                        (0, S.U)((w) => {
                          var B, V;
                          return null !==
                            (V =
                              null === (B = null == w ? void 0 : w.swapData) ||
                              void 0 === B
                                ? void 0
                                : B.destinationTokenAmount) && void 0 !== V
                            ? V
                            : "";
                        })
                      ),
                      destinationToken: this.destinationToken$,
                      slippageTolerance: this.slippageTolerance$,
                    }).pipe(
                      (0, I.h)(
                        ({ pathfinderDestinationTokenAmount: w }) => !!w
                      ),
                      (0, S.U)((w) => {
                        const {
                            pathfinderDestinationTokenAmount: B,
                            snapshotDestinationTokenAmount: V,
                            destinationToken: J,
                            slippageTolerance: Q,
                          } = w,
                          tt = (0, s.L_)(J, null != B ? B : "", Q),
                          et = (0, s.L_)(J, null != V ? V : "", Q);
                        return (
                          (0, h.H)(
                            `RECALCULATE snapshot:\n                    ${JSON.stringify(
                              {
                                snapshotDestinationTokenAmount: V,
                                snapshotMinReturnAmount: et,
                              }
                            )}`
                          ),
                          (0, h.H)(
                            `RECALCULATE pathfinder:\n                    ${JSON.stringify(
                              {
                                pathfinderDestinationTokenAmount: B,
                                pathfinderMinReturnAmount: tt,
                              }
                            )}`
                          ),
                          +(tt || 0) > +(V || 0)
                            ? d.K.increased
                            : +(B || 0) < +(et || 0)
                            ? d.K.decreased
                            : d.K.notChanged
                        );
                      }),
                      (0, x.O)(d.K.notChanged)
                    )
                  )
                )
              ));
        }
        getData$() {
          return (0, T.a)([
            this.swapSnapshot$.pipe((0, _.BX)()),
            this.showSwapType$,
            this.txFeeAmount$.pipe((0, R.x)()),
            this.swapPriceImpact$,
            this.getButtonState$(),
            this.fotSwapEnabled$,
            this.swapConfirmManagerService.brokenLiquiditySources$,
            this.swapConfirmManagerService.routeWasRecalculated$,
            this.estimateWith99SlippageEnabled$,
          ]).pipe(
            (0, R.x)((L, O) => (0, v.fS0)(L, O)),
            (0, S.U)(([L, O, K, n, H, X, U, W, w]) =>
              this.getData({
                swapSnapshot: L,
                showSwapType: O,
                txFeeAmount: K,
                swapPriceImpact: n,
                buttonState: H,
                fotSwapEnabled: X,
                brokenLiquiditySources: U,
                brokenRouteWasRecalculated: W,
                estimateWith99SlippageEnabled: w,
              })
            )
          );
        }
        getButtonState$() {
          return (0, T.a)([
            this.swapRateChanges$,
            this.swapConfirmManagerService.rateUpdatesInProgress$,
            this.swapSettingsService.isGasPriceNeedAdjust$,
            this.swapPriceImpact$,
            this.fotSwapEnabled$,
            this.isAlternativeReceiverValid$,
            this.swapConfirmManagerService.brokenLiquiditySources$,
            this.swapConfirmManagerService.routeWasRecalculated$,
            this.swapSnapshot$.pipe(
              (0, S.U)((L) => {
                var O, K;
                return null !==
                  (K =
                    null === (O = null == L ? void 0 : L.swapData) ||
                    void 0 === O
                      ? void 0
                      : O.destinationTokenAmount) && void 0 !== K
                  ? K
                  : "";
              })
            ),
          ]).pipe(
            (0, S.U)(([L, O, K, n, H, X, U, W, w]) =>
              !W && U && U.length > 0
                ? { type: "broken-route", disabled: !1 }
                : O
                ? { type: "update-rates-in-progress", disabled: !0 }
                : L === d.K.increased
                ? { type: "rate-increased", disabled: !1 }
                : L === d.K.decreased
                ? { type: "rate-decreased", disabled: !1 }
                : K
                ? { type: "adjust-gas", disabled: !1 }
                : n ||
                  (H &&
                    +w <
                      +this.swapConfirmTxService.context
                        .originalDestinationAmount)
                ? { type: "swap-anyway", disabled: !X }
                : { type: "swap", disabled: !X }
            )
          );
        }
        getData(L) {
          const {
              swapSnapshot: O,
              showSwapType: K,
              txFeeAmount: n,
              swapPriceImpact: H,
              buttonState: X,
              fotSwapEnabled: U,
              brokenLiquiditySources: W,
              brokenRouteWasRecalculated: w,
              estimateWith99SlippageEnabled: B,
            } = L,
            V = O.swapData.destinationToken,
            J = O.swapData.destinationTokenAmount,
            Q =
              this.swapConfirmManagerService.context.originalDestinationAmount,
            tt = {
              destinationTokenAmount: J,
              destinationTokenSymbol: V.symbol,
              originalDestinationAmount: Q,
              difference: this.getDifferenceBetweenDesiredAndReestimated(
                J,
                Q,
                V.decimals
              ),
              decimals: V.decimals,
            },
            et = w !== d.a.None ? tt : void 0;
          return Object.assign(
            Object.assign(
              {},
              (0, v.eiS)(
                [
                  "sourceToken",
                  "sourceTokenAmount",
                  "destinationToken",
                  "destinationTokenAmount",
                ],
                O.swapData
              )
            ),
            {
              swapPriceImpact: H,
              swapDetails: {
                slippageTolerance: O.slippageTolerance,
                minReceivedTokenAmount: O.minReceivedTokenAmount,
                txFeeAmount: n,
                isHighSlippageTolerance: O.isHighSlippageTolerance,
              },
              swapType:
                K && this.txTypeSwitchParams
                  ? { params: this.txTypeSwitchParams }
                  : void 0,
              buttonState: X,
              isFot: U,
              alerts: {
                brokenLiquiditySources: W && W.length > 0 ? W : void 0,
                alertDestResult: et,
                ledgerUnoswap: O.isLedgerLive && this.isUnoSwap,
              },
              estimateWith99SlippageEnabled: B,
            }
          );
        }
        getDifferenceBetweenDesiredAndReestimated(L, O, K) {
          const n = f.O$.from((0, t.yD)(L, K)),
            X = f.O$.from((0, t.yD)(O, K)).sub(n);
          return -+(0, u.formatUnits)(X, K);
        }
      }
    },
    86046: (z, M, e) => {
      e.d(M, { q: () => E });
      var t = e(12725),
        s = e(74578),
        _ = e(65687),
        h = e(64925),
        f = e(90799),
        u = e(63223),
        C = e(16944),
        v = e(51109);
      let E = (() => {
        class T {}
        return (
          (T.ɵfac = function (D) {
            return new (D || T)();
          }),
          (T.ɵmod = v.ɵɵdefineNgModule({ type: T })),
          (T.ɵinj = v.ɵɵdefineInjector({
            imports: [_.m, h.h, f.m, s.WD, t.y4, u._, C.z],
          })),
          T
        );
      })();
    },
    54009: (z, M, e) => {
      e.d(M, { L: () => f });
      var t = e(20683),
        s = e(51109),
        _ = e(98002),
        h = e(36995);
      let f = (() => {
        class u {
          constructor() {
            (this.isDestinationLoading = !1), (this.tokenRole = t.q);
          }
        }
        return (
          (u.ɵfac = function (v) {
            return new (v || u)();
          }),
          (u.ɵcmp = s.ɵɵdefineComponent({
            type: u,
            selectors: [["tokens-pair-preview"]],
            inputs: {
              sourceToken: "sourceToken",
              sourceTokenAmount: "sourceTokenAmount",
              destinationToken: "destinationToken",
              destinationTokenAmount: "destinationTokenAmount",
              sourceTokenTitle: "sourceTokenTitle",
              destinationTokenTitle: "destinationTokenTitle",
              isDestinationLoading: "isDestinationLoading",
              swapPriceImpact: "swapPriceImpact",
            },
            decls: 3,
            vars: 10,
            consts: [
              [
                "data-id",
                "token-preview.src-token",
                3,
                "token",
                "tokenAmount",
                "title",
                "tokenRole",
              ],
              [
                "data-id",
                "token-preview.dst-token",
                3,
                "token",
                "loading",
                "tokenAmount",
                "swapPriceImpact",
                "title",
                "tokenRole",
              ],
            ],
            template: function (v, E) {
              1 & v &&
                s.ɵɵelement(0, "token-preview", 0)(1, "swap-separator")(
                  2,
                  "token-preview",
                  1
                ),
                2 & v &&
                  (s.ɵɵproperty("token", E.sourceToken)(
                    "tokenAmount",
                    "" + E.sourceTokenAmount
                  )("title", E.sourceTokenTitle)(
                    "tokenRole",
                    E.tokenRole.source
                  ),
                  s.ɵɵadvance(2),
                  s.ɵɵproperty("token", E.destinationToken)(
                    "loading",
                    E.isDestinationLoading
                  )("tokenAmount", "" + E.destinationTokenAmount)(
                    "swapPriceImpact",
                    E.swapPriceImpact
                  )("title", E.destinationTokenTitle)(
                    "tokenRole",
                    E.tokenRole.destination
                  ));
            },
            dependencies: [_.W, h.g],
            changeDetection: 0,
          })),
          u
        );
      })();
    },
    14851: (z, M, e) => {
      e.d(M, { X: () => s });
      var t = e(51109);
      let s = (() => {
        class _ {
          constructor() {
            (this.width = 36), (this.height = 36), (this.duration = 10);
          }
        }
        return (
          (_.ɵfac = function (f) {
            return new (f || _)();
          }),
          (_.ɵcmp = t.ɵɵdefineComponent({
            type: _,
            selectors: [["arrow-locator-loading"]],
            inputs: { width: "width", height: "height", duration: "duration" },
            decls: 13,
            vars: 3,
            consts: [
              [
                "id",
                "arrow_loading",
                "xmlns",
                "http://www.w3.org/2000/svg",
                "viewBox",
                "-6 -6 36 36",
                1,
                "arrow-loading",
              ],
              [
                "stroke",
                "none",
                "fill",
                "none",
                "d",
                "M16.2751 7.78995C13.932 5.44681 10.133 5.44681 7.78986 7.78995C7.02853 8.55128 6.51457 9.4663 6.24798 10.4351C6.24473 10.4499 6.24114 10.4646 6.23719 10.4793C6.17635 10.7064 6.12938 10.9339 6.09577 11.161C5.83159 12.9457 6.39255 14.7026 7.52624 15.9944C7.61054 16.0901 7.69842 16.1838 7.78986 16.2752C8.08307 16.5685 8.39909 16.825 8.7322 17.0448C9.25533 17.3892 9.84172 17.6568 10.4798 17.8278C10.7386 17.8971 10.9979 17.9484 11.2565 17.9825C12.9537 18.2061 14.6187 17.6866 15.8747 16.6415C16.0123 16.5265 16.1459 16.4044 16.2751 16.2752C16.2848 16.2655 16.2947 16.2561 16.3047 16.2469C17.0123 15.531 17.5491 14.627 17.8283 13.5851C17.9712 13.0517 18.5196 12.7351 19.053 12.878C19.5865 13.021 19.9031 13.5693 19.7602 14.1028C19.3141 15.7676 18.3745 17.1684 17.1409 18.1899C16.1883 18.9822 15.0949 19.5189 13.9515 19.8002C11.8607 20.3147 9.6028 19.9749 7.7328 18.7809C7.06855 18.3579 6.47841 17.8432 5.97519 17.2589C5.12341 16.2738 4.55173 15.1302 4.26015 13.9324C4.01698 12.9416 3.96104 11.8931 4.12168 10.8379C4.36697 9.20484 5.1183 7.63309 6.37564 6.37574C9.49984 3.25154 14.5652 3.25154 17.6894 6.37574L18.2332 6.91959L18.2337 5.49951C18.2338 5.05769 18.5921 4.69964 19.034 4.69979C19.4758 4.69995 19.8338 5.05825 19.8337 5.50007L19.8325 9.03277L19.8322 9.8325L19.0325 9.83249L18.9401 9.83249C18.8146 9.85665 18.6854 9.85665 18.5599 9.83248L15.5005 9.83245C15.0587 9.83245 14.7005 9.47427 14.7005 9.03244C14.7005 8.59062 15.0587 8.23245 15.5005 8.23245L16.7176 8.23246L16.2751 7.78995Z",
                1,
                "background-path",
              ],
              [
                "id",
                "arrow",
                "stroke",
                "none",
                "fill",
                "none",
                "d",
                "M16.2751 7.78995C13.932 5.44681 10.133 5.44681 7.78986 7.78995C7.02853 8.55128 6.51457 9.4663 6.24798 10.4351C6.24473 10.4499 6.24114 10.4646 6.23719 10.4793C6.17635 10.7064 6.12938 10.9339 6.09577 11.161C5.83159 12.9457 6.39255 14.7026 7.52624 15.9944C7.61054 16.0901 7.69842 16.1838 7.78986 16.2752C8.08307 16.5685 8.39909 16.825 8.7322 17.0448C9.25533 17.3892 9.84172 17.6568 10.4798 17.8278C10.7386 17.8971 10.9979 17.9484 11.2565 17.9825C12.9537 18.2061 14.6187 17.6866 15.8747 16.6415C16.0123 16.5265 16.1459 16.4044 16.2751 16.2752C16.2848 16.2655 16.2947 16.2561 16.3047 16.2469C17.0123 15.531 17.5491 14.627 17.8283 13.5851C17.9712 13.0517 18.5196 12.7351 19.053 12.878C19.5865 13.021 19.9031 13.5693 19.7602 14.1028C19.3141 15.7676 18.3745 17.1684 17.1409 18.1899C16.1883 18.9822 15.0949 19.5189 13.9515 19.8002C11.8607 20.3147 9.6028 19.9749 7.7328 18.7809C7.06855 18.3579 6.47841 17.8432 5.97519 17.2589C5.12341 16.2738 4.55173 15.1302 4.26015 13.9324C4.01698 12.9416 3.96104 11.8931 4.12168 10.8379C4.36697 9.20484 5.1183 7.63309 6.37564 6.37574C9.49984 3.25154 14.5652 3.25154 17.6894 6.37574L18.2332 6.91959L18.2337 5.49951C18.2338 5.05769 18.5921 4.69964 19.034 4.69979C19.4758 4.69995 19.8338 5.05825 19.8337 5.50007L19.8325 9.03277L19.8322 9.8325L19.0325 9.83249L18.9401 9.83249C18.8146 9.85665 18.6854 9.85665 18.5599 9.83248L15.5005 9.83245C15.0587 9.83245 14.7005 9.47427 14.7005 9.03244C14.7005 8.59062 15.0587 8.23245 15.5005 8.23245L16.7176 8.23246L16.2751 7.78995Z",
              ],
              ["id", "arrow-clip"],
              [0, "xlink", "href", "#arrow"],
              ["clip-path", "url(#arrow-clip)"],
              [
                "cx",
                "12",
                "cy",
                "12",
                "r",
                "5",
                "transform",
                "rotate(365,12,12)",
                "fill",
                "none",
                "stroke",
                "currentColor",
                "stroke-width",
                "16",
                "stroke-dasharray",
                "30",
                "stroke-dashoffset",
                "0",
              ],
              [
                "attributeName",
                "stroke-dashoffset",
                "values",
                "0;-30",
                "begin",
                "arrow_loading.click; 0.7s",
                "repeatCount",
                "indefinite",
              ],
              [
                "id",
                "transform_0",
                "attributeName",
                "transform",
                "attributeType",
                "XML",
                "type",
                "rotate",
                "from",
                "0 0 0",
                "to",
                "-10 0 0",
                "dur",
                "0.07s",
                "begin",
                "arrow_loading.click;",
                "repeatCount",
                "1",
              ],
              [
                "id",
                "transform_1",
                "attributeName",
                "transform",
                "attributeType",
                "XML",
                "type",
                "rotate",
                "from",
                "-45 0 0",
                "to",
                "390 0 0",
                "dur",
                "0.6s",
                "begin",
                "transform_0.end",
                "repeatCount",
                "1",
              ],
              [
                "id",
                "transform_2",
                "attributeName",
                "transform",
                "attributeType",
                "XML",
                "type",
                "rotate",
                "from",
                "390 0 0",
                "to",
                "360 0 0",
                "dur",
                "0.15s",
                "begin",
                "transform_1.end",
                "repeatCount",
                "1",
              ],
            ],
            template: function (f, u) {
              1 & f &&
                (t.ɵɵnamespaceSVG(),
                t.ɵɵelementStart(0, "svg", 0),
                t.ɵɵelement(1, "path", 1),
                t.ɵɵelementStart(2, "defs"),
                t.ɵɵelement(3, "path", 2),
                t.ɵɵelementStart(4, "clipPath", 3),
                t.ɵɵelement(5, "use", 4),
                t.ɵɵelementEnd()(),
                t.ɵɵelementStart(6, "g", 5)(7, "circle", 6),
                t.ɵɵelement(8, "animate", 7),
                t.ɵɵelementEnd()(),
                t.ɵɵelement(9, "use", 4)(10, "animateTransform", 8)(
                  11,
                  "animateTransform",
                  9
                )(12, "animateTransform", 10),
                t.ɵɵelementEnd()),
                2 & f &&
                  (t.ɵɵattribute("width", u.width)("height", u.height),
                  t.ɵɵadvance(8),
                  t.ɵɵattribute("dur", u.duration - 0.7 + "s"));
            },
            styles: [
              ".arrow-loading[_ngcontent-%COMP%]{color:var(--1inch-text-01)}.arrow-loading[_ngcontent-%COMP%]   .background-path[_ngcontent-%COMP%]{fill:var(--1inch-border-08)}",
            ],
            changeDetection: 0,
          })),
          _
        );
      })();
    },
    9032: (z, M, e) => {
      e.d(M, { j: () => s });
      var t = e(51109);
      let s = (() => {
        class _ {}
        return (
          (_.ɵfac = function (f) {
            return new (f || _)();
          }),
          (_.ɵmod = t.ɵɵdefineNgModule({ type: _ })),
          (_.ɵinj = t.ɵɵdefineInjector({})),
          _
        );
      })();
    },
    90927: (z, M, e) => {
      e.d(M, { K: () => T });
      var t = e(51109),
        s = e(38143),
        _ = e(12725),
        h = e(46173),
        f = e(29889),
        u = e(95475),
        C = e(86345);
      const v = function (S) {
        return { receivedAmountSlippage: S };
      };
      function E(S, D) {
        if (
          (1 & S &&
            (t.ɵɵelement(0, "attention-icon", 4), t.ɵɵpipe(1, "transloco")),
          2 & S)
        ) {
          const I = t.ɵɵnextContext();
          t.ɵɵproperty(
            "tooltipText",
            t.ɵɵpipeBind2(
              1,
              1,
              "confirmSwap.low-min-return-tooltip",
              t.ɵɵpureFunction1(4, v, I.receivedAmountSlippage)
            )
          );
        }
      }
      let T = (() => {
        class S {
          constructor() {
            this.loading = !1;
          }
        }
        return (
          (S.ɵfac = function (I) {
            return new (I || S)();
          }),
          (S.ɵcmp = t.ɵɵdefineComponent({
            type: S,
            selectors: [["min-received-amount"]],
            inputs: {
              isHighSlippageTolerance: "isHighSlippageTolerance",
              minDestinationAmount: "minDestinationAmount",
              receivedAmountSlippage: "receivedAmountSlippage",
              destinationToken: "destinationToken",
              loading: "loading",
            },
            decls: 11,
            vars: 15,
            consts: [
              [
                "transloco",
                "confirmSwap.minimum-received",
                1,
                "trade-item__title",
              ],
              [
                "data-id",
                "info-min-received-value",
                "id",
                "info-min-received-value",
                1,
                "text-right",
                "trade-item__value",
              ],
              [1, "token-amount", 3, "value", "decimals"],
              [
                "tooltipDirection",
                "top",
                "type",
                "error",
                3,
                "tooltipText",
                4,
                "ngIf",
              ],
              ["tooltipDirection", "top", "type", "error", 3, "tooltipText"],
            ],
            template: function (I, x) {
              1 & I &&
                (t.ɵɵelementStart(0, "p", 0),
                t.ɵɵtext(1, "Minimum received"),
                t.ɵɵelementEnd(),
                t.ɵɵelementStart(2, "div", 1),
                t.ɵɵelement(3, "token-amount", 2),
                t.ɵɵpipe(4, "toBigInt"),
                t.ɵɵelementStart(5, "span"),
                t.ɵɵtext(6, "\xa0"),
                t.ɵɵelementEnd(),
                t.ɵɵelementStart(7, "span"),
                t.ɵɵtext(8),
                t.ɵɵpipe(9, "displaySymbol"),
                t.ɵɵelementEnd(),
                t.ɵɵtemplate(10, E, 2, 6, "attention-icon", 3),
                t.ɵɵelementEnd()),
                2 & I &&
                  (t.ɵɵadvance(2),
                  t.ɵɵclassProp("skeleton-host", x.loading),
                  t.ɵɵadvance(1),
                  t.ɵɵclassProp("high-slippage", x.isHighSlippageTolerance),
                  t.ɵɵproperty(
                    "value",
                    t.ɵɵpipeBind2(
                      4,
                      10,
                      x.minDestinationAmount,
                      x.destinationToken.decimals
                    )
                  )("decimals", x.destinationToken.decimals),
                  t.ɵɵadvance(4),
                  t.ɵɵclassProp("high-slippage", x.isHighSlippageTolerance),
                  t.ɵɵadvance(1),
                  t.ɵɵtextInterpolate(t.ɵɵpipeBind1(9, 13, x.destinationToken)),
                  t.ɵɵadvance(2),
                  t.ɵɵproperty("ngIf", x.isHighSlippageTolerance));
            },
            dependencies: [s.O5, _.KI, h.X, f.O, _.Ot, u.s, C.M],
            styles: [
              "[_nghost-%COMP%]{display:flex;justify-content:space-between;width:100%}.attention-icon[_ngcontent-%COMP%]{margin-left:4px;margin-top:-2px}.field-warning-img[_ngcontent-%COMP%]{margin-top:-2px}.high-slippage[_ngcontent-%COMP%]{color:var(--1inch__text-and-icons__error)}",
            ],
            changeDetection: 0,
          })),
          S
        );
      })();
    },
    9516: (z, M, e) => {
      e.d(M, { G: () => h });
      var t = e(38143),
        s = e(2861),
        _ = e(51109);
      let h = (() => {
        class f {}
        return (
          (f.ɵfac = function (C) {
            return new (C || f)();
          }),
          (f.ɵmod = _.ɵɵdefineNgModule({ type: f })),
          (f.ɵinj = _.ɵɵdefineInjector({ providers: [s.t], imports: [t.ez] })),
          f
        );
      })();
    },
    2861: (z, M, e) => {
      e.d(M, { t: () => I });
      var t = e(53886),
        s = e(3012),
        _ = e(76327),
        h = e(64736),
        f = e(35878),
        u = e(77724),
        C = e(30137),
        v = e(71426);
      const E = (x, R, d, j) => {
        const L = v.O$.from((0, C.yD)(d, R.decimals)),
          O = v.O$.from(Math.floor(100 * x)),
          K = L.mul(O).div(1e4),
          n = (0, C.kg)(K.toString(), R.decimals),
          H = (0, C.c$)(n, 2);
        return {
          inPercent: "" + x,
          inSourceToken: H,
          inUsd: (parseFloat(H) * j.usdPrice).toFixed(2),
        };
      };
      var T = e(51109),
        S = e(20803),
        D = e(44432);
      let I = (() => {
        class x {
          constructor(d, j) {
            (this.tokenPricesQuery = d),
              (this.swapPriceImpactService = j),
              (this.swapPriceImpact = void 0);
          }
          getPriceImpact$(d) {
            return (0, t.a)([
              this.swapPriceImpactService.getSwapPriceImpact$(d),
              (0, s.of)(d),
            ]).pipe(
              (0, _.w)(([j, A]) =>
                j < 5
                  ? (0, s.of)(void 0)
                  : this.tokenPricesQuery
                      .getPriceByToken$(A.sourceToken.address)
                      .pipe(
                        (0, h.U)((L) => {
                          const { sourceTokenAmount: O, sourceToken: K } = A;
                          return {
                            level: j <= 10 ? "high" : "extreme",
                            sourceToken: A.sourceToken,
                            loss: E(j, K, O, L),
                          };
                        })
                      )
              ),
              (0, f.x)(),
              (0, u.b)((j) => {
                this.swapPriceImpact = j;
              })
            );
          }
        }
        return (
          (x.ɵfac = function (d) {
            return new (d || x)(T.ɵɵinject(S.u), T.ɵɵinject(D.f));
          }),
          (x.ɵprov = T.ɵɵdefineInjectable({ token: x, factory: x.ɵfac })),
          x
        );
      })();
    },
  },
]);
