"use strict";
(self.webpackChunk_1inch = self.webpackChunk_1inch || []).push([
  [9092],
  {
    9092: (Li, ne, o) => {
      o.r(ne), o.d(ne, { UnifiedSwapModule: () => Ai });
      var H = o(78336),
        g = o(54510),
        ke = o(65028),
        Ie = o(78090),
        be = o(63223),
        Me = o(92356),
        $e = o(50349),
        Oe = o(21784),
        Ue = o(30904),
        Fe = o(42719),
        je = o(72800),
        ie = o(95249),
        _e = o(89170),
        Qe = o(16380),
        Be = o(41140),
        Re = o(33760),
        Ae = o(95580),
        Ee = o(82253),
        d = o(38143),
        S = o(12725),
        oe = o(88450),
        Le = o(586),
        De = o(75542),
        Ge = o(33039),
        ae = o(68530),
        e = o(51109);
      let Ne = (() => {
        class t {}
        return (
          (t.ɵfac = function (n) {
            return new (n || t)();
          }),
          (t.ɵmod = e.ɵɵdefineNgModule({ type: t })),
          (t.ɵinj = e.ɵɵdefineInjector({
            imports: [d.ez, ae.up, Ge.m, De.S, S.y4],
          })),
          t
        );
      })();
      var y = o(31777),
        Ve = o(65672),
        F = o(65687),
        ze = o(76044),
        We = o(8124),
        re = o(7405),
        j = o(84736),
        O = o(99580),
        K = o(3648),
        He = o(9032),
        Ke = o(92157),
        Xe = o(54568),
        Je = o(32770),
        B = o(74578),
        se = o(60303);
      let Ze = (() => {
        class t {}
        return (
          (t.ɵfac = function (n) {
            return new (n || t)();
          }),
          (t.ɵmod = e.ɵɵdefineNgModule({ type: t })),
          (t.ɵinj = e.ɵɵdefineInjector({
            imports: [g.Bz, F.m, se.j, y.ReactiveFormsModule, S.y4],
          })),
          t
        );
      })();
      var Ye = o(3697),
        qe = o(43253),
        X = o(37867),
        et = o(40475);
      let J = (() => {
          class t {
            constructor(n, i, r) {
              (this.otcModeService = n),
                (this.swapFormService = i),
                (this.swapSettingsService = r);
            }
            changePathfinderPreset(n) {
              if (
                (this.swapFormService.selectQuotePreset(n), "otcResult" === n)
              )
                return (
                  this.swapSettingsService.setPartialValuesForCurrentChain({
                    pathfinderPreset: qe.dn.OTC,
                  }),
                  void this.otcModeService.onSwitchToOTC()
                );
              this.otcModeService.resetOTCModeWhenItSet();
            }
          }
          return (
            (t.ɵfac = function (n) {
              return new (n || t)(
                e.ɵɵinject(X.N),
                e.ɵɵinject(O.q),
                e.ɵɵinject(et._)
              );
            }),
            (t.ɵprov = e.ɵɵdefineInjectable({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        tt = (() => {
          class t {}
          return (
            (t.ɵfac = function (n) {
              return new (n || t)();
            }),
            (t.ɵmod = e.ɵɵdefineNgModule({ type: t })),
            (t.ɵinj = e.ɵɵdefineInjector({
              providers: [J],
              imports: [g.Bz, F.m, y.ReactiveFormsModule, Ye.N],
            })),
            t
          );
        })(),
        nt = (() => {
          class t {}
          return (
            (t.ɵfac = function (n) {
              return new (n || t)();
            }),
            (t.ɵmod = e.ɵɵdefineNgModule({ type: t })),
            (t.ɵinj = e.ɵɵdefineInjector({
              imports: [g.Bz, F.m, se.j, y.ReactiveFormsModule, S.y4],
            })),
            t
          );
        })(),
        it = (() => {
          class t {}
          return (
            (t.ɵfac = function (n) {
              return new (n || t)();
            }),
            (t.ɵmod = e.ɵɵdefineNgModule({ type: t })),
            (t.ɵinj = e.ɵɵdefineInjector({
              providers: [j.y, K.N, O.q, re.w],
              imports: [
                F.m,
                g.Bz,
                Ke.U,
                y.ReactiveFormsModule,
                He.j,
                We.s,
                ze.h,
                nt,
                Ze,
                B.WD,
                tt,
                Je.Z,
                Ve.n,
                Xe.d,
              ],
            })),
            t
          );
        })(),
        ot = (() => {
          class t {}
          return (
            (t.ɵfac = function (n) {
              return new (n || t)();
            }),
            (t.ɵmod = e.ɵɵdefineNgModule({ type: t })),
            (t.ɵinj = e.ɵɵdefineInjector({ imports: [g.Bz, it] })),
            t
          );
        })();
      var R = o(54266),
        at = o(38073),
        pe = o(77370),
        rt = o(54902),
        st = o(33358),
        ce = o(99825),
        le = o(96185),
        de = o(76248),
        pt = o(16944),
        ct = o(62139),
        lt = o(41852);
      let dt = (() => {
          class t {}
          return (
            (t.ɵfac = function (n) {
              return new (n || t)();
            }),
            (t.ɵmod = e.ɵɵdefineNgModule({ type: t })),
            (t.ɵinj = e.ɵɵdefineInjector({
              imports: [
                d.ez,
                pe.TU,
                S.y4,
                F.m,
                B.WD,
                pt.z,
                st.z,
                lt.a,
                ct.G,
                ce.a,
                rt.b,
                le.Cu,
                de.jh,
              ],
            })),
            t
          );
        })(),
        ut = (() => {
          class t {}
          return (
            (t.ɵfac = function (n) {
              return new (n || t)();
            }),
            (t.ɵmod = e.ɵɵdefineNgModule({ type: t })),
            (t.ɵinj = e.ɵɵdefineInjector({
              imports: [d.ez, R.Nh, F.m, S.y4, at.k, dt],
            })),
            t
          );
        })();
      var mt = o(9862),
        ht = o(89990),
        gt = o(96791),
        vt = o(4987),
        ft = o(36037);
      let St = (() => {
          class t {}
          return (
            (t.ɵfac = function (n) {
              return new (n || t)();
            }),
            (t.ɵmod = e.ɵɵdefineNgModule({ type: t })),
            (t.ɵinj = e.ɵɵdefineInjector({
              imports: [d.ez, mt.$, ht.j, gt.Z, vt.M, ft.n, B.WD, oe.I],
            })),
            t
          );
        })(),
        yt = (() => {
          class t {}
          return (
            (t.ɵfac = function (n) {
              return new (n || t)();
            }),
            (t.ɵmod = e.ɵɵdefineNgModule({ type: t })),
            (t.ɵinj = e.ɵɵdefineInjector({
              imports: [g.Bz, ot, oe.I, d.ez, Le.o, S.y4, Ne, ut, St],
            })),
            t
          );
        })();
      var ue = o(30137),
        P = o(90813),
        wt = o(64057),
        Ct = o(29737),
        b = o(3012),
        f = o(53886),
        xt = o(82188),
        Z = o(17114),
        w = o(77724),
        u = o(64736),
        k = o(35878),
        me = o(68751),
        D = o(76327),
        Tt = o(46272),
        Pt = o(41967);
      let M = (() => {
        class t {}
        return (
          (t.ɵfac = function (n) {
            return new (n || t)();
          }),
          (t.ɵmod = e.ɵɵdefineNgModule({ type: t })),
          (t.ɵinj = e.ɵɵdefineInjector({})),
          t
        );
      })();
      const A = {
          routes: [{ amount: "0", part: 0 }],
          toTokenAmount: "0",
          toTokenEthAmount: "0",
          gasUnitsConsumed: "0",
        },
        kt = { bestResult: A, results: [] };
      var x = o(24124),
        T = o(18742),
        It = o(36565),
        G = o(44200),
        Y = o(48163),
        bt = o(73836),
        N = o(69064);
      let Mt = (() => {
        class t {
          constructor(n, i, r) {
            (this.httpClient = n),
              (this.activeConnectionQuery = i),
              (this.swapSettingsQuery = r);
          }
          requestPathfinder(n) {
            const i = this.getApiUrl(),
              { walletAddress: r } = n,
              s = (0, Y.__rest)(n, ["walletAddress"]);
            return this.httpClient.get(i, {
              params: new H.LE({
                fromObject: Object.assign(Object.assign({}, r ? n : s), {
                  protocolWhiteList: n.protocolWhiteList.join(","),
                  protocols: n.protocols.join(","),
                  deepLevels: n.deepLevels.join(","),
                  partsList: n.partsList.join(","),
                  mainRoutePartsList: n.mainRoutePartsList.join(","),
                  virtualPartsList: n.virtualPartsList.join(","),
                }),
              }),
            });
          }
          getApiUrl() {
            const { currentChainId: n } = this.activeConnectionQuery;
            return (
              bt.N.pathfinderEndpoint +
              `/${
                this.swapSettingsQuery.enableSwapRouterV4 ? "v1.2" : "v1.1"
              }/chain/${n}/router/${
                this.swapSettingsQuery.enableSwapRouterV4 ? "v4" : "v3"
              }/quotes`
            );
          }
        }
        return (
          (t.ɵfac = function (n) {
            return new (n || t)(
              e.ɵɵinject(H.eN),
              e.ɵɵinject(x.r),
              e.ɵɵinject(N.G)
            );
          }),
          (t.ɵprov = e.ɵɵdefineInjectable({
            token: t,
            factory: t.ɵfac,
            providedIn: M,
          })),
          t
        );
      })();
      var he = o(97202),
        $t = o(42716),
        Ot = o(93130),
        Ut = o(81650),
        Ft = o(83140);
      let jt = (() => {
          class t {
            constructor(n, i, r, s, p, c, h, l, v, I) {
              (this.activeConnectionQuery = n),
                (this.simpleSwapQuery = i),
                (this.gasPriceQuery = r),
                (this.pathfinderService = s),
                (this.swapFormRefreshService = p),
                (this.pathfinderApiService = c),
                (this.liquiditySourcesQuery = h),
                (this.swapFeesService = l),
                (this.walletConnectionQuery = v),
                (this.alternativesService = I);
            }
            init(n) {
              this.listenPathfinderUpdateTriggers(n);
            }
            requestPathfinder() {
              const { sourceTokenAmount: n, destinationToken: i } =
                this.simpleSwapQuery.getValue();
              if ("0" === n || !n) return (0, b.of)(null);
              this.pathfinderService.reset();
              const r = this.simpleSwapQuery.currentPreset,
                s = this.getPathfinderParams(r),
                p = {
                  deepLevel: s.deepLevel,
                  mainParts: s.mainRouteParts,
                  subParts: s.parts,
                  virtualParts: s.virtualParts,
                  experimentalPathfinderParams: !1,
                };
              return (0, f.a)([
                this.pathfinderApiService.requestPathfinder(s),
                (0, b.of)(p),
                (0, b.of)(r),
              ]).pipe(
                (0, Z.K)(
                  (c) => (
                    Ft.error("Pathfinder error: ", c),
                    (0, f.a)([(0, b.of)(kt), (0, b.of)(p), (0, b.of)(r)])
                  )
                ),
                (0, w.b)(([c]) => {
                  this.alternativesService.update({
                    sourceTokenAmount: n,
                    destinationTokenAmount: (0, ue.kg)(
                      c.bestResult.toTokenAmount,
                      i.decimals
                    ),
                    destinationToken: i,
                    gasUnitsConsumed: c.bestResult.gasUnitsConsumed,
                    alternativesResponse: c.results,
                  });
                }),
                (0, u.U)(([c, h, l]) => ({
                  pathfinderParams: h,
                  maxReturnResult: A,
                  lowestGasResult: A,
                  otcResult: A,
                  uniResult: A,
                  [l]: c.bestResult,
                })),
                (0, w.b)((c) => {
                  (0, wt.W)("PATHFINDER RESPONSE: ", c),
                    c &&
                      (this.pathfinderService.setPathfinderParams(
                        c.pathfinderParams
                      ),
                      this.pathfinderService.setPathfinderQuotes(
                        (0, Ct.eiS)(
                          [
                            "maxReturnResult",
                            "otcResult",
                            "uniResult",
                            "lowestGasResult",
                          ],
                          c
                        )
                      ));
                })
              );
            }
            listenPathfinderUpdateTriggers(n) {
              const i = (0, f.a)([
                this.swapFormRefreshService.swapFormRefresh$,
                this.gasPriceQuery.currentGasPrice$.pipe(
                  (0, k.x)(),
                  (0, me.h)((r) => 0 !== r)
                ),
                this.simpleSwapQuery.currentPreset$.pipe((0, k.x)()),
                this.liquiditySourcesQuery.selectActiveId().pipe((0, k.x)()),
              ]).pipe(
                (0, D.w)(() => this.requestPathfinder()),
                (0, Z.K)(() => xt.E)
              );
              (0, P.O)(i, "listenPathfinderUpdateTriggers", n);
            }
            getPathfinderParams(n) {
              var i;
              const {
                  sourceTokenAmount: r,
                  sourceToken: s,
                  destinationToken: p,
                } = this.simpleSwapQuery.getValue(),
                { amountDeductedFee: c } =
                  this.swapFeesService.calcFeeForAmount(r, s.decimals),
                h = this.gasPriceQuery.getCurrentGasPrice(),
                l =
                  null !==
                    (i =
                      "otcResult" === n
                        ? this.liquiditySourcesQuery.getOtcModeActiveId()
                        : this.liquiditySourcesQuery.getActiveId()) &&
                  void 0 !== i
                    ? i
                    : [],
                v = this.getAlternativesParams(n),
                I = this.getPresetParams(n);
              return Object.assign(
                Object.assign(
                  {
                    fromTokenAddress: s.address,
                    toTokenAddress: p.address,
                    amount: c.toString(),
                    gasPrice: h,
                    walletAddress: this.walletConnectionQuery.walletAddress,
                    protocolWhiteList: l,
                  },
                  v
                ),
                I
              );
            }
            getAlternativesParams(n) {
              var i;
              const r =
                  "otcResult" === n
                    ? []
                    : null !==
                        (i =
                          this.liquiditySourcesQuery.getAlternativeActiveId()) &&
                      void 0 !== i
                    ? i
                    : [],
                s = r.map((l) => this.getProtocolsDeepLevel(l)),
                p = r.map(() => 1),
                c = r.map(() => 1),
                h = r.map(() => 1);
              return {
                protocols: r,
                deepLevels: s,
                partsList: p,
                mainRoutePartsList: c,
                virtualPartsList: h,
              };
            }
            getPresetParams(n) {
              const r = Tt.p[this.activeConnectionQuery.currentChainId];
              return (
                ["maxReturnResult", "otcResult"].includes(n)
                  ? (null == r ? void 0 : r.maxResult) || []
                  : (null == r ? void 0 : r.lowerGasPreset) || []
              ).map((p) => ({
                deepLevel: p.deepLevel,
                mainRouteParts: p.mainParts,
                parts: p.subParts,
                virtualParts: p.virtualParts,
              }))[0];
            }
            getProtocolsDeepLevel(n) {
              return n === Pt.B.ZEROEX ? 0 : 1;
            }
          }
          return (
            (t.ɵfac = function (n) {
              return new (n || t)(
                e.ɵɵinject(x.r),
                e.ɵɵinject(T.G),
                e.ɵɵinject(It.j),
                e.ɵɵinject(G.Q),
                e.ɵɵinject(K.N),
                e.ɵɵinject(Mt),
                e.ɵɵinject(he.F),
                e.ɵɵinject($t.$),
                e.ɵɵinject(Ot.r),
                e.ɵɵinject(Ut.q)
              );
            }),
            (t.ɵprov = e.ɵɵdefineInjectable({
              token: t,
              factory: t.ɵfac,
              providedIn: M,
            })),
            t
          );
        })(),
        E = (() => {
          class t {
            constructor(n, i, r, s) {
              (this.activeConnectionQuery = n),
                (this.simpleSwapQuery = i),
                (this.router = r),
                (this.simpleSwapFormService = s);
            }
            navigateToDefaultSwapUrl() {
              this.router.navigateByUrl(this.getDefaultSwapUrl());
            }
            navigateToCurrentSwapUrl() {
              this.router.navigateByUrl(this.getCurrentSwapUrl());
            }
            getCurrentSwapUrl() {
              return this.router.createUrlTree([
                this.activeConnectionQuery.currentChainId,
                "unified",
                "swap",
              ]);
            }
            getDefaultSwapUrl() {
              const { currentChainId: n } = this.activeConnectionQuery,
                { sourceToken: i, destinationToken: r } =
                  this.simpleSwapFormService.getDefaultTokensPairByChainId(n);
              return this.router.createUrlTree([
                this.activeConnectionQuery.currentChainId,
                "unified",
                "swap",
                i.symbol,
                r.symbol,
              ]);
            }
            getSwapUrl(n, i, r = []) {
              return this.router.createUrlTree([
                this.activeConnectionQuery.currentChainId,
                "unified",
                "swap",
                n,
                i,
                ...r,
              ]);
            }
            getSwapFromStateUrl(n = []) {
              return this.router.createUrlTree([
                this.activeConnectionQuery.currentChainId,
                "unified",
                "swap",
                this.simpleSwapQuery.sourceToken.symbol,
                this.simpleSwapQuery.destinationToken.symbol,
                ...n,
              ]);
            }
          }
          return (
            (t.ɵfac = function (n) {
              return new (n || t)(
                e.ɵɵinject(x.r),
                e.ɵɵinject(T.G),
                e.ɵɵinject(g.F0),
                e.ɵɵinject(O.q)
              );
            }),
            (t.ɵprov = e.ɵɵdefineInjectable({
              token: t,
              factory: t.ɵfac,
              providedIn: M,
            })),
            t
          );
        })(),
        ge = (() => {
          class t {
            constructor(n, i) {
              (this.simpleSwapQuery = n), (this.unifiedRoutingService = i);
            }
            navigateToDefaultSwapUrlIfNeeded(n) {
              const { sourceToken: i, destinationToken: r } =
                this.simpleSwapQuery;
              (i.address === n.address || r.address === n.address) &&
                this.unifiedRoutingService.navigateToDefaultSwapUrl();
            }
            getImportLink(n) {
              const { destinationToken: i } = this.simpleSwapQuery;
              return this.unifiedRoutingService.getSwapUrl(
                n.address,
                i.symbol,
                ["import-token"]
              );
            }
          }
          return (
            (t.ɵfac = function (n) {
              return new (n || t)(e.ɵɵinject(T.G), e.ɵɵinject(E));
            }),
            (t.ɵprov = e.ɵɵdefineInjectable({ token: t, factory: t.ɵfac })),
            t
          );
        })();
      var q = o(79296),
        _t = o(70167);
      let ve = (() => {
        class t {
          constructor(n, i, r, s) {
            (this.swapFormPathfinderService = n),
              (this.webAnalyticsService = i),
              (this.swapFormService = r),
              (this.otcModeService = s),
              (this.subscription = new q.w0());
          }
          init() {
            this.swapFormPathfinderService.init(this.subscription),
              this.webAnalyticsService.pageView(
                "unified/swap",
                "Exchange / Market"
              ),
              this.resetPresetToMaxReturn();
          }
          reset() {
            this.subscription.unsubscribe(), (this.subscription = new q.w0());
          }
          resetPresetToMaxReturn() {
            this.swapFormService.selectQuotePreset("maxReturnResult"),
              this.otcModeService.resetOTCModeWhenItSet();
          }
        }
        return (
          (t.ɵfac = function (n) {
            return new (n || t)(
              e.ɵɵinject(ie.u),
              e.ɵɵinject(_t.y),
              e.ɵɵinject(O.q),
              e.ɵɵinject(X.N)
            );
          }),
          (t.ɵprov = e.ɵɵdefineInjectable({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      var Qt = o(13748),
        Bt = o(59226),
        fe = o(14806),
        Rt = o(90710),
        At = o(6904),
        Et = o(58983),
        V = o(84756),
        Lt = o(44432),
        Dt = o(86732),
        Gt = o(36995),
        Nt = o(14851),
        Vt = o(29229),
        zt = o(33798),
        Wt = o(95021),
        Se = o(36477),
        Ht = o(83358),
        Kt = o(21491),
        ye = o(2551);
      let Xt = (() => {
        class t {
          constructor(n, i, r, s, p, c) {
            (this.simpleSwapQuery = n),
              (this.swapFormQuery = i),
              (this.tokenBalanceQuery = r),
              (this.simpleSwapService = s),
              (this.pathfinderService = p),
              (this.activeConnectionQuery = c),
              (this.token$ = this.simpleSwapQuery.sourceToken$),
              (this.tokenAmount$ = this.simpleSwapQuery.sourceTokenAmount$),
              (this.tokenBalance$ = this.swapFormQuery.sourceTokenBalance$),
              (this.swapIsLocked$ = this.swapFormQuery.swapIsLocked$),
              (this.isSetMax$ = this.simpleSwapQuery
                .select("isSetMax")
                .pipe((0, k.x)())),
              (this.tokenAmountControl = new y.UntypedFormControl());
          }
          ngOnInit() {
            this.simpleSwapService.resetMax(), this.initSourceTokenAmount();
          }
          setMaxAmount() {
            const n = this.swapFormQuery.availableSourceTokenBalance$.pipe(
              (0, Ht.q)(1),
              (0, w.b)((i) => {
                const r = (0, Se.k3)({
                  balance: i.toString(),
                  decimals: this.simpleSwapQuery.sourceToken.decimals,
                  precision: this.simpleSwapQuery.sourceToken.decimals,
                });
                this.pathfinderService.reset(),
                  this.simpleSwapService.setMaxSourceTokenAmount(r),
                  this.tokenAmountControl.setValue(r, {
                    emitEvent: !1,
                    onlySelf: !0,
                  });
              })
            );
            (0, P.O)(n, "setMaxAmount()");
          }
          initSourceTokenAmount() {
            const n = (0, f.a)([
              this.tokenAmountControl.valueChanges,
              this.activeConnectionQuery.currentChainId$,
            ]).pipe(
              (0, Kt.b)(100),
              (0, Wt.BX)(),
              (0, u.U)(([r]) => +r),
              (0, k.x)(),
              (0, w.b)((r) => {
                this.simpleSwapService.setMaxReturnResultPreset(),
                  this.pathfinderService.reset(),
                  this.simpleSwapService.setSourceTokenAmount(`${r}`);
              })
            );
            (0, P.O)(n, "fromControlToStore$");
            const i = (0, f.a)([
              this.simpleSwapQuery.sourceTokenAmount$,
              this.activeConnectionQuery.currentChainId$,
            ]).pipe(
              (0, me.h)((r) => !!r),
              (0, u.U)(([r]) => r),
              (0, k.x)(),
              (0, w.b)((r) => {
                this.tokenAmountControl.setValue(r, {
                  emitEvent: !1,
                  onlySelf: !0,
                });
              })
            );
            (0, P.O)(i, "fromControlToStore$");
          }
        }
        return (
          (t.ɵfac = function (n) {
            return new (n || t)(
              e.ɵɵdirectiveInject(T.G),
              e.ɵɵdirectiveInject(j.y),
              e.ɵɵdirectiveInject(Se.n4),
              e.ɵɵdirectiveInject(O.q),
              e.ɵɵdirectiveInject(G.Q),
              e.ɵɵdirectiveInject(x.r)
            );
          }),
          (t.ɵcmp = e.ɵɵdefineComponent({
            type: t,
            selectors: [["source-token-input"]],
            decls: 6,
            vars: 17,
            consts: [
              [
                3,
                "formControl",
                "token",
                "tokenBalance",
                "showLock",
                "customTokenLinkString",
                "isSwapForm",
                "isSetMaxActive",
                "setMaxAmount",
              ],
            ],
            template: function (n, i) {
              1 & n &&
                (e.ɵɵelementStart(0, "token-select-input", 0),
                e.ɵɵlistener("setMaxAmount", function () {
                  return i.setMaxAmount();
                }),
                e.ɵɵpipe(1, "async"),
                e.ɵɵpipe(2, "async"),
                e.ɵɵpipe(3, "async"),
                e.ɵɵpipe(4, "transloco"),
                e.ɵɵpipe(5, "async"),
                e.ɵɵelementEnd()),
                2 & n &&
                  e.ɵɵproperty("formControl", i.tokenAmountControl)(
                    "token",
                    e.ɵɵpipeBind1(1, 7, i.token$)
                  )("tokenBalance", e.ɵɵpipeBind1(2, 9, i.tokenBalance$))(
                    "showLock",
                    e.ɵɵpipeBind1(3, 11, i.swapIsLocked$)
                  )(
                    "customTokenLinkString",
                    e.ɵɵpipeBind1(4, 13, "uni.swap.you-sell")
                  )("isSwapForm", !0)(
                    "isSetMaxActive",
                    e.ɵɵpipeBind1(5, 15, i.isSetMax$)
                  );
            },
            dependencies: [
              ye.Y,
              y.NgControlStatus,
              y.FormControlDirective,
              d.Ov,
              S.Ot,
            ],
            styles: ["[_nghost-%COMP%]{display:block}"],
            changeDetection: 0,
          })),
          t
        );
      })();
      var _ = o(33747),
        L = o(55231),
        Jt = o(6535),
        we = o(60300);
      let Zt = (() => {
        class t {
          constructor(n, i, r, s) {
            (this.onDestroy$ = n),
              (this.simpleSwapQuery = i),
              (this.swapFormQuery = r),
              (this.pathfinderQuery = s),
              (this.token$ = this.simpleSwapQuery.destinationToken$),
              (this.tokenAmount$ =
                this.simpleSwapQuery.destinationTokenAmount$),
              (this.tokenBalance$ =
                this.swapFormQuery.destinationTokenBalance$),
              (this.tokenAmountControl = new y.UntypedFormControl()),
              (this.swapInfo$ = this.simpleSwapQuery.swapTokensData$),
              (this.isLoading$ = (0, f.a)([
                this.swapFormQuery.pathfinderResponse$,
                this.swapInfo$,
              ]).pipe(
                (0, u.U)(([p, c]) => !(p && c && c.destinationTokenAmount))
              )),
              (this.subscription = new q.w0());
          }
          ngOnInit() {
            this.initInputValue();
          }
          initInputValue() {
            const n = (0, f.a)([
              this.pathfinderQuery.currentPathfinderQuote$,
              this.token$,
            ]).pipe(
              (0, w.b)(([i, r]) => {
                const s = (0, ue.kg)(i.toTokenAmount, r.decimals),
                  p = (0, Jt.g)(s, 6);
                this.tokenAmountControl.setValue(p || "");
              }),
              (0, L.R)(this.onDestroy$)
            );
            (0, P.O)(n, "inputValue$");
          }
        }
        return (
          (t.ɵfac = function (n) {
            return new (n || t)(
              e.ɵɵdirectiveInject(_.a3, 2),
              e.ɵɵdirectiveInject(T.G),
              e.ɵɵdirectiveInject(j.y),
              e.ɵɵdirectiveInject(we.o)
            );
          }),
          (t.ɵcmp = e.ɵɵdefineComponent({
            type: t,
            selectors: [["destination-token-input"]],
            features: [e.ɵɵProvidersFeature([_.a3])],
            decls: 6,
            vars: 18,
            consts: [
              [
                "type",
                "destination",
                "selectTokenLink",
                "select-destination-token",
                "mode",
                "view",
                1,
                "destination-token-input",
                3,
                "formControl",
                "token",
                "tokenBalance",
                "customTokenLinkString",
                "showMaxButton",
                "transparent",
                "swapInfo",
                "isLoading",
              ],
            ],
            template: function (n, i) {
              1 & n &&
                (e.ɵɵelement(0, "token-select-input", 0),
                e.ɵɵpipe(1, "async"),
                e.ɵɵpipe(2, "async"),
                e.ɵɵpipe(3, "transloco"),
                e.ɵɵpipe(4, "async"),
                e.ɵɵpipe(5, "async")),
                2 & n &&
                  e.ɵɵproperty("formControl", i.tokenAmountControl)(
                    "token",
                    e.ɵɵpipeBind1(1, 8, i.token$)
                  )("tokenBalance", e.ɵɵpipeBind1(2, 10, i.tokenBalance$))(
                    "customTokenLinkString",
                    e.ɵɵpipeBind1(3, 12, "uni.swap.you-buy")
                  )("showMaxButton", !1)("transparent", !0)(
                    "swapInfo",
                    e.ɵɵpipeBind1(4, 14, i.swapInfo$)
                  )("isLoading", e.ɵɵpipeBind1(5, 16, i.isLoading$));
            },
            dependencies: [
              ye.Y,
              y.NgControlStatus,
              y.FormControlDirective,
              d.Ov,
              S.Ot,
            ],
            styles: [
              "[_nghost-%COMP%]{display:block}.destination-token-input.transparent[_ngcontent-%COMP%]{border:1px solid var(--1inch-border-01)!important}.destination-token-input[_ngcontent-%COMP%]     .select-source-token:hover, .destination-token-input[_ngcontent-%COMP%]     .select-source-token:focus{background:var(--1inch-bg-07)}",
            ],
            changeDetection: 0,
          })),
          t
        );
      })();
      const Yt = [
        {
          type: "maxReturnResult",
          icon: "assets/images/icons/usd.svg#usd",
          title: "pathfinderQuickSwitch.max-return",
          dataId: "pathfinder-switch.maximum-return",
          disabled: !1,
        },
        {
          type: "lowestGasResult",
          icon: "assets/images/icons/fire.svg#fire",
          title: "pathfinderQuickSwitch.lowest-gas",
          dataId: "pathfinder-switch.lowest-gas",
          disabled: !1,
        },
        {
          type: "otcResult",
          icon: "assets/images/icons/otc.svg#otc",
          title: "pathfinderQuickSwitch.otc",
          dataId: "pathfinder-switch.otc",
          disabled: !1,
        },
      ];
      var qt = o(90463);
      let en = (() => {
        class t {
          constructor(n, i, r, s, p, c, h) {
            (this.swapSettingsQuery = n),
              (this.activeConnectionQuery = i),
              (this.liquiditySourcesQuery = r),
              (this.swapFormService = s),
              (this.simpleSwapQuery = p),
              (this.pathfinderQuickSwitchService = c),
              (this.destroy$ = h),
              (this.pathFinderControl = new y.FormControl(
                this.simpleSwapQuery.currentPreset
              )),
              (this.pathFinderToggleValues$ =
                this.liquiditySourcesQuery.isOtcModeAvailable$.pipe(
                  (0, k.x)(),
                  (0, u.U)((l) =>
                    Yt.map((v) =>
                      Object.assign(Object.assign({}, v), {
                        value: v.type,
                        title: v.title,
                        disabled: "otcResult" === v.type && !l,
                      })
                    )
                  )
                ));
          }
          ngOnInit() {
            this.resetPathfinderPresetOnChanges(),
              this.persistStoreToControl(),
              this.persistControlToStore();
          }
          persistControlToStore() {
            const n = this.pathFinderControl.valueChanges.pipe(
              (0, w.b)((i) => {
                this.pathfinderQuickSwitchService.changePathfinderPreset(i);
              }),
              (0, L.R)(this.destroy$)
            );
            (0, P.O)(n, "pathFinderControlChanged$");
          }
          persistStoreToControl() {
            const n = this.simpleSwapQuery.currentPreset$.pipe(
              (0, w.b)((i) => {
                i !== this.pathFinderControl.value &&
                  this.pathFinderControl.setValue(i);
              }),
              (0, L.R)(this.destroy$)
            );
            (0, P.O)(n, "pathFinderStoreChanged$");
          }
          resetPathfinderPresetOnChanges() {
            const n = this.swapFormService.triggerToResetCurrentPreset$.pipe(
              (0, w.b)(() => {
                this.pathfinderQuickSwitchService.changePathfinderPreset(
                  "maxReturnResult"
                );
              }),
              (0, L.R)(this.destroy$)
            );
            (0, P.O)(n, "resetPathfinderPresetOnChanges$");
          }
        }
        return (
          (t.ɵfac = function (n) {
            return new (n || t)(
              e.ɵɵdirectiveInject(N.G),
              e.ɵɵdirectiveInject(x.r),
              e.ɵɵdirectiveInject(he.F),
              e.ɵɵdirectiveInject(O.q),
              e.ɵɵdirectiveInject(T.G),
              e.ɵɵdirectiveInject(J),
              e.ɵɵdirectiveInject(_.a3, 2)
            );
          }),
          (t.ɵcmp = e.ɵɵdefineComponent({
            type: t,
            selectors: [["pathfinder-quick-switch"]],
            features: [e.ɵɵProvidersFeature([_.a3])],
            decls: 2,
            vars: 5,
            consts: [[3, "formControl", "values", "selectedValue"]],
            template: function (n, i) {
              1 & n &&
                (e.ɵɵelement(0, "app-advanced-settings-toggle-group", 0),
                e.ɵɵpipe(1, "async")),
                2 & n &&
                  e.ɵɵproperty("formControl", i.pathFinderControl)(
                    "values",
                    e.ɵɵpipeBind1(1, 3, i.pathFinderToggleValues$)
                  )("selectedValue", i.pathFinderControl.value);
            },
            dependencies: [
              y.NgControlStatus,
              y.FormControlDirective,
              qt.e,
              d.Ov,
            ],
            styles: ["[_nghost-%COMP%]{display:block}"],
          })),
          t
        );
      })();
      var tn = o(52126),
        nn = o(98569);
      function on(t, a) {
        if (
          (1 & t &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵelement(1, "swap-separator", 14),
            e.ɵɵpipe(2, "async"),
            e.ɵɵelementContainerEnd()),
          2 & t)
        ) {
          const n = a.tuiLet,
            i = e.ɵɵnextContext();
          e.ɵɵadvance(1),
            e.ɵɵproperty("rotatable", !n)(
              "reverseTokensLink",
              n ? null : e.ɵɵpipeBind1(2, 2, i.reverseTokensUrl$)
            );
        }
      }
      function an(t, a) {
        1 & t && e.ɵɵelement(0, "pathfinder-quick-switch", 15);
      }
      const rn = function (t) {
        return { value: t };
      };
      function sn(t, a) {
        if (
          (1 & t &&
            (e.ɵɵelementStart(0, "alert", 16),
            e.ɵɵtext(1),
            e.ɵɵpipe(2, "transloco"),
            e.ɵɵpipe(3, "async"),
            e.ɵɵelementEnd()),
          2 & t)
        ) {
          const n = e.ɵɵnextContext();
          e.ɵɵproperty("hideCloseButton", !0),
            e.ɵɵadvance(1),
            e.ɵɵtextInterpolate1(
              " ",
              e.ɵɵpipeBind2(
                2,
                2,
                "swap-confirmation.alert.price-impact",
                e.ɵɵpureFunction1(7, rn, e.ɵɵpipeBind1(3, 5, n.priceImpact$))
              ),
              "\n"
            );
        }
      }
      const pn = function () {
        return ["settings", "custom-tokens", "add-token"];
      };
      let cn = (() => {
        class t {
          constructor(n, i, r, s, p, c, h, l, v, I, C, U) {
            (this.swapFormRefreshService = n),
              (this.pathfinderService = i),
              (this.simpleSwapQuery = r),
              (this.router = s),
              (this.simpleSwapButtonStateService = p),
              (this.swapSettingsQuery = c),
              (this.pathfinderQuickSwitchService = h),
              (this.swapPriceImpactService = l),
              (this.activatedRoute = v),
              (this.swapFormQuery = I),
              (this.settingToggleService = C),
              (this.activeConnectionQuery = U),
              (this.customTokenRouterState = { backTo: this.router.url }),
              (this.sourceToken$ = this.simpleSwapQuery.sourceToken$),
              (this.destinationToken$ = this.simpleSwapQuery.destinationToken$),
              (this.isEmbeddedSwap$ = Et.c),
              (this.reverseTokensUrl$ = (0, f.a)([
                this.sourceToken$,
                this.destinationToken$,
              ]).pipe(
                (0, u.U)(([m, $]) => `../../${m.symbol}/${$.symbol}/reverse`)
              )),
              (this.swapTokensData$ = this.simpleSwapQuery.swapTokensData$),
              (this.isPathfinderQuickSwitchEnabled$ =
                this.swapSettingsQuery.isRoutePresetsEnabled$.pipe(
                  (0, k.x)(),
                  (0, w.b)((m) => {
                    m ||
                      this.pathfinderQuickSwitchService.changePathfinderPreset(
                        "maxReturnResult"
                      );
                  })
                )),
              (this.isLoading$ = (0, f.a)([
                this.swapFormQuery.pathfinderResponse$,
                this.swapTokensData$,
              ]).pipe(
                (0, u.U)(([m, $]) => !(m && $ && $.destinationTokenAmount))
              )),
              (this.swapButtonState$ = (0, f.a)([
                this.simpleSwapButtonStateService.swapButtonState$,
                this.isLoading$,
              ]).pipe(
                (0, u.U)(([m, $]) =>
                  $ &&
                  [
                    V.N.swapEnabledWithHighPriceImpact,
                    V.N.swapEnabled,
                  ].includes(m)
                    ? V.N.loading
                    : m
                )
              )),
              (this.priceImpact$ = this.swapTokensData$.pipe(
                (0, D.w)((m) =>
                  this.swapPriceImpactService.getSwapPriceImpact$(m)
                )
              )),
              (this.showPriceImpactWarning$ = (0, f.a)([
                this.simpleSwapButtonStateService.swapButtonState$,
                this.isLoading$,
                this.priceImpact$.pipe(
                  (0, u.U)((m) =>
                    this.swapPriceImpactService.isHighPriceImpact(m)
                  )
                ),
              ]).pipe(
                (0, u.U)(
                  ([m, $, Ei]) => Ei && m !== V.N.insufficientLiquidity && !$
                )
              )),
              (this.timerDuration$ =
                this.activeConnectionQuery.currentChainBackgroundQuotes$.pipe(
                  (0, u.U)((m) => m / 1e3)
                ));
          }
          ngOnInit() {
            this.pathfinderService.reset(), this.manualRefresh();
          }
          manualRefresh() {
            this.pathfinderService.reset(),
              this.swapFormRefreshService.manualRefresh$.next();
          }
          updateGasSettings() {
            this.settingToggleService.changeIsWidgetOpened({
              isOpened: !0,
              contextId: "unified-swap",
              widgetId: "gas-price",
            });
          }
          startSwapFlow() {
            return (0, Y.__awaiter)(this, void 0, void 0, function* () {
              yield this.router.navigate(["confirm"], {
                relativeTo: this.activatedRoute,
                state: { isEnabled: !0 },
              });
            });
          }
        }
        return (
          (t.ɵfac = function (n) {
            return new (n || t)(
              e.ɵɵdirectiveInject(K.N),
              e.ɵɵdirectiveInject(G.Q),
              e.ɵɵdirectiveInject(T.G),
              e.ɵɵdirectiveInject(g.F0),
              e.ɵɵdirectiveInject(re.w),
              e.ɵɵdirectiveInject(N.G),
              e.ɵɵdirectiveInject(J),
              e.ɵɵdirectiveInject(Lt.f),
              e.ɵɵdirectiveInject(g.gz),
              e.ɵɵdirectiveInject(j.y),
              e.ɵɵdirectiveInject(Dt.d),
              e.ɵɵdirectiveInject(x.r)
            );
          }),
          (t.ɵcmp = e.ɵɵdefineComponent({
            type: t,
            selectors: [["unified-swap-form"]],
            decls: 24,
            vars: 25,
            consts: [
              [1, "swap-form-header"],
              [1, "swap-form-actions"],
              [
                "id",
                "swap-box.refresh-button",
                "data-id",
                "swap-box.refresh-button",
                1,
                "refresh-icon",
                "blank-button",
                3,
                "click",
              ],
              [3, "width", "height", "duration"],
              [
                "data-id",
                "custom-token-dialog",
                1,
                "settings-icon",
                "custom-token",
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
                "id",
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
              [4, "tuiLet"],
              [
                "domain",
                "unified-swap-embed",
                1,
                "embed-settings",
                3,
                "compactMode",
              ],
              ["class", "unified-swap-form_pathfinder-quick-switch", 4, "ngIf"],
              [3, "hideCloseButton", 4, "ngIf"],
              [
                1,
                "unified-swap-form_swap-button",
                3,
                "swapInfo",
                "swapButtonState",
                "isCustomFlowForUpdateGasSettings",
                "swap",
                "updateGasSettings",
              ],
              [3, "rotatable", "reverseTokensLink"],
              [1, "unified-swap-form_pathfinder-quick-switch"],
              [3, "hideCloseButton"],
            ],
            template: function (n, i) {
              1 & n &&
                (e.ɵɵelementStart(0, "div", 0),
                e.ɵɵelement(1, "trade-menu"),
                e.ɵɵelementStart(2, "div", 1)(3, "button", 2),
                e.ɵɵlistener("click", function () {
                  return i.manualRefresh();
                }),
                e.ɵɵelement(4, "arrow-locator-loading", 3),
                e.ɵɵpipe(5, "async"),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(6, "a", 4),
                e.ɵɵnamespaceSVG(),
                e.ɵɵelementStart(7, "svg", 5),
                e.ɵɵelement(8, "use", 6),
                e.ɵɵelementEnd()(),
                e.ɵɵnamespaceHTML(),
                e.ɵɵelementStart(9, "a", 7),
                e.ɵɵnamespaceSVG(),
                e.ɵɵelementStart(10, "svg", 5),
                e.ɵɵelement(11, "use", 8),
                e.ɵɵelementEnd()()()(),
                e.ɵɵnamespaceHTML(),
                e.ɵɵelement(12, "source-token-input"),
                e.ɵɵtemplate(13, on, 3, 4, "ng-container", 9),
                e.ɵɵpipe(14, "async"),
                e.ɵɵelement(15, "destination-token-input")(
                  16,
                  "swap-settings",
                  10
                ),
                e.ɵɵtemplate(17, an, 1, 0, "pathfinder-quick-switch", 11),
                e.ɵɵpipe(18, "async"),
                e.ɵɵtemplate(19, sn, 4, 9, "alert", 12),
                e.ɵɵpipe(20, "async"),
                e.ɵɵelementStart(21, "swap-button", 13),
                e.ɵɵlistener("swap", function () {
                  return i.startSwapFlow();
                })("updateGasSettings", function () {
                  return i.updateGasSettings();
                }),
                e.ɵɵpipe(22, "async"),
                e.ɵɵpipe(23, "async"),
                e.ɵɵelementEnd()),
                2 & n &&
                  (e.ɵɵadvance(4),
                  e.ɵɵproperty("width", 36)("height", 36)(
                    "duration",
                    e.ɵɵpipeBind1(5, 12, i.timerDuration$)
                  ),
                  e.ɵɵadvance(2),
                  e.ɵɵproperty("routerLink", e.ɵɵpureFunction0(24, pn))(
                    "state",
                    i.customTokenRouterState
                  ),
                  e.ɵɵadvance(7),
                  e.ɵɵproperty(
                    "tuiLet",
                    e.ɵɵpipeBind1(14, 14, i.isEmbeddedSwap$)
                  ),
                  e.ɵɵadvance(3),
                  e.ɵɵproperty("compactMode", !0),
                  e.ɵɵadvance(1),
                  e.ɵɵproperty(
                    "ngIf",
                    e.ɵɵpipeBind1(18, 16, i.isPathfinderQuickSwitchEnabled$)
                  ),
                  e.ɵɵadvance(2),
                  e.ɵɵproperty(
                    "ngIf",
                    e.ɵɵpipeBind1(20, 18, i.showPriceImpactWarning$)
                  ),
                  e.ɵɵadvance(2),
                  e.ɵɵproperty(
                    "swapInfo",
                    e.ɵɵpipeBind1(22, 20, i.swapTokensData$)
                  )(
                    "swapButtonState",
                    e.ɵɵpipeBind1(23, 22, i.swapButtonState$)
                  )("isCustomFlowForUpdateGasSettings", !0));
            },
            dependencies: [
              d.O5,
              g.yS,
              Gt.g,
              Nt.X,
              Vt.q,
              zt.C,
              Xt,
              Zt,
              B.Ls,
              en,
              tn.W,
              nn.w,
              d.Ov,
              S.Ot,
            ],
            styles: [
              "[_nghost-%COMP%]{display:block;position:relative}.swap-form-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;margin-top:-8px}.swap-form-actions[_ngcontent-%COMP%]{display:flex;margin-right:-4px}.swap-form-actions[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{color:var(--1inch-text-01)}.refresh-icon[_ngcontent-%COMP%]{margin-right:6px}.settings-icon[_ngcontent-%COMP%]{padding:6px}.refresh-icon[_ngcontent-%COMP%], .settings-icon[_ngcontent-%COMP%]{cursor:pointer;width:36px;height:36px;border-radius:12px;transition:background .2s}.refresh-icon[_ngcontent-%COMP%]:hover, .refresh-icon[_ngcontent-%COMP%]:focus, .settings-icon[_ngcontent-%COMP%]:hover, .settings-icon[_ngcontent-%COMP%]:focus{background:var(--1inch-common-btn-bg-03)}.unified-swap-form_swap-button[_ngcontent-%COMP%]{margin-top:8px}.unified-swap-form_pathfinder-quick-switch[_ngcontent-%COMP%]{margin-top:16px}.unified-swap-form_pathfinder-quick-switch[_ngcontent-%COMP%] + .unified-swap-form_swap-button[_ngcontent-%COMP%]{margin-top:16px!important}.embed-settings[_ngcontent-%COMP%]     .advanced-setting{margin:16px 0 24px}.embed-settings[_ngcontent-%COMP%]     .advanced-setting:last-of-type{margin-bottom:24px}.custom-token[_ngcontent-%COMP%]{margin-right:6px}",
            ],
            changeDetection: 0,
          })),
          t
        );
      })();
      var ee = o(68435);
      let ln = (() => {
        class t {
          constructor(n, i) {
            (this.globalSettingsQuery = n),
              (this.destroy$ = i),
              (this.isSimpleMode = !0);
          }
          get isSimpleModeEnabled() {
            return this.isSimpleMode;
          }
          set isSimpleModeEnabled(n) {
            this.isSimpleMode = n;
          }
          ngOnInit() {
            const n = this.globalSettingsQuery.swapPageLayout$.pipe(
              (0, w.b)(({ showCharts: i, showRouting: r, showTables: s }) => {
                this.isSimpleModeEnabled = !i && !r && !s;
              }),
              (0, L.R)(this.destroy$)
            );
            (0, P.O)(n, "isSimpleModeChanged$");
          }
        }
        return (
          (t.ɵfac = function (n) {
            return new (n || t)(
              e.ɵɵdirectiveInject(ee.J),
              e.ɵɵdirectiveInject(_.a3, 2)
            );
          }),
          (t.ɵcmp = e.ɵɵdefineComponent({
            type: t,
            selectors: [["unified-swap-container"]],
            hostVars: 2,
            hostBindings: function (n, i) {
              2 & n &&
                e.ɵɵclassProp(
                  "unified-card__simple-mode",
                  i.isSimpleModeEnabled
                );
            },
            features: [e.ɵɵProvidersFeature([_.a3])],
            decls: 1,
            vars: 0,
            template: function (n, i) {
              1 & n && e.ɵɵelement(0, "router-outlet");
            },
            dependencies: [g.lC],
            styles: [
              "[_nghost-%COMP%]{display:block;margin:0 auto;width:480px;min-height:100px;background-color:var(--1inch-bg-02);box-shadow:var(--1inch-shadow-04);border-radius:24px;padding:16px;max-width:100%}.unified-card__simple-mode[_nghost-%COMP%]{width:418px!important}",
            ],
            changeDetection: 0,
          })),
          t
        );
      })();
      var z = o(29611),
        Ce = o(39700),
        te = o(74941),
        dn = o(73021),
        un = o(4671),
        mn = o(64324),
        hn = o(91664);
      function gn(t, a) {
        1 & t &&
          (e.ɵɵelementStart(0, "div", 8),
          e.ɵɵelement(1, "img", 9),
          e.ɵɵelementEnd());
      }
      function vn(t, a) {
        if ((1 & t && e.ɵɵelement(0, "pathfinder-routing", 10), 2 & t)) {
          const n = e.ɵɵnextContext(2);
          e.ɵɵproperty("sourceToken", n.tokensPair.sourceToken)(
            "destinationToken",
            n.tokensPair.destinationToken
          )("isLoading", !1)("routes", n.routes);
        }
      }
      function fn(t, a) {
        if (
          (1 & t &&
            (e.ɵɵnamespaceSVG(),
            e.ɵɵnamespaceHTML(),
            e.ɵɵelementContainerStart(0),
            e.ɵɵtemplate(1, gn, 2, 0, "div", 6),
            e.ɵɵtemplate(2, vn, 1, 4, "pathfinder-routing", 7),
            e.ɵɵelementContainerEnd()),
          2 & t)
        ) {
          const n = e.ɵɵnextContext();
          e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", !n.routes),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", n.routes);
        }
      }
      let Sn = (() => {
        class t {
          constructor(n, i) {
            (this.tuiDialogService = n), (this.injector = i);
          }
          showFullscreenRouting() {
            if (!this.routes) return;
            const n = {
                sourceToken: this.tokensPair.sourceToken,
                destinationToken: this.tokensPair.destinationToken,
                routes: this.routes,
              },
              i = this.tuiDialogService.open(new mn.Al(un.T, this.injector), {
                data: n,
              });
            (0, P.O)(i, "PathfinderRoutePopupComponent open");
          }
        }
        return (
          (t.ɵfac = function (n) {
            return new (n || t)(
              e.ɵɵdirectiveInject(ae.RO),
              e.ɵɵdirectiveInject(e.Injector)
            );
          }),
          (t.ɵcmp = e.ɵɵdefineComponent({
            type: t,
            selectors: [["unified-routing-box"]],
            inputs: { tokensPair: "tokensPair", routes: "routes" },
            decls: 7,
            vars: 1,
            consts: [
              [1, "routing-header"],
              ["transloco", "swapPage.routing", 1, "routing-title"],
              [
                "data-id",
                "routing.full-screen-button",
                1,
                "blank-button",
                3,
                "click",
              ],
              ["width", "16", "height", "16"],
              [
                0,
                "xlink",
                "href",
                "assets/images/icons/fullscreen_2.svg#fullscreen",
              ],
              [4, "ngIf"],
              ["class", "routing-loader", 4, "ngIf"],
              [
                3,
                "sourceToken",
                "destinationToken",
                "isLoading",
                "routes",
                4,
                "ngIf",
              ],
              [1, "routing-loader"],
              ["src", "/assets/images/loader3.svg", "alt", "loader"],
              [3, "sourceToken", "destinationToken", "isLoading", "routes"],
            ],
            template: function (n, i) {
              1 & n &&
                (e.ɵɵelementStart(0, "div", 0)(1, "span", 1),
                e.ɵɵtext(2, "Routing"),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(3, "button", 2),
                e.ɵɵlistener("click", function () {
                  return i.showFullscreenRouting();
                }),
                e.ɵɵnamespaceSVG(),
                e.ɵɵelementStart(4, "svg", 3),
                e.ɵɵelement(5, "use", 4),
                e.ɵɵelementEnd()()(),
                e.ɵɵtemplate(6, fn, 3, 2, "ng-container", 5)),
                2 & n && (e.ɵɵadvance(6), e.ɵɵproperty("ngIf", i.tokensPair));
            },
            dependencies: [d.O5, hn.Q, S.KI],
            styles: [
              ".routing-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:24px}.routing-header[_ngcontent-%COMP%]   .blank-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{color:var(--1inch__ui-02)}.routing-header[_ngcontent-%COMP%]   .blank-button[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]{color:var(--1inch-common-btn-bg-01)}.routing-title[_ngcontent-%COMP%]{font-size:24px;line-height:28px;font-weight:500}.routing-loader[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:100%;padding:16px}.routing-loader[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40px;height:40px}",
            ],
            changeDetection: 0,
          })),
          t
        );
      })();
      var yn = o(98586),
        wn = o(33643),
        Cn = o(65083),
        xn = o(64342),
        Tn = o(43180),
        xe = o(76027),
        W = o(96479),
        Pn = o(40548);
      const kn = ["usd", "tokenAmount", "rate", "invertRate"];
      var In = o(80135),
        bn = o(29889),
        Mn = o(70859),
        $n = o(16350),
        On = o(94226),
        Un = o(79714),
        Fn = o(58877),
        jn = o(86345),
        _n = o(65007),
        Qn = o(83140);
      function Bn(t, a) {
        if (1 & t) {
          const n = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "button", 12),
            e.ɵɵlistener("click", function () {
              const s = e.ɵɵrestoreView(n).$implicit,
                p = e.ɵɵnextContext(2);
              return e.ɵɵresetView(p.setComparisonMode(s));
            }),
            e.ɵɵtext(1),
            e.ɵɵpipe(2, "transloco"),
            e.ɵɵelementEnd();
        }
        if (2 & t) {
          const n = a.$implicit,
            i = e.ɵɵnextContext(2);
          e.ɵɵclassProp("option_selected", i.comparisonMode === n),
            e.ɵɵadvance(1),
            e.ɵɵtextInterpolate1(
              " ",
              e.ɵɵpipeBind1(2, 3, i.getValueColumnTitle(n)),
              " "
            );
        }
      }
      function Rn(t, a) {
        if (
          (1 & t &&
            (e.ɵɵnamespaceSVG(),
            e.ɵɵnamespaceHTML(),
            e.ɵɵelementStart(0, "div", 10),
            e.ɵɵtemplate(1, Bn, 3, 5, "button", 11),
            e.ɵɵelementEnd()),
          2 & t)
        ) {
          const n = e.ɵɵnextContext();
          e.ɵɵadvance(1), e.ɵɵproperty("ngForOf", n.comparisonModes);
        }
      }
      function An(t, a) {
        if ((1 & t && (e.ɵɵtext(0), e.ɵɵpipe(1, "tuiFormatNumber")), 2 & t)) {
          const n = e.ɵɵnextContext(2).$implicit;
          e.ɵɵtextInterpolate1("-", e.ɵɵpipeBind1(1, 1, n.txGasEth), "");
        }
      }
      function En(t, a) {
        if (
          (1 & t &&
            (e.ɵɵtext(0),
            e.ɵɵpipe(1, "currentNetworkToken"),
            e.ɵɵpipe(2, "async")),
          2 & t)
        ) {
          const n = e.ɵɵnextContext(3);
          e.ɵɵtextInterpolate(
            e.ɵɵpipeBind1(1, 1, e.ɵɵpipeBind1(2, 3, n.networkType$))
          );
        }
      }
      const Ln = function (t, a) {
        return { txGasUsd: t, network: a };
      };
      function Dn(t, a) {
        if (
          (1 & t &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵelementStart(1, "span"),
            e.ɵɵtext(2),
            e.ɵɵpipe(3, "tuiFormatNumber"),
            e.ɵɵelementEnd(),
            e.ɵɵelement(4, "tooltip", 19),
            e.ɵɵpipe(5, "transloco"),
            e.ɵɵpipe(6, "networkName"),
            e.ɵɵpipe(7, "async"),
            e.ɵɵelement(8, "tooltip", 19),
            e.ɵɵpipe(9, "symbolName"),
            e.ɵɵpipe(10, "currentNetworkToken"),
            e.ɵɵpipe(11, "async"),
            e.ɵɵtemplate(
              12,
              An,
              2,
              3,
              "ng-template",
              null,
              20,
              e.ɵɵtemplateRefExtractor
            ),
            e.ɵɵtemplate(
              14,
              En,
              3,
              5,
              "ng-template",
              null,
              21,
              e.ɵɵtemplateRefExtractor
            ),
            e.ɵɵelementContainerEnd()),
          2 & t)
        ) {
          const n = e.ɵɵreference(13),
            i = e.ɵɵreference(15),
            r = e.ɵɵnextContext().$implicit,
            s = e.ɵɵnextContext();
          e.ɵɵadvance(2),
            e.ɵɵtextInterpolate2(
              "",
              e.ɵɵpipeBind1(3, 6, r.amount),
              " ",
              r.tokenSymbol,
              ""
            ),
            e.ɵɵadvance(2),
            e.ɵɵproperty(
              "tooltip",
              e.ɵɵpipeBind2(
                5,
                8,
                "alternativesPreview.network-gas-fees",
                e.ɵɵpureFunction2(
                  21,
                  Ln,
                  r.txGasUsd,
                  e.ɵɵpipeBind1(6, 11, e.ɵɵpipeBind1(7, 13, s.networkType$))
                )
              )
            )("customElement", n),
            e.ɵɵadvance(4),
            e.ɵɵproperty(
              "tooltip",
              e.ɵɵpipeBind1(
                9,
                15,
                e.ɵɵpipeBind1(10, 17, e.ɵɵpipeBind1(11, 19, s.networkType$))
              )
            )("customElement", i);
        }
      }
      function Gn(t, a) {
        if (
          (1 & t && (e.ɵɵelement(0, "tooltip", 24), e.ɵɵpipe(1, "transloco")),
          2 & t)
        ) {
          e.ɵɵnextContext();
          const n = e.ɵɵreference(6);
          e.ɵɵproperty(
            "tooltip",
            e.ɵɵpipeBind1(1, 2, "alternativesPreview.compared-to-1inch")
          )("customElement", n);
        }
      }
      function Nn(t, a) {
        if ((1 & t && (e.ɵɵtext(0), e.ɵɵpipe(1, "formatRateUsd")), 2 & t)) {
          const n = e.ɵɵnextContext(2).$implicit;
          e.ɵɵtextInterpolate1("(", e.ɵɵpipeBind1(1, 1, n.diffUsd), ")");
        }
      }
      function Vn(t, a) {
        if (
          (1 & t &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵelementStart(1, "span"),
            e.ɵɵtext(2),
            e.ɵɵpipe(3, "formatRateUsd"),
            e.ɵɵelementEnd(),
            e.ɵɵtemplate(4, Gn, 2, 4, "tooltip", 22),
            e.ɵɵtemplate(
              5,
              Nn,
              2,
              3,
              "ng-template",
              null,
              23,
              e.ɵɵtemplateRefExtractor
            ),
            e.ɵɵelementContainerEnd()),
          2 & t)
        ) {
          const n = e.ɵɵnextContext().$implicit;
          e.ɵɵadvance(2),
            e.ɵɵtextInterpolate(e.ɵɵpipeBind1(3, 2, n.fiatEstimation)),
            e.ɵɵadvance(2),
            e.ɵɵproperty("ngIf", n.diffUsd <= -0.01);
        }
      }
      function zn(t, a) {
        if (
          (1 & t &&
            (e.ɵɵelement(0, "token-amount", 25), e.ɵɵpipe(1, "toBigInt")),
          2 & t)
        ) {
          const n = e.ɵɵnextContext().$implicit,
            i = e.ɵɵnextContext();
          e.ɵɵproperty(
            "value",
            e.ɵɵpipeBind2(1, 2, n.inverseRate, i.rateDecimals)
          )("decimals", i.rateDecimals);
        }
      }
      function Wn(t, a) {
        if (
          (1 & t &&
            (e.ɵɵelement(0, "token-amount", 25), e.ɵɵpipe(1, "toBigInt")),
          2 & t)
        ) {
          const n = e.ɵɵnextContext().$implicit,
            i = e.ɵɵnextContext();
          e.ɵɵproperty("value", e.ɵɵpipeBind2(1, 2, n.rate, i.rateDecimals))(
            "decimals",
            i.rateDecimals
          );
        }
      }
      function Hn(t, a) {
        if (
          (1 & t &&
            (e.ɵɵelementStart(0, "div", 28),
            e.ɵɵtext(1),
            e.ɵɵpipe(2, "percentDifference"),
            e.ɵɵpipe(3, "transloco"),
            e.ɵɵelementEnd()),
          2 & t)
        ) {
          const n = e.ɵɵnextContext(2).$implicit;
          e.ɵɵclassProp("green", 0 === n.diffPercent)("red", n.diffPercent < 0),
            e.ɵɵadvance(1),
            e.ɵɵtextInterpolate1(
              " ",
              n.diffPercent
                ? e.ɵɵpipeBind1(2, 5, n.diffPercent)
                : e.ɵɵpipeBind1(3, 7, "alternativesPreview.match"),
              " "
            );
        }
      }
      function Kn(t, a) {
        1 & t &&
          (e.ɵɵelementStart(0, "div", 29),
          e.ɵɵtext(1, " BEST "),
          e.ɵɵelementEnd());
      }
      function Xn(t, a) {
        if (
          (1 & t &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵtemplate(1, Hn, 4, 9, "div", 26),
            e.ɵɵtemplate(2, Kn, 2, 0, "div", 27),
            e.ɵɵelementContainerEnd()),
          2 & t)
        ) {
          const n = e.ɵɵnextContext().$implicit;
          e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", !n.isOneInch && n.hasLiquidity),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", n.isOneInch);
        }
      }
      function Jn(t, a) {
        if (
          (1 & t &&
            (e.ɵɵelementStart(0, "div", 1)(1, "div", 13)(2, "div", 14),
            e.ɵɵelement(3, "img", 15),
            e.ɵɵelementStart(4, "span"),
            e.ɵɵtext(5),
            e.ɵɵpipe(6, "liquiditySourceName"),
            e.ɵɵelementEnd()(),
            e.ɵɵelementStart(7, "div", 16),
            e.ɵɵtemplate(8, Dn, 16, 24, "ng-container", 17),
            e.ɵɵtemplate(9, Vn, 7, 4, "ng-container", 17),
            e.ɵɵtemplate(10, zn, 2, 5, "token-amount", 18),
            e.ɵɵtemplate(11, Wn, 2, 5, "token-amount", 18),
            e.ɵɵelementEnd()(),
            e.ɵɵtemplate(12, Xn, 3, 2, "ng-container", 17),
            e.ɵɵelementEnd()),
          2 & t)
        ) {
          const n = a.$implicit,
            i = e.ɵɵnextContext();
          e.ɵɵattribute(
            "data-id",
            n.pathFinderId
              ? "alternative" + n.pathFinderId
              : "alternative-1inch"
          ),
            e.ɵɵadvance(3),
            e.ɵɵproperty("src", n.iconPath, e.ɵɵsanitizeUrl),
            e.ɵɵadvance(2),
            e.ɵɵtextInterpolate(e.ɵɵpipeBind1(6, 8, n.sourceName)),
            e.ɵɵadvance(3),
            e.ɵɵproperty("ngIf", "tokenAmount" === i.comparisonMode),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", "usd" === i.comparisonMode),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", "rate" === i.comparisonMode),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", "invertRate" === i.comparisonMode),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", n.amount);
        }
      }
      const Zn = function () {
        return [5, 10, 25, 100];
      };
      function Yn(t, a) {
        if (1 & t) {
          const n = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "mat-paginator", 31),
            e.ɵɵlistener("page", function (r) {
              e.ɵɵrestoreView(n);
              const s = e.ɵɵnextContext(2);
              return e.ɵɵresetView(s.onPageSelect(r));
            }),
            e.ɵɵelementEnd();
        }
        if (2 & t) {
          const n = e.ɵɵnextContext().tuiLet,
            i = e.ɵɵnextContext();
          e.ɵɵproperty("length", n.length)("pageIndex", i.pageIndex)(
            "pageSize",
            i.pageSize
          )("pageSizeOptions", e.ɵɵpureFunction0(4, Zn));
        }
      }
      function qn(t, a) {
        if (
          (1 & t &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵtemplate(1, Yn, 1, 5, "mat-paginator", 30),
            e.ɵɵelementContainerEnd()),
          2 & t)
        ) {
          const n = a.tuiLet;
          e.ɵɵadvance(1), e.ɵɵproperty("ngIf", n.length);
        }
      }
      const ei = {
        tokenAmount: () => "field.amount",
        usd: () => "value.usd2",
        rate: ({ sourceToken: t, destinationToken: a }) =>
          `${(0, W.O)(t)} / ${(0, W.O)(a)}`,
        invertRate: ({ sourceToken: t, destinationToken: a }) =>
          `${(0, W.O)(a)} / ${(0, W.O)(t)}`,
      };
      let ti = (() => {
        class t {
          constructor(n) {
            (this.activeConnectionQuery = n),
              (this.allAlternatives$ = new xe.X([])),
              (this.networkType$ =
                this.activeConnectionQuery.currentUiChain$.pipe(
                  (0, u.U)((i) => i.type)
                )),
              (this.comparisonModes = kn),
              (this.comparisonMode = "rate"),
              (this.dropdownOpened = !1),
              (this.rateDecimals = Pn.q),
              (this.pageSize = 10),
              (this.pageIndex = 0);
          }
          set alternatives(n) {
            this.allAlternatives$.next(null != n ? n : []),
              this.showPage(this.pageIndex, this.pageSize);
          }
          getValueColumnTitle(n) {
            return ei[n]({
              sourceToken: this.sourceToken,
              destinationToken: this.destinationToken,
            });
          }
          setComparisonMode(n) {
            (this.comparisonMode = n), (this.dropdownOpened = !1);
          }
          showPage(n, i) {
            const r = n * i,
              s = this.allAlternatives$.value;
            (this.pageSize = i),
              (this.displayedAlternatives = s.slice(r, r + i));
          }
          onPageSelect(n) {
            const { pageIndex: i, pageSize: r } = n;
            void 0 !== i && void 0 !== r
              ? ((this.pageIndex = i), this.showPage(i, r))
              : Qn.error(
                  "AlternativesPreviewComponent.onPageSelect() pageIndex or pageSize is undefined",
                  n
                );
          }
          trackByPathFinderId(n, i) {
            return i.pathFinderId;
          }
        }
        return (
          (t.ɵfac = function (n) {
            return new (n || t)(e.ɵɵdirectiveInject(x.r));
          }),
          (t.ɵcmp = e.ɵɵdefineComponent({
            type: t,
            selectors: [["alternatives-preview-table"]],
            inputs: {
              alternatives: "alternatives",
              sourceToken: "sourceToken",
              destinationToken: "destinationToken",
            },
            decls: 17,
            vars: 10,
            consts: [
              ["data-id", "exchanges-table"],
              [1, "alternatives__row"],
              [
                "transloco",
                "alternativesPreview.name",
                1,
                "alternatives__name",
              ],
              [
                "tuiDropdownAlign",
                "left",
                1,
                "alternatives__dropdown",
                3,
                "content",
                "open",
                "openChange",
              ],
              ["width", "16", "height", "16"],
              [
                0,
                "xlink",
                "href",
                "assets/images/simple/icons/arrow-down.svg#arrow-down",
              ],
              ["dropdownContent", ""],
              ["transloco", "alternativesPreview.diff"],
              [
                "class",
                "alternatives__row",
                4,
                "ngFor",
                "ngForOf",
                "ngForTrackBy",
              ],
              [4, "tuiLet"],
              [1, "alternatives__dropdown-list"],
              [
                "class",
                "blank-button alternatives__dropdown-option",
                3,
                "option_selected",
                "click",
                4,
                "ngFor",
                "ngForOf",
              ],
              [1, "blank-button", "alternatives__dropdown-option", 3, "click"],
              [1, "alternatives__row-info"],
              [1, "alternatives__row-name"],
              ["loading", "lazy", "alt", "", 3, "src"],
              [1, "alternatives__row-value-wrap"],
              [4, "ngIf"],
              [3, "value", "decimals", 4, "ngIf"],
              [
                "direction",
                "top",
                "contentType",
                "custom",
                1,
                "alternatives__row-difference",
                3,
                "tooltip",
                "customElement",
              ],
              ["alternativeGasFees", ""],
              ["alternativeNetworkToken", ""],
              [
                "class",
                "alternatives__row-difference",
                "contentType",
                "custom",
                3,
                "tooltip",
                "customElement",
                4,
                "ngIf",
              ],
              ["tooltipDiffUsd", ""],
              [
                "contentType",
                "custom",
                1,
                "alternatives__row-difference",
                3,
                "tooltip",
                "customElement",
              ],
              [3, "value", "decimals"],
              [
                "class",
                "alternatives__difference-shield",
                3,
                "green",
                "red",
                4,
                "ngIf",
              ],
              [
                "class",
                "alternatives__difference-shield blue",
                "transloco",
                "alternativesPreview.best",
                4,
                "ngIf",
              ],
              [1, "alternatives__difference-shield"],
              [
                "transloco",
                "alternativesPreview.best",
                1,
                "alternatives__difference-shield",
                "blue",
              ],
              [
                "class",
                "alternatives-table-paginator",
                3,
                "length",
                "pageIndex",
                "pageSize",
                "pageSizeOptions",
                "page",
                4,
                "ngIf",
              ],
              [
                1,
                "alternatives-table-paginator",
                3,
                "length",
                "pageIndex",
                "pageSize",
                "pageSizeOptions",
                "page",
              ],
            ],
            template: function (n, i) {
              if (
                (1 & n &&
                  (e.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "span", 2),
                  e.ɵɵtext(3, "Name"),
                  e.ɵɵelementEnd(),
                  e.ɵɵelementStart(4, "tui-hosted-dropdown", 3),
                  e.ɵɵlistener("openChange", function (s) {
                    return (i.dropdownOpened = s);
                  }),
                  e.ɵɵelementStart(5, "span"),
                  e.ɵɵtext(6),
                  e.ɵɵpipe(7, "transloco"),
                  e.ɵɵelementEnd(),
                  e.ɵɵnamespaceSVG(),
                  e.ɵɵelementStart(8, "svg", 4),
                  e.ɵɵelement(9, "use", 5),
                  e.ɵɵelementEnd()(),
                  e.ɵɵtemplate(
                    10,
                    Rn,
                    2,
                    1,
                    "ng-template",
                    null,
                    6,
                    e.ɵɵtemplateRefExtractor
                  ),
                  e.ɵɵnamespaceHTML(),
                  e.ɵɵelementStart(12, "span", 7),
                  e.ɵɵtext(13, "Diff"),
                  e.ɵɵelementEnd()(),
                  e.ɵɵtemplate(14, Jn, 13, 10, "div", 8),
                  e.ɵɵelementEnd(),
                  e.ɵɵtemplate(15, qn, 2, 1, "ng-container", 9),
                  e.ɵɵpipe(16, "async")),
                2 & n)
              ) {
                const r = e.ɵɵreference(11);
                e.ɵɵadvance(4),
                  e.ɵɵproperty("content", r)("open", i.dropdownOpened),
                  e.ɵɵadvance(2),
                  e.ɵɵtextInterpolate(
                    e.ɵɵpipeBind1(7, 6, i.getValueColumnTitle(i.comparisonMode))
                  ),
                  e.ɵɵadvance(8),
                  e.ɵɵproperty("ngForOf", i.displayedAlternatives)(
                    "ngForTrackBy",
                    i.trackByPathFinderId
                  ),
                  e.ɵɵadvance(1),
                  e.ɵɵproperty(
                    "tuiLet",
                    e.ɵɵpipeBind1(16, 8, i.allAlternatives$)
                  );
              }
            },
            dependencies: [
              d.sg,
              d.O5,
              pe.NW,
              S.KI,
              In.K,
              B.Ls,
              bn.O,
              le.Sw,
              de.o1,
              d.Ov,
              S.Ot,
              Mn._,
              $n.j,
              On.M,
              Un.h,
              Fn.u,
              jn.M,
              ce.m,
              _n.W,
            ],
            styles: [
              "[_nghost-%COMP%]{min-height:220px;font-size:13px;line-height:16px}.alternatives__row[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr 62px;align-items:center;grid-column-gap:8px;height:40px}.alternatives__row[_ngcontent-%COMP%]:first-of-type{color:var(--1inch__ui-02)}.alternatives__row-name[_ngcontent-%COMP%]{display:grid;grid-template-columns:24px 1fr;grid-column-gap:8px;align-items:center}.alternatives__dropdown[_ngcontent-%COMP%]{cursor:pointer}.alternatives__dropdown[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{margin:-3px 0 0 3px}.alternatives__dropdown-list[_ngcontent-%COMP%]{border-radius:12px;border:none;background:var(--1inch__ui-10-05);box-shadow:var(--1inch__shadow__dropdown);display:flex;flex-direction:column;padding:8px;margin-left:-16px}.alternatives__dropdown-option[_ngcontent-%COMP%]{border-radius:8px;color:var(--1inch__ui-02);transition:background-color .3s;line-height:16px;padding:6px 8px;font-size:13px;text-align:start}.alternatives__dropdown-option[_ngcontent-%COMP%]:hover, .alternatives__dropdown-option[_ngcontent-%COMP%]:focus{background:var(--1inch-bg-03);outline:none!important}.alternatives__dropdown-option.option_selected[_ngcontent-%COMP%]{color:var(--1inch-text-03)}.alternatives__row-info[_ngcontent-%COMP%]{display:contents}.alternatives__row-difference[_ngcontent-%COMP%]{color:var(--1inch__ui-02)}.alternatives__row-difference[_ngcontent-%COMP%]:first-of-type{margin-left:8px}.alternatives__difference-shield[_ngcontent-%COMP%]{padding:4px 8px;border-radius:24px;text-align:center;text-transform:uppercase}.alternatives__difference-shield.red[_ngcontent-%COMP%]{color:var(--1inch__text-and-icons__error);background:var(--1inch__background__error)}.alternatives__difference-shield.green[_ngcontent-%COMP%]{color:var(--1inch__text-and-icons__approve);background:var(--1inch__background__success)}.alternatives__difference-shield.blue[_ngcontent-%COMP%]{width:max-content;color:var(--1inch-common-btn-bg-01);background:var(--1inch__background__info)}.alternatives-table-paginator[_ngcontent-%COMP%]{margin-top:16px}.alternatives-table-paginator[_ngcontent-%COMP%]     .mat-paginator-container{font-size:14px;justify-content:space-between;padding:0}.alternatives-table-paginator[_ngcontent-%COMP%]     .mat-paginator-page-size{align-items:center}.alternatives-table-paginator[_ngcontent-%COMP%]     .mat-paginator-page-size-select{margin:1px 0 0 12px;width:48px}.alternatives-table-paginator[_ngcontent-%COMP%]     .mat-select-trigger{font-size:14px}.alternatives-table-paginator[_ngcontent-%COMP%]     .mat-paginator-range-label{margin:2px 20px 0 0}.alternatives-table-paginator[_ngcontent-%COMP%]     .mat-icon-button{color:var(--1inch__ui-02)}.alternatives-table-paginator[_ngcontent-%COMP%]     .mat-paginator-page-size-label{margin-left:0}@media (max-width: 520px){.alternatives-table-paginator[_ngcontent-%COMP%]     .mat-paginator-container{padding:0}.alternatives-table-paginator[_ngcontent-%COMP%]     .mat-paginator-range-label{margin-right:8px}}@media (max-width: 418px){.alternatives-table-paginator[_ngcontent-%COMP%]     .mat-paginator-range-actions button{width:25px}.alternatives-table-paginator[_ngcontent-%COMP%]     .mat-paginator-container, .alternatives-table-paginator[_ngcontent-%COMP%]     .mat-select-trigger{font-size:12px}.alternatives-table-paginator[_ngcontent-%COMP%]     .mat-paginator-page-size-select{margin:2px 0 0 4px;width:40px}}@media (max-width: 520px){.alternatives__row[_ngcontent-%COMP%]{grid-template-columns:1fr 62px;margin-bottom:8px}.alternatives__row[_ngcontent-%COMP%]:first-of-type{margin-bottom:0}.alternatives__name[_ngcontent-%COMP%]{display:none}.alternatives__dropdown-list[_ngcontent-%COMP%]{margin-left:0}.alternatives__row-info[_ngcontent-%COMP%]{display:grid;grid-template-columns:24px 1fr;grid-column-gap:8px;align-items:center}.alternatives__row-name[_ngcontent-%COMP%]{display:contents}.alternatives__row-name[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{grid-column-start:1;grid-column-end:1;grid-row-start:1;grid-row-end:3}.alternatives__row-name[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{grid-column-start:2;grid-column-end:3;grid-row-start:1;grid-row-end:2}.alternatives__row-value-wrap[_ngcontent-%COMP%]{grid-column-start:2;grid-column-end:3;grid-row-start:2;grid-row-end:3;color:var(--1inch__ui-02)}}",
            ],
            changeDetection: 0,
          })),
          t
        );
      })();
      var ni = o(95475);
      function ii(t, a) {
        1 & t &&
          (e.ɵɵelementStart(0, "span", 4),
          e.ɵɵtext(1, "Exchanges"),
          e.ɵɵelementEnd());
      }
      function oi(t, a) {
        if (
          (1 & t &&
            (e.ɵɵelement(0, "alternatives-preview-table", 5),
            e.ɵɵpipe(1, "async"),
            e.ɵɵpipe(2, "async"),
            e.ɵɵpipe(3, "async")),
          2 & t)
        ) {
          const n = e.ɵɵnextContext();
          e.ɵɵproperty("alternatives", e.ɵɵpipeBind1(1, 3, n.alternatives$))(
            "sourceToken",
            e.ɵɵpipeBind1(2, 5, n.sourceToken$)
          )("destinationToken", e.ɵɵpipeBind1(3, 7, n.destinationToken$));
        }
      }
      function ai(t, a) {
        if (
          (1 & t &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵelementStart(1, "span", 6)(2, "span", 7),
            e.ɵɵtext(3, "Swap history"),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(4, "span"),
            e.ɵɵtext(5, "\xa0"),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(6, "span"),
            e.ɵɵtext(7),
            e.ɵɵpipe(8, "displaySymbol"),
            e.ɵɵpipe(9, "displaySymbol"),
            e.ɵɵelementEnd()(),
            e.ɵɵelementContainerEnd()),
          2 & t)
        ) {
          const n = e.ɵɵnextContext(2);
          e.ɵɵadvance(7),
            e.ɵɵtextInterpolate2(
              "(",
              e.ɵɵpipeBind1(8, 2, n.tokensPair.sourceToken),
              "/",
              e.ɵɵpipeBind1(9, 4, n.tokensPair.destinationToken),
              ")"
            );
        }
      }
      function ri(t, a) {
        if ((1 & t && e.ɵɵelement(0, "app-transaction-history", 8), 2 & t)) {
          const n = e.ɵɵnextContext(2);
          e.ɵɵproperty("tokensPair", n.tokensPair);
        }
      }
      function si(t, a) {
        1 & t &&
          (e.ɵɵelementStart(0, "mat-tab"),
          e.ɵɵtemplate(1, ai, 10, 6, "ng-template", 1),
          e.ɵɵtemplate(2, ri, 1, 1, "ng-template", 2),
          e.ɵɵelementEnd());
      }
      class Q {
        constructor(a, n, i, r, s) {
          (this.uiQuery = a),
            (this.uiService = n),
            (this.activeConnectionQuery = i),
            (this.alternativesQuery = r),
            (this.simpleSwapQuery = s),
            (this.selectedTableTab$ = this.uiQuery
              .select("selectedTableTab")
              .pipe((0, k.x)())),
            (this.isHistoryDisabled$ =
              this.activeConnectionQuery.currentChainId$.pipe(
                (0, u.U)((p) => !yn.A[p])
              )),
            (this.alternatives$ = this.alternativesQuery.alternatives$),
            (this.sourceToken$ = this.simpleSwapQuery.sourceToken$),
            (this.destinationToken$ = this.simpleSwapQuery.destinationToken$);
        }
        getSelectedTabIndex(a) {
          return "history" === a ? 1 : 0;
        }
        setSelectedTab(a) {
          this.uiService.setSelectedSwapTableTab(
            1 === a.index ? "history" : "exchanges"
          );
        }
      }
      (Q.ɵfac = function (a) {
        return new (a || Q)(
          e.ɵɵdirectiveInject(Cn.s),
          e.ɵɵdirectiveInject(te.F),
          e.ɵɵdirectiveInject(x.r),
          e.ɵɵdirectiveInject(xn.s),
          e.ɵɵdirectiveInject(T.G)
        );
      }),
        (Q.ɵcmp = e.ɵɵdefineComponent({
          type: Q,
          selectors: [["unified-tables-box"]],
          inputs: { tokensPair: "tokensPair" },
          decls: 7,
          vars: 6,
          consts: [
            [
              "mat-align-tabs",
              "start",
              1,
              "tables-box-header",
              3,
              "selectedIndex",
              "selectedTabChange",
            ],
            ["mat-tab-label", ""],
            ["matTabContent", ""],
            [4, "ngIf"],
            [
              "data-id",
              "swap-table.exchanges-tab",
              "transloco",
              "swapPage.exchanges",
            ],
            [3, "alternatives", "sourceToken", "destinationToken"],
            ["data-id", "swap-table.history-tab"],
            ["transloco", "swapPage.swap-history2"],
            [3, "tokensPair"],
          ],
          template: function (a, n) {
            1 & a &&
              (e.ɵɵelementStart(0, "mat-tab-group", 0),
              e.ɵɵlistener("selectedTabChange", function (r) {
                return n.setSelectedTab(r);
              }),
              e.ɵɵpipe(1, "async"),
              e.ɵɵelementStart(2, "mat-tab"),
              e.ɵɵtemplate(3, ii, 2, 0, "ng-template", 1),
              e.ɵɵtemplate(4, oi, 4, 9, "ng-template", 2),
              e.ɵɵelementEnd(),
              e.ɵɵtemplate(5, si, 3, 0, "mat-tab", 3),
              e.ɵɵpipe(6, "async"),
              e.ɵɵelementEnd()),
              2 & a &&
                (e.ɵɵproperty(
                  "selectedIndex",
                  n.getSelectedTabIndex(
                    e.ɵɵpipeBind1(1, 2, n.selectedTableTab$)
                  )
                ),
                e.ɵɵadvance(5),
                e.ɵɵproperty(
                  "ngIf",
                  !e.ɵɵpipeBind1(6, 4, n.isHistoryDisabled$)
                ));
          },
          dependencies: [
            d.O5,
            R.SP,
            R.uD,
            R.uX,
            R.Vc,
            S.KI,
            Tn.m,
            ti,
            d.Ov,
            ni.s,
          ],
          styles: [
            ".mat-tab-label{margin:0 32px 8px 0!important}  .mat-tab-label-content{line-height:26px!important}",
          ],
          changeDetection: 0,
        })),
        (0, Y.__decorate)([wn.UM], Q.prototype, "getSelectedTabIndex", null);
      var pi = o(97093),
        ci = o(67769),
        li = o(17505),
        di = o(57627),
        ui = o(19688),
        mi = o(71668),
        hi = o(2794),
        gi = o(25541),
        vi = o(92110),
        fi = o(15927);
      function Si(t, a) {
        1 & t && e.ɵɵelement(0, "gas-price-widget", 5);
      }
      function yi(t, a) {
        if (
          (1 & t &&
            (e.ɵɵelement(0, "routes-info", 6),
            e.ɵɵpipe(1, "async"),
            e.ɵɵpipe(2, "async"),
            e.ɵɵpipe(3, "async")),
          2 & t)
        ) {
          const n = e.ɵɵnextContext();
          e.ɵɵproperty("routes", e.ɵɵpipeBind1(1, 3, n.routes$))(
            "sourceToken",
            e.ɵɵpipeBind1(2, 5, n.sourceToken$)
          )("destinationToken", e.ɵɵpipeBind1(3, 7, n.destinationToken$));
        }
      }
      function wi(t, a) {
        1 & t && e.ɵɵelement(0, "block-number", 7);
      }
      const Ci = function () {
        return { contextId: "unified-swap", widgetId: "gas-price" };
      };
      let xi = (() => {
        class t {
          constructor(n, i, r, s, p, c, h, l, v, I) {
            (this.simpleSwapQuery = n),
              (this.swapFormQuery = i),
              (this.txFeeService = r),
              (this.simpleSwapManagerService = s),
              (this.swapSettingsQuery = p),
              (this.simpleUiQuery = c),
              (this.simpleUiStore = h),
              (this.globalSettingsQuery = l),
              (this.uiService = v),
              (this.settingsDisplayService = I),
              (this.isRateLoading$ = new xe.X(!1)),
              (this.sourceToken$ = this.simpleSwapQuery.sourceToken$),
              (this.destinationToken$ = this.simpleSwapQuery.destinationToken$),
              (this.sourceTokenAmount$ =
                this.simpleSwapQuery.sourceTokenAmount$.pipe(
                  (0, w.b)(() => this.isRateLoading$.next(!0))
                )),
              (this.destinationTokenAmount$ =
                this.simpleSwapQuery.destinationTokenAmount$),
              (this.routes$ = this.swapFormQuery.routes$),
              (this.gasUnitsConsumed$ = (0, f.a)([
                this.simpleSwapQuery.currentPreset$,
                this.swapFormQuery.pathfinderResponse$,
                this.swapSettingsQuery.gasPrice$,
              ]).pipe(
                (0, u.U)(([C, U]) => (U ? U[C].gasUnitsConsumed : void 0))
              )),
              (this.isLoading$ = (0, f.a)([
                this.swapFormQuery.pathfinderResponse$,
                this.simpleSwapQuery.swapTokensData$,
              ]).pipe(
                (0, u.U)(([C, U]) => {
                  const m = !(C && U && U.destinationTokenAmount);
                  return (
                    this.isRateLoading$.value &&
                      !m &&
                      this.isRateLoading$.next(!1),
                    m
                  );
                })
              )),
              (this.txFeeAmount$ = this.gasUnitsConsumed$.pipe(
                (0, D.w)((C) =>
                  C
                    ? this.txFeeService.getTxFee(
                        C,
                        this.simpleSwapManagerService
                      )
                    : (0, b.of)(void 0)
                )
              )),
              (this.currentGasPricePreview$ = this.gasUnitsConsumed$.pipe(
                (0, D.w)((C) => this.txFeeService.getGasFeePreview(C || "0"))
              )),
              (this.isRatesExpand$ = this.simpleUiQuery.isRatesExpand$),
              (this.isRoutingEnabledInGlobalSettings$ =
                this.globalSettingsQuery.showRouting$),
              (this.isBlockNumberVisible$ =
                this.uiService.blockNumberPosition$.pipe(
                  (0, u.U)((C) => C === z.Hy.underTheForm)
                ));
          }
          handleRatesExpandChange(n) {
            this.simpleUiStore.update({ isRatesExpand: n });
          }
          toggleGasPin(n) {
            this.settingsDisplayService.updatePinned(
              "unified-swap",
              !1 === this.swapSettingsQuery.useLegacyTransactions
                ? "gasPriceAdvanced"
                : "gasPrice",
              n
            );
          }
        }
        return (
          (t.ɵfac = function (n) {
            return new (n || t)(
              e.ɵɵdirectiveInject(T.G),
              e.ɵɵdirectiveInject(j.y),
              e.ɵɵdirectiveInject(pi.V),
              e.ɵɵdirectiveInject(ci.B),
              e.ɵɵdirectiveInject(N.G),
              e.ɵɵdirectiveInject(li.D),
              e.ɵɵdirectiveInject(di.M),
              e.ɵɵdirectiveInject(ee.J),
              e.ɵɵdirectiveInject(te.F),
              e.ɵɵdirectiveInject(ui.A)
            );
          }),
          (t.ɵcmp = e.ɵɵdefineComponent({
            type: t,
            selectors: [["unified-trade-info"]],
            decls: 16,
            vars: 37,
            consts: [
              [
                3,
                "sourceToken",
                "sourceTokenAmount",
                "destinationToken",
                "destinationTokenAmount",
                "isRatesExpand",
                "invertValuesOrder",
                "loading",
                "handleRatesExpandChange",
              ],
              [
                "contextId",
                "unified-swap",
                1,
                "unified-transaction-cost",
                3,
                "txFeeAmount",
                "loading",
                "customToggleFlow",
                "gasPreview",
                "toggleClick",
              ],
              ["class", "gas-price-widget", 4, "isSettingWidgetVisible"],
              [3, "routes", "sourceToken", "destinationToken", 4, "ngIf"],
              ["class", "block-number", 4, "ngIf"],
              [1, "gas-price-widget"],
              [3, "routes", "sourceToken", "destinationToken"],
              [1, "block-number"],
            ],
            template: function (n, i) {
              1 & n &&
                (e.ɵɵelementStart(0, "expanded-rate-info", 0),
                e.ɵɵlistener("handleRatesExpandChange", function (s) {
                  return i.handleRatesExpandChange(s);
                }),
                e.ɵɵpipe(1, "async"),
                e.ɵɵpipe(2, "async"),
                e.ɵɵpipe(3, "async"),
                e.ɵɵpipe(4, "async"),
                e.ɵɵpipe(5, "async"),
                e.ɵɵpipe(6, "async"),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(7, "transaction-cost", 1),
                e.ɵɵlistener("toggleClick", function (s) {
                  return i.toggleGasPin(s);
                }),
                e.ɵɵpipe(8, "async"),
                e.ɵɵpipe(9, "async"),
                e.ɵɵpipe(10, "async"),
                e.ɵɵelementEnd(),
                e.ɵɵtemplate(11, Si, 1, 0, "gas-price-widget", 2),
                e.ɵɵtemplate(12, yi, 4, 9, "routes-info", 3),
                e.ɵɵpipe(13, "async"),
                e.ɵɵtemplate(14, wi, 1, 0, "block-number", 4),
                e.ɵɵpipe(15, "async")),
                2 & n &&
                  (e.ɵɵproperty(
                    "sourceToken",
                    e.ɵɵpipeBind1(1, 14, i.sourceToken$)
                  )(
                    "sourceTokenAmount",
                    e.ɵɵpipeBind1(2, 16, i.sourceTokenAmount$)
                  )(
                    "destinationToken",
                    e.ɵɵpipeBind1(3, 18, i.destinationToken$)
                  )(
                    "destinationTokenAmount",
                    e.ɵɵpipeBind1(4, 20, i.destinationTokenAmount$)
                  )("isRatesExpand", e.ɵɵpipeBind1(5, 22, i.isRatesExpand$))(
                    "invertValuesOrder",
                    !0
                  )("loading", e.ɵɵpipeBind1(6, 24, i.isRateLoading$)),
                  e.ɵɵadvance(7),
                  e.ɵɵproperty(
                    "txFeeAmount",
                    e.ɵɵpipeBind1(8, 26, i.txFeeAmount$)
                  )("loading", e.ɵɵpipeBind1(9, 28, i.isLoading$))(
                    "customToggleFlow",
                    !0
                  )(
                    "gasPreview",
                    e.ɵɵpipeBind1(10, 30, i.currentGasPricePreview$)
                  ),
                  e.ɵɵadvance(4),
                  e.ɵɵproperty(
                    "isSettingWidgetVisible",
                    e.ɵɵpureFunction0(36, Ci)
                  ),
                  e.ɵɵadvance(1),
                  e.ɵɵproperty(
                    "ngIf",
                    !e.ɵɵpipeBind1(13, 32, i.isRoutingEnabledInGlobalSettings$)
                  ),
                  e.ɵɵadvance(2),
                  e.ɵɵproperty(
                    "ngIf",
                    e.ɵɵpipeBind1(15, 34, i.isBlockNumberVisible$)
                  ));
            },
            dependencies: [d.O5, mi._, hi.a, gi.o, vi.z, fi.$, z.i4, d.Ov],
            styles: [
              "[_nghost-%COMP%]{display:grid;grid-auto-flow:row;grid-row-gap:8px;padding:8px 16px 0;width:480px;max-width:100%}.simple-swap[_nghost-%COMP%]{width:418px}.unified-transaction-cost[_ngcontent-%COMP%]{font-size:13px}.gas-price-widget[_ngcontent-%COMP%]{margin:-8px 0 8px;max-width:-moz-fit-content;max-width:fit-content;min-width:100%}.block-number[_ngcontent-%COMP%]{display:block;justify-self:end;margin-top:8px}",
            ],
            changeDetection: 0,
          })),
          t
        );
      })();
      function Ti(t, a) {
        if (
          (1 & t &&
            (e.ɵɵelementStart(0, "div", 9),
            e.ɵɵelement(1, "trade-charts-widget", 10),
            e.ɵɵelementEnd()),
          2 & t)
        ) {
          const n = e.ɵɵnextContext().ngIf;
          e.ɵɵadvance(1), e.ɵɵproperty("tokensPair", n);
        }
      }
      function Pi(t, a) {
        if (
          (1 & t &&
            (e.ɵɵelementStart(0, "div", 11),
            e.ɵɵelement(1, "unified-routing-box", 12),
            e.ɵɵpipe(2, "async"),
            e.ɵɵelementEnd()),
          2 & t)
        ) {
          const n = e.ɵɵnextContext().ngIf,
            i = e.ɵɵnextContext();
          e.ɵɵadvance(1),
            e.ɵɵproperty("tokensPair", n)(
              "routes",
              e.ɵɵpipeBind1(2, 2, i.routes$)
            );
        }
      }
      function ki(t, a) {
        if (
          (1 & t &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵelement(1, "unified-tables-box", 13),
            e.ɵɵelementContainerEnd()),
          2 & t)
        ) {
          const n = e.ɵɵnextContext().ngIf;
          e.ɵɵadvance(1), e.ɵɵproperty("tokensPair", n);
        }
      }
      function Ii(t, a) {
        if (
          (1 & t &&
            (e.ɵɵelementStart(0, "div", 5),
            e.ɵɵtemplate(1, Ti, 2, 1, "div", 6),
            e.ɵɵpipe(2, "async"),
            e.ɵɵtemplate(3, Pi, 3, 4, "div", 7),
            e.ɵɵpipe(4, "async"),
            e.ɵɵtemplate(5, ki, 2, 1, "ng-container", 8),
            e.ɵɵpipe(6, "async"),
            e.ɵɵelementEnd()),
          2 & t)
        ) {
          const n = e.ɵɵnextContext();
          e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", e.ɵɵpipeBind1(2, 3, n.showCharts$)),
            e.ɵɵadvance(2),
            e.ɵɵproperty("ngIf", e.ɵɵpipeBind1(4, 5, n.showRouting$)),
            e.ɵɵadvance(2),
            e.ɵɵproperty("ngIf", e.ɵɵpipeBind1(6, 7, n.showTables$));
        }
      }
      function bi(t, a) {
        if (
          (1 & t &&
            (e.ɵɵelement(0, "unified-trade-info"), e.ɵɵpipe(1, "async")),
          2 & t)
        ) {
          const n = e.ɵɵnextContext();
          e.ɵɵclassProp("simple-swap", !e.ɵɵpipeBind1(1, 2, n.gridView$));
        }
      }
      function Mi(t, a) {
        1 & t && e.ɵɵelement(0, "block-number", 14);
      }
      let $i = (() => {
        class t {
          constructor(n, i, r, s, p, c, h) {
            (this.unifiedSwapInitService = n),
              (this.globalSettingsQuery = i),
              (this.simpleSwapQuery = r),
              (this.swapFormQuery = s),
              (this.router = p),
              (this.uiService = c),
              (this.currentSpenderService = h),
              (this.id = "uni"),
              (this.showTables$ = this.globalSettingsQuery.showTables$),
              (this.showRouting$ = this.globalSettingsQuery.showRouting$),
              (this.showCharts$ = this.globalSettingsQuery.showCharts$),
              (this.gridView$ = (0, f.a)([
                this.showTables$,
                this.showRouting$,
                this.showCharts$,
              ]).pipe((0, u.U)(([l, v, I]) => l || v || I))),
              (this.tokensPair$ = (0, f.a)([
                this.simpleSwapQuery.sourceToken$,
                this.simpleSwapQuery.destinationToken$,
              ]).pipe(
                (0, u.U)(([l, v]) => ({ sourceToken: l, destinationToken: v }))
              )),
              (this.routes$ = this.swapFormQuery.routes$),
              (this.isBlockNumberVisible$ =
                this.uiService.blockNumberPosition$.pipe(
                  (0, u.U)((l) => l === z.Hy.inCorner)
                )),
              this.currentSpenderService.setCurrentSpenderType(Ce.F.swap);
          }
          get showTradeInfo() {
            return (
              6 === this.router.url.split("/").length &&
              this.router.url.split("/").includes("swap")
            );
          }
          ngOnInit() {
            this.unifiedSwapInitService.init();
          }
          ngOnDestroy() {
            this.unifiedSwapInitService.reset();
          }
        }
        return (
          (t.ɵfac = function (n) {
            return new (n || t)(
              e.ɵɵdirectiveInject(ve),
              e.ɵɵdirectiveInject(ee.J),
              e.ɵɵdirectiveInject(T.G),
              e.ɵɵdirectiveInject(j.y),
              e.ɵɵdirectiveInject(g.F0),
              e.ɵɵdirectiveInject(te.F),
              e.ɵɵdirectiveInject(Ce.q)
            );
          }),
          (t.ɵcmp = e.ɵɵdefineComponent({
            type: t,
            selectors: [["unified-swap-layout"]],
            hostVars: 1,
            hostBindings: function (n, i) {
              2 & n && e.ɵɵattribute("id", i.id);
            },
            decls: 9,
            vars: 11,
            consts: [
              [1, "unified-swap-layout"],
              ["class", "extra-elements-wrap", 4, "ngIf"],
              [1, "swap-container-wrap"],
              [3, "simple-swap", 4, "ngIf"],
              ["class", "block-number", 4, "ngIf"],
              [1, "extra-elements-wrap"],
              ["class", "charts-box", 4, "ngIf"],
              ["class", "routing-box", "data-id", "routing-box", 4, "ngIf"],
              [4, "ngIf"],
              [1, "charts-box"],
              ["data-id", "charts-box", 3, "tokensPair"],
              ["data-id", "routing-box", 1, "routing-box"],
              [3, "tokensPair", "routes"],
              [3, "tokensPair"],
              [1, "block-number"],
            ],
            template: function (n, i) {
              1 & n &&
                (e.ɵɵelementStart(0, "div", 0),
                e.ɵɵpipe(1, "async"),
                e.ɵɵtemplate(2, Ii, 7, 9, "div", 1),
                e.ɵɵpipe(3, "async"),
                e.ɵɵelementStart(4, "div", 2),
                e.ɵɵelement(5, "router-outlet"),
                e.ɵɵtemplate(6, bi, 2, 4, "unified-trade-info", 3),
                e.ɵɵelementEnd()(),
                e.ɵɵtemplate(7, Mi, 1, 0, "block-number", 4),
                e.ɵɵpipe(8, "async")),
                2 & n &&
                  (e.ɵɵclassProp(
                    "single-column",
                    !e.ɵɵpipeBind1(1, 5, i.gridView$)
                  ),
                  e.ɵɵadvance(2),
                  e.ɵɵproperty("ngIf", e.ɵɵpipeBind1(3, 7, i.tokensPair$)),
                  e.ɵɵadvance(4),
                  e.ɵɵproperty("ngIf", i.showTradeInfo),
                  e.ɵɵadvance(1),
                  e.ɵɵproperty(
                    "ngIf",
                    e.ɵɵpipeBind1(8, 9, i.isBlockNumberVisible$)
                  ));
            },
            dependencies: [g.lC, z.i4, d.O5, dn.K, Sn, Q, xi, d.Ov],
            styles: [
              "[_nghost-%COMP%]{display:block}@media (max-width: 520px){[_nghost-%COMP%]{margin-bottom:32px}[_nghost-%COMP%]   .embedded-swap[_nghost-%COMP%], .embedded-swap   [_nghost-%COMP%]{padding-bottom:0}}.unified-swap-layout[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 480px;grid-column-gap:40px}.unified-swap-layout.single-column[_ngcontent-%COMP%]{grid-template-columns:1fr}@media (max-width: 940px){.unified-swap-layout[_ngcontent-%COMP%]{display:flex;flex-direction:column-reverse}}.swap-container-wrap[_ngcontent-%COMP%]{margin:0 auto 40px}@media (max-width: 720px){.swap-container-wrap[_ngcontent-%COMP%]{margin-bottom:32px}}@media (max-width: 520px){.swap-container-wrap[_ngcontent-%COMP%]{max-width:100%}}@media (max-width: 418px){.swap-container-wrap[_ngcontent-%COMP%]{margin:0 -16px 32px;max-width:calc(100% + 32px)}}.extra-elements-wrap[_ngcontent-%COMP%]{overflow:hidden}.charts-box[_ngcontent-%COMP%]{margin-bottom:16px}.routing-box[_ngcontent-%COMP%]{margin-bottom:24px}.block-number[_ngcontent-%COMP%]{position:fixed;right:76px;bottom:32px}@media (max-width: 1400px){.block-number[_ngcontent-%COMP%]{right:32px}}",
            ],
            changeDetection: 0,
          })),
          t
        );
      })();
      var Oi = o(98621),
        Ui = o(56472);
      let Fi = (() => {
        class t {
          constructor(n, i, r, s, p, c) {
            (this.router = n),
              (this.activeConnectionQuery = i),
              (this.pathfinderService = r),
              (this.simpleSwapStore = s),
              (this.tokensQuery = p),
              (this.unifiedRoutingService = c);
          }
          canActivate(n, i) {
            var r;
            const { sourceToken: s, destinationToken: p } =
              (null === (r = n.parent) || void 0 === r ? void 0 : r.params) ||
              {};
            if (!s && !p) return this.getDefaultFallbackUrlTree();
            const c = this.tokensQuery.findTokenBySymbolOrAddress(s, !1),
              h = this.tokensQuery.findTokenBySymbolOrAddress(p, !1);
            if (!c || !h) return this.getDefaultFallbackUrlTree();
            this.pathfinderService.reset();
            const { destinationTokenAmount: l } =
              this.simpleSwapStore.getValue();
            return (
              this.simpleSwapStore.update({
                sourceToken: h,
                destinationToken: c,
                sourceTokenAmount: l || "1",
                isSetMax: !1,
              }),
              this.unifiedRoutingService.getSwapUrl(h.symbol, c.symbol)
            );
          }
          getDefaultFallbackUrlTree() {
            return this.unifiedRoutingService.getCurrentSwapUrl();
          }
        }
        return (
          (t.ɵfac = function (n) {
            return new (n || t)(
              e.ɵɵinject(g.F0),
              e.ɵɵinject(x.r),
              e.ɵɵinject(G.Q),
              e.ɵɵinject(Oi.jJ),
              e.ɵɵinject(Ui.d),
              e.ɵɵinject(E)
            );
          }),
          (t.ɵprov = e.ɵɵdefineInjectable({
            token: t,
            factory: t.ɵfac,
            providedIn: M,
          })),
          t
        );
      })();
      var ji = o(56747);
      let _i = (() => {
          class t {
            constructor(n, i, r) {
              (this.router = n),
                (this.pathfinderQuery = i),
                (this.acceptTermsService = r);
            }
            canActivate(n, i) {
              return this.acceptTermsService.checkTermsAccepting(0).pipe(
                (0, u.U)(() => {
                  const r = this.router.getCurrentNavigation().extras.state;
                  if (
                    this.pathfinderQuery.getValue().pathfinderResponse &&
                    r.isEnabled
                  )
                    return !0;
                  const p = i.url.slice(0, i.url.indexOf("/confirm"));
                  return this.router.createUrlTree([p]);
                }),
                (0, Z.K)(() => (0, b.of)(!1))
              );
            }
          }
          return (
            (t.ɵfac = function (n) {
              return new (n || t)(
                e.ɵɵinject(g.F0),
                e.ɵɵinject(we.o),
                e.ɵɵinject(ji.N)
              );
            }),
            (t.ɵprov = e.ɵɵdefineInjectable({
              token: t,
              factory: t.ɵfac,
              providedIn: M,
            })),
            t
          );
        })(),
        Qi = (() => {
          class t {
            constructor(n, i, r, s, p) {
              (this.router = n),
                (this.activeConnectionQuery = i),
                (this.simpleSwapQuery = r),
                (this.unifiedRoutingService = s),
                (this.otcModeService = p);
            }
            canActivate(n, i) {
              return (
                this.otcModeService.resetOTCModeWhenItSet(),
                this.unifiedRoutingService.getSwapUrl(
                  this.simpleSwapQuery.sourceToken.symbol,
                  this.simpleSwapQuery.destinationToken.symbol
                )
              );
            }
          }
          return (
            (t.ɵfac = function (n) {
              return new (n || t)(
                e.ɵɵinject(g.F0),
                e.ɵɵinject(x.r),
                e.ɵɵinject(T.G),
                e.ɵɵinject(E),
                e.ɵɵinject(X.N)
              );
            }),
            (t.ɵprov = e.ɵɵdefineInjectable({
              token: t,
              factory: t.ɵfac,
              providedIn: M,
            })),
            t
          );
        })();
      var Te = o(54377),
        Pe = o(16562),
        Bi = o(95496);
      const Ri = [
        {
          path: "",
          component: $i,
          children: [
            {
              path: "",
              pathMatch: "full",
              component: class {},
              canActivate: [Qi],
            },
            {
              path: ":sourceToken/:destinationToken",
              component: ln,
              canActivate: [
                (() => {
                  class t extends Pe.B {
                    constructor(n, i, r, s, p, c) {
                      super(n, i, r, p),
                        (this.router = n),
                        (this.activeConnectionQuery = i),
                        (this.tokensSearchService = r),
                        (this.unifiedRoutingService = s),
                        (this.tradeNavigationStateService = p),
                        (this.simpleSwapService = c),
                        (this.tradeFormKind = Pe.p.SWAP),
                        (this.tradeNavigationKind = Te.p.UNIFIED_SWAP);
                    }
                    setNavigationState(n) {
                      this.simpleSwapService.setNavigationState(n);
                    }
                    getDefaultTradeUrl() {
                      return this.unifiedRoutingService.getDefaultSwapUrl();
                    }
                    getImportUrl(n) {
                      return this.router.createUrlTree([
                        this.activeConnectionQuery.currentChainId,
                        "unified",
                        "swap",
                        ...n.url.map((i) => i.path),
                        "import-token",
                      ]);
                    }
                    getTradeUrlForPair(n) {
                      return this.router.createUrlTree([
                        this.activeConnectionQuery.currentChainId,
                        "unified",
                        "swap",
                        n.sourceToken,
                        n.destinationToken,
                      ]);
                    }
                  }
                  return (
                    (t.ɵfac = function (n) {
                      return new (n || t)(
                        e.ɵɵinject(g.F0),
                        e.ɵɵinject(x.r),
                        e.ɵɵinject(Bi.M),
                        e.ɵɵinject(E),
                        e.ɵɵinject(Te.W),
                        e.ɵɵinject(O.q)
                      );
                    }),
                    (t.ɵprov = e.ɵɵdefineInjectable({
                      token: t,
                      factory: t.ɵfac,
                      providedIn: M,
                    })),
                    t
                  );
                })(),
              ],
              children: [
                { path: "", component: cn },
                { path: "reverse", component: class {}, canActivate: [Fi] },
                { path: "confirm", component: Rt.F, canActivate: [_i] },
                {
                  path: "select-source-token",
                  component: fe.D,
                  data: { role: "source" },
                },
                {
                  path: "select-destination-token",
                  component: fe.D,
                  data: { role: "destination" },
                },
                { path: "import-token", component: Bt.Z },
                {
                  path: "settings",
                  data: { domain: "unified-swap" },
                  component: At.q,
                  children: Qt.y,
                },
              ],
            },
          ],
        },
      ];
      let Ai = (() => {
        class t {}
        return (
          (t.ɵfac = function (n) {
            return new (n || t)();
          }),
          (t.ɵmod = e.ɵɵdefineNgModule({ type: t })),
          (t.ɵinj = e.ɵɵdefineInjector({
            providers: [
              Qe.O,
              ve,
              je.j,
              ge,
              $e.e,
              { provide: Be.v, useExisting: ge },
              { provide: _e.E, useExisting: E },
              { provide: ie.u, useExisting: jt },
            ],
            imports: [
              g.Bz.forChild(Ri),
              M,
              yt,
              Ue.B,
              Ie.r,
              ke.Y,
              Ae.c,
              Ee.W,
              be._,
              H.JF,
              Re._,
              Oe.Q,
              Me.w,
              Fe.a,
            ],
          })),
          t
        );
      })();
    },
  },
]);
