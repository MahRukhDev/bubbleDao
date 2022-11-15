"use strict";
(self.webpackChunk_1inch = self.webpackChunk_1inch || []).push([
  [8312],
  {
    88312: (Oe, F, i) => {
      i.r(F),
        i.d(F, { LimitOrderPageContainerModule: () => la, routes: () => Gt });
      var c = i(38143),
        _ = i(54266),
        C = i(54510),
        g = i(12725),
        L = i(16944),
        k = i(74578),
        A = i(13748),
        D = i(3745),
        T = i(65672),
        q = i(53842),
        N = i(59226),
        ue = i(31152),
        oe = i(14806),
        R = i(74586),
        ee = i(6904),
        Q = i(9516),
        V = i(586),
        te = i(37683),
        ae = i(54377),
        se = i(16562),
        e = i(51109);
      let W = (() => {
        class n {}
        return (
          (n.ɵfac = function (t) {
            return new (t || n)();
          }),
          (n.ɵmod = e.ɵɵdefineNgModule({ type: n })),
          (n.ɵinj = e.ɵɵdefineInjector({})),
          n
        );
      })();
      var j = i(24124),
        Ue = i(95496),
        w = i(3228),
        ce = i(98227);
      let v = (() => {
          class n extends se.B {
            constructor(t, r, a, s, p, l) {
              super(t, r, a, s),
                (this.router = t),
                (this.activeConnectionQuery = r),
                (this.tokensSearchService = a),
                (this.tradeNavigationStateService = s),
                (this.routerHelperService = p),
                (this.limitOrderStore = l),
                (this.tradeFormKind = se.p.LIMIT_ORDER),
                (this.tradeNavigationKind = ae.p.LIMIT_ORDERS);
            }
            setNavigationState(t) {
              this.limitOrderStore.update(t);
            }
            getDefaultTradeUrl() {
              return this.router.createUrlTree([
                this.routerHelperService.buildDefaultClassicLimitUrl(),
              ]);
            }
            getImportUrl(t) {
              return this.router.createUrlTree([
                this.activeConnectionQuery.currentChainId,
                te.F,
                "limit-order",
                ...t.url.map((r) => r.path),
                "import-token",
              ]);
            }
            getTradeUrlForPair(t) {
              return this.router.createUrlTree([
                this.activeConnectionQuery.currentChainId,
                te.F,
                "limit-order",
                t.sourceToken,
                t.destinationToken,
              ]);
            }
          }
          return (
            (n.ɵfac = function (t) {
              return new (t || n)(
                e.ɵɵinject(C.F0),
                e.ɵɵinject(j.r),
                e.ɵɵinject(Ue.M),
                e.ɵɵinject(ae.W),
                e.ɵɵinject(w.b),
                e.ɵɵinject(ce.Vp)
              );
            }),
            (n.ɵprov = e.ɵɵdefineInjectable({
              token: n,
              factory: n.ɵfac,
              providedIn: W,
            })),
            n
          );
        })(),
        S = (() => {
          class n {
            constructor(t, r) {
              (this.router = t), (this.routerHelperService = r);
            }
            canActivate() {
              return this.router.createUrlTree([
                this.routerHelperService.buildDefaultClassicLimitUrl(),
              ]);
            }
          }
          return (
            (n.ɵfac = function (t) {
              return new (t || n)(e.ɵɵinject(C.F0), e.ɵɵinject(w.b));
            }),
            (n.ɵprov = e.ɵɵdefineInjectable({
              token: n,
              factory: n.ɵfac,
              providedIn: W,
            })),
            n
          );
        })();
      var z = i(2819),
        le = i(68435);
      let H = (() => {
          class n {
            constructor(t, r) {
              (this.globalSettingsService = t),
                (this.globalSettingsQuery = r),
                (this.swapSettings = null);
            }
            setLimitOrderSettings() {
              (this.swapSettings =
                this.globalSettingsQuery.getSwapPageLayoutTypeForCurrentChain()),
                this.globalSettingsService.setExchangeLayoutParams({
                  showCharts: !0,
                });
            }
            setSwapSettings() {
              null !== this.swapSettings &&
                (this.globalSettingsService.setExchangeLayoutParams(
                  this.swapSettings
                ),
                (this.swapSettings = null));
            }
          }
          return (
            (n.ɵfac = function (t) {
              return new (t || n)(e.ɵɵinject(z.o), e.ɵɵinject(le.J));
            }),
            (n.ɵprov = e.ɵɵdefineInjectable({
              token: n,
              factory: n.ɵfac,
              providedIn: W,
            })),
            n
          );
        })(),
        xe = (() => {
          class n {
            constructor(t, r) {
              (this.router = t), (this.limitOrderSettingsService = r);
            }
            canDeactivate(t) {
              return this.limitOrderSettingsService.setSwapSettings(), !0;
            }
          }
          return (
            (n.ɵfac = function (t) {
              return new (t || n)(e.ɵɵinject(C.F0), e.ɵɵinject(H));
            }),
            (n.ɵprov = e.ɵɵdefineInjectable({
              token: n,
              factory: n.ɵfac,
              providedIn: W,
            })),
            n
          );
        })();
      var he = i(5327),
        ye = i(45461),
        at = i(31667),
        Xt = i(47384),
        Jt = i(61729),
        u = i(64736),
        ne = i(35878),
        Fe = i(30137),
        b = i(24654),
        Zt = i(46801),
        ge = i(83667),
        Yt = i(36477),
        st = i(20803);
      function qt(n, o) {
        const t = o.decimals,
          r = (0, Fe.Pz)(new Zt.g().transform(n), t);
        return (0, Xt.formatUnits)(r, t);
      }
      let Ne = (() => {
        class n {
          constructor(t, r, a, s, p, l) {
            (this.limitOrderStore = t),
              (this.limitOrderQuery = r),
              (this.tokenBalanceQuery = a),
              (this.tokenPricesQuery = s),
              (this.router = p),
              (this.routerHelperService = l);
          }
          updateStoreFromLimitOrderForm(t) {
            const {
              sourceTokenAmount: r,
              destinationTokenAmount: a,
              duration: s,
            } = t;
            this.limitOrderStore.update({
              sourceTokenAmount:
                "string" == typeof r ? r : (0, at.dz)(null != r ? r : 0),
              destinationTokenAmount: (0, at.dz)(null != a ? a : 0),
              duration: s,
            });
          }
          updateSourceTokenAmount(t) {
            this.limitOrderStore.update({ sourceTokenAmount: t });
          }
          inverseRateDirection() {
            const { rateDirection: t } = this.limitOrderStore.getValue();
            this.limitOrderStore.update({
              rateDirection: t === b.N.direct ? b.N.reversed : b.N.direct,
            });
          }
          changeIsRatesExpand(t) {
            this.limitOrderStore.update({ isRatesExpand: t });
          }
          getSourceTokenBalanceOnce$() {
            const t = this.limitOrderQuery.getValue().sourceToken;
            return (
              this.tokenBalanceQuery.getBalanceOnce$(t),
              this.tokenBalanceQuery
                .getBalanceOnce$(t)
                .pipe((0, u.U)((a) => (0, Fe.kg)(a.toString(), t.decimals)))
            );
          }
          toggleLockPrice() {
            const { isPriceLocked: t } = this.limitOrderQuery.getValue();
            this.limitOrderStore.update({ isPriceLocked: !t });
          }
          getCancelledOrdersSignatures() {
            return this.limitOrderQuery.getValue().cancelledOrderSignatureList;
          }
          navigate() {
            const { sourceToken: t, destinationToken: r } =
                this.limitOrderQuery.getValue(),
              a = this.routerHelperService.buildLimitOrderTokensUrl(
                t.symbol,
                r.symbol
              );
            this.router.navigateByUrl(a);
          }
          getTokensChanges() {
            return this.limitOrderQuery
              .select(["sourceToken", "destinationToken"])
              .pipe(
                (0, ne.x)((t, r) => {
                  const a = this.compareTokens(t.sourceToken, r.sourceToken),
                    s = this.compareTokens(
                      t.destinationToken,
                      r.destinationToken
                    );
                  return a && s;
                })
              )
              .pipe(
                (0, Jt.G)(),
                (0, u.U)(([t, r]) => {
                  const a = this.compareTokens(
                      t.sourceToken,
                      r.destinationToken
                    ),
                    s = this.compareTokens(t.destinationToken, r.sourceToken);
                  return { wereTokenReversed: a && s };
                })
              );
          }
          clearDestinationAmount() {
            this.limitOrderStore.update({ destinationTokenAmount: "" });
          }
          compareTokens(t, r) {
            return (
              (null == t ? void 0 : t.address) ===
              (null == r ? void 0 : r.address)
            );
          }
        }
        return (
          (n.ɵfac = function (t) {
            return new (t || n)(
              e.ɵɵinject(ce.Vp),
              e.ɵɵinject(ge.g),
              e.ɵɵinject(Yt.n4),
              e.ɵɵinject(st.u),
              e.ɵɵinject(C.F0),
              e.ɵɵinject(w.b)
            );
          }),
          (n.ɵprov = e.ɵɵdefineInjectable({ token: n, factory: n.ɵfac })),
          n
        );
      })();
      var Ee = i(56472);
      let en = (() => {
          class n {
            constructor(t, r, a, s, p) {
              (this.router = t),
                (this.activeConnectionQuery = r),
                (this.tokensQuery = a),
                (this.routerHelperService = s),
                (this.limitOrderStore = p);
            }
            canActivate(t, r) {
              var a;
              const { sourceToken: s, destinationToken: p } =
                (null === (a = t.parent) || void 0 === a ? void 0 : a.params) ||
                {};
              if (!s && !p) return this.getDefaultFallbackUrlTree();
              const { currentChainId: l } = this.activeConnectionQuery;
              let m = this.tokensQuery.findTokenBySymbolOrAddress(s, !1),
                d = this.tokensQuery.findTokenBySymbolOrAddress(p, !1);
              if (!m || !d) return this.getDefaultFallbackUrlTree();
              (0, ye.M)(d.address) && (d = he.EA[l]),
                (0, ye.M)(m.address) && (m = he.EA[l]);
              const { sourceTokenAmount: x, destinationTokenAmount: h } =
                this.limitOrderStore.getValue();
              this.limitOrderStore.update({
                sourceToken: d,
                sourceTokenAmount: qt(+h || 1, d),
                destinationTokenAmount: x,
                destinationToken: m,
              });
              const U = this.routerHelperService.buildLimitOrderTokensUrl(
                d.symbol,
                m.symbol
              );
              return this.router.parseUrl(U);
            }
            getDefaultFallbackUrlTree() {
              const t = this.routerHelperService.buildDefaultClassicLimitUrl();
              return this.router.parseUrl(t);
            }
          }
          return (
            (n.ɵfac = function (t) {
              return new (t || n)(
                e.ɵɵinject(C.F0),
                e.ɵɵinject(j.r),
                e.ɵɵinject(Ee.d),
                e.ɵɵinject(w.b),
                e.ɵɵinject(ce.Vp)
              );
            }),
            (n.ɵprov = e.ɵɵdefineInjectable({
              token: n,
              factory: n.ɵfac,
              providedIn: "root",
            })),
            n
          );
        })(),
        tn = (() => {
          class n {
            constructor(t, r) {
              (this.router = t), (this.routerHelperService = r);
            }
            canActivate(t, r) {
              return (
                !!this.router.getCurrentNavigation().extras.state ||
                this.getDefaultTradeUrl()
              );
            }
            getDefaultTradeUrl() {
              return this.router.createUrlTree([
                this.routerHelperService.buildDefaultClassicLimitUrl(),
              ]);
            }
          }
          return (
            (n.ɵfac = function (t) {
              return new (t || n)(e.ɵɵinject(C.F0), e.ɵɵinject(w.b));
            }),
            (n.ɵprov = e.ɵɵdefineInjectable({
              token: n,
              factory: n.ɵfac,
              providedIn: W,
            })),
            n
          );
        })();
      var nn = i(72071),
        rn = i(12410),
        M = i(31777),
        ve = i(8345),
        G = i(33747),
        X = i(76027),
        $ = i(53886),
        de = i(3012),
        on = i(79296),
        ct = i(1753),
        an = i(25235),
        f = i(76327),
        pe = i(69682),
        me = i(83358),
        E = i(77724),
        $e = i(17114),
        K = i(55231),
        fe = i(12733),
        _e = i(68751),
        lt = i(30459),
        Qe = i(25221),
        sn = i(11537),
        B = i(90813),
        Te = i(95021),
        dt = i(71666),
        cn = i(67605),
        pt = i(94748),
        mt = i(7722),
        ke = i(64057);
      let ut = (() => {
        class n {
          constructor(t, r) {
            (this.formGroup = t),
              (this.onDestroy$ = r),
              (this.sourceControlName = "sourceTokenAmount"),
              (this.destinationControlName = "destinationTokenAmount"),
              (this.rateControlName = "rate"),
              (this.precision = 5),
              (this.isRateLocked = !1),
              (this.rateUpdated$ = new cn.x()),
              (this.direction$ = new X.X(b.N.direct));
          }
          set rateDirection(t) {
            this.direction$.next(t);
          }
          get rateControl() {
            return this.takeControl(this.rateControlName);
          }
          get sourceControl() {
            return this.takeControl(this.sourceControlName);
          }
          get destinationControl() {
            return this.takeControl(this.destinationControlName);
          }
          ngOnInit() {
            const t = this.processFormChanges().pipe(
              (0, E.b)(() => this.rateUpdated$.next()),
              (0, K.R)(this.onDestroy$)
            );
            (0, B.O)(t, "processRate$");
            const r = this.changeDirection().pipe((0, K.R)(this.onDestroy$));
            (0, B.O)(r, "changeDirection$");
          }
          getRateUpdated() {
            return this.rateUpdated$.asObservable();
          }
          recalculateRate() {
            var t;
            const r = this.calculateRate();
            null === (t = this.takeControl(this.rateControlName)) ||
              void 0 === t ||
              t.setValue(r, { emitEvent: !1 });
          }
          takeControl(t) {
            return this.formGroup.form.get(t);
          }
          changeDirection() {
            return this.direction$.pipe(
              (0, Qe.T)(1),
              (0, ne.x)(),
              (0, u.U)(() => this.calculateRate()),
              (0, E.b)((t) => {
                this.rateControl.setValue(t, { emitEvent: !1 });
              })
            );
          }
          processFormChanges() {
            return (0, ct.T)(
              this.handleDestinationTokenAmountChanging(),
              this.handleSourceTokenAmountChanging(),
              this.handleRateChanging()
            ).pipe(
              (0, E.b)((t) => {
                const r = this.formGroup.form;
                r.setValue(Object.assign(Object.assign({}, r.value), t), {
                  emitEvent: !1,
                });
              }),
              (0, mt.h)(void 0)
            );
          }
          getControlValueChangesStream(t) {
            const r = this.takeControl(t);
            return r
              ? r.valueChanges.pipe((0, _e.h)(Boolean))
              : ((0, ke.H)(`There is no control with name ${t}`), pt.C);
          }
          handleRateChanging() {
            return this.getControlValueChangesStream(this.rateControlName).pipe(
              (0, u.U)((t) => {
                const r = this.direction$.getValue(),
                  a = this.sourceControl.value;
                return {
                  [this.rateControlName]: t,
                  [this.destinationControlName]:
                    r === b.N.direct ? a * t : a / t,
                };
              })
            );
          }
          handleSourceTokenAmountChanging() {
            return this.getControlValueChangesStream(
              this.sourceControlName
            ).pipe(
              (0, u.U)((t) => {
                const r = this.direction$.getValue(),
                  a = this.rateControl.value;
                return {
                  [this.sourceControlName]: t,
                  [this.destinationControlName]:
                    r === b.N.direct ? t * a : t / a,
                };
              })
            );
          }
          handleDestinationTokenAmountChanging() {
            return this.getControlValueChangesStream(
              this.destinationControlName
            ).pipe(
              (0, u.U)((t, r) => {
                if (this.isRateLocked && r) {
                  const a = this.direction$.getValue(),
                    s = this.rateControl.value;
                  return {
                    sourceTokenAmount: a === b.N.direct ? t / s : t * s,
                    destinationTokenAmount: t,
                  };
                }
                return {
                  destinationTokenAmount: t,
                  rate: this.calculateRate(),
                };
              })
            );
          }
          calculateRate() {
            const t = this.direction$.getValue(),
              r = this.sourceControl.value,
              a = this.destinationControl.value,
              { precision: s } = this;
            return (0, dt.c)(r, a, t, s);
          }
        }
        return (
          (n.ɵfac = function (t) {
            return new (t || n)(
              e.ɵɵdirectiveInject(M.FormGroupDirective),
              e.ɵɵdirectiveInject(G.a3)
            );
          }),
          (n.ɵdir = e.ɵɵdefineDirective({
            type: n,
            selectors: [["", "appRateFormProcessor", ""]],
            inputs: {
              sourceControlName: "sourceControlName",
              destinationControlName: "destinationControlName",
              rateControlName: "rateControlName",
              precision: "precision",
              rateDirection: "rateDirection",
              isRateLocked: "isRateLocked",
            },
            features: [e.ɵɵProvidersFeature([G.a3])],
          })),
          n
        );
      })();
      var gt = i(75392),
        ln = i(87478),
        dn = i(25214),
        pn = i(48966);
      class Be {
        getMarketRateOnce(o) {
          return this.getMarketRate(o).pipe((0, me.q)(1));
        }
      }
      var He = i(44432),
        De = i(80135),
        Re = i(95475);
      const mn = function (n, o) {
        return { from: n, to: o };
      };
      function un(n, o) {
        if (
          (1 & n &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵtext(1),
            e.ɵɵpipe(2, "transloco"),
            e.ɵɵpipe(3, "displaySymbol"),
            e.ɵɵpipe(4, "displaySymbol"),
            e.ɵɵelementContainerEnd()),
          2 & n)
        ) {
          const t = o.ngIf;
          e.ɵɵadvance(1),
            e.ɵɵtextInterpolate1(
              " ",
              e.ɵɵpipeBind2(
                2,
                1,
                "rate-input.assets",
                e.ɵɵpureFunction2(
                  8,
                  mn,
                  e.ɵɵpipeBind1(3, 4, null == t ? null : t.from),
                  e.ɵɵpipeBind1(4, 6, null == t ? null : t.to)
                )
              ),
              " "
            );
        }
      }
      function gn(n, o) {
        if (1 & n) {
          const t = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "span", 10),
            e.ɵɵlistener("click", function () {
              e.ɵɵrestoreView(t);
              const a = e.ɵɵnextContext(2);
              return e.ɵɵresetView(a.onDirectionChanged());
            }),
            e.ɵɵtemplate(1, un, 5, 11, "ng-container", 8),
            e.ɵɵpipe(2, "async"),
            e.ɵɵelementEnd();
        }
        if (2 & n) {
          const t = e.ɵɵnextContext(2);
          e.ɵɵadvance(1), e.ɵɵproperty("ngIf", e.ɵɵpipeBind1(2, 1, t.assets$));
        }
      }
      const hn = function (n) {
        return { from: n };
      };
      function vn(n, o) {
        if (
          (1 & n &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵtext(1),
            e.ɵɵpipe(2, "transloco"),
            e.ɵɵpipe(3, "displaySymbol"),
            e.ɵɵelementContainerEnd()),
          2 & n)
        ) {
          const t = e.ɵɵnextContext(2).ngIf,
            r = e.ɵɵnextContext(2).tuiLet;
          e.ɵɵadvance(1),
            e.ɵɵtextInterpolate1(
              " ",
              e.ɵɵpipeBind2(
                2,
                1,
                r.length < 8 ? "rate-input.sell-at-rate" : "rate-input.sell",
                e.ɵɵpureFunction1(
                  6,
                  hn,
                  e.ɵɵpipeBind1(3, 4, null == t ? null : t.from)
                )
              ),
              " "
            );
        }
      }
      const fn = function (n) {
        return { token: n };
      };
      function _n(n, o) {
        if (
          (1 & n &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵtext(1),
            e.ɵɵpipe(2, "transloco"),
            e.ɵɵpipe(3, "displaySymbol"),
            e.ɵɵelementContainerEnd()),
          2 & n)
        ) {
          const t = e.ɵɵnextContext(2).ngIf,
            r = e.ɵɵnextContext(2).tuiLet;
          e.ɵɵadvance(1),
            e.ɵɵtextInterpolate1(
              " ",
              e.ɵɵpipeBind2(
                2,
                1,
                r.length < 8 ? "rate-input.buy-at-rate" : "rate-input.buy",
                e.ɵɵpureFunction1(
                  6,
                  fn,
                  e.ɵɵpipeBind1(3, 4, null == t ? null : t.from)
                )
              ),
              " "
            );
        }
      }
      function Cn(n, o) {
        if (
          (1 & n &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵtemplate(1, vn, 4, 8, "ng-container", 8),
            e.ɵɵtemplate(2, _n, 4, 8, "ng-container", 8),
            e.ɵɵelementContainerEnd()),
          2 & n)
        ) {
          const t = o.tuiLet,
            r = e.ɵɵnextContext(4);
          e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", t === r.Direction.direct),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", t === r.Direction.reversed);
        }
      }
      function On(n, o) {
        if (
          (1 & n &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵtemplate(1, Cn, 3, 2, "ng-container", 9),
            e.ɵɵpipe(2, "async"),
            e.ɵɵelementContainerEnd()),
          2 & n)
        ) {
          const t = e.ɵɵnextContext(3);
          e.ɵɵadvance(1),
            e.ɵɵproperty("tuiLet", e.ɵɵpipeBind1(2, 1, t.direction$));
        }
      }
      function xn(n, o) {
        if (
          (1 & n &&
            (e.ɵɵelementStart(0, "span"),
            e.ɵɵtemplate(1, On, 3, 3, "ng-container", 8),
            e.ɵɵpipe(2, "async"),
            e.ɵɵelementEnd()),
          2 & n)
        ) {
          const t = e.ɵɵnextContext(2);
          e.ɵɵadvance(1), e.ɵɵproperty("ngIf", e.ɵɵpipeBind1(2, 1, t.assets$));
        }
      }
      function yn(n, o) {
        if ((1 & n && e.ɵɵelement(0, "tooltip", 13), 2 & n)) {
          const t = e.ɵɵnextContext(4);
          e.ɵɵproperty("tooltip", t.infoTooltip)(
            "direction",
            t.infoHintDirection
          );
        }
      }
      function Tn(n, o) {
        if (
          (1 & n &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵelementStart(1, "span", 11),
            e.ɵɵpipe(2, "async"),
            e.ɵɵpipe(3, "async"),
            e.ɵɵelementContainerStart(4),
            e.ɵɵtext(5),
            e.ɵɵelementContainerEnd(),
            e.ɵɵelementEnd(),
            e.ɵɵtemplate(6, yn, 1, 2, "tooltip", 12),
            e.ɵɵelementContainerEnd()),
          2 & n)
        ) {
          const t = e.ɵɵnextContext().tuiLet,
            r = e.ɵɵnextContext().tuiLet,
            a = e.ɵɵnextContext();
          e.ɵɵadvance(1),
            e.ɵɵclassProp(
              "warning",
              e.ɵɵpipeBind1(2, 8, a.isWarningPriceImpact$)
            )("negative", e.ɵɵpipeBind1(3, 10, a.isHighPriceImpact$))(
              "positive",
              t > 0
            ),
            e.ɵɵadvance(4),
            e.ɵɵtextInterpolate1(" (", r, ") "),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", !!a.infoTooltip);
        }
      }
      function kn(n, o) {
        if (
          (1 & n &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵtemplate(1, Tn, 7, 12, "ng-container", 8),
            e.ɵɵpipe(2, "async"),
            e.ɵɵelementContainerEnd()),
          2 & n)
        ) {
          const t = o.tuiLet,
            r = e.ɵɵnextContext(2);
          e.ɵɵadvance(1),
            e.ɵɵproperty(
              "ngIf",
              e.ɵɵpipeBind1(2, 1, r.rateShouldExist$) && 0 !== t
            );
        }
      }
      function wn(n, o) {
        if (
          (1 & n &&
            (e.ɵɵelementStart(0, "div", 6),
            e.ɵɵtemplate(1, gn, 3, 3, "span", 7),
            e.ɵɵtemplate(2, xn, 3, 3, "span", 8),
            e.ɵɵtemplate(3, kn, 3, 3, "ng-container", 9),
            e.ɵɵpipe(4, "async"),
            e.ɵɵelementEnd()),
          2 & n)
        ) {
          const t = e.ɵɵnextContext();
          e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", t.isDirectionChangedButtonAvailable),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", !t.isDirectionChangedButtonAvailable),
            e.ɵɵadvance(1),
            e.ɵɵproperty("tuiLet", e.ɵɵpipeBind1(4, 3, t.profit$));
        }
      }
      function Sn(n, o) {
        if (1 & n) {
          const t = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "div", 14)(1, "button", 15),
            e.ɵɵlistener("click", function () {
              e.ɵɵrestoreView(t);
              const a = e.ɵɵnextContext();
              return e.ɵɵresetView(a.setToMarketClicked());
            }),
            e.ɵɵelementEnd(),
            e.ɵɵprojection(2, 1),
            e.ɵɵelementEnd();
        }
        if (2 & n) {
          const t = e.ɵɵnextContext();
          e.ɵɵadvance(1), e.ɵɵproperty("transloco", t.setToMarketTranscoloKey);
        }
      }
      function Pn(n, o) {
        if (1 & n) {
          const t = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "button", 16),
            e.ɵɵlistener("click", function () {
              e.ɵɵrestoreView(t);
              const a = e.ɵɵnextContext();
              return e.ɵɵresetView(a.decreaseBy());
            }),
            e.ɵɵpipe(1, "async"),
            e.ɵɵtext(2),
            e.ɵɵelementEnd();
        }
        if (2 & n) {
          const t = e.ɵɵnextContext();
          e.ɵɵproperty("disabled", e.ɵɵpipeBind1(1, 2, t.isDisabled$)),
            e.ɵɵadvance(2),
            e.ɵɵtextInterpolate1(" -", t.percentStep, "% ");
        }
      }
      function bn(n, o) {
        if (1 & n) {
          const t = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "button", 16),
            e.ɵɵlistener("click", function () {
              e.ɵɵrestoreView(t);
              const a = e.ɵɵnextContext();
              return e.ɵɵresetView(a.increaseBy());
            }),
            e.ɵɵpipe(1, "async"),
            e.ɵɵtext(2),
            e.ɵɵelementEnd();
        }
        if (2 & n) {
          const t = e.ɵɵnextContext();
          e.ɵɵproperty("disabled", e.ɵɵpipeBind1(1, 2, t.isDisabled$)),
            e.ɵɵadvance(2),
            e.ɵɵtextInterpolate1("+", t.percentStep, "%");
        }
      }
      const Mn = [
          [["", "ratePanelActionButton", ""]],
          [["", "settingsActionButton", ""]],
        ],
        In = ["[ratePanelActionButton]", "[settingsActionButton]"];
      let ht = (() => {
        class n extends dn.M$ {
          constructor(t, r, a, s, p) {
            super(r, a),
              (this.tradeRateSupplier = t),
              (this.formControl = r),
              (this.cdr = a),
              (this.swapPriceImpactService = s),
              (this.onDestroy$ = p),
              (this.percentStep = 1),
              (this.precision = 7),
              (this.rateDirectionChanged = new e.EventEmitter()),
              (this.infoTooltip = null),
              (this.infoHintDirection = "right"),
              (this.isPercentageStepRateVisible = !0),
              (this.setToMarketTranscoloKey = "rate-input.set-to-market"),
              (this.isDirectionChangedButtonAvailable = !0),
              (this.isDisabled$ = new X.X(!1)),
              (this.direction$ = new X.X(b.N.direct)),
              (this.profit$ = this.tradeRateSupplier
                .getProfit()
                .pipe(
                  (0, fe.O)(0),
                  (0, pe.d)({ refCount: !0, bufferSize: 1 })
                )),
              (this.assets$ = this.direction$.pipe(
                (0, f.w)((l) => this.tradeRateSupplier.getTokens(l)),
                (0, _e.h)(({ from: l, to: m }) => !!l && !!m),
                (0, pe.d)({ refCount: !0, bufferSize: 1 })
              )),
              (this.rateShouldExist$ = this.tradeRateSupplier
                .rateShouldExist()
                .pipe((0, pe.d)({ refCount: !0, bufferSize: 1 }))),
              (this.marketRate$ = this.direction$.pipe(
                (0, f.w)((l) => this.tradeRateSupplier.getMarketRate(l)),
                (0, pe.d)({ refCount: !0, bufferSize: 1 })
              )),
              (this.hasMarketRate$ = this.marketRate$.pipe(
                (0, u.U)((l) => l && Number.isFinite(l))
              )),
              (this.isHighPriceImpact$ = this.profit$.pipe(
                (0, u.U)(
                  (l) =>
                    l < 0 &&
                    this.swapPriceImpactService.isHighPriceImpact(Math.abs(l))
                )
              )),
              (this.isWarningPriceImpact$ = this.profit$.pipe(
                (0, u.U)(
                  (l) =>
                    l < 0 &&
                    this.swapPriceImpactService.isWarningPriceImpact(
                      Math.abs(l)
                    )
                )
              )),
              (this.profitTitle$ = (0, $.a)([
                this.profit$,
                this.direction$,
              ]).pipe(
                (0, u.U)(([l, m]) =>
                  0 === l
                    ? ""
                    : l > 999
                    ? (m === b.N.direct ? "+" : "-") + "999%"
                    : l > 0
                    ? `${m === b.N.direct ? "+" : "-"}${l}%`
                    : `${m === b.N.direct ? "-" : "+"}${Math.abs(l)}%`
                )
              )),
              (this.Direction = b.N);
          }
          set direction(t) {
            this.direction$.next(t);
          }
          get focused() {
            return !!this.amountInput && this.amountInput.focused;
          }
          setToMarketClicked() {
            this.marketRate$
              .pipe((0, me.q)(1), (0, K.R)(this.onDestroy$))
              .subscribe({
                next: (t) => {
                  this.setValue(t);
                },
              });
          }
          setValue(t, r = !0) {
            var a;
            const s = (0, ln.t)(t, this.precision);
            null === (a = this.control) ||
              void 0 === a ||
              a.setValue(+s, { emitEvent: r });
          }
          increaseBy() {
            this.changeByPercent(this.percentStep);
          }
          decreaseBy() {
            this.changeByPercent(-this.percentStep);
          }
          changeByPercent(t) {
            var r, a;
            const s =
              null !==
                (a =
                  null === (r = this.control) || void 0 === r
                    ? void 0
                    : r.value) && void 0 !== a
                ? a
                : 0;
            this.setValue(s + s * (t / 100));
          }
          onDirectionChanged() {
            const r =
              this.direction$.getValue() === b.N.direct
                ? b.N.reversed
                : b.N.direct;
            this.direction$.next(r), this.rateDirectionChanged.next(r);
          }
          getFallbackValue() {
            return 0;
          }
        }
        return (
          (n.ɵfac = function (t) {
            return new (t || n)(
              e.ɵɵdirectiveInject(Be),
              e.ɵɵdirectiveInject(M.NgControl),
              e.ɵɵdirectiveInject(e.ChangeDetectorRef),
              e.ɵɵdirectiveInject(He.f),
              e.ɵɵdirectiveInject(G.a3)
            );
          }),
          (n.ɵcmp = e.ɵɵdefineComponent({
            type: n,
            selectors: [["app-trade-rate-input"]],
            viewQuery: function (t, r) {
              if ((1 & t && e.ɵɵviewQuery(gt.l, 5), 2 & t)) {
                let a;
                e.ɵɵqueryRefresh((a = e.ɵɵloadQuery())) &&
                  (r.amountInput = a.first);
              }
            },
            inputs: {
              percentStep: "percentStep",
              precision: "precision",
              direction: "direction",
              infoTooltip: "infoTooltip",
              infoHintDirection: "infoHintDirection",
              isPercentageStepRateVisible: "isPercentageStepRateVisible",
              setToMarketTranscoloKey: "setToMarketTranscoloKey",
              isDirectionChangedButtonAvailable:
                "isDirectionChangedButtonAvailable",
            },
            outputs: { rateDirectionChanged: "rateDirectionChanged" },
            features: [
              e.ɵɵProvidersFeature([
                G.a3,
                { provide: pn.KZ, useExisting: (0, e.forwardRef)(() => n) },
              ]),
              e.ɵɵInheritDefinitionFeature,
            ],
            ngContentSelectors: In,
            decls: 10,
            vars: 10,
            consts: [
              [1, "token-settings"],
              ["class", "convert-info text-gray", 4, "tuiLet"],
              ["data-id", "limit-order.trade-rate.set-to-market", 4, "ngIf"],
              [1, "rate-panel"],
              ["class", "change-rate", 3, "disabled", "click", 4, "ngIf"],
              [3, "formControl", "precision"],
              [1, "convert-info", "text-gray"],
              ["class", "assets", 3, "click", 4, "ngIf"],
              [4, "ngIf"],
              [4, "tuiLet"],
              [1, "assets", 3, "click"],
              ["data-id", "limit-order.trade-rate.price-impact", 1, "profit"],
              ["class", "info-icon", 3, "tooltip", "direction", 4, "ngIf"],
              [1, "info-icon", 3, "tooltip", "direction"],
              ["data-id", "limit-order.trade-rate.set-to-market"],
              [1, "set-to-market", "blank-button", 3, "transloco", "click"],
              [1, "change-rate", 3, "disabled", "click"],
            ],
            template: function (t, r) {
              1 & t &&
                (e.ɵɵprojectionDef(Mn),
                e.ɵɵelementStart(0, "div", 0),
                e.ɵɵtemplate(1, wn, 5, 5, "div", 1),
                e.ɵɵpipe(2, "async"),
                e.ɵɵtemplate(3, Sn, 3, 1, "div", 2),
                e.ɵɵpipe(4, "async"),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(5, "div", 3),
                e.ɵɵtemplate(6, Pn, 3, 4, "button", 4),
                e.ɵɵelement(7, "amount-input", 5),
                e.ɵɵtemplate(8, bn, 3, 4, "button", 4),
                e.ɵɵprojection(9),
                e.ɵɵelementEnd()),
                2 & t &&
                  (e.ɵɵadvance(1),
                  e.ɵɵproperty("tuiLet", e.ɵɵpipeBind1(2, 6, r.profitTitle$)),
                  e.ɵɵadvance(2),
                  e.ɵɵproperty("ngIf", e.ɵɵpipeBind1(4, 8, r.hasMarketRate$)),
                  e.ɵɵadvance(3),
                  e.ɵɵproperty("ngIf", r.isPercentageStepRateVisible),
                  e.ɵɵadvance(1),
                  e.ɵɵproperty("formControl", r.control)(
                    "precision",
                    r.precision
                  ),
                  e.ɵɵadvance(1),
                  e.ɵɵproperty("ngIf", r.isPercentageStepRateVisible));
            },
            dependencies: [
              c.O5,
              g.KI,
              M.NgControlStatus,
              M.FormControlDirective,
              gt.l,
              k.Ls,
              De.K,
              c.Ov,
              g.Ot,
              Re.s,
            ],
            styles: [
              "[_nghost-%COMP%]{background:var(--1inch-bg-01);padding:14px 16px;width:100%;border-radius:16px;display:flex;flex-direction:column}.token-settings[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.token-settings[_ngcontent-%COMP%]   .convert-info[_ngcontent-%COMP%]{font-size:13px;display:flex;align-items:center}.token-settings[_ngcontent-%COMP%]   .profit[_ngcontent-%COMP%]{margin-left:4px}.token-settings[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%]{margin:-2px 0 0 6px}.positive[_ngcontent-%COMP%]{color:var(--1inch__text-and-icons__approve)}.negative[_ngcontent-%COMP%]{color:var(--1inch__text-and-icons__error)}.warning[_ngcontent-%COMP%]{color:var(--1inch__text-and-icons__warning)}.set-to-market[_ngcontent-%COMP%]{font-size:13px;color:var(--1inch-common-text-03)}.set-to-market[_ngcontent-%COMP%]:hover{opacity:.75;transition:.2s}.rate-panel[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-top:10px}.change-rate[_ngcontent-%COMP%]{width:40px;height:28px;text-align:center;border:none;background:var(--1inch-common-bg-07);color:var(--1inch-common-text-03);border-radius:8px;font-size:13px}.change-rate[_ngcontent-%COMP%] + amount-input[_ngcontent-%COMP%]     .t-input{text-align:center!important;font-size:20px!important}.assets[_ngcontent-%COMP%]{cursor:pointer}",
            ],
            changeDetection: 0,
          })),
          n
        );
      })();
      var Ln = i(97637),
        vt = i(90068);
      let ft = (() => {
        class n {
          constructor() {
            this.legacyOrdersCount$ = new X.X(0);
          }
        }
        return (
          (n.ɵfac = function (t) {
            return new (t || n)();
          }),
          (n.ɵprov = e.ɵɵdefineInjectable({
            token: n,
            factory: n.ɵfac,
            providedIn: "root",
          })),
          n
        );
      })();
      var _t = i(28541),
        Ct = i(70167),
        We = i(1596),
        An = i(10921),
        Ot = i(40267);
      const En = [[["", "actionButton", ""]]],
        $n = function () {
          return ["settings", "custom-tokens", "add-token"];
        },
        Bn = ["[actionButton]"];
      let Dn = (() => {
        class n {
          constructor(t) {
            (this.router = t),
              (this.customTokenRouterState = { backTo: this.router.url });
          }
        }
        return (
          (n.ɵfac = function (t) {
            return new (t || n)(e.ɵɵdirectiveInject(C.F0));
          }),
          (n.ɵcmp = e.ɵɵdefineComponent({
            type: n,
            selectors: [["action-buttons"]],
            ngContentSelectors: Bn,
            decls: 7,
            vars: 3,
            consts: [
              [
                "data-id",
                "custom-token-dialog",
                1,
                "settings-icon",
                3,
                "routerLink",
                "state",
              ],
              ["width", "24", "height", "24"],
              [0, "xlink", "href", "assets/images/simple/icons/plus.svg#plus"],
              [
                "routerLink",
                "settings",
                "data-id",
                "advanced-settings-button",
                1,
                "settings-icon",
              ],
              [
                0,
                "xlink",
                "href",
                "assets/images/simple/icons/swap-settings.svg#swap-settings",
              ],
            ],
            template: function (t, r) {
              1 & t &&
                (e.ɵɵprojectionDef(En),
                e.ɵɵprojection(0),
                e.ɵɵelementStart(1, "a", 0),
                e.ɵɵnamespaceSVG(),
                e.ɵɵelementStart(2, "svg", 1),
                e.ɵɵelement(3, "use", 2),
                e.ɵɵelementEnd()(),
                e.ɵɵnamespaceHTML(),
                e.ɵɵelementStart(4, "a", 3),
                e.ɵɵnamespaceSVG(),
                e.ɵɵelementStart(5, "svg", 1),
                e.ɵɵelement(6, "use", 4),
                e.ɵɵelementEnd()()),
                2 & t &&
                  (e.ɵɵadvance(1),
                  e.ɵɵproperty("routerLink", e.ɵɵpureFunction0(2, $n))(
                    "state",
                    r.customTokenRouterState
                  ));
            },
            dependencies: [C.yS],
            styles: [
              "[_nghost-%COMP%]{display:flex;justify-content:space-between;width:78px;position:absolute;right:12px;top:8px;z-index:2}.settings-icon[_ngcontent-%COMP%]{padding:6px;cursor:pointer;width:36px;height:36px;border-radius:12px;transition:background .2s}.settings-icon[_ngcontent-%COMP%]:hover{background:var(--1inch-common-btn-bg-03)}svg[_ngcontent-%COMP%]{color:var(--1inch-text-01)}",
            ],
            changeDetection: 0,
          })),
          n
        );
      })();
      var Rn = i(36995),
        Vn = i(52126),
        jn = i(87390),
        xt = i(44863),
        Ve = i(93130),
        Fn = i(56747),
        ze = i(77065),
        Nn = i(92568),
        Ke = i(98182),
        Qn = i(24960),
        Hn = i(78612);
      function Wn(n, o) {
        1 & n &&
          (e.ɵɵelementStart(0, "simple-button", 5),
          e.ɵɵelement(1, "img", 6),
          e.ɵɵtext(2),
          e.ɵɵpipe(3, "transloco"),
          e.ɵɵelementEnd()),
          2 & n &&
            (e.ɵɵadvance(2),
            e.ɵɵtextInterpolate1(
              " ",
              e.ɵɵpipeBind1(3, 1, "button.connect-wallet2"),
              " "
            ));
      }
      function zn(n, o) {
        1 & n &&
          (e.ɵɵelementStart(0, "simple-button", 7),
          e.ɵɵtext(1),
          e.ɵɵpipe(2, "transloco"),
          e.ɵɵelementEnd()),
          2 & n &&
            (e.ɵɵproperty("disabled", !0),
            e.ɵɵadvance(1),
            e.ɵɵtextInterpolate1(
              " ",
              e.ɵɵpipeBind1(2, 2, "uni.button.enter-amount"),
              " "
            ));
      }
      const Kn = function (n) {
        return { sourceToken: n };
      };
      function Gn(n, o) {
        if (
          (1 & n &&
            (e.ɵɵelement(0, "source-token-approve-button", 9),
            e.ɵɵpipe(1, "transloco"),
            e.ɵɵpipe(2, "displaySymbol")),
          2 & n)
        ) {
          const t = e.ɵɵnextContext().tuiLet;
          e.ɵɵproperty("sourceToken", t)(
            "approveButtonTitle",
            e.ɵɵpipeBind2(
              1,
              2,
              "limitOrderBox.allow-1inch-to-use",
              e.ɵɵpureFunction1(7, Kn, e.ɵɵpipeBind1(2, 5, t))
            )
          );
        }
      }
      function Xn(n, o) {
        if (
          (1 & n &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵtemplate(1, Gn, 3, 9, "source-token-approve-button", 8),
            e.ɵɵelementContainerEnd()),
          2 & n)
        ) {
          const t = e.ɵɵnextContext().tuiLet;
          e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", "notApprovedSourceTokenWithoutPermit" === t);
        }
      }
      function Jn(n, o) {
        if (1 & n) {
          const t = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "simple-button", 10),
            e.ɵɵlistener("click", function () {
              e.ɵɵrestoreView(t);
              const a = e.ɵɵnextContext(2);
              return e.ɵɵresetView(a.confirmOrder());
            }),
            e.ɵɵtext(1),
            e.ɵɵpipe(2, "transloco"),
            e.ɵɵelementEnd();
        }
        if (2 & n) {
          const t = e.ɵɵnextContext().tuiLet;
          e.ɵɵproperty("disabled", "notApprovedSourceTokenWithoutPermit" === t),
            e.ɵɵadvance(1),
            e.ɵɵtextInterpolate1(
              " ",
              e.ɵɵpipeBind1(2, 2, "limitOrderBox.review-limit-order-v1"),
              " "
            );
        }
      }
      function Zn(n, o) {
        if (1 & n) {
          const t = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "simple-button", 11),
            e.ɵɵlistener("click", function () {
              e.ɵɵrestoreView(t);
              const a = e.ɵɵnextContext(2);
              return e.ɵɵresetView(a.confirmOrder());
            }),
            e.ɵɵtext(1),
            e.ɵɵpipe(2, "transloco"),
            e.ɵɵelementEnd();
        }
        2 & n &&
          (e.ɵɵadvance(1),
          e.ɵɵtextInterpolate1(
            " ",
            e.ɵɵpipeBind1(2, 1, "limitOrderBox.review-limit-order-anyway"),
            " "
          ));
      }
      function Yn(n, o) {
        if (
          (1 & n &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵtemplate(1, Wn, 4, 3, "simple-button", 1),
            e.ɵɵtemplate(2, zn, 3, 4, "simple-button", 2),
            e.ɵɵtemplate(3, Xn, 2, 1, "ng-container", 0),
            e.ɵɵpipe(4, "async"),
            e.ɵɵtemplate(5, Jn, 3, 4, "simple-button", 3),
            e.ɵɵtemplate(6, Zn, 3, 3, "simple-button", 4),
            e.ɵɵelementContainerEnd()),
          2 & n)
        ) {
          const t = o.tuiLet,
            r = e.ɵɵnextContext();
          e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", "walletNotConnected" === t),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", "nullableTokenAmount" === t),
            e.ɵɵadvance(1),
            e.ɵɵproperty("tuiLet", e.ɵɵpipeBind1(4, 5, r.sourceToken$)),
            e.ɵɵadvance(2),
            e.ɵɵproperty(
              "ngIf",
              "createEnabled" === t ||
                "notApprovedSourceTokenWithoutPermit" === t
            ),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", "createEnabledWithHighPriceImpact" === t);
        }
      }
      let qn = (() => {
        class n {
          constructor(t, r, a, s, p, l, m, d, x) {
            (this.limitOrderQuery = t),
              (this.walletConnectionQuery = r),
              (this.acceptTermsService = a),
              (this.matDialogService = s),
              (this.swapPriceImpactService = p),
              (this.orderPermitAvailabilityService = l),
              (this.router = m),
              (this.activatedRoute = d),
              (this.featureToggleService = x),
              (this.isStopLossEnabled = !1),
              (this.onConfirm = new e.EventEmitter()),
              (this.afterConfirm = new e.EventEmitter()),
              (this.isWalletConnected$ =
                this.walletConnectionQuery.isWalletConnected$),
              (this.isSourceTokenApproved$ =
                this.limitOrderQuery.isSourceTokenApproved$),
              (this.sourceToken$ = this.limitOrderQuery.sourceToken$),
              (this.sourceTokenAmount$ =
                this.limitOrderQuery.sourceTokenAmount$),
              (this.destinationTokenAmount$ =
                this.limitOrderQuery.destinationTokenAmount$),
              (this.isPermitAvailable$ =
                this.orderPermitAvailabilityService.isPermitAvailableForTheCurrentToken()),
              (this.isNullableTokenAmount$ = (0, $.a)([
                this.sourceTokenAmount$,
                this.destinationTokenAmount$,
              ]).pipe((0, u.U)(([h, y]) => 0 == +h || 0 == +y))),
              (this.isHighPriceImpact$ =
                this.limitOrderQuery.limitOrderSwapInfo$.pipe(
                  (0, f.w)((h) =>
                    this.swapPriceImpactService.isHighPriceImpact$(h)
                  )
                )),
              (this.limitOrderCreateButtonState$ = this.isWalletConnected$.pipe(
                (0, f.w)((h) =>
                  h
                    ? (0, $.a)({
                        isSourceTokenApproved: this.isSourceTokenApproved$,
                        isPermitAvailable: this.isPermitAvailable$.pipe(
                          (0, fe.O)(!0)
                        ),
                        isHighPriceImpact: this.isHighPriceImpact$.pipe(
                          (0, fe.O)(!1)
                        ),
                        isNullableTokenAmount: this.isNullableTokenAmount$,
                        isFormValid: this.refreshStateTrigger$.pipe(
                          (0, fe.O)(!1)
                        ),
                      }).pipe(
                        (0, u.U)((y) =>
                          (function Un(n) {
                            const {
                              isSourceTokenApproved: o,
                              isPermitAvailable: t,
                              isHighPriceImpact: r,
                              isNullableTokenAmount: a,
                              isFormValid: s,
                            } = n;
                            return a || !s
                              ? "nullableTokenAmount"
                              : o || t
                              ? r
                                ? "createEnabledWithHighPriceImpact"
                                : "createEnabled"
                              : "notApprovedSourceTokenWithoutPermit";
                          })(y)
                        )
                      )
                    : (0, de.of)("walletNotConnected")
                )
              ));
          }
          confirmOrder() {
            this.onConfirm.emit();
            const {
                sourceToken: t,
                sourceTokenAmount: r,
                destinationToken: a,
                destinationTokenAmount: s,
                duration: p,
              } = this.limitOrderQuery.getValue(),
              l = {
                sourceToken: t,
                sourceTokenAmount: r,
                destinationToken: a,
                destinationTokenAmount: s,
                duration: p,
                walletAddress: this.walletConnectionQuery.walletAddress,
                isStopLossEnabled: this.isStopLossEnabled,
              },
              m = this.acceptTermsService.checkTermsAccepting().pipe(
                (0, f.w)(() => this.navigateToLimitOrderVerify(l)),
                (0, xt.x)(() => {
                  this.afterConfirm.emit();
                })
              );
            (0, B.O)(m, "confirmOrder$");
          }
          navigateToLimitOrderVerify(t) {
            return (0, jn.D)(
              this.router.navigate(["confirm"], {
                relativeTo: this.activatedRoute,
                state: t,
              })
            );
          }
        }
        return (
          (n.ɵfac = function (t) {
            return new (t || n)(
              e.ɵɵdirectiveInject(ge.g),
              e.ɵɵdirectiveInject(Ve.r),
              e.ɵɵdirectiveInject(Fn.N),
              e.ɵɵdirectiveInject(ze.uw),
              e.ɵɵdirectiveInject(He.f),
              e.ɵɵdirectiveInject(Nn.x),
              e.ɵɵdirectiveInject(C.F0),
              e.ɵɵdirectiveInject(C.gz),
              e.ɵɵdirectiveInject(We.BV)
            );
          }),
          (n.ɵcmp = e.ɵɵdefineComponent({
            type: n,
            selectors: [["limit-order-create-button"]],
            inputs: {
              isStopLossEnabled: "isStopLossEnabled",
              refreshStateTrigger$: "refreshStateTrigger$",
            },
            outputs: { onConfirm: "onConfirm", afterConfirm: "afterConfirm" },
            decls: 2,
            vars: 3,
            consts: [
              [4, "tuiLet"],
              ["walletConnect", "", "color", "light-blue", 4, "ngIf"],
              [3, "disabled", 4, "ngIf"],
              [
                "color",
                "gradient-blue",
                "class",
                "limit-order-create-button",
                3,
                "disabled",
                "click",
                4,
                "ngIf",
              ],
              ["color", "light-red", 3, "click", 4, "ngIf"],
              ["walletConnect", "", "color", "light-blue"],
              [
                "src",
                "/assets/images/icons/connect.svg",
                "alt",
                "connect",
                1,
                "mr-2",
              ],
              [3, "disabled"],
              [
                "color",
                "gradient-blue",
                "approveContractType",
                "limit",
                "widgetId",
                "limit-order-approve",
                "class",
                "limit-order-create-button",
                3,
                "sourceToken",
                "approveButtonTitle",
                4,
                "ngIf",
              ],
              [
                "color",
                "gradient-blue",
                "approveContractType",
                "limit",
                "widgetId",
                "limit-order-approve",
                1,
                "limit-order-create-button",
                3,
                "sourceToken",
                "approveButtonTitle",
              ],
              [
                "color",
                "gradient-blue",
                1,
                "limit-order-create-button",
                3,
                "disabled",
                "click",
              ],
              ["color", "light-red", 3, "click"],
            ],
            template: function (t, r) {
              1 & t &&
                (e.ɵɵtemplate(0, Yn, 7, 7, "ng-container", 0),
                e.ɵɵpipe(1, "async")),
                2 & t &&
                  e.ɵɵproperty(
                    "tuiLet",
                    e.ɵɵpipeBind1(1, 1, r.limitOrderCreateButtonState$)
                  );
            },
            dependencies: [c.O5, Ke.q, Qn.b, k.Ls, Hn.M, c.Ov, g.Ot, Re.s],
            styles: [
              "[_nghost-%COMP%]{display:flex;flex-direction:column}.limit-order-create-button[_ngcontent-%COMP%] + .limit-order-create-button[_ngcontent-%COMP%]{margin-top:16px}",
            ],
            changeDetection: 0,
          })),
          n
        );
      })();
      var Ge = i(98569);
      function er(n, o) {
        1 & n && e.ɵɵelementContainer(0);
      }
      function tr(n, o) {
        if (
          (1 & n &&
            (e.ɵɵelementStart(0, "alert", 3),
            e.ɵɵtemplate(1, er, 1, 0, "ng-container", 4),
            e.ɵɵelementEnd()),
          2 & n)
        ) {
          e.ɵɵnextContext();
          const t = e.ɵɵreference(5);
          e.ɵɵadvance(1), e.ɵɵproperty("ngTemplateOutlet", t);
        }
      }
      function nr(n, o) {
        1 & n && e.ɵɵelementContainer(0);
      }
      function rr(n, o) {
        if (
          (1 & n &&
            (e.ɵɵelementStart(0, "alert", 5),
            e.ɵɵtemplate(1, nr, 1, 0, "ng-container", 4),
            e.ɵɵelementEnd()),
          2 & n)
        ) {
          e.ɵɵnextContext();
          const t = e.ɵɵreference(5);
          e.ɵɵadvance(1), e.ɵɵproperty("ngTemplateOutlet", t);
        }
      }
      const ir = function (n, o) {
        return { percentage: n, token: o };
      };
      function or(n, o) {
        if (
          (1 & n &&
            (e.ɵɵtext(0),
            e.ɵɵpipe(1, "transloco"),
            e.ɵɵpipe(2, "async"),
            e.ɵɵpipe(3, "displaySymbol"),
            e.ɵɵpipe(4, "async"),
            e.ɵɵelementStart(5, "p", 6)(6, "a", 7),
            e.ɵɵtext(7),
            e.ɵɵpipe(8, "transloco"),
            e.ɵɵnamespaceSVG(),
            e.ɵɵelementStart(9, "svg", 8),
            e.ɵɵelement(10, "use", 9),
            e.ɵɵelementEnd()()()),
          2 & n)
        ) {
          const t = e.ɵɵnextContext();
          e.ɵɵtextInterpolate1(
            " ",
            e.ɵɵpipeBind2(
              1,
              2,
              "limit-order.warning-alert-text-v1",
              e.ɵɵpureFunction2(
                13,
                ir,
                e.ɵɵpipeBind1(2, 5, t.swapPriceImpact$),
                e.ɵɵpipeBind1(3, 7, e.ɵɵpipeBind1(4, 9, t.sourceToken$))
              )
            ),
            " "
          ),
            e.ɵɵadvance(7),
            e.ɵɵtextInterpolate1(
              " ",
              e.ɵɵpipeBind1(8, 11, "limit-order.warning-alert-href-v1"),
              " "
            );
        }
      }
      let ar = (() => {
        class n {
          constructor(t, r) {
            (this.limitOrderQuery = t),
              (this.swapPriceImpactService = r),
              (this.swapInfo$ = this.limitOrderQuery.limitOrderSwapInfo$),
              (this.swapPriceImpact$ = this.swapInfo$.pipe(
                (0, f.w)((a) =>
                  this.swapPriceImpactService.getSwapPriceImpact$(a)
                ),
                (0, ne.x)()
              )),
              (this.isWarningPriceImpact$ = this.swapInfo$.pipe(
                (0, f.w)((a) =>
                  this.swapPriceImpactService.isWarningPriceImpact$(a)
                ),
                (0, ne.x)()
              )),
              (this.isHighPriceImpact$ = this.swapInfo$.pipe(
                (0, f.w)((a) =>
                  this.swapPriceImpactService.isHighPriceImpact$(a)
                ),
                (0, ne.x)()
              )),
              (this.sourceToken$ = this.limitOrderQuery.sourceToken$);
          }
        }
        return (
          (n.ɵfac = function (t) {
            return new (t || n)(
              e.ɵɵdirectiveInject(ge.g),
              e.ɵɵdirectiveInject(He.f)
            );
          }),
          (n.ɵcmp = e.ɵɵdefineComponent({
            type: n,
            selectors: [["limit-price-alert"]],
            decls: 6,
            vars: 6,
            consts: [
              ["type", "warning", "hideCloseButton", "true", 4, "ngIf"],
              ["type", "alert", "hideCloseButton", "true", 4, "ngIf"],
              ["alertDescription", ""],
              ["type", "warning", "hideCloseButton", "true"],
              [4, "ngTemplateOutlet"],
              ["type", "alert", "hideCloseButton", "true"],
              [1, "alert__href"],
              [
                "href",
                "https://help.1inch.io/en/articles/4656415-how-to-place-a-limit-order-on-1inch",
                "target",
                "_blank",
              ],
              ["width", "16", "height", "16"],
              [
                0,
                "xlink",
                "href",
                "assets/images/icons/arrow-link.svg#arrow-link",
              ],
            ],
            template: function (t, r) {
              1 & t &&
                (e.ɵɵtemplate(0, tr, 2, 1, "alert", 0),
                e.ɵɵpipe(1, "async"),
                e.ɵɵtemplate(2, rr, 2, 1, "alert", 1),
                e.ɵɵpipe(3, "async"),
                e.ɵɵtemplate(
                  4,
                  or,
                  11,
                  16,
                  "ng-template",
                  null,
                  2,
                  e.ɵɵtemplateRefExtractor
                )),
                2 & t &&
                  (e.ɵɵproperty(
                    "ngIf",
                    e.ɵɵpipeBind1(1, 2, r.isWarningPriceImpact$)
                  ),
                  e.ɵɵadvance(2),
                  e.ɵɵproperty(
                    "ngIf",
                    e.ɵɵpipeBind1(3, 4, r.isHighPriceImpact$)
                  ));
            },
            dependencies: [c.O5, c.tP, Ge.w, c.Ov, g.Ot, Re.s],
            styles: [
              "[_nghost-%COMP%]{display:block}alert[_ngcontent-%COMP%]     .uni-alert-container{margin:0}.alert__href[_ngcontent-%COMP%]{margin-top:16px}.alert__href[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--1inch-text-03);font-weight:500;text-decoration:none}",
            ],
            changeDetection: 0,
          })),
          n
        );
      })();
      var sr = i(2551),
        cr = i(1212),
        Xe = i(44480),
        lr = i(71668),
        dr = i(56477),
        pr = i(83140);
      function mr(n, o) {
        1 & n &&
          (e.ɵɵnamespaceSVG(),
          e.ɵɵelementStart(0, "svg", 10),
          e.ɵɵelement(1, "use", 23),
          e.ɵɵelementEnd());
      }
      function ur(n, o) {
        if (
          (1 & n && (e.ɵɵelement(0, "tooltip", 24), e.ɵɵpipe(1, "transloco")),
          2 & n)
        ) {
          e.ɵɵnextContext();
          const t = e.ɵɵreference(34);
          e.ɵɵproperty("clickableElement", !0)(
            "tooltip",
            e.ɵɵpipeBind1(1, 3, "limitOrderBox.unlock-tooltip")
          )("customElement", t);
        }
      }
      function gr(n, o) {
        1 & n &&
          (e.ɵɵnamespaceSVG(),
          e.ɵɵelementStart(0, "svg", 10),
          e.ɵɵelement(1, "use", 25),
          e.ɵɵelementEnd());
      }
      function hr(n, o) {
        1 & n && e.ɵɵelement(0, "limit-price-alert", 26);
      }
      function vr(n, o) {
        if (
          (1 & n &&
            (e.ɵɵelementStart(0, "div", 27)(1, "mat-checkbox", 28),
            e.ɵɵtext(2, " Enable stop-loss "),
            e.ɵɵelementEnd(),
            e.ɵɵelement(3, "br")(4, "br"),
            e.ɵɵelementEnd()),
          2 & n)
        ) {
          const t = e.ɵɵnextContext();
          e.ɵɵadvance(1), e.ɵɵproperty("formControl", t.stopLossControl);
        }
      }
      let fr = (() => {
        class n {
          constructor(t, r, a, s, p, l, m, d, x, h, y, U, Z, Pe, be) {
            (this.activeConnectionQuery = t),
              (this.tokenPricesService = r),
              (this.limitOrderService = a),
              (this.limitOrderContextService = s),
              (this.limitOrderHistoryService = p),
              (this.commonLimitOrderQuery = l),
              (this.limitOrderQuery = m),
              (this.webAnalyticsService = d),
              (this.featureToggleService = x),
              (this.chainLinkOracleService = h),
              (this.limitOrdersPermitsService = y),
              (this.fb = U),
              (this.onDestroy$ = Z),
              (this.tradeRateSupplier = Pe),
              (this.changeDetection = be),
              (this.confirmInProgress = !1),
              (this.destinationToken$ = this.limitOrderQuery.destinationToken$),
              (this.sourceTokenAmount$ =
                this.limitOrderQuery.sourceTokenAmount$),
              (this.destinationTokenAmount$ =
                this.limitOrderQuery.destinationTokenAmount$),
              (this.direction$ = this.limitOrderQuery.rateDirection$),
              (this.sourceToken$ = this.limitOrderQuery.sourceToken$),
              (this.isPriceLocked$ =
                this.limitOrderQuery.select("isPriceLocked")),
              (this.sourceTokenBalance$ =
                this.limitOrderQuery.sourceTokenBalance$),
              (this.destinationTokenBalance$ =
                this.limitOrderQuery.destinationTokenBalance$),
              (this.swapInfo$ = this.limitOrderQuery.limitOrderSwapInfo$),
              (this.isRatesExpand$ = this.limitOrderQuery.isRatesExpand$),
              (this.isSetMax$ = new X.X(!1)),
              (this.isRateSetUp$ = new X.X(!1)),
              (this.changeDirectionTitleToken$ = this.direction$.pipe(
                (0, f.w)((O) => this.tradeRateSupplier.getTokens(O)),
                (0, u.U)(({ to: O }) => O)
              )),
              (this.tokenShowLock$ = (0, $.a)([
                this.limitOrderQuery.isSourceTokenApproved$,
                this.sourceTokenAmount$,
                this.limitOrdersPermitsService.isPermitSupported$,
              ]).pipe((0, u.U)(([O, Ie, it]) => 0 != +Ie && !O && !it))),
              (this.stopLossControl = new M.UntypedFormControl(!1)),
              (this.form = this.createForm()),
              (this.isStopLossAvailable$ = this.sourceToken$.pipe(
                (0, f.w)(
                  (O) => (
                    this.stopLossControl.setValue(!1),
                    this.featureToggleService.getFeature(sn.n_)
                      ? this.chainLinkOracleService.getOracleAddress(O.symbol)
                      : (0, de.of)(!1)
                  )
                ),
                (0, u.U)((O) => null !== O && !1 !== O),
                (0, pe.d)({ refCount: !0, bufferSize: 1 })
              )),
              (this._subscription = new on.w0());
            const Me = this.limitOrderContextService.context$.pipe(
              (0, Te.BX)(),
              (0, me.q)(1),
              (0, f.w)(() =>
                this.commonLimitOrderQuery.getOrdersByType$("legacy")
              ),
              (0, E.b)((O) => {
                this.limitOrderHistoryService.legacyOrdersCount$.next(O.length);
              }),
              (0, $e.K)(
                (O) => (pr.error("legacyOrdersCount$", O), (0, de.of)(null))
              ),
              (0, K.R)(this.onDestroy$)
            );
            (0, B.O)(Me, "legacyOrdersCount$");
          }
          get sourceTokenAmountControl() {
            return this.form.get("sourceTokenAmount");
          }
          get destTokenAmountControl() {
            return this.form.get("destinationTokenAmount");
          }
          setMaxAmount() {
            const t = this.limitOrderService.getSourceTokenBalanceOnce$().pipe(
              (0, E.b)((r) => {
                this.form.patchValue({ sourceTokenAmount: r, isSetMax: !0 });
              }),
              (0, K.R)(this.onDestroy$)
            );
            (0, B.O)(t, "sourceTokenBalance$"), this.isSetMax$.next(!0);
          }
          ngOnInit() {
            this.webAnalyticsService.pageView(
              "/classic/limit",
              "Exchange / Limit"
            ),
              (this.isFormValid$ = (0, $.a)([
                this.isRateSetUp$,
                this.form.valueChanges.pipe((0, fe.O)(this.form.value)),
              ]).pipe(
                (0, ne.x)(),
                (0, u.U)(() => "VALID" === this.form.status),
                (0, pe.d)({ refCount: !0, bufferSize: 1 })
              ));
          }
          ngAfterViewInit() {
            this.syncFormStateWithStorage(),
              this.setInitialRate(),
              this.syncSetMax(),
              this.syncTokenReversing(),
              this.form.controls.destinationTokenAmount.updateValueAndValidity(),
              this.changeDetection.detectChanges(),
              this.resetRateOnNetworkChanges();
          }
          ngOnDestroy() {
            this._subscription.unsubscribe();
          }
          changeRateDirection() {
            return this.limitOrderService.inverseRateDirection();
          }
          toggleLockPrice() {
            this.limitOrderService.toggleLockPrice();
          }
          handleRatesExpandChange(t) {
            this.limitOrderService.changeIsRatesExpand(t);
          }
          syncSetMax() {
            const t = (0, ct.T)(
                this.sourceTokenAmountControl.valueChanges,
                this.destTokenAmountControl.valueChanges.pipe(
                  (0, an.M)(this.isPriceLocked$),
                  (0, _e.h)(([a, s]) => s)
                )
              ).pipe((0, me.q)(1)),
              r = this.isSetMax$.pipe(
                (0, _e.h)(Boolean),
                (0, f.w)(() => t),
                (0, E.b)(() => {
                  this.isSetMax$.next(!1);
                }),
                (0, K.R)(this.onDestroy$)
              );
            (0, B.O)(r, "setMax$");
          }
          syncTokenReversing() {
            const t = this.limitOrderService.getTokensChanges().pipe(
              (0, _e.h)(({ wereTokenReversed: r }) => r),
              (0, E.b)(({}) => {
                const a = this.form.value,
                  { sourceTokenAmount: s, destinationTokenAmount: p } = a;
                this.form.patchValue({
                  sourceTokenAmount: p,
                  destinationTokenAmount: +s,
                });
              }),
              (0, K.R)(this.onDestroy$)
            );
            (0, B.O)(t, "sourceOrDestinationTokenChanged$");
          }
          syncFormStateWithStorage() {
            const t = this.form.valueChanges.pipe(
              (0, E.b)((r) => {
                this.limitOrderService.updateStoreFromLimitOrderForm(r);
              }),
              (0, K.R)(this.onDestroy$)
            );
            (0, B.O)(t, "syncLoFormStream$");
          }
          setInitialRate() {
            const t = this.limitOrderQuery
              .select([
                "sourceTokenAmount",
                "destinationTokenAmount",
                "duration",
              ])
              .pipe(
                (0, me.q)(1),
                (0, u.U)((r) => this.mapStoreValuesToForm(r)),
                (0, lt.g)(0),
                (0, E.b)((r) => {
                  var a, s;
                  r.destinationTokenAmount
                    ? null === (a = this.rateDir) ||
                      void 0 === a ||
                      a.recalculateRate()
                    : null === (s = this.tradeRateInput) ||
                      void 0 === s ||
                      s.setToMarketClicked(),
                    this.isRateSetUp$.next(!0);
                }),
                (0, K.R)(this.onDestroy$)
              );
            (0, B.O)(t, "initLoForm$");
          }
          mapStoreValuesToForm(t) {
            const {
              sourceTokenAmount: r,
              destinationTokenAmount: a,
              duration: s,
            } = t;
            return {
              sourceTokenAmount: r,
              destinationTokenAmount: +(a || 0),
              rate: 1,
              duration: s,
            };
          }
          createForm() {
            var t;
            const r = this.mapStoreValuesToForm(
              this.limitOrderQuery.getValue()
            );
            return this.fb.group({
              sourceTokenAmount: [r.sourceTokenAmount],
              destinationTokenAmount: [
                r.destinationTokenAmount,
                [ve.Yu, ve.Z9, ve.jy],
              ],
              rate: [
                null !== (t = r.rate) && void 0 !== t ? t : 1,
                [ve.Yu, ve.Z9, ve.jy],
              ],
              duration: [r.duration],
            });
          }
          resetRateOnNetworkChanges() {
            const t = this.activeConnectionQuery.currentChainId$.pipe(
              (0, Qe.T)(1),
              (0, f.w)(() =>
                this.tokenPricesService.onTokenPricesUpdate$.pipe((0, me.q)(1))
              ),
              (0, E.b)(() => {
                this.setInitialRate();
              })
            );
            (0, B.O)(t, "loNetworkChanged$");
          }
        }
        return (
          (n.ɵfac = function (t) {
            return new (t || n)(
              e.ɵɵdirectiveInject(j.r),
              e.ɵɵdirectiveInject(Ln.S),
              e.ɵɵdirectiveInject(Ne),
              e.ɵɵdirectiveInject(vt.a),
              e.ɵɵdirectiveInject(ft),
              e.ɵɵdirectiveInject(_t.g),
              e.ɵɵdirectiveInject(ge.g),
              e.ɵɵdirectiveInject(Ct.y),
              e.ɵɵdirectiveInject(We.BV),
              e.ɵɵdirectiveInject(An.y),
              e.ɵɵdirectiveInject(Ot.J),
              e.ɵɵdirectiveInject(M.UntypedFormBuilder),
              e.ɵɵdirectiveInject(G.a3, 2),
              e.ɵɵdirectiveInject(Be),
              e.ɵɵdirectiveInject(e.ChangeDetectorRef)
            );
          }),
          (n.ɵcmp = e.ɵɵdefineComponent({
            type: n,
            selectors: [["limit-order-form"]],
            viewQuery: function (t, r) {
              if (
                (1 & t && (e.ɵɵviewQuery(ut, 5), e.ɵɵviewQuery(ht, 5)), 2 & t)
              ) {
                let a;
                e.ɵɵqueryRefresh((a = e.ɵɵloadQuery())) &&
                  (r.rateDir = a.first),
                  e.ɵɵqueryRefresh((a = e.ɵɵloadQuery())) &&
                    (r.tradeRateInput = a.first);
              }
            },
            hostVars: 2,
            hostBindings: function (t, r) {
              2 & t &&
                e.ɵɵclassProp("confirm-in-progress", r.confirmInProgress);
            },
            features: [e.ɵɵProvidersFeature([G.a3])],
            decls: 50,
            vars: 84,
            consts: [
              [
                "appRateFormProcessor",
                "",
                3,
                "formGroup",
                "isRateLocked",
                "rateDirection",
              ],
              [1, "limit-order-form__action-buttons"],
              [1, "limit-order-form__wrapper"],
              [
                "formControlName",
                "sourceTokenAmount",
                1,
                "source-token-input",
                3,
                "token",
                "tokenBalance",
                "showLock",
                "customTokenLinkString",
                "isSetMaxActive",
                "setMaxAmount",
              ],
              ["reverseTokensLink", "reverse", 3, "rotatable"],
              [
                "formControlName",
                "destinationTokenAmount",
                "selectTokenLink",
                "select-destination-token",
                "type",
                "destination",
                1,
                "destination-token-input",
                3,
                "token",
                "tokenBalance",
                "customTokenLinkString",
                "showMaxButton",
                "swapInfo",
              ],
              [1, "extra-settings__wrapper"],
              [1, "limit-order-form__rate-input"],
              [
                "formControlName",
                "rate",
                1,
                "rate-input",
                3,
                "direction",
                "isPercentageStepRateVisible",
                "isDirectionChangedButtonAvailable",
              ],
              [
                "data-id",
                "limit-order.trade-rate.change-direction",
                "ratePanelActionButton",
                "",
                1,
                "rate__change-direction-button",
                "text-gray",
                3,
                "click",
              ],
              ["width", "16", "height", "16"],
              [0, "xlink", "href", "assets/images/icons/swap.svg#swap"],
              ["settingsActionButton", "", 1, "rate__lock-button", 3, "click"],
              ["width", "16", "height", "16", 4, "ngIf"],
              [
                "class",
                "lock-button__tooltip",
                "direction",
                "top",
                "contentType",
                "custom",
                "data-id",
                "limit-order.trade-rate.set-to-market.lock-icon",
                3,
                "clickableElement",
                "tooltip",
                "customElement",
                4,
                "ngIf",
              ],
              ["unlockIcon", ""],
              [1, "limit-order-form__expired-in-select"],
              [
                "formControlName",
                "duration",
                "data-id",
                "limit-order.expires-in",
                1,
                "duration-select",
                3,
                "titleTranslocoKey",
                "tooltipTextTranslocoKey",
              ],
              ["class", "limit-order-form__alert", 4, "ngIf"],
              [
                1,
                "limit-order-form__trade-info",
                3,
                "sourceToken",
                "sourceTokenAmount",
                "destinationToken",
                "destinationTokenAmount",
                "rateDirection",
                "isRatesExpand",
                "handleRatesExpandChange",
              ],
              [
                1,
                "limit-order-form__create-button",
                3,
                "isStopLossEnabled",
                "refreshStateTrigger$",
                "onConfirm",
                "afterConfirm",
              ],
              ["class", "stop-loss-limit", 4, "ngIf"],
              [
                "domain",
                "limit-orders-embed",
                1,
                "embed-settings",
                3,
                "compactMode",
              ],
              [0, "xlink", "href", "assets/images/icons/lock_2.svg#lock"],
              [
                "direction",
                "top",
                "contentType",
                "custom",
                "data-id",
                "limit-order.trade-rate.set-to-market.lock-icon",
                1,
                "lock-button__tooltip",
                3,
                "clickableElement",
                "tooltip",
                "customElement",
              ],
              [0, "xlink", "href", "assets/images/icons/unlock_2.svg#unlock"],
              [1, "limit-order-form__alert"],
              [1, "stop-loss-limit"],
              [3, "formControl"],
            ],
            template: function (t, r) {
              1 & t &&
                (e.ɵɵelementStart(0, "div", 0),
                e.ɵɵpipe(1, "async"),
                e.ɵɵpipe(2, "async"),
                e.ɵɵelement(3, "action-buttons", 1),
                e.ɵɵelementStart(4, "div", 2)(5, "token-select-input", 3),
                e.ɵɵlistener("setMaxAmount", function () {
                  return r.setMaxAmount();
                }),
                e.ɵɵpipe(6, "async"),
                e.ɵɵpipe(7, "async"),
                e.ɵɵpipe(8, "async"),
                e.ɵɵpipe(9, "transloco"),
                e.ɵɵpipe(10, "async"),
                e.ɵɵelementEnd(),
                e.ɵɵelement(11, "swap-separator", 4)(
                  12,
                  "token-select-input",
                  5
                ),
                e.ɵɵpipe(13, "async"),
                e.ɵɵpipe(14, "async"),
                e.ɵɵpipe(15, "transloco"),
                e.ɵɵpipe(16, "async"),
                e.ɵɵelementStart(17, "div", 6)(18, "div", 7)(
                  19,
                  "app-trade-rate-input",
                  8
                ),
                e.ɵɵpipe(20, "async"),
                e.ɵɵelementStart(21, "span", 9),
                e.ɵɵlistener("click", function () {
                  return r.changeRateDirection();
                }),
                e.ɵɵtext(22),
                e.ɵɵpipe(23, "shortTokenSymbol"),
                e.ɵɵpipe(24, "displaySymbol"),
                e.ɵɵpipe(25, "async"),
                e.ɵɵnamespaceSVG(),
                e.ɵɵelementStart(26, "svg", 10),
                e.ɵɵelement(27, "use", 11),
                e.ɵɵelementEnd()(),
                e.ɵɵnamespaceHTML(),
                e.ɵɵelementStart(28, "span", 12),
                e.ɵɵlistener("click", function () {
                  return r.toggleLockPrice();
                }),
                e.ɵɵtemplate(29, mr, 2, 0, "svg", 13),
                e.ɵɵpipe(30, "async"),
                e.ɵɵtemplate(31, ur, 2, 5, "tooltip", 14),
                e.ɵɵpipe(32, "async"),
                e.ɵɵtemplate(
                  33,
                  gr,
                  2,
                  0,
                  "ng-template",
                  null,
                  15,
                  e.ɵɵtemplateRefExtractor
                ),
                e.ɵɵelementEnd()()(),
                e.ɵɵelementStart(35, "div", 16),
                e.ɵɵelement(36, "duration-select", 17),
                e.ɵɵelementEnd()(),
                e.ɵɵtemplate(37, hr, 1, 0, "limit-price-alert", 18),
                e.ɵɵpipe(38, "async"),
                e.ɵɵelementStart(39, "expanded-rate-info", 19),
                e.ɵɵlistener("handleRatesExpandChange", function (s) {
                  return r.handleRatesExpandChange(s);
                }),
                e.ɵɵpipe(40, "async"),
                e.ɵɵpipe(41, "async"),
                e.ɵɵpipe(42, "async"),
                e.ɵɵpipe(43, "async"),
                e.ɵɵpipe(44, "async"),
                e.ɵɵpipe(45, "async"),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(46, "limit-order-create-button", 20),
                e.ɵɵlistener("onConfirm", function () {
                  return (r.confirmInProgress = !0);
                })("afterConfirm", function () {
                  return (r.confirmInProgress = !1);
                }),
                e.ɵɵelementEnd(),
                e.ɵɵtemplate(47, vr, 5, 1, "div", 21),
                e.ɵɵpipe(48, "async"),
                e.ɵɵelement(49, "swap-settings", 22),
                e.ɵɵelementEnd()()),
                2 & t &&
                  (e.ɵɵproperty("formGroup", r.form)(
                    "isRateLocked",
                    e.ɵɵpipeBind1(1, 33, r.isPriceLocked$)
                  )("rateDirection", e.ɵɵpipeBind1(2, 35, r.direction$)),
                  e.ɵɵadvance(5),
                  e.ɵɵproperty("token", e.ɵɵpipeBind1(6, 37, r.sourceToken$))(
                    "tokenBalance",
                    e.ɵɵpipeBind1(7, 39, r.sourceTokenBalance$)
                  )("showLock", e.ɵɵpipeBind1(8, 41, r.tokenShowLock$))(
                    "customTokenLinkString",
                    e.ɵɵpipeBind1(9, 43, "uni.swap.you-sell")
                  )("isSetMaxActive", e.ɵɵpipeBind1(10, 45, r.isSetMax$)),
                  e.ɵɵadvance(6),
                  e.ɵɵproperty("rotatable", !0),
                  e.ɵɵadvance(1),
                  e.ɵɵproperty(
                    "token",
                    e.ɵɵpipeBind1(13, 47, r.destinationToken$)
                  )(
                    "tokenBalance",
                    e.ɵɵpipeBind1(14, 49, r.destinationTokenBalance$)
                  )(
                    "customTokenLinkString",
                    e.ɵɵpipeBind1(15, 51, "uni.swap.you-buy")
                  )("showMaxButton", !1)(
                    "swapInfo",
                    e.ɵɵpipeBind1(16, 53, r.swapInfo$)
                  ),
                  e.ɵɵadvance(7),
                  e.ɵɵproperty(
                    "direction",
                    e.ɵɵpipeBind1(20, 55, r.direction$)
                  )("isPercentageStepRateVisible", !1)(
                    "isDirectionChangedButtonAvailable",
                    !1
                  ),
                  e.ɵɵadvance(3),
                  e.ɵɵtextInterpolate1(
                    " ",
                    e.ɵɵpipeBind2(
                      23,
                      57,
                      e.ɵɵpipeBind1(
                        24,
                        60,
                        e.ɵɵpipeBind1(25, 62, r.changeDirectionTitleToken$)
                      ),
                      12
                    ),
                    " "
                  ),
                  e.ɵɵadvance(7),
                  e.ɵɵproperty("ngIf", e.ɵɵpipeBind1(30, 64, r.isPriceLocked$)),
                  e.ɵɵadvance(2),
                  e.ɵɵproperty(
                    "ngIf",
                    !e.ɵɵpipeBind1(32, 66, r.isPriceLocked$)
                  ),
                  e.ɵɵadvance(5),
                  e.ɵɵproperty("titleTranslocoKey", "otc-deal.expires-in")(
                    "tooltipTextTranslocoKey",
                    "limitOrderBox.expires-in-tooltip"
                  ),
                  e.ɵɵadvance(1),
                  e.ɵɵproperty("ngIf", e.ɵɵpipeBind1(38, 68, r.isRateSetUp$)),
                  e.ɵɵadvance(2),
                  e.ɵɵproperty(
                    "sourceToken",
                    e.ɵɵpipeBind1(40, 70, r.sourceToken$)
                  )(
                    "sourceTokenAmount",
                    e.ɵɵpipeBind1(41, 72, r.sourceTokenAmount$)
                  )(
                    "destinationToken",
                    e.ɵɵpipeBind1(42, 74, r.destinationToken$)
                  )(
                    "destinationTokenAmount",
                    e.ɵɵpipeBind1(43, 76, r.destinationTokenAmount$)
                  )("rateDirection", e.ɵɵpipeBind1(44, 78, r.direction$))(
                    "isRatesExpand",
                    e.ɵɵpipeBind1(45, 80, r.isRatesExpand$)
                  ),
                  e.ɵɵadvance(7),
                  e.ɵɵproperty("isStopLossEnabled", r.stopLossControl.value)(
                    "refreshStateTrigger$",
                    r.isFormValid$
                  ),
                  e.ɵɵadvance(1),
                  e.ɵɵproperty(
                    "ngIf",
                    e.ɵɵpipeBind1(48, 82, r.isStopLossAvailable$)
                  ),
                  e.ɵɵadvance(2),
                  e.ɵɵproperty("compactMode", !0));
            },
            dependencies: [
              c.O5,
              Dn,
              Rn.g,
              Vn.W,
              qn,
              M.NgControlStatus,
              M.NgControlStatusGroup,
              M.FormControlDirective,
              M.FormGroupDirective,
              M.FormControlName,
              ar,
              sr.Y,
              ht,
              ut,
              De.K,
              cr.z,
              Xe.oG,
              lr._,
              c.Ov,
              g.Ot,
              Re.s,
              dr._,
            ],
            styles: [
              ".confirm-in-progress[_nghost-%COMP%]{pointer-events:none}.limit-order-form__wrapper[_ngcontent-%COMP%]{margin-top:18px}.extra-settings__wrapper[_ngcontent-%COMP%]{margin-top:8px;display:flex;gap:8px}.limit-order-form__trade-info[_ngcontent-%COMP%]{margin:24px 8px 0}.limit-order-form__create-button[_ngcontent-%COMP%]{margin-top:24px}.limit-order-form__rate-input[_ngcontent-%COMP%]{flex-grow:1}.limit-order-form__alert[_ngcontent-%COMP%]{margin-top:8px}.embed-settings[_ngcontent-%COMP%]     .advanced-setting{margin-top:16px}.stop-loss-limit[_ngcontent-%COMP%]{margin-top:16px}@media (max-width: 520px){.extra-settings__wrapper[_ngcontent-%COMP%]{flex-direction:column}.limit-order-form__expired-in-select[_ngcontent-%COMP%]{flex-grow:1;align-items:flex-start}.limit-order-form__expired-in-select[_ngcontent-%COMP%]     .time-select-tooltip{width:100%}.limit-order-form__expired-in-select[_ngcontent-%COMP%]     .duration-select{width:100%!important}.limit-order-form__expired-in-select[_ngcontent-%COMP%]     .duration-select   .title{justify-content:flex-start}.limit-order-form__expired-in-select[_ngcontent-%COMP%]     .duration-select   tui-hosted-dropdown .wrapper tui-primitive-textfield tui-wrapper{color:var(--1inch-bg-01)}.limit-order-form__expired-in-select[_ngcontent-%COMP%]     .duration-select   tui-hosted-dropdown .wrapper tui-primitive-textfield tui-wrapper .t-input .t-value{justify-content:flex-start!important;margin-left:1px!important}}[_nghost-%COMP%]{display:block}.rate-input[_ngcontent-%COMP%]     input{text-align:left!important;font-size:20px!important}.rate__change-direction-button[_ngcontent-%COMP%]{cursor:pointer;font-size:13px;display:flex;align-items:center;background:var(--1inch-bg-24);border-radius:6px;padding:4px}.rate__change-direction-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{margin-left:4px}.rate__change-direction-button[_ngcontent-%COMP%]:hover{color:var(--1inch-text-03)}.rate__change-direction-button[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]{color:var(--1inch-text-03)}.rate__lock-button[_ngcontent-%COMP%]{margin-left:4px;cursor:pointer}.rate__lock-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{color:var(--1inch-icon-color-03)}.rate__lock-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]:hover{color:var(--1inch__ui-01)}.lock-button__tooltip[_ngcontent-%COMP%]{margin-left:0}",
            ],
            changeDetection: 0,
          })),
          n
        );
      })();
      function _r(n, o) {
        1 & n &&
          (e.ɵɵelementStart(0, "div"),
          e.ɵɵelement(1, "limit-order-form"),
          e.ɵɵelementEnd());
      }
      let Cr = (() => {
        class n {
          constructor(t) {
            (this.limitOrdersSupportService = t),
              (this.isLimitOrdersSupportedByWallet$ =
                this.limitOrdersSupportService.isLimitOrdersSupportedByWallet$);
          }
        }
        return (
          (n.ɵfac = function (t) {
            return new (t || n)(e.ɵɵdirectiveInject(nn.G));
          }),
          (n.ɵcmp = e.ɵɵdefineComponent({
            type: n,
            selectors: [["limit-order-form-container"]],
            decls: 3,
            vars: 3,
            consts: [[4, "ngIf"]],
            template: function (t, r) {
              1 & t &&
                (e.ɵɵelement(0, "limit-orders-support"),
                e.ɵɵtemplate(1, _r, 2, 0, "div", 0),
                e.ɵɵpipe(2, "async")),
                2 & t &&
                  (e.ɵɵadvance(1),
                  e.ɵɵproperty(
                    "ngIf",
                    e.ɵɵpipeBind1(2, 1, r.isLimitOrdersSupportedByWallet$)
                  ));
            },
            dependencies: [c.O5, rn.g, fr, c.Ov],
            changeDetection: 0,
          })),
          n
        );
      })();
      var Je = i(46793),
        Or = i(9862),
        xr = i(4461),
        Ze = i(62901),
        yt = i(65687),
        yr = i(5099),
        Tr = i(60303),
        kr = i(79398),
        wr = i(92157),
        Tt = i(32770),
        Ye = i(27118);
      function kt(n) {
        const {
            sourceTokenUsdPrice: o,
            destinationTokenUsdPrice: t,
            sourceTokenAmount: r,
            destinationTokenAmount: a,
          } = n,
          s = o * r,
          d = +((100 * (t * a - s)) / s).toFixed(2);
        return Number.isFinite(d) ? d : 0;
      }
      let Sr = (() => {
          class n extends Be {
            constructor(t) {
              super(), (this.limitOrderQuery = t);
            }
            rateShouldExist() {
              return this.limitOrderQuery.tokensPrices$.pipe(
                (0, u.U)(
                  ({ sourceTokenPrice: t, destinationTokenPrice: r }) =>
                    !t.doesNotHavePrice && !r.doesNotHavePrice
                )
              );
            }
            getMarketRate(t) {
              return this.limitOrderQuery.tokensPrices$.pipe(
                (0, u.U)(({ sourceTokenPrice: r, destinationTokenPrice: a }) =>
                  t === b.N.direct
                    ? r.usdPrice / a.usdPrice
                    : a.usdPrice / r.usdPrice
                )
              );
            }
            getProfit() {
              return (0, $.a)([
                this.limitOrderQuery.sourceTokenAmount$,
                this.limitOrderQuery.destinationTokenAmount$,
              ]).pipe((0, f.w)(([t, r]) => this.calculateProfit(+t, +r)));
            }
            getTokens(t) {
              return (0, $.a)([
                this.limitOrderQuery.sourceToken$,
                this.limitOrderQuery.destinationToken$,
              ]).pipe(
                (0, u.U)(([r, a]) => {
                  const s = t === b.N.direct;
                  return { from: s ? r : a, to: s ? a : r };
                })
              );
            }
            calculateProfit(t, r) {
              return this.limitOrderQuery.tokensPrices$.pipe(
                (0, u.U)(({ sourceTokenPrice: a, destinationTokenPrice: s }) =>
                  kt({
                    sourceTokenUsdPrice: a.usdPrice,
                    destinationTokenUsdPrice: s.usdPrice,
                    sourceTokenAmount: t,
                    destinationTokenAmount: r,
                  })
                )
              );
            }
          }
          return (
            (n.ɵfac = function (t) {
              return new (t || n)(e.ɵɵinject(ge.g));
            }),
            (n.ɵprov = e.ɵɵdefineInjectable({ token: n, factory: n.ɵfac })),
            n
          );
        })(),
        Pr = (() => {
          class n {}
          return (
            (n.ɵfac = function (t) {
              return new (t || n)();
            }),
            (n.ɵmod = e.ɵɵdefineNgModule({ type: n })),
            (n.ɵinj = e.ɵɵdefineInjector({ imports: [c.ez, g.y4, C.Bz] })),
            n
          );
        })();
      var wt = i(35950),
        qe = i(63223),
        br = i(40934);
      let Mr = (() => {
          class n {}
          return (
            (n.ɵfac = function (t) {
              return new (t || n)();
            }),
            (n.ɵmod = e.ɵɵdefineNgModule({ type: n })),
            (n.ɵinj = e.ɵɵdefineInjector({
              imports: [c.ez, g.y4, qe._, br.f, k.WD, Ze.w, wt.S],
            })),
            n
          );
        })(),
        Ir = (() => {
          class n {}
          return (
            (n.ɵfac = function (t) {
              return new (t || n)();
            }),
            (n.ɵmod = e.ɵɵdefineNgModule({ type: n })),
            (n.ɵinj = e.ɵɵdefineInjector({ imports: [c.ez, g.y4, T.n, Ze.w] })),
            n
          );
        })(),
        Lr = (() => {
          class n {}
          return (
            (n.ɵfac = function (t) {
              return new (t || n)();
            }),
            (n.ɵmod = e.ɵɵdefineNgModule({ type: n })),
            (n.ɵinj = e.ɵɵdefineInjector({
              providers: [Ne, Ye.b, { provide: Be, useClass: Sr }],
              imports: [
                c.ez,
                g.y4,
                Je.d,
                Pr,
                wr.U,
                Tt.Z,
                Mr,
                M.ReactiveFormsModule,
                Ir,
                Tr.j,
                kr.I,
                L.z,
                yr.f,
                Ze.w,
                yt.m,
                xr.M,
                Xe.p9,
                Or.$,
              ],
            })),
            n
          );
        })(),
        Ar = (() => {
          class n {}
          return (
            (n.ɵfac = function (t) {
              return new (t || n)();
            }),
            (n.ɵmod = e.ɵɵdefineNgModule({ type: n })),
            (n.ɵinj = e.ɵɵdefineInjector({ imports: [c.ez, Je.d, Lr] })),
            n
          );
        })();
      var Er = i(92872),
        St = i(77370),
        $r = i(84093),
        Pt = i(55512),
        bt = i(23963),
        Br = i(70681),
        Dr = i(73499),
        Rr = i(15881),
        Vr = i(64925),
        jr = i(64508),
        Ur = i(26341),
        Fr = i(76927),
        Nr = i(74004),
        Qr = i(74342),
        Hr = i(26373),
        Mt = i(34289),
        Wr = i(64074),
        zr = i(10546),
        Kr = i(10047),
        It = i(75096),
        Lt = i(30098),
        Gr = i(31455),
        Xr = i(60803),
        Jr = i(91066),
        Zr = i(41852),
        Yr = i(47540),
        qr = i(44197),
        ei = i(75604),
        ti = i(77160);
      let At = (() => {
          class n {}
          return (
            (n.ɵfac = function (t) {
              return new (t || n)();
            }),
            (n.ɵmod = e.ɵɵdefineNgModule({ type: n })),
            (n.ɵinj = e.ɵɵdefineInjector({
              imports: [
                c.ez,
                Yr.G,
                g.y4,
                qr.q,
                k.WD,
                ei.l,
                ti.D,
                T.n,
                Mt.P,
                M.ReactiveFormsModule,
                bt.k,
                It.y,
                qe._,
                Lt.f,
              ],
            })),
            n
          );
        })(),
        ni = (() => {
          class n {}
          return (
            (n.ɵfac = function (t) {
              return new (t || n)();
            }),
            (n.ɵmod = e.ɵɵdefineNgModule({ type: n })),
            (n.ɵinj = e.ɵɵdefineInjector({
              providers: [Ye.b],
              imports: [
                c.ez,
                M.ReactiveFormsModule,
                M.FormsModule,
                $r.XC,
                g.y4,
                jr.v,
                Br.A,
                Vr.h,
                Er.ot,
                ze.Is,
                Xe.p9,
                St.TU,
                Rr.T,
                Wr.M,
                Fr.$,
                Ur.Q,
                yt.m,
                Kr.y,
                zr.f,
                Jr.E,
                k.WD,
                Tt.Z,
                wt.S,
                Nr.l,
                Gr.o,
                Lt.f,
                Je.d,
                Qr.W,
                Mt.P,
                bt.k,
                It.y,
                Pt.V5,
                qe._,
                Xr.p,
                At,
                Hr.w,
                Dr.s,
                Zr.a,
              ],
            })),
            n
          );
        })();
      var Et = i(39700),
        I = i(29737);
      const ri = (0, I.wVM)([
          [(0, I.fS0)("active"), (0, I.Bxt)(0)],
          [(0, I.fS0)("history"), (0, I.Bxt)(1)],
          [(0, I.fS0)("legacy"), (0, I.Bxt)(2)],
        ]),
        ii = (0, I.wVM)([
          [(0, I.fS0)(0), (0, I.Bxt)("active")],
          [(0, I.fS0)(1), (0, I.Bxt)("history")],
          [(0, I.fS0)(2), (0, I.Bxt)("legacy")],
        ]);
      var oi = i(50291),
        ai = i(74941),
        si = i(65083),
        re = i(64818),
        $t = i(56572),
        ci = i(93094),
        li = i(73021),
        di = i(59395),
        pi = i(80849),
        et = i(82868),
        mi = i(97590),
        ui = i(73836),
        tt = i(71891),
        nt = i(18110),
        Bt = i(53390),
        gi = i(71106),
        we = i(48163),
        hi = i(40548),
        vi = i(55468),
        P = i(69703),
        Dt = i(12356);
      function _i(n) {
        if (!n) return "--:--";
        const t = n - Math.floor(Date.now() / 1e3),
          r = Math.floor(t / 60),
          a = t - 60 * r;
        return r < 0 ? "--:--" : `${(0, Dt.U)(r)}:${(0, Dt.U)(a)}`;
      }
      var Se = i(33643),
        Rt = i(41912),
        Vt = i(42832);
      const Ci = {
        0: "Jan",
        1: "Feb",
        2: "Mar",
        3: "Apr",
        4: "May",
        5: "Jun",
        6: "Jul",
        7: "Aug",
        8: "Sep",
        9: "Oct",
        10: "Nov",
        11: "Dec",
      };
      class ie {
        constructor(o, t, r, a, s) {
          (this.activeConnectionQuery = o),
            (this.contractAddressQuery = t),
            (this.tokensQuery = r),
            (this.ordersStatusQuery = a),
            (this.translocoService = s),
            (this.rateDecimals = hi.q),
            (this.order$ = new X.X(null)),
            (this.orderHash$ = this.order$.pipe(
              (0, Te.BX)(),
              (0, u.U)(({ rawOrder: p }) => p.orderHash)
            )),
            (this.orderStatusData$ = this.getOrderStatusData()),
            (this.isBad$ = this.orderStatusData$.pipe(
              (0, u.U)(({ statuses: p }) => p.has(P.b.BadPrice))
            )),
            (this.isWarning$ = (0, $.a)([
              this.isBad$,
              this.orderStatusData$,
            ]).pipe(
              (0, u.U)(
                ([p, { statuses: l }]) =>
                  !p &&
                  [P.b.NotApproved, P.b.InsufficientBalance].some((d) =>
                    l.has(d)
                  )
              )
            )),
            (this.isUnknown$ = this.orderStatusData$.pipe(
              (0, u.U)(({ statuses: p }) => p.has(P.b.Unknown))
            )),
            (this.hasTooltip$ = this.hasTooltip()),
            (this.activeLimitOrderStatusViewData$ = this.orderStatusData$.pipe(
              (0, u.U)((p) =>
                (function fi(n) {
                  var o, t, r, a;
                  const {
                      orderStatusData: s,
                      filled: p,
                      translocoService: l,
                    } = n,
                    { statuses: m, data: d } = s,
                    h = {
                      text:
                        '<span class="grey-text">' +
                        l.translate("orderList.filled") +
                        `:</span> ${p}%`,
                    };
                  return m.has(P.b.AwaitingSignatures)
                    ? {
                        title: l.translate(
                          "limit-order.waiting-for-signatures"
                        ),
                        tooltip: {
                          text: l.translate("limit-order.verify.gnosis-safe"),
                          iconColor: "blue",
                          contentType: "attention-filled",
                        },
                        showProgressBar: !1,
                      }
                    : m.has(P.b.NotPublished)
                    ? {
                        title: l.translate(
                          "orderList.status-title.unpublished"
                        ),
                        tooltip: {
                          text: l.translate(
                            "orderList.status-tooltip-text.not-published-v1",
                            { expiredIn: _i(d.expiredIn) }
                          ),
                          iconColor: "gray",
                          contentType: "attention-triangle-filled",
                          bottomData: {
                            text: l.translate("infoBlocks.read-more"),
                            link: "https://help.1inch.io/en/articles/4656415-how-to-place-a-limit-order-on-1inch",
                          },
                        },
                        showProgressBar: !0,
                      }
                    : m.has(P.b.BadPrice) &&
                      m.has(P.b.NotApproved) &&
                      m.has(P.b.InsufficientBalance)
                    ? {
                        title: l.translate(
                          "orderList.status-title.rate-approval-balance"
                        ),
                        tooltip: {
                          text: l.translate(
                            "orderList.status-tooltip-text.rate-approval-balance",
                            {
                              asset: d.asset,
                              losses:
                                null === (o = d.losses) || void 0 === o
                                  ? void 0
                                  : o.toFixed(2),
                            }
                          ),
                          iconColor: "red",
                          contentType: "attention-filled",
                          bottomData: h,
                        },
                        showProgressBar: !0,
                      }
                    : m.has(P.b.BadPrice) && m.has(P.b.InsufficientBalance)
                    ? {
                        title: l.translate(
                          "orderList.status-title.rate-balance"
                        ),
                        tooltip: {
                          text: l.translate(
                            "orderList.status-tooltip-text.rate-balance",
                            {
                              asset: d.asset,
                              losses:
                                null === (t = d.losses) || void 0 === t
                                  ? void 0
                                  : t.toFixed(2),
                            }
                          ),
                          iconColor: "red",
                          contentType: "attention-filled",
                          bottomData: h,
                        },
                        showProgressBar: !0,
                      }
                    : m.has(P.b.BadPrice) && m.has(P.b.NotApproved)
                    ? {
                        title: l.translate(
                          "orderList.status-title.rate-approval"
                        ),
                        tooltip: {
                          text: l.translate(
                            "orderList.status-tooltip-text.rate-approval",
                            {
                              asset: d.asset,
                              losses:
                                null === (r = d.losses) || void 0 === r
                                  ? void 0
                                  : r.toFixed(2),
                            }
                          ),
                          iconColor: "red",
                          contentType: "attention-filled",
                          bottomData: h,
                        },
                        showProgressBar: !0,
                      }
                    : m.has(P.b.BadPrice)
                    ? {
                        title: l.translate(
                          "orderList.status-title.unfavourable-rate"
                        ),
                        tooltip: {
                          text: l.translate(
                            "orderList.status-tooltip-text.rate",
                            {
                              losses:
                                null === (a = d.losses) || void 0 === a
                                  ? void 0
                                  : a.toFixed(2),
                            }
                          ),
                          iconColor: "red",
                          contentType: "attention-filled",
                          bottomData: h,
                        },
                        showProgressBar: !0,
                      }
                    : m.has(P.b.NotApproved) && m.has(P.b.InsufficientBalance)
                    ? {
                        title: l.translate(
                          "orderList.status-title.approval-balance"
                        ),
                        tooltip: {
                          text: l.translate(
                            "orderList.status-tooltip-text.balance-approval",
                            { asset: d.asset }
                          ),
                          iconColor: "yellow",
                          contentType: "attention-filled",
                          bottomData: h,
                        },
                        showProgressBar: !0,
                      }
                    : m.has(P.b.NotApproved)
                    ? {
                        title: l.translate("orderList.status-title.approval"),
                        tooltip: {
                          text: l.translate(
                            "orderList.status-tooltip-text.approval",
                            { asset: d.asset }
                          ),
                          iconColor: "yellow",
                          contentType: "attention-filled",
                          bottomData: h,
                        },
                        showProgressBar: !0,
                      }
                    : m.has(P.b.InsufficientBalance)
                    ? {
                        title: l.translate("orderList.status-title.balance"),
                        tooltip: {
                          text: l.translate(
                            "orderList.status-tooltip-text.balance",
                            { asset: d.asset }
                          ),
                          iconColor: "yellow",
                          contentType: "attention-filled",
                          bottomData: h,
                        },
                        showProgressBar: !0,
                      }
                    : m.has(P.b.Unknown)
                    ? {
                        title: l.translate(
                          "orderList.status-title.unpublished"
                        ),
                        tooltip: {
                          text: l.translate(
                            "orderList.status-tooltip-text.unknown-token"
                          ),
                          iconColor: "gray",
                          contentType: "attention-triangle-filled",
                        },
                        showProgressBar: !0,
                      }
                    : {
                        title: l.translate("orderList.filled") + ` ${p}%`,
                        showProgressBar: !0,
                      };
                })({
                  orderStatusData: p,
                  filled: this.filled,
                  translocoService: s,
                })
              )
            ));
        }
        set order(o) {
          this.order$.next(o);
        }
        get order() {
          return this.order$.getValue();
        }
        get unsavedOrderExpiredIn() {
          const t = new Date(this.order.rawOrder.createDateTime).getTime();
          return Math.round((t + $t._) / 1e3);
        }
        get takerAsset() {
          const { interaction: o } = this.order.rawOrder.data,
            t = o.startsWith(
              this.contractAddressQuery.getContractAddress(vi.a4.wethUnwrapper)
            ),
            r = this.tokensQuery.getByAddress(this.order.takerAsset);
          return t
            ? this.activeConnectionQuery.currentNativeToken
            : null != r
            ? r
            : { symbol: "Unknown" };
        }
        get createDate() {
          const o = new Date(this.order.rawOrder.createDateTime);
          return this.getDateView({
            date: o.toLocaleDateString("en-US", { hourCycle: "h23" }),
            time: o.toLocaleTimeString("en-US", { hourCycle: "h23" }),
          });
        }
        get expireDate() {
          return this.getDateView({
            date: this.order.expirationDate,
            time: this.order.expirationTime,
          });
        }
        get filled() {
          const o = +this.order.filled;
          return 0 === o ? "0" : o < 0.01 ? (0.01).toString() : o.toFixed(2);
        }
        getDateView(o) {
          const t = o.date.split("/"),
            r = o.time.split(":");
          return {
            date: t[1] + " " + Ci[+t[0] - 1] + " " + t[2],
            time: r[0] + ":" + r[1],
          };
        }
        getOrderStatusData() {
          return this.orderHash$.pipe(
            (0, f.w)((o) => this.ordersStatusQuery.selectDefinedEntity(o))
          );
        }
        hasTooltip() {
          return (0, $.a)([
            this.order$.pipe((0, Te.BX)()),
            this.getOrderStatusData(),
          ]).pipe(
            (0, u.U)(
              ([{ rawOrder: o }, { statuses: t }]) =>
                ("active" === o.orderType || "legacy" === o.orderType) &&
                !!t.size
            )
          );
        }
      }
      (ie.ɵfac = function (o) {
        return new (o || ie)(
          e.ɵɵdirectiveInject(j.r),
          e.ɵɵdirectiveInject(Rt.O),
          e.ɵɵdirectiveInject(Ee.d),
          e.ɵɵdirectiveInject(Vt.R),
          e.ɵɵdirectiveInject(g.Vn)
        );
      }),
        (ie.ɵdir = e.ɵɵdefineDirective({
          type: ie,
          inputs: { order: "order" },
        })),
        (0, we.__decorate)(
          [Se.UM],
          ie.prototype,
          "unsavedOrderExpiredIn",
          null
        ),
        (0, we.__decorate)([Se.UM], ie.prototype, "takerAsset", null),
        (0, we.__decorate)([Se.UM], ie.prototype, "createDate", null),
        (0, we.__decorate)([Se.UM], ie.prototype, "expireDate", null);
      var Oi = i(74922),
        xi = i(45256),
        yi = i(50734),
        Ut = i(29889);
      function Ti(n, o) {
        if (
          (1 & n &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵelementStart(1, "a", 3),
            e.ɵɵelement(2, "span", 2),
            e.ɵɵelementEnd(),
            e.ɵɵelementContainerEnd()),
          2 & n)
        ) {
          const t = e.ɵɵnextContext(3);
          e.ɵɵadvance(1),
            e.ɵɵproperty("href", t.data.bottomData.link, e.ɵɵsanitizeUrl),
            e.ɵɵadvance(1),
            e.ɵɵproperty("innerHtml", t.data.bottomData.text, e.ɵɵsanitizeHtml);
        }
      }
      function ki(n, o) {
        if (
          (1 & n &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵelement(1, "span", 2),
            e.ɵɵelementContainerEnd()),
          2 & n)
        ) {
          const t = e.ɵɵnextContext(3);
          e.ɵɵadvance(1),
            e.ɵɵproperty("innerHtml", t.data.bottomData.text, e.ɵɵsanitizeHtml);
        }
      }
      function wi(n, o) {
        if (
          (1 & n &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵelement(1, "br")(2, "br"),
            e.ɵɵtemplate(3, Ti, 3, 2, "ng-container", 0),
            e.ɵɵtemplate(4, ki, 2, 1, "ng-container", 0),
            e.ɵɵelementContainerEnd()),
          2 & n)
        ) {
          const t = e.ɵɵnextContext(2);
          e.ɵɵadvance(3),
            e.ɵɵproperty("ngIf", t.data.bottomData.link),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", !t.data.bottomData.link);
        }
      }
      function Si(n, o) {
        if (
          (1 & n &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵelementStart(1, "div", 1),
            e.ɵɵelement(2, "span", 2),
            e.ɵɵtemplate(3, wi, 5, 2, "ng-container", 0),
            e.ɵɵelementEnd(),
            e.ɵɵelementContainerEnd()),
          2 & n)
        ) {
          const t = e.ɵɵnextContext();
          e.ɵɵadvance(2),
            e.ɵɵproperty("innerHtml", t.data.text, e.ɵɵsanitizeHtml),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", t.data.bottomData);
        }
      }
      let Pi = (() => {
        class n {}
        return (
          (n.ɵfac = function (t) {
            return new (t || n)();
          }),
          (n.ɵcmp = e.ɵɵdefineComponent({
            type: n,
            selectors: [["order-tooltip"]],
            inputs: { data: "data" },
            decls: 1,
            vars: 1,
            consts: [
              [4, "ngIf"],
              [1, "tooltip-content"],
              [3, "innerHtml"],
              ["target", "_blank", "rel", "noopener noreferrer", 3, "href"],
            ],
            template: function (t, r) {
              1 & t && e.ɵɵtemplate(0, Si, 4, 2, "ng-container", 0),
                2 & t && e.ɵɵproperty("ngIf", r.data);
            },
            dependencies: [c.O5],
            styles: [
              "[_nghost-%COMP%]{display:block}.tooltip-content[_ngcontent-%COMP%]{max-width:284px}  .red-text{color:var(--1inch__text-and-icons__error)}  .grey-text{color:var(--1inch__ui-02)}a[_ngcontent-%COMP%]:hover{text-decoration:none}",
            ],
            changeDetection: 0,
          })),
          n
        );
      })();
      function bi(n, o) {
        1 & n &&
          (e.ɵɵelementContainerStart(0),
          e.ɵɵtext(1, " N/A\n"),
          e.ɵɵelementContainerEnd());
      }
      function Mi(n, o) {
        if ((1 & n && e.ɵɵelement(0, "token-amount", 2), 2 & n)) {
          const t = e.ɵɵnextContext();
          e.ɵɵproperty("value", t.value)("decimals", t.decimals);
        }
      }
      class Ce {
        constructor() {
          this.isUnknown = !1;
        }
      }
      (Ce.ɵfac = function (o) {
        return new (o || Ce)();
      }),
        (Ce.ɵcmp = e.ɵɵdefineComponent({
          type: Ce,
          selectors: [["order-token-amount"]],
          inputs: {
            value: "value",
            decimals: "decimals",
            isUnknown: "isUnknown",
          },
          decls: 3,
          vars: 2,
          consts: [
            [4, "ngIf", "ngIfElse"],
            ["tokenAmount", ""],
            [3, "value", "decimals"],
          ],
          template: function (o, t) {
            if (
              (1 & o &&
                (e.ɵɵtemplate(0, bi, 2, 0, "ng-container", 0),
                e.ɵɵtemplate(
                  1,
                  Mi,
                  1,
                  2,
                  "ng-template",
                  null,
                  1,
                  e.ɵɵtemplateRefExtractor
                )),
              2 & o)
            ) {
              const r = e.ɵɵreference(2);
              e.ɵɵproperty("ngIf", t.isUnknown)("ngIfElse", r);
            }
          },
          dependencies: [c.O5, Ut.O],
          changeDetection: 0,
        })),
        (0, we.__decorate)([(0, Se.TH)()], Ce.prototype, "isUnknown", void 0);
      var Ii = i(66654);
      let Li = (() => {
        class n {
          constructor(t) {
            this.tokensQuery = t;
          }
          transform(t) {
            return this.tokensQuery.getByAddress(t.toLowerCase());
          }
        }
        return (
          (n.ɵfac = function (t) {
            return new (t || n)(e.ɵɵdirectiveInject(Ee.d, 16));
          }),
          (n.ɵpipe = e.ɵɵdefinePipe({
            name: "tokenByAddress",
            type: n,
            pure: !0,
          })),
          n
        );
      })();
      var Ai = i(83140);
      function Ei(n, o) {
        if (1 & n) {
          const t = e.ɵɵgetCurrentView();
          e.ɵɵelementContainerStart(0),
            e.ɵɵelementStart(1, "a", 22),
            e.ɵɵlistener("click", function (a) {
              e.ɵɵrestoreView(t);
              const s = e.ɵɵnextContext();
              return e.ɵɵresetView(s.copyOrderHashOrFill(a));
            }),
            e.ɵɵtext(2, "#"),
            e.ɵɵelementEnd(),
            e.ɵɵelementContainerEnd();
        }
      }
      function $i(n, o) {
        1 & n &&
          (e.ɵɵelementContainerStart(0),
          e.ɵɵtext(1, " N/A "),
          e.ɵɵelementContainerEnd());
      }
      function Bi(n, o) {
        if (
          (1 & n &&
            (e.ɵɵelementStart(0, "div", 8)(1, "span", 23),
            e.ɵɵtext(2, "Order Rates"),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(3, "span"),
            e.ɵɵtext(4, ":"),
            e.ɵɵelementEnd()(),
            e.ɵɵelementStart(5, "div", 24)(6, "span"),
            e.ɵɵtext(7),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(8, "span", 25),
            e.ɵɵtext(9, "\xa0"),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(10, "div", 26),
            e.ɵɵelement(11, "token-amount", 27),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(12, "span", 25),
            e.ɵɵtext(13, "\xa0"),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(14, "span"),
            e.ɵɵtext(15),
            e.ɵɵelementEnd()(),
            e.ɵɵelementStart(16, "div", 28)(17, "span"),
            e.ɵɵtext(18),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(19, "span", 25),
            e.ɵɵtext(20, "\xa0"),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(21, "div", 26),
            e.ɵɵelement(22, "token-amount", 27),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(23, "span", 25),
            e.ɵɵtext(24, "\xa0"),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(25, "span"),
            e.ɵɵtext(26),
            e.ɵɵelementEnd()()),
          2 & n)
        ) {
          const t = e.ɵɵnextContext();
          e.ɵɵadvance(5),
            e.ɵɵattribute("data-rate", t.order.rate),
            e.ɵɵadvance(2),
            e.ɵɵtextInterpolate1("1 ", t.takerAsset.symbol, " = "),
            e.ɵɵadvance(4),
            e.ɵɵproperty("value", t.order.rate)("decimals", t.rateDecimals),
            e.ɵɵadvance(4),
            e.ɵɵtextInterpolate1(" ", t.order.fromTokenSymbol, ""),
            e.ɵɵadvance(1),
            e.ɵɵattribute("data-inverseRate-rate", t.order.inverseRate),
            e.ɵɵadvance(2),
            e.ɵɵtextInterpolate1("1 ", t.order.fromTokenSymbol, " ="),
            e.ɵɵadvance(4),
            e.ɵɵproperty("value", t.order.inverseRate)(
              "decimals",
              t.rateDecimals
            ),
            e.ɵɵadvance(4),
            e.ɵɵtextInterpolate1(" ", t.takerAsset.symbol, "");
        }
      }
      function Di(n, o) {
        if ((1 & n && e.ɵɵelement(0, "tooltip", 34), 2 & n)) {
          const t = e.ɵɵnextContext().ngIf;
          e.ɵɵnextContext(2);
          const r = e.ɵɵreference(44);
          e.ɵɵproperty("tooltip", r)("contentType", t.tooltip.contentType)(
            "iconColor",
            t.tooltip.iconColor
          );
        }
      }
      function Ri(n, o) {
        if ((1 & n && e.ɵɵelement(0, "progress", 35), 2 & n)) {
          const t = e.ɵɵnextContext(3);
          e.ɵɵproperty("value", +t.order.filled);
        }
      }
      function Vi(n, o) {
        if (
          (1 & n &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵelementStart(1, "div", 30),
            e.ɵɵtemplate(2, Di, 1, 3, "tooltip", 31),
            e.ɵɵelement(3, "span", 32),
            e.ɵɵelementEnd(),
            e.ɵɵtemplate(4, Ri, 1, 1, "progress", 33),
            e.ɵɵelementContainerEnd()),
          2 & n)
        ) {
          const t = o.ngIf;
          e.ɵɵadvance(2),
            e.ɵɵproperty("ngIf", t.tooltip),
            e.ɵɵadvance(1),
            e.ɵɵproperty("innerHtml", t.title, e.ɵɵsanitizeHtml),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", t.showProgressBar);
        }
      }
      function ji(n, o) {
        if (
          (1 & n &&
            (e.ɵɵelementStart(0, "div", 29),
            e.ɵɵtemplate(1, Vi, 5, 3, "ng-container", 2),
            e.ɵɵpipe(2, "async"),
            e.ɵɵelementEnd()),
          2 & n)
        ) {
          const t = e.ɵɵnextContext();
          e.ɵɵadvance(1),
            e.ɵɵproperty(
              "ngIf",
              e.ɵɵpipeBind1(2, 1, t.activeLimitOrderStatusViewData$)
            );
        }
      }
      function Ui(n, o) {
        if (
          (1 & n &&
            (e.ɵɵelementStart(0, "div", 29)(1, "div", 30)(2, "span", 36),
            e.ɵɵtext(3),
            e.ɵɵelementEnd()(),
            e.ɵɵelement(4, "progress", 35),
            e.ɵɵelementEnd()),
          2 & n)
        ) {
          const t = e.ɵɵnextContext();
          e.ɵɵadvance(3),
            e.ɵɵtextInterpolate1("", t.filled, "%"),
            e.ɵɵadvance(1),
            e.ɵɵproperty("value", +t.order.filled);
        }
      }
      function Fi(n, o) {
        if (
          (1 & n &&
            (e.ɵɵelementStart(0, "div", 37),
            e.ɵɵelement(1, "limit-order-complete-status", 38),
            e.ɵɵelementEnd()),
          2 & n)
        ) {
          const t = e.ɵɵnextContext();
          e.ɵɵproperty("title", t.order.rawOrder.orderHash),
            e.ɵɵadvance(1),
            e.ɵɵproperty("completeStatus", t.order.rawOrder.completeStatus);
        }
      }
      function Ni(n, o) {
        if (1 & n) {
          const t = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "button", 39),
            e.ɵɵlistener("click", function () {
              e.ɵɵrestoreView(t);
              const a = e.ɵɵnextContext();
              return e.ɵɵresetView(a.onCancelOrder.next(a.order));
            }),
            e.ɵɵnamespaceSVG(),
            e.ɵɵelementStart(1, "svg", 40),
            e.ɵɵelement(2, "use", 41),
            e.ɵɵelementEnd()();
        }
      }
      function Qi(n, o) {
        if (
          (1 & n &&
            (e.ɵɵelementStart(0, "div", 42)(1, "div", 8)(2, "span", 43),
            e.ɵɵtext(3, "You Sell"),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(4, "span"),
            e.ɵɵtext(5, ":"),
            e.ɵɵelementEnd()(),
            e.ɵɵelement(6, "token-icon", 44),
            e.ɵɵpipe(7, "tokenByAddress"),
            e.ɵɵelementStart(8, "span", 45)(9, "a", 46),
            e.ɵɵpipe(10, "async"),
            e.ɵɵpipe(11, "chainExplorerAddressLink"),
            e.ɵɵtext(12),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(13, "div", 47)(14, "div", 48),
            e.ɵɵelement(15, "order-token-amount", 49),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(16, "div", 50),
            e.ɵɵelement(17, "order-token-amount", 49),
            e.ɵɵelementEnd()()()()),
          2 & n)
        ) {
          const t = e.ɵɵnextContext();
          e.ɵɵadvance(6),
            e.ɵɵproperty("token", e.ɵɵpipeBind1(7, 9, t.order.makerAsset)),
            e.ɵɵadvance(3),
            e.ɵɵproperty(
              "href",
              e.ɵɵpipeBind1(10, 11, e.ɵɵpipeBind1(11, 13, t.order.makerAsset)),
              e.ɵɵsanitizeUrl
            ),
            e.ɵɵadvance(3),
            e.ɵɵtextInterpolate(t.order.fromTokenSymbol),
            e.ɵɵadvance(3),
            e.ɵɵproperty("value", t.order.makerAmount)(
              "decimals",
              t.order.makerDecimals
            )("isUnknown", t.order.isMakerTokenUnknown),
            e.ɵɵadvance(2),
            e.ɵɵproperty("value", t.order.makerAmount)(
              "decimals",
              t.order.makerDecimals
            )("isUnknown", t.order.isMakerTokenUnknown);
        }
      }
      function Hi(n, o) {
        if (
          (1 & n &&
            (e.ɵɵelementStart(0, "div", 51)(1, "div", 8)(2, "span", 52),
            e.ɵɵtext(3, "You Buy"),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(4, "span"),
            e.ɵɵtext(5, ":"),
            e.ɵɵelementEnd()(),
            e.ɵɵelement(6, "token-icon", 44),
            e.ɵɵpipe(7, "tokenByAddress"),
            e.ɵɵelementStart(8, "span", 45)(9, "a", 53),
            e.ɵɵpipe(10, "async"),
            e.ɵɵpipe(11, "chainExplorerAddressLink"),
            e.ɵɵtext(12),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(13, "div", 54)(14, "span", 48),
            e.ɵɵelement(15, "order-token-amount", 49),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(16, "div", 50),
            e.ɵɵelement(17, "order-token-amount", 49),
            e.ɵɵelementEnd()()()()),
          2 & n)
        ) {
          const t = e.ɵɵnextContext();
          e.ɵɵadvance(6),
            e.ɵɵproperty("token", e.ɵɵpipeBind1(7, 9, t.order.takerAsset)),
            e.ɵɵadvance(3),
            e.ɵɵproperty(
              "href",
              e.ɵɵpipeBind1(10, 11, e.ɵɵpipeBind1(11, 13, t.order.takerAsset)),
              e.ɵɵsanitizeUrl
            ),
            e.ɵɵadvance(3),
            e.ɵɵtextInterpolate(t.order.toTokenSymbol),
            e.ɵɵadvance(3),
            e.ɵɵproperty("value", t.order.takerAmount)(
              "decimals",
              t.order.takerDecimals
            )("isUnknown", t.order.isTakerTokenUnknown),
            e.ɵɵadvance(2),
            e.ɵɵproperty("value", t.order.takerAmount)(
              "decimals",
              t.order.takerDecimals
            )("isUnknown", t.order.isTakerTokenUnknown);
        }
      }
      function Wi(n, o) {
        1 & n &&
          (e.ɵɵelementStart(0, "span"),
          e.ɵɵtext(1),
          e.ɵɵpipe(2, "transloco"),
          e.ɵɵelementEnd()),
          2 & n &&
            (e.ɵɵadvance(1),
            e.ɵɵtextInterpolate(
              e.ɵɵpipeBind1(
                2,
                1,
                "order-status-tooltip.recommend-cancel-unknown-order"
              )
            ));
      }
      function zi(n, o) {
        if (
          (1 & n &&
            (e.ɵɵelement(0, "span", 55), e.ɵɵtemplate(1, Wi, 3, 3, "span", 2)),
          2 & n)
        ) {
          const t = e.ɵɵnextContext();
          e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", void 0 === t.order.rawOrder.completeStatus);
        }
      }
      function Ki(n, o) {
        if (
          (1 & n && (e.ɵɵelement(0, "order-tooltip", 56), e.ɵɵpipe(1, "async")),
          2 & n)
        ) {
          const t = e.ɵɵnextContext();
          e.ɵɵproperty(
            "data",
            e.ɵɵpipeBind1(1, 1, t.activeLimitOrderStatusViewData$).tooltip
          );
        }
      }
      function Ft(n) {
        var o;
        return !(null === (o = n.rawOrder) || void 0 === o || !o.orderHash);
      }
      let Gi = (() => {
        class n extends ie {
          constructor(t, r, a, s, p, l, m, d) {
            super(t, r, a, m, d),
              (this.activeConnectionQuery = t),
              (this.contractAddressQuery = r),
              (this.tokensQuery = a),
              (this.clipboardService = s),
              (this.limitOrderService = p),
              (this.walletConnectionQuery = l),
              (this.ordersStatusQuery = m),
              (this.translocoService = d),
              (this.onCancelOrder = new e.EventEmitter()),
              (this.showOrderHash$ = this.walletConnectionQuery.isDevMode$.pipe(
                (0, u.U)((x) => Ft(this.order) && x)
              ));
          }
          copyOrderHashOrFill(t) {
            if (!Ft(this.order)) return;
            const { orderHash: r } = this.order.rawOrder;
            if (t.ctrlKey || t.metaKey) {
              const a = prompt("OrderHash: ", r) || "",
                s = +(prompt("Input maker amount: ", "0") || ""),
                p = +(prompt("Input taker amount: ", "0") || ""),
                l = +(prompt("thresholdAmount: ", "0") || "");
              return s || p || l
                ? void this.limitOrderService.fillOrder(a, s, p, l).subscribe(
                    (m) => {
                      (0, ke.H)("Order fill tx: ", m);
                    },
                    (m) => {
                      Ai.error("Order filling error", m);
                    }
                  )
                : void alert("Wrong fill inputs!");
            }
            this.clipboardService.copy(r);
          }
        }
        return (
          (n.ɵfac = function (t) {
            return new (t || n)(
              e.ɵɵdirectiveInject(j.r),
              e.ɵɵdirectiveInject(Rt.O),
              e.ɵɵdirectiveInject(Ee.d),
              e.ɵɵdirectiveInject(Oi.Yv),
              e.ɵɵdirectiveInject(nt.s),
              e.ɵɵdirectiveInject(Ve.r),
              e.ɵɵdirectiveInject(Vt.R),
              e.ɵɵdirectiveInject(g.Vn)
            );
          }),
          (n.ɵcmp = e.ɵɵdefineComponent({
            type: n,
            selectors: [["limit-order-list-row"]],
            outputs: { onCancelOrder: "onCancelOrder" },
            features: [e.ɵɵInheritDefinitionFeature],
            decls: 45,
            vars: 35,
            consts: [
              [1, "row-wrap"],
              [1, "row-content"],
              [4, "ngIf"],
              [
                "direction",
                "top",
                "contentType",
                "custom",
                1,
                "row-maker-tooltip",
                3,
                "tooltip",
                "customElement",
              ],
              [1, "row-rates"],
              [4, "ngIf", "ngIfElse"],
              ["correctRate", ""],
              ["data-id", "expiration", 1, "row-dates"],
              [1, "row-token-column-title"],
              ["transloco", "orderList.created"],
              ["transloco", "orderList.expiration"],
              ["data-id", "create-date"],
              ["data-id", "create-time", 1, "row-dates-time"],
              ["data-id", "expiration-date"],
              ["data-id", "expiration-time", 1, "row-dates-time"],
              ["class", "row-dates row-dates__status-cell", 4, "ngIf"],
              ["class", "row-order-status", 3, "title", 4, "ngIf"],
              [
                "class",
                "blank-button cancel-button",
                "data-id",
                "cancel-order",
                3,
                "click",
                4,
                "ngIf",
              ],
              ["makerAssetToken", ""],
              ["takerAssetToken", ""],
              ["unknownTokenTooltip", ""],
              ["tooltip", ""],
              [1, "order-hash", 3, "click"],
              ["transloco", "orderList.order-rates2"],
              ["data-id", "dst-to-src-rate", 1, "row__rate"],
              [1, "space-separator"],
              [1, "row-rates-amount"],
              [3, "value", "decimals"],
              ["data-id", "src-to-dst-rate", 1, "row__rate"],
              [1, "row-dates", "row-dates__status-cell"],
              [1, "row-dates-filled"],
              [
                "direction",
                "top",
                "class",
                "limit-order-row-tooltip",
                3,
                "tooltip",
                "contentType",
                "iconColor",
                4,
                "ngIf",
              ],
              ["data-id", "filled-value", 1, "row-filled", 3, "innerHtml"],
              [
                "tuiProgressBar",
                "",
                "class",
                "row-filled-progress",
                "max",
                "100",
                "color",
                "var(--1inch-common-text-03)",
                3,
                "value",
                4,
                "ngIf",
              ],
              [
                "direction",
                "top",
                1,
                "limit-order-row-tooltip",
                3,
                "tooltip",
                "contentType",
                "iconColor",
              ],
              [
                "tuiProgressBar",
                "",
                "max",
                "100",
                "color",
                "var(--1inch-common-text-03)",
                1,
                "row-filled-progress",
                3,
                "value",
              ],
              ["data-id", "filled-value", 1, "row-filled"],
              [1, "row-order-status", 3, "title"],
              [3, "completeStatus"],
              [
                "data-id",
                "cancel-order",
                1,
                "blank-button",
                "cancel-button",
                3,
                "click",
              ],
              ["width", "16", "height", "16"],
              [0, "xlink", "href", "assets/images/icons/cross.svg#cross"],
              ["data-id", "src-token", 1, "row-token-column"],
              ["transloco", "orderList.you-sell2"],
              [1, "row-token-column-icon", 3, "token"],
              [1, "row-token-column-info"],
              [
                "target",
                "_blank",
                "rel",
                "noopener noreferrer",
                "data-id",
                "src-token-symbol",
                1,
                "row-token-column-symbol",
                3,
                "href",
              ],
              ["data-id", "src-token-count", 1, "row-token-column-amount"],
              [1, "row-token-column-amount-desktop"],
              [3, "value", "decimals", "isUnknown"],
              [1, "row-token-column-amount-mobile"],
              ["data-id", "dst-token", 1, "row-token-column"],
              ["transloco", "orderList.you-buy2"],
              [
                "target",
                "_blank",
                "rel",
                "noopener noreferrer",
                "data-id",
                "dst-token-symbol",
                1,
                "row-token-column-symbol",
                3,
                "href",
              ],
              ["data-id", "dst-token-count", 1, "row-token-column-amount"],
              ["transloco", "order-status-tooltip.unknown-token"],
              [3, "data"],
            ],
            template: function (t, r) {
              if (
                (1 & t &&
                  (e.ɵɵelementStart(0, "div", 0),
                  e.ɵɵpipe(1, "async"),
                  e.ɵɵpipe(2, "async"),
                  e.ɵɵpipe(3, "async"),
                  e.ɵɵelementStart(4, "div", 1),
                  e.ɵɵtemplate(5, Ei, 3, 0, "ng-container", 2),
                  e.ɵɵpipe(6, "async"),
                  e.ɵɵelement(7, "tooltip", 3)(8, "tooltip", 3),
                  e.ɵɵelementStart(9, "div", 4),
                  e.ɵɵtemplate(10, $i, 2, 0, "ng-container", 5),
                  e.ɵɵtemplate(
                    11,
                    Bi,
                    27,
                    10,
                    "ng-template",
                    null,
                    6,
                    e.ɵɵtemplateRefExtractor
                  ),
                  e.ɵɵelementEnd(),
                  e.ɵɵelementStart(13, "div", 7)(14, "div", 8)(15, "span", 9),
                  e.ɵɵtext(16, "Created"),
                  e.ɵɵelementEnd(),
                  e.ɵɵelementStart(17, "span"),
                  e.ɵɵtext(18, "/"),
                  e.ɵɵelementEnd(),
                  e.ɵɵelementStart(19, "span", 10),
                  e.ɵɵtext(20, "Expiration"),
                  e.ɵɵelementEnd(),
                  e.ɵɵelementStart(21, "span"),
                  e.ɵɵtext(22, ":"),
                  e.ɵɵelementEnd()(),
                  e.ɵɵelementStart(23, "div")(24, "span", 11),
                  e.ɵɵtext(25),
                  e.ɵɵelementEnd(),
                  e.ɵɵelementStart(26, "span", 12),
                  e.ɵɵtext(27),
                  e.ɵɵelementEnd()(),
                  e.ɵɵelementStart(28, "div")(29, "span", 13),
                  e.ɵɵtext(30),
                  e.ɵɵelementEnd(),
                  e.ɵɵelementStart(31, "span", 14),
                  e.ɵɵtext(32),
                  e.ɵɵelementEnd()()(),
                  e.ɵɵtemplate(33, ji, 3, 3, "div", 15),
                  e.ɵɵtemplate(34, Ui, 5, 2, "div", 15),
                  e.ɵɵtemplate(35, Fi, 2, 2, "div", 16),
                  e.ɵɵelementEnd(),
                  e.ɵɵtemplate(36, Ni, 3, 0, "button", 17),
                  e.ɵɵelementEnd(),
                  e.ɵɵtemplate(
                    37,
                    Qi,
                    18,
                    15,
                    "ng-template",
                    null,
                    18,
                    e.ɵɵtemplateRefExtractor
                  ),
                  e.ɵɵtemplate(
                    39,
                    Hi,
                    18,
                    15,
                    "ng-template",
                    null,
                    19,
                    e.ɵɵtemplateRefExtractor
                  ),
                  e.ɵɵtemplate(
                    41,
                    zi,
                    2,
                    1,
                    "ng-template",
                    null,
                    20,
                    e.ɵɵtemplateRefExtractor
                  ),
                  e.ɵɵtemplate(
                    43,
                    Ki,
                    2,
                    3,
                    "ng-template",
                    null,
                    21,
                    e.ɵɵtemplateRefExtractor
                  )),
                2 & t)
              ) {
                const a = e.ɵɵreference(12),
                  s = e.ɵɵreference(38),
                  p = e.ɵɵreference(40),
                  l = e.ɵɵreference(42);
                e.ɵɵclassProp(
                  "row-wrap_history",
                  void 0 !== r.order.rawOrder.completeStatus
                )(
                  "deleted",
                  void 0 === r.order.rawOrder.completeStatus &&
                    r.order.rawOrder.deletedAt
                )("not-published", r.order.rawOrder.notSaved)(
                  "warning",
                  e.ɵɵpipeBind1(1, 27, r.isWarning$)
                )("unknown", e.ɵɵpipeBind1(2, 29, r.isUnknown$))(
                  "error",
                  e.ɵɵpipeBind1(3, 31, r.isBad$)
                ),
                  e.ɵɵadvance(5),
                  e.ɵɵproperty("ngIf", e.ɵɵpipeBind1(6, 33, r.showOrderHash$)),
                  e.ɵɵadvance(2),
                  e.ɵɵproperty(
                    "tooltip",
                    r.order.isMakerTokenUnknown ? l : void 0
                  )("customElement", s),
                  e.ɵɵadvance(1),
                  e.ɵɵproperty(
                    "tooltip",
                    r.order.isTakerTokenUnknown ? l : void 0
                  )("customElement", p),
                  e.ɵɵadvance(2),
                  e.ɵɵproperty(
                    "ngIf",
                    r.order.isTakerTokenUnknown || r.order.isMakerTokenUnknown
                  )("ngIfElse", a),
                  e.ɵɵadvance(15),
                  e.ɵɵtextInterpolate(r.createDate.date),
                  e.ɵɵadvance(2),
                  e.ɵɵtextInterpolate(r.createDate.time),
                  e.ɵɵadvance(3),
                  e.ɵɵtextInterpolate(r.expireDate.date),
                  e.ɵɵadvance(2),
                  e.ɵɵtextInterpolate(r.expireDate.time),
                  e.ɵɵadvance(1),
                  e.ɵɵproperty(
                    "ngIf",
                    "active" === r.order.rawOrder.orderType ||
                      "legacy" === r.order.rawOrder.orderType
                  ),
                  e.ɵɵadvance(1),
                  e.ɵɵproperty(
                    "ngIf",
                    "history" === r.order.rawOrder.orderType
                  ),
                  e.ɵɵadvance(1),
                  e.ɵɵproperty(
                    "ngIf",
                    "active" !== r.order.rawOrder.orderType &&
                      void 0 !== r.order.rawOrder.completeStatus
                  ),
                  e.ɵɵadvance(1),
                  e.ɵɵproperty("ngIf", "active" === r.order.rawOrder.orderType);
              }
            },
            dependencies: [
              c.O5,
              g.KI,
              De.K,
              xi.o,
              Pt.iv,
              yi.D,
              Ut.O,
              Pi,
              Ce,
              c.Ov,
              g.Ot,
              Ii.E,
              Li,
            ],
            styles: [
              '.row-wrap[_ngcontent-%COMP%]{position:relative;width:100%;display:grid;grid-template-columns:1fr 16px;grid-column-gap:24px;align-items:center;background:var(--1inch-bg-23);border-radius:12px;margin-bottom:8px;padding:12px 16px}.row-wrap[_ngcontent-%COMP%]:hover{background:var(--1inch-bg-25)}.row-wrap.deleted[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:not(.cancel-button){pointer-events:none;opacity:.4}.row-wrap.unknown[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{opacity:.4}.row-wrap.not-published[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:not(.cancel-button){opacity:.4}.row-wrap.not-published[_ngcontent-%COMP%]:hover{cursor:pointer}.row-wrap.warning[_ngcontent-%COMP%], .row-wrap.error[_ngcontent-%COMP%]{position:relative;z-index:1}.row-wrap.warning[_ngcontent-%COMP%]:before, .row-wrap.warning[_ngcontent-%COMP%]:after, .row-wrap.error[_ngcontent-%COMP%]:before, .row-wrap.error[_ngcontent-%COMP%]:after{z-index:-1;content:" ";width:calc(100% - 6px);height:calc(100% + 2px);left:6px;top:-1px;position:absolute;border-radius:3px 12px 12px 3px}.row-wrap.warning[_ngcontent-%COMP%]:before, .row-wrap.error[_ngcontent-%COMP%]:before{background:var(--1inch-bg-01)}.row-wrap.warning[_ngcontent-%COMP%]{background:var(--1inch-common-bg-11)}.row-wrap.warning[_ngcontent-%COMP%]:hover:after{background:var(--1inch__background__warning)}.row-wrap.warning[_ngcontent-%COMP%]:after{background:var(--1inch__background__warning)}.row-wrap.error[_ngcontent-%COMP%]{background:var(--1inch-common-bg-10)}.row-wrap.error[_ngcontent-%COMP%]:hover:after{background:var(--1inch__background__error)}.row-wrap.error[_ngcontent-%COMP%]:after{background:var(--1inch__background__error)}.row-wrap[_ngcontent-%COMP%]   .row-content[_ngcontent-%COMP%]{width:100%;display:grid;grid-template-columns:1.4fr 1.4fr 2fr 1.7fr 140px;align-items:center;font-size:12px;line-height:14px}.row-wrap[_ngcontent-%COMP%]   .row-content[_ngcontent-%COMP%]   tooltip[_ngcontent-%COMP%]{margin-left:0}.row-wrap[_ngcontent-%COMP%]   .row-content[_ngcontent-%COMP%]   .space-separator[_ngcontent-%COMP%]{display:none}.row-wrap_history[_ngcontent-%COMP%]   .row-content[_ngcontent-%COMP%]{grid-template-columns:1.4fr 1.4fr 2.2fr 1.4fr 46px 80px}.row-wrap_history[_ngcontent-%COMP%]   .row-dates-filled[_ngcontent-%COMP%]{justify-content:center}.row-token-column[_ngcontent-%COMP%]{display:grid;grid-column-gap:8px;grid-row-gap:2px;grid-template-columns:32px 1fr}.row-token-column[_ngcontent-%COMP%]   token-icon[_ngcontent-%COMP%]{width:32px;height:32px;grid-row:1/span 2}.row-token-column-symbol[_ngcontent-%COMP%]{color:var(--1inch__ui-02)}.order-hash[_ngcontent-%COMP%]{font-size:14px;position:absolute;left:0;text-decoration:underline;font-weight:700;cursor:pointer;color:var(--1inch-text-01)}.order-hash[_ngcontent-%COMP%]:hover{text-decoration:none}.row-rates[_ngcontent-%COMP%]{display:grid;grid-row-gap:2px;line-height:16px;color:var(--1inch__ui-02)}.row-rates-amount[_ngcontent-%COMP%]{color:var(--1inch-text-01)}.row-rates[_ngcontent-%COMP%]   .row-rates-amount[_ngcontent-%COMP%]{display:inline-block}.row-filled[_ngcontent-%COMP%]{font-size:12px;line-height:14px;text-align:left;display:block}.row-filled-progress[_ngcontent-%COMP%]{max-width:150px;height:4px!important;border-radius:4px;background:var(--1inch-border-10);margin:6px 0}.row-wrap_history[_ngcontent-%COMP%]{display:block}.row-wrap_history[_ngcontent-%COMP%]   .row-filled-progress[_ngcontent-%COMP%]{width:40px;margin:0 auto}.row-wrap_history[_ngcontent-%COMP%]   .row-filled[_ngcontent-%COMP%]{text-align:center}.cancel-button[_ngcontent-%COMP%]{position:absolute;right:16px;padding:4px;border-radius:6px}.cancel-button[_ngcontent-%COMP%]:hover{background-color:var(--1inch__background__error)}.cancel-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{color:var(--1inch__text-and-icons__error)}.row-dates[_ngcontent-%COMP%]{display:grid;grid-row-gap:2px;line-height:16px}.row-dates-time[_ngcontent-%COMP%]{margin-left:4px;color:var(--1inch__ui-02)}.row-dates-filled[_ngcontent-%COMP%]{display:flex;align-items:center}.limit-order-row-tooltip[_ngcontent-%COMP%]{margin-right:4px;margin-top:-1px}.row-token-column-title[_ngcontent-%COMP%]{display:none;font-size:12px;line-height:14px;margin-bottom:8px;color:var(--1inch__ui-02)}.row-token-column-amount[_ngcontent-%COMP%]{margin-top:2px}.row-token-column-amount-mobile[_ngcontent-%COMP%]{display:none}.row-order-status[_ngcontent-%COMP%]{display:flex;justify-content:center}@media (max-width: 1280px){.row-wrap[_ngcontent-%COMP%]{display:block;border-radius:8px;padding:12px;font-size:13px;background:var(--1inch-bg-02);margin-bottom:12px}.row-wrap[_ngcontent-%COMP%]   .row-content[_ngcontent-%COMP%]{width:100%;display:grid;grid-template-columns:1fr 1fr;grid-column-gap:16px;grid-row-gap:24px;align-items:start;font-size:13px;line-height:15px}.row-wrap[_ngcontent-%COMP%]   .row-content[_ngcontent-%COMP%]   .space-separator[_ngcontent-%COMP%]{display:inline}.row-wrap[_ngcontent-%COMP%]   .row-content[_ngcontent-%COMP%]   tooltip[_ngcontent-%COMP%]{margin-left:0}.row-wrap[_ngcontent-%COMP%]   .row-content[_ngcontent-%COMP%] > tooltip[_ngcontent-%COMP%]:nth-child(1){position:relative}.row-wrap[_ngcontent-%COMP%]   .row-content[_ngcontent-%COMP%] > tooltip[_ngcontent-%COMP%]:nth-child(1):after{content:" ";position:absolute;height:1px;width:calc(200% + 16px);left:0;bottom:-12px;background:var(--1inch-border-01)}.row-wrap[_ngcontent-%COMP%]   .row-rates[_ngcontent-%COMP%]{position:relative}.row-wrap[_ngcontent-%COMP%]   .row-rates[_ngcontent-%COMP%]:after{content:" ";position:absolute;height:1px;width:calc(200% + 16px);left:0;bottom:-12px;background:var(--1inch-border-01)}.row-wrap.warning[_ngcontent-%COMP%]:before, .row-wrap.warning[_ngcontent-%COMP%]:after, .row-wrap.error[_ngcontent-%COMP%]:before, .row-wrap.error[_ngcontent-%COMP%]:after{content:none}.row-wrap.warning[_ngcontent-%COMP%]{background:var(--1inch__background__warning)}.row-wrap.warning[_ngcontent-%COMP%]   .row-content[_ngcontent-%COMP%] > tooltip[_ngcontent-%COMP%]:nth-child(1):after, .row-wrap.warning[_ngcontent-%COMP%]   .row-content[_ngcontent-%COMP%]   .row-rates[_ngcontent-%COMP%]:after{background:var(--1inch__background__warning)}.row-wrap.error[_ngcontent-%COMP%]{background:var(--1inch__background__error)}.row-wrap.error[_ngcontent-%COMP%]   .row-content[_ngcontent-%COMP%] > tooltip[_ngcontent-%COMP%]:nth-child(1):after, .row-wrap.error[_ngcontent-%COMP%]   .row-content[_ngcontent-%COMP%]   .row-rates[_ngcontent-%COMP%]:after{background:var(--1inch__background__error)}.row-dates__status-cell[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;grid-column-gap:16px;grid-column:1/3;align-items:center}.cancel-button[_ngcontent-%COMP%]{right:8px;top:8px}.row-token-column[_ngcontent-%COMP%]{display:block}.row-token-column[_ngcontent-%COMP%]   token-icon[_ngcontent-%COMP%]{width:16px;height:16px;vertical-align:middle}.row-token-column-info[_ngcontent-%COMP%]{vertical-align:middle}.row-token-column-icon[_ngcontent-%COMP%]{margin-right:8px}.row-token-column-symbol[_ngcontent-%COMP%]{font-size:13px;line-height:15px;text-decoration:none;margin-right:4px;color:var(--1inch-text-01)}.row-token-column-amount[_ngcontent-%COMP%]{margin-top:0;display:inline}.row-tokens-arrow[_ngcontent-%COMP%]{display:none}.row-maker-tooltip[_ngcontent-%COMP%]{margin-left:0}.row-token-column-title[_ngcontent-%COMP%]{display:block}.row-token-column-amount-desktop[_ngcontent-%COMP%]{display:none}.row-token-column-amount-mobile[_ngcontent-%COMP%]{display:inline-block}.row-token-column-filled-text[_ngcontent-%COMP%]{display:flex;align-items:center}.row-filled[_ngcontent-%COMP%]{font-size:13px;line-height:15px;margin-bottom:0;width:auto;text-align:inherit;display:inline;order:1}.row-filled-progress[_ngcontent-%COMP%]{margin:0 8px 0 0}.row-order-status[_ngcontent-%COMP%]{justify-content:start}}@media (min-width: 1346px){.row-wrap[_ngcontent-%COMP%]   .row-content[_ngcontent-%COMP%]{grid-row-gap:24px}.row-wrap[_ngcontent-%COMP%]   .row-content[_ngcontent-%COMP%]   .space-separator[_ngcontent-%COMP%]{display:inline}}@media (max-width: 600px){.row-wrap[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr}.row-token-column-icon[_ngcontent-%COMP%]{display:none}}',
            ],
            changeDetection: 0,
          })),
          n
        );
      })();
      function Xi(n, o) {
        if (1 & n) {
          const t = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "div", 2),
            e.ɵɵelement(1, "span", 3),
            e.ɵɵpipe(2, "transloco"),
            e.ɵɵelementStart(3, "simple-button", 4),
            e.ɵɵlistener("click", function () {
              e.ɵɵrestoreView(t);
              const a = e.ɵɵnextContext();
              return e.ɵɵresetView(a.openConnectWallet());
            }),
            e.ɵɵelementStart(4, "span", 5),
            e.ɵɵtext(5, "Connect wallet"),
            e.ɵɵelementEnd()()();
        }
        if (2 & n) {
          const t = e.ɵɵnextContext();
          e.ɵɵadvance(1),
            e.ɵɵproperty(
              "innerText",
              e.ɵɵpipeBind1(
                2,
                1,
                "history" !== t.mode
                  ? "orderList.active-orders-not-available"
                  : "orderList.order-history-not-available"
              )
            );
        }
      }
      function Ji(n, o) {
        if (
          (1 & n &&
            (e.ɵɵelementStart(0, "div", 2),
            e.ɵɵelement(1, "span", 8),
            e.ɵɵpipe(2, "transloco"),
            e.ɵɵelement(3, "loading-indicator", 9),
            e.ɵɵelementEnd()),
          2 & n)
        ) {
          const t = e.ɵɵnextContext(2);
          e.ɵɵadvance(1),
            e.ɵɵproperty(
              "innerText",
              e.ɵɵpipeBind1(
                2,
                3,
                "history" !== t.mode
                  ? "orderList.active-orders-loading"
                  : "orderList.order-history-loading"
              )
            ),
            e.ɵɵadvance(2),
            e.ɵɵproperty("width", 40)("height", 40);
        }
      }
      function Zi(n, o) {
        1 & n &&
          (e.ɵɵnamespaceSVG(),
          e.ɵɵnamespaceHTML(),
          e.ɵɵelementStart(0, "span", 28),
          e.ɵɵtext(1, "Filled"),
          e.ɵɵelementEnd());
      }
      function Yi(n, o) {
        if (1 & n) {
          const t = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "limit-order-list-row", 29),
            e.ɵɵlistener("onCancelOrder", function (a) {
              e.ɵɵrestoreView(t);
              const s = e.ɵɵnextContext(4);
              return e.ɵɵresetView(s.cancelOrder(a));
            }),
            e.ɵɵelementEnd();
        }
        if (2 & n) {
          const t = o.$implicit;
          e.ɵɵproperty("order", t),
            e.ɵɵattribute("data-order-hash", t.rawOrder.orderHash);
        }
      }
      function qi(n, o) {
        if (1 & n) {
          const t = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "limit-order-list-card", 29),
            e.ɵɵlistener("onCancelOrder", function (a) {
              e.ɵɵrestoreView(t);
              const s = e.ɵɵnextContext(4);
              return e.ɵɵresetView(s.cancelOrder(a));
            }),
            e.ɵɵelementEnd();
        }
        2 & n && e.ɵɵproperty("order", o.$implicit);
      }
      function eo(n, o) {
        if (1 & n) {
          const t = e.ɵɵgetCurrentView();
          e.ɵɵelementContainerStart(0),
            e.ɵɵelementStart(1, "div", 12)(2, "span", 13),
            e.ɵɵtext(3, "You sell"),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(4, "span", 14),
            e.ɵɵtext(5, "You buy"),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(6, "span", 15),
            e.ɵɵtext(7, "Order rates"),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(8, "div", 16)(9, "button", 17),
            e.ɵɵlistener("click", function () {
              e.ɵɵrestoreView(t);
              const a = e.ɵɵnextContext(3);
              return e.ɵɵresetView(a.updateSort(!0));
            }),
            e.ɵɵpipe(10, "async"),
            e.ɵɵelementStart(11, "span", 18),
            e.ɵɵtext(12, "Created"),
            e.ɵɵelementEnd()(),
            e.ɵɵelementStart(13, "span"),
            e.ɵɵtext(14, "/"),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(15, "button", 17),
            e.ɵɵlistener("click", function () {
              e.ɵɵrestoreView(t);
              const a = e.ɵɵnextContext(3);
              return e.ɵɵresetView(a.updateSort(!1));
            }),
            e.ɵɵpipe(16, "async"),
            e.ɵɵelementStart(17, "span", 19),
            e.ɵɵtext(18, "Expiration"),
            e.ɵɵelementEnd()(),
            e.ɵɵelementStart(19, "button", 20),
            e.ɵɵlistener("click", function () {
              e.ɵɵrestoreView(t);
              const a = e.ɵɵnextContext(3);
              return e.ɵɵresetView(a.toggleSortDirection());
            }),
            e.ɵɵpipe(20, "async"),
            e.ɵɵnamespaceSVG(),
            e.ɵɵelementStart(21, "svg", 21),
            e.ɵɵelement(22, "use", 22),
            e.ɵɵelementEnd()()(),
            e.ɵɵtemplate(23, Zi, 2, 0, "span", 23),
            e.ɵɵnamespaceHTML(),
            e.ɵɵelementStart(24, "span", 24),
            e.ɵɵtext(25, "Status"),
            e.ɵɵelementEnd()(),
            e.ɵɵelementStart(26, "div", 25),
            e.ɵɵtemplate(27, Yi, 1, 2, "limit-order-list-row", 26),
            e.ɵɵpipe(28, "async"),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(29, "div", 27),
            e.ɵɵtemplate(30, qi, 1, 1, "limit-order-list-card", 26),
            e.ɵɵpipe(31, "async"),
            e.ɵɵelementEnd(),
            e.ɵɵelementContainerEnd();
        }
        if (2 & n) {
          const t = e.ɵɵnextContext(3);
          e.ɵɵadvance(1),
            e.ɵɵclassProp(
              "limit-order-list-header_history",
              "history" === t.mode
            ),
            e.ɵɵadvance(8),
            e.ɵɵclassProp(
              "not-active",
              !e.ɵɵpipeBind1(10, 13, t.sortByCreationTime$)
            ),
            e.ɵɵadvance(6),
            e.ɵɵclassProp(
              "not-active",
              e.ɵɵpipeBind1(16, 15, t.sortByCreationTime$)
            ),
            e.ɵɵadvance(4),
            e.ɵɵclassProp(
              "turned",
              !e.ɵɵpipeBind1(20, 17, t.isDescendingOrder$)
            ),
            e.ɵɵadvance(4),
            e.ɵɵproperty("ngIf", "history" === t.mode),
            e.ɵɵadvance(4),
            e.ɵɵproperty(
              "ngForOf",
              e.ɵɵpipeBind1(28, 19, t.consecutiveOrders$)
            )("ngForTrackBy", t.trackByOrderHash),
            e.ɵɵadvance(3),
            e.ɵɵproperty(
              "ngForOf",
              e.ɵɵpipeBind1(31, 21, t.consecutiveOrders$)
            )("ngForTrackBy", t.trackByOrderHash);
        }
      }
      function to(n, o) {
        1 & n && (e.ɵɵelement(0, "span", 31), e.ɵɵpipe(1, "transloco")),
          2 & n &&
            e.ɵɵproperty(
              "innerText",
              e.ɵɵpipeBind1(1, 1, "orderList.still-cancel-active-orders")
            );
      }
      function no(n, o) {
        if (
          (1 & n &&
            (e.ɵɵelementStart(0, "div", 2),
            e.ɵɵelement(1, "span", 3),
            e.ɵɵpipe(2, "transloco"),
            e.ɵɵtemplate(3, to, 2, 3, "span", 30),
            e.ɵɵelementEnd()),
          2 & n)
        ) {
          const t = e.ɵɵnextContext(3);
          e.ɵɵadvance(1),
            e.ɵɵproperty(
              "innerText",
              e.ɵɵpipeBind1(
                2,
                2,
                "history" !== t.mode
                  ? "orderList.cant-find-any-active-orders"
                  : "orderList.cant-find-any-filled-orders"
              )
            ),
            e.ɵɵadvance(2),
            e.ɵɵproperty("ngIf", "history" !== t.mode);
        }
      }
      function ro(n, o) {
        if (1 & n) {
          const t = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "button", 32),
            e.ɵɵlistener("click", function () {
              e.ɵɵrestoreView(t);
              const a = e.ɵɵnextContext(3);
              return e.ɵɵresetView(a.cancelAllOrders());
            }),
            e.ɵɵelementStart(1, "span", 33),
            e.ɵɵtext(2, "Cancel all orders"),
            e.ɵɵelementEnd()();
        }
      }
      const io = function () {
        return [10, 20, 100];
      };
      function oo(n, o) {
        if (1 & n) {
          const t = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "mat-paginator", 34),
            e.ɵɵlistener("page", function (a) {
              e.ɵɵrestoreView(t);
              const s = e.ɵɵnextContext(3);
              return e.ɵɵresetView(s.onPageSelect(a));
            }),
            e.ɵɵelementEnd();
        }
        if (2 & n) {
          const t = e.ɵɵnextContext().ngIf,
            r = e.ɵɵnextContext(2);
          e.ɵɵproperty("length", t.length)("pageSize", r.pageSize)(
            "pageSizeOptions",
            e.ɵɵpureFunction0(3, io)
          );
        }
      }
      function ao(n, o) {
        if (
          (1 & n &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵtemplate(1, eo, 32, 23, "ng-container", 7),
            e.ɵɵtemplate(2, no, 4, 4, "div", 6),
            e.ɵɵpipe(3, "async"),
            e.ɵɵtemplate(4, ro, 3, 0, "button", 10),
            e.ɵɵtemplate(5, oo, 1, 4, "mat-paginator", 11),
            e.ɵɵelementContainerEnd()),
          2 & n)
        ) {
          const t = o.ngIf,
            r = e.ɵɵnextContext(2);
          e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", t.length > 0),
            e.ɵɵadvance(1),
            e.ɵɵproperty(
              "ngIf",
              0 === t.length && !e.ɵɵpipeBind1(3, 4, r.loading$)
            ),
            e.ɵɵadvance(2),
            e.ɵɵproperty("ngIf", "history" !== r.mode),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", t.length > 10);
        }
      }
      function so(n, o) {
        if (
          (1 & n &&
            (e.ɵɵtemplate(0, Ji, 4, 5, "div", 6),
            e.ɵɵpipe(1, "async"),
            e.ɵɵpipe(2, "async"),
            e.ɵɵtemplate(3, ao, 6, 6, "ng-container", 7),
            e.ɵɵpipe(4, "async")),
          2 & n)
        ) {
          const t = e.ɵɵnextContext();
          let r;
          e.ɵɵproperty(
            "ngIf",
            e.ɵɵpipeBind1(1, 2, t.loading$) &&
              0 ===
                (null == (r = e.ɵɵpipeBind1(2, 4, t.orders$)) ? null : r.length)
          ),
            e.ɵɵadvance(3),
            e.ɵɵproperty("ngIf", e.ɵɵpipeBind1(4, 6, t.orders$));
        }
      }
      let lo = (() => {
        class n {
          constructor(t, r, a, s, p, l, m, d) {
            (this.walletConnectionQuery = t),
              (this.limitOrderListService = r),
              (this.orderListTokensService = a),
              (this.limitOrderQuery = s),
              (this.limitOrderService = p),
              (this.limitOrderContextService = l),
              (this.matDialog = m),
              (this.limitOrderStore = d),
              (this.loading$ = this.limitOrderQuery.selectLoading()),
              (this.paginationChanges$ = new X.X(void 0)),
              (this.mode$ = new pi.t(1)),
              (this.sortByCreationTime$ = new X.X(!0)),
              (this.isDescendingOrder$ = new X.X(!0)),
              (this.orders$ = this.getOrders$(re.XJ, re.UZ)),
              (this.consecutiveOrders$ = (0, $.a)([
                this.orders$,
                this.sortByCreationTime$,
                this.isDescendingOrder$,
              ]).pipe(
                (0, u.U)(([x, h, y]) => {
                  const U = this.sortOrders(x, h, y);
                  return this.paginateOrdersList(U);
                })
              )),
              (this.isWalletConnected$ =
                this.walletConnectionQuery.isWalletConnected$),
              (this.pageIndex = 0),
              (this.pageSize = 10),
              (this.persistingSchedule = null);
          }
          ngOnInit() {
            this.mode$.next(this.mode), this.addDeletedAt();
            const t = this.limitOrderContextService.context$.pipe(
              (0, f.w)((r) =>
                r
                  ? "active" === this.mode || "legacy" === this.mode
                    ? this.limitOrderListService.sharedActiveOrders$
                    : this.limitOrderListService.getPersistLimitOrders(
                        "history",
                        { page: re.XJ, limit: re.UZ }
                      )
                  : pt.C
              )
            );
            this.persistingSchedule = t.subscribe(
              (r) => {
                (0, ke.H)(
                  `Limit order list persisted:\n                    orderType=${this.mode}, entities=${r.length}`
                );
              },
              (r) => {
                (0, et.eK)(r, "Limit order persisting error");
              }
            );
          }
          ngOnDestroy() {
            this.persistingSchedule && this.persistingSchedule.unsubscribe();
          }
          trackByOrderHash(t, r) {
            return r.rawOrder.orderHash;
          }
          cancelOrder(t) {
            t.rawOrder.notSaved
              ? this.limitOrderService.removeOrder(t.rawOrder.orderHash)
              : (0, B.O)(
                  this.limitOrderService.cancelOrderByHash(
                    t.rawOrder.orderHash
                  ),
                  "cancelOrder$"
                );
          }
          cancelAllOrders() {
            (0, B.O)(
              this.limitOrderService.cancelAllOrders("legacy" === this.mode),
              "cancelAllOrders$"
            );
          }
          onPageSelect(t) {
            const { pageIndex: r, pageSize: a } = t;
            (this.pageIndex = r),
              (this.pageSize = a),
              this.paginationChanges$.next();
          }
          updateSort(t) {
            t === this.sortByCreationTime$.value && this.toggleSortDirection(),
              this.sortByCreationTime$.next(t);
          }
          toggleSortDirection() {
            this.isDescendingOrder$.next(!this.isDescendingOrder$.value);
          }
          openConnectWallet() {
            this.matDialog.open(mi.z);
          }
          getOrders$(t, r) {
            return (0, $.a)([
              this.mode$,
              this.paginationChanges$,
              this.limitOrderContextService.context$.pipe((0, Te.BX)()),
            ]).pipe(
              (0, f.w)(([a]) =>
                "history" === a
                  ? this.limitOrderQuery.getHistoryOrders$({
                      page: t,
                      limit: r,
                    })
                  : this.limitOrderQuery.getOrdersByType$(a, {
                      page: t,
                      limit: r,
                    })
              ),
              (0, f.w)((a) => {
                const s = this.orderListTokensService.getUnknownTokens(a);
                return s.length > 0
                  ? this.orderListTokensService
                      .loadUnknownTokens(s)
                      .pipe((0, u.U)(() => a))
                  : (0, de.of)(a);
              }),
              (0, f.w)((a) => {
                const s = a.map((p) => p.data);
                return this.orderListTokensService
                  .tryToLoadNotFoundTokens(s)
                  .pipe((0, u.U)(() => a));
              }),
              (0, u.U)((a) =>
                a.map((s) =>
                  (0, tt.f8)(s, this.orderListTokensService.getTokenByAddress)
                )
              ),
              (0, pe.d)({ refCount: !0, bufferSize: 1 })
            );
          }
          paginateOrdersList(t) {
            const r = this.pageIndex * this.pageSize;
            return t.slice(r, r + this.pageSize);
          }
          sortOrders(t, r, a) {
            return t.sort((s, p) => {
              const l = new Date(s.rawOrder.createDateTime).getTime(),
                m = new Date(p.rawOrder.createDateTime).getTime(),
                d = (0, tt.AS)(s.rawOrder.data.predicate).getTime(),
                x = (0, tt.AS)(p.rawOrder.data.predicate).getTime(),
                h = r ? l - m : d - x;
              return h > 0 ? (a ? -1 : 1) : h < 0 ? (a ? 1 : -1) : 0;
            });
          }
          addDeletedAt() {
            const t = localStorage.getItem(
              "limitOrderListDeletedAtFeatureFlag"
            );
            if (!ui.N.staging || !t) return;
            const r = JSON.parse(t);
            for (const a of r)
              a.orderHash &&
                this.limitOrderStore.upsert(a.orderHash, {
                  deletedAt: a.deletedAt,
                });
          }
        }
        return (
          (n.ɵfac = function (t) {
            return new (t || n)(
              e.ɵɵdirectiveInject(Ve.r),
              e.ɵɵdirectiveInject(re.Eu),
              e.ɵɵdirectiveInject(Ye.b),
              e.ɵɵdirectiveInject(_t.g),
              e.ɵɵdirectiveInject(nt.s),
              e.ɵɵdirectiveInject(vt.a),
              e.ɵɵdirectiveInject(ze.uw),
              e.ɵɵdirectiveInject(Bt.V)
            );
          }),
          (n.ɵcmp = e.ɵɵdefineComponent({
            type: n,
            selectors: [["limit-order-list"]],
            inputs: { mode: "mode" },
            decls: 4,
            vars: 4,
            consts: [
              ["class", "limit-order-list-info-wrap", 4, "ngIf", "ngIfElse"],
              ["ordersListContainer", ""],
              [1, "limit-order-list-info-wrap"],
              ["data-id", "limit-order-table.mode-info", 3, "innerText"],
              [
                "color",
                "light-blue",
                "data-id",
                "limit-order-table.connect-wallet",
                1,
                "connect-button",
                3,
                "click",
              ],
              ["transloco", "button.connect-wallet2"],
              ["class", "limit-order-list-info-wrap", 4, "ngIf"],
              [4, "ngIf"],
              [3, "innerText"],
              [1, "loading-indicator", 3, "width", "height"],
              [
                "class",
                "blank-button cancel-all-button",
                "data-id",
                "limit-order-table.cancel-all",
                3,
                "click",
                4,
                "ngIf",
              ],
              [
                "class",
                "limit-order-list-paginator",
                3,
                "length",
                "pageSize",
                "pageSizeOptions",
                "page",
                4,
                "ngIf",
              ],
              [1, "limit-order-list-header"],
              ["transloco", "orderList.you-sell2"],
              ["transloco", "orderList.you-buy2"],
              ["transloco", "orderList.order-rates2"],
              [1, "sort-buttons-wrap"],
              [1, "blank-button", "sort-button", 3, "click"],
              ["transloco", "orderList.created"],
              ["transloco", "orderList.expiration"],
              [1, "blank-button", "order-button", 3, "click"],
              ["width", "10", "height", "12"],
              [
                0,
                "xlink",
                "href",
                "assets/images/icons/arrow_small.svg#arrow_small",
              ],
              [
                "transloco",
                "orderList.filled",
                "class",
                "title-center-align",
                4,
                "ngIf",
              ],
              ["transloco", "orderList.status", 1, "title-center-align"],
              [1, "limit-order-list-desktop"],
              [
                3,
                "order",
                "onCancelOrder",
                4,
                "ngFor",
                "ngForOf",
                "ngForTrackBy",
              ],
              [1, "limit-order-list-mobile"],
              ["transloco", "orderList.filled", 1, "title-center-align"],
              [3, "order", "onCancelOrder"],
              [
                "data-id",
                "limit-order-table.mode-warning",
                "class",
                "warning-subtext",
                3,
                "innerText",
                4,
                "ngIf",
              ],
              [
                "data-id",
                "limit-order-table.mode-warning",
                1,
                "warning-subtext",
                3,
                "innerText",
              ],
              [
                "data-id",
                "limit-order-table.cancel-all",
                1,
                "blank-button",
                "cancel-all-button",
                3,
                "click",
              ],
              ["transloco", "orderList.cancel-all-orders2"],
              [
                1,
                "limit-order-list-paginator",
                3,
                "length",
                "pageSize",
                "pageSizeOptions",
                "page",
              ],
            ],
            template: function (t, r) {
              if (
                (1 & t &&
                  (e.ɵɵtemplate(0, Xi, 6, 3, "div", 0),
                  e.ɵɵpipe(1, "async"),
                  e.ɵɵtemplate(
                    2,
                    so,
                    5,
                    8,
                    "ng-template",
                    null,
                    1,
                    e.ɵɵtemplateRefExtractor
                  )),
                2 & t)
              ) {
                const a = e.ɵɵreference(3);
                e.ɵɵproperty(
                  "ngIf",
                  !e.ɵɵpipeBind1(1, 2, r.isWalletConnected$)
                )("ngIfElse", a);
              }
            },
            dependencies: [c.sg, c.O5, g.KI, St.NW, Ke.q, gi.Q, Gi, c.Ov, g.Ot],
            styles: [
              ".limit-order-list-info-wrap[_ngcontent-%COMP%]{display:grid;grid-row-gap:24px;font-weight:500;font-size:16px;line-height:26px;justify-items:center;text-align:center}.limit-order-list-info-wrap[_ngcontent-%COMP%]   .connect-button[_ngcontent-%COMP%]{width:252px}.limit-order-list-info-wrap[_ngcontent-%COMP%]   .loading-indicator[_ngcontent-%COMP%]     .loading-indicator{color:var(--1inch-common-text-03)}.limit-order-list-info-wrap[_ngcontent-%COMP%]   .loading-indicator[_ngcontent-%COMP%]     .background-circle{stroke-width:4px;stroke:var(--1inch-common-text-12)}.limit-order-list-info-wrap[_ngcontent-%COMP%]   .loading-indicator[_ngcontent-%COMP%]     .loading-circle{stroke-width:4px}.limit-order-list-info-wrap[_ngcontent-%COMP%]   .warning-subtext[_ngcontent-%COMP%]{font-size:13px;line-height:15px;margin-top:-16px;width:60%;color:var(--1inch__ui-02)}.limit-order-list-header[_ngcontent-%COMP%]{display:grid;grid-template-columns:1.4fr 1.4fr 2fr 1.7fr 140px;font-size:13px;line-height:15px;margin-bottom:20px;padding:0 56px 0 16px;color:var(--1inch__ui-02)}.limit-order-list-header_history[_ngcontent-%COMP%]{padding:0 16px;grid-template-columns:1.4fr 1.4fr 2.2fr 1.4fr 46px 80px}.limit-order-list-header_history[_ngcontent-%COMP%]   .title-center-align[_ngcontent-%COMP%]{text-align:center}.cancel-all-button[_ngcontent-%COMP%]{display:grid;padding:11px 58px;margin:24px auto;border-radius:12px;background:var(--1inch__background__error);color:var(--1inch__text-and-icons__error)}.cancel-all-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:500;font-size:16px;line-height:26px}.cancel-all-button[_ngcontent-%COMP%]:hover{background:var(--1inch__background__error-hover)}.sort-buttons-wrap[_ngcontent-%COMP%]{display:flex;align-items:center}.sort-buttons-wrap[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{color:var(--1inch__ui-02)}.sort-buttons-wrap[_ngcontent-%COMP%]   .sort-button[_ngcontent-%COMP%]{margin:0 2px}.sort-buttons-wrap[_ngcontent-%COMP%]   .sort-button.not-active[_ngcontent-%COMP%]{opacity:.55}.sort-buttons-wrap[_ngcontent-%COMP%]   .sort-button[_ngcontent-%COMP%]:hover{opacity:unset;color:var(--1inch-text-01)}.sort-buttons-wrap[_ngcontent-%COMP%]   .sort-button[_ngcontent-%COMP%]:first-of-type{margin-left:0}.sort-buttons-wrap[_ngcontent-%COMP%]   .order-button[_ngcontent-%COMP%]{margin:0 2px}.sort-buttons-wrap[_ngcontent-%COMP%]   .order-button.turned[_ngcontent-%COMP%]{transform:rotate(180deg)}.sort-buttons-wrap[_ngcontent-%COMP%]   .order-button[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]{color:var(--1inch-text-01)}.limit-order-list-paginator[_ngcontent-%COMP%]{margin-top:16px}.limit-order-list-paginator[_ngcontent-%COMP%]     .mat-paginator-container{font-size:14px;justify-content:space-between;padding:0}.limit-order-list-paginator[_ngcontent-%COMP%]     .mat-paginator-page-size{align-items:center}.limit-order-list-paginator[_ngcontent-%COMP%]     .mat-paginator-page-size-select{margin:1px 0 0 12px;width:48px}.limit-order-list-paginator[_ngcontent-%COMP%]     .mat-select-trigger{font-size:14px}.limit-order-list-paginator[_ngcontent-%COMP%]     .mat-paginator-range-label{margin:2px 20px 0 0}.limit-order-list-paginator[_ngcontent-%COMP%]     .mat-icon-button{color:var(--1inch__ui-02)}.limit-order-list-paginator[_ngcontent-%COMP%]     .mat-paginator-page-size-label{margin-left:0}@media (max-width: 520px){.limit-order-list-paginator[_ngcontent-%COMP%]     .mat-paginator-container{padding:0}.limit-order-list-paginator[_ngcontent-%COMP%]     .mat-paginator-range-label{margin-right:8px}}@media (max-width: 418px){.limit-order-list-paginator[_ngcontent-%COMP%]     .mat-paginator-range-actions button{width:25px}.limit-order-list-paginator[_ngcontent-%COMP%]     .mat-paginator-container, .limit-order-list-paginator[_ngcontent-%COMP%]     .mat-select-trigger{font-size:12px}.limit-order-list-paginator[_ngcontent-%COMP%]     .mat-paginator-page-size-select{margin:2px 0 0 4px;width:40px}}@media (max-width: 1280px){.limit-order-list-header[_ngcontent-%COMP%]{display:none}.cancel-all-button[_ngcontent-%COMP%]{width:100%}}@media (max-width: 520px){.limit-order-list-info-wrap[_ngcontent-%COMP%]{margin-top:8px}.limit-order-list-info-wrap[_ngcontent-%COMP%]   .connect-button[_ngcontent-%COMP%], .limit-order-list-info-wrap[_ngcontent-%COMP%]   .warning-subtext[_ngcontent-%COMP%]{width:100%}}",
            ],
            changeDetection: 0,
          })),
          n
        );
      })();
      function po(n, o) {
        if (1 & n) {
          const t = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "alert", 16),
            e.ɵɵlistener("onCloseClick", function () {
              e.ɵɵrestoreView(t);
              const a = e.ɵɵnextContext(2);
              return e.ɵɵresetView(a.handleCloseAlert());
            }),
            e.ɵɵtext(1),
            e.ɵɵpipe(2, "transloco"),
            e.ɵɵelementStart(3, "a", 17),
            e.ɵɵtext(4),
            e.ɵɵpipe(5, "transloco"),
            e.ɵɵelementEnd()();
        }
        2 & n &&
          (e.ɵɵadvance(1),
          e.ɵɵtextInterpolate1(
            " ",
            e.ɵɵpipeBind1(2, 2, "limit-order.charts-alert.text"),
            " "
          ),
          e.ɵɵadvance(3),
          e.ɵɵtextInterpolate1(
            " ",
            e.ɵɵpipeBind1(5, 4, "limit-order.charts-alert.learn-more-link"),
            ""
          ));
      }
      function mo(n, o) {
        if (
          (1 & n &&
            (e.ɵɵelementStart(0, "div", 13),
            e.ɵɵelement(1, "trade-charts-widget", 14),
            e.ɵɵpipe(2, "async"),
            e.ɵɵtemplate(3, po, 6, 6, "alert", 15),
            e.ɵɵelementEnd()),
          2 & n)
        ) {
          const t = e.ɵɵnextContext();
          e.ɵɵadvance(1),
            e.ɵɵproperty("tokensPair", e.ɵɵpipeBind1(2, 2, t.tokensPair$)),
            e.ɵɵadvance(2),
            e.ɵɵproperty("ngIf", !t.isChartsAlertHidden);
        }
      }
      function uo(n, o) {
        if ((1 & n && e.ɵɵelement(0, "tooltip", 18), 2 & n)) {
          e.ɵɵnextContext();
          const t = e.ɵɵreference(13),
            r = e.ɵɵreference(15);
          e.ɵɵproperty("tooltip", t)("customElement", r);
        }
      }
      function go(n, o) {
        1 & n &&
          (e.ɵɵelementStart(0, "p", 19),
          e.ɵɵtext(
            1,
            " At the moment, the server is not available. You may not see limit orders created earlier."
          ),
          e.ɵɵelementEnd());
      }
      function ho(n, o) {
        1 & n &&
          (e.ɵɵelement(0, "div", 20),
          e.ɵɵelementStart(1, "span", 21),
          e.ɵɵtext(2, "Connection timeout"),
          e.ɵɵelementEnd());
      }
      function vo(n, o) {
        1 & n &&
          (e.ɵɵelementStart(0, "span", 22),
          e.ɵɵtext(1, "Active orders"),
          e.ɵɵelementEnd());
      }
      function fo(n, o) {
        1 & n && e.ɵɵelement(0, "limit-order-list", 23);
      }
      function _o(n, o) {
        1 & n &&
          (e.ɵɵelementStart(0, "span", 24)(1, "span", 25),
          e.ɵɵtext(2, "Active orders V1"),
          e.ɵɵelementEnd()());
      }
      function Co(n, o) {
        1 & n &&
          (e.ɵɵelementStart(0, "alert", 26),
          e.ɵɵelement(1, "span", 27),
          e.ɵɵelementEnd(),
          e.ɵɵelement(2, "limit-order-list", 28));
      }
      function Oo(n, o) {
        1 & n &&
          (e.ɵɵelementStart(0, "mat-tab"),
          e.ɵɵtemplate(1, _o, 3, 0, "ng-template", 10),
          e.ɵɵtemplate(2, Co, 3, 0, "ng-template", 11),
          e.ɵɵelementEnd());
      }
      function xo(n, o) {
        1 & n &&
          (e.ɵɵelementStart(0, "span", 29),
          e.ɵɵtext(1, "Order history"),
          e.ɵɵelementEnd());
      }
      function yo(n, o) {
        1 & n && e.ɵɵelement(0, "limit-order-list", 30);
      }
      const Nt = "1inch_LO_CHARTS_ALERT_HIDDEN";
      let To = (() => {
        class n {
          constructor(t, r, a, s, p, l, m, d, x, h, y, U, Z, Pe, be) {
            (this.limitOrderLoadStatusService = t),
              (this.limitOrderHistoryService = r),
              (this.uiService = a),
              (this.uiQuery = s),
              (this.globalSettingsQuery = p),
              (this.globalSettingsService = l),
              (this.limitOrderQuery = m),
              (this.limitOrderService = d),
              (this.activeConnectionQuery = x),
              (this.limitOrderListService = h),
              (this.unsavedOrdersService = y),
              (this.currentSpenderService = U),
              (this.featureToggleService = Z),
              (this.limitOrderSettingsService = Pe),
              (this.onDestroy$ = be),
              (this.limitOrdersLoadingStatus$ =
                this.limitOrderLoadStatusService.lastLoadingStatus$),
              (this.legacyOrdersCount$ =
                this.limitOrderHistoryService.legacyOrdersCount$),
              (this.selectedLimitOrderTab$ = this.uiQuery.select(
                "selectedLimitOrderTab"
              )),
              (this.isShowGraphics$ = this.globalSettingsQuery.showCharts$),
              (this.tokensPair$ = this.limitOrderQuery.select([
                "sourceToken",
                "destinationToken",
              ])),
              (this.isChainSupportLegacyOrders$ =
                this.activeConnectionQuery.currentChainId$.pipe(
                  (0, u.U)(
                    (O) =>
                      ![he.$L.gnosisMainnet, he.$L.avalancheMainnet].includes(O)
                  )
                )),
              (this.showLegacyOrders$ = this.isChainSupportLegacyOrders$.pipe(
                (0, f.w)((O) => (O ? this.legacyOrdersCount$ : (0, de.of)(!1))),
                (0, u.U)((O) => !!O)
              )),
              (this.swapSettings = null),
              (this.setSelectedLimitOrderTab = (O) => {
                const Ie = ii(O.index);
                this.uiService.setSelectedLimitOrderTab(Ie);
              }),
              this.unsavedOrdersService.start(),
              this.currentSpenderService.setCurrentSpenderType(Et.F.limitOrder);
            const Me = this.limitOrderService.getTokensChanges().pipe(
              (0, _e.h)(({ wereTokenReversed: O }) => !O),
              (0, E.b)(() => {
                this.limitOrderService.clearDestinationAmount();
              }),
              (0, K.R)(this.onDestroy$)
            );
            (0, B.O)(Me, "resetDestinationAmount$");
          }
          get isChartsAlertHidden() {
            return !!localStorage.getItem(Nt);
          }
          ngOnInit() {
            this.limitOrderSettingsService.setLimitOrderSettings();
          }
          getSelectedLimitOrderTabIndex(t) {
            return ri(t);
          }
          ngOnDestroy() {
            this.unsavedOrdersService.end(),
              this.limitOrderService.clearDestinationAmount();
          }
          handleCloseAlert() {
            localStorage.setItem(Nt, "1");
          }
        }
        return (
          (n.ɵfac = function (t) {
            return new (t || n)(
              e.ɵɵdirectiveInject(oi.C),
              e.ɵɵdirectiveInject(ft),
              e.ɵɵdirectiveInject(ai.F),
              e.ɵɵdirectiveInject(si.s),
              e.ɵɵdirectiveInject(le.J),
              e.ɵɵdirectiveInject(z.o),
              e.ɵɵdirectiveInject(ge.g),
              e.ɵɵdirectiveInject(Ne),
              e.ɵɵdirectiveInject(j.r),
              e.ɵɵdirectiveInject(re.Eu),
              e.ɵɵdirectiveInject($t.z),
              e.ɵɵdirectiveInject(Et.q),
              e.ɵɵdirectiveInject(We.BV),
              e.ɵɵdirectiveInject(H),
              e.ɵɵdirectiveInject(G.a3, 2)
            );
          }),
          (n.ɵcmp = e.ɵɵdefineComponent({
            type: n,
            selectors: [["app-limit-order-page-container"]],
            features: [e.ɵɵProvidersFeature([G.a3])],
            decls: 26,
            vars: 13,
            consts: [
              [3, "isGridView"],
              [1, "right-col"],
              [1, "left-col"],
              ["class", "charts-box", 4, "ngIf"],
              [1, "limit-order-title-wrap"],
              ["transloco", "orderList.limit-orders"],
              [
                "class",
                "poor-connection-indicator",
                "contentType",
                "custom",
                3,
                "tooltip",
                "customElement",
                4,
                "ngIf",
              ],
              ["tooltip", ""],
              ["tooltipElement", ""],
              [
                "mat-align-tabs",
                "start",
                1,
                "limit-order-tabs",
                3,
                "selectedIndex",
                "selectedTabChange",
              ],
              ["mat-tab-label", ""],
              ["matTabContent", ""],
              [4, "ngIf"],
              [1, "charts-box"],
              [3, "tokensPair"],
              [
                "type",
                "notification",
                "class",
                "limit-order-charts-notification",
                3,
                "onCloseClick",
                4,
                "ngIf",
              ],
              [
                "type",
                "notification",
                1,
                "limit-order-charts-notification",
                3,
                "onCloseClick",
              ],
              [
                "href",
                "https://help.1inch.io/en/articles/4656415-how-to-place-a-limit-order-on-1inch#h_f072c0b9ed",
                "target",
                "_blank",
                "rel",
                "noopener noreferrer",
                1,
                "notification-link",
              ],
              [
                "contentType",
                "custom",
                1,
                "poor-connection-indicator",
                3,
                "tooltip",
                "customElement",
              ],
              ["transloco", "orderList.server-is-not-available"],
              [1, "dot"],
              [
                "transloco",
                "swapPage.limit-orders.connection-timeout",
                1,
                "poor-connection-text",
              ],
              [
                "data-id",
                "limit-order-table.active-orders-tab",
                "transloco",
                "swapPage.active-orders2",
                1,
                "limit-order-tab",
              ],
              ["mode", "active"],
              [1, "limit-order-tab"],
              [
                "data-id",
                "limit-order-table.legacy-order-tab",
                "transloco",
                "swapPage.legacy-active-v1-2",
              ],
              [
                "type",
                "notification",
                "hideCloseButton",
                "true",
                1,
                "legacy-alert",
              ],
              ["transloco", "orderList.v1-orders-banner"],
              ["mode", "legacy"],
              [
                "data-id",
                "limit-order-table.order-history-tab",
                "transloco",
                "swapPage.order-history2",
                1,
                "limit-order-tab",
              ],
              ["mode", "history"],
            ],
            template: function (t, r) {
              1 & t &&
                (e.ɵɵelementStart(0, "classic-container-page", 0)(1, "div", 1),
                e.ɵɵelement(2, "app-market-limit-box"),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(3, "div", 2),
                e.ɵɵtemplate(4, mo, 4, 4, "div", 3),
                e.ɵɵpipe(5, "async"),
                e.ɵɵelementStart(6, "div")(7, "div", 4)(8, "p", 5),
                e.ɵɵtext(9, "Limit orders"),
                e.ɵɵelementEnd(),
                e.ɵɵtemplate(10, uo, 1, 2, "tooltip", 6),
                e.ɵɵpipe(11, "async"),
                e.ɵɵtemplate(
                  12,
                  go,
                  2,
                  0,
                  "ng-template",
                  null,
                  7,
                  e.ɵɵtemplateRefExtractor
                ),
                e.ɵɵtemplate(
                  14,
                  ho,
                  3,
                  0,
                  "ng-template",
                  null,
                  8,
                  e.ɵɵtemplateRefExtractor
                ),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(16, "mat-tab-group", 9),
                e.ɵɵlistener("selectedTabChange", function (s) {
                  return r.setSelectedLimitOrderTab(s);
                }),
                e.ɵɵpipe(17, "async"),
                e.ɵɵelementStart(18, "mat-tab"),
                e.ɵɵtemplate(19, vo, 2, 0, "ng-template", 10),
                e.ɵɵtemplate(20, fo, 1, 0, "ng-template", 11),
                e.ɵɵelementEnd(),
                e.ɵɵtemplate(21, Oo, 3, 0, "mat-tab", 12),
                e.ɵɵpipe(22, "async"),
                e.ɵɵelementStart(23, "mat-tab"),
                e.ɵɵtemplate(24, xo, 2, 0, "ng-template", 10),
                e.ɵɵtemplate(25, yo, 1, 0, "ng-template", 11),
                e.ɵɵelementEnd()()()()()),
                2 & t &&
                  (e.ɵɵproperty("isGridView", !0),
                  e.ɵɵadvance(4),
                  e.ɵɵproperty("ngIf", e.ɵɵpipeBind1(5, 5, r.isShowGraphics$)),
                  e.ɵɵadvance(6),
                  e.ɵɵproperty(
                    "ngIf",
                    "failed" ===
                      e.ɵɵpipeBind1(11, 7, r.limitOrdersLoadingStatus$)
                  ),
                  e.ɵɵadvance(6),
                  e.ɵɵproperty(
                    "selectedIndex",
                    r.getSelectedLimitOrderTabIndex(
                      e.ɵɵpipeBind1(17, 9, r.selectedLimitOrderTab$)
                    )
                  ),
                  e.ɵɵadvance(5),
                  e.ɵɵproperty(
                    "ngIf",
                    e.ɵɵpipeBind1(22, 11, r.showLegacyOrders$)
                  ));
            },
            dependencies: [
              c.O5,
              ci.X,
              _.SP,
              _.uD,
              _.uX,
              _.Vc,
              g.KI,
              Ge.w,
              li.K,
              di.w,
              lo,
              De.K,
              c.Ov,
              g.Ot,
            ],
            styles: [
              ".graph[_ngcontent-%COMP%]{display:none}.limit-order-title-wrap[_ngcontent-%COMP%]{line-height:26px;font-weight:500;margin-bottom:-30px;display:flex;align-items:center;color:var(--1inch-text-11)}.limit-order-tabs[_ngcontent-%COMP%]     .mat-tab-list{display:flex;justify-content:end}.limit-order-tabs[_ngcontent-%COMP%]     .mat-tab-label-container{padding-bottom:16px!important;margin-bottom:24px;border-bottom:1px solid var(--1inch-border-05)}.limit-order-tabs[_ngcontent-%COMP%]     .mat-tab-labels{border-radius:8px;padding:2px;box-shadow:var(--1inch-shadow-03);background:var(--1inch-bg-09)}.limit-order-tabs[_ngcontent-%COMP%]     .mat-tab-label{margin:0!important;padding:6px 16px!important;height:28px!important}.limit-order-tabs[_ngcontent-%COMP%]     .mat-tab-label.mat-tab-label-active{border-radius:6px;background:var(--1inch-btn-bg-01)}.limit-order-tabs[_ngcontent-%COMP%]     .mat-ink-bar{display:none}.limit-order-tab[_ngcontent-%COMP%]{font-size:13px;line-height:15px;color:var(--1inch-text-01)}.poor-connection-indicator[_ngcontent-%COMP%]{background-color:var(--1inch__background__info);border-radius:24px;padding:4px 8px;height:24px;color:var(--1inch-text-01);font-size:13px;line-height:15px;font-weight:500;cursor:pointer;width:-moz-fit-content;width:fit-content;position:relative;z-index:2;margin-left:8px}.poor-connection-indicator[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]{width:8px;height:8px;background-color:var(--1inch__text-and-icons__error);border-radius:4px;display:inline-block}.legacy-alert[_ngcontent-%COMP%]{display:block;margin:-16px 0 24px}.limit-order-charts-notification[_ngcontent-%COMP%]{margin:-8px 0 24px}.limit-order-charts-notification[_ngcontent-%COMP%]   .notification-link[_ngcontent-%COMP%]{display:inline-block;text-decoration:none}@media (max-width: 720px){.limit-order-tabs[_ngcontent-%COMP%]     .mat-tab-label-container{padding:0!important;margin:0 0 16px!important;border-bottom:none}}@media (max-width: 520px){.limit-order-title-wrap[_ngcontent-%COMP%]{margin-bottom:8px}.limit-order-tabs[_ngcontent-%COMP%]     .mat-tab-labels, .limit-order-tabs[_ngcontent-%COMP%]     .mat-tab-label{width:100%}}.poor-connection-text[_ngcontent-%COMP%]{margin-left:6px}.charts-box[_ngcontent-%COMP%]{margin-bottom:16px}@media (max-width: 1024px) and (min-width: 940px){.poor-connection-text[_ngcontent-%COMP%]{display:none}}@media (max-width: 940px){.left-col[_ngcontent-%COMP%]{margin-top:32px}}",
            ],
            changeDetection: 0,
          })),
          n
        );
      })();
      var ko = i(70299),
        wo = i(47831),
        So = i(71426),
        Po = i(7913),
        Qt = i(71909),
        rt = i(82188),
        bo = i(18084),
        Mo = i(74027),
        Io = i(27723),
        je = i(49440),
        Lo = i(45341),
        Ht = i(2242),
        Wt = i(92808),
        J = i(57817),
        Ao = i(10199),
        Eo = i(54009),
        $o = i(23524),
        Bo = i(9907),
        Do = i(96139);
      let Ro = (() => {
        class n {
          transform(t) {
            return (0, ye.M)(t);
          }
        }
        return (
          (n.ɵfac = function (t) {
            return new (t || n)();
          }),
          (n.ɵpipe = e.ɵɵdefinePipe({
            name: "isNativeToken",
            type: n,
            pure: !0,
          })),
          n
        );
      })();
      function Vo(n, o) {
        if (1 & n) {
          const t = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "modal-dialog-header", 8),
            e.ɵɵlistener("onCloseClick", function () {
              e.ɵɵrestoreView(t);
              const a = e.ɵɵnextContext();
              return e.ɵɵresetView(a.handleCloseClick());
            }),
            e.ɵɵelementStart(1, "span", 9),
            e.ɵɵtext(2, "Verify limit order"),
            e.ɵɵelementEnd()();
        }
      }
      function jo(n, o) {
        if ((1 & n && e.ɵɵelement(0, "tokens-pair-preview", 10), 2 & n)) {
          const t = o.tuiLet,
            r = e.ɵɵnextContext();
          e.ɵɵproperty("sourceToken", t.sourceToken)(
            "sourceTokenAmount",
            t.sourceTokenAmount
          )("destinationToken", t.destinationToken)(
            "destinationTokenAmount",
            t.destinationTokenAmount
          )("swapPriceImpact", r.data.swapPriceImpact);
        }
      }
      function Uo(n, o) {
        if (
          (1 & n &&
            (e.ɵɵelementStart(0, "trade-info", 11)(1, "trade-info-item", 12)(
              2,
              "span",
              13
            ),
            e.ɵɵtext(3),
            e.ɵɵpipe(4, "transloco"),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(5, "span", 14),
            e.ɵɵtext(6),
            e.ɵɵpipe(7, "orderDuration"),
            e.ɵɵpipe(8, "async"),
            e.ɵɵelementEnd()()()),
          2 & n)
        ) {
          const t = o.tuiLet,
            r = e.ɵɵnextContext();
          e.ɵɵproperty("sourceToken", t.sourceToken)(
            "sourceTokenAmount",
            t.sourceTokenAmount
          )("destinationToken", t.destinationToken)(
            "destinationTokenAmount",
            t.destinationTokenAmount
          ),
            e.ɵɵadvance(3),
            e.ɵɵtextInterpolate1(
              " ",
              e.ɵɵpipeBind1(4, 6, "otc-deal.expires-in"),
              " "
            ),
            e.ɵɵadvance(3),
            e.ɵɵtextInterpolate1(
              " ",
              e.ɵɵpipeBind2(
                7,
                8,
                r.data.duration,
                e.ɵɵpipeBind1(8, 11, r.lang$)
              ),
              " "
            );
        }
      }
      const Fo = function (n, o) {
        return { percent: n, sourceTokenSymbol: o };
      };
      function No(n, o) {
        if (
          (1 & n &&
            (e.ɵɵelementStart(0, "alert", 15),
            e.ɵɵtext(1),
            e.ɵɵpipe(2, "transloco"),
            e.ɵɵelementEnd()),
          2 & n)
        ) {
          const t = e.ɵɵnextContext();
          e.ɵɵproperty(
            "type",
            "high" === t.data.swapPriceImpact.level ? "warning" : "alert"
          )("compact", !0)("hideCloseButton", !0),
            e.ɵɵadvance(1),
            e.ɵɵtextInterpolate1(
              " ",
              e.ɵɵpipeBind2(
                2,
                4,
                "limit-order.verify.price-impact",
                e.ɵɵpureFunction2(
                  7,
                  Fo,
                  t.data.swapPriceImpact.loss.inPercent,
                  t.data.tokensPair.sourceToken.symbol
                )
              ),
              " "
            );
        }
      }
      function Qo(n, o) {
        if (1 & n) {
          const t = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "alert", 16),
            e.ɵɵlistener("onCloseClick", function () {
              e.ɵɵrestoreView(t);
              const a = e.ɵɵnextContext();
              return e.ɵɵresetView(a.closeGnosisNotification());
            }),
            e.ɵɵelementStart(1, "span", 17),
            e.ɵɵtext(
              2,
              "Limit order will become active after all the parties sign it."
            ),
            e.ɵɵelementEnd()();
        }
        2 & n && e.ɵɵproperty("compact", !0);
      }
      const Ho = function (n) {
        return { value: n };
      };
      function Wo(n, o) {
        if (
          (1 & n &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵelement(1, "div", 18)(2, "send-to-another-address", 19),
            e.ɵɵpipe(3, "transloco"),
            e.ɵɵpipe(4, "transloco"),
            e.ɵɵelementContainerEnd()),
          2 & n)
        ) {
          const t = e.ɵɵnextContext();
          e.ɵɵadvance(2),
            e.ɵɵproperty("formControl", t.sendToReceiverControl)(
              "addressLabel",
              e.ɵɵpipeBind1(3, 3, "uni.confirmSwap.receive-to")
            )(
              "label",
              e.ɵɵpipeBind2(
                4,
                5,
                "uni.confirmSwap.send-to-another-wallet",
                e.ɵɵpureFunction1(
                  8,
                  Ho,
                  t.data.tokensPair.destinationToken.symbol
                )
              )
            );
        }
      }
      function zo(n, o) {
        1 & n &&
          (e.ɵɵelementStart(0, "span"),
          e.ɵɵtext(1),
          e.ɵɵpipe(2, "transloco"),
          e.ɵɵelementEnd()),
          2 & n &&
            (e.ɵɵadvance(1),
            e.ɵɵtextInterpolate1(
              " ",
              e.ɵɵpipeBind1(2, 1, "limit-order.verify.button.verify"),
              " "
            ));
      }
      function Ko(n, o) {
        1 & n &&
          (e.ɵɵelementStart(0, "span"),
          e.ɵɵtext(1),
          e.ɵɵpipe(2, "transloco"),
          e.ɵɵelementEnd()),
          2 & n &&
            (e.ɵɵadvance(1),
            e.ɵɵtextInterpolate1(
              " ",
              e.ɵɵpipeBind1(2, 1, "limit-order.verify.button.verify-anyway"),
              " "
            ));
      }
      function Go(n, o) {
        1 & n &&
          (e.ɵɵelementStart(0, "span"),
          e.ɵɵtext(1),
          e.ɵɵpipe(2, "transloco"),
          e.ɵɵelementEnd()),
          2 & n &&
            (e.ɵɵadvance(1),
            e.ɵɵtextInterpolate1(
              " ",
              e.ɵɵpipeBind1(
                2,
                1,
                "limit-order.verify.button.permit-and-verify"
              ),
              " "
            ));
      }
      function Xo(n, o) {
        1 & n &&
          (e.ɵɵelementStart(0, "span"),
          e.ɵɵtext(1),
          e.ɵɵpipe(2, "transloco"),
          e.ɵɵelementEnd()),
          2 & n &&
            (e.ɵɵadvance(1),
            e.ɵɵtextInterpolate1(
              " ",
              e.ɵɵpipeBind1(
                2,
                1,
                "limit-order.verify.button.permit-and-verify"
              ),
              " "
            ));
      }
      function Jo(n, o) {
        if (1 & n) {
          const t = e.ɵɵgetCurrentView();
          e.ɵɵelementContainerStart(0),
            e.ɵɵelementStart(1, "simple-button", 20),
            e.ɵɵlistener("click", function () {
              e.ɵɵrestoreView(t);
              const a = e.ɵɵnextContext();
              return e.ɵɵresetView(a.handleVerifyClick());
            }),
            e.ɵɵelementContainerStart(2, 21),
            e.ɵɵtemplate(3, zo, 3, 3, "span", 22),
            e.ɵɵtemplate(4, Ko, 3, 3, "span", 22),
            e.ɵɵtemplate(5, Go, 3, 3, "span", 22),
            e.ɵɵtemplate(6, Xo, 3, 3, "span", 22),
            e.ɵɵelementContainerEnd(),
            e.ɵɵelementEnd(),
            e.ɵɵelementContainerEnd();
        }
        if (2 & n) {
          const t = o.tuiLet;
          e.ɵɵadvance(1),
            e.ɵɵclassProp(
              "alert-button",
              "verify-anyway" === t.type ||
                "permit-and-verify-anyway" === t.type
            ),
            e.ɵɵproperty(
              "color",
              "verify-anyway" === t.type ? "light-red" : "gradient-blue"
            )("disabled", t.disabled),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngSwitch", t.type),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngSwitchCase", "verify-order"),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngSwitchCase", "verify-anyway"),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngSwitchCase", "permit-and-verify"),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngSwitchCase", "permit-and-verify-anyway");
        }
      }
      const zt = "loGnosisSafeNotificationWasShown";
      let Zo = (() => {
        class n {
          constructor(t) {
            (this.translocoService = t),
              (this.isHeaderVisible = !0),
              (this.showGnosisSafeNotification = !1),
              (this.verifyClick = new e.EventEmitter()),
              (this.closeClick = new e.EventEmitter()),
              (this.closeAlert = new e.EventEmitter()),
              (this.lang$ = this.translocoService.langChanges$.pipe(
                (0, lt.g)(1)
              ));
          }
          handleVerifyClick() {
            this.verifyClick.emit();
          }
          handleCloseClick() {
            this.closeClick.emit();
          }
          closeGnosisNotification() {
            this.closeAlert.emit(zt);
          }
        }
        return (
          (n.ɵfac = function (t) {
            return new (t || n)(e.ɵɵdirectiveInject(g.Vn));
          }),
          (n.ɵcmp = e.ɵɵdefineComponent({
            type: n,
            selectors: [["verify-order-view"]],
            inputs: {
              isHeaderVisible: "isHeaderVisible",
              data: "data",
              sendToReceiverControl: "sendToReceiverControl",
              showGnosisSafeNotification: "showGnosisSafeNotification",
            },
            outputs: {
              verifyClick: "verifyClick",
              closeClick: "closeClick",
              closeAlert: "closeAlert",
            },
            decls: 9,
            vars: 9,
            consts: [
              [3, "onCloseClick", 4, "ngIf"],
              [1, "verify-order-content"],
              [
                3,
                "sourceToken",
                "sourceTokenAmount",
                "destinationToken",
                "destinationTokenAmount",
                "swapPriceImpact",
                4,
                "tuiLet",
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
              [3, "type", "compact", "hideCloseButton", 4, "ngIf"],
              ["type", "notification", 3, "compact", "onCloseClick", 4, "ngIf"],
              [4, "ngIf"],
              [4, "tuiLet"],
              [3, "onCloseClick"],
              ["transloco", "limit-order.verify.title"],
              [
                3,
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
              ],
              [1, "trade-info__expiration"],
              ["tradeInfoItemTitle", "", 1, "trade-info__expiration_title"],
              ["tradeInfoItemValue", "", 1, "trade-info__expiration_value"],
              [3, "type", "compact", "hideCloseButton"],
              ["type", "notification", 3, "compact", "onCloseClick"],
              ["transloco", "limit-order.verify.gnosis-safe"],
              [1, "divider"],
              [3, "formControl", "addressLabel", "label"],
              [1, "verify-limit-button", 3, "color", "disabled", "click"],
              [3, "ngSwitch"],
              [4, "ngSwitchCase"],
            ],
            template: function (t, r) {
              1 & t &&
                (e.ɵɵtemplate(0, Vo, 3, 0, "modal-dialog-header", 0),
                e.ɵɵelementStart(1, "div", 1),
                e.ɵɵtemplate(2, jo, 1, 5, "tokens-pair-preview", 2),
                e.ɵɵtemplate(3, Uo, 9, 13, "trade-info", 3),
                e.ɵɵtemplate(4, No, 3, 10, "alert", 4),
                e.ɵɵtemplate(5, Qo, 3, 1, "alert", 5),
                e.ɵɵtemplate(6, Wo, 5, 10, "ng-container", 6),
                e.ɵɵpipe(7, "isNativeToken"),
                e.ɵɵtemplate(8, Jo, 7, 9, "ng-container", 7),
                e.ɵɵelementEnd()),
                2 & t &&
                  (e.ɵɵproperty("ngIf", r.isHeaderVisible),
                  e.ɵɵadvance(2),
                  e.ɵɵproperty("tuiLet", r.data.tokensPair),
                  e.ɵɵadvance(1),
                  e.ɵɵproperty("tuiLet", r.data.tokensPair),
                  e.ɵɵadvance(1),
                  e.ɵɵproperty("ngIf", r.data.swapPriceImpact),
                  e.ɵɵadvance(1),
                  e.ɵɵproperty("ngIf", r.showGnosisSafeNotification),
                  e.ɵɵadvance(1),
                  e.ɵɵproperty(
                    "ngIf",
                    !e.ɵɵpipeBind1(
                      7,
                      7,
                      r.data.tokensPair.destinationToken.address
                    )
                  ),
                  e.ɵɵadvance(2),
                  e.ɵɵproperty("tuiLet", r.data.buttonStatus));
            },
            dependencies: [
              c.O5,
              c.RF,
              c.n9,
              Ao.w,
              g.KI,
              Eo.L,
              k.Ls,
              $o.n,
              Bo.j,
              Ge.w,
              Do.y,
              M.NgControlStatus,
              M.FormControlDirective,
              Ke.q,
              c.Ov,
              g.Ot,
              Ro,
              Ht.nk,
            ],
            styles: [
              "[_nghost-%COMP%]{display:block;background:var(--1inch-bg-02);border-radius:20px;width:418px;max-width:100%;padding-bottom:16px;margin:auto}modal-dialog-header[_ngcontent-%COMP%]{display:block}trade-info[_ngcontent-%COMP%]{padding:16px 4px 0}alert[_ngcontent-%COMP%]     .uni-alert-container{padding-left:16px!important}info-icon[_ngcontent-%COMP%]{margin-top:1px}.verify-limit-button[_ngcontent-%COMP%]{margin-top:24px}.verify-order-content[_ngcontent-%COMP%]{max-height:calc(85vh - 58px);overflow:auto;padding:0 16px}.trade-info__expiration_title[_ngcontent-%COMP%]{color:var(--1inch__ui-02)}",
            ],
          })),
          n
        );
      })();
      var Yo = i(29173);
      const Kt = (n) => n instanceof je.RU;
      var ta = i(98066),
        na = i(54244),
        ra = i(2861),
        ia = i(85377),
        oa = i(58903),
        aa = i(62425);
      function sa(n, o) {
        if (1 & n) {
          const t = e.ɵɵgetCurrentView();
          e.ɵɵelementContainerStart(0),
            e.ɵɵelementStart(1, "verify-order-view", 3),
            e.ɵɵlistener("verifyClick", function () {
              e.ɵɵrestoreView(t);
              const a = e.ɵɵnextContext();
              return e.ɵɵresetView(a.signAndSendOrder());
            })("closeAlert", function (a) {
              e.ɵɵrestoreView(t);
              const s = e.ɵɵnextContext();
              return e.ɵɵresetView(s.closeAlert(a));
            }),
            e.ɵɵelementEnd(),
            e.ɵɵelementContainerEnd();
        }
        if (2 & n) {
          const t = o.ngIf,
            r = e.ɵɵnextContext();
          e.ɵɵadvance(1),
            e.ɵɵproperty("isHeaderVisible", !1)("data", t)(
              "showGnosisSafeNotification",
              r.showGnosisSafeNotification
            )("sendToReceiverControl", r.sendToReceiver);
        }
      }
      let ca = (() => {
        class n {
          constructor(
            t,
            r,
            a,
            s,
            p,
            l,
            m,
            d,
            x,
            h,
            y,
            U,
            Z,
            Pe,
            be,
            Me,
            O,
            Ie,
            it
          ) {
            (this.limitOrderCreateService = t),
              (this.limitOrderService = r),
              (this.limitOrderQuery = a),
              (this.txStatusDialogService = s),
              (this.limitOrderPersistingService = p),
              (this.limitOrdersPermitsService = l),
              (this.webAnalyticsService = m),
              (this.tokenPricesQuery = d),
              (this.limitOrderStore = x),
              (this.limitOrderApiService = h),
              (this.walletConnectionQuery = y),
              (this.tokensPairPriceImpactService = U),
              (this.priceImpactAlertService = Z),
              (this.ensService = Pe),
              (this.translocoService = be),
              (this.activeConnectionQuery = Me),
              (this.router = O),
              (this.routerHelperService = Ie),
              (this.destroy$ = it),
              (this.sendToReceiver = new M.UntypedFormControl({
                checked: !1,
                address: "",
              })),
              (this.priceImpact$ =
                this.limitOrderQuery.limitOrderSwapInfo$.pipe(
                  (0, f.w)((Y) =>
                    this.tokensPairPriceImpactService.getPriceImpact$(Y)
                  ),
                  (0, ne.x)(I.fS0),
                  (0, pe.d)({ refCount: !0, bufferSize: 1 })
                )),
              (this.shouldRequestPermit$ = (0, $.a)([
                this.limitOrderQuery.isSourceTokenApproved$,
                this.limitOrdersPermitsService.isPermitSupported$,
              ]).pipe((0, u.U)(([Y, Le]) => !Y && Le))),
              (this.buttonStatus$ = (0, $.a)([
                this.priceImpact$,
                this.shouldRequestPermit$,
                this.sendToReceiver.statusChanges.pipe(
                  (0, u.U)((Y) => "VALID" === Y),
                  (0, fe.O)(!0)
                ),
              ]).pipe(
                (0, u.U)(([Y, Le, ot]) => {
                  let Ae;
                  return (
                    (Ae = Le
                      ? Y
                        ? "permit-and-verify-anyway"
                        : "permit-and-verify"
                      : Y
                      ? "verify-anyway"
                      : "verify-order"),
                    { type: Ae, disabled: !ot }
                  );
                }),
                (0, ne.x)(I.fS0)
              )),
              (this.verifyOrderViewData$ = (0, $.a)([
                this.limitOrderQuery.limitOrderSwapInfo$,
                this.priceImpact$,
                this.limitOrderQuery.duration$,
                this.buttonStatus$,
              ]).pipe(
                (0, u.U)(([Y, Le, ot, Ae]) => ({
                  tokensPair: Y,
                  swapPriceImpact: Le,
                  buttonStatus: Ae,
                  duration: ot,
                })),
                (0, ne.x)(I.fS0)
              )),
              (this.order = this.router.getCurrentNavigation().extras.state);
          }
          ngOnInit() {
            const t = (0, $.a)([
              this.activeConnectionQuery.currentChainId$,
              this.walletConnectionQuery.connectedWalletAddress$,
            ]).pipe(
              (0, Qe.T)(1),
              (0, E.b)(() => {
                this.router.navigateByUrl(this.getDefaultTradeUrl());
              }),
              (0, K.R)(this.destroy$)
            );
            (0, B.O)(t, "redirectFromVerifyOrder$");
          }
          get showGnosisSafeNotification() {
            return (
              this.walletConnectionQuery.isCurrentWalletGnosis &&
              !localStorage.getItem(zt)
            );
          }
          closeAlert(t) {
            localStorage.setItem(t, "1");
          }
          signAndSendOrder() {
            if (this.sendToReceiver.invalid) return;
            let t = null;
            const { swapPriceImpact: r } = this.tokensPairPriceImpactService,
              a = r
                ? this.priceImpactAlertService.showPriceImpactExtendedWarning(
                    r,
                    "limit-order"
                  )
                : (0, de.of)(Wt.T.makeTradeAnyway),
              { address: s } = this.sendToReceiver.value,
              p = this.ensService.resolveWalletAddressByEnsName$(s || ""),
              l = (d) => {
                const x = d
                  ? this.order.sourceToken.address + d.slice(2)
                  : void 0;
                t = this.txStatusDialogService.changeTo({
                  status: J._.signLimitOrder,
                });
                const h = (0, Io.z)(
                    this.order.sourceTokenAmount,
                    this.order.sourceToken.decimals
                  ),
                  y = So.O$.from(h),
                  U = (0, Fe.bl)(
                    +this.order.destinationTokenAmount,
                    this.order.destinationToken.decimals
                  );
                return (0, Po.S)(
                  p.pipe(
                    (0, f.w)(
                      (Z) => (
                        Z && (0, Lo.a)(s || ""),
                        (0, Te.p4)(
                          this.limitOrderCreateService.createOrder({
                            makerAsset: this.order.sourceToken.address,
                            takerAsset: this.order.destinationToken.address,
                            makerAmountValue: y,
                            takerAmountValue: U,
                            expireTimeSeconds: this.order.duration,
                            permit: x,
                            isStopLossEnabled: this.order.isStopLossEnabled,
                            receiver: Z || void 0,
                          })
                        )
                      )
                    )
                  ),
                  t
                    .afterClosed()
                    .pipe(
                      (0, f.w)(() =>
                        (0, Qt._)(() => new Error("Request rejected by user"))
                      )
                    )
                );
              },
              m = a.pipe(
                (0, f.w)((d) =>
                  d === Wt.T.makeTradeAnyway
                    ? this.shouldRequestPermit$.pipe((0, me.q)(1))
                    : rt.E
                ),
                (0, f.w)((d) =>
                  d
                    ? ((t = this.txStatusDialogService.open({
                        status: J._.signPermit,
                      })),
                      this.limitOrdersPermitsService.buildPermitCallData$())
                    : (0, de.of)(void 0)
                ),
                (0, f.w)((d) => l(d)),
                (0, E.b)(() => {
                  this.txStatusDialogService.changeTo({
                    status: J._.limitOrderSaveInProgress,
                  });
                }),
                (0, f.w)((d) => this.saveOrder(d)),
                (0, E.b)(() => {
                  const d = this.createPlacementOrderGAEvent(this.order, s);
                  d &&
                    (this.webAnalyticsService.sendEvent({
                      gaEvent: d.getEvent(),
                    }),
                    this.webAnalyticsService.trackViaDataLayer(
                      "limit-order-create-event",
                      d.label
                    ));
                }),
                (0, me.q)(1),
                (0, E.b)(() => {
                  this.txStatusDialogService.changeTo({
                    status: J._.limitOrderSubmitted,
                  });
                }),
                (0, $e.K)((d) =>
                  t
                    ? this.processLimitOrderCreatingError(d, t)
                    : (0, de.of)(void 0)
                ),
                (0, xt.x)(() => {
                  const d = this.routerHelperService.buildLimitOrderTokensUrl(
                    this.limitOrderQuery.sourceToken.symbol,
                    this.limitOrderQuery.destToken.symbol
                  );
                  this.router.navigateByUrl(d);
                })
              );
            (0, B.O)(m, "signAndSendOrder$");
          }
          saveOrder(t) {
            (0, ke.H)("New limit order: ", t);
            const r = this.walletConnectionQuery.isCurrentWalletGnosis;
            return this.limitOrderApiService.saveLimitOrder(t).pipe(
              (0, bo.V)(8e3),
              (0, Mo.a)((0, wo.d)(3, 3e3)),
              (0, E.b)(() => {
                this.limitOrderStore.add(
                  Object.assign(Object.assign({}, t), { awaitingSignatures: r })
                );
              }),
              (0, $e.K)(
                (a) => (
                  this.limitOrderStore.add(
                    Object.assign(Object.assign({}, t), {
                      notSaved: !0,
                      awaitingSignatures: r,
                    })
                  ),
                  (0, Qt._)(() => new je.RU(a.message, t))
                )
              ),
              (0, mt.h)(void 0)
            );
          }
          processLimitOrderCreatingError(t, r) {
            const a = ((n, o) =>
              Kt(n)
                ? { status: J._.limitOrderWasNotSaved }
                : ((n) =>
                    -1 !==
                    (0, I.pMU)("", ["message"], n)
                      .toLowerCase()
                      .indexOf(
                        "metamask message signature: error: not supported on this device"
                      ))(n)
                ? {
                    status: J._.rejected,
                    metaInfo: {
                      customText:
                        "tx.error.metamask.signing-with-hardware-wallet",
                    },
                  }
                : (0, Yo.nj)(n)
                ? { status: J._.signLimitOrderCancelledByUser }
                : n instanceof je._j
                ? { status: J._.limitOrderCannotBeCreated }
                : o
                ? {
                    status: J._.rejected,
                    metaInfo: { customText: "tx.error.trezor.only-model-t" },
                  }
                : { status: J._.rejected })(
              t,
              this.walletConnectionQuery.isCurrentWalletTrezor
            );
            return (
              (0, et.eK)(t, "signAndSendOrder() error"),
              this.txStatusDialogService.changeTo(a),
              r.afterClosed().pipe(
                (0, f.w)(() =>
                  Kt(t)
                    ? this.limitOrderPersistingService.persistLimitOrdersList(
                        "active",
                        { page: re.XJ, limit: re.UZ }
                      )
                    : rt.E
                ),
                (0, E.b)((s) => {}),
                (0, $e.K)(
                  (s) => ((0, et.eK)(s, "processLimitOrderCreatingError"), rt.E)
                ),
                (0, u.U)(() => {})
              )
            );
          }
          createPlacementOrderGAEvent(t, r) {
            try {
              const {
                  sourceToken: a,
                  sourceTokenAmount: s,
                  destinationToken: p,
                  destinationTokenAmount: l,
                  duration: m,
                } = t,
                d = +s,
                x = +l,
                h = this.tokenPricesQuery.getEntity(a.address),
                y = this.tokenPricesQuery.getEntity(p.address),
                U = y ? y.usdPrice * x : null,
                Z = this.translocoService.getActiveLang();
              return new ko.Z(
                "placement_simplified",
                {
                  srcAsset: a.symbol,
                  srcAssetAmount: s,
                  limitPrice: (0, dt.c)(d, x, b.N.direct),
                  lifeTime: new Ht.nk(this.translocoService).transform(m, Z),
                  dstAsset: p.symbol,
                  dstAssetAmount: l,
                  makerUsdValue: h ? h.usdPrice * d : null,
                  takerUsdValue: y ? y.usdPrice * x : null,
                  destReceiver: r,
                  marketPriceDiff: kt({
                    sourceTokenUsdPrice: (null == h ? void 0 : h.usdPrice) || 0,
                    destinationTokenUsdPrice:
                      (null == y ? void 0 : y.usdPrice) || 0,
                    sourceTokenAmount: d,
                    destinationTokenAmount: x,
                  }),
                },
                U || void 0
              );
            } catch (a) {
              return void (0, ke.H)(
                "Error when placement order event creating",
                a
              );
            }
          }
          getDefaultTradeUrl() {
            return this.router.createUrlTree([
              this.routerHelperService.buildDefaultClassicLimitUrl(),
            ]);
          }
        }
        return (
          (n.ɵfac = function (t) {
            return new (t || n)(
              e.ɵɵdirectiveInject(je.Hv),
              e.ɵɵdirectiveInject(nt.s),
              e.ɵɵdirectiveInject(ge.g),
              e.ɵɵdirectiveInject(ta.i),
              e.ɵɵdirectiveInject(re.Eu),
              e.ɵɵdirectiveInject(Ot.J),
              e.ɵɵdirectiveInject(Ct.y),
              e.ɵɵdirectiveInject(st.u),
              e.ɵɵdirectiveInject(Bt.V),
              e.ɵɵdirectiveInject(na.M),
              e.ɵɵdirectiveInject(Ve.r),
              e.ɵɵdirectiveInject(ra.t),
              e.ɵɵdirectiveInject(ia.u),
              e.ɵɵdirectiveInject(oa.D),
              e.ɵɵdirectiveInject(g.Vn),
              e.ɵɵdirectiveInject(j.r),
              e.ɵɵdirectiveInject(C.F0),
              e.ɵɵdirectiveInject(w.b),
              e.ɵɵdirectiveInject(G.a3, 2)
            );
          }),
          (n.ɵcmp = e.ɵɵdefineComponent({
            type: n,
            selectors: [["verify-order-wrapper"]],
            features: [e.ɵɵProvidersFeature([G.a3])],
            decls: 5,
            vars: 3,
            consts: [
              ["backLink", "../"],
              ["transloco", "limit-order.verify.title"],
              [4, "ngIf"],
              [
                3,
                "isHeaderVisible",
                "data",
                "showGnosisSafeNotification",
                "sendToReceiverControl",
                "verifyClick",
                "closeAlert",
              ],
            ],
            template: function (t, r) {
              1 & t &&
                (e.ɵɵelementStart(0, "widget-header", 0)(1, "span", 1),
                e.ɵɵtext(2, "Verify limit order"),
                e.ɵɵelementEnd()(),
                e.ɵɵtemplate(3, sa, 2, 4, "ng-container", 2),
                e.ɵɵpipe(4, "async")),
                2 & t &&
                  (e.ɵɵadvance(3),
                  e.ɵɵproperty(
                    "ngIf",
                    e.ɵɵpipeBind1(4, 1, r.verifyOrderViewData$)
                  ));
            },
            dependencies: [c.O5, g.KI, Zo, aa.y, c.Ov],
            styles: [
              "[_nghost-%COMP%]{width:100%;display:block;margin:0 auto}verify-order-view[_ngcontent-%COMP%]{width:100%!important;padding:0}verify-order-view[_ngcontent-%COMP%]     .verify-order-content{padding:0;max-height:100%}.verify-order-loader[_ngcontent-%COMP%]{width:80px;height:80px}",
            ],
          })),
          n
        );
      })();
      const Gt = [
        {
          path: "",
          component: To,
          canDeactivate: [xe],
          children: [
            {
              path: "",
              pathMatch: "full",
              component: class {},
              canActivate: [S],
            },
            {
              path: ":sourceToken/:destinationToken",
              canActivate: [v],
              children: [
                { path: "", component: Cr },
                {
                  path: "settings",
                  data: { domain: "limit-orders" },
                  component: ee.q,
                  children: A.y,
                },
                { path: "import-token", component: N.Z },
                { path: "reverse", component: class {}, canActivate: [en] },
                {
                  path: "select-source-token",
                  component: oe.D,
                  data: { role: "source", isNativeTokenExcluded: !0 },
                },
                {
                  path: "select-destination-token",
                  component: oe.D,
                  data: { role: "destination" },
                },
                { path: "confirm", component: ca, canActivate: [tn] },
              ],
            },
          ],
        },
      ];
      let la = (() => {
        class n {}
        return (
          (n.ɵfac = function (t) {
            return new (t || n)();
          }),
          (n.ɵmod = e.ɵɵdefineNgModule({ type: n })),
          (n.ɵinj = e.ɵɵdefineInjector({
            imports: [
              C.Bz.forChild(Gt),
              W,
              c.ez,
              q.P,
              _.Nh,
              g.y4,
              k.WD,
              T.n,
              V.o,
              ue.V,
              Q.G,
              ni,
              L.z,
              At,
              Ar,
              D.I,
              R.I,
            ],
          })),
          n
        );
      })();
    },
    96139: (Oe, F, i) => {
      i.d(F, { y: () => Ue });
      var c = i(51109),
        _ = i(31777),
        C = i(48205),
        g = i(33747),
        L = i(76027),
        k = i(84154),
        A = i(55231),
        D = i(25221),
        T = i(35878),
        q = i(76277),
        N = i(68751),
        ue = i(64736),
        oe = i(93130),
        R = i(8035),
        ee = i(38143),
        Q = i(19424),
        V = i(57951),
        te = i(43529),
        ae = i(98569),
        se = i(12725);
      function e(w, ce) {
        1 & w &&
          (c.ɵɵelementStart(0, "alert", 8)(1, "p", 9)(2, "span", 10),
          c.ɵɵtext(
            3,
            " If you use an address that belongs to Binance or another centralized exchange you might lose your funds. "
          ),
          c.ɵɵelementEnd(),
          c.ɵɵelementStart(4, "span"),
          c.ɵɵtext(5, "\xa0"),
          c.ɵɵelementEnd(),
          c.ɵɵelementStart(6, "span"),
          c.ɵɵtext(7, "\xa0"),
          c.ɵɵelementEnd(),
          c.ɵɵelementStart(8, "a", 11)(9, "span", 12),
          c.ɵɵtext(10, "Learn more"),
          c.ɵɵelementEnd(),
          c.ɵɵnamespaceSVG(),
          c.ɵɵelementStart(11, "svg", 13),
          c.ɵɵelement(12, "use", 14),
          c.ɵɵelementEnd()()(),
          c.ɵɵnamespaceHTML(),
          c.ɵɵelementStart(13, "tui-checkbox-labeled", 15)(14, "span", 16),
          c.ɵɵtext(15, "I understand"),
          c.ɵɵelementEnd()()());
      }
      function W(w, ce) {
        if (
          (1 & w &&
            (c.ɵɵelementStart(0, "div", 4),
            c.ɵɵelement(1, "app-address", 5)(2, "tui-field-error", 6),
            c.ɵɵtemplate(3, e, 16, 0, "alert", 7),
            c.ɵɵpipe(4, "async"),
            c.ɵɵelementEnd()),
          2 & w)
        ) {
          const v = c.ɵɵnextContext();
          c.ɵɵadvance(1),
            c.ɵɵproperty("label", v.addressLabel),
            c.ɵɵadvance(2),
            c.ɵɵproperty("ngIf", c.ɵɵpipeBind1(4, 2, v.showWarning$));
        }
      }
      const j = {
        checkEns: !0,
        banTheSameAddress: !0,
        banContract: !0,
        ignoreEmptyAddress: !1,
      };
      let Ue = (() => {
        class w {
          constructor(v, S, z, le) {
            (this.fb = v),
              (this.onDestroy$ = S),
              (this.walletConnectionQuery = z),
              (this.checkAddressService = le),
              (this.label = ""),
              (this.addressLabel = ""),
              (this.form = this.fb.group({
                checked: [!1],
                warningAccepted: [
                  { value: !1, disabled: !0 },
                  _.Validators.requiredTrue,
                ],
                address: [
                  { value: "", disabled: !0 },
                  [],
                  this.checkAddressService.getAsyncAddressValidator(j),
                ],
              })),
              (this.showWarning$ = new L.X(!1)),
              (this.onChanged = C.iD),
              (this.onTouched = C.iD),
              (this.onValidatorChanged = C.iD);
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
              .pipe((0, A.R)(this.onDestroy$))
              .subscribe({
                next: (v) => {
                  const S = { emitEvent: !1 };
                  v
                    ? (this.addressControl.enable(S),
                      this.warningAcceptedControl.enable(S))
                    : (this.addressControl.disable(S),
                      this.warningAcceptedControl.disable(S)),
                    this.onChanged(this.form.value);
                },
              }),
              this.warningAcceptedControl.valueChanges
                .pipe((0, A.R)(this.onDestroy$))
                .subscribe({
                  next: () => {
                    this.onChanged(this.form.value);
                  },
                }),
              this.addressControl.valueChanges
                .pipe((0, D.T)(1), (0, T.x)(), (0, A.R)(this.onDestroy$))
                .subscribe({
                  next: (v) => {
                    const S = localStorage.getItem("savedReceiverAddresses"),
                      z = S && JSON.parse(S).includes(v.toLowerCase());
                    this.showWarning$.next(!z),
                      this.warningAcceptedControl.setValue(z),
                      this.onChanged(
                        Object.assign(Object.assign({}, this.form.value), {
                          address: v,
                        })
                      ),
                      this.addressControl.markAsTouched();
                  },
                }),
              this.addressControl.statusChanges
                .pipe(
                  (0, q.Q)(k.z),
                  (0, N.h)((v) => "VALID" === v || "INVALID" === v),
                  (0, ue.U)(() => this.form.valid),
                  (0, T.x)(),
                  (0, A.R)(this.onDestroy$)
                )
                .subscribe({
                  next: () => {
                    this.onValidatorChanged();
                  },
                });
          }
          registerOnChange(v) {
            this.onChanged = v;
          }
          registerOnTouched(v) {
            this.onTouched = v;
          }
          setDisabledState(v) {
            v
              ? (this.addressControl.disable({ emitEvent: !1 }),
                this.checkedControl.disable({ emitEvent: !1 }),
                this.warningAcceptedControl.disable({ emitEvent: !1 }))
              : (this.addressControl.enable({ emitEvent: !1 }),
                this.checkedControl.enable({ emitEvent: !1 }),
                this.warningAcceptedControl.enable({ emitEvent: !1 }));
          }
          writeValue(v) {
            var S, z, le;
            const xe =
                null !== (S = null == v ? void 0 : v.checked) &&
                void 0 !== S &&
                S,
              he =
                null !== (z = null == v ? void 0 : v.warningAccepted) &&
                void 0 !== z &&
                z,
              ye =
                null !== (le = null == v ? void 0 : v.address) && void 0 !== le
                  ? le
                  : "";
            xe ? this.addressControl.enable() : this.addressControl.disable(),
              xe
                ? this.warningAcceptedControl.enable()
                : this.warningAcceptedControl.disable(),
              this.form.patchValue(
                { checked: xe, warningAccepted: he, address: ye },
                { emitEvent: !1 }
              );
          }
          validate() {
            return this.addressControl.disabled ||
              (this.addressControl.valid && this.warningAcceptedControl.valid)
              ? null
              : { invalidAddress: !0 };
          }
          registerOnValidatorChange(v) {
            this.onValidatorChanged = v;
          }
          ngDoCheck() {
            this.checkedControl.touched && this.onTouched();
          }
        }
        return (
          (w.ɵfac = function (v) {
            return new (v || w)(
              c.ɵɵdirectiveInject(_.UntypedFormBuilder),
              c.ɵɵdirectiveInject(g.a3, 2),
              c.ɵɵdirectiveInject(oe.r),
              c.ɵɵdirectiveInject(R.v)
            );
          }),
          (w.ɵcmp = c.ɵɵdefineComponent({
            type: w,
            selectors: [["send-to-another-address"]],
            inputs: { label: "label", addressLabel: "addressLabel" },
            features: [
              c.ɵɵProvidersFeature([
                g.a3,
                {
                  provide: _.NG_VALUE_ACCESSOR,
                  useExisting: (0, c.forwardRef)(() => w),
                  multi: !0,
                },
                {
                  provide: _.NG_VALIDATORS,
                  useExisting: (0, c.forwardRef)(() => w),
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
            template: function (v, S) {
              1 & v &&
                (c.ɵɵelementStart(0, "div", 0)(1, "tui-checkbox-labeled", 1)(
                  2,
                  "span",
                  2
                ),
                c.ɵɵtext(3),
                c.ɵɵelementEnd()(),
                c.ɵɵtemplate(4, W, 5, 4, "div", 3),
                c.ɵɵelementEnd()),
                2 & v &&
                  (c.ɵɵproperty("formGroup", S.form),
                  c.ɵɵadvance(3),
                  c.ɵɵtextInterpolate(S.label),
                  c.ɵɵadvance(1),
                  c.ɵɵproperty("ngIf", S.checked));
            },
            dependencies: [
              ee.O5,
              Q.p,
              _.NgControlStatus,
              _.NgControlStatusGroup,
              _.FormGroupDirective,
              _.FormControlName,
              te.h,
              V.y,
              ae.w,
              se.KI,
              ee.Ov,
            ],
            styles: [
              ".another-receiver-container[_ngcontent-%COMP%]{display:flex;flex-direction:column}.tui-checkbox[_ngcontent-%COMP%]     tui-primitive-checkbox{width:18px;height:18px}.tui-checkbox[_ngcontent-%COMP%]     tui-primitive-checkbox tui-wrapper{border-radius:3px}.tui-checkbox[_ngcontent-%COMP%]     tui-primitive-checkbox tui-wrapper[data-appearance=primary]{background-color:var(--1inch-common-btn-bg-01)}.tui-checkbox[_ngcontent-%COMP%]     tui-primitive-checkbox tui-wrapper[data-appearance=outline] span{display:block;height:18px;border:1px solid var(--1inch-border-04)}.tui-checkbox[_ngcontent-%COMP%]     tui-primitive-checkbox tui-wrapper span{background:inherit;color:inherit;border-radius:inherit}.tui-checkbox[_ngcontent-%COMP%]     tui-primitive-checkbox tui-wrapper span tui-svg{color:#fff;border-radius:inherit;background-color:inherit}.tui-checkbox[_ngcontent-%COMP%]   .tui-checkbox-label[_ngcontent-%COMP%]{line-height:20px}.address-container[_ngcontent-%COMP%]{margin-top:16px}.address-container[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%]     .hint{position:relative;margin-bottom:8px}.address-container[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%]     .paste-icon{position:absolute;right:0;top:20px;z-index:3}.address-container[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%]     tui-wrapper{width:calc(100% - 20px);font-size:16px}.address-container[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%]     tui-wrapper .t-input{font-size:16px;min-height:16px}.address-container[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%]     .input-container .input-control .t-placeholder{font-size:16px!important}.address-container[_ngcontent-%COMP%] > alert[_ngcontent-%COMP%]{margin-bottom:-16px}.address-container[_ngcontent-%COMP%] > alert[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:none}tui-field-error[_ngcontent-%COMP%]{padding-left:10px}.warning-checkbox[_ngcontent-%COMP%]{margin-top:8px}.warning-checkbox[_ngcontent-%COMP%]     tui-checkbox tui-primitive-checkbox tui-wrapper[data-appearance=primary]{background-color:#fff}.warning-checkbox[_ngcontent-%COMP%]     tui-checkbox tui-primitive-checkbox tui-wrapper[data-appearance=outline]{color:#fff;background-color:transparent}.warning-checkbox[_ngcontent-%COMP%]     tui-checkbox tui-primitive-checkbox tui-wrapper[data-appearance=outline]:after{color:var(--1inch-border-04)}.warning-checkbox[_ngcontent-%COMP%]     tui-checkbox tui-primitive-checkbox tui-wrapper span{background:inherit;color:inherit;border-radius:inherit}.warning-checkbox[_ngcontent-%COMP%]     tui-checkbox tui-primitive-checkbox tui-wrapper span tui-svg{color:var(--1inch-common-text-05);border-radius:inherit}.warning-checkbox[_ngcontent-%COMP%]     tui-checkbox tui-primitive-checkbox tui-wrapper span tui-svg.mark{padding:0;background-color:inherit}.another-receiver-link[_ngcontent-%COMP%]{display:inline-block;color:var(--1inch-text-01)}.another-receiver-link[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{margin:-2px 0 0 4px}",
            ],
            changeDetection: 0,
          })),
          w
        );
      })();
    },
    64074: (Oe, F, i) => {
      i.d(F, { M: () => q });
      var c = i(38143),
        _ = i(31777),
        C = i(92872),
        g = i(56739),
        L = i(65687),
        k = i(64925),
        A = i(24022),
        D = i(91066),
        T = i(51109);
      let q = (() => {
        class N {}
        return (
          (N.ɵfac = function (oe) {
            return new (oe || N)();
          }),
          (N.ɵmod = T.ɵɵdefineNgModule({ type: N })),
          (N.ɵinj = T.ɵɵdefineInjector({
            imports: [
              c.ez,
              _.ReactiveFormsModule,
              k.h,
              C.ot,
              D.E,
              L.m,
              A.Z,
              g.U,
            ],
          })),
          N
        );
      })();
    },
    54009: (Oe, F, i) => {
      i.d(F, { L: () => L });
      var c = i(20683),
        _ = i(51109),
        C = i(98002),
        g = i(36995);
      let L = (() => {
        class k {
          constructor() {
            (this.isDestinationLoading = !1), (this.tokenRole = c.q);
          }
        }
        return (
          (k.ɵfac = function (D) {
            return new (D || k)();
          }),
          (k.ɵcmp = _.ɵɵdefineComponent({
            type: k,
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
            template: function (D, T) {
              1 & D &&
                _.ɵɵelement(0, "token-preview", 0)(1, "swap-separator")(
                  2,
                  "token-preview",
                  1
                ),
                2 & D &&
                  (_.ɵɵproperty("token", T.sourceToken)(
                    "tokenAmount",
                    "" + T.sourceTokenAmount
                  )("title", T.sourceTokenTitle)(
                    "tokenRole",
                    T.tokenRole.source
                  ),
                  _.ɵɵadvance(2),
                  _.ɵɵproperty("token", T.destinationToken)(
                    "loading",
                    T.isDestinationLoading
                  )("tokenAmount", "" + T.destinationTokenAmount)(
                    "swapPriceImpact",
                    T.swapPriceImpact
                  )("title", T.destinationTokenTitle)(
                    "tokenRole",
                    T.tokenRole.destination
                  ));
            },
            dependencies: [C.W, g.g],
            changeDetection: 0,
          })),
          k
        );
      })();
    },
    9516: (Oe, F, i) => {
      i.d(F, { G: () => g });
      var c = i(38143),
        _ = i(2861),
        C = i(51109);
      let g = (() => {
        class L {}
        return (
          (L.ɵfac = function (A) {
            return new (A || L)();
          }),
          (L.ɵmod = C.ɵɵdefineNgModule({ type: L })),
          (L.ɵinj = C.ɵɵdefineInjector({ providers: [_.t], imports: [c.ez] })),
          L
        );
      })();
    },
    2861: (Oe, F, i) => {
      i.d(F, { t: () => oe });
      var c = i(53886),
        _ = i(3012),
        C = i(76327),
        g = i(64736),
        L = i(35878),
        k = i(77724),
        A = i(30137),
        D = i(71426);
      const T = (R, ee, Q, V) => {
        const ae = D.O$.from((0, A.yD)(Q, ee.decimals)),
          se = D.O$.from(Math.floor(100 * R)),
          e = ae.mul(se).div(1e4),
          W = (0, A.kg)(e.toString(), ee.decimals),
          j = (0, A.c$)(W, 2);
        return {
          inPercent: "" + R,
          inSourceToken: j,
          inUsd: (parseFloat(j) * V.usdPrice).toFixed(2),
        };
      };
      var q = i(51109),
        N = i(20803),
        ue = i(44432);
      let oe = (() => {
        class R {
          constructor(Q, V) {
            (this.tokenPricesQuery = Q),
              (this.swapPriceImpactService = V),
              (this.swapPriceImpact = void 0);
          }
          getPriceImpact$(Q) {
            return (0, c.a)([
              this.swapPriceImpactService.getSwapPriceImpact$(Q),
              (0, _.of)(Q),
            ]).pipe(
              (0, C.w)(([V, te]) =>
                V < 5
                  ? (0, _.of)(void 0)
                  : this.tokenPricesQuery
                      .getPriceByToken$(te.sourceToken.address)
                      .pipe(
                        (0, g.U)((ae) => {
                          const { sourceTokenAmount: se, sourceToken: e } = te;
                          return {
                            level: V <= 10 ? "high" : "extreme",
                            sourceToken: te.sourceToken,
                            loss: T(V, e, se, ae),
                          };
                        })
                      )
              ),
              (0, L.x)(),
              (0, k.b)((V) => {
                this.swapPriceImpact = V;
              })
            );
          }
        }
        return (
          (R.ɵfac = function (Q) {
            return new (Q || R)(q.ɵɵinject(N.u), q.ɵɵinject(ue.f));
          }),
          (R.ɵprov = q.ɵɵdefineInjectable({ token: R, factory: R.ɵfac })),
          R
        );
      })();
    },
  },
]);
