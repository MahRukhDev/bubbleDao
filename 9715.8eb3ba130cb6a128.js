"use strict";
(self.webpackChunk_1inch = self.webpackChunk_1inch || []).push([
  [9715],
  {
    58877: (b, C, i) => {
      i.d(C, { u: () => P });
      var r = i(5327),
        x = i(51109);
      const u = {
        [r.td.BINANCE]: "BNB",
        [r.td.ETHEREUM]: "\u039e",
        [r.td.OPTIMISM]: "\u039e",
        [r.td.ARBITRUM]: "\u039e",
        [r.td.POLYGON]: "MATIC",
        [r.td.GNOSIS_CHAIN]: "XDAI",
        [r.td.AVALANCHE]: "AVAX",
        [r.td.FANTOM]: "FTM",
        [r.td.AURORA]: "\u039e",
        [r.td.KLAYTN]: "KLAY",
      };
      let P = (() => {
        class m {
          transform(h) {
            return u[h];
          }
        }
        return (
          (m.ɵfac = function (h) {
            return new (h || m)();
          }),
          (m.ɵpipe = x.ɵɵdefinePipe({
            name: "currentNetworkToken",
            type: m,
            pure: !0,
          })),
          m
        );
      })();
    },
    94226: (b, C, i) => {
      i.d(C, { M: () => x });
      var r = i(51109);
      let x = (() => {
        class u {
          transform(m) {
            return "\u039e" === m ? "Ether" : null;
          }
        }
        return (
          (u.ɵfac = function (m) {
            return new (m || u)();
          }),
          (u.ɵpipe = r.ɵɵdefinePipe({ name: "symbolName", type: u, pure: !0 })),
          u
        );
      })();
    },
    90463: (b, C, i) => {
      i.d(C, { e: () => T });
      var r = i(51109),
        x = i(31777),
        u = i(79296),
        P = i(3918),
        m = i(77724),
        w = i(82868),
        h = i(38143),
        M = i(25460),
        c = i(12725);
      function I(d, f) {
        1 & d &&
          (r.ɵɵnamespaceSVG(),
          r.ɵɵelementStart(0, "svg", 4),
          r.ɵɵelement(1, "use", 5),
          r.ɵɵelementEnd());
      }
      function E(d, f) {
        if (
          (1 & d &&
            (r.ɵɵelementStart(0, "mat-button-toggle", 2)(1, "span"),
            r.ɵɵtext(2),
            r.ɵɵpipe(3, "transloco"),
            r.ɵɵpipe(4, "async"),
            r.ɵɵelementEnd(),
            r.ɵɵtemplate(5, I, 2, 0, "svg", 3),
            r.ɵɵelementEnd()),
          2 & d)
        ) {
          const p = f.$implicit,
            g = r.ɵɵnextContext();
          r.ɵɵclassProp("toggle-switch-button-disabled", p.disabled)(
            "out-of-form",
            g.outOfForm
          ),
            r.ɵɵproperty("value", p.value)("disabled", p.disabled),
            r.ɵɵattribute(
              "data-id",
              "advanced-settings-toggle-group-" + p.dataId
            ),
            r.ɵɵadvance(2),
            r.ɵɵtextInterpolate(
              r.ɵɵpipeBind1(
                3,
                9,
                g.isTitleObservable(p.title)
                  ? r.ɵɵpipeBind1(4, 11, p.title)
                  : p.title
              )
            ),
            r.ɵɵadvance(3),
            r.ɵɵproperty("ngIf", p.recommended);
        }
      }
      let T = (() => {
        class d {
          constructor() {
            (this.outOfForm = !1),
              (this.toggleGroupControl = new x.UntypedFormControl()),
              (this.subscription = new u.w0()),
              (this.onTouched = null);
          }
          registerOnChange(p) {
            const g = this.toggleGroupControl.valueChanges
              .pipe(
                (0, m.b)((O) => {
                  p(O), this.onTouched && this.onTouched();
                })
              )
              .subscribe({ error: (O) => (0, w.eK)(O, "advanced-settings") });
            this.subscription.add(g);
          }
          registerOnTouched(p) {
            this.onTouched = p;
          }
          isTitleObservable(p) {
            return p instanceof P.y;
          }
          writeValue(p) {
            this.toggleGroupControl.setValue(p);
          }
          ngOnDestroy() {
            this.subscription.unsubscribe();
          }
          setValue(p) {
            this.writeValue(p.value);
          }
        }
        return (
          (d.ɵfac = function (p) {
            return new (p || d)();
          }),
          (d.ɵcmp = r.ɵɵdefineComponent({
            type: d,
            selectors: [["app-advanced-settings-toggle-group"]],
            inputs: {
              values: "values",
              selectedValue: "selectedValue",
              outOfForm: "outOfForm",
            },
            features: [
              r.ɵɵProvidersFeature([
                {
                  provide: x.NG_VALUE_ACCESSOR,
                  useExisting: (0, r.forwardRef)(() => d),
                  multi: !0,
                },
              ]),
            ],
            decls: 2,
            vars: 5,
            consts: [
              [3, "value", "change"],
              [
                "class",
                "toggle-switch-button",
                3,
                "value",
                "disabled",
                "toggle-switch-button-disabled",
                "out-of-form",
                4,
                "ngFor",
                "ngForOf",
              ],
              [1, "toggle-switch-button", 3, "value", "disabled"],
              [
                "width",
                "9",
                "height",
                "8",
                "class",
                "toggle-switch-button-recommended",
                4,
                "ngIf",
              ],
              [
                "width",
                "9",
                "height",
                "8",
                1,
                "toggle-switch-button-recommended",
              ],
              [
                0,
                "xlink",
                "href",
                "assets/images/icons/recommended.svg#recommended",
              ],
            ],
            template: function (p, g) {
              1 & p &&
                (r.ɵɵelementStart(0, "mat-button-toggle-group", 0),
                r.ɵɵlistener("change", function (S) {
                  return g.setValue(S);
                }),
                r.ɵɵtemplate(1, E, 6, 13, "mat-button-toggle", 1),
                r.ɵɵelementEnd()),
                2 & p &&
                  (r.ɵɵclassMapInterpolate1(
                    "toggle-switch toggle-switch-",
                    null == g.values ? null : g.values.length,
                    "-values"
                  ),
                  r.ɵɵproperty("value", g.selectedValue),
                  r.ɵɵadvance(1),
                  r.ɵɵproperty("ngForOf", g.values));
            },
            dependencies: [h.sg, h.O5, M.A9, M.Yi, h.Ov, c.Ot],
            styles: [
              ".toggle-switch[_ngcontent-%COMP%]{height:32px;display:grid;padding:2px;border-radius:8px;background:var(--1inch-bg-05)}.toggle-switch-2-values[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}.toggle-switch-3-values[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr)}.toggle-switch-4-values[_ngcontent-%COMP%]{grid-template-columns:repeat(4,1fr)}.toggle-switch-5-values[_ngcontent-%COMP%]{grid-template-columns:repeat(5,1fr)}.toggle-switch.out-of-form[_ngcontent-%COMP%]{background:var(--1inch__ui-07-09)}.toggle-switch.out-of-form[_ngcontent-%COMP%]{background:var(--1inch__ui-07-05)}.toggle-switch.out-of-form[_ngcontent-%COMP%]   .mat-button-toggle.mat-button-toggle-checked[_ngcontent-%COMP%]{background:var(--1inch-btn-bg-08)}.toggle-switch-button[_ngcontent-%COMP%]{font-size:13px;border-radius:6px;display:flex;color:var(--1inch-text-03)!important}.toggle-switch-button[_ngcontent-%COMP%]     .mat-button-toggle-button{display:flex;align-items:center;justify-content:center;height:unset!important}.toggle-switch-button[_ngcontent-%COMP%]     .mat-button-toggle-label-content{line-height:16px}.toggle-switch-button.mat-button-toggle-checked[_ngcontent-%COMP%]{background:var(--1inch-btn-bg-01)}.toggle-switch-button.mat-button-toggle-checked[_ngcontent-%COMP%]   .toggle-switch-button-recommended[_ngcontent-%COMP%]{color:var(--1inch-common-text-03)}.toggle-switch-button-disabled[_ngcontent-%COMP%]{color:var(--1inch__ui-02)!important}.toggle-switch-button-recommended[_ngcontent-%COMP%]{margin-left:4px;color:var(--1inch__ui-02)}",
            ],
            changeDetection: 0,
          })),
          d
        );
      })();
    },
    43180: (b, C, i) => {
      i.d(C, { m: () => Rt });
      var r = i(95021),
        x = i(76027),
        u = i(53886),
        P = i(3012),
        m = i(68751),
        w = i(76327),
        h = i(64736),
        M = i(35878),
        c = i(67701),
        I = i(83140);
      var T = i(30137),
        d = i(12292),
        f = i(83140);
      function g(n, o, e, a) {
        try {
          const s = (0, T.kg)(n, o);
          return (+(0, T.kg)(e, a) / +s).toString();
        } catch (s) {
          return f.error(`calculateRate history error: ${s}`), null;
        }
      }
      var O = i(83140);
      function F(n) {
        return "trade" === n.type
          ? (function p(n) {
              var o;
              try {
                const e = (0, d.Fs)(n),
                  a = (0, d.U6)(n.id);
                if (
                  !e ||
                  !a ||
                  2 !==
                    (null === (o = n.changes) || void 0 === o
                      ? void 0
                      : o.length)
                )
                  return null;
                const s = n.changes.find((y) => "out" === y.direction),
                  l = n.changes.find((y) => "in" === y.direction);
                return s && l
                  ? (s.asset &&
                      l.asset &&
                      ((e.srcToken = (0, d.os)(s.asset, a.chainId)),
                      (e.dstToken = (0, d.os)(l.asset, a.chainId)),
                      (e.swapInfo = {
                        fromAmount: (0, T.kg)(s.value, s.asset.decimals),
                        toAmount: (0, T.kg)(l.value, l.asset.decimals),
                      }),
                      (e.exchangeRate = {
                        rate: g(
                          s.value,
                          s.asset.decimals,
                          l.value,
                          l.asset.decimals
                        ),
                        reverseRate: g(
                          l.value,
                          l.asset.decimals,
                          s.value,
                          s.asset.decimals
                        ),
                      })),
                    e)
                  : null;
              } catch (e) {
                return f.log(`normalize trade tx ${n.hash} with e: ${e}`), null;
              }
            })(n)
          : null;
      }
      var t = i(51109),
        k = i(93130),
        $ = i(60358),
        L = i(58913),
        D = i(24124),
        z = i(79457),
        _ = i(38143),
        A = i(12725),
        V = i(92872),
        R = i(74578),
        U = i(79296),
        G = i(77724),
        j = i(77370),
        B = i(5327);
      let N = (() => {
        class n {}
        return (
          (n.ɵfac = function (e) {
            return new (e || n)();
          }),
          (n.ɵcmp = t.ɵɵdefineComponent({
            type: n,
            selectors: [["app-svg-arrow-icon-history"]],
            decls: 2,
            vars: 0,
            consts: [
              ["width", "16", "height", "16", 1, "text-gray"],
              [0, "xlink", "href", "assets/images/icons/tx-arrow.svg#tx-arrow"],
            ],
            template: function (e, a) {
              1 & e &&
                (t.ɵɵnamespaceSVG(),
                t.ɵɵelementStart(0, "svg", 0),
                t.ɵɵelement(1, "use", 1),
                t.ɵɵelementEnd());
            },
            changeDetection: 0,
          })),
          n
        );
      })();
      var W = i(95475),
        K = i(89092);
      let Q = (() => {
          class n {}
          return (
            (n.ɵfac = function (e) {
              return new (e || n)();
            }),
            (n.ɵcmp = t.ɵɵdefineComponent({
              type: n,
              selectors: [["app-transaction-details-cell"]],
              inputs: { tx: "tx" },
              decls: 20,
              vars: 18,
              consts: [
                ["data-id", "details-swap", 1, "transaction-details-cell"],
                [1, "details-token-src", "d-flex", "align-items-center"],
                ["alt", "", 1, "details-token-icon", 3, "src"],
                ["data-id", "src-token", 1, "details-text"],
                ["data-id", "src-amount", 1, "amount-text"],
                ["data-id", "src-name", 1, "details-text-mobile"],
                [1, "details-token-dst", "d-flex", "align-items-center"],
                ["data-id", "dst-token", 1, "details-text"],
                ["data-id", "dst-amount", 1, "amount-text"],
                ["data-id", "dst-name", 1, "details-text-mobile"],
              ],
              template: function (e, a) {
                1 & e &&
                  (t.ɵɵelementStart(0, "div", 0)(1, "div", 1),
                  t.ɵɵelement(2, "img", 2),
                  t.ɵɵelementStart(3, "div", 3)(4, "span", 4),
                  t.ɵɵtext(5),
                  t.ɵɵpipe(6, "formatTokenAmount"),
                  t.ɵɵelementEnd(),
                  t.ɵɵelementStart(7, "span", 5),
                  t.ɵɵtext(8),
                  t.ɵɵpipe(9, "displaySymbol"),
                  t.ɵɵelementEnd()()(),
                  t.ɵɵelement(10, "app-svg-arrow-icon-history"),
                  t.ɵɵelementStart(11, "div", 6),
                  t.ɵɵelement(12, "img", 2),
                  t.ɵɵelementStart(13, "div", 7)(14, "span", 8),
                  t.ɵɵtext(15),
                  t.ɵɵpipe(16, "formatTokenAmount"),
                  t.ɵɵelementEnd(),
                  t.ɵɵelementStart(17, "span", 9),
                  t.ɵɵtext(18),
                  t.ɵɵpipe(19, "displaySymbol"),
                  t.ɵɵelementEnd()()()()),
                  2 & e &&
                    (t.ɵɵadvance(2),
                    t.ɵɵpropertyInterpolate(
                      "src",
                      (null == a.tx.srcToken ? null : a.tx.srcToken.image) ||
                        "assets/token-logo/unknown-token.png",
                      t.ɵɵsanitizeUrl
                    ),
                    t.ɵɵadvance(3),
                    t.ɵɵtextInterpolate(
                      t.ɵɵpipeBind3(6, 6, a.tx.swapInfo.fromAmount, 18, "1.0-4")
                    ),
                    t.ɵɵadvance(3),
                    t.ɵɵtextInterpolate(t.ɵɵpipeBind1(9, 10, a.tx.srcToken)),
                    t.ɵɵadvance(4),
                    t.ɵɵpropertyInterpolate(
                      "src",
                      (null == a.tx.dstToken ? null : a.tx.dstToken.image) ||
                        "assets/token-logo/unknown-token.png",
                      t.ɵɵsanitizeUrl
                    ),
                    t.ɵɵadvance(3),
                    t.ɵɵtextInterpolate(
                      t.ɵɵpipeBind3(16, 12, a.tx.swapInfo.toAmount, 18, "1.0-4")
                    ),
                    t.ɵɵadvance(3),
                    t.ɵɵtextInterpolate(t.ɵɵpipeBind1(19, 16, a.tx.dstToken)));
              },
              dependencies: [N, W.s, K.l],
              styles: [
                "[_nghost-%COMP%]{display:contents}@media (max-width: 800px){[_nghost-%COMP%]{display:block;margin-bottom:12px}}.transaction-details-cell[_ngcontent-%COMP%]{display:contents}.details-token-icon[_ngcontent-%COMP%]{width:24px;height:24px;margin-right:8px}.deploy-new-pool[_ngcontent-%COMP%]   .details-token-icon[_ngcontent-%COMP%]:first-child{margin-right:-6px;z-index:20}.amount-text[_ngcontent-%COMP%]{margin-right:4px}.tokens-wrap[_ngcontent-%COMP%]{display:contents}@media (max-width: 800px){.tokens-wrap[_ngcontent-%COMP%]{display:contents}}@media (max-width: 450px){.tokens-wrap[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;grid-template-rows:1fr 1fr;grid-row-gap:12px}}@media (max-width: 1200px){[_nghost-%COMP%]{display:block;margin-bottom:20px}.tokens-wrap[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;grid-template-rows:1fr 1fr;grid-row-gap:12px}.provide-liquidity[_ngcontent-%COMP%], .remove-liquidity[_ngcontent-%COMP%]{justify-content:space-between}.transaction-details-cell[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;margin-bottom:16px}.details-token-src[_ngcontent-%COMP%]{margin-right:12px}.details-token-dst[_ngcontent-%COMP%]{margin-left:12px}.details-text[_ngcontent-%COMP%]{display:flex;flex-direction:column-reverse;align-items:flex-start}.details-text-mobile[_ngcontent-%COMP%]{color:var(--1inch__ui-02);margin-bottom:2px}.amount-text[_ngcontent-%COMP%]{margin-right:0;display:flex;align-items:flex-start}}",
              ],
            })),
            n
          );
        })(),
        X = (() => {
          class n {
            iconHref() {
              return `assets/images/tx-history-icons/${this.icon}-2.svg#${this.icon}`;
            }
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)();
            }),
            (n.ɵcmp = t.ɵɵdefineComponent({
              type: n,
              selectors: [["app-svg-icon-history"]],
              inputs: { icon: "icon" },
              decls: 2,
              vars: 1,
              consts: [
                [
                  "height",
                  "28",
                  "width",
                  "28",
                  1,
                  "bg-gray",
                  "status-icon",
                  "text-gray",
                ],
              ],
              template: function (e, a) {
                1 & e &&
                  (t.ɵɵnamespaceSVG(),
                  t.ɵɵelementStart(0, "svg", 0),
                  t.ɵɵelement(1, "use"),
                  t.ɵɵelementEnd()),
                  2 & e &&
                    (t.ɵɵadvance(1),
                    t.ɵɵattribute("href", a.iconHref(), null, "xlink"));
              },
              styles: [
                "[_nghost-%COMP%]{display:contents}.status-icon[_ngcontent-%COMP%]{border-radius:6px;padding:6px}",
              ],
              changeDetection: 0,
            })),
            n
          );
        })();
      var Y = i(4069),
        J = i(22221),
        Z = i(40372);
      let q = (() => {
          class n {
            transform(e, ...a) {
              return Z.$[e];
            }
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)();
            }),
            (n.ɵpipe = t.ɵɵdefinePipe({ name: "txType", type: n, pure: !0 })),
            n
          );
        })(),
        tt = (() => {
          class n {
            transform(e) {
              switch (e) {
                case c.E.swap:
                  return "swap";
                case c.E.approve:
                case c.E.approveFarming:
                case c.E.approveLiquidityPool:
                case c.E.approveFactory:
                case c.E.approveLimitOrder:
                case c.E.approveGovernance:
                  return "approve";
                case c.E.claimAirdrop:
                case c.E.claimReferralFee:
                case c.E.claimGovernanceFee:
                case c.E.gasReward:
                  return "claim";
                case c.E.deployNewPool:
                case c.E.removeLiquidity:
                case c.E.provideLiquidity:
                  return "pool";
                case c.E.voteGovernance:
                case c.E.discardVoteGovernance:
                case c.E.stakeGovernance:
                case c.E.unstakeGovernance:
                case c.E.notifyGovernance:
                case c.E.leftoverVoteGovernance:
                case c.E.discardLeftoverVoteGovernance:
                  return "governance";
                case c.E.stakeFarming:
                case c.E.exitFarming:
                case c.E.withdrawFarming:
                case c.E.getRewardFarming:
                  return "farming";
              }
              return "";
            }
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)();
            }),
            (n.ɵpipe = t.ɵɵdefinePipe({
              name: "txTypeIcon",
              type: n,
              pure: !0,
            })),
            n
          );
        })();
      function et(n, o) {
        if (
          (1 & n &&
            (t.ɵɵelement(0, "app-svg-icon-history", 16),
            t.ɵɵpipe(1, "txTypeIcon")),
          2 & n)
        ) {
          const e = t.ɵɵnextContext();
          t.ɵɵpropertyInterpolate(
            "icon",
            t.ɵɵpipeBind1(1, 1, e.transaction.txType)
          );
        }
      }
      function nt(n, o) {
        1 & n && t.ɵɵelement(0, "div", 17);
      }
      const at = function (n, o) {
        return { yellow: n, red: o };
      };
      function ot(n, o) {
        if (
          (1 & n &&
            (t.ɵɵelementStart(0, "div", 18)(1, "span", 19),
            t.ɵɵtext(2),
            t.ɵɵelementEnd()()),
          2 & n)
        ) {
          const e = t.ɵɵnextContext();
          t.ɵɵproperty(
            "ngClass",
            t.ɵɵpureFunction2(
              2,
              at,
              "pending" === e.transaction.status,
              "fail" === e.transaction.status
            )
          ),
            t.ɵɵadvance(2),
            t.ɵɵtextInterpolate(e.transaction.status);
        }
      }
      function it(n, o) {
        if (
          (1 & n &&
            (t.ɵɵelementStart(0, "div", 20)(1, "div", 12)(2, "p", 21),
            t.ɵɵtext(3, "Price"),
            t.ɵɵelementEnd(),
            t.ɵɵelementStart(4, "p", 22),
            t.ɵɵtext(5),
            t.ɵɵelementEnd(),
            t.ɵɵelementStart(6, "p", 23),
            t.ɵɵtext(7),
            t.ɵɵpipe(8, "number"),
            t.ɵɵelementEnd()(),
            t.ɵɵelementStart(9, "div", 12)(10, "p", 21),
            t.ɵɵtext(11, "Inner Price"),
            t.ɵɵelementEnd(),
            t.ɵɵelementStart(12, "p", 22),
            t.ɵɵtext(13),
            t.ɵɵelementEnd(),
            t.ɵɵelementStart(14, "p", 23),
            t.ɵɵtext(15),
            t.ɵɵpipe(16, "number"),
            t.ɵɵelementEnd()()()),
          2 & n)
        ) {
          const e = t.ɵɵnextContext();
          t.ɵɵadvance(5),
            t.ɵɵtextInterpolate1(
              "1\xa0",
              e.transaction.srcToken.symbol,
              "\xa0="
            ),
            t.ɵɵadvance(2),
            t.ɵɵtextInterpolate2(
              "",
              t.ɵɵpipeBind2(8, 6, e.transaction.exchangeRate.rate, "1.0-8"),
              " ",
              e.transaction.dstToken.symbol,
              ""
            ),
            t.ɵɵadvance(6),
            t.ɵɵtextInterpolate1(
              "1\xa0",
              e.transaction.dstToken.symbol,
              "\xa0="
            ),
            t.ɵɵadvance(2),
            t.ɵɵtextInterpolate2(
              "",
              t.ɵɵpipeBind2(
                16,
                9,
                e.transaction.exchangeRate.reverseRate,
                "1.0-8"
              ),
              " ",
              e.transaction.srcToken.symbol,
              ""
            );
        }
      }
      function rt(n, o) {
        if (
          (1 & n &&
            (t.ɵɵelementStart(0, "div", 20)(1, "div", 12)(2, "p", 21),
            t.ɵɵtext(3, "Price"),
            t.ɵɵelementEnd(),
            t.ɵɵelementStart(4, "p", 22),
            t.ɵɵtext(5),
            t.ɵɵelementEnd(),
            t.ɵɵelementStart(6, "p", 23),
            t.ɵɵtext(7),
            t.ɵɵelementEnd()(),
            t.ɵɵelementStart(8, "div", 12)(9, "p", 21),
            t.ɵɵtext(10, "Inner Price"),
            t.ɵɵelementEnd(),
            t.ɵɵelementStart(11, "p", 22),
            t.ɵɵtext(12),
            t.ɵɵelementEnd(),
            t.ɵɵelementStart(13, "p", 23),
            t.ɵɵtext(14),
            t.ɵɵelementEnd()()()),
          2 & n)
        ) {
          const e = t.ɵɵnextContext();
          t.ɵɵadvance(5),
            t.ɵɵtextInterpolate1(
              "1\xa0",
              e.transaction.srcToken.symbol,
              "\xa0="
            ),
            t.ɵɵadvance(2),
            t.ɵɵtextInterpolate("unknown " + e.transaction.dstToken.symbol),
            t.ɵɵadvance(5),
            t.ɵɵtextInterpolate1(
              "1\xa0",
              e.transaction.dstToken.symbol,
              "\xa0="
            ),
            t.ɵɵadvance(2),
            t.ɵɵtextInterpolate("unknown " + e.transaction.srcToken.symbol);
        }
      }
      function st(n, o) {
        if (
          (1 & n &&
            (t.ɵɵelementStart(0, "p", 24), t.ɵɵtext(1), t.ɵɵelementEnd()),
          2 & n)
        ) {
          const e = t.ɵɵnextContext();
          t.ɵɵadvance(1),
            t.ɵɵtextInterpolate1(
              "$",
              e.gasFiat(e.transaction.gas, e.transaction.gasPrice),
              ""
            );
        }
      }
      function ct(n, o) {
        if (
          (1 & n &&
            (t.ɵɵelementStart(0, "p", 25), t.ɵɵtext(1), t.ɵɵelementEnd()),
          2 & n)
        ) {
          const e = t.ɵɵnextContext();
          t.ɵɵproperty("ngClass", e.transaction.gasPrice && "text-gray"),
            t.ɵɵadvance(1),
            t.ɵɵtextInterpolate1(
              " ",
              e.gasView(e.transaction.gas) +
                " " +
                e.getSymbolByChainID(
                  e.transaction.gas,
                  e.chainIdForTx(e.transaction.id)
                ),
              " "
            );
        }
      }
      let lt = (() => {
        class n {
          constructor() {
            (this.showRate = !1), (this.isSwap = !1);
          }
          ngOnInit() {
            var e;
            this.isSwap =
              (null === (e = this.transaction) || void 0 === e
                ? void 0
                : e.txType) === c.E.swap;
          }
          gasView(e) {
            return e ? (0, T.kg)(e, 18, 8) : "";
          }
          gasFiat(e, a) {
            return e
              ? (+this.gasView(e) * (+a / Math.pow(10, 8))).toFixed(2)
              : "";
          }
          getSymbolByChainID(e, a) {
            return (e && B.PM[a]) || "";
          }
          chainIdForTx(e) {
            const a = (0, d.U6)(e);
            return (null == a ? void 0 : a.chainId) || B.$L.etherumMainnet;
          }
        }
        return (
          (n.ɵfac = function (e) {
            return new (e || n)();
          }),
          (n.ɵcmp = t.ɵɵdefineComponent({
            type: n,
            selectors: [["app-transaction-history-row"]],
            inputs: { transaction: "transaction", showRate: "showRate" },
            decls: 26,
            vars: 23,
            consts: [
              ["data-id", "transaction-history-row", 1, "table-row"],
              [1, "tx-header"],
              [3, "icon", 4, "ngIf"],
              ["class", "bg-gray text-gray pending-icon", 4, "ngIf"],
              [1, "tx-header-title"],
              ["data-id", "transaction-type", 1, "tx-type-title"],
              [
                "data-id",
                "transaction-link",
                1,
                "d-flex",
                "align-items-center",
              ],
              ["target", "_blank", 1, "transaction-link-address", 3, "href"],
              [
                "class",
                "tx-history-swaps-status mr-8",
                3,
                "ngClass",
                4,
                "ngIf",
              ],
              ["data-id", "transaction-time", 1, "text-gray"],
              [3, "tx"],
              ["class", "swaps-price", 4, "ngIf"],
              [1, "details"],
              [
                "transloco",
                "transactionHistoryTable.gas-price2",
                1,
                "details-text-price",
              ],
              ["class", "details-price text-right", 4, "ngIf"],
              ["class", "text-right", 3, "ngClass", 4, "ngIf"],
              [3, "icon"],
              [1, "bg-gray", "text-gray", "pending-icon"],
              [1, "tx-history-swaps-status", "mr-8", 3, "ngClass"],
              [1, "fs-8"],
              [1, "swaps-price"],
              [1, "details-title"],
              [1, "text-gray"],
              [1, "mt-4"],
              [1, "details-price", "text-right"],
              [1, "text-right", 3, "ngClass"],
            ],
            template: function (e, a) {
              1 & e &&
                (t.ɵɵelementStart(0, "div", 0)(1, "div", 1),
                t.ɵɵtemplate(2, et, 2, 3, "app-svg-icon-history", 2),
                t.ɵɵtemplate(3, nt, 1, 0, "div", 3),
                t.ɵɵelementStart(4, "div", 4)(5, "p", 5),
                t.ɵɵtext(6),
                t.ɵɵpipe(7, "txType"),
                t.ɵɵelementEnd(),
                t.ɵɵelementStart(8, "div", 6)(9, "a", 7),
                t.ɵɵpipe(10, "async"),
                t.ɵɵpipe(11, "chainExplorerTxLink"),
                t.ɵɵtext(12),
                t.ɵɵpipe(13, "prettyHash"),
                t.ɵɵelementEnd(),
                t.ɵɵtemplate(14, ot, 3, 5, "div", 8),
                t.ɵɵelementStart(15, "span", 9),
                t.ɵɵtext(16),
                t.ɵɵpipe(17, "date"),
                t.ɵɵelementEnd()()()(),
                t.ɵɵelement(18, "app-transaction-details-cell", 10),
                t.ɵɵtemplate(19, it, 17, 12, "div", 11),
                t.ɵɵtemplate(20, rt, 15, 4, "div", 11),
                t.ɵɵelementStart(21, "div", 12)(22, "p", 13),
                t.ɵɵtext(23, "Gas price: "),
                t.ɵɵelementEnd(),
                t.ɵɵtemplate(24, st, 2, 1, "p", 14),
                t.ɵɵtemplate(25, ct, 2, 2, "p", 15),
                t.ɵɵelementEnd()()),
                2 & e &&
                  (t.ɵɵadvance(2),
                  t.ɵɵproperty("ngIf", "pending" !== a.transaction.status),
                  t.ɵɵadvance(1),
                  t.ɵɵproperty("ngIf", "pending" === a.transaction.status),
                  t.ɵɵadvance(3),
                  t.ɵɵtextInterpolate(
                    t.ɵɵpipeBind1(7, 12, a.transaction.txType)
                  ),
                  t.ɵɵadvance(3),
                  t.ɵɵpropertyInterpolate(
                    "href",
                    t.ɵɵpipeBind1(
                      10,
                      14,
                      t.ɵɵpipeBind1(11, 16, a.transaction.hash)
                    ),
                    t.ɵɵsanitizeUrl
                  ),
                  t.ɵɵadvance(3),
                  t.ɵɵtextInterpolate(
                    t.ɵɵpipeBind1(13, 18, a.transaction.hash)
                  ),
                  t.ɵɵadvance(2),
                  t.ɵɵproperty("ngIf", "confirmed" !== a.transaction.status),
                  t.ɵɵadvance(2),
                  t.ɵɵtextInterpolate(
                    t.ɵɵpipeBind2(
                      17,
                      20,
                      1e3 * a.transaction.signedAtTimestamp,
                      "shortTime"
                    )
                  ),
                  t.ɵɵadvance(2),
                  t.ɵɵproperty("tx", a.transaction),
                  t.ɵɵadvance(1),
                  t.ɵɵproperty(
                    "ngIf",
                    a.isSwap &&
                      a.showRate &&
                      (null == a.transaction.exchangeRate
                        ? null
                        : a.transaction.exchangeRate.rate) &&
                      (null == a.transaction.exchangeRate
                        ? null
                        : a.transaction.exchangeRate.reverseRate)
                  ),
                  t.ɵɵadvance(1),
                  t.ɵɵproperty(
                    "ngIf",
                    a.isSwap &&
                      a.showRate &&
                      (!(
                        null != a.transaction.exchangeRate &&
                        a.transaction.exchangeRate.rate
                      ) ||
                        !(
                          null != a.transaction.exchangeRate &&
                          a.transaction.exchangeRate.reverseRate
                        ))
                  ),
                  t.ɵɵadvance(4),
                  t.ɵɵproperty("ngIf", a.transaction.gasPrice),
                  t.ɵɵadvance(1),
                  t.ɵɵproperty("ngIf", a.transaction.gas));
            },
            dependencies: [
              _.mk,
              _.O5,
              A.KI,
              Q,
              X,
              _.Ov,
              _.JJ,
              _.uU,
              Y.V,
              J.b,
              q,
              tt,
            ],
            styles: [
              '[_nghost-%COMP%]{display:contents;font-size:13px;line-height:16px}.table-row[_ngcontent-%COMP%]{display:contents}.tx-history-swaps-status[_ngcontent-%COMP%]{display:flex;align-items:center;padding:4px 6px;border-radius:20px;text-transform:capitalize}.tx-history-swaps-status.yellow[_ngcontent-%COMP%]{color:var(--1inch__text-and-icons__warning);background:var(--1inch__background__warning)}.tx-history-swaps-status.red[_ngcontent-%COMP%]{color:var(--text-red);background:var(--bg-red)}.tx-type-title[_ngcontent-%COMP%]{margin-bottom:2px}.transaction-link-address[_ngcontent-%COMP%]{color:var(--text-blue);margin-right:8px}.swaps-price[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);grid-column-gap:8px}.details-price[_ngcontent-%COMP%]{margin-bottom:2px}.pending-icon[_ngcontent-%COMP%]{width:28px;height:28px;display:flex;align-items:center;justify-content:center;border-radius:6px}.pending-icon[_ngcontent-%COMP%]:before{content:"";width:16px;height:16px;border-radius:50%;background:conic-gradient(transparent,currentColor);-webkit-mask:radial-gradient(farthest-side,transparent calc(100% - 2px),currentColor calc(100% - 2px));mask:radial-gradient(farthest-side,transparent calc(100% - 2px),currentColor calc(100% - 2px));animation:spinner 1s linear infinite}@keyframes spinner{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.tx-header[_ngcontent-%COMP%]{display:grid;grid-template-columns:28px 1fr;height:40px;align-items:center}@media (max-width: 1200px){.tx-header[_ngcontent-%COMP%]{height:auto;margin-bottom:16px}}.tx-header-title[_ngcontent-%COMP%]{margin-left:8px}.details-text-price[_ngcontent-%COMP%]{display:none}.details[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;height:100%}@media (max-width: 800px){.details[_ngcontent-%COMP%]{margin-top:12px;display:grid;grid-template-columns:1fr 2fr;grid-template-rows:1fr 1fr;align-items:center}}.details-title[_ngcontent-%COMP%]{display:none;text-align:left}@media (max-width: 800px){.details-title[_ngcontent-%COMP%]{display:block;grid-row:1/span 2}}@media (max-width: 1200px){.swaps-price[_ngcontent-%COMP%]{display:block;text-align:right}.swaps-price[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{margin-bottom:12px}.tx-header-title[_ngcontent-%COMP%]{margin-left:8px}.details[_ngcontent-%COMP%]{margin-top:12px;display:flex;flex-direction:row;justify-content:flex-start;align-items:center}.details-title[_ngcontent-%COMP%]{display:block;grid-row:1/span 2}.details-text-price[_ngcontent-%COMP%]{display:block;color:#6c86ad;line-height:16px;margin-right:8px}.details-price[_ngcontent-%COMP%]{margin-right:8px;margin-bottom:0;display:flex;text-align:right!important}}',
            ],
          })),
          n
        );
      })();
      var pt = i(66654);
      const dt = {
        swaps: "swap",
        pools: "pool",
        governance: "governance",
        rewards: "reward",
      };
      let gt = (() => {
        class n {
          transform(e) {
            return dt[e] || "";
          }
        }
        return (
          (n.ɵfac = function (e) {
            return new (e || n)();
          }),
          (n.ɵpipe = t.ɵɵdefinePipe({
            name: "txTypeCorrectForm",
            type: n,
            pure: !0,
          })),
          n
        );
      })();
      var mt = i(83140);
      function xt(n, o) {
        1 & n &&
          (t.ɵɵelementContainerStart(0),
          t.ɵɵtext(1, " Loading... "),
          t.ɵɵelementContainerEnd());
      }
      function ut(n, o) {
        if (
          (1 & n &&
            (t.ɵɵelementStart(0, "div", 8)(1, "p", 9),
            t.ɵɵtext(2),
            t.ɵɵpipe(3, "txTypeCorrectForm"),
            t.ɵɵelementEnd(),
            t.ɵɵelementStart(4, "a", 10),
            t.ɵɵpipe(5, "async"),
            t.ɵɵpipe(6, "chainExplorerAddressLink"),
            t.ɵɵtext(7),
            t.ɵɵelementEnd()()),
          2 & n)
        ) {
          const e = t.ɵɵnextContext().ngIf,
            a = t.ɵɵnextContext(2);
          t.ɵɵadvance(2),
            t.ɵɵtextInterpolate1(
              "Can't find ",
              t.ɵɵpipeBind1(3, 3, a.txType),
              " transactions for address:"
            ),
            t.ɵɵadvance(2),
            t.ɵɵproperty(
              "href",
              t.ɵɵpipeBind1(5, 5, t.ɵɵpipeBind1(6, 7, e)),
              t.ɵɵsanitizeUrl
            ),
            t.ɵɵadvance(3),
            t.ɵɵtextInterpolate1(" ", e, " ");
        }
      }
      function ht(n, o) {
        if (
          (1 & n &&
            (t.ɵɵelementContainerStart(0),
            t.ɵɵtemplate(1, ut, 8, 9, "div", 7),
            t.ɵɵpipe(2, "async"),
            t.ɵɵelementContainerEnd()),
          2 & n)
        ) {
          const e = t.ɵɵnextContext(2);
          t.ɵɵadvance(1), t.ɵɵproperty("ngIf", !t.ɵɵpipeBind1(2, 1, e.hasTxs$));
        }
      }
      function yt(n, o) {
        if (
          (1 & n &&
            (t.ɵɵelementContainerStart(0),
            t.ɵɵelementStart(1, "div", 12),
            t.ɵɵelement(2, "app-transaction-history-row", 13),
            t.ɵɵelementEnd(),
            t.ɵɵelementContainerEnd()),
          2 & n)
        ) {
          const e = o.$implicit;
          t.ɵɵadvance(2), t.ɵɵproperty("transaction", e);
        }
      }
      function _t(n, o) {
        if (
          (1 & n &&
            (t.ɵɵelementContainerStart(0),
            t.ɵɵtemplate(1, yt, 3, 1, "ng-container", 11),
            t.ɵɵelementContainerEnd()),
          2 & n)
        ) {
          const e = t.ɵɵnextContext().tuiLet;
          t.ɵɵadvance(1), t.ɵɵproperty("ngForOf", e);
        }
      }
      function ft(n, o) {
        if (
          (1 & n &&
            (t.ɵɵelementContainerStart(0),
            t.ɵɵtemplate(1, _t, 2, 1, "ng-container", 3),
            t.ɵɵpipe(2, "async"),
            t.ɵɵpipe(3, "async"),
            t.ɵɵelementContainerEnd()),
          2 & n)
        ) {
          const e = t.ɵɵnextContext(2);
          t.ɵɵadvance(1),
            t.ɵɵproperty(
              "ngIf",
              !t.ɵɵpipeBind1(2, 1, e.loading$) && t.ɵɵpipeBind1(3, 3, e.hasTxs$)
            );
        }
      }
      const vt = function () {
        return [5, 10, 25, 100];
      };
      function Ct(n, o) {
        if (1 & n) {
          const e = t.ɵɵgetCurrentView();
          t.ɵɵelementStart(0, "mat-paginator", 16),
            t.ɵɵlistener("page", function (s) {
              t.ɵɵrestoreView(e);
              const l = t.ɵɵnextContext(4);
              return t.ɵɵresetView(l.handlePageSelect(s));
            }),
            t.ɵɵelementEnd();
        }
        if (2 & n) {
          const e = o.tuiLet,
            a = t.ɵɵnextContext(4);
          t.ɵɵproperty("length", a.allTransactions.length)(
            "pageIndex",
            e.pageIndex
          )("pageSize", e.pageSize)(
            "pageSizeOptions",
            t.ɵɵpureFunction0(4, vt)
          );
        }
      }
      function Pt(n, o) {
        if (
          (1 & n &&
            (t.ɵɵelementContainerStart(0),
            t.ɵɵtemplate(1, Ct, 1, 5, "mat-paginator", 15),
            t.ɵɵpipe(2, "async"),
            t.ɵɵelementContainerEnd()),
          2 & n)
        ) {
          const e = t.ɵɵnextContext(3);
          t.ɵɵadvance(1),
            t.ɵɵproperty("tuiLet", t.ɵɵpipeBind1(2, 1, e.pageParams$));
        }
      }
      function Tt(n, o) {
        if (
          (1 & n &&
            (t.ɵɵelementStart(0, "div", 14),
            t.ɵɵtemplate(1, Pt, 3, 3, "ng-container", 3),
            t.ɵɵelementEnd()),
          2 & n)
        ) {
          const e = t.ɵɵnextContext(2);
          t.ɵɵadvance(1), t.ɵɵproperty("ngIf", e.allTransactions.length);
        }
      }
      function wt(n, o) {
        if (
          (1 & n &&
            (t.ɵɵelementStart(0, "div", 1)(1, "div", 2),
            t.ɵɵtemplate(2, xt, 2, 0, "ng-container", 3),
            t.ɵɵpipe(3, "async"),
            t.ɵɵtemplate(4, ht, 3, 3, "ng-container", 3),
            t.ɵɵpipe(5, "async"),
            t.ɵɵelementStart(6, "div", 4),
            t.ɵɵtemplate(7, ft, 4, 5, "ng-container", 5),
            t.ɵɵpipe(8, "async"),
            t.ɵɵelementEnd()(),
            t.ɵɵtemplate(9, Tt, 2, 1, "div", 6),
            t.ɵɵpipe(10, "async"),
            t.ɵɵpipe(11, "async"),
            t.ɵɵelementEnd()),
          2 & n)
        ) {
          const e = t.ɵɵnextContext();
          t.ɵɵclassProp("tx-history-in-modal", e.inModal),
            t.ɵɵadvance(2),
            t.ɵɵproperty("ngIf", t.ɵɵpipeBind1(3, 6, e.loading$)),
            t.ɵɵadvance(2),
            t.ɵɵproperty("ngIf", t.ɵɵpipeBind1(5, 8, e.accountAddress$)),
            t.ɵɵadvance(3),
            t.ɵɵproperty("tuiLet", t.ɵɵpipeBind1(8, 10, e.pageItems$)),
            t.ɵɵadvance(2),
            t.ɵɵproperty(
              "ngIf",
              !t.ɵɵpipeBind1(10, 12, e.loading$) &&
                t.ɵɵpipeBind1(11, 14, e.hasTxs$)
            );
        }
      }
      let Ot = (() => {
        class n {
          constructor(e) {
            (this.walletQuery = e),
              (this.inModal = !1),
              (this.txType = "swap"),
              (this.pageParams$ = new x.X({ pageSize: 10, pageIndex: 0 })),
              (this.transactions$ = new x.X([])),
              (this.pageItems$ = (0, u.a)([
                this.transactions$,
                this.pageParams$,
              ]).pipe(
                (0, h.U)(([a, { pageIndex: s, pageSize: l }]) => {
                  const y = s * l;
                  return a.slice(y, y + l);
                }),
                (0, G.b)((a) => {
                  this.loading$.next(!1), this.hasTxs$.next(a.length > 0);
                })
              )),
              (this.loading$ = new x.X(!0)),
              (this.hasTxs$ = new x.X(!1)),
              (this.accountAddress$ = this.walletQuery.connectedWalletAddress$),
              (this._subscription = new U.w0());
          }
          set allTransactions(e) {
            this.transactions$.next(e);
          }
          get allTransactions() {
            return this.transactions$.value;
          }
          ngOnDestroy() {
            this._subscription.unsubscribe();
          }
          handlePageSelect(e) {
            const { pageIndex: a, pageSize: s } = e;
            void 0 !== a && void 0 !== s
              ? this.pageParams$.next({ pageIndex: a, pageSize: s })
              : mt.error(
                  "onPageSelect() pageIndex or pageSize is undefined",
                  e
                );
          }
        }
        return (
          (n.ɵfac = function (e) {
            return new (e || n)(t.ɵɵdirectiveInject(k.r));
          }),
          (n.ɵcmp = t.ɵɵdefineComponent({
            type: n,
            selectors: [["app-transaction-history-table"]],
            inputs: {
              allTransactions: "allTransactions",
              inModal: "inModal",
              txType: "txType",
            },
            decls: 1,
            vars: 1,
            consts: [
              [
                "class",
                "tx-history-table-wrap",
                "data-id",
                "swap-history-table",
                3,
                "tx-history-in-modal",
                4,
                "ngIf",
              ],
              ["data-id", "swap-history-table", 1, "tx-history-table-wrap"],
              [1, "tx-history-table-scroll"],
              [4, "ngIf"],
              [1, "tx-history-table"],
              [4, "tuiLet"],
              ["class", "pagination-row", 4, "ngIf"],
              ["class", "no-transactions", 4, "ngIf"],
              [1, "no-transactions"],
              [1, "text-gray", "mt-12"],
              ["target", "_blank", 1, "link-blue", "mt-12", 3, "href"],
              [4, "ngFor", "ngForOf"],
              [1, "tx-history-row"],
              [3, "transaction"],
              [1, "pagination-row"],
              [
                "class",
                "tx-history-table-paginator",
                3,
                "length",
                "pageIndex",
                "pageSize",
                "pageSizeOptions",
                "page",
                4,
                "tuiLet",
              ],
              [
                1,
                "tx-history-table-paginator",
                3,
                "length",
                "pageIndex",
                "pageSize",
                "pageSizeOptions",
                "page",
              ],
            ],
            template: function (e, a) {
              1 & e && t.ɵɵtemplate(0, wt, 12, 16, "div", 0),
                2 & e && t.ɵɵproperty("ngIf", a.allTransactions);
            },
            dependencies: [_.sg, _.O5, j.NW, R.Ls, lt, _.Ov, pt.E, gt],
            styles: [
              "[_nghost-%COMP%]{display:contents;font-size:13px!important}.tx-history-table-wrap[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;height:calc(100% - 92px)}@media (max-width: 480px){.tx-history-table-wrap[_ngcontent-%COMP%]{height:calc(100% - 68px)}}@media (max-width: 800px){.table-col-date[_ngcontent-%COMP%]{margin-bottom:8px}}@media (max-width: 800px){.table-col-title[_ngcontent-%COMP%]{display:none}}.tx-history-in-modal[_ngcontent-%COMP%]   .tx-history-table-scroll[_ngcontent-%COMP%]{height:100%;overflow:auto;margin:0 -16px 8px;padding:0 16px}.tx-history-table[_ngcontent-%COMP%]{display:grid;grid-template-columns:5fr 1fr 16px 1fr 4fr;grid-row-gap:16px;grid-column-gap:24px;align-items:center;margin-top:8px}.tx-history-table[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:400}@media (max-width: 940px){.tx-history-table[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{grid-column:1}}@media (max-width: 800px){.tx-history-table[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{grid-column:1/span 2}}@media (max-width: 1200px){.tx-history-table[_ngcontent-%COMP%]{grid-template-columns:1fr}}@media (max-width: 940px){.tx-history-table[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr}}@media (max-width: 640px){.tx-history-table[_ngcontent-%COMP%]{display:block}}.tx-history-swap-table[_ngcontent-%COMP%]{grid-template-columns:2fr 3fr 3fr 1fr}@media (max-width: 800px){.tx-history-swap-table[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr}}.tx-history-row[_ngcontent-%COMP%]{display:contents}@media (max-width: 800px){.tx-history-row[_ngcontent-%COMP%]{display:block;padding:16px;border:1px solid #232E3D;border-radius:16px}}@media (max-width: 940px){.tx-history-row[_ngcontent-%COMP%]{margin-bottom:16px}}.pagination-row[_ngcontent-%COMP%]{grid-column:1/span 3}@media (max-width: 1200px){.tx-history-table[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{grid-column:1/span 2}.table-col-title[_ngcontent-%COMP%]{display:none}.tx-history-swap-table[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr}.tx-history-row[_ngcontent-%COMP%]{display:block;padding:12px;border:1px solid var(--1inch-border-12);border-radius:16px;margin-bottom:8px}.tx-history-row-fix-height[_ngcontent-%COMP%]{min-height:206px}}.tx-history-in-modal[_ngcontent-%COMP%]   .no-transactions[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%}.tx-history-in-modal[_ngcontent-%COMP%]   .no-transactions[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center}.tx-history-in-modal[_ngcontent-%COMP%]   .no-transactions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{word-break:break-all;cursor:pointer}.tx-history-in-modal[_ngcontent-%COMP%]   .no-transactions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:none}.tx-history-table-paginator[_ngcontent-%COMP%]{margin-top:16px}.tx-history-table-paginator[_ngcontent-%COMP%]     .mat-paginator-container{font-size:14px;justify-content:space-between;padding:0}.tx-history-table-paginator[_ngcontent-%COMP%]     .mat-paginator-page-size{align-items:center}.tx-history-table-paginator[_ngcontent-%COMP%]     .mat-paginator-page-size-select{margin:1px 0 0 12px;width:48px}.tx-history-table-paginator[_ngcontent-%COMP%]     .mat-select-trigger{font-size:14px}.tx-history-table-paginator[_ngcontent-%COMP%]     .mat-paginator-range-label{margin:2px 20px 0 0}.tx-history-table-paginator[_ngcontent-%COMP%]     .mat-icon-button{color:var(--1inch__ui-02)}.tx-history-table-paginator[_ngcontent-%COMP%]     .mat-paginator-page-size-label{margin-left:0}@media (max-width: 520px){.tx-history-table-paginator[_ngcontent-%COMP%]     .mat-paginator-container{padding:0}.tx-history-table-paginator[_ngcontent-%COMP%]     .mat-paginator-range-label{margin-right:8px}}@media (max-width: 418px){.tx-history-table-paginator[_ngcontent-%COMP%]     .mat-paginator-range-actions button{width:25px}.tx-history-table-paginator[_ngcontent-%COMP%]     .mat-paginator-container, .tx-history-table-paginator[_ngcontent-%COMP%]     .mat-select-trigger{font-size:12px}.tx-history-table-paginator[_ngcontent-%COMP%]     .mat-paginator-page-size-select{margin:2px 0 0 4px;width:40px}}",
            ],
          })),
          n
        );
      })();
      function Mt(n, o) {
        1 & n &&
          (t.ɵɵelementStart(0, "div", 5),
          t.ɵɵelement(1, "img", 6),
          t.ɵɵelementStart(2, "p", 7),
          t.ɵɵtext(
            3,
            " Please, connect your wallet to see your transactions history "
          ),
          t.ɵɵelementEnd()());
      }
      function bt(n, o) {
        if (1 & n) {
          const e = t.ɵɵgetCurrentView();
          t.ɵɵelementStart(0, "button", 8),
            t.ɵɵlistener("click", function () {
              t.ɵɵrestoreView(e);
              const s = t.ɵɵnextContext(3);
              return t.ɵɵresetView(s.removePendingTransactions());
            }),
            t.ɵɵtext(1, " Remove Pending Txs "),
            t.ɵɵelementEnd();
        }
      }
      const It = function (n) {
        return { pair: n };
      };
      function Et(n, o) {
        if (
          (1 & n &&
            (t.ɵɵelementStart(0, "span"),
            t.ɵɵtext(1),
            t.ɵɵpipe(2, "transloco"),
            t.ɵɵelementEnd()),
          2 & n)
        ) {
          const e = o.ngIf;
          t.ɵɵadvance(1),
            t.ɵɵtextInterpolate1(
              " ",
              t.ɵɵpipeBind2(
                2,
                1,
                "transactionHistory.cant-find-any-swaps",
                t.ɵɵpureFunction1(
                  4,
                  It,
                  e.sourceToken.symbol + "/" + e.destinationToken.symbol
                )
              ),
              " "
            );
        }
      }
      function St(n, o) {
        if (1 & n) {
          const e = t.ɵɵgetCurrentView();
          t.ɵɵelementStart(0, "div", 9),
            t.ɵɵtemplate(1, Et, 3, 6, "span", 0),
            t.ɵɵpipe(2, "async"),
            t.ɵɵelementStart(3, "span", 10),
            t.ɵɵlistener("click", function () {
              t.ɵɵrestoreView(e);
              const s = t.ɵɵnextContext(3);
              return t.ɵɵresetView(s.openTransactionHistory());
            }),
            t.ɵɵtext(4, " View full transaction history "),
            t.ɵɵelementEnd()();
        }
        if (2 & n) {
          const e = t.ɵɵnextContext(3);
          t.ɵɵadvance(1),
            t.ɵɵproperty("ngIf", t.ɵɵpipeBind1(2, 1, e.tokensPair$));
        }
      }
      function kt(n, o) {
        if (
          (1 & n &&
            (t.ɵɵelementContainerStart(0),
            t.ɵɵelement(1, "app-transaction-history-table", 11),
            t.ɵɵelementContainerEnd()),
          2 & n)
        ) {
          const e = t.ɵɵnextContext(2).ngIf;
          t.ɵɵadvance(1), t.ɵɵproperty("allTransactions", e);
        }
      }
      function At(n, o) {
        if (
          (1 & n &&
            (t.ɵɵelementContainerStart(0),
            t.ɵɵtemplate(1, Mt, 4, 0, "div", 2),
            t.ɵɵtemplate(2, bt, 2, 0, "button", 3),
            t.ɵɵpipe(3, "async"),
            t.ɵɵtemplate(4, St, 5, 3, "div", 4),
            t.ɵɵtemplate(5, kt, 2, 1, "ng-container", 0),
            t.ɵɵelementContainerEnd()),
          2 & n)
        ) {
          const e = o.tuiLet,
            a = t.ɵɵnextContext().ngIf,
            s = t.ɵɵnextContext();
          t.ɵɵadvance(1),
            t.ɵɵproperty("ngIf", !e),
            t.ɵɵadvance(1),
            t.ɵɵproperty("ngIf", t.ɵɵpipeBind1(3, 4, s.havePendingTxs$)),
            t.ɵɵadvance(2),
            t.ɵɵproperty("ngIf", e && !a.length),
            t.ɵɵadvance(1),
            t.ɵɵproperty("ngIf", e && a.length);
        }
      }
      function Ht(n, o) {
        if (
          (1 & n &&
            (t.ɵɵelementContainerStart(0),
            t.ɵɵtemplate(1, At, 6, 6, "ng-container", 1),
            t.ɵɵpipe(2, "async"),
            t.ɵɵelementContainerEnd()),
          2 & n)
        ) {
          const e = t.ɵɵnextContext();
          t.ɵɵadvance(1),
            t.ɵɵproperty("tuiLet", t.ɵɵpipeBind1(2, 1, e.isWalletConnected$));
        }
      }
      let Rt = (() => {
        class n {
          constructor(e, a, s, l, y, Bt) {
            (this.walletConnectionQuery = e),
              (this.txHistoryService = a),
              (this.txHistoryQuery = s),
              (this.walletQuery = l),
              (this.activeConnectionQuery = y),
              (this.accountBoxPortalService = Bt),
              (this.tokensPair$ = new x.X(null)),
              (this.isWalletConnected$ = this.walletQuery.isWalletConnected$),
              (this.havePendingTxs$ = this.walletQuery.isWalletConnected$.pipe(
                (0, m.h)((v) => v),
                (0, w.w)(() => this.txHistoryQuery.allPendingTransactions$),
                (0, h.U)((v) => v && v.length > 0)
              )),
              (this.transactions$ = this.tokensPair$.pipe(
                (0, r.BX)(),
                (0, w.w)((v) =>
                  (0, u.a)([
                    this.txHistoryQuery.allTransactions$.pipe((0, M.x)()),
                    (0, P.of)(v),
                  ])
                ),
                (0, h.U)(([v, Ft]) => {
                  const $t = (function S(n) {
                      try {
                        return n && 0 !== n.length
                          ? n
                              .map(F)
                              .filter(r.RF)
                              .filter((e) => e.txType)
                              .sort((e, a) =>
                                e.signedAtTimestamp < a.signedAtTimestamp
                                  ? 1
                                  : -1
                              )
                          : [];
                      } catch (o) {
                        O.error(`normalizeTransactions with e: ${o}`);
                      }
                    })(v),
                    H = (function E(n, o) {
                      const e = (s, l) =>
                        o.sourceToken.address.toLowerCase() ===
                          s.toLowerCase() &&
                        o.destinationToken.address.toLowerCase() ===
                          l.toLowerCase();
                      try {
                        return n && 0 !== n.length
                          ? n.filter((s) => {
                              if (
                                s.txType !== c.E.swap ||
                                !s.srcToken ||
                                !s.dstToken
                              )
                                return !1;
                              const l = s.srcToken.address,
                                y = s.dstToken.address;
                              return e(l, y) || ((s, l) => e(l, s))(l, y);
                            })
                          : [];
                      } catch (s) {
                        I.error(
                          `filterTransactionsByDstAndSrcTokens with e: ${s}`
                        );
                      }
                    })($t || [], Ft);
                  return H && 0 !== H.length
                    ? H.filter((Lt) => Lt.txType === c.E.swap)
                    : [];
                })
              ));
          }
          set tokensPair(e) {
            this.tokensPair$.next(e);
          }
          removePendingTransactions() {
            this.txHistoryService.removePendingTransactions();
          }
          openTransactionHistory() {
            this.accountBoxPortalService.openAccountBox("history");
          }
        }
        return (
          (n.ɵfac = function (e) {
            return new (e || n)(
              t.ɵɵdirectiveInject(k.r),
              t.ɵɵdirectiveInject($.d),
              t.ɵɵdirectiveInject(L.x),
              t.ɵɵdirectiveInject(k.r),
              t.ɵɵdirectiveInject(D.r),
              t.ɵɵdirectiveInject(z.h)
            );
          }),
          (n.ɵcmp = t.ɵɵdefineComponent({
            type: n,
            selectors: [["app-transaction-history"]],
            inputs: { tokensPair: "tokensPair" },
            decls: 2,
            vars: 3,
            consts: [
              [4, "ngIf"],
              [4, "tuiLet"],
              ["class", "connect-wallet", 4, "ngIf"],
              ["mat-button", "", 3, "click", 4, "ngIf"],
              ["class", "text-gray no-transactions", 4, "ngIf"],
              [1, "connect-wallet"],
              [
                "src",
                "/src/assets/images/connect-your-wallet.svg",
                "alt",
                "",
                1,
                "mb-16",
              ],
              [
                "transloco",
                "transactionHistory.please-connect-your-wallet",
                1,
                "text-gray",
                "text-center",
              ],
              ["mat-button", "", 3, "click"],
              [1, "text-gray", "no-transactions"],
              [
                "transloco",
                "transactionHistory.view-all",
                1,
                "mt-16",
                "link-blue",
                "view-all-transactions",
                3,
                "click",
              ],
              [3, "allTransactions"],
            ],
            template: function (e, a) {
              1 & e &&
                (t.ɵɵtemplate(0, Ht, 3, 3, "ng-container", 0),
                t.ɵɵpipe(1, "async")),
                2 & e &&
                  t.ɵɵproperty("ngIf", t.ɵɵpipeBind1(1, 1, a.transactions$));
            },
            dependencies: [_.O5, A.KI, V.lW, R.Ls, Ot, _.Ov, A.Ot],
            styles: [
              "@media (min-width: 480px){.wallet-connect-button[_ngcontent-%COMP%]{margin:40px 0}}@media (min-width: 720px){.history-status[_ngcontent-%COMP%]{width:24px}.history-date-time[_ngcontent-%COMP%], .history-hash[_ngcontent-%COMP%], .history-type[_ngcontent-%COMP%]{font-size:16px;line-height:16px}}.table-line[_ngcontent-%COMP%]{display:grid;grid-template-columns:135px 2fr 2fr 1fr;grid-column-gap:8px;border-radius:16px;padding:11px 8px;margin:0 0 8px;align-items:center;line-height:16px}.table-header-line[_ngcontent-%COMP%]{display:none}.history-status[_ngcontent-%COMP%]{display:block;width:18px}.history-date-time[_ngcontent-%COMP%]{font-size:10px;line-height:12px}.history-date-time[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.history-gas[_ngcontent-%COMP%]{margin:0;text-align:right}.history-hash[_ngcontent-%COMP%], .history-type[_ngcontent-%COMP%]{font-size:10px}.connect-wallet[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.connect-wallet[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:250px}.no-transactions[_ngcontent-%COMP%]{overflow:hidden;display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%;min-height:200px}.no-transactions[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center}.no-transactions[_ngcontent-%COMP%]   .view-all-transactions[_ngcontent-%COMP%]{cursor:pointer}@media (max-width: 374px){.history-hash[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}}@media (min-width: 480px){.history-gas[_ngcontent-%COMP%]{text-align:center}.wallet-connect-button[_ngcontent-%COMP%]{margin:40px 0}}@media (min-width: 720px){.table-header-line[_ngcontent-%COMP%]{display:grid;font-weight:700}.table-line[_ngcontent-%COMP%]{padding:9px 34px;margin:0 0 16px;grid-column-gap:32px}.history-status[_ngcontent-%COMP%]{width:24px}.history-date-time[_ngcontent-%COMP%], .history-hash[_ngcontent-%COMP%], .history-type[_ngcontent-%COMP%]{font-size:16px;line-height:16px}}",
            ],
            changeDetection: 0,
          })),
          n
        );
      })();
    },
  },
]);
